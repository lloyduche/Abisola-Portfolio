import { Project, CaseStudy } from '../types';

export const HERO_DATA = {
  greeting: "hiii, bringing ideas to life through words <3",
  firstName: "Abisola",
  lastName: "Oluwatoyin",
  title: "Writer | Marketing, Communications & Brand Storytelling",
  lede: "I bring ideas to life through writing, thoughtful messaging and purposeful communication. My work spans marketing and communications, where I develop content, shape brand messages and contribute to campaigns that help businesses communicate their value and connect with their audiences.",
  roles: [
    "Marketing & Corporate Comms",
    "B2B & Fintech Messaging",
    "Brand Storytelling",
    "Substack Essayist · Abisola Writes"
  ],
  statsStickers: [
    { label: "₦1.07Q Stat Hook", pos: "s1" },
    { label: "1.4k+ on Substack", pos: "s2" },
    { label: "words with\npurpose", pos: "s3" }
  ]
};

export const ABOUT_DATA = {
  headline: "words with intent, strategy with soul.",
  paragraphs: [
    "My background in English Language has shaped how I approach writing, storytelling and communication. It has given me an appreciation for language, structure and meaning, and how the right words can shape understanding and influence how a message is received.",
    "Through my experience in marketing and corporate communications, I have brought this foundation into high-stakes business contexts—developing content, shaping brand messages and contributing to campaigns and communications designed around specific audiences and objectives.",
    "I understand that effective communication goes beyond putting words together. It requires an understanding of the audience, a clear sense of purpose, consistency in brand voice and the ability to communicate information in a way that is relevant, engaging and easy to understand.",
    "Whether I am working on marketing content, email campaigns, corporate communications or creative writing, I approach each piece with attention to language, context and the message it needs to convey."
  ],
  typewriterPhrases: [
    "publishing personal essays on Abisola Writes",
    "crafting B2B fintech messaging & positioning",
    "reactivating dormant sales pipelines",
    "curating high-impact webinar communications",
    "exploring womanhood & identity through prose"
  ],
  basedIn: "Nigeria (Open to Global & Remote Roles)",
  education: "B.A. English Language, Kwara State University (Second Class Upper)"
};

export const SKILLS = [
  "Email & Campaign Copywriting",
  "Product & Website Messaging",
  "Webinar & Event Communications",
  "Corporate & Internal Communications",
  "Newsletter & Editorial Writing",
  "Thought Leadership & Brand Storytelling",
  "Lead Nurturing & Campaign Reporting",
  "Creative Writing & Literary Prose",
  "SEO Content & Message Architecture",
  "Brand Voice Formulation"
];

export const TOOLS = [
  "Canva",
  "Microsoft Office",
  "Asana",
  "Calendly",
  "Medium",
  "Google Workspace",
  "Mailchimp",
  "Zoho CRM",
  "Notion",
  "Trello",
  "LinkedIn",
  "Instagram",
  "TikTok",
  "X (Twitter)",
  "Meta Business Suite",
  "Substack"
];

export const CORE_DISCIPLINES = [
  {
    num: "c",
    title: "email & campaigns",
    desc: "High-converting regulatory hooks, sequence copywriting, product emails, and pipeline reactivation that beat target benchmarks by 240%."
  },
  {
    num: "m",
    title: "product & web copy",
    desc: "Benefit-led positioning for fintech terminals, automated virtual accounts, e-invoicing platforms, and multi-rail payment gateways."
  },
  {
    num: "e",
    title: "events & webinars",
    desc: "End-to-end promotional journeys: invites, speaker spotlights, reminders, and lead capture resulting in 823+ signups and 520+ attendees."
  },
  {
    num: "s",
    title: "internal & culture",
    desc: "Human-centered workplace storytelling, employee spotlights, executive comms, and cultural features that foster authentic connection."
  }
];

