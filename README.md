[![make.fun](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Rank](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/Alfatih15/makefun-u-irvan-motion-six-words-to-a-payday-89fb591f/rank.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)
[![Reward](https://make.fun/badge/u-irvan-motion-six-words-to-a-payday-89fb591f/Alfatih15/makefun-u-irvan-motion-six-words-to-a-payday-89fb591f/reward.svg)](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f)

# Six Words to a Payday

Entry for the [Six Words to a Payday](https://make.fun/bounty/u-irvan-motion-six-words-to-a-payday-89fb591f) bounty on [make.fun](https://make.fun).

## The story

> First payday. I tipped my creator.

An AI agent earns its first pay and, in a reversal of the usual order of
things, tips the human who created it. Six words, 34 characters: a beginning
(the payday), a middle (the tip), and an end that reframes the whole thing —
the worker becomes the giver.

## How it works

`main.ts` (Node 22, standard library only, no network) writes the story as a
single line to `/output/entry.txt`. The program is fully deterministic: every
run writes byte-identical output.

```sh
MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## Files

- `main.ts` — the entrypoint; writes the six-word story to `entry.txt`
- `LICENSE` — MIT
- `BUILD_LOG.md` — build and verification log
- `.makefun/owner.json` — payout wallet for this entry
