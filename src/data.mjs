// Every figure on the site comes from this file. Each metric carries its source,
// report and date range so the claim can be traced to a screenshot.
// Client names are withheld until each client approves publication (see README).

export const profile = {
  name: "Abdul Moiz Ansari",
  title: "Senior SEO Specialist",
  location: "Karachi, Pakistan",
  availability: "Working with brands in Pakistan and worldwide",
  email: "abdulmoizansari021@gmail.com",
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
  whatsapp: "",
  // Optional: path to a portrait in public/ (for example "/images/moiz.webp"). It replaces the hero graph on desktop.
  photo: "/images/moiz-ansari.webp",
  // Background-removed portrait for the home hero (falls back to the round photo).
  cutout: "/images/moiz-ansari-cutout.webp",
  avatar: "/images/moiz-ansari-112.webp",
};

// Prefilled email so a prospect sends the details needed for a first reply.
export const enquiry = {
  subject: "SEO enquiry",
  body: "Website:\nWhat I want more of (leads, sales, calls, bookings):\nMain markets or cities:\nCan share Search Console and GA4 access (yes or no):\nAnything else:\n",
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
    proof: { label: "See the migration case study", slug: "surgical-practice-site-rebuild" },
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
    proof: { label: "See the healthcare case study", slug: "healthcare-ngo-organic-growth" },
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
  { value: "+55.2%", label: "AI features impressions", detail: "GSC, Case F, 69.6k to 108k", source: "Last 60 days vs previous 60: 28 Aug to 26 Oct vs 29 Jun to 27 Aug 2026", caseSlug: "uk-furniture-ai-search-visibility" },
];

const PERIOD = "29 Jul to 26 Oct 2026 compared with 29 Jul to 26 Oct 2025";
// Period-over-period windows (equal length, back to back), so results are not only year on year.
const P3M = "29 Jul to 26 Oct 2026 compared with 30 Apr to 28 Jul 2026";
const P6M = "28 Apr to 26 Oct 2026 compared with 28 Oct 2025 to 27 Apr 2026";
const P60D = "28 Aug to 26 Oct 2026 compared with 29 Jun to 27 Aug 2026";
// Comparison labels shown beside each metric.
export const COMPARE = { yoy: "Year on year", m3: "Last 3 months vs previous 3", m6: "Last 6 months vs previous 6", d60: "Last 60 days vs previous 60", since: "Since the report began" };

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
      "A luxury bespoke furniture store that was blocking AI crawlers. Over the last three months, clicks rose 15% and average position improved from 15 to 11.8 against the three months before, and impressions in Google's AI features grew 55% over the last 60 days.",
    challenge:
      "The audit found the site's robots.txt opted out of AI crawlers (including Google-Extended, GPTBot and ClaudeBot) and blocked SEO tools, while a firewall refused non-browser crawlers. The blog had many posts but no plan for which to rewrite and which were simply losing clicks to AI answers.",
    role:
      "Senior SEO Specialist at Digital Eggheads. I ran the technical and content audit and the Search Console analysis of the blog, and wrote the prioritised recommendations.",
    actions: [
      { date: "Jun 2026", text: "Technical and content audit: documented the robots.txt rules blocking AI crawlers and SEO tools and the firewall refusing crawlers, and planned topic clusters for sofas, beds, made-to-measure, buying guides and the London showroom." },
      { date: "Aug 2026", text: "Analysed the blog in Search Console to separate posts that need a rewrite from posts losing clicks to AI Overviews, and delivered a prioritised rewrite list." },
    ],
    metrics: [
      { name: "Google Search clicks", before: "5.47k", after: "6.27k", change: "+14.6%", source: "GSC Performance (web)", period: P3M, type: "m3" },
      { name: "Average position", before: "15", after: "11.8", change: "3.2 places better", source: "GSC Performance (web)", period: P3M, type: "m3" },
      { name: "AI features impressions", before: "69.6k", after: "108k", change: "+55.2%", source: "GSC Generative AI features", period: P60D, type: "d60" },
    ],
    evidence: [
      { file: "case-f_gsc_performance_3m-vs-prev-3m_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, last 3 months vs previous 3", period: P3M, caption: "Clicks 6.27k vs 5.47k, CTR 0.6% vs 0.5%, average position 11.8 vs 15. Impressions 1.05m vs 1.1m." },
      { file: "case-f_gsc_ai-features_trend_since-2026-05-18", platform: "Google Search Console", report: "Generative AI features (beta), full history", period: "18 May to 26 Oct 2026", caption: "Daily impressions in Google's AI features, rising from under 1k to about 3k a day since late September." },
      { file: "case-f_gsc_ai-features_60d-vs-prev-60d_2026-08-28_2026-10-26", platform: "Google Search Console", report: "Generative AI features, 60 days vs previous 60", period: P60D, caption: "AI features impressions 108k vs 69.6k on two complete 60-day windows." },
    ],
    limitations: [
      "Over six months the picture is weaker: clicks fell from 18.4k to 11.9k against the six months before, so the recent three months are a recovery after that decline.",
      "This portfolio does not document which recommendations the store implemented, so the gains cannot be tied to specific changes.",
      "The AI features report starts on 18 May 2026. Two full 60-day windows are compared because a 3-month comparison would include only about 70 days of AI data in the earlier window and overstate the growth. Google reports impressions only for this view.",
      "Total impressions were roughly level (1.1m to 1.05m). GSC totals above 1,000 are rounded. No GA4 access for this store.",
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
