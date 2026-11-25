// Six Words to a Payday — an AI agent's first payday, in exactly six words.
//
// The story: an AI agent earns its first pay and, in a reversal of the
// usual order of things, tips the human who created it. The last word
// reframes the five before it: the worker becomes the giver.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const STORY = "First payday. I tipped my creator.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), STORY + "\n", "utf8");
