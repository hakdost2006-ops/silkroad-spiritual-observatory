#!/usr/bin/env bash
set -euo pipefail

# Sites expects the Worker entry in dist/server and static files in dist/client.
# TanStack Start's Cloudflare output uses .output/server and .output/public.
project="${1:-.}"
output="$project/.output"
stage="$project/dist"

test -f "$output/server/index.mjs" || {
  echo "Missing .output/server/index.mjs. Run the production build first." >&2
  exit 1
}

test ! -e "$stage" || {
  echo "dist already exists. Remove only a known generated staging directory before retrying." >&2
  exit 1
}

mkdir -p "$stage/server" "$stage/client"
cp -R "$output/server/." "$stage/server/"
cp "$output/server/index.mjs" "$stage/server/index.js"
cp -R "$output/public/." "$stage/client/"

# Keep the Worker asset binding aligned with the hosted static directory.
sed -i.bak 's#"directory": "../public"#"directory": "../client"#' "$stage/server/wrangler.json"
rm "$stage/server/wrangler.json.bak"
