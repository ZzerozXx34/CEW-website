
// Formspree endpoint delivers emails to comfort.encode.workplace@gmail.com
const FORMSPREE_ENDPOINT='https://formspree.io/f/xzezalzz';

/* Icons (inline SVG) */
const P={code:'<path d="m16 18 6-6-6-6M8 6l-6 6 6 6"/>',film:'<rect x="2" y="3" width="20" height="18" rx="2"/><path d="M7 3v18M17 3v18M2 12h20"/>',head:'<path d="M3 14v-2a9 9 0 0 1 18 0v2"/><path d="M21 15v3a2 2 0 0 1-2 2h-2v-6h2a2 2 0 0 1 2 2zM3 15v3a2 2 0 0 0 2 2h2v-6H5a2 2 0 0 0-2 2z"/>',users:'<path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.9M16 3.1a4 4 0 0 1 0 7.8"/>',star:'<path d="m12 2 3.1 6.3 6.9 1-5 4.9 1.2 6.8L12 17.8 5.8 21l1.2-6.8-5-4.9 6.9-1z"/>',list:'<path d="M8 6h13M8 12h13M8 18h13M3 6h.01M3 12h.01M3 18h.01"/>'};
const svg=n=>`<svg viewBox="0 0 24 24" aria-hidden="true">${P[n]}</svg>`;
document.querySelectorAll('[data-i]').forEach(e=>e.innerHTML=svg(e.dataset.i));
document.querySelectorAll('[data-ck]').forEach(e=>e.insertAdjacentHTML('afterbegin','<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M20 6 9 17l-5-5" stroke-linecap="round" stroke-linejoin="round"/></svg>'));

/* Navigation */
const NAV=[['about','About'],['workflow','System'],['services','Services'],['catalog','Catalog'],['case-studies','Case Studies'],['pricing','Pricing'],['faq','FAQ'],['results-vault','Actual Results'],['reviews','Reviews']];
document.getElementById('nl').innerHTML=NAV.map(([h,t])=>`<a href="#${h}">${t}</a>`).join('');
document.getElementById('mmenu').innerHTML=NAV.map(([h,t])=>`<a href="#${h}">${t}</a>`).join('');

