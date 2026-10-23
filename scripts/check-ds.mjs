#!/usr/bin/env node
// Two checks:
//   node scripts/check-ds.mjs docs               tokens and components match the markdown
//   node scripts/check-ds.mjs drift <dir>        no default palette, hex, or arbitrary values
import { readFileSync, readdirSync, statSync } from "node:fs";
import { join } from "node:path";

const [mode, target] = process.argv.slice(2);

function walk(dir) {
  return readdirSync(dir).flatMap((name) => {
    const path = join(dir, name);
    return statSync(path).isDirectory() ? walk(path) : [path];
  });
}

function checkDocs() {
  const css = readFileSync("src/index.css", "utf8");
  const tokensDoc = readFileSync("docs/design-system/tokens.md", "utf8");
  const componentsDoc = readFileSync("docs/design-system/components.md", "utf8");
  const index = readFileSync("src/ds/index.ts", "utf8");

  const tokens = [...css.matchAll(/^\s*(--(?:color|radius|shadow)-[\w-]+):/gm)].map((m) => m[1]);
  const components = [
    ...index.matchAll(/export \{([^}]+)\} from/g),
  ]
    .flatMap((m) => m[1].split(","))
    .map((s) => s.trim())
    .filter(Boolean);

  const errors = [
    ...tokens
      .filter((t) => !tokensDoc.includes(`\`${t}\``))
      .map((t) => `token ${t} is not documented in tokens.md`),
    ...components
      .filter((c) => !componentsDoc.includes(c))
      .map((c) => `component ${c} is not documented in components.md`),
  ];

  report(errors, `${tokens.length} tokens, ${components.length} components checked`);
}

const DEFAULT_PALETTE =
  /\b(?:bg|text|border|ring|outline|divide|from|to|via|fill|stroke)-(?:slate|gray|zinc|neutral|stone|red|orange|amber|yellow|lime|green|emerald|teal|cyan|sky|blue|indigo|violet|purple|fuchsia|pink|rose|white|black)(?:-\d{2,3})?\b/;
const HEX = /#[0-9a-fA-F]{3,8}\b/;
const ARBITRARY = /\b[\w:-]+-\[[^\]\s]+\]/;
const OFF_SCALE = /\b(?:rounded-(?:sm|md|lg|xl|2xl|3xl)|shadow-(?:sm|md|lg|xl|2xl))\b/;

function checkDrift(dir) {
  const files = walk(dir).filter((f) => /\.(tsx|ts)$/.test(f));
  const errors = [];
  for (const file of files) {
    readFileSync(file, "utf8")
      .split("\n")
      .forEach((line, i) => {
        if (line.trim().startsWith("*") || line.trim().startsWith("//")) return;
        const hits = [
          [DEFAULT_PALETTE, "default palette class"],
          [HEX, "hex value"],
          [ARBITRARY, "arbitrary value"],
          [OFF_SCALE, "off-scale radius or shadow"],
        ];
        for (const [re, label] of hits) {
          const m = line.match(re);
          if (m) errors.push(`${file}:${i + 1}  ${label}: ${m[0]}`);
        }
      });
  }
  report(errors, `${files.length} file(s) scanned in ${dir}`);
}

function report(errors, summary) {
  if (errors.length) {
    console.error(errors.join("\n"));
    console.error(`\n${errors.length} problem(s). ${summary}`);
    process.exit(1);
  }
  console.log(`OK. ${summary}`);
}

if (mode === "docs") checkDocs();
else if (mode === "drift" && target) checkDrift(target);
else {
  console.error("usage: check-ds.mjs docs | drift <dir>");
  process.exit(2);
}
