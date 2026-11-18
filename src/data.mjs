// Every figure on the site comes from this file. Each metric carries its source,
// report and date range so the claim can be traced to a screenshot.
// Client names are withheld until each client approves publication (see README).

export const profile = {
  name: "Abdul Moiz Ansari",
  title: "Senior SEO Specialist",
  location: "Karachi, Pakistan",
  availability: "Working with brands in Pakistan and worldwide",
  email: "moiz@seoexpertinkarachi.online",
  cv: "/cv/Abdul-Moiz-Ansari-SEO-CV.pdf",
  // Add a real profile URL here (for example LinkedIn) and it will appear in the contact section.
  links: [{ label: "LinkedIn", href: "https://www.linkedin.com/in/abdul-moiz-ansari/" }],
  summary:
    "Senior SEO Specialist with 4+ years of experience, managing end-to-end SEO for 20+ websites across on-page, off-page, technical, local, AEO and GEO. I run audits, keyword and competitor research, content optimisation and reporting in Google Search Console, GA4 and Semrush, then ship the fixes myself.",
  // Client-facing pitch used on the home page.
  promise: "More customers from Google and AI search",
  pitch:
    "I help brands grow organic traffic, leads and sales through technical SEO, content strategy, local search and AI visibility. You see the results in your own Search Console and GA4, not in a slide deck.",
  // Optional: a WhatsApp number in international format (for example "923001234567") adds a WhatsApp button.
  whatsapp: "923000178901",
  // Optional: path to a portrait in public/ (for example "/images/moiz.webp"). It replaces the hero graph on desktop.
  photo: "/images/moiz-ansari-round.webp",
  // Background-removed portrait for the home hero (falls back to the round photo).
  cutout: "/images/moiz-ansari-headshot-800.webp",
  cutoutSmall: "/images/moiz-ansari-headshot-420.webp",
  cutoutMedium: "/images/moiz-ansari-headshot-600.webp",
  avatar: "/images/moiz-ansari-round-168.webp",
};

// Prefilled email so a prospect sends the details needed for a first reply.
export const enquiry = {
  subject: "Free SEO audit request",
  body: "Website:\nHas traffic dropped? If yes, roughly when:\nWhat I want more of (leads, sales, calls, bookings):\nMain markets or cities:\nCan share Search Console and GA4 access (yes or no):\nAnything else:\n",
};

export const services = [
  {
    id: "audit", icon: '<circle cx="11" cy="11" r="7"/><path d="m20 20-3.5-3.5"/><path d="M8 11h6M11 8v6"/>', name: "SEO audit and roadmap", outcome: "Find out exactly what is holding your site back, in priority order.",
    includes: ["Technical crawl: indexation, redirects, duplicates, Core Web Vitals", "On-page and content review of your key pages", "Keyword and competitor gap analysis", "A prioritised action plan ranked by impact and effort"],
    proof: { label: "See a rebuild that kept growing", slug: "surgical-practice-site-rebuild" },
  },
  {
    id: "technical", icon: '<path d="M9 7 4 12l5 5M15 7l5 5-5 5"/>', name: "Technical SEO and site migrations", outcome: "Make sure Google can find, crawl and trust every page that matters.",
    includes: ["Redirect mapping before and after a redesign", "Indexation clean-up and canonical fixes", "Structured data (schema) design and deployment", "Speed and Core Web Vitals checks"],
    proof: { label: "See the domain migration case study", slug: "car-dealer-domain-migration" },
  },
  {
    id: "content", icon: '<path d="M5 4h10l4 4v12H5z"/><path d="M9 12h6M9 16h6M9 8h3"/>', name: "Content and keyword strategy", outcome: "Write what your customers actually search for, and connect it to the pages that sell.",
    includes: ["Keyword and search intent research", "Topic clusters and a content roadmap", "Briefs your writers can follow", "Internal linking from blog posts to service and product pages"],
    proof: { label: "See the specialist physician case study", slug: "interventional-radiology-visibility" },
  },
  {
    id: "local", icon: '<path d="M12 21s-7-6.2-7-11a7 7 0 0 1 14 0c0 4.8-7 11-7 11z"/><circle cx="12" cy="10" r="2.5"/>', name: "Local SEO and Google Business Profile", outcome: "Show up when people nearby search for what you offer.",
    includes: ["Google Business Profile audit and optimisation", "Categories, services, hours and description fixes", "Location and service-area pages", "Citations, listings and a review workflow"],
    proof: { label: "See the local practice case study", slug: "surgical-practice-site-rebuild" },
  },
  {
    id: "ai", icon: '<path d="M12 3v3M12 18v3M3 12h3M18 12h3"/><rect x="7" y="7" width="10" height="10" rx="2"/><path d="M10 12h4"/>', name: "AI search visibility (AEO and GEO)", outcome: "Give Google AI Overviews, ChatGPT and Perplexity clear answers they can cite.",
    includes: ["Answer-ready content structure", "Entity and organisation structured data", "Trust signals for health, legal and finance topics", "AI visibility checks on your key questions"],
    proof: { label: "See the AI search case study", slug: "healthcare-ai-assistant-visibility" },
  },
  {
    id: "management", icon: '<path d="M4 19V9M10 19V5M16 19v-7M22 19H2"/>', name: "Ongoing SEO management", outcome: "A hands-on specialist who keeps shipping improvements every month.",
    includes: ["Monthly prioritised work plan", "Implementation in your CMS or with your developer", "Reporting from your own GSC and GA4 data", "Honest notes on what worked and what did not"],
    proof: { label: "See the healthcare case study", slug: "healthcare-ngo-organic-growth" },
  },
];

export const audiences = [
  "Clinics, hospitals and healthcare brands",
  "Local service businesses",
  "E-commerce stores on Shopify and WooCommerce",
  "B2B software and SaaS companies",
  "Non-profits and education",
];

// Industries with documented client work in the SEO workspace.
export const industries = ["Healthcare and clinics", "E-commerce", "Automotive dealerships", "POS and ERP software", "Education", "Non-profits", "Restaurants and bakeries", "Printing and local services"];

export const processSteps = [
  { step: "Access and baseline", text: "You share read access to Search Console and GA4. I record where you stand today, so every later claim has a starting point." },
  { step: "Audit and plan", text: "I find the problems and opportunities, then rank them by business impact and effort. You get a plan, not a 90-page PDF." },
  { step: "Implement", text: "I make the changes in your CMS or work alongside your developer: technical fixes, schema, content, internal links." },
  { step: "Report", text: "Every month you see the numbers from your own accounts, what changed, and what comes next." },
];

export const promises = [
  { title: "Real data only", text: "Every number I report comes from your own Search Console and GA4. If a figure is not available, I say so instead of estimating it." },
  { title: "Hands-on execution", text: "I do not stop at recommendations. I deploy the schema, map the redirects and add the links myself." },
  { title: "No ranking guarantees", text: "Nobody controls Google's results. What I commit to is the work, the priorities and transparent measurement." },
  { title: "Careful with sensitive topics", text: "Much of my work is in healthcare, where accuracy and trust signals matter as much as keywords." },
];