/* Service catalog */
const CATALOG=[
['Content, Video & Social Media',[
['Social Media Management & Uploading','We manage your social accounts, upload videos, schedule content, and interact with people commenting or messaging your pages.','We take full control of keeping your social media channels active and vibrant. Our team uploads your videos, schedules posts ahead of time, and actively interacts with your audience by replying to comments and direct messages to build community engagement without you lifting a finger.'],
['Video Editing','Professional video editing for your reels, TikToks, YouTube videos, and ads to keep your audience hooked.','High-quality video editing tailored for growth. We trim footage, add engaging captions, sound effects, B-roll, and dynamic transitions to make your long-form or short-form videos look polished, professional, and optimized to keep viewers watching until the very end.'],
['Ad Management','Setting up, monitoring, and tweaking your paid advertising campaigns across Facebook, Instagram, and other platforms to bring in results.','We oversee your paid advertising campaigns to ensure your marketing budget is spent effectively. From launching ad sets and monitoring performance metrics to adjusting targeting and testing creative variations, we handle the technical side of running profitable ads.'],
['Automated Client Outreach Systems','Setting up automated outreach systems built by our expert developers to help you reach out to prospective clients smoothly.','Our expert developers set up automated client outreach systems and pipelines that run smoothly in the background. This allows your business to connect with new prospects and generate leads automatically, saving your team hours of manual outreach work every single day.']]],
['Support, Email & Admin Ops',[
['Email Management (Safe & Guided)','We reply to emails for you, following your exact instructions so we never do anything unpleasant or unapproved for your brand.','We handle your inbox and reply to emails on your behalf. To ensure complete peace of mind, we only reply to emails where we have clear instructions from you. If a new or tricky situation comes up without prior guidance, we check with you first because we never want to do anything unpleasant or outside your comfort zone.'],
['Customer Support Handling','Handling customer support tickets, questions, and inquiries whenever your customers need help.','We provide reliable customer support to keep your buyers happy and satisfied. Our team answers customer questions, resolves support tickets, and handles inquiries promptly so your customers always feel valued and supported by your brand.'],
['Deep Research & Decision Making Help','Conducting hours of research when you are stuck or having trouble making decisions, taking that heavy workload off your plate.','Proper research takes hours of deep work which can easily drain your time and energy. Whenever you are stuck, evaluating options, or trying to make an important business decision, we take that entire research burden off your plate and deliver clear, summarized insights.'],
['General Task Organization','Organizing your files, tasks, schedules, and workflows so everything stays clean, tidy, and easy to find.','We organize your digital workspace, files, notes, and daily schedules. Keeping everything structured and tidy means you and your team never waste time searching for lost documents or wondering what tasks are due next.']]],
['Development & Management',[
['Expert Developers & Tech Builds','Expert developers handling website updates, bug fixes, landing pages, and technical tasks seamlessly.','Our team features expert developers who handle all your technical needs—from updating your website and building landing pages to fixing bugs and managing software integrations. You get top-tier technical execution without hiring expensive full-time engineers.'],
['Dedicated Team Managers (Zero Management)','A separate team of managers oversees the workers for you, so you only need to send one single message for your daily tasks.','You will never have to manage workers or assign individual chores. We have a separate team of professional team managers who oversee the staff for you. All you have to do is send one single message when you need something specific done that day.'],
['Daily Progress Updates','Clear updates sent to you every single day detailing exactly what happened and what work was completed.','Transparency is key to our partnership. We send you structured updates every single day outlining exactly what happened, what tasks were completed, and what our team is working on next, giving you total peace of mind without needing check-in meetings.'],
['Custom Automation Systems','Need something that runs on its own? Our developers build fully customized systems that handle your repetitive work automatically.','If your business needs something that works automatically, we can design and build a fully customized system made specifically for you. Our expert developers map out the repetitive tasks eating up your time, then create automated workflows and tools that handle them around the clock, so the work gets done on its own and your team can focus on growing your business.']]],
['Search & AI Visibility',[
['SEO (Search Engine Optimization)','Improving your website so it ranks higher on Google and other search engines and brings you more customers without paying for every click.','We optimize your website so the people already searching for what you offer can find you. Our team handles keyword research, on-page improvements, technical fixes, and content updates, then tracks your rankings over time so your visibility keeps climbing without you ever having to learn the technical side.'],
['AI Search Visibility','Getting your business found and recommended when people ask AI tools like ChatGPT, Gemini, and Perplexity for answers.','More and more customers ask AI assistants instead of searching on Google. We work to make sure your business shows up in those answers by structuring your website and content so AI tools can clearly understand and trust it, building the mentions and authority they draw from, and monitoring how your brand appears across the major AI platforms.']]]
];
const esc=s=>String(s).replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;').replace(/'/g,'&#039;');
document.getElementById('catalog-root').innerHTML=CATALOG.map(([t,items],ci)=>`
<div class="cat rv"><div class="cat-h"><h3>${esc(t)}</h3><span>${items.length} Services</span></div><div class="cat-list">
${items.map((it,ii)=>`<div class="item"><div><h4>${esc(it[0])}</h4><p>${esc(it[1])}</p></div><button class="btn btn-ghost btn-sm" data-detail-ci="${ci}" data-detail-ii="${ii}" type="button">Read full details</button></div>`).join('')}
</div></div>`).join('');

/* Modals, menu, toast */
function closeMenu(){document.getElementById('mmenu').classList.remove('open')}
const M=id=>document.getElementById(id).classList;
function openModal(){M('strategy-modal').add('active')}
function closeModal(){M('strategy-modal').remove('active')}
function openDetailModal(t,x){document.getElementById('detail-modal-title').textContent=t;document.getElementById('detail-modal-body').textContent=x;M('detail-modal').add('active')}
function closeDetailModal(){M('detail-modal').remove('active')}
function openAllReviewsModal(){M('all-reviews-modal').add('active')}
function closeAllReviewsModal(){M('all-reviews-modal').remove('active')}
document.querySelectorAll('.modal').forEach(m=>m.addEventListener('click',e=>{if(e.target===m)m.classList.remove('active')}));
document.addEventListener('keydown',e=>{if(e.key==='Escape')document.querySelectorAll('.modal.active').forEach(m=>m.classList.remove('active'))});
function showToast(msg,err=false){const c=document.getElementById('toast-container'),t=document.createElement('div');t.className='toast';if(err)t.style.borderLeftColor='#e5484d';t.textContent=msg;t.setAttribute('role','status');c.appendChild(t);setTimeout(()=>t.classList.add('show'),10);setTimeout(()=>{t.classList.remove('show');setTimeout(()=>t.remove(),300)},4000)}

/* Pricing */
let currentTierPrice=5999;
function selectPricingTier(m,p){document.getElementById('builder-size-select').value=m;currentTierPrice=p;updatePriceDisplay(p);document.getElementById('pod-builder').scrollIntoView({behavior:'smooth'})}
function handleSizeSelectChange(){const v=document.getElementById('builder-size-select').value;currentTierPrice={small:3499,medium:5999,large:8999}[v]||5999;updatePriceDisplay(currentTierPrice)}
function updatePriceDisplay(v){document.getElementById('calculated-price').textContent=`$${v.toLocaleString()} / mo`}

