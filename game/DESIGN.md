# NILA: Indigo Tides — first playable

A small pixel-art oyster-farming game set in the same Singapore waters where NILA sea-ages its wine. Lives on nila.wine. One screen, 15-minute sessions, runs in the browser.

## The tie-in (one sentence)

You run the oyster farm on the kelong next to NILA's underwater cellar; the oysters grow on the same cages as the bottles, and a good harvest earns you a bottle to sell at the tasting bar.

Why it works: real sea-aged bottles come up crusted with oysters and barnacles. The game makes that the point. Every NILA fact on the site becomes a mechanic: 6 months, 15 m depth, 24 °C.

## Core loop (what the player does, over and over)

Farm-sim, real clock, drag to look around, tap to act. Oysters grow while the tab is closed, so a visit is a minute or two and the game runs for days. Three earlier versions (turn-based grey-box, a real-time feed/bath/sell scene, a one-screen raft) tested as confusing, shallow or too thin (2026-11-03); this replaced them.

1. **Plant**: tap an empty raft plot, pick a species from the strip, pay the spat price. The farmer walks over and drops it in.
2. **Wait**: each species has a real-clock timer: Rock 1 min, Pacific 5 min, Kumamoto 30 min, Pearl 4 h, Belon 12 h. A bar under each oyster shows progress; tap a growing one to see the time left.
3. **Harvest**: a ready oyster bounces with a gold dot. Tap it, the farmer walks over, coins and XP. Leave it twice its grow time past ready and it withers (grey shell, tap to clear, no payout). The shed doubles that grace.
4. **Build**: every item does something, shown in the build bar: lantern (withers 25% slower), bench (+1 quest a day), palm (+5% sales each, max 3), flag (sampan 20% faster), cat (rare finds 2× likelier), market (+10% sales), shed (withers 2× slower), and two pens: a fish cage on open sea and a crab pen on the platform. An empty fish cage opens a picker of what Singapore kelongs actually rear and wet markets sell: seabass (20 min, S$20 → S$90), golden pomfret (1 h, S$50 → S$240), golden snapper (3 h, S$120 → S$600), grouper (8 h, S$300 → S$1600); each is its own album entry and sampan catches are one of them too. Pens are feed → wait → collect, like a second crop; every job has a visible work beat before it completes: the farmer (or worker) stands beside the target, faces it, and shows a work sprite; where none exists yet a code-drawn tool is the fallback: a hammer that swings with a tok-tok sound and sawdust for fixing planks, a tipping bucket and pellets for feeding, a bobbing basket with sparkles for collecting and harvesting, an oyster lowered into the water for planting (`WORK` table).
5. **Level up and expand**: XP unlocks species and buildings; the raft grows 3×3 → 7×7 for coins at level gates.
6. **Quests**: three a day, drawn from what the player can actually do ("Harvest 9 Rock", "Collect from pens ×2", "Build anything"), paid in coins and XP.
7. **Album**: a collection book of every species, pen catch and bottle, plus two rare harvest drops (pearl 1-in-20, gold shell 1-in-100) that pay a bonus. First discovery of anything gets a banner.
8. **Sampan**: an idle trip from the deck. Pay to send it out for 2 or 8 hours; come back for a crate of coins, fish for the album and a chance at a rare. Something is always "due" when the player returns.

Palette (2026-11-03): tropical day is the default look: turquoise sea, lime grass, cream sand, warm cliff faces; dusk is gold, night is deep blue rather than black. Game starts at day.

Visual juice (added 2026-11-03): two-tone water shimmer, animated foam where sea meets island, caustic light drifting over the raft nets, lamp reflections on the water at night, two-tone cliff faces with a wet line under the island, wet sand at the shore, drop shadows under everything, a squash-and-settle when an oyster is planted, and the harvested oyster hops up and fades.

The NILA cellar is a buildable sea object at level 5. Lower a bottle for S$100; it ages one "month" per real hour, crust growing. Six months is the win screen: bottle crusted in oysters, gold text, "Reserve a bottle" (opens nila.wine) and "Keep farming" (lower another; bottle count in the HUD).

The hut is home. Tapping it opens a panel with the daily gift (S$25 × level and 10 XP, once a real day; a bouncing gold dot shows when it is ready) and two workers to hire: a Harvester (S$400, level 3) who harvests ready oysters and clears withered ones, and a Pen keeper (S$700, level 4) who feeds and collects pens, and a Carpenter (S$600, level 4) who fixes planks. Each worker has their own look (carpenter: red bandana and tool belt; pen keeper: green apron and feed bucket; harvester: straw hat, sarong, basket on his back) and a two-frame work animation of their actual job (hammering a plank, scooping and tossing feed, hauling oysters into the basket); the farmer has his own work frames for hammering, feeding, harvesting, planting and sweeping (`sprites/wk-*`, `farmer-work-*`). They walk the same paths, pick the nearest job every 1.5 s, and are a one-off cost. Coins earned float above the head of whoever earned them.