export const faq = [
  { q: "How long before I see results?", a: "It depends on your site's condition and your competition. Technical fixes can show up in Search Console within weeks; content and authority work usually takes several months. I set expectations from your own baseline data, not from averages." },
  { q: "Do you guarantee first-page rankings?", a: "No. Anyone who guarantees rankings is guessing. I commit to clear priorities, steady implementation and honest reporting from your own data." },
  { q: "What do you need from me to start?", a: "Read access to Google Search Console and GA4, access to your website (or a developer contact), and a clear idea of what you want more of: leads, sales, calls or bookings." },
  { q: "Do you work with businesses outside Pakistan?", a: "Yes. I work remotely and have worked on websites targeting Pakistan, Australia, the United Kingdom and the United States." },
  { q: "Which platforms do you work with?", a: "WordPress, WooCommerce, Shopify and Wix, plus custom sites where I work with your developer." },
  { q: "How much does it cost?", a: "It depends on the size of the site and the scope. Send me your website and goals and I will reply with a clear proposal." },
];

// Figures that appear only in the CV and have not been independently verified.
export const cvClaims = [
  { value: "4+ years", label: "SEO experience (2021 to present)" },
  { value: "20+ websites", label: "Managed end to end across a multi-industry portfolio" },
  { value: "+40% traffic", label: "Website traffic increase as SEO Executive, Dr Abdullah Iqbal (2024 to May 2025)" },
  { value: "Top 3", label: "Google rankings for priority target keywords in the same role" },
];

// Verified headline numbers, each linked to a case study and a screenshot.
export const verified = [
  { value: "+107.8%", label: "Organic Search sessions", detail: "GA4, Case A, 9,181 to 19,074", source: "Year on year: 29 Jul to 26 Oct 2026 vs the same days in 2025", caseSlug: "healthcare-ngo-organic-growth" },
  { value: "+69.2%", label: "Google Search clicks", detail: "GSC, Case E, 26.3k to 44.5k", source: "Last 6 months vs previous 6: 28 Apr to 26 Oct 2026 vs 28 Oct 2025 to 27 Apr 2026", caseSlug: "nonprofit-skills-training-growth" },
  { value: "+27.0%", label: "Organic Search sessions", detail: "GA4, Case A, 15,014 to 19,074", source: "Last 3 months vs previous 3: 29 Jul to 26 Oct vs 30 Apr to 28 Jul 2026", caseSlug: "healthcare-ngo-organic-growth" },
  { value: "+67.3%", label: "AI features impressions", detail: "GSC, Case F, 104k to 174k", source: "Last 3 months vs previous 3: 19 Aug to 16 Nov vs 21 May to 18 Aug 2026", caseSlug: "uk-furniture-ai-search-visibility" },
];

const PERIOD = "29 Jul to 26 Oct 2026 compared with 29 Jul to 26 Oct 2025";
// Period-over-period windows (equal length, back to back), so results are not only year on year.
const P3M = "29 Jul to 26 Oct 2026 compared with 30 Apr to 28 Jul 2026";
const P6M = "28 Apr to 26 Oct 2026 compared with 28 Oct 2025 to 27 Apr 2026";
const G28 = "20 Oct to 16 Nov 2026 compared with 6 Aug to 2 Sep 2026, the first 28 days tracked";
const H90GSC = "19 Aug to 16 Nov 2026 compared with 21 May to 18 Aug 2026";
const H90GA = "20 Aug to 17 Nov 2026 compared with 21 May to 18 Aug 2026";
const F3M = "19 Aug to 16 Nov 2026 compared with 21 May to 18 Aug 2026";
const I8W = "22 Sep to 16 Nov 2026 compared with 28 Jul to 21 Sep 2026";
const I28 = "20 Oct to 16 Nov 2026 compared with 22 Sep to 19 Oct 2026";
const P60D = "28 Aug to 26 Oct 2026 compared with 29 Jun to 27 Aug 2026";
// Comparison labels shown beside each metric.
export const COMPARE = { yoy: "Year on year", m3: "Last 3 months vs previous 3", m6: "Last 6 months vs previous 6", d60: "Last 60 days vs previous 60", since: "Since the report began", t28: "Last 28 days vs first 28 days tracked", w8: "Last 8 weeks vs previous 8", d28: "Last 28 days vs previous 28" };