/* Basic client-side submission guard. Server-side controls remain authoritative. */
const FORM_COOLDOWN_MS=15000;
const lastSubmissionAt={};
function canSubmitForm(key){
  const now=Date.now(),last=lastSubmissionAt[key]||0;
  if(now-last<FORM_COOLDOWN_MS){showToast('Please wait a few seconds before submitting again.',true);return false}
  lastSubmissionAt[key]=now;return true
}

/* Forms */
async function sendEmailSubmission(d){try{const r=await fetch(FORMSPREE_ENDPOINT,{method:'POST',headers:{'Accept':'application/json','Content-Type':'application/json'},body:JSON.stringify(d)});return r.ok}catch(err){console.error('Email Submission Error:',err);return false}}
async function handleStrategyFormSubmit(e){
  e.preventDefault(); if(!canSubmitForm('strategy')) return;const btn=document.getElementById('strat-submit-btn'),ts=btn.querySelector('.btn-text');
  const name=document.getElementById('strat-name').value.trim(),email=document.getElementById('strat-email').value.trim(),message=document.getElementById('strat-msg').value.trim();
  if(name.length>120||message.length>3000){showToast('Please shorten the submitted information.',true);return;}
  btn.disabled=true;ts.innerHTML='<span class="spinner"></span> Sending...';
  const ok=await sendEmailSubmission({form_type:'Schedule Strategy Consultation Call',name,email,message,recipient:'comfort.encode.workplace@gmail.com'});
  btn.disabled=false;ts.textContent='Submit request';
  if(ok){showToast('Request received. We will email you about the consultation.');document.getElementById('strategy-modal-form').reset();closeModal()}
  else showToast('Failed to send request. Please try again or email us directly.',true)
}
async function handlePodApplicationSubmit(e){
  e.preventDefault(); if(!canSubmitForm('pod')) return;const btn=document.getElementById('pod-submit-btn'),ts=btn.querySelector('.btn-text');
  const name=document.getElementById('cust-name').value.trim(),email=document.getElementById('cust-email').value.trim(),sel=document.getElementById('builder-size-select'),podSize=sel.options[sel.selectedIndex].text;
  if(name.length>120){showToast('Please check the name entered.',true);return;}
  btn.disabled=true;ts.innerHTML='<span class="spinner"></span> Processing...';
  const ok=await sendEmailSubmission({form_type:'Custom Pod Application',name,email,pod_size:podSize,estimated_rate:`$${currentTierPrice}/mo`,recipient:'comfort.encode.workplace@gmail.com'});
  btn.disabled=false;ts.textContent='Dispatch pod application';
  if(ok){showToast('Request received. We will contact you shortly to discuss scope and terms.');document.getElementById('pod-application-form').reset();handleSizeSelectChange()}
  else showToast('Failed to send application. Please try again.',true)
}

/* Published reviews (Supabase read-only) */
const SUPABASE_URL='https://zectpavrjlwhpwetzdpk.supabase.co';
const SUPABASE_ANON_KEY='sb_publishable_Zp0THeHqH1-XcPjf6Dzb2w_Jrcl2dNz';
const sb=window.supabase?window.supabase.createClient(SUPABASE_URL,SUPABASE_ANON_KEY):null;
let reviewsData=[];
async function loadReviews(){
  if(!sb){console.error('Supabase library failed to load');return}
  const {data,error}=await sb.from('reviews').select('*').eq('status','approved').order('created_at',{ascending:false});
  if(error){console.error('Load reviews error:',error);showToast('Could not load reviews right now.',true);return}
  reviewsData=data||[];renderReviews()
}
function renderReviews(){
  const s=reviewsData,c=document.getElementById('reviews-container'),a=document.getElementById('all-reviews-container'),v=document.getElementById('view-all-container');
  c.innerHTML='';a.innerHTML='';document.getElementById('total-reviews-count').textContent=s.length;
  if(!s.length){c.innerHTML='<p style="font-style:italic;text-align:center;padding:20px 0;grid-column:1/-1">No reviews or comments yet. Be the first to share your experience below!</p>';v.hidden=true;return}
  s.slice(0,3).forEach(r=>c.appendChild(reviewCard(r)));s.forEach(r=>a.appendChild(reviewCard(r)));v.hidden=false
}
function reviewCard(r){
  const d=document.createElement('div');d.className='card review-card';
  const when=r.created_at?new Date(r.created_at).toLocaleDateString(undefined,{year:'numeric',month:'short',day:'numeric'}):'';
  const rating=parseInt(r.rating,10)||0;
  const meta=[r.service,when].filter(Boolean).join(' · ');
  const stars=rating>=1&&rating<=5?`<div class="stars" aria-label="${rating} out of 5 stars">${'★'.repeat(rating)+'☆'.repeat(5-rating)}</div>`:'';
  d.innerHTML=`<div class="rh"><strong>${esc(r.name)}</strong><span>${esc(meta)}</span></div>${stars}<p>${esc(r.content)}</p>`;return d
}
async function submitPublicReview(e){
  e.preventDefault();
  const form=e.target,btn=form.querySelector('button[type=submit]');
  const name=document.getElementById('rev-name').value.trim();
  const content=document.getElementById('rev-body').value.trim();
  const rating=parseInt(document.getElementById('rev-rating').value,10);
  const service=document.getElementById('rev-service').value;
  const authorized=document.getElementById('rev-authorize').checked;
  if(!name||!content||!authorized||rating<1||rating>5){
    showToast('Please complete the review form and authorization checkbox.',true);return;
  }
  const label=btn.textContent;btn.disabled=true;btn.innerHTML='<span class="spinner"></span> Submitting...';
  const ok=await sendEmailSubmission({
    form_type:'Public Review Submission - Moderation Required',
    name,content,rating,service,
    publication_authorized:'yes',
    recipient:'comfort.encode.workplace@gmail.com'
  });
  btn.disabled=false;btn.textContent=label;
  if(!ok){showToast('Could not submit your review. Please try again later.',true);return}
  form.reset();
  showToast('Thank you. Your review was submitted for moderation.');
}
function toggleFaq(btn){
  const it=btn.parentElement,a=it.querySelector('.faq-a'),open=it.classList.contains('open');
  document.querySelectorAll('.faq-item.open').forEach(i=>{i.classList.remove('open');i.querySelector('.faq-a').style.maxHeight=null});
  if(!open){it.classList.add('open');a.style.maxHeight=a.scrollHeight+'px'}
}

