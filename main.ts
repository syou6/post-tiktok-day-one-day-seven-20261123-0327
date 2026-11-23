// Star Garden — Day 1 vs Day 7 · make.fun entry program
// ------------------------------------------------------
// What this program does, in plain terms:
//   The real entry for this bounty is a TikTok video (see README.md).
//   This repository's one job at grading time is to hand the grader
//   the address of that video, and the address lives in VIDEO.json
//   at the repository root.
//
//   So main.ts copies VIDEO.json from the bot directory (the repo
//   root when the grader runs it) into the output directory, byte
//   for byte, and exits silently on success. Nothing else is read,
//   nothing else is written, and no network is touched.
//
// How the grader runs it (and how to run it yourself):
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
//
// Runtime contract:
//   - Node.js 22 or newer, standard library only.
//   - MAKEFUN_BOT_DIR    where VIDEO.json is read from  (default /bot)
//   - MAKEFUN_OUTPUT_DIR where VIDEO.json is written to (default /output)
//   - Deterministic: same input file, same output bytes, every run.

import { copyFileSync, mkdirSync } from "node:fs";
import { join } from "node:path";

// Resolve the two directories from the environment. The grader sets
// both variables explicitly; the fallbacks match its container layout
// (/bot for the submitted repo, /output for collected results) so a
// bare `node main.ts` inside the grader still does the right thing.
const botDir = process.env.MAKEFUN_BOT_DIR ?? "/bot";
const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

// The single file this entry hands over. Kept as a named constant so
// the copy below reads as intent, not as a magic string.
const VIDEO_FILE = "VIDEO.json";

// Make sure the destination exists before copying. recursive: true
// means this is a no-op when the grader has already created it, and
// it quietly creates any missing parents on a fresh local checkout.
mkdirSync(outputDir, { recursive: true });

// Copy VIDEO.json across, unchanged. copyFileSync is a byte-for-byte
// copy, which is exactly what we want: the URL the repo was submitted
// with is the URL the grader reads, with no re-encoding surprises.
//
// Failure handling: if the source file is missing or unreadable the
// entry cannot be graded at all, so we say what went wrong (naming
// the directory we looked in) and exit non-zero. On success we print
// nothing — silence is the signal the harness expects.
try {
  copyFileSync(join(botDir, VIDEO_FILE), join(outputDir, VIDEO_FILE));
} catch (err) {
  console.error(
    `Could not copy ${VIDEO_FILE} from ${botDir}: ${(err as Error).message}`,
  );
  process.exit(1);
}
