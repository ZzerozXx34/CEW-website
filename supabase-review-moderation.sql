-- C.E.W. review moderation hardening
-- Run this in the Supabase SQL editor for the project's public.reviews table.
-- Review publication is intentionally separated from public submission.
--
-- IMPORTANT:
-- 1. Back up the table before running production migrations.
-- 2. Verify the existing table/column names.
-- 3. Review and adapt this migration with your Supabase configuration.
-- 4. This migration assumes the existing columns: name, content, rating,
--    service, and created_at.

alter table public.reviews
  add column if not exists status text not null default 'pending';

alter table public.reviews
  add column if not exists approved_at timestamptz;

alter table public.reviews
  add column if not exists moderated_at timestamptz;

-- Existing rows were previously public on the site, so this migration keeps
-- them visible. New rows should be inserted only by an authorized moderator
-- or backend workflow.
update public.reviews
set status = 'approved'
where status is null or status = '';

alter table public.reviews
  alter column status set default 'pending';

alter table public.reviews
  drop constraint if exists reviews_status_check;

alter table public.reviews
  add constraint reviews_status_check
  check (status in ('pending', 'approved', 'rejected'));

create index if not exists reviews_status_created_at_idx
  on public.reviews(status, created_at desc);

alter table public.reviews enable row level security;

-- Remove common old policies if they exist.
drop policy if exists "Public can read reviews" on public.reviews;
drop policy if exists "Anyone can insert reviews" on public.reviews;
drop policy if exists "Public can insert reviews" on public.reviews;
drop policy if exists "Allow anonymous inserts" on public.reviews;
drop policy if exists "Public can update reviews" on public.reviews;
drop policy if exists "Public can delete reviews" on public.reviews;

-- Public visitors can only read approved reviews.
create policy "Public can read approved reviews"
on public.reviews
for select
to anon, authenticated
using (status = 'approved');

-- Do NOT grant public insert/update/delete access.
-- Moderators should publish reviews from the Supabase dashboard or an
-- authenticated server-side moderation workflow.
revoke insert, update, delete on public.reviews from anon;
revoke insert, update, delete on public.reviews from authenticated;

-- Keep select available to the public site.
grant select on public.reviews to anon, authenticated;

-- If the table has a default sequence/identity, keep its normal privileges
-- for the role that owns or administers the table.
