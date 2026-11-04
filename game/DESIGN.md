# NILA: Indigo Tides — first playable

A small pixel-art oyster-farming game set in the same Singapore waters where NILA sea-ages its wine. Lives on nila.wine. One screen, 15-minute sessions, runs in the browser.

## The tie-in (one sentence)

You run the oyster farm on the kelong next to NILA's underwater cellar; the oysters grow on the same cages as the bottles, and a good harvest earns you a bottle to sell at the tasting bar.

Why it works: real sea-aged bottles come up crusted with oysters and barnacles. The game makes that the point. Every NILA fact on the site becomes a mechanic: 6 months, 15 m depth, 24 °C.

## Cast

**Darren** is the farmer you play. **Joji** is the golden retriever (Build › Decor › Joji, his bed; crew walk 20% faster, he chases otters off the fish cages). The crew go by their jobs: Harvester, Pen keeper, Carpenter. Hover over anyone for a name tag.

## Growing with the level

Every level opens something, so there is always a next thing to look forward to. Hover the level bar to see what the next level brings and how much XP is left.

- **The house grows.** After the Bigger shed (bought), it grows on its own: a two-storey **kelong house** at level 6 (balcony, laundry line, TV aerial) and a **grand kelong house** at level 10 (tiled roof, carved balconies, red lanterns that glow at night, a NILA signboard). Same footprint, so nothing on the deck moves. Without the Bigger shed the level-up says to build it first. The shed panel takes the house's name. Sprites `shed-tier3`, `shed-tier4`.
- **More to farm** (pens, feed → wait → collect, the Pen keeper tends them too): Mussel lines (lv4, S$20 seed, 40 min, S$220: green mussels on ropes under a bamboo pole), Prawn pen (lv6, S$50, 90 min, S$650: tiger prawns), Lobster traps (lv9, S$120, 3 h, S$1700: spiny lobsters by two traps). Each fills out as it grows and goes in the album. Sprites `stock-*`.
- **More decor**: Drying rack (lv4, +6 charm), Red lanterns (lv5, +7, glow at night), Mahjong table (lv6, +9), Rattan sofa (lv7, +10), Beacon (lv9, +10, a lamp that sweeps the water at night), NILA neon sign (lv11, +15, flickers pink). Sprites `dec2-*`.

## Things to decide and do (2026-11-04)

- **Orders** (board button, from level 2): up to three open at once (four with the Market), from Singapore buyers (Ah Huat Seafood, Tekka wet market, NILA tasting bar…) wanting so many of one oyster, fish or pen haul by a deadline, with a bonus on top of the normal sale (80% of the market value for oysters, 60% for the rest). Anything harvested, collected or caught counts, by you or the crew. A lapsed order just goes; a new one arrives one to three minutes after one closes. Each new order arrives as a pop-up card from the person asking, with their portrait (`buyer-1…8`) and their own line: Uncle Huat (Ah Huat Seafood), Chef Ah Seng (Changi Village zi char), Auntie Rosnah (Tekka wet market), Ah Ma Lim (Ubin kampung kitchen), Mei (NILA tasting bar), Chef Raju (chilli crab shop), Chef Laurent (Marina hotel kitchen), Auntie Kim (the kelong next door). "Can! I'll do it" takes it and starts its clock; "Sorry, not this time" passes, and the next request comes a minute later. When an order is done the same person pops up in the corner to say thanks. A dot on the board button counts open orders, pink when one has under five minutes left.
- **Hands-on moments**: every 25–50 s a fishing spot boils by the deck; tap it, then tap again while the needle is in the gold to land a fish (S$ and XP, 15% chance of a big one, counts for orders and the album). Coconuts can be caught as they fall (S$16, double the pick-up).
- **Visitors** (from level 3, daytime): a tour boat brings two to four day-trippers (four new chibis, `guest1–4-{idle,walk,photo}`) to the buyer's dock. Each admires a piece of decor or two (photo flash, heart), eats a clean oyster from the tank at 1.5× market price, tips 3 + 0.4 × charm, and leaves. They come every 420 − 4 × charm seconds (at least two minutes); more charm, more visitors. Sales wait while the tour boat is in.
- **Storms** (from level 3, every 15–30 minutes of play): a banner gives two minutes' warning; tap it to secure the farm (S$20 + S$10 a pen). The storm lasts 45 s: dark sky, rain, lightning and thunder, crew shelter by the shed. Unsecured, everything growing is set back a quarter of its time and three planks break; secured, one plank.
- **Festivals** by real date (2026–2028 dates in code; `?fest=cny|raya|natday|midautumn|deepavali` previews): Chinese New Year (red lanterns, fireworks, prawns/lobsters/pomfret +40%), Hari Raya Puasa (pelita and ketupat), National Day (red-and-white flags, fireworks), Mid-Autumn (paper lanterns, moon), Deepavali (diyas along the deck, a rangoli by the tank). All +10% sales.
- **Album sets**: Oyster connoisseur, Wet market regular, Friend of the strait, Treasure hunter; finishing one pays out and adds +5 charm. Shown beside the album.
- **Guided start**: one hint at a time across the top (plant, harvest, sell, send the bumboat, build a fish cage, hire crew), with arrows; skipped for saves already at level 4.
- **Phones**: press and hold anything to see its name tag or tooltip; tap the level bar to see what the next level unlocks.
- **Save code** (shed panel): Copy save code puts a short code on the clipboard; Load save code on another device asks before replacing that farm.
- **Balance**: pens and fish pay about double what they did so a pen is worth its four tiles (roughly S$280–580 an hour hands-off, shown in each build tooltip; the species picker shows S$/h per tile or cage). Oysters stay the best per tile but need replanting and selling.