The farmer only walks on land, the deck and the raft (breadth-first path over those tiles); the deck is the one bridge from island to raft.

Upkeep, like a real kelong: a plank breaks every 30 real minutes (up to 4 holes). A hole shows the sea through the deck, can't be walked on or built on, and can cut the path to the raft ("fix the planks first"). Tap it, pay S$20, and the farmer walks over and fixes it; a Carpenter (S$600, level 4) does this on his own.

On return, a toast says how many oysters finished or withered, and how many planks broke, while you were away. The tutorial is one bouncing "tap" arrow over the first empty plot, then over the first ready oyster.

## Not in this version

- Neighbours, gifting, visiting other farms
- The SFA inspector, depuration bath, customers (could return as events)
- Breeding and genetics, weather
- Leaderboards, accounts, saving to a server (localStorage is enough)

## Screen

640×360 logical pixels scaled up, isometric 64×32 tiles on a 16×16 map you drag around. The kelong sits top-left: a timber platform on stilts over open water, like the real Singapore kelongs (planks in code, dark stilt faces and posts under the lower edges, hut as a 2×2 object), a one-tile deck joins it to the raft, the raft grows toward the lower right, and open sea around it is where fish cages and the cellar go. Ground tiles are drawn in code; the farmer, buildings, pens and withered oyster are AI-generated then sliced (`sprites/farmer-*`, `bld-*`, `pen-*`, `sp-*`). Top strip: cash, level with XP bar, raft size, bottles, quests and build buttons, mute. Day/night is a colour tint over the whole scene plus lantern and buoy glows.

Dusk the whole time: gradient sky, twinkling stars, a low sun with a glitter path on the water, drifting clouds, island silhouettes, gulls. Under the surface: fish of three kinds, jellyfish, rising bubbles, seaweed and rocks on the bed, a crab on the walkway, lamp glow on the hut, ripples where you tap, vignette at the edges. All ambient life is cosmetic and never saved.

Time passes: a full dusk → night → dawn → day cycle every 4 minutes. At night the hut lamp, window and buoy lamps glow and a moon lights the water; by day the sky is blue and the stars are gone.

Sound is synthesized in the browser (no audio files): a low sea wash under everything, a chomp when feeding, a pop on harvest, a two-note coin on a sale, a splash for the bath, a chime for a clean inspection, a buzz for a fine. It starts on the first tap and the note icon in the corner mutes it.

## Art direction (custom pixel art)

- Palette from the site: indigo water `#131d2b` → `#1b2838`, sand `#f5f0e8`, gold `#c9a96e` / `#d4bc8a`, deep gold `#a8884f`, near-black `#0c0c0e`. Add two greens for mangrove and algae, one coral for the inspector boat.
- Dusk light the whole time (the site's "golden sunset over the island" photo). Water animates in 3 frames.
- Sprite list, in the order to make them (the prototype's code-drawn shapes are the placeholders):
  1. Oyster, 3 sizes × (idle, blink, chomp) — the whole game is this sprite
  2. Customer in boat (idle, happy), coin bubble
  3. SFA auntie in boat (idle, smile, frown), cap with badge
  4. Bathtub (empty, bubbling 2 frames), basket, clean tray
  5. Kelong hut with shop sign, walkway planks
  6. NILA bottle in cage, 4 crust stages, algae overlay
  7. Water tiles (3 frames), sun, win-screen bottle (large)
  Each sprite: generate at 4× against the palette, downscale, hand-clean in Aseprite, export PNG into `game/sprites/`.
- Style reference: 1-bit outlines, 4 to 6 shades per object, no anti-aliasing. Aseprite files committed next to the exports.

## Tech

- Plain TypeScript + HTML canvas, no game engine. Vite already builds the site; the game lives at `/game` as a second entry.
- Game state is one object, saved to localStorage on every action.
- Target: under 1 MB total, loads in under a second on 4G.

## Order of work

1. Grey-box the loop with coloured rectangles. Play it until the economy feels right (an evening).
2. Draw the sprites against the real scene (the longest part; depends on who draws).
3. Add the inspector, the storm, the win screen.
4. Put it on nila.wine/game with a "Reserve a bottle" link on the win screen.

## Open decisions

- Pixel art: AI-generated, then hand-cleaned in Aseprite (decided 2026-11-03). Generate each sprite against the palette above at 4× size, downscale, fix outlines by hand.
- Species timers, prices and XP curve (30·(L−1)^1.7) are first guesses in the `SP`, `EXPAND`, `NILA` tables at the top of prototype.html; tune after a few days of real play.
- Species look: the same oyster sprites tinted per species. Real per-species art later if the tints read as samey.
- Name: "Indigo Tides" is a placeholder.
