# NILA: Indigo Tides — first playable

A small pixel-art oyster-farming game set in the same Singapore waters where NILA sea-ages its wine. Lives on nila.wine. One screen, 15-minute sessions, runs in the browser.

## The tie-in (one sentence)

You run the oyster farm on the kelong next to NILA's underwater cellar; the oysters grow on the same cages as the bottles, and a good harvest earns you a bottle to sell at the tasting bar.

Why it works: real sea-aged bottles come up crusted with oysters and barnacles. The game makes that the point. Every NILA fact on the site becomes a mechanic: 6 months, 15 m depth, 24 °C.

## Core loop (what the player does, over and over)

Real-time, cozy, tap-only. No turns, no menus, no rule text. The first grey-box was turn-based and tested as confusing and dull (2026-11-03), so this replaced it.

1. **Feed**: tap an oyster, it chomps and grows. Oysters have faces, bob, and blink.
2. **Pick**: a fat oyster shows a gold dot; tap and it hops into the basket.
3. **Bath**: tap the bathtub, the oysters bubble for a few seconds and move to the clean tray. This is depuration, shown, not explained.
4. **Sell**: a customer paddles up holding a coin. Tap the clean tray to sell. Tapping the basket sells a raw one: allowed, but the inspector catches it.
5. **Reinvest**: tap the shop to buy a baby oyster. Later: bigger bath, more spots.

The NILA bottle sits under the water, growing oysters on its cage. It gathers algae; tap to clean, and it only ages while clean. Six months (about two real minutes) is the win screen: bottle crusted in oysters, gold text, "Reserve a bottle".

The tutorial is a bouncing "tap" arrow over the next thing, for the first three steps only.

## The hook: SFA spot checks

A stern auntie in an SFA cap paddles in every half minute or so. If you sold any raw oysters since her last visit, she frowns, fines you, and paddles off. If not, she smiles and you get a stamp. Funny, not punishing: the player always chose the shortcut. Storms and water temperature are cut from the first version.

## Side income: fish

A single fish trap you can bait once per tide. Pays a little cash, nothing else. It exists so a player who just got fined has a way back. Cut it if the first version runs long.

## Not in the first version

- Breeding and genetics (version 2; a second economy on its own)
- Weather beyond one storm event
- Multiple farms, staff, boats, story characters
- Leaderboards, accounts, saving to a server (localStorage is enough)

## Screen

One fixed scene, 480×270 pixels scaled up (16:9, matches the site's hero). Left to right: kelong hut (the shop) with walkway, basket and clean tray; the bath on a float below it; the farm, three rope lines between two buoys with 12 dropper spots; the NILA bottle in its cage at the right. Boats arrive on the water line. Top strip: cash, oysters owned, stamps. Tap only, so it works on phones.

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
- Oyster prices and growth times: start with 4 tides per growth stage, S$2 per oyster, S$40 per spat line, and tune in step 1.
- Name: "Indigo Tides" is a placeholder.
