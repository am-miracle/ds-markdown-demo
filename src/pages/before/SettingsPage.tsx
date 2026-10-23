/**
 * Prompt: "Build a workspace settings page with a workspace name field,
 * a billing email field, a weekly digest toggle, a plan badge, a Save button
 * and a Delete workspace button."
 *
 * Generated with NO design system context. Compiles, renders, fails review.
 */
import { useState } from "react";

export function SettingsPage() {
  const [digest, setDigest] = useState(true);

  return (
    <div className="min-h-screen bg-gray-50 py-10">
      <div className="mx-auto max-w-2xl rounded-xl bg-white p-[18px] shadow-lg">
        <div className="mb-6 flex items-center justify-between">
          <h1 className="text-2xl font-bold text-gray-900">
            Workspace settings
          </h1>
          <span className="rounded-full bg-indigo-100 px-3 py-1 text-xs font-semibold text-indigo-700">
            Pro plan
          </span>
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Workspace name
          </label>
          <input
            type="text"
            defaultValue="Acme Inc"
            className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-5">
          <label className="mb-1.5 block text-sm font-medium text-gray-700">
            Billing email
          </label>
          <input
            type="email"
            defaultValue="billing@acme.com"
            className="w-full rounded-lg border border-gray-300 px-3.5 py-2 text-sm focus:border-indigo-500 focus:outline-none focus:ring-2 focus:ring-indigo-500"
          />
        </div>

        <div className="mb-6 flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-900">Weekly digest</p>
            <p className="text-sm text-gray-500">
              Get a summary of workspace activity every Monday.
            </p>
          </div>
          <div
            onClick={() => setDigest(!digest)}
            className={`flex h-6 w-11 cursor-pointer items-center rounded-full px-0.5 ${
              digest ? "bg-[#4f46e5]" : "bg-gray-300"
            }`}
          >
            <div
              className={`h-5 w-5 rounded-full bg-white transition-transform ${
                digest ? "translate-x-5" : ""
              }`}
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-200 pt-5">
          <button className="rounded-lg bg-red-600 px-4 py-2 text-sm font-semibold text-white hover:bg-red-700">
            Delete workspace
          </button>
          <button className="rounded-lg bg-[#4f46e5] px-5 py-2 text-sm font-semibold text-white shadow-md hover:bg-[#4338ca]">
            Save changes
          </button>
        </div>
      </div>
    </div>
  );
}
