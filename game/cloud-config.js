// Supabase project for cloud saves. Leave both blank and the game saves on this device only, as before.
// The anon (publishable) key is meant to be public: the row-level security rules in supabase/schema.sql
// are what keep each player's save private. Never put the service_role key here.
window.TIDES_CLOUD = {
  url: '',      // e.g. 'https://abcdefghijkl.supabase.co'
  anonKey: '',  // Project Settings > API > anon / publishable key
};