/* Reveal on scroll + card spotlight */
window.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-action="open-strategy"]').forEach(b=>b.addEventListener('click',openModal));
  const burger=document.querySelector('[data-action="toggle-menu"]');
  if(burger) burger.addEventListener('click',()=>document.getElementById('mmenu').classList.toggle('open'));
  document.querySelectorAll('[data-action^="tier-"]').forEach(b=>{
    if(b.dataset.action==='tier-select') b.addEventListener('change',handleSizeSelectChange);
    else if(b.dataset.tier) b.addEventListener('click',()=>selectPricingTier(b.dataset.tier,Number(b.dataset.price)));
  });
  document.querySelectorAll('[data-action="faq"]').forEach(b=>b.addEventListener('click',()=>toggleFaq(b)));
  document.querySelector('[data-action="all-reviews"]')?.addEventListener('click',openAllReviewsModal);
  document.querySelectorAll('[data-action="close-strategy"]').forEach(b=>b.addEventListener('click',closeModal));
  document.querySelectorAll('[data-action="close-detail"]').forEach(b=>b.addEventListener('click',closeDetailModal));
  document.querySelectorAll('[data-action="close-all-reviews"]').forEach(b=>b.addEventListener('click',closeAllReviewsModal));
  document.getElementById('pod-application-form')?.addEventListener('submit',handlePodApplicationSubmit);
  document.getElementById('strategy-modal-form')?.addEventListener('submit',handleStrategyFormSubmit);
  document.getElementById('review-form')?.addEventListener('submit',submitPublicReview);
  document.getElementById('mmenu')?.addEventListener('click',e=>{if(e.target.closest('a'))closeMenu()});
  document.getElementById('catalog-root')?.addEventListener('click',e=>{
    const b=e.target.closest('[data-detail-ci]');
    if(!b)return;
    const ci=Number(b.dataset.detailCi),ii=Number(b.dataset.detailIi);
    openDetailModal(CATALOG[ci][1][ii][0],CATALOG[ci][1][ii][2]);
  });
  renderReviews();loadReviews();
  const io=new IntersectionObserver(es=>es.forEach(x=>{if(x.isIntersecting){x.target.classList.add('on');io.unobserve(x.target)}}),{threshold:.08});
  document.querySelectorAll('.rv').forEach(e=>io.observe(e));
  document.addEventListener('pointermove',e=>{const c=e.target.closest&&e.target.closest('.card');if(!c)return;const r=c.getBoundingClientRect();c.style.setProperty('--mx',(e.clientX-r.left)+'px');c.style.setProperty('--my',(e.clientY-r.top)+'px')});
});

/* Hero image tilt */
(()=>{const st=document.querySelector('.stage');if(!st||!matchMedia('(pointer:fine)').matches||matchMedia('(prefers-reduced-motion:reduce)').matches)return;
st.addEventListener('pointermove',e=>{const r=st.getBoundingClientRect(),x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;st.style.setProperty('--rx',(-y*3)+'deg');st.style.setProperty('--ry',(x*4)+'deg')});
st.addEventListener('pointerleave',()=>{st.style.setProperty('--rx','0deg');st.style.setProperty('--ry','0deg')})})();