## Core loop (what the player does, over and over)

Farm-sim, real clock, drag to look around, tap to act. Oysters grow while the tab is closed, so a visit is a minute or two and the game runs for days. Three earlier versions (turn-based grey-box, a real-time feed/bath/sell scene, a one-screen raft) tested as confusing, shallow or too thin (2026-11-03); this replaced them.

1. **Plant**: tap an empty tile in a net pen, pick a species from the strip, pay the spat price. The farmer walks over and drops it in.
2. **Wait**: each species has a real-clock timer: Rock 1 min, Pacific 5 min, Kumamoto 30 min, Pearl 4 h, Belon 12 h. A bar under each oyster shows progress; tap a growing one to see the time left.
3. **Harvest and depurate**: a ready oyster bounces with a gold dot. Tap it, the farmer walks over and puts it in the depuration tank on the shed platform (XP now, no coins yet). As on a real farm, oysters must purge in UV-cleaned seawater before sale: each sits 3 minutes (real tanks run 24–48 h), then the tank shows a gold dot and "sell N!". Selling is a little scene: a buyer's boat motors in to the dock below the platform, the farmer (or Harvester) carries the clean oysters down in a crate, loads them aboard, the coins land and the boat motors off. The tank holds 6, upgraded from its own panel to 16 (S$300, lv2) and 40 (S$1200, lv4); a full tank blocks harvesting until you sell. The Harvester worker also sells clean oysters when nothing is ready. Leave it twice its grow time past ready and it withers (grey shell, tap to clear, no payout). The shed doubles that grace.
4. **Build**: every item does something, shown in the build bar: lantern (withers 25% slower), bench (+1 quest a day), palm (+5% sales each, max 3), flag (sampan 20% faster), cat (rare finds 2× likelier), market (+10% sales), shed (withers 2× slower), and two pens: a fish cage on open sea and a crab pen on the platform. An empty fish cage opens a picker of what Singapore kelongs actually rear and wet markets sell: seabass (20 min, S$20 → S$110), golden pomfret (1 h, S$50 → S$330), golden snapper (3 h, S$120 → S$900), grouper (8 h, S$300 → S$2600); each is its own album entry and sampan catches are one of them too. A Dog (S$350, lv3) places a dog bed; a golden retriever then runs about the platform and walkways, trots after the farmer, sits, sniffs and naps on his bed, and the crew walks 20% faster. The crab pen fills its whole pen; its five crabs mostly sit still, now and then raise a claw, or scuttle a short way sideways (about 6 px/s) and settle for 3–9 s, like real mud crabs; fish swim the whole net of a stocked pen; the Cat item now places a basket and a chibi orange tabby lives on the platform: she naps 25–70 s in one spot (little z's), wakes with a stretch, sits, then pads to a new plank and naps again; sometimes she fetches the dog instead and the two chase each other in circles for 6–10 s with woofs and mews. Pens are feed → wait → collect, like a second crop; every job has a visible work beat before it completes: the farmer (or worker) stands beside the target, faces it, and shows a work sprite; where none exists yet a code-drawn tool is the fallback: a hammer that swings with a tok-tok sound and sawdust for fixing planks, a tipping bucket and pellets for feeding, a bobbing basket with sparkles for collecting and harvesting, an oyster lowered into the water for planting (`WORK` table).
5. **Level up and expand**: XP unlocks species and buildings. The farm grows the way the real one does, by bolting on another walkway: a dashed outline below and to the right of the farm shows the next pen row and pen column with its price (S$150 lv2, S$500 lv3, S$1500 lv5, S$4000 lv7, S$7000 lv8, S$10000 lv9, S$14000 lv10, S$20000 lv12). Start 2 pens, max 30 (6 pen rows × 5 pen columns). A walkway grown over deck tiles takes them back (S$40 refunded each) and moves anything on them to the platform. Railings, flower boxes, bunting and string lights follow the deck's outer edge facing open sea, wherever it has grown, never where the deck meets a walkway, the jetty or a mooring. The deck grows a tile at a time: Build › Farm › Deck tile (S$40) goes on any open water touching the deck or a walkway, and build mode stays on so you can lay a run of them (not under the shed, in a pen, in the area future pens will take, or in the last three rows). The bumboat berth, buyer's dock and jetty sit one row past the lowest deck in the shed's columns and move out as the deck grows, so no water channel gets trapped. A refused tile says why. Decor goes on any deck or walkway tile, including new deck behind the shed. The shed only blocks the tiles under its picture: the small one 2×2 in the back corner, the big one columns 3–4 from the back edge forward (it runs back over the water), so the corner behind the big shed is free for decor. Saves from the row-at-a-time version keep their rows as deck tiles and their moorings where they were. Every pen is 2×2 tiles; each tile takes an oyster crop, or the whole pen takes a fish pen, crab pen or the NILA cellar.

   **Shed upgrades** (shed panel, bought once each): More drums (S$400, lv2, planks break half as often), Bigger shed (S$600, lv3, hire more than one worker), Generator (S$1200, lv5, walkway lamps at night, everything grows 10% faster), Ubin jetty (S$2500, lv6, a pier and the 4 h bumboat market run to Pulau Ubin).
6. **Quests**: three a day, drawn from what the player can actually do ("Harvest 9 Rock", "Collect from pens ×2", "Build anything"), paid in coins and XP.
7. **Album**: a collection book of every species, pen catch and bottle, plus two rare harvest drops (pearl 1-in-20, gold shell 1-in-100) that pay a bonus. First discovery of anything gets a banner.
8. **Bumboat**: an idle trip from the mooring by the shed platform. Pay to send it out for 2 or 8 hours (or the 4 h Ubin market run once the jetty is built); come back for a crate of coins, fish for the album and a chance at a rare. Something is always "due" when the player returns.

Palette (2026-11-03): tropical day is the default look: turquoise sea, lime grass, cream sand, warm cliff faces; dusk is gold, night is deep blue rather than black. Game starts at day.

Water (2026-11-03): Maldives lagoon on a MapleStory base, after the noise-wave version read as blotchy: pale aquamarine shallows around the kelong and raft fading to deep teal, a baked 12-frame lattice of meandering sunlight caustics by day, flat colour otherwise, a few soft lighter patches that breathe, sparse thin white ripple lines that drift and fade, tiny plus-shaped sparkles by day, a lighter shallow glow around the kelong and raft; fish and jellies are dim blue shapes under all of it. No photo texture, so it sits with the pixel art.

Off duty (2026-11-03): when nobody has a job, each character every few seconds either looks around, wanders, sweeps the deck, or goes properly off duty for 8–12 s: heads anywhere on the platform or the farm walkways, preferring a spot at least 4 tiles from everyone else, and sits on an edge facing open water and fishes (every few seconds a bite splashes the water; four times in ten a fish comes up on the line, S$5 and into the album, otherwise "got away…"), jumps in for a proper swim: front-crawls between a few points of open water with alternating stroke frames and a wake, stops to splash about or float on their back, crawls back and climbs out after about 18 s, lies down for a nap, or sits beside a net pen mending its net. Or they use what's around them: pet the dog or the cat (heart bubble, "good boy~" / "purr~"), nap in the hammock, lounge in the deck chair or sit on the bench (each drawn with that person properly in it: `lounge-<chair|hammock|bench>-<who>`), water the bougainvillea and papaya, or take a kayak out for a paddle. When a sea visitor comes into view, two free crew walk to the nearest edge to watch it go by; with no dog about, someone usually runs over to shoo the otters ("hey! our fish!"). Each has its own chibi pose per character (`*-idle-{fish,rest,mend}`, `*-swim-{a,b,play,float}`). Any tap or real job cancels it.

Visual juice (added 2026-11-03): animated wave texture, animated foam where sea meets island, caustic light drifting over the raft nets, lamp reflections on the water at night, two-tone cliff faces with a wet line under the island, wet sand at the shore, drop shadows under everything, a squash-and-settle when an oyster is planted, and the harvested oyster hops up and fades.

The NILA cellar is a buildable sea object at level 5. Lower a crate of NILA bottles for S$100: an orange marker buoy floats on the pen and the crate sinks out of sight on its rope, seen dim and blue through the water. It ages one "month" per real hour and gathers barnacles, weed and a starfish as it goes (`cellar-crate-0/1/2`, `cellar-buoy`); at six months it comes up to the surface glowing, ready to tap. Six months is the win screen: bottle crusted in oysters, gold text, "Reserve a bottle" (opens nila.wine) and "Keep farming" (lower another; bottle count in the HUD).

The hut is home. Tapping it opens a panel with the daily gift (S$25 × level and 10 XP, once a real day; a bouncing gold dot shows when it is ready) and two workers to hire: a Harvester (S$400, level 3) who harvests ready oysters and clears withered ones, and a Pen keeper (S$700, level 4) who feeds and collects pens, and a Carpenter (S$600, level 4) who fixes planks. Characters are chibi, MapleStory-proportioned (head about half the height, big eyes), regenerated 2026-11-03 so the whole cast matches. Each worker has their own look (carpenter: red bandana and tool belt; pen keeper: green apron and feed bucket; harvester: straw hat, sarong, basket on his back) and a two-frame work animation of their actual job (hammering a plank, scooping and tossing feed, hauling oysters into the basket); the farmer has his own work frames for hammering, feeding, harvesting, planting and sweeping (`sprites/wk-*`, `farmer-work-*`). They walk the same paths, pick the nearest job every 1.5 s, and are a one-off cost. Coins earned float above the head of whoever earned them.

The farmer only walks on land, the deck and the raft (breadth-first path over those tiles); the deck is the one bridge from island to raft.

Upkeep, like a real kelong: a plank breaks every 30 real minutes (up to 4 holes). A hole shows the sea through the deck, can't be walked on or built on, and can cut the path to the raft ("fix the planks first"). Tap it, pay S$20, and the farmer walks over and fixes it; a Carpenter (S$600, level 4) does this on his own.

On return, a toast says how many oysters finished or withered, and how many planks broke, while you were away. The tutorial is one bouncing "tap" arrow over the first empty plot, then over the first ready oyster.

**Build bar tabs** (2026-11-04): Farm (pens, market, ice store), Decor (lantern, bench, palm, flag, cat, dog, bougainvillea, papaya, wind chimes, deck chair, hammock, kayaks) and Move. Move picks up any decoration, the generator, the depuration tank or an unstocked pen's fittings and puts it on any valid tile.

**Charm**: every decoration carries charm points, and the shed's Looks row adds more (railings S$300, bunting S$250, flower boxes S$400, string lights S$500, lit at night). Each charm point adds 0.5% to sales, capped at +20%; the build bar and shed panel show the total.

**Flooring**: the platform and walkways are drawn as individual sun-bleached grey boards, four per tile, running continuously across the deck with staggered butt joints every 2–3 tiles, dark gaps, faint grain and nail heads; walkway boards run across the direction of travel.

**Little life** (2026-11-04): palm fronds sway, the flag waves, the lantern, wind chimes and hammock swing, the potted plants and the umbrella nod, the cat breathes. Each palm drops a coconut every one to three minutes (at most two lying about); it thuds onto a nearby plank and can be tapped for S$8 and an album entry. Idle characters within a few tiles wander over, pick it up, and stand drinking it through a straw for a few seconds ("ahh~"). The palm is drawn 1.35× so it reads as a tall coconut palm.

**Dinner** (every evening): from late dusk into the night the crew set up a charcoal grill (satay and a fish on the grate, coals glowing, smoke and sparks, a warm pool of light) on the most open plank near the middle of the platform, with a table of chilli crab, rice, satay and drinks and a few plastic stools. Everyone wraps up what they were doing, gathers round, faces the grill and eats satay off the stick, with the odd "shiok!", "sedap!" or "cheers!"; workers pause their jobs, the dog sits by the grill hoping for scraps, and the coals sizzle. When it gets late it all fades away and they go back to normal. A crocodile visit cancels dinner.

**Crocodile** (rare): every 5–15 minutes, if there is a quiet edge plank at least four tiles from everyone, an estuarine crocodile swims in (only eyes and ridges showing), hauls out, basks for one to two minutes with its jaws opening now and then, and slides back out to sea. People will not walk onto it or rest near it, nobody swims while it is about (swimmers head back), the dog barks at it, and the first sighting is a rare album entry. Saltwater crocodiles really are seen around Pulau Ubin.

**Sea life passing by**: every 2–5 minutes one Singapore sea animal swims past the farm, along the south edge or down the west side of the platform (usually whichever is nearer the camera). Hawksbill turtle (most common; it comes up for a breath every few seconds), blacktip reef shark (just the black-tipped fin above a dim shadow, with a wake), a pod of three pink Indo-Pacific humpback dolphins taking turns to leap, and the rare dugong from the Chek Jawa seagrass rolling its back up. The first time each comes into view the nearest crew member calls it out and it goes in the album. Tap one for a line about it. Sprites `sea2-*`.

**Otters** (every 5–12 minutes): a family of two or three smooth-coated otters swims to the edge plank nearest a stocked fish cage, scampers along the walkway, looks round, and the lead otter sits and eats a fish (S$10) unless the dog runs at them first (it always tries) or you tap them ("shoo!"). With no stocked cage they have a look round and leave. Sprites `otter-*`.

**Horseshoe crab** (every 3–7 minutes): one crawls into an oyster pen. After a few seconds the nearest free crew member lifts it out and carries it back to the sea (+3xp, album); tap it to have the farmer do it. Sprites `hcrab-*`.

## Not in this version

- Neighbours, gifting, visiting other farms
- The SFA inspector, depuration bath, customers (could return as events)
- Breeding and genetics, weather
- Leaderboards, accounts, saving to a server (localStorage is enough)

## Screen

640×360 logical pixels, rendered at an integer multiple for sharp text, isometric 64×32 tiles on a 22×22 map (16×16 before 2026-11-04; older saves re-key their deck tiles and widen the crop grid on load) you drag around. Modelled on the real farm off Pulau Ubin (photo `Ourfarm.HEIC`, 2026-11-04): everything floats. The shed platform sits west (grey sun-bleached planks on blue plastic drums, the blue plywood shed with a rusty tin roof as a 2×2 object, a spare drum, the generator once built); the farm grid runs east (walkway lanes every third row and column, 2×2 net pens between them with black mesh and a timber rail where the net hangs). The bumboat moors below the platform and motors out to the lower left. Pulau Ubin's shoreline (rainforest hills, palms, mangrove roots, two stilt houses) sits on the horizon past the north edge, with sky behind it. Ground tiles are drawn in code; characters, shed, generator, drums, bumboat, crates and the shoreline are AI-generated then sliced (`sprites/farmer-*`, `wk-*`, `shed-*`, `boat-bumboat`, `bg-ubin`).

## Sound

Everything is synthesized in the browser; there are no audio files. It starts on the first tap and the note icon in the HUD mutes it all.

- **Music**: an island-lounge loop at 88 BPM in F (Fmaj7, Dm7, B♭maj7, C7): a marimba melody from the F major pentatonic with echo, a soft filtered pad, plucked bass, an off-beat ukulele strum, a shaker and a little bell sparkle. Four phrases (A A B C) so the tune comes back. At night the shaker stops, the strum thins out and the melody drops an octave and plays half as often.
- **Effects**, MapleStory-style: soft bells and bubbly pops in a major key, never buzzy. A coin is a two-note "tring", building or hiring a quick major arpeggio, levelling up a five-note fanfare, water a sine bloop with a hush of spray, a wrong tap a gentle two-note "uh-uh", the hammer a wooden knock, a coconut a soft bonk, the dog a little woof-woof and the cat a mew.

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
