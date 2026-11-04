# Online saves: setup

The game saves on the player's device by default. Fill in two values and players can also sign in, by email link or Google, to keep their farm in the cloud and carry on from another phone or computer.

## 1. Create the Supabase project (about 5 minutes)

1. Sign up at supabase.com, then click **New project**. Pick the region closest to your players (Singapore).
2. Open **SQL Editor → New query**, paste the contents of `supabase/schema.sql`, and click **Run**. This creates the `saves` table. Its security rules mean each player can only read and write their own farm.
3. Open **Project Settings → API**. Copy two values:
   - the **Project URL**
   - the **anon / publishable** key. Never use the `service_role` key: it bypasses the security rules.

## 2. Turn it on in the game

Open `game/cloud-config.js` and paste the two values:

```js
window.TIDES_CLOUD = {
  url: 'https://YOUR-PROJECT.supabase.co',
  anonKey: 'YOUR-ANON-KEY',
};
```

The anon key is meant to be public, so it's fine in the code.

## 3. Sign-in methods

- **Email link**: works straight away. Under **Authentication → URL Configuration**:
  - set **Site URL** to wherever the game runs, for example `http://localhost:5174/prototype.html` while testing;
  - add the same address under **Redirect URLs**.
- **Google** (optional):
  1. In Google Cloud Console, create an OAuth client (type: web application).
  2. Add Supabase's callback URL, shown under **Authentication → Providers → Google**, as an authorised redirect URI.
  3. Paste the Google client ID and secret into that Supabase page and switch Google on.

Supabase's built-in email sender only sends a few emails an hour. Before real players arrive, add your own email service under **Authentication → Emails → SMTP**.

## 4. When the game goes public on the site

The site's `vercel.json` sets a Content-Security-Policy. Add your Supabase address to `connect-src`, for example `connect-src 'self' blob: https://YOUR-PROJECT.supabase.co wss://YOUR-PROJECT.supabase.co`, or the browser will block sign-in. (`cdn.jsdelivr.net`, where the Supabase library loads from, is already allowed in `script-src`.)

## How it behaves

- **Where:** the shed panel has **Sign in to save online**, next to the save-code buttons.
- **Saving:** once signed in, the farm uploads every minute and whenever the page is hidden. It always saves on the device too.
- **Two different farms:** if the account holds a different farm from the device (another level, or saved more than two minutes apart), the game asks which one to keep.
- **Signing out:** saves one last time and leaves the device's copy in place.
- **Without the two values filled in:** nothing loads from Supabase, and the button explains that online saves aren't set up.