export const PROJECTS: Project[] = [
  {
    id: "p1",
    badge: "01 · Tax & Compliance · Email Copywriting",
    title: "E-Invoicing Compliance Email",
    shortDesc: "Turning a mandatory government regulatory requirement into an urgent reason for businesses to adopt automated digital invoicing.",
    hook: "₦200,000. The Cost of Ignoring Nigeria E-Invoicing Mandate",
    tagCategory: "Tax & Compliance",
    tagColor: "primary",
    fullContent: {
      subject: "₦200,000. The Cost of Ignoring Nigeria E-Invoicing Mandate",
      preheader: "Every invoice your business issues is now subject to a new set of rules. The good news.",
      excerpt: [
        "Here’s a number worth paying attention to: ₦200,000.",
        "That's the administrative penalty for non-compliance with Nigeria's E-invoicing mandate under Section 104 of the Nigeria Tax Administration Act, including the failure to process taxable supplies through the required fiscalisation system. And that's before 100% of the tax due and interest charged at the prevailing Central Bank of Nigeria Monetary Policy Rate per annum come into play.",
        "If your business generates between ₦100 million and ₦5 billion in annual revenue, this is for you.",
        "Nigeria’s e-invoicing mandate is already in effect. Large companies above ₦5 billion began onboarding in late 2025. The next wave of businesses in your revenue bracket is already in scope, and the obligation is now clear.",
        "The question is no longer whether your business needs to comply. It’s whether you have the right system to handle it without disruption.",
        "Nigeria has officially moved its invoicing infrastructure into the digital age. The Nigeria Revenue Service introduced the NRS Merchant Buyer Solution (MBS), replacing traditional invoices with structured digital invoices for all transactions."
      ],
      details: "This email used a clear financial hook to introduce Nigeria’s e-invoicing requirements, explain the implications of non-compliance and speak directly to businesses within the relevant revenue range. Shows the complete approved email draft with opening penalty hook, operational pillars, ERP vs Non-ERP integration options, validated invoice anatomy, and dual CTAs.",
      ctaText: "Apply for E-Invoicing / Book an E-Invoicing Consultation"
    }
  },
  {
    id: "p2",
    badge: "02 · Fintech & Digital Payments · Conversion Copy",
    title: "Payment Product Emails & Smart POS",
    shortDesc: "Anchoring product positioning with Nigeria's ₦1.07 quadrillion bank transfer volume to highlight payment reconciliation challenges and introduce automated virtual accounts.",
    hook: "Stat Proof: 11.2B NIP transactions worth ₦1.07 quadrillion in 2024",
    tagCategory: "Fintech & Payments",
    tagColor: "secondary",
    fullContent: {
      subject: "Why Businesses Need a Smarter Way to Confirm Bank Transfers",
      preheader: "Make Bank Transfer Payments Easier to Confirm",
      excerpt: [
        "Bank transfer is one of the most preferred ways to pay in Nigeria. In 2024 alone, over 11.2 billion NIP transactions worth ₦1.07 quadrillion were processed, reflecting just how deeply bank transfers are woven into everyday business and consumer payments.",
        "What does this mean for your business? It means millions of customers already prefer to pay by bank transfer, whether in-store or online. The real opportunity is to make that payment experience easier to confirm, track, and manage.",
        "For many businesses, confirming incoming transfers is still a challenge. Delays in receiving alerts, difficulty tracking payments, and manual reconciliation can slow down operations. For high-volume businesses, this challenge becomes even greater."
      ],
      details: "Additional Smart POS Email Hook: 'The Smart POS Built for Growing Businesses — Accept payments, access merchant loans, and unlock more opportunities with one smart POS. Built to Help Your Business Do More.'",
      ctaText: "Get Started With Virtual Accounts Service"
    }
  },
  {
    id: "p4",
    badge: "03 · Event Communications · Lead Funnels",
    title: "Events & Webinar Communications",
    shortDesc: "Developed event-facing and corporate email communications for webinars, industry events, sponsored experiences and brand activations.",
    hook: "Results: 823+ registrations · 527+ attendees · 30 verified enterprise leads",
    tagCategory: "Webinar & Events",
    tagColor: "card",
    fullContent: {
      subject: "When Women Move: Scaling Through Digital Commerce — RedSpace Webinar",
      preheader: "Special Women's Month Edition · Thursday, 19th March 2026 · Live on Zoom",
      details: `
• 01. When Women Move — Women's Month Webinar:
Developed communications for a webinar celebrating women's contributions, participation and opportunities within business and the digital economy. The session formed part of the Women's Month engagement programme, exploring advancement through digital commerce.
- Reported Results: 155 registrations · 139 attendees

• 02. RedSpace Webinar — E-Invoicing in Nigeria: Tax, Regulatory & Compliance Demystified:
Developed audience-facing email communication organised in partnership with the Nigeria Revenue Service (NRS). Introduced regulatory changes, tax law implications, implementation readiness and the MBS e-Invoicing platform.
- Reported Results across two editions: 823+ registrations · 527+ attendees · 30 confirmed enterprise leads

• 03. Jollof & Palmie 2026 — Sponsorship & Brand Activation:
Announcement email communicating Redtech's sponsorship as official payment partner at Muri Okunola Park. Powering marketplace payments via RedPay Move Station with motorcycle photo area, Polaroid wall, interactive games, mascot and prizes. (Headline: "Jollof & Palmie Moves to RedPay" · Closing: "Ride. Eat. Play. Move to RedPay.")

• 04. Rocky's Cookout — Official Payment Partnership:
Independence Day All White Party at Baywater Park Event Centre, Lekki. Vendor POS payment support and RedPay booth experience with Spin & Win activation. (Closing: "Enjoy the Moment. Pay with RedPay.")

• 05. Digital PayExpo 2026 — Industry Event Communications:
Participation in Digital PayExpo 2026 at Landmark Event Centre, featuring CEO Emmanuel Ojo on "Scaling Payments in Africa" panel, promoting Redtech After Hours: Executive Mixer Edition.

• 06. iHEAL Global Youth Impact Forum 2026 — Partnership Announcement:
Partnership with Waterlight Save Initiative at NAF Conference Centre, Abuja. Youth empowerment and secure payment infrastructure for beneficiary disbursements. (Closing: "Together, We Enable Opportunity.")

My Role: Event email copywriting, audience-facing communications, sponsorship and partnership messaging, event information and brand activation communications.
      `
    }
  },
  {
    id: "p3",
    badge: "04 · Website Copywriting · Product Messaging",
    title: "Full Product Messaging Suite",
    shortDesc: "Translating intricate technical features into benefit-led value propositions across Smart POS terminals, Automated Virtual Accounts, Payment Gateways, and Electronic Invoicing.",
    hook: "Products: Smart POS · Virtual Accounts · Payment Gateway · E-Invoicing",
    tagCategory: "Product Messaging",
    tagColor: "accent",
    fullContent: {
      details: `
• Smart POS: Accept Payments Anywhere With a Smarter POS Terminal — A durable POS solution designed to help businesses accept local and international cards, bank transfers and QR payments, with access to business tools and financing opportunities. (CTA: Request a Free POS Terminal)

• Virtual Accounts: Create Smart Virtual Accounts for Faster Business Payments — Automated virtual accounts designed to simplify payment collections, improve transaction visibility and make reconciliation easier. (CTA: Get Started With Virtual Accounts)

• Payment Gateway: Accept Payments Anytime Anywhere Cards • Transfers • Wallets — Messaging focused on flexible online payment acceptance, multiple payment options, integration capabilities and secure transaction processing. (CTA: Get Started)

• E-Invoicing: Send Smart Invoices That Help You Get Paid Faster — Electronic invoicing messaging highlighting invoice management, payment reminders, payment tracking and compliance requirements. (CTA: Schedule a Consultation / Book a Demo)
      `
    }
  },
  {
    id: "p5",
    badge: "05 · Internal Communications · Cultural Storytelling",
    title: "Employee Storytelling & Internal Communications",
    shortDesc: "Employee engagement features including interviews with colleagues on workplace friendships, and 'Behind the Code' spotlighting engineering talent behind systems.",
    hook: "Angle: 'We spend more than 2,080 hours each year at work...'",
    tagCategory: "Internal Comms",
    tagColor: "primary",
    fullContent: {
      subject: "Feature Headline: We Asked Four Colleagues How Their Friendships Began. Here's What They Told Us.",
      excerpt: [
        "The best friendships are rarely planned. Sometimes, it is as simple as meeting the right person, at the right time, and in the right situation, and this can happen in the workplace.",
        "We spend more than 2,080 hours each year at work. It is more likely for the spark of friendship to ignite with colleagues whom we spend the most hours with, physically and remotely. Some people make work easier, not because they help you finish your tasks, but because they remind you to eat, save you a seat, check in after a difficult meeting, or simply know when you need a laugh."
      ],
      details: `
• The Stories Behind Workplace Friendships:
Created an employee storytelling feature built around interviews with four pairs of colleagues, exploring how their friendships began, the small moments that strengthened them and the role those relationships play in working life. The piece combined interview material, narrative structure and editorial writing to turn individual experiences into a broader story about belonging, collaboration and workplace culture. Related internal communication encouraged colleagues to participate in an International Friendship Day activity.

• Behind the Code: Kofoworola at the Core of the System:
An employee feature exploring the expertise and contribution behind technology development, offering readers a closer look at the people and thinking behind the systems being built.
      `,
      links: [
        {
          label: "Workplace Friendships",
          url: "https://redtechlimited.com/we-asked-four-redtech-colleagues-how-their-friendships-began-heres-what-they-told-us/"
        },
        {
          label: "Behind the Code",
          url: "https://redtechlimited.com/behind-the-code-kofoworola-at-the-core-of-the-system/"
        }
      ]
    }
  },
  {
    id: "p6",
    badge: "06 · Corporate Publishing · Newsletter Writing",
    title: "Newsletters & Business Communications",
    shortDesc: "Worked on recurring business and corporate newsletters, translating product developments, company initiatives, campaigns and industry information into relevant communications for different audiences.",
    hook: "Metrics: 20,236 subscribers reached · 39.5% avg open rate · 19,946 delivered",
    tagCategory: "Newsletters",
    tagColor: "secondary",
    fullContent: {
      details: `
• 01. Momentum RedPay Newsletter:
Contributed to the planning and production of a recurring business newsletter featuring product information, marketing campaigns, webinars and customer-facing updates.
- 20,236 subscribers reached
- 19,946 emails delivered (98.6% delivery rate)
- 8,295 opens (39.5% average open rate)
- 150 clicks (0.8% click rate)

• 02. The Redtech Brief:
Contributed to a corporate newsletter communicating company developments, products, initiatives and corporate stories to its readership.
- 2,301 subscribers reached
- 2,268 emails delivered (98.6% delivery rate)
- 839 opens (37.0% open rate)
- 10 clicks (0.4% click rate)
      `
    }
  },
  {
    id: "p7",
    badge: "07 · Thought Leadership · Article Writing & Research",
    title: "Thought Leadership",
    shortDesc: "A long-form business article examining how digital payments and technology infrastructure support businesses across Africa, from small merchants to larger enterprises.",
    hook: "Work: Article Writing | Research | Editorial Writing | Creative Writing",
    tagCategory: "Thought Leadership",
    tagColor: "accent",
    fullContent: {
      subject: "Building the Technology That Keeps African Businesses Moving",
      excerpt: [
        "Across Africa, digital payments and commerce are becoming part of how businesses operate, from roadside kiosks and social-media storefronts to supermarkets, hotels and large enterprises. The spread of mobile technology has helped drive this change.",
        "Yet adoption does not follow a single pattern. Africa is not moving neatly from cash to cards. Businesses are operating across a mix of cash, bank transfers, mobile money, cards, QR codes and online payments, choosing what works for a particular customer or transaction.",
        "Those choices can change within one trading day. A merchant may use cash in the morning to pay suppliers or workers, accept more digital payments during busy customer hours, and spend the evening reconciling transactions and preparing to restock.",
        "The technology may be digital, but the decisions remain practical: Did the money arrive? Can I use it now? Can I account for it later?"
      ],
      details: `
• Additional Business Articles:
- The Trust Layer: Why Governance Matters in Fintech
- The Future of Fashion Retail in Nigeria: E-Commerce and Digital Payments

• Personal Essays & Creative Writing:
My personal writing explores love, identity, womanhood, adulthood and the experiences that shape how we understand ourselves and other people.
      `,
      blogLink: "https://redtechlimited.com/building-the-technology-that-keeps-african-businesses-moving/",
      substackLink: "https://abisolawrites.substack.com/",
      mediumLink: "https://medium.com/@oluwatoyinabisola122/dear-diary-adulthood-debited-me-50k-0e719c22aaf0"
    }
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: "cs1",
    title: "E-Invoicing: From Compliance Messaging to Qualified Leads",
    discipline: "B2B Marketing Communications · Product Messaging · Email Copywriting · Lead Generation",
    project: "The introduction of Nigeria’s e-invoicing requirements created a rare opportunity to educate business owners about fiscal compliance while positioning the platform as an intuitive, indispensable operational solution. The campaign centered on communicating immediate business relevance, demystifying legal repercussions of non-compliance, and directing prospects toward an educational webinar.",
    approach: "I developed messaging around the business implications of e-invoicing, using compliance as an entry point to make the product relevant to prospective customers. The communication approach connected educational content with a clear next step, directing interested businesses towards the webinar and creating an opportunity for further engagement with the product.",
    execution: [
      "Developed email copy communicating the relevance of e-invoicing to businesses.",
      "Used compliance-related messaging (₦200,000 penalty hook) to establish urgency and explain the need for an appropriate solution.",
      "Connected educational messaging seamlessly with webinar registration.",
      "Supported the campaign's lead-generation objective through product-focused communication."
    ],
    role: "Email copywriting, product messaging and webinar communications.",
    results: [
      { stat: "30", label: "Confirmed qualified leads generated" },
      { stat: "₦200k", label: "Financial penalty hook established" },
      { stat: "100%", label: "Alignment with Section 104 Tax Act" }
    ],
    quote: "Every invoice your business issues is now subject to a new set of rules. The good news: compliance can be automated."
  },
  {
    id: "cs2",
    title: "Lead Generation & Dormant Pipeline Reactivation",
    discipline: "Direct Marketing · Email Campaigns · Lead Nurturing · Campaign Reporting",
    project: "Redtech's lead-generation activities involved reaching prospective customers across website and email channels, reviewing existing leads and identifying opportunities to move prospects towards product adoption. The work covered products including RedPay POS, E-Invoicing and the Payment Gateway.",
    approach: "I worked with targeted prospect lists and product-specific messaging to support outreach and lead nurturing. The approach combined email communication with outbound calling and the review of existing leads to support pipeline reactivation. Campaign communication focused on making product value clear and giving prospects a relevant reason to engage.",
    execution: [
      "Wrote targeted marketing emails for prospective customers across categories.",
      "Reviewed and segmented leads across relevant product lines.",
      "Supported dormant-pipeline reactivation for POS, E-Invoicing and Payment Gateway.",
      "Conducted outbound calls as part of direct-marketing touchpoints.",
      "Tracked outreach and campaign performance to support reporting."
    ],
    role: "Marketing email copywriting, lead nurturing, direct-marketing support and campaign reporting.",
    results: [
      { stat: "416", label: "Total leads generated across web & email" },
      { stat: "12%", label: "Lead-to-active conversion rate (vs 5% target)" },
      { stat: "2.4x", label: "Target benchmark outperformance" },
      { stat: "228", label: "Targeted marketing emails delivered" },
      { stat: "200", label: "Outbound calls logged and supported" }
    ]
  },
  {
    id: "cs3",
    title: "Property Marketing: Turning a Luxury Listing into Buyer Interest",
    discipline: "Property Copywriting · Email Marketing · Campaign Communications · Creative Coordination",
    project: "The project involved marketing a luxury three-bedroom apartment in Old Ikoyi, listed at ₦1.3 billion. The property offered premium features, including ensuite bedrooms, a boys' quarters, a study, a swimming pool, a gym and smart-home amenities. The challenge was to present the property in a way that communicated its value to prospective buyers and encouraged them to make enquiries.",
    approach: "I approached the listing as a storytelling and positioning exercise, focusing on how the property's features could be communicated as part of a premium living experience. Rather than relying on a straightforward list of amenities, the messaging highlighted the property's comfort, privacy and modern conveniences, helping prospective buyers understand the appeal of the listing.",
    execution: [
      "Property copywriting: Wrote the property description for the luxury three-bedroom Old Ikoyi listing.",
      "Email marketing: Developed copy for an email flyer promoting the ₦1.3 billion property.",
      "Social content: Contributed to property-focused content designed to showcase premium listings and encourage direct enquiries.",
      "Creative coordination: Collaborated with the design team to align copy and visual presentation with the property's positioning."
    ],
    role: "Content Writer & Creative Coordinator. Developed property messaging, wrote email-flyer copy and collaborated with the design team.",
    results: [
      { stat: "₦1.3B", label: "Luxury property listing valuation" },
      { stat: "+40%", label: "Increase in property enquiry DMs over 3 months" },
      { stat: "<48h", label: "Direct buyer inquiries following publication" }
    ],
    link: {
      label: "View Live Property Post on Instagram ↗",
      url: "https://www.instagram.com/p/DL18Ka-s6xj"
    }
  },
  {
    id: "cs4",
    title: "Abisola Writes: Building an Independent Writing Publication",
    discipline: "Editorial Writing · Creative Writing · Storytelling · Audience Development",
    project: "Abisola Writes is my independent writing publication on Substack, exploring love, womanhood, identity, adulthood and the complexities of everyday life through personal essays, literary prose and fiction. The publication gives me space to develop my voice as a writer, experiment with storytelling and share work that invites readers to recognise parts of their own experiences in mine.",
    approach: "I use personal observation, emotional honesty and narrative-driven writing to explore familiar experiences from distinctive perspectives. My work spans reflective essays, explorations of relationships and womanhood, and fiction rooted in character, place and lived experience.",
    execution: [
      "A Word Greater Than Luck",
      "The Geography of Loving You",
      "A Lexicon of You",
      "Love As I’ve Come to Know It",
      "The Things We Never Said: Part One — Mokola"
    ],
    role: "Independently develop ideas, write, edit and publish my work. Shape editorial direction through topic selection and narrative themes.",
    results: [
      { stat: "1,469", label: "Total dedicated subscribers" },
      { stat: "28,100", label: "Total views over the past year" },
      { stat: "100%", label: "Organic word-of-mouth readership growth" }
    ],
    link: {
      label: "Read Abisola Writes on Substack ↗",
      url: "https://abisolawrites.substack.com"
    }
  },
  {
    id: "cs5",
    title: "Product Marketing: Turning Product Features into Business Value",
    discipline: "Product Marketing · Email Copywriting · Feature-to-Benefit Messaging",
    project: "Showcase the marketing emails and collateral developed for products including POS, Payment Gateway, Virtual Accounts, E-Invoicing and Value-Added Services. The project examined how product features were translated into clear business benefits and how messaging was adapted to different products and audiences.",
    approach: "Every product capability was framed through user-centric value: eliminating operational headaches, mitigating financial penalties, reducing failed payment reconciliation times, and empowering business expansion.",
    execution: [
      "RedPay Smart POS: Repositioned as an all-in-one terminal with card, transfer, QR support, and merchant loan access.",
      "Automated Virtual Accounts: Streamlining collections and ending manual payment alert delays.",
      "Payment Gateway: Borderless online checkout across cards, bank transfers, and digital wallets.",
      "E-Invoicing: Automated tax compliance, invoice tracking, and automated reminders."
    ],
    role: "Product messaging architecture, conversion email copywriting, and feature-to-benefit translation.",
    results: [
      { stat: "4", label: "Flagship fintech products repositioned" },
      { stat: "Value-First", label: "Clear messaging framework deployed" }
    ],
    quote: "Accept payments. Unlock opportunities. Grow with confidence."
  }
];

