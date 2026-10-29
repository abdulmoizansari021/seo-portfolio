// Every figure on the site comes from this file. Each metric carries its source,
// report and date range so the claim can be traced to a screenshot.
// Client names are withheld until each client approves publication (see README).

export const profile = {
  name: "Abdul Moiz Ansari",
  title: "Senior SEO Specialist",
  location: "Karachi, Pakistan",
  availability: "Open to on-site roles in Pakistan and remote roles worldwide",
  email: "abdulmoizansari021@gmail.com",
  cv: "/cv/Abdul-Moiz-Ansari-SEO-CV.pdf",
  // Add a real profile URL here (for example LinkedIn) and it will appear in the contact section.
  links: [],
  summary:
    "Senior SEO Specialist with 4+ years of experience, managing end-to-end SEO for 20+ websites across on-page, off-page, technical, local, AEO and GEO. I run audits, keyword and competitor research, content optimisation and reporting in Google Search Console, GA4 and Semrush, then ship the fixes myself.",
};

// Figures that appear only in the CV and have not been independently verified.
export const cvClaims = [
  { value: "4+ years", label: "SEO experience (2021 to present)" },
  { value: "20+ websites", label: "Managed end to end across a multi-industry portfolio" },
  { value: "+40% traffic", label: "Website traffic increase as SEO Executive, Dr Abdullah Iqbal (2024 to May 2025)" },
  { value: "Top 3", label: "Google rankings for priority target keywords in the same role" },
];

// Verified headline numbers, each linked to a case study and a screenshot.
export const verified = [
  { value: "+107.8%", label: "Organic Search sessions", detail: "GA4, Case A, 9,181 to 19,074", source: "GA4 Traffic acquisition, 29 Jul to 26 Oct 2026 vs 29 Jul to 26 Oct 2025", caseSlug: "healthcare-ngo-organic-growth" },
  { value: "+83%", label: "Google Search clicks", detail: "GSC, Case C, 458 to 838", source: "GSC Performance, 29 Jul to 26 Oct 2026 vs same period 2025", caseSlug: "surgical-practice-site-rebuild" },
  { value: "13.4 to 7.6", label: "Average Google position", detail: "GSC, Case B, moved onto page one", source: "GSC Performance, 29 Jul to 26 Oct 2026 vs same period 2025", caseSlug: "interventional-radiology-visibility" },
  { value: "+36%", label: "Google Search clicks", detail: "GSC, Case A, about 15.4k to 21k", source: "GSC Performance, 29 Jul to 26 Oct 2026 vs same period 2025", caseSlug: "healthcare-ngo-organic-growth" },
];

const PERIOD = "29 Jul to 26 Oct 2026 compared with 29 Jul to 26 Oct 2025";

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
    ],
    evidence: [
      { file: "case-a_ga4_traffic-acquisition_yoy_2026-07-29_2026-10-26", platform: "GA4", report: "Traffic acquisition: session primary channel group", period: PERIOD, caption: "Organic Search row: 19,074 sessions vs 9,181 (+107.76%), engaged sessions 11,532 vs 6,051 (+90.58%)." },
      { file: "case-a_ga4_sessions-by-channel-chart_2026-07-29_2026-10-26", platform: "GA4", report: "Sessions by channel over time", period: PERIOD, caption: "Daily sessions by channel for the current period, with the comparison period dotted." },
      { file: "case-a_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 21k vs 15.4k, average position 7.5 vs 11.1." },
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
    ],
    evidence: [
      { file: "case-b_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 5.77k vs 5.03k, impressions 476k vs 298k, average position 7.6 vs 13.4." },
      { file: "case-b_semrush_domain-overview-pk_1y_2026-10-28", platform: "Semrush (estimate)", report: "Domain Overview, Pakistan database, 1 year", period: "Nov 2025 to 28 Oct 2026", caption: "Estimated organic traffic and keyword count over the year. Semrush figures are modelled estimates, not measured visits." },
    ],
    limitations: [
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
    ],
    evidence: [
      { file: "case-c_gsc_performance_yoy_2026-07-29_2026-10-26", platform: "Google Search Console", report: "Performance, Search results, compare mode", period: PERIOD, caption: "Clicks 838 vs 458, impressions 55.4k vs 24k, average position 8 in both periods." },
    ],
    limitations: [
      "My documented work on this site began in September 2026, so much of the comparison window predates it. The result shows that visibility kept growing through a URL-changing rebuild; it is not claimed that the redirects alone caused the year-on-year growth.",
      "The GA4 property was created recently and has no 2025 baseline. Semrush's estimated traffic for the domain declined over the year, so it is not presented as supporting evidence.",
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
