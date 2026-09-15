export type Metric = {
  label: string;
  before: string;
  after: string;
  change: string;
  positive: boolean;
  note?: string;
};

export type CaseStudy = {
  company: string;
  role: string;
  before: string;
  after: string;
  summary: string;
  build: {
    platform: string;
    summary: string;
    highlights: string[];
    images?: {
      before: { src: string; alt: string };
      after: { src: string; alt: string };
    };
  };
  metricGroups: {
    label: string;
    source: string;
    metrics: Metric[];
  }[];
};

export const caseStudies: CaseStudy[] = [
  {
    company: "Group NB",
    role: "Web Strategy & Technical SEO",
    before: "May 14 – Dec 31, 2025",
    after: "Jan 1 – Sep 12, 2026",
    summary:
      "After taking over web strategy and technical SEO, search visibility and organic-driven traffic both scaled well beyond the prior period — impressions grew fastest as new pages and keywords started ranking, with clicks, new users, and on-site events following.",
    build: {
      platform: "WordPress — custom child theme",
      summary:
        "The site was running on a publicly available WordPress theme. We rebuilt it on a fully custom child theme instead — every template and section designed for Group NB specifically, rather than adapted from a stock theme's built-in options.",
      highlights: [
        "Replaced a public off-the-shelf theme with a bespoke child theme",
        "Templates and sections built around the CRO and SEO strategy above, not a theme's default layout options",
        "Faster page-building for new landing pages without fighting plugin or theme constraints",
      ],
      images: {
        before: {
          src: "/case-studies/group-nb-before.jpg",
          alt: "Group NB's previous homepage — a generic grey tile grid on a stock WordPress theme",
        },
        after: {
          src: "/case-studies/group-nb-after.jpg",
          alt: "Group NB's rebuilt homepage on a custom WordPress child theme, with a full-bleed hero and tailored recruitment messaging",
        },
      },
    },
    metricGroups: [
      {
        label: "Search visibility",
        source: "Google Search Console",
        metrics: [
          { label: "Total clicks", before: "3.25K", after: "6.37K", change: "+96%", positive: true },
          { label: "Total impressions", before: "117K", after: "519K", change: "+344%", positive: true },
          {
            label: "Average position",
            before: "18.1",
            after: "13.5",
            change: "+4.6 spots",
            positive: true,
            note: "Lower is better — average ranking moved up almost five positions.",
          },
          {
            label: "Average CTR",
            before: "2.8%",
            after: "1.2%",
            change: "−1.6pt",
            positive: false,
            note: "Impressions outgrew clicks as new, lower-funnel keywords started ranking — expected while a larger footprint of pages is still climbing toward page one.",
          },
        ],
      },
      {
        label: "Organic traffic",
        source: "Google Analytics 4",
        metrics: [
          { label: "Organic active users", before: "0.84K", after: "2.4K", change: "+186%", positive: true },
          { label: "Organic new users", before: "0.73K", after: "2.3K", change: "+216%", positive: true },
          { label: "Organic event count", before: "12.8K", after: "25K", change: "+95%", positive: true },
          {
            label: "Engagement time / user",
            before: "2m17s",
            after: "1m35s",
            change: "−31%",
            positive: false,
            note: "Session time dipped as top-of-funnel volume grew faster than returning-visitor traffic — a normal trade-off during rapid acquisition growth.",
          },
        ],
      },
    ],
  },
  {
    company: "HB Pools",
    role: "Technical SEO & Analytics",
    before: "May 14 – Dec 31, 2025",
    after: "Jan 1 – Sep 12, 2026",
    summary:
      "HB Pools is a seasonal business, so raw search volume moves with the calendar — but the ranking story is the one that matters: average position nearly halved, and every major acquisition channel grew well ahead of the prior period.",
    build: {
      platform: "Shopify — custom Liquid sections",
      summary:
        "We rebuilt the storefront on Shopify with a library of custom Liquid sections, rather than relying on a stock theme's fixed layouts — giving the HB Pools team reusable, editable building blocks they can assemble into new pages themselves.",
      highlights: [
        "Custom Liquid sections replacing a stock theme's fixed page structure",
        "Front-end rebuild aligned with the SEO and CRO work above, not bolted on afterward",
        "Reusable, editable sections the client's own team can now use for new pages",
      ],
      images: {
        before: {
          src: "/case-studies/hbpools-before.jpg",
          alt: "HB Pools' previous services page hero on the old storefront theme",
        },
        after: {
          src: "/case-studies/hbpools-after.jpg",
          alt: "HB Pools' rebuilt services page hero on Shopify with custom Liquid sections",
        },
      },
    },
    metricGroups: [
      {
        label: "Search visibility",
        source: "Google Search Console",
        metrics: [
          {
            label: "Average position",
            before: "20.3",
            after: "12.4",
            change: "+7.9 spots",
            positive: true,
            note: "Lower is better — average ranking moved up nearly eight positions.",
          },
          { label: "Average CTR", before: "1.3%", after: "1.3%", change: "steady", positive: true },
          {
            label: "Total clicks",
            before: "22.1K",
            after: "19.2K",
            change: "−13%",
            positive: false,
            note: "The prior period covers peak pool season (May–Dec); with rankings now much stronger, the next seasonal upswing should show it in the raw numbers.",
          },
          {
            label: "Total impressions",
            before: "1.7M",
            after: "1.52M",
            change: "−11%",
            positive: false,
            note: "Same seasonal comparison caveat as clicks above.",
          },
        ],
      },
      {
        label: "Site traffic",
        source: "Google Analytics 4",
        metrics: [
          { label: "Organic Search sessions", before: "15.9K", after: "27K", change: "+70%", positive: true },
          { label: "Active users (all channels)", before: "27.4K", after: "51K", change: "+86.1%", positive: true },
          { label: "New users (all channels)", before: "27.4K", after: "51K", change: "+86.2%", positive: true },
          {
            label: "Engagement time / user",
            before: "52s",
            after: "49s",
            change: "−5.7%",
            positive: false,
            note: "Roughly flat — traffic volume scaled without a meaningful drop in visit quality.",
          },
        ],
      },
    ],
  },
];