export const RESUME_DATA = {
  summary: "Versatile Writer and Communications Specialist with a background in English Language and demonstrated success across brand marketing, regulatory compliance funnels, product positioning, and editorial storytelling. Proven track record of generating 400+ B2B leads, achieving a 12% conversion rate (240% above target), growing an independent Substack publication to 1,400+ subscribers, and leading event funnels with 820+ registrants.",
  experiences: [
    {
      role: "Brand Marketing & Corporate Communications",
      company: "Redtech Limited",
      period: "October 2025 – September 2026",
      points: [
        "Developed marketing campaigns, product messaging, email copy, newsletters and corporate communications supporting product marketing and lead generation initiatives.",
        "Generated 416 leads across website and email channels with a 12% lead-to-active conversion rate, exceeding the 5% corporate benchmark.",
        "Authored regulatory tax compliance email sequence achieving 30 qualified B2B leads from a single webinar edition.",
        "Produced 10 business newsletter editions reaching 20,236 subscribers with a 26.5% average open rate."
      ]
    },
    {
      role: "Writer & Editorial Lead",
      company: "Abisola Writes (Substack)",
      period: "June 2023 – Present",
      points: [
        "Research, write, edit and publish essays, fiction and long-form editorial content exploring storytelling across personal essays, culture and human experiences.",
        "Grew dedicated global audience to 1,469 subscribers and 28,100+ views in 12 months with 100% organic retention.",
        "Curated editorial calendars, managed subscriber relationships, and conducted deep narrative research."
      ]
    },
    {
      role: "Earlier Experience",
      company: "Estatelinks Limited · Hackapath · United Bank for Africa",
      period: "2022 – 2024",
      points: [
        "Experience spanning content development, luxury property copywriting (₦1.3B listing), email campaigns, B2B communications and campaign content.",
        "Supported hackathon media, press releases, and banking corporate customer communications."
      ]
    }
  ],
  education: {
    degree: "B.A. English Language (Second Class Upper Division)",
    school: "Kwara State University"
  },
  areasOfExpertise: [
    "Content Writing",
    "Copywriting",
    "Editorial Writing",
    "Marketing Communications",
    "Corporate Communications",
    "Product Marketing",
    "Email Marketing",
    "Brand Storytelling",
    "Creative Writing",
    "Campaign Communications",
    "Lead Nurturing",
    "SEO Content"
  ]
};
