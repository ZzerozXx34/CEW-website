# C.E.W. Website Launch Audit

This project was hardened from the supplied static website files. It is not a legal opinion or a certification of compliance.

## Completed in code
- Replaced `YOUR-DOMAIN.com` placeholders with the current supplied deployment URL.
- Added Terms, Privacy, Refund & Cancellation, Business Information, Cookie Notice, and Client Agreement Overview pages.
- Added legal links to the main-site footer.
- Added privacy notices to business forms.
- Changed public reviews from instant publication to moderation submission.
- Added a Supabase RLS migration that exposes only `status = 'approved'` reviews publicly.
- Escaped displayed review fields and retained text-node rendering for review content.
- Added client-side submission cooldown and input length checks.
- Removed unsupported absolute case-study claims such as 100% uptime, zero bugs, and doubling engagement.
- Qualified service, SEO, AI visibility, advertising, support, timing, and outcome language.
- Added security headers through `vercel.json`.
- Added `.well-known/security.txt`.
- Updated robots.txt and sitemap.xml.
- Moved the large inline CSS and application JavaScript into `styles.css` and `app.js`.

## Must be verified before launch
1. Replace/complete business registration, address, tax, phone, and privacy-officer information where required.
2. Confirm that every published review in Supabase is genuine and authorized for publication.
3. Run `supabase-review-moderation.sql` after backing up the reviews table and verifying its schema.
4. Confirm the Formspree account and endpoint belong to C.E.W. and review its data-processing/privacy settings.
5. Confirm the final client agreement with a qualified lawyer.
6. Confirm the refund/cancellation policy matches the actual commercial policy.
7. Confirm the actual pricing, staffing, notice periods, response times, and service inclusions.
8. Verify the Vercel deployment serves `vercel.json` headers.
9. Replace the deployment URL with a custom domain everywhere if/when one becomes canonical.
10. Test every form, review flow, legal link, mobile breakpoint, and external integration in production.

## Important business/legal decisions still required
- Exact legal entity/registration identity.
- Exact registered/geographic address and required public disclosures.
- Governing law and dispute venue in the paid client agreement.
- Exact billing, renewal, cancellation, pause, refund, and termination rules.
- Exact ownership/licensing rules for deliverables, source files, reusable tools, and AI-assisted work.
- Exact data-processing/security terms for client data.
- Whether any clients/results/logos may be named or displayed.
