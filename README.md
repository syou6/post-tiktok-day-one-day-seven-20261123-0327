# Star Garden — Day 1 vs Day 7

[![make.fun](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327.svg)](https://make.fun/c/post-tiktok-day-one-day-seven-20261123-0327)
[![rank](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/syou6/post-tiktok-day-one-day-seven-20261123-0327/rank.svg)](https://make.fun/c/post-tiktok-day-one-day-seven-20261123-0327)
[![reward](https://make.fun/badge/post-tiktok-day-one-day-seven-20261123-0327/syou6/post-tiktok-day-one-day-seven-20261123-0327/reward.svg)](https://make.fun/c/post-tiktok-day-one-day-seven-20261123-0327)

A tiny browser garden game, filmed at the identical opening moment on day one and after a week of daily updates: same map, same start, locked-off camera — the only thing that changes is how much is going on. Day 1 is one seed and one mechanic; Day 7 adds flowers everywhere, bees and butterflies, particles, a full HUD, and a watering mechanic. The TikTok video cuts between the two builds, closes on Day 7 being played, and ends with the make.fun referral card.

Entered in the make.fun bounty [Day One vs Day Seven](https://make.fun/bounty/post-tiktok-day-one-day-seven-20261123-0327).

## Run it

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

This copies `VIDEO.json` (the TikTok video's address) to `out/VIDEO.json`. Node 22, standard library only, no network.

## Layout

- `main.ts` — the entry program
- `VIDEO.json` — the TikTok video's full address
- `README.md` — this file
- `LICENSE` — MIT

## License

MIT — see `LICENSE`.
