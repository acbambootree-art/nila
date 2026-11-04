-- Indigo Tides cloud saves: one row per player, readable and writable only by that player.
-- Run once in the Supabase dashboard: SQL Editor > New query > paste > Run.

create table if not exists public.saves (
  user_id    uuid primary key references auth.users (id) on delete cascade,
  data       jsonb       not null,                 -- the whole farm, same shape as the browser save
  level      int         not null default 1,       -- shown when choosing between two farms
  updated_at timestamptz not null default now()
);

alter table public.saves enable row level security;

create policy "read own save"   on public.saves for select using (auth.uid() = user_id);
create policy "insert own save" on public.saves for insert with check (auth.uid() = user_id);
create policy "update own save" on public.saves for update using (auth.uid() = user_id) with check (auth.uid() = user_id);
create policy "delete own save" on public.saves for delete using (auth.uid() = user_id);