export const caseStudies = [
  {
    slug: "healthcare-ngo-organic-growth",
    label: "Case A",
    title: "Doubling organic sessions for a healthcare non-profit",
    client: "Healthcare non-profit, Pakistan (blood bank and diagnostic laboratory network)",
    industry: "Healthcare (YMYL)",
    market: "Pakistan",
    tags: ["Healthcare", "Technical SEO", "Schema", "Internal linking", "Off-page", "AEO and GEO"],
    summary:
      "A large YMYL health site with healthy content but no medical schema, almost no links from its blog into its revenue pages, and a negative-SEO link attack. Organic Search sessions more than doubled year on year.",
    challenge:
      "The site had over 60 useful blog posts and more than 100 lab test pages, but the blog sent almost no internal links to those test pages (3 links in total at baseline, none to the test price hub). Structured data did not describe the organisation, its services or its branches. In April 2026 the domain was also hit by a spam backlink injection campaign.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I owned the audit, the schema build, the backlink investigation and the internal linking deployment. Content was written by the agency content team.",
    actions: [
      { date: "Jun 2026", text: "YMYL audit covering E-E-A-T, AEO and GEO readiness, with five topic clusters prioritised by authority and conversion value." },
      { date: "24 Jun 2026", text: "Designed and deployed site-wide JSON-LD: MedicalOrganization and NGO, service-level types for the blood bank, laboratory and clinic, every branch location, and FAQPage where visible FAQs exist. Validated live." },
      { date: "9 Jul 2026", text: "Investigated a negative-SEO attack (about 2.98M spam backlinks from 1,659 referring domains, 98.8% sharing one gambling anchor). Separated genuine domains and prepared a domain-level disavow file of 1,646 entries." },
      { date: "20 Aug 2026", text: "Mapped blog content to the lab test catalogue and deployed 84 contextual links across 45 posts (76 to specific test pages, 8 to the price hub). Skipped posts where a link would not help the reader." },
      { date: "12 Oct 2026", text: "Added 47 contextual links to four new posts under a hyperlink-only rule, with a script check that the copy itself stayed unchanged." },
    ],
    metrics: [
      { name: "Organic Search sessions", before: "9,181", after: "19,074", change: "+107.8%", source: "GA4 Traffic acquisition", period: PERIOD },
      { name: "Engaged organic sessions", before: "6,051", after: "11,532", change: "+90.6%", source: "GA4 Traffic acquisition", period: PERIOD },
      { name: "Google Search clicks", before: "15.4k", after: "21k", change: "+36%", source: "GSC Performance (web)", period: PERIOD },
      { name: "Average position", before: "11.1", after: "7.5", change: "3.6 places better", source: "GSC Performance (web)", period: PERIOD },
      { name: "Organic Search sessions", before: "15,014", after: "19,074", change: "+27.0%", source: "GA4 Traffic acquisition", period: P3M, type: "m3" },
      { name: "Engaged organic sessions", before: "8,698", after: "11,532", change: "+32.6%", source: "GA4 Traffic acquisition", period: P3M, type: "m3" },
      { name: "Google Search clicks", before: "18.1k", after: "21k", change: "+16.0%", source: "GSC Performance (web)", period: P3M, type: "m3" },
    ],
    evidence: [
      { file: "case-a_ga4_traffic-acquisition_yoy_2026-07-29_2026-10-26", platform: "GA4", report: "Traffic acquisition: session primary channel group", period: PERIOD, caption: "Organic Search row: 19,074 sessions vs 9,181 (+107.76%), engaged sessions 11,532 vs 6,051 (+90.58%)." },
      { file: "case-a_ga4_sessions-by-channel-chart_2026-07-29_2026-10-26", platform: "GA4", report: "Sessions by channel over time", period: PERIOD, caption: "Daily sessions by channel for the current period, with the comparison period dotted." },
      { file: "case-a_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 21k vs 15.4k, average position 7.5 vs 11.1." },
      { file: "case-a_ga4_traffic-acquisition_3m-vs-prev-3m_2026-07-29_2026-10-26", platform: "GA4", report: "Traffic acquisition, last 3 months vs previous 3", period: P3M, caption: "Organic Search 19,074 sessions vs 15,014 (+27.04%), engaged sessions 11,532 vs 8,698 (+32.58%), engagement rate 60.46% vs 57.93%." },
      { file: "case-a_gsc_performance_3m-vs-prev-3m_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, last 3 months vs previous 3", period: P3M, caption: "Clicks 21k vs 18.1k, average position 7.5 vs 7.9." },
      { file: "case-a_semrush_domain-overview-pk_1y_2026-10-28", platform: "Semrush (estimate)", report: "Domain Overview, Pakistan database, 1 year", period: "Nov 2025 to 28 Oct 2026", caption: "Estimated organic traffic and ranking keywords trend upward across the year. Semrush figures are modelled estimates, not measured visits." },
    ],
    limitations: [
      "GSC impressions also rose (about 183k to 2.67m) while CTR fell from 8.5% to 0.8%. The cause of that impression jump has not been isolated, so it is not used as a result.",
      "The 2025 baseline predates the documented work. Other factors, including content published by the agency content team, also contributed. The results show the outcome of the combined programme, not the effect of one change.",
      "GSC totals above 1,000 are shown rounded in the Search Console interface, so the click change is approximate.",
      "Total sessions across all channels fell 21.9% over the same period (visible in the GA4 screenshot). The growth is specific to Organic Search.",
      "No GA4 key events are configured on this property, so no conversion or revenue claim is made.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "interventional-radiology-visibility",
    label: "Case B",
    title: "Moving a specialist physician site onto page one",
    client: "Interventional radiologist with clinics in two Pakistani cities",
    industry: "Healthcare (YMYL)",
    market: "Pakistan",
    tags: ["Healthcare", "Schema", "Content strategy", "Internal linking", "On-page", "AEO and GEO"],
    summary:
      "A credentialed specialist whose treatments are under-known in Pakistan. Medical schema, on-page fixes, a content roadmap and in-body linking took the average position from 13.4 to 7.6 and grew impressions by about 60%.",
    challenge:
      "Strong, on-topic content and real patient success stories, but no Physician, MedicalProcedure or review markup, hundreds of images without alt text, duplicate pages competing for the same queries, and new cost-focused posts with no links to the treatment pages.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I ran the audit and content research, built and deployed the schema, and handled the on-page, cannibalisation and internal linking work.",
    actions: [
      { date: "Jun to Jul 2026", text: "Audit and a 124-opportunity content roadmap in 10 clusters, cross-checked against all 88 existing posts so no new topic would cannibalise an old one." },
      { date: "28 Jul 2026", text: "Deployed Physician and MedicalClinic schema site-wide, MedicalProcedure and FAQPage per treatment page, and Article author and reviewedBy linked to the physician. Fixed validator errors and re-verified live." },
      { date: "28 Jul 2026", text: "Wrote alt text for about 404 images through the media library (625 of 646 now described; the rest are decorative). Resolved three cannibalising duplicates with 301 redirects." },
      { date: "8 and 12 Oct 2026", text: "Added 98 in-body links across 16 posts, linking treatment-cost and informational posts to the matching service pages, hyperlinking existing words only." },
      { date: "12 Oct 2026", text: "Rewrote titles and meta descriptions on two priority posts and verified them live." },
    ],
    metrics: [
      { name: "Average position", before: "13.4", after: "7.6", change: "5.8 places better", source: "GSC Performance (web)", period: PERIOD },
      { name: "Impressions", before: "298k", after: "476k", change: "+59.7%", source: "GSC Performance (web)", period: PERIOD },
      { name: "Google Search clicks", before: "5.03k", after: "5.77k", change: "+14.7%", source: "GSC Performance (web)", period: PERIOD },
      { name: "Google Search clicks", before: "10.9k", after: "12.4k", change: "+13.8%", source: "GSC Performance (web)", period: P6M, type: "m6" },
      { name: "Click-through rate", before: "0.9%", after: "1.2%", change: "+0.3 points", source: "GSC Performance (web)", period: P6M, type: "m6" },
    ],
    evidence: [
      { file: "case-b_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 5.77k vs 5.03k, impressions 476k vs 298k, average position 7.6 vs 13.4." },
      { file: "case-b_gsc_performance_6m-vs-prev-6m_2026-04-28_2026-10-26", platform: "Google Search Console", report: "Performance, last 6 months vs previous 6", period: P6M, caption: "Clicks 12.4k vs 10.9k, CTR 1.2% vs 0.9%. Impressions 1.04m vs 1.19m and average position 7.8 vs 6.7 moved the other way." },
      { file: "case-b_semrush_domain-overview-pk_1y_2026-10-28", platform: "Semrush (estimate)", report: "Domain Overview, Pakistan database, 1 year", period: "Nov 2025 to 28 Oct 2026", caption: "Estimated organic traffic and keyword count over the year. Semrush figures are modelled estimates, not measured visits." },
    ],
    limitations: [
      "On the 6-month comparison, clicks and CTR rose but impressions fell (1.19m to 1.04m) and average position slipped (6.7 to 7.8), so ranking gains show only in the year-on-year view.",
      "CTR fell from 1.7% to 1.2%, so clicks grew more slowly than impressions. Part of this is consistent with AI Overviews answering informational queries on the results page.",
      "No GA4 property for this site is available in the account used for this portfolio, so on-site engagement is not shown.",
      "GSC totals above 1,000 are rounded in the Search Console interface. The 2025 baseline predates the documented work, and the content team also published posts during the period.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "surgical-practice-site-rebuild",
    label: "Case C",
    title: "Protecting and growing search visibility through a site rebuild",
    client: "Two-surgeon practice, Islamabad (general and laparoscopic surgery, neurosurgery)",
    industry: "Healthcare (YMYL)",
    market: "Pakistan",
    tags: ["Healthcare", "Technical SEO", "Migration", "Local SEO", "Internal linking"],
    summary:
      "The client rebuilt the website and changed its URLs, which broke most of the pages that ranked. Redirect mapping, indexation clean-up, internal linking and Google Business Profile fixes kept the site growing: clicks rose 83% year on year.",
    challenge:
      "When the rebuilt site went live in September 2026, 17 URLs that still ranked returned 404 errors, the highest-traffic service URL redirected to a blog post, and both Google Business Profile website links were broken. Author and uncategorised archives were also indexable.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I produced the SEO plan and GBP audit, mapped and deployed the redirects, and handled indexation and internal linking. The client and their developer handled the rebuild itself.",
    actions: [
      { date: "Sep 2026", text: "Pre-launch SEO plan with keyword and competitor research. Semrush data showed neurosurgery demand far ahead of general surgery in the target cities, so the plan put neurosurgery pages first." },
      { date: "14 Sep 2026", text: "Audited the lead surgeon's Google Business Profile: category misuse, services, Q&A, hours and description, with a written action plan." },
      { date: "17 to 24 Sep 2026", text: "Checked every ranking URL against the new site, then mapped and deployed 23 301 redirects. Verified the GBP website links once the client corrected them." },
      { date: "28 Sep 2026", text: "Set author and uncategorised archives to noindex, and added 50 contextual links across 25 posts, each linking to the treating doctor and the relevant service hub." },
    ],
    metrics: [
      { name: "Google Search clicks", before: "458", after: "838", change: "+83.0%", source: "GSC Performance (web)", period: PERIOD },
      { name: "Impressions", before: "24k", after: "55.4k", change: "+130.8%", source: "GSC Performance (web)", period: PERIOD },
      { name: "Average position", before: "8", after: "8", change: "Held steady", source: "GSC Performance (web)", period: PERIOD },
      { name: "Google Search clicks", before: "1.53k", after: "1.92k", change: "+25.5%", source: "GSC Performance (web)", period: P6M, type: "m6" },
      { name: "Impressions", before: "113k", after: "120k", change: "+6.2%", source: "GSC Performance (web)", period: P6M, type: "m6" },
    ],
    evidence: [
      { file: "case-c_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 838 vs 458, impressions 55.4k vs 24k, average position 8 in both periods." },
      { file: "case-c_gsc_performance_6m-vs-prev-6m_2026-04-28_2026-10-26", platform: "Google Search Console", report: "Performance, last 6 months vs previous 6", period: P6M, caption: "Clicks 1.92k vs 1.53k, impressions 120k vs 113k, CTR 1.6% vs 1.4%." },
    ],
    limitations: [
      "Over the last 3 months against the 3 before, clicks fell (838 vs 1.07k) as the rebuild went live, so the gains above come from the year-on-year and 6-month views.",
      "My documented work on this site began in September 2026, so much of the comparison window predates it. The result shows that visibility kept growing through a URL-changing rebuild; it is not claimed that the redirects alone caused the year-on-year growth.",
      "The GA4 property was created recently and has no 2025 baseline. Semrush's estimated traffic for the domain declined over the year, so it is not presented as supporting evidence.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "ecommerce-rankings-australia",
    label: "Case D",
    title: "Lifting rankings for an Australian e-commerce store",
    client: "Football equipment e-commerce store, Australia (Shopify)",
    industry: "E-commerce",
    market: "Australia",
    tags: ["E-commerce", "Schema", "Technical SEO", "Internal linking", "Content strategy"],
    summary:
      "A Shopify store with popular blog content but thin structured data and weak links from articles to products. Schema fixes and blog-to-product linking were followed by an average position of 8.5, up from 13.9, and 33% more clicks year on year.",
    challenge:
      "The store's informational articles attracted most of its search visibility, but the theme's structured data was thin: the site search markup was broken, the organisation details were minimal, and none of the 57 articles or the collection pages carried their own schema. Blog posts rarely linked to the products they discussed.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I audited and rewrote the structured data in the Shopify theme, added the internal links, ran the keyword gap research and diagnosed the later click decline. Store content and products were managed by the client.",
    actions: [
      { date: "24 Jun 2026", text: "Audited the theme's structured data and published the fixes live on a duplicate theme, keeping the old one as a rollback: repaired the broken site search markup, enriched the organisation details, and added article schema to all 57 posts and collection schema to every collection." },
      { date: "20 to 24 Jul 2026", text: "Added contextual links from blog posts to the matching product pages and between related articles, and fixed a broken link inside an existing post." },
      { date: "2 Sep 2026", text: "Keyword gap research in Semrush (Australia) found a product category with roughly 14,800 monthly searches that the store already sold but had no page for, and recommended building collection pages for it." },
      { date: "8 Oct 2026", text: "Diagnosed a recent dip in clicks as AI Overviews answering informational queries, while rankings kept improving, and recommended a commercial collection layer to reduce reliance on blog traffic." },
    ],
    metrics: [
      { name: "Average position", before: "13.9", after: "8.5", change: "5.4 places better", source: "GSC Performance (web)", period: "28 Jun to 26 Oct 2026 compared with 28 Jun to 26 Oct 2025" },
      { name: "Google Search clicks", before: "4.1k", after: "5.44k", change: "+32.7%", source: "GSC Performance (web)", period: "28 Jun to 26 Oct 2026 compared with 28 Jun to 26 Oct 2025" },
      { name: "Impressions", before: "693k", after: "1.02m", change: "+47.2%", source: "GSC Performance (web)", period: "28 Jun to 26 Oct 2026 compared with 28 Jun to 26 Oct 2025" },
    ],
    evidence: [
      { file: "case-d_gsc_performance_yoy_2026-06-28_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: "28 Jun to 26 Oct 2026 compared with 28 Jun to 26 Oct 2025", caption: "Clicks 5.44k vs 4.1k, impressions 1.02m vs 693k, average position 8.5 vs 13.9." },
    ],
    limitations: [
      "The gap narrows across the period: by late September and October, daily clicks were back to roughly last year's level, even though average position stayed better. My October diagnosis traced this to AI Overviews answering the informational queries the blog ranks for.",
      "The window starts four days after the schema work. Over the shorter 29 Jul to 26 Oct comparison used for the other case studies, the gain is smaller: clicks +15% and average position 12.7 to 8.6.",
      "Search visibility had already started rising in late 2025, before the documented work, so part of the year-on-year gain predates it. Most clicks still come from informational articles; the recommended collection pages had not been built at the time of writing.",
      "GSC totals above 1,000 are rounded in the Search Console interface. GA4 is not available for this store in the account used here, so no sales or conversion claims are made.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "nonprofit-skills-training-growth",
    label: "Case E",
    title: "Search growth for a national skills-training non-profit",
    client: "Vocational training non-profit, Pakistan (network of technical institutes)",
    industry: "Education and non-profit",
    market: "Pakistan",
    tags: ["Non-profit", "Education", "Schema", "AEO and GEO"],
    summary:
      "A large vocational training non-profit whose structured data had no organisation identity at all. Over the last six months, Google Search clicks grew 69% and impressions 80% against the six months before, and its pages appeared about 252,000 times in Google's AI features.",
    challenge:
      "The SEO plugin produced basic page and breadcrumb markup, but there was no organisation node anywhere: no logo, address, contact points, social profiles or non-profit identity. None of the campuses or courses were described in structured data either.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I audited the structured data, then designed, deployed and validated the new schema. Site content was managed by the client.",
    actions: [
      { date: "13 Jul 2026", text: "Audited the existing structured data and confirmed there was no Organization node on any page." },
      { date: "13 Jul 2026", text: "Designed and deployed site-wide JSON-LD describing the organisation as an NGO and educational organisation, with founding date, registration details, contact points, social profiles and a donate action." },
      { date: "13 Jul 2026", text: "Added a list of 15 campuses to the institutes page and Course markup to the technical (15 courses), advanced (8) and emerging technology course pages, then validated all five pages live." },
    ],
    metrics: [
      { name: "Google Search clicks", before: "26.3k", after: "44.5k", change: "+69.2%", source: "GSC Performance (web)", period: P6M, type: "m6" },
      { name: "Impressions", before: "666k", after: "1.2m", change: "+80.2%", source: "GSC Performance (web)", period: P6M, type: "m6" },
      { name: "AI features impressions", before: "No data", after: "252k", change: "Since 18 May 2026", source: "GSC Generative AI features", period: "18 May to 26 Oct 2026 (the report has no earlier data)", type: "since" },
    ],
    evidence: [
      { file: "case-e_gsc_performance_6m-vs-prev-6m_2026-04-28_2026-10-26", platform: "Google Search Console", report: "Performance, last 6 months vs previous 6", period: P6M, caption: "Clicks 44.5k vs 26.3k, impressions 1.2m vs 666k, CTR 3.7% vs 4%, average position 6 vs 5." },
      { file: "case-e_gsc_ai-features_since-2026-05-18", platform: "Google Search Console", report: "Generative AI features (beta)", period: "18 May to 26 Oct 2026", caption: "252k impressions in Google's AI features since the report began on 18 May 2026, rising from under 1k a day to around 2k a day." },
    ],
    limitations: [
      "Most of the click growth arrived in late May and June 2026, before the documented schema work on 13 July, so the schema cannot explain that jump. The result shows the site's overall trajectory during the engagement, not the effect of one change.",
      "Over the last 3 months against the 3 before, clicks were flat (22k vs 22k): the growth has levelled off since July.",
      "CTR slipped from 4.0% to 3.7% and average position from 5 to 6 as impressions grew faster than clicks.",
      "The AI features report only has data from 18 May 2026, so there is no fair earlier comparison. On equal 60-day windows, AI impressions were about level (94.3k to 98.8k). Google reports impressions only for this view, not clicks.",
      "GSC totals above 1,000 are rounded in the Search Console interface. No GA4 access for this site, so no sessions or conversion claims.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "uk-furniture-ai-search-visibility",
    label: "Case F",
    title: "Rising in Google and AI search for a UK furniture brand",
    client: "Bespoke furniture brand, United Kingdom (WooCommerce)",
    industry: "E-commerce",
    market: "United Kingdom",
    tags: ["E-commerce", "AEO and GEO", "Technical SEO", "Content strategy"],
    summary:
      "A luxury bespoke furniture store that was blocking AI crawlers. Over the last three months, clicks rose 40% and average position improved from 14.8 to 11.1 against the three months before, and impressions in Google's AI features grew 67% to 174k.",
    challenge:
      "The audit found the site's robots.txt opted out of AI crawlers (including Google-Extended, GPTBot and ClaudeBot) and blocked SEO tools, while a firewall refused non-browser crawlers. The blog had many posts but no plan for which to rewrite and which were simply losing clicks to AI answers.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I ran the technical and content audit and the Search Console analysis of the blog, and wrote the prioritised recommendations.",
    actions: [
      { date: "Jun 2026", text: "Technical and content audit: documented the robots.txt rules blocking AI crawlers and SEO tools and the firewall refusing crawlers, and planned topic clusters for sofas, beds, made-to-measure, buying guides and the London showroom." },
      { date: "Aug 2026", text: "Analysed the blog in Search Console to separate posts that need a rewrite from posts losing clicks to AI Overviews, and delivered a prioritised rewrite list." },
    ],
    metrics: [
      { name: "Google Search clicks", before: "5.28k", after: "7.39k", change: "+40%", source: "GSC Performance (web)", period: F3M, type: "m3" },
      { name: "Average position", before: "14.8", after: "11.1", change: "3.7 places better", source: "GSC Performance (web)", period: F3M, type: "m3" },
      { name: "Average CTR", before: "0.5%", after: "0.7%", change: "+0.2 points", source: "GSC Performance (web)", period: F3M, type: "m3" },
      { name: "AI features impressions", before: "104k", after: "174k", change: "+67.3%", source: "GSC Generative AI features", period: F3M, type: "m3" },
    ],
    evidence: [
      { file: "case-f_gsc_performance_3m-vs-prev-3m_2026-08-19_2026-11-16", platform: "Google Search Console", report: "Performance, custom compare", period: F3M, caption: "Clicks 7.39k vs 5.28k, average position 11.1 vs 14.8, CTR 0.7% vs 0.5%. Impressions 1.08m vs 1.05m. Note the click spike in early November." },
      { file: "case-f_gsc_ai-features_3m-vs-prev-3m_2026-08-19_2026-11-16", platform: "Google Search Console", report: "Generative AI features (beta), custom compare", period: F3M, caption: "Impressions in Google's AI features 174k vs 104k. The current period (solid line) pulls away from mid-September onward." },
      { file: "case-f_gsc_ai-features_trend_since-2026-05-18_to_2026-11-16", platform: "Google Search Console", report: "Generative AI features (beta), full history", period: "18 May to 16 Nov 2026", caption: "Daily AI features impressions, from about 1k a day through the summer to about 3k a day from October." },
    ],
    limitations: [
      "The click total includes a spike from 30 Oct to 8 Nov: 1.66k clicks in those ten days, roughly 1k more than a normal ten days for this site, spread across sofa and living-room queries. Without it the three-month gain would be closer to 20%.",
      "Over six months the picture is weaker: clicks were 13k against 17.3k in the six months before, although average position improved from 14.8 to 13. The recent three months are a recovery after that decline.",
      "This portfolio does not document which recommendations the store implemented, so the gains cannot be tied to specific changes.",
      "The AI features report starts on 18 May 2026. Both windows compared here fall fully inside it. Google reports impressions only for this view.",
      "Total impressions were roughly level (1.05m to 1.08m). GSC totals above 1,000 are rounded. No GA4 access for this store.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "car-dealer-domain-migration",
    label: "Case G",
    title: "Growing a car dealership's new domain after a rebrand",
    client: "Authorised car dealership, Karachi (WordPress, Elementor)",
    industry: "Automotive",
    market: "Pakistan",
    tags: ["Automotive", "Technical SEO", "Site migration", "Schema", "Internal linking", "AEO and GEO"],
    summary:
      "A dealership moved its website to a new domain after a brand change. Comparing the latest 28 days with the first 28 days of tracking on the new domain, Google clicks rose 150%, average position improved from 13.8 to 8.6, and impressions in Google's AI features grew almost fivefold.",
    challenge:
      "The 301 redirects from the old domain worked, but the site still pointed at the old domain from inside: 1,021 references at audit, including every blog post and the footer model menu. There was no dealership structured data, no price, booking or test-drive pages, and a duplicate price post was competing with the main price page. The audit also found hidden spam links injected into the theme, which were reported for the developer to remove.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I ran the migration, local and AI search audit and carried out the on-site SEO fixes below. Blog content was written by the agency content team.",
    actions: [
      { date: "18 Aug 2026", text: "Full migration, local SEO and AEO/GEO audit of all 86 sitemap URLs: redirects passed, but internal links, schema, commercial pages and image alt text failed. Delivered a prioritised fix list." },
      { date: "20 Aug 2026", text: "Replaced 274 old-domain links across all 69 blog posts and verified each post through the API and a live crawl. Corrected author profile URLs and added the brand's social profiles to the organisation data." },
      { date: "20 Aug 2026", text: "Designed and deployed AutoDealer structured data site-wide: both branches, the brands sold and contact details, linked to the existing organisation node so nothing is duplicated. Opening hours were left out because no verified source existed." },
      { date: "8 Sep 2026", text: "Added 25 contextual internal links to four price, financing and model posts that had none." },
      { date: "16 Sep 2026", text: "Merged a duplicate price-list post into the main price page, kept its unique comparison content, repointed the internal link and set a 301." },
      { date: "24 Sep 2026", text: "Wrote alt text for 76 model images after viewing each one, replacing file-name text with real descriptions." },
      { date: "2 Oct 2026", text: "Built the next blog plan from Semrush Pakistan data: rival comparisons and 7-seater searches the site could realistically win, skipping national price terms owned by large classifieds sites." },
    ],
    metrics: [
      { name: "Google Search clicks", before: "262", after: "655", change: "+150%", source: "GSC Performance (web)", period: G28, type: "t28" },
      { name: "Google Search impressions", before: "19.6k", after: "67.2k", change: "+243%", source: "GSC Performance (web)", period: G28, type: "t28" },
      { name: "Average position", before: "13.8", after: "8.6", change: "5.2 places better", source: "GSC Performance (web)", period: G28, type: "t28" },
      { name: "AI features impressions", before: "1.36k", after: "6.46k", change: "+375%", source: "GSC Generative AI features", period: G28, type: "t28" },
    ],
    evidence: [
      { file: "case-g_gsc_performance_last28-vs-first28_2026-10-20_2026-11-16", platform: "Google Search Console", report: "Performance, custom compare", period: G28, caption: "Clicks 655 vs 262, impressions 67.2k vs 19.6k, average position 8.6 vs 13.8. CTR 1% vs 1.3%." },
      { file: "case-g_gsc_ai-features_last28-vs-first28_2026-10-20_2026-11-16", platform: "Google Search Console", report: "Generative AI features (beta), custom compare", period: G28, caption: "Impressions in Google's AI features 6.46k vs 1.36k on two 28-day windows." },
      { file: "case-g_gsc_ai-features_trend_since-2026-08-06", platform: "Google Search Console", report: "Generative AI features (beta), full history", period: "6 Aug to 16 Nov 2026", caption: "Daily AI features impressions on the new domain, from under 50 a day in August to about 250 a day in November." },
    ],
    limitations: [
      "Search Console data for the new domain starts on 6 Aug 2026, so there is no year-on-year view and no pre-migration baseline. The old domain's Search Console data was not available to me.",
      "Some of the early growth is the new domain picking up signals from the old one through the 301 redirects, which happens after any migration. The results show the combined outcome, not the effect of one fix.",
      "CTR fell from 1.3% to 1%, as impressions grew faster than clicks. Google reports impressions only for AI features.",
      "GSC totals above 1,000 are shown rounded. No GA4 access for this site, so no visit or lead figures are claimed.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "healthcare-ai-assistant-visibility",
    label: "Case H",
    title: "Doubling visits from AI assistants for a healthcare non-profit",
    client: "Healthcare non-profit, Pakistan (same client as Case A, AI search view)",
    industry: "Healthcare (YMYL)",
    market: "Pakistan",
    tags: ["Healthcare", "AEO and GEO", "Schema", "Internal linking"],
    summary:
      "The AI search side of Case A. Over the last 90 days against the 90 before, visits from AI assistants nearly doubled in GA4 (94 to 183 sessions), engaged AI visits rose 133%, and the site's impressions in Google's AI features grew 14% to 426k.",
    challenge:
      "Health questions are where AI Overviews and assistants such as ChatGPT answer most often, and they only cite sources they can understand and trust. The site had useful answers spread across its blog, but nothing told search engines or AI systems who the organisation was, what services each branch offered, or which test page answered which question.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I owned the AEO and GEO audit, the structured data and the internal linking. Content was written by the agency content team.",
    actions: [
      { date: "Jun 2026", text: "AEO and GEO audit: checked which health questions the site already answered, how clearly each answer could be quoted, and what entity information was missing." },
      { date: "24 Jun 2026", text: "Deployed site-wide JSON-LD describing the organisation as a medical non-profit, its blood bank, laboratory and clinic services, every branch, and FAQ markup only where the FAQs are visible on the page." },
      { date: "20 Aug 2026", text: "Linked 45 blog answers to the exact lab test pages they discuss (84 links), so a reader or an AI system can move from a question to the specific test and its price page." },
      { date: "12 Oct 2026", text: "Linked four new posts into the same structure with 47 hyperlink-only links, leaving the copy itself unchanged." },
    ],
    metrics: [
      { name: "AI Assistant sessions", before: "94", after: "183", change: "+94.7%", source: "GA4 Traffic acquisition, AI Assistant channel", period: H90GA, type: "m3" },
      { name: "Engaged AI Assistant sessions", before: "55", after: "128", change: "+132.7%", source: "GA4 Traffic acquisition, AI Assistant channel", period: H90GA, type: "m3" },
      { name: "AI Assistant engagement rate", before: "58.5%", after: "70.0%", change: "+11.4 points", source: "GA4 Traffic acquisition, AI Assistant channel", period: H90GA, type: "m3" },
      { name: "AI features impressions", before: "374k", after: "426k", change: "+13.9%", source: "GSC Generative AI features", period: H90GSC, type: "m3" },
    ],
    evidence: [
      { file: "case-h_ga4_ai-assistant-channel_90d-vs-prev-90d_2026-08-20_2026-11-17", platform: "GA4", report: "Traffic acquisition, AI Assistant channel, last 90 days vs previous 90", period: H90GA, caption: "AI Assistant sessions 183 vs 94 (+94.68%), engaged sessions 128 vs 55 (+132.73%), engagement rate 69.95% vs 58.51%." },
      { file: "case-h_gsc_ai-features_3m-vs-prev-3m_2026-08-19_2026-11-16", platform: "Google Search Console", report: "Generative AI features (beta), custom compare", period: H90GSC, caption: "Impressions in Google's AI features 426k vs 374k. The current period (solid line) ran well ahead in its first half and slightly behind in its second." },
    ],
    limitations: [
      "The numbers are small: 183 AI assistant visits is 0.7% of all sessions in the period. The case shows a direction, not a major traffic source yet.",
      "GA4's AI Assistant channel only counts visits where the assistant passed a referrer. Many AI answers send no click at all, so real AI exposure is higher than GA4 shows.",
      "Daily AI features impressions peaked in mid-August and have eased since. The 13.9% gain comes mostly from the first half of the window.",
      "No GA4 key events are configured on this property, so no conversion claim is made. Google reports impressions only for AI features.",
      "Client name withheld pending publication approval.",
    ],
  },
  {
    slug: "print-shop-ai-overview-recovery",
    label: "Case I",
    title: "Winning back AI Overview visibility for a New York print shop",
    client: "Commercial printing and signage company, New York City (WordPress)",
    industry: "Printing and local services",
    market: "United States",
    tags: ["Local services", "AEO and GEO", "Schema", "Internal linking"],
    summary:
      "An AI Overview case. After a sharp drop in July, the site's impressions in Google's AI features rose 84% over the last eight weeks against the eight weeks before, and the latest 28 days were 85% higher than the 28 days before them.",
    challenge:
      "The shop's traffic comes mostly from how-to guides on paper, print sizes and finishing, exactly the questions Google now answers with AI Overviews. In mid-July its AI features impressions fell from roughly 1,000 a day to about 250. At the same time, 12 service pages shared one wrong meta description, more than 100 images had no alt text, there was no local business structured data, and nearly every blog link to a service page went through a redirect.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I ran the audits and made the on-site changes below myself in WordPress.",
    actions: [
      { date: "31 Jul 2026", text: "Crawled all 159 URLs. Wrote 20 unique meta descriptions for service pages that shared one wrong description or had none, and set descriptive alt text on 104 images after viewing each one." },
      { date: "31 Aug 2026", text: "Designed and deployed LocalBusiness and Service structured data on the homepage and 16 commercial pages, without duplicating the organisation data the SEO plugin already outputs. Verified live: one business entity per page, zero parse errors." },
      { date: "9 Sep 2026", text: "Rebuilt blog-to-service linking: 138 direct links to service pages (up from 39, almost all of which went through redirects), plus 40 links between related guides and 13 from service pages back to guides. No internal link now hits a redirect." },
    ],
    metrics: [
      { name: "AI features impressions", before: "15k", after: "27.6k", change: "+84%", source: "GSC Generative AI features", period: I8W, type: "w8" },
      { name: "AI features impressions", before: "9.68k", after: "17.9k", change: "+85%", source: "GSC Generative AI features", period: I28, type: "d28" },
    ],
    evidence: [
      { file: "case-i_gsc_ai-features_8w-vs-prev-8w_2026-09-22_2026-11-16", platform: "Google Search Console", report: "Generative AI features (beta), custom compare", period: I8W, caption: "AI features impressions 27.6k vs 15k. The two periods run level for about three weeks, then the current period (solid line) pulls ahead from mid-October." },
      { file: "case-i_gsc_ai-features_trend_since-2026-05-18", platform: "Google Search Console", report: "Generative AI features (beta), full history", period: "18 May to 16 Nov 2026", caption: "The full picture: about 1,000 a day until mid-July, a drop to about 250 a day, and a climb back to about 600 a day from October." },
    ],
    limitations: [
      "This is a partial recovery. Daily AI features impressions are still below their May to July level, and the cause of the July drop has not been isolated.",
      "Most of the gain comes from one guide on poster sizes (about 300 to 8,300 AI impressions across the two eight-week windows). Several other guides grew too, but the total depends heavily on that one page.",
      "Google reports impressions only for AI features, not clicks, so this shows visibility in AI answers, not visits. Total Google clicks were about level over the same windows (342 vs 315).",
      "The changes were made between late July and early September, and the rise starts in October. The timing fits, but the gain cannot be tied to one specific change.",
      "Client name withheld pending publication approval.",
    ],
  },
];

export const skills = [
  { group: "Technical SEO", items: ["Crawlability and indexation", "Redirect mapping and site migrations", "Duplicate content and canonicals", "Core Web Vitals checks", "robots.txt and XML sitemaps"] },
  { group: "On-page and content", items: ["Meta titles and descriptions", "Heading structure", "Internal linking at scale", "Image alt text", "Content briefs and editorial audits"] },
  { group: "Structured data", items: ["JSON-LD design and deployment", "Organization, LocalBusiness, MedicalOrganization, Physician", "Product, Article, FAQPage, Breadcrumb", "Validation and Rich Results testing"] },
  { group: "Research", items: ["Keyword and search intent research", "Competitor and keyword gap analysis", "Topic clusters and content roadmaps", "Cannibalisation checks"] },
  { group: "Local and off-page", items: ["Google Business Profile optimisation", "Citations and listings", "Backlink audits and disavow files", "Link building"] },
  { group: "AEO, GEO and reporting", items: ["Answer-ready content and entity context", "AI search visibility checks", "GSC, GA4 and Semrush reporting", "Monthly prioritised action plans"] },
];

export const tools = [
  "Google Search Console", "Google Analytics 4", "Google Tag Manager", "Semrush", "Ahrefs", "Screaming Frog SEO Spider", "Moz Pro",
  "Google Keyword Planner", "Google Trends", "PageSpeed Insights", "Google Business Profile", "Bing Webmaster Tools",
  "WordPress", "Shopify", "WooCommerce", "Wix", "Yoast SEO", "Rank Math SEO", "Surfer SEO",
  "ChatGPT", "Claude", "Google Gemini", "Perplexity", "Microsoft Copilot",
];

export const experience = [
  {
    role: "Senior SEO Specialist", org: "Digital Eggheads", period: "Jun 2025 to present",
    points: [
      "End-to-end SEO across technical, on-page, off-page, local, AEO and GEO for a multi-industry client portfolio.",
      "Technical audits covering crawlability, indexation, redirects, duplicate content and Core Web Vitals.",
      "Keyword, intent and competitor research to find ranking and content opportunities.",
      "On-page work: titles, descriptions, headings, internal linking, alt text and schema markup.",
      "GSC, GA4 and Semrush analysis turned into prioritised monthly action plans.",
    ],
  },
  {
    role: "SEO Executive", org: "Dr Abdullah Iqbal", period: "2024 to May 2025",
    points: [
      "CV-reported: increased website traffic by 40% through on-page SEO and content optimisation.",
      "CV-reported: achieved top-three Google rankings for priority target keywords.",
      "Keyword and intent research mapped to service and blog pages; ongoing technical fixes tracked in GSC and GA4.",
    ],
  },
  {
    role: "Junior SEO Executive", org: "Increase Rev", period: "2021 to 2023",
    points: [
      "Keyword research and content optimisation across multiple client websites.",
      "Competitor analysis for keyword and content gaps; on-page support; link building and listings.",
    ],
  },
];

export const education = [
  { title: "Intermediate, Commerce", org: "Board of Intermediate Karachi", period: "2015 to 2017" },
];

export const courses = [
  { title: "Digital Marketing (2 months)", org: "Rangoonwala Community Centre" },
  { title: "Advanced Google Analytics", org: "Google Analytics for Business" },
  { title: "Content Marketing and SEO Fundamentals", org: "Semrush" },
  { title: "Claude Code 101", org: "Anthropic" },
  { title: "AI Fluency: Framework and Foundations", org: "Anthropic" },
  { title: "Claude 101", org: "Anthropic" },
];

// Focused service pages for specific searches. Proof figures repeat numbers already
// verified in caseStudies above; add none here that a case study does not back.
export const landings = [
  {
    slug: "local-seo-karachi",
    crumb: "Local SEO in Karachi",
    title: "Local SEO Services in Karachi | Google Maps and GBP",
    description: "Local SEO in Karachi: Google Business Profile optimisation, map pack visibility, area pages, citations and reviews for clinics, shops and service firms.",
    eyebrow: "Local SEO · Karachi",
    h1: "Local SEO services in Karachi",
    lede: "Get found on Google Maps and in the local pack when people in Karachi search for what you offer, from Clifton and DHA to Gulshan-e-Iqbal, PECHS and North Nazimabad.",
    sections: [
      {
        h2: "Why local search decides who gets the call",
        paras: [
          "When someone in Karachi searches for a clinic, a repair service or a shop, Google usually shows a map with three businesses before any website. Those three get most of the calls, direction requests and WhatsApp messages.",
          "Karachi is large and spread out, so distance matters a lot: a business in Gulshan rarely appears for a search made in DHA. Local SEO is about being the most relevant and trusted result in the areas you actually serve, with a profile and website that turn that visibility into enquiries.",
        ],
      },
      {
        h2: "Search in English, Urdu and Roman Urdu",
        paras: [
          "Karachi customers search in more than one way: \"dentist near me\", \"AC repair Gulshan\", \"best bakery in DHA\", or the same idea in Urdu or Roman Urdu. I research the phrases your customers really use, then work them naturally into your Google Business Profile, your services and your area pages.",
        ],
      },
    ],
    includesTitle: "What local SEO with me includes",
    includes: [
      "Google Business Profile audit: primary and secondary categories, services, hours, description, photos and Q&A",
      "Name, address and phone number made consistent across your website, profile and listings",
      "Area and service pages for the parts of Karachi you serve, without thin copy-paste pages",
      "LocalBusiness schema that matches your profile",
      "A review workflow: asking happy customers, and replying to every review in English or Urdu",
      "Citations on Pakistani directories and industry listings",
      "Tracking calls, direction requests and website clicks in your profile and GA4",
    ],
    proofIntro: "The surgical practice below shows why the profile and the website have to work together: after a rebuild broke both Google Business Profile website links, I audited the profile, got the links fixed and redirected the broken URLs, and clicks still rose 83% year on year.",
    cases: ["surgical-practice-site-rebuild", "interventional-radiology-visibility"],
    faq: [
      { q: "How long does local SEO take in Karachi?", a: "Profile fixes such as the right category and complete services can change your visibility within weeks. Competitive categories in busy areas take longer, usually several months of reviews, content and citations. I set expectations from your own profile data." },
      { q: "Do I need a website for local SEO?", a: "A Google Business Profile can rank without one, but a fast website with clear service and area pages helps you rank in more searches and is where you can measure enquiries properly." },
      { q: "Can you rank my business in areas where I have no office?", a: "The map results depend heavily on where your business is. I do not create fake addresses, because that breaks Google's guidelines and gets profiles suspended. For areas you serve without an office, I use service-area settings and useful area pages instead." },
      { q: "What about fake or negative reviews?", a: "I help you reply calmly and professionally, and report reviews that break Google's policies through Google's own tools. Genuine reviews cannot be removed, but a steady flow of new ones from real customers changes the overall picture." },
    ],
  },
  {
    slug: "seo-for-doctors-clinics",
    crumb: "SEO for doctors and clinics",
    title: "SEO for Doctors and Clinics in Pakistan | Healthcare SEO",
    description: "Healthcare SEO for doctors, clinics, hospitals and labs in Pakistan: medical schema, trustworthy content, local visibility and results from live YMYL sites.",
    eyebrow: "Healthcare SEO · Pakistan",
    h1: "SEO for doctors and clinics in Pakistan",
    lede: "SEO for doctors, clinics, hospitals and diagnostic labs: medical schema, trustworthy content and local visibility, from a specialist whose recent work is mostly on live healthcare sites.",
    sections: [
      {
        h2: "Health websites are held to a higher standard",
        paras: [
          "Google treats health as a \"Your Money or Your Life\" topic. Pages that give medical information need clear authorship, real credentials, accurate content and transparent contact details before they can rank well.",
          "Many clinic websites in Pakistan miss these signals: no doctor profiles with qualifications, no medical structured data, and blog posts that never link to the treatment or booking pages they talk about. Fixing them is often the fastest win available.",
        ],
      },
      {
        h2: "Results from Pakistani healthcare sites",
        paras: [
          "Three of my six case studies are Pakistani healthcare websites. For a blood bank and laboratory network, Organic Search sessions grew 107.8% year on year in GA4. For an interventional radiologist, average position in Search Console moved from 13.4 to 7.6. For a two-surgeon practice, clicks rose 83% year on year through a full website rebuild.",
        ],
      },
      {
        h2: "Careful with medical content",
        paras: [
          "I plan, structure and optimise content, but clinical facts come from the doctor, and the doctor reviews every page before it goes live. No miracle claims and no promised outcomes: accuracy protects your patients and your rankings.",
        ],
      },
    ],
    includesTitle: "What healthcare SEO with me includes",
    includes: [
      "Doctor and practitioner profiles that show qualifications, experience and registration",
      "MedicalOrganization, Physician, MedicalClinic and FAQPage structured data, validated live",
      "A content roadmap around the conditions and treatments patients search for",
      "Internal links from articles to treatment, test and booking pages",
      "Google Business Profiles for each doctor and branch",
      "Site rebuilds and migrations without losing the pages that rank",
      "Visibility in Google AI Overviews and AI assistants for health questions",
    ],
    proofIntro: "Each case study shows the problem, what I changed and when, the before and after numbers, and the screenshots they come from.",
    cases: ["healthcare-ngo-organic-growth", "interventional-radiology-visibility", "surgical-practice-site-rebuild"],
    faq: [
      { q: "Can SEO bring my clinic more appointments?", a: "Yes, when patients search for the treatments you offer or for doctors like you. I measure what matters to a clinic, such as calls, WhatsApp clicks and booking requests, not just traffic." },
      { q: "Do you write medical content?", a: "I plan topics, write briefs and optimise pages. Clinical information comes from you or a medical writer, and you approve every page, so nothing goes live that you would not stand behind." },
      { q: "I practise at more than one hospital. Can you help?", a: "Yes. A personal website plus consistent profiles for each location helps Google connect your name, your specialty and every place patients can see you." },
      { q: "Do you work with doctors outside Karachi?", a: "Yes. I work remotely, and the case studies include a practice in Islamabad and a specialist with clinics in two Pakistani cities." },
    ],
  },
  {
    slug: "ecommerce-seo-pakistan",
    crumb: "E-commerce SEO",
    title: "E-commerce SEO in Pakistan | Shopify and WooCommerce SEO",
    description: "E-commerce SEO for Shopify and WooCommerce stores in Pakistan: category and product pages, product schema, technical fixes and blog-to-product linking.",
    eyebrow: "E-commerce SEO · Shopify and WooCommerce",
    h1: "E-commerce SEO in Pakistan for Shopify and WooCommerce stores",
    lede: "Rank your category and product pages, not just your blog. Technical fixes, product schema and internal linking for online stores selling in Pakistan and abroad.",
    sections: [
      {
        h2: "Where online stores lose search traffic",
        paras: [
          "Most stores have the same leaks: filter and variant URLs that create duplicates, category pages with no useful text, products without structured data for price and availability, slow mobile pages, and blog posts that never link to the products they mention.",
          "Each one is fixable, and fixing them helps Google send searchers straight to the pages that sell instead of to a blog post or a competitor.",
        ],
      },
      {
        h2: "Selling online in Pakistan",
        paras: [
          "Shoppers in Pakistan compare prices and look hard for trust before they order. Searches like \"price in Pakistan\" and \"original\" are common, and the pages that win show prices in rupees, delivery times, cash on delivery, the return policy and real reviews.",
          "Marketplaces compete for the same searches, so category pages need to answer the shopper better than a long list of products does: buying advice, comparisons and clear next steps.",
        ],
      },
    ],
    includesTitle: "What e-commerce SEO with me includes",
    includes: [
      "Category page optimisation: headings, helpful intro copy and FAQs",
      "Product, Offer, AggregateRating and BreadcrumbList structured data",
      "Canonical and indexing rules for filters, variants and out-of-stock products",
      "Blog-to-product and category internal linking",
      "Google Merchant Center free listings support",
      "Speed and Core Web Vitals checks on mobile",
      "Access for AI crawlers so products can appear in AI answers",
    ],
    proofIntro: "Both stores below are outside Pakistan, but the work is the same on any Shopify or WooCommerce store: after schema fixes and blog-to-product linking, the Shopify store's average position moved from 13.9 to 8.5 with 33% more clicks year on year.",
    cases: ["ecommerce-rankings-australia", "uk-furniture-ai-search-visibility"],
    faq: [
      { q: "Shopify or WooCommerce: which is better for SEO?", a: "Both can rank well. Shopify has a fixed URL structure and fewer settings to get wrong; WooCommerce gives more control but needs more care. I work with whichever you have rather than recommending a costly switch." },
      { q: "Do I need unique product descriptions?", a: "Unique descriptions usually beat copied manufacturer text, but you do not need to rewrite everything at once. I start with the categories and products that bring the most revenue." },
      { q: "Can my products appear in Google Shopping for free?", a: "Yes. Google Merchant Center free listings can show your products without paying for ads, once your product feed and structured data are set up correctly." },
      { q: "Can a small store compete with big marketplaces?", a: "On broad searches it is hard. On specific products, brands and buying-guide searches, a focused store with better pages and real trust signals often wins." },
    ],
  },
];
