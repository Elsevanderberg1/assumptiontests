export type EvidenceStrength = 1 | 2 | 3 | 4 | 5;

export type Category =
  | "Public Data"
  | "Self-Reporting"
  | "Observation"
  | "Watch User with Artefact"
  | "Real-World Test"
  | "Community & Network"
  | "Expert Interview"
  | "Team Feedback"
  | "Customer Feedback"
  | "Customer Behavior";

export type Phase =
  | "Understand Problem Space & Market"
  | "Test Value Proposition"
  | "Early Product"
  | "Mature Product";

export type CostLevel = "Free" | "Low" | "Medium" | "High" | "Variable";

export interface Method {
  id: number;
  name: string;
  category: Category;
  phase: Phase;
  evidenceStrength: EvidenceStrength | string;
  evidenceDetail: string;
  descriptionShort: string;
  descriptionFull: string;
  cost: string;
  costLevel: CostLevel;
  practicalApplication: string;
}

export const methods: Method[] = [
  {
    id: 1,
    name: "Studies, Reports, Public Data",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Public research is about broad audiences and may not reflect your niche. Article headlines are often taken out of context, and even reputable sources can be biased. 34% of scientists admitted to sometimes applying questionable research practices. Facts and figures relying on many assumptions are far easier to get wrong than right.",
    descriptionShort: "Deep dive into your problem space, target audience, or industry using online studies, reports, and public data sources.",
    descriptionFull: "There are plenty of online sources that allow you to deep dive into your problem space, target audience, or industry. Online studies, reports and public data are especially helpful when you're defining your audience size/market size and analyzing your competitors' strengths and weaknesses.\n\nSome examples of reputable sources:\n- Industry trends: McKinsey, Bain&Co\n- Consumer behavior & opinion: Gallup, GWI\n- Industry specific reports: Fintech, SaaS, Ecommerce\n- Data/startup news: Crunchbase, Statista, Growjo, TechCrunch\n\nLimitations:\n- Research studies are generally about broad audiences. If you're targeting a niche audience, you'll most likely struggle to find studies reflecting that niche.\n- Article headlines are often taken out of context, so trace back to the original source.\n- Facts and figures can be unreliable due to human bias and mathematical errors.",
    cost: "Can vary from free to several thousand (for certain studies), to monthly subscription fees for more intensive use (e.g. Crunchbase, Statista).",
    costLevel: "Variable",
    practicalApplication: "Company Builders start their process by digging into industry trends to identify a market opportunity and get the lay of the land. This desktop research is followed up with more detailed customer research (qualitative interviews, surveys) to see if there truly is an opportunity."
  },
  {
    id: 2,
    name: "User Reviews & Discussions",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). While you can learn a lot about unmet customer needs, the information is anecdotal and should be treated as a starting point for more experimentation. Just because the same criticism is repeated on a forum doesn't mean your assumption is validated.",
    descriptionShort: "Crawl information about target customers' unmet needs from discussion forums, review sites, app stores, and YouTube channels.",
    descriptionFull: "You can crawl a lot of information about your target customers' unmet needs by diving into discussion forums, review sites, or YouTube channels. Which source is right depends on your target audience.\n\nFor techies: Reddit or Substack. For business buyers: G2 or Capterra. For restaurant visitors: Google or Yelp.\n\nYou can scrape data using low-cost tools (e.g. Simplescraper) or do it manually. Look for:\n- A pattern of workarounds or hacks that customers are using (indicates no perfect solution exists)\n- Feature requests/complaints about existing products\n\nTimebox yourself because it's easy to go down the rabbit hole! The information should be a starting point for more experimentation.",
    cost: "Low. Tools like Simplescraper are free or very cheap.",
    costLevel: "Low",
    practicalApplication: "Scraping the internet for unmet customer needs is common practice for CRO experts, venture-building/consultants and Product Managers."
  },
  {
    id: 3,
    name: "Search Trend Analysis",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Search volume data gives you insights into whether your target audience is already aware of the problem or looking for a specific solution. However, you won't be able to get results that are particularly indicative of your niche target audience.",
    descriptionShort: "Analyze search volume data to understand whether your target audience is aware of the problem or looking for specific solutions.",
    descriptionFull: "Analyzing search volume data gives you insights into whether your target audience is already aware of the problem you're trying to solve, or is looking for a specific product or product category. If you're introducing a new product category, search volume will be low or non-existent.\n\nStart by identifying which tools you want to use (Google Trends, Google Keyword Planners, Google 'people also ask', Bing keyword research, etc.). Define a geographical area for your search. Decide what you want to explore (pains, gains, jobs, existing solutions, etc.). Take screenshots and notes during your research.\n\nThe downside is that you won't be able to get results that are particularly indicative of your niche target audience.",
    cost: "Most tools (e.g. Google Trends, Keyword Planner) are free.",
    costLevel: "Free",
    practicalApplication: "Use search trend analysis early in your discovery process to validate whether there is existing awareness and demand for the problem you're solving. Combine with other methods for stronger validation."
  },
  {
    id: 4,
    name: "Competitor Research & Mystery Shopping",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Competitor research can help prove that a certain pain point is not solved by anyone else, but competitors will continue to adapt their strategies. Never treat competitive intelligence as a static asset; it requires continuous updating.",
    descriptionShort: "Analyze competitors' strategies, landing pages, customer journeys, and marketing materials to identify gaps in the market.",
    descriptionFull: "After identifying your key competitors, look at them for inspiration and to identify gaps in the market. Approaches include:\n- Analyzing landing pages, ad campaigns, and marketing materials (Similarweb)\n- Analyzing the personas competitors address\n- Analyzing web traffic (Similarweb)\n- Mystery shopping: Sign up and experience the full customer journey. Map the entire journey in a flowchart tool like Miro.\n\nImportant: Your competitors probably aren't who you think they are. For many SaaS products, their key competitor isn't another SaaS product, but Microsoft Excel. Ask target customers 'How else have you tried to solve the problem?' to understand your competitive landscape.\n\nAlthough useful to keep an eye on competitors, don't get stuck in rearview mirror-looking behavior.",
    cost: "Low. Similarweb's marketing tool has a free trial, and checking website traffic is free forever.",
    costLevel: "Low",
    practicalApplication: "Map competitors' customer journeys to identify friction points and gaps. Use insights to inform your own value proposition and differentiation strategy."
  },
  {
    id: 5,
    name: "Review FAQ Pages of Competitors",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). FAQ pages reveal customer objections in disguise, but the information is indirect and requires interpretation. Ensure to timebox your work.",
    descriptionShort: "Dive into competitors' FAQ pages to uncover real customer objections and unmet needs disguised as questions.",
    descriptionFull: "Diving deep into your competitors' FAQ pages gives you unique insights into the problems that real customers are facing. The questions on the FAQ page are actually customer objections in disguise. Ask yourself why customers might have been putting this forward.\n\nExamples:\n- 'Where is this product made' = How can I validate the quality?\n- 'What are popular products' = What would you recommend to me, and what fits my use case?\n- 'How long does the battery last' = I've been disappointed by battery life in the past\n\nEnsure to timebox your work because it's easy to get lost down the rabbit hole.",
    cost: "Low. Only requires time and effort.",
    costLevel: "Free",
    practicalApplication: "Use competitor FAQ analysis to understand the key objections your target audience has. Address these objections proactively in your own messaging and product design."
  },
  {
    id: 6,
    name: "Leverage / Create Communities",
    category: "Community & Network",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Communities are a starting point for engagement and word of mouth, but community interactions alone don't validate your assumptions. They represent an opportunity to access tightly-knit groups for further research.",
    descriptionShort: "Tap into existing online/offline communities or build your own to reach your target audience and kickstart word of mouth.",
    descriptionFull: "There are plenty of online and offline communities you can tap into, or you can start building your own. Communities are great starting points for new startups since they represent tightly-knit groups likely to reference each other when making buying decisions.\n\nLeveraging existing communities:\n- Online: Facebook groups, forums, subreddits, Discord channels, blogs, Twitch, YouTube, ProductHunt\n- Offline: cafes, yoga groups, meetups, conferences\n\nYou can invite them to interviews/surveys/co-creation, drive them to your landing page, social media ads, or crowdfunding campaign.\n\nBuilding your own community:\nA database of engaged prospects is extremely valuable, but community-building takes time, perseverance, and hard work. For certain product categories (e.g. tools for freelancers), it's a must-have.\n\nCase studies: Etsy visited craft fairs to identify their ideal community. Facebook started by targeting Harvard students. Tinder spread through specific colleges and fraternities.",
    cost: "Leveraging existing communities is free. Building your own entails maintaining a webpage, forum, or newsletter plus human effort.",
    costLevel: "Variable",
    practicalApplication: "Identify where your target audience naturally gathers online and offline. Use these communities as a starting point for recruitment into interviews, surveys, and co-creation processes."
  },
  {
    id: 7,
    name: "Qualitative Interviews with Experts (1:1)",
    category: "Expert Interview",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Expert interviews partially circumvent the self-reporting problem because experts have real-world experience with how customers actually behave. You need to factor in differences between your target audience and the expert's experience base.",
    descriptionShort: "Interview industry experts, ex-employees of competitors, partners, and suppliers to gain real-world insights about customer behavior.",
    descriptionFull: "Experts can be project stakeholders, industry experts, ex-employees of competitors, or partners & suppliers. The biggest problem with customer interviews (people don't behave as they say they will) can be partially circumvented by speaking to experts who have real-world experience.\n\nDepending on what you're learning:\n- Strategy insights: VP/head-of level\n- Customer/prospect behavior: Marketing, sales, CS agents\n\nFor ex-employees of competitors, retain anonymity using third-party providers like Alphasights (high-end) or Expertwired (cheaper, self-service).\n\nPartners & suppliers: Find out whether you can feasibly run the business.\nStakeholders: Get buy-in from key internal players.\n\nExpert interviews can help you understand which target audience is right, what promises get customers 'through the door', pricing and cost structures, and help avoid expensive pitfalls.",
    cost: "A 1-hour expert interview will cost approximately \u20AC200-400. Interviews with partners and stakeholders are typically free.",
    costLevel: "Medium",
    practicalApplication: "Use expert interviews early in your discovery process to shortcut learning about customer behavior, market dynamics, and competitive landscape. Particularly valuable when entering a new market."
  },
  {
    id: 8,
    name: "Qualitative Customer Interviews (1:1)",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). As David Ogilvy said: 'People don't think what they feel, don't say what they think, and they don't do what they say.' Customer interviews are extremely valuable but findings need to be backed up by real-world tests. Self-reporting is inherently unreliable.",
    descriptionShort: "Open-ended interviews exploring target audience's pain points, challenges, jobs to be done, gains, and willingness to pay.",
    descriptionFull: "An interview with open questions aimed at exploring your target audience's pain points, challenges, jobs to be done, gains, and willingness to pay. A prerequisite is knowing exactly who you want to target.\n\nRecommend 5-15 qualitative interviews before starting to build your product. Be aware that humans are inherently bad at self-reporting.\n\nKey tips:\n- Focus on the most important topics, keep it to max 30 minutes\n- This is not a chance to pitch; the goal is to learn\n- Ask if you can come back later for feedback on prototypes or beta launches\n- Note the language your interviewees use (language/market fit)\n- Ask how else they've tried solving their problem (reveals true competitors)\n- For willingness to pay: ask at which price point the solution is a) too expensive, b) expensive, will buy, c) inexpensive, will buy, d) too cheap\n\nContinue having open conversations with customers after launch, moving from exploratory to validation interviews.",
    cost: "Low. In most cases, interviewees won't need financial compensation.",
    costLevel: "Low",
    practicalApplication: "Most startups do at least 10-15 customer interviews in the early phases. Rows.com purposefully included a 30-minute intro call in their account creation process to understand who their prospects were and how they currently use spreadsheets."
  },
  {
    id: 9,
    name: "A Day in the Life (1:1)",
    category: "Observation",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Observing real behavior provides stronger evidence than self-reporting, but the small sample size (one person at a time) limits generalizability. The observation must take place at the location where the challenge naturally occurs.",
    descriptionShort: "Observe a target customer during their day to learn about their real-world behaviors, jobs, pains, and gains through direct observation.",
    descriptionFull: "This method is about observing the subject during a day in their life (or several hours) to learn about their jobs, pains, and gains. Key: identify the right, niche target audience beforehand.\n\nRather than asking how they would solve problems, you watch them go about their day and see how they behave in real life. The observation should take place at the regular place where the challenge occurs (e.g. workplace).\n\nAfter observing a behavior, you can ask 'why', but observation should remain the focus. Don't interrupt the subject's natural behavior too much.\n\nA simple version: Ask your target customer to let you watch while they use the tools they currently use (that you're aiming to replace) and narrate their journey. Identify friction points.\n\nCase studies: Intuit's follow-me-home program visits customers at their workplace to watch them use software. Rows.com asked target customers to share their existing spreadsheets to learn about use cases.",
    cost: "Low. You may need to compensate subjects for their time and incur travel costs.",
    costLevel: "Low",
    practicalApplication: "Use observation when you need to understand real behavior rather than reported behavior. Particularly valuable for complex workflows or when you suspect users may not accurately describe their current processes."
  },
  {
    id: 10,
    name: "Card Sorting (Group)",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Card sorting relies on self-reported priorities, which may not reflect actual behavior. However, it's useful for understanding how customers conceptualize and prioritize their pains, gains, and jobs.",
    descriptionShort: "Invite target customers to sort and rank cards representing pains, gains, and jobs to understand priorities and mental models.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.). Create cards (analog or digital) containing the different pains, gains, and jobs you've uncovered.\n\nInvite 15-20 target customers for a card sorting session where they map and rank the cards in each category. Ask them to talk through their thought process. Write additional cards if new jobs, pains, or gains come up.\n\nSessions should take max 45 minutes.",
    cost: "Low, depending on whether target customers need compensation. Miro offers a great free whiteboard tool.",
    costLevel: "Low",
    practicalApplication: "Use card sorting after initial discovery interviews to validate and prioritize the pains, gains, and jobs you've uncovered. The group dynamic often reveals insights that 1:1 interviews miss."
  },
  {
    id: 11,
    name: "Buy a Feature (Group)",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). The play money mechanism adds a layer of forced prioritization that makes results more meaningful than simple ranking, but it's still self-reported and may not reflect actual purchase behavior.",
    descriptionShort: "Give target customers play money to 'buy' features from a list, revealing which features they value most through forced prioritization.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.) and is executed in a group setting with ideally 15-20 target customers.\n\nCreate a list of 15-30 features and assign a play money budget for each participant. Each customer allocates their money to the features they want most. They can bundle their funds together to receive more features.\n\nThe group dynamic and limited budget force genuine prioritization decisions.",
    cost: "Low, depending on whether target customers need compensation for their time.",
    costLevel: "Low",
    practicalApplication: "Use 'Buy a Feature' when you have a list of potential features and need to understand which ones your target audience values most. The forced trade-offs reveal true priorities."
  },
  {
    id: 12,
    name: "Discovery Survey",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Surveys are great for uncovering customer jobs, pains, and gains at scale, but suffer from the inherent problem of poor self-reporting. Using open-ended questions improves quality but makes data interpretation more time-consuming.",
    descriptionShort: "A survey with mostly open-ended questions to uncover customer jobs, pains, gains, and willingness to pay at scale.",
    descriptionFull: "Create the discovery survey after having performed at least 5 qualitative interviews, so you can use the language of your target customer and ask the right questions. Only send to respondents in your niche target audience.\n\nA discovery survey should mostly contain open-ended questions. Using multiple-choice is likely to limit interviewees too much at this early stage. Most survey tools offer built-in word clouds.\n\nCan include the Willingness To Pay question. Define upfront how many responses will be sufficient (considering confidence level and sample size) and assume a 10-20% response rate.\n\nDon't forget to ask respondents whether you can contact them again. Start building your bench of trusted users!",
    cost: "Depends on whether you need to offer a reward. Most tools are free up to a certain count (SurveyMonkey, TypeForm).",
    costLevel: "Low",
    practicalApplication: "TaxFix New Markets gathers approximately 500 customer survey responses to understand the pains, gains, and jobs of local customers when validating new markets, working with local tax consultants to distribute surveys."
  },
  {
    id: 13,
    name: "Storyboard",
    category: "Self-Reporting",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5, self-reporting). Storyboards help explore which value propositions resonate, but rely on customer self-reporting about hypothetical scenarios. Results become more trustworthy with a narrow target audience.",
    descriptionShort: "Illustrate different value propositions on storyboards and invite target customers to provide feedback on which resonates most.",
    descriptionFull: "This method requires input from previous exercises such as qualitative interviews or surveys. Work with an internal team (Design, Marketing, Product) to illustrate several different value propositions and scenarios on storyboards.\n\n10-15 target customers are invited to provide feedback on each storyboard. The goal is to learn about customer jobs, pains, and gains and see which value proposition resonates. Write down any additional quotes from customers.\n\nAs with all research methods, the results become more trustworthy if you're more precise about narrowing down your target audience upfront.",
    cost: "Low cost. Create storyboards analog (whiteboard, sticky notes, markers) or digitally (Miro, Figma).",
    costLevel: "Low",
    practicalApplication: "Use storyboards when you have multiple value proposition hypotheses and want to quickly learn which one resonates best with your target audience before investing in building anything."
  },
  {
    id: 14,
    name: "Offline Pitching",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase, so gauging reactions is imprecise. Upside: you might walk away with real prospects. Works better for services than software products that aren't ready yet.",
    descriptionShort: "Test your elevator pitch at events where your target audience is present to gauge real-time reactions to your value proposition.",
    descriptionFull: "Test your elevator pitch by using it in the wild. Visit an occasion where your target audience is present (meetup, industry conference, retreat, interest group) and pitch your solution to prospects.\n\nThis works well when selling services, but is generally less effective for software products that aren't ready yet. In that case, bring a click dummy or prototype to capture feedback.\n\nPitching allows you to quickly gauge whether your value proposition resonates: If people glaze over, that's a bad sign; if they ask for your business card, good news!",
    cost: "Varies from free to several thousand (depending on conference entry costs).",
    costLevel: "Variable",
    practicalApplication: "Use offline pitching as a quick, low-cost way to test your messaging before investing in marketing campaigns or product development. Pay attention to which specific words and phrases generate the most interest."
  },
  {
    id: 15,
    name: "Cold Outreach (Email, Calling)",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength varies by outcome: Cold lead to warm/demo = 2, Cold lead to LOI/waitlist = 3, Cold lead to purchase = 5. Quality over quantity is key. A 1-2% sale-conversion rate is considered good. For small TAMs, cold calling may burn your entire prospect base.",
    descriptionShort: "Reach out via phone, email, or messaging to test whether your value proposition resonates with prospects who haven't heard of you.",
    descriptionFull: "Reach out via phone, email or another messaging channel (e.g. LinkedIn InMail) to prospects who haven't heard of you. You can either try to convince them of your solution or ask them to participate in interviews/surveys.\n\nFor finding participants: If you're solving a strong pain point for a narrow audience, expect relatively high conversion rates.\n\nFor selling: Present your value proposition in a succinct, targeted manner. Conversion-to-sale rates are low (1-2% is considered good).\n\nFor small TAMs, invest heavily in personalization. Study each prospect and lead with something relevant to them. Use trigger events (e.g. 'I noticed you recently raised a Series A').\n\nFinding prospects: LinkedIn is excellent for B2B. Use Dux-Soup for lead generation. Eventually outsource cold calling, but handle it internally early on to learn and adapt quickly.",
    cost: "Depends on CRM system used. Low-cost solution: Airtable (free) + Sendgrid (email) via Make (connector).",
    costLevel: "Low",
    practicalApplication: "Journy.io used automated outreach to find participants for their discovery survey. 46 out of 350 prospects participated. Sparrks handled early sales through founders to quickly learn and adapt their message, achieving 2% conversion rates."
  },
  {
    id: 16,
    name: "Online/Social Media Post or Paid Ad",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength depends on CTA: Views/shares/likes/comments = 2, Clicks = 3, Sign ups = 4, Orders = 5. Don't get bogged down by vanity metrics. Figure out what's truly relevant for your business model.",
    descriptionShort: "Articulate your value proposition in an online ad or post targeting a specific customer segment with a clear Call To Action.",
    descriptionFull: "An online advertisement or post that articulates your value proposition for a targeted customer segment with a clear CTA.\n\nTypes: Organic social media posts, Paid social media campaigns, Paid online ads (SEA).\n\nStart with organic advertising to learn who resonates with your message before moving to paid. Test wildly different value propositions, tones, messages, and imagery.\n\nThis type of experiment needs to run for several weeks or months for trustworthy results.\n\nTop tip: Use the words your customers are using for language/market fit!\nFor established businesses: Run ads under an alias brand to protect your main brand.\n\nTools: Writesonic, Jasper.ai (content), adcreative.ai (creatives), Strikingly/Wix/Builder.io (landing pages).",
    cost: "Varies wildly. Keep spending low in early phases; opt for organic marketing. Monthly online advertising budget of $15-20K is common for startups/scale-ups at later stages.",
    costLevel: "Variable",
    practicalApplication: "Start with organic social media posts to test messaging, then scale to paid campaigns once you know which value proposition and audience segment perform best."
  },
  {
    id: 17,
    name: "Landing Page",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5) for basic tracking. However, evidence strength depends heavily on your CTA. If measuring actual sales-conversion rates, evidence is very strong (5). Tracking only leads (demos, contact forms) tells you little about actual closing rate.",
    descriptionShort: "Create a simple landing page to validate whether your value proposition resonates with your target audience.",
    descriptionFull: "A simple landing page can help you validate whether your value proposition resonates. You'll need to drive traffic to it (organic/paid content, word of mouth, etc.).\n\nStart as lightweight as possible with a tool you can easily use yourself for rapid changes. Most tools come with built-in templates.\n\nFor early-stage startups targeting innovators and early adopters: They don't care about glamorous websites. They want to see your product and understand how you can help them leapfrog their competition.\n\nGetting started:\n- A value proposition to test\n- Customer pains, gains, jobs, and how your solution helps\n- A basic brand for recognizability\n- A Call To Action\n- Integrated analytics\n\nHonesty above all. Don't try to look more mature than you are. Avoid me-too claims.",
    cost: "Domain: \u20AC1-\u20AC10,000. Website builder: WordPress, Wix, Strikingly, Builder.io, Webflow (all freemium).",
    costLevel: "Low",
    practicalApplication: "Use a landing page as the destination for your ads and outreach campaigns. Test different value propositions by creating variant landing pages and measuring which converts best."
  },
  {
    id: 18,
    name: "A/B Testing Campaigns & Landing Pages",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). A/B tests provide statistically comparable results between variants, but evidence strength depends on the CTA included. Make sure not to change too many things within one variant or you can't attribute results to specific changes.",
    descriptionShort: "Compare two or more versions of marketing campaigns or landing pages to learn which value proposition, imagery, or messaging performs best.",
    descriptionFull: "With an A/B test (split test), you compare two or more versions of a marketing campaign or landing page. You can play with different value propositions, imagery, tone of voice, brand, pricing pages, etc.\n\nEssential: Know precisely what parameter you're testing and don't change too many things per variant.\n\nIn early stages, test wildly differing value propositions, tones, messages, and imagery to learn quickly. Marketing campaigns let you cast narrow nets so the same individual doesn't see conflicting messages.\n\nIf you use lead generation forms, ask for consent to contact leads so you can ask why they clicked.\n\nCase study: Bloomberg used A/B testing for Facebook ads. The ad showing the sales price alongside the original price with strikethrough reduced cost per subscription conversion by 50%.",
    cost: "Most campaign managers and website tools come with pre-built A/B testing (Facebook, LinkedIn, TikTok, Wix, Unbounce). Also: Google Optimize, Optimizely.",
    costLevel: "Low",
    practicalApplication: "Use A/B testing when you have competing hypotheses about messaging, value propositions, or design. Start with big, bold differences to learn quickly, then refine with smaller iterations."
  },
  {
    id: 19,
    name: "Web Traffic Analysis",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Web traffic analysis shows aggregate user behavior but doesn't tell you about individual user journeys or motivations. Experiments need to run for a relatively long time to collect enough data. Cookie consent can limit tracking coverage.",
    descriptionShort: "Track website users' behavior to identify patterns, friction points, and optimize conversion using analytics tools.",
    descriptionFull: "Track your website users' behavior to identify patterns and friction. Google Analytics (free) shows:\n- Website traffic per source, device, new vs. recurring\n- Visitor engagement, top navigation flows, top pages, bounce rates\n\nFor advanced tracking (funnel reports, heatmaps): Adobe Analytics, Hotjar, Crazy Egg. These increase in price based on usage.\n\nNote: Cookie consent banners mean many visitors can't be tracked. Fathom offers a 'privacy first' alternative.\n\nThe run-time of these experiments is relatively long because you need to collect enough data over time.",
    cost: "Free for simple tracking (GA). Cost increases with advanced tools (Mixpanel, Hotjar, Amplitude, etc.).",
    costLevel: "Variable",
    practicalApplication: "Set up basic web analytics from day one. Use it to understand where visitors come from, what pages they visit, and where they drop off. Combine with heatmaps for deeper insights."
  },
  {
    id: 20,
    name: "Crowdfunding",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Crowdfunding gives strong evidence that people believe in your idea and want it to exist, but it doesn't necessarily tell you whether there will be buyers for your product at market price.",
    descriptionShort: "Raise a small amount of money via platforms like Kickstarter to validate interest in your idea while funding early development.",
    descriptionFull: "Raise a small amount of money to get your idea off the ground, for example via Kickstarter. This gives strong evidence that people believe in your idea.\n\nGetting started:\n- Define your funding goal\n- Choose a crowdfunding platform\n- Create a high-quality video about your target audience, their pains/gains/jobs, and your solution\n- Drive traffic to your pledge (paid/organic ads, forums, email, word of mouth)\n\nDo's:\n- Account for platform commission fees\n- Refund contributors if you don't meet your goal\n- Be transparent about how you'll use funds\n- Ensure high video quality\n\nDon'ts:\n- Don't raise more than you need\n- Don't make unrealistic claims",
    cost: "Platform commission fees plus cost of driving traffic to your campaign.",
    costLevel: "Medium",
    practicalApplication: "Use crowdfunding when you need both validation and funding. It works particularly well for physical products and creative projects where visual storytelling can showcase the value proposition."
  },
  {
    id: 21,
    name: "Video",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Videos work at scale and demonstrate your product visually, but engagement metrics (likes, shares, comments) are relatively weak signals of actual purchase intent.",
    descriptionShort: "Create a short video explaining your product idea and value proposition to test engagement and interest at scale.",
    descriptionFull: "A short video explaining your product idea and value proposition in a crisp, compelling way.\n\nPointers:\n- Address your ideal customer profile\n- Introduce the pain/problem\n- Illustrate the gain or pain reduction\n- Include a Call To Action\n\nTraditional approach: Cartoon-animated with voiceover or beautiful visuals with inspirational words.\nNew approach: Founder/developer speaking about the product, or a recorded demo.\n\nNeither is necessarily better; it depends on your target audience. Techies appreciate quick & dirty product demos; industry professionals might expect something more polished.\n\nAnalyze: Likes, shares, comments, open rates, replies, click-through rates, feedback.\n\nCase study: Dropbox went to market without an actual product. After releasing an introductory video, they received 70,000+ email addresses from eager prospects.",
    cost: "Varies greatly. Simple explainer: Vimeo (freemium). Product demo: Loom (freemium). Professional studio: at least \u20AC1000.",
    costLevel: "Variable",
    practicalApplication: "Use video to demonstrate your solution's value proposition before building the product. The Dropbox case proves you can validate demand with a compelling video alone."
  },
  {
    id: 22,
    name: "Resource Download",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase. If leads provide their email addresses, evidence strength is slightly higher. However, interest in content doesn't necessarily translate to product demand.",
    descriptionShort: "Create and publish resources (white papers, studies, frameworks) to generate leads and validate problem awareness.",
    descriptionFull: "Creating and publishing resources such as white papers, studies, and frameworks is an effective way to generate leads and validate whether your prospects 'feel the problem' or are interested in your value proposition.\n\nIf people are asking to read your content, that's a great sign. Evidence strength increases slightly if leads provide email addresses.\n\nQuality is king. It's increasingly difficult to cut through the noise. You can only stand out by writing specifically for a niche target audience. AI can support you but can't do all the work.\n\nYou'll need to make prospects aware of your content via methods like offline pitching, cold outreach, or social media.\n\nCase study: Datawallet invested in a study investigating 50 prominent brands for their DSR handling practices, offered via LinkedIn campaigns alongside free assessments.",
    cost: "Content creation is free but costs high human effort.",
    costLevel: "Low",
    practicalApplication: "Use resource downloads as a lead generation tool, especially in B2B where building trust through authoritative content is essential. Gate premium content behind email capture forms."
  },
  {
    id: 23,
    name: "Email Series / Newsletter",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Email engagement metrics (open rates, click rates, replies) show interest but are relatively weak signals of purchase intent. However, building a subscriber base is valuable for ongoing validation.",
    descriptionShort: "Feed content and build trust with prospects over time through a drip campaign or newsletter to measure engagement.",
    descriptionFull: "An email series (drip campaign) or newsletter is a great way to feed content and build trust over time. Identify a topic interesting to your target audience.\n\nEmail series: Fixed duration with clear beginning and end. Newsletter: Sent indefinitely.\n\nMeasure performance:\n- Open rates, Read rates, Replies, Clicks, Unsubscribes\n\nGain subscribers via: Organic/paid social media, forums, website sign-up, blog, word of mouth.\n\nTools: Sendgrid (100 emails/day free), Mailchimp (1000/month free), Beehiiv (powerful freemium).\n\nCase study: Product Hunt started as a 20-minute email experiment by Ryan Hoover. Within two weeks, the newsletter had 200 subscribers and 30 well-respected contributors. It eventually became ProductHunt, acquired by AngelList for $20M.",
    cost: "Several email tools are free until you hit certain volume thresholds (Sendgrid, Mailchimp, Beehiiv).",
    costLevel: "Low",
    practicalApplication: "Use newsletters to build an engaged audience before launching your product. Measure engagement to validate interest in your problem space and value proposition."
  },
  {
    id: 24,
    name: "Letter of Intent (LOI)",
    category: "Self-Reporting",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is low (2 out of 5). LOIs are non-binding documents. It's not uncommon for potential partners or clients to back away from promises made. Due to recent economic downturns, investors prefer to see binding purchases.",
    descriptionShort: "Use a short, non-binding written contract to gauge serious interest, especially for products that are expensive or complex to build.",
    descriptionFull: "A short, written contract that isn't legally binding. Ensure your LOI restates your value proposition to increase signing rates.\n\nLOIs are suitable when it's very difficult, time-consuming, or expensive to create an MVP (e.g. complex hardware products).\n\nResearch the format that fits your target audience. Use templates for inspiration but write your own for clarity and language/market fit.\n\nCase study: Thrive Smart Systems (wireless smart irrigation) used LOIs after verbal feedback was overwhelmingly positive ('a ton', 'as many as you can give me'). When asked to write things down, the number was slashed by 80%. However, they could predict \u20AC50,000 in forecasted revenue from the LOIs.",
    cost: "Low. Only requires time to create and distribute.",
    costLevel: "Low",
    practicalApplication: "Use LOIs when your product is too expensive or complex to prototype. The Thrive Smart Systems case shows that written commitments are a much more honest signal than verbal enthusiasm."
  },
  {
    id: 25,
    name: "Presale or Waitlist (Fake Door)",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "4-5",
    evidenceDetail: "Evidence strength is high. Waitlist sign-up = 3 (leaving email shows more interest than a click). Presale without payment = 4. Presale with payment = 5. Tread lightly: it's easy to disappoint prospects if they expected a ready product.",
    descriptionShort: "Direct interested customers to a waitlist or pre-sale page to measure strong purchase intent before building the product.",
    descriptionFull: "Instead of directing interested customers to your product, send them to a waitlist or pre-sale page.\n\nWaitlist: Notify/early bird access when MVP is live (suitable for SaaS).\nPre-sale: Pre-order a physical product to be shipped when ready (e-commerce).\n\nThis delivers strong results because customers show very strong interest, especially with presales involving payment.\n\nMitigate disappointment by being transparent, concrete, and personal. Explain your commitment to creating a product customers will love. Involve early-bird customers in co-creation.\n\nGetting started:\n- Create a simple landing page\n- Decide how to drive traffic\n- Insert price options\n- Create waitlist/pre-sale popup capturing contact data\n- Integrate web analytics\n\nCase studies: Buffer validated demand and pricing tiers through a waitlist. Galileo.ai generated massive excitement through their waitlist.",
    cost: "Similar to landing page, plus the eventual cost of launching or shipping the product.",
    costLevel: "Low",
    practicalApplication: "Use waitlists and presales when you want strong validation before building. Buffer learned both that demand existed AND which pricing tier was most popular through their waitlist experiment."
  },
  {
    id: 26,
    name: "Redirect to Third-Party Seller",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). This method measures actual purchase conversion without building anything. The downside is losing the sale to a competitor, but you gain very strong test results about purchase intent.",
    descriptionShort: "Direct your prospects to an existing similar product on a third-party platform to measure actual purchase conversion without building anything.",
    descriptionFull: "If you're creating a product similar to an existing one, you can direct prospects (from your ads, social media, cold outreach) to a third-party seller.\n\nThe downside: You lose the sale to a competitor.\nThe upside: Extremely lightweight method to test how many prospects will convert to paying customers. No need to build anything (besides an ad or message) while gathering very strong results.\n\nRecommended if creating the product requires high upfront cost or risk. If you can deliver the full experience with a low-cost MVP, go that route to capture the sale.\n\nCase study: An early-stage entrepreneur wanting to organize yoga retreats in Italy was convinced to start with customer discovery and real-world tests first, sending customers to similar AirBnB properties.",
    cost: "Free (apart from the cost of a 'lost' sale and customer acquisition channel costs).",
    costLevel: "Free",
    practicalApplication: "Use this method when your product requires significant upfront investment. Test actual purchase intent by leveraging existing similar products before committing to building your own."
  },
  {
    id: 27,
    name: "Prototype (Low to High Fidelity)",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: "2-4",
    evidenceDetail: "Evidence strength varies by fidelity: Clickable prototype = 2, Coded prototype = 4. Higher quality means higher cost but stronger evidence. The higher your certainty about assumptions, the more you can invest in the prototype quality.",
    descriptionShort: "Create a prototype ranging from click dummy to coded interactive sandbox to test usability and gather feedback from target customers.",
    descriptionFull: "Prototypes range from low to high fidelity. Generally: higher quality = higher cost.\n\nConsider:\n- Certainty about your assumptions (higher certainty = invest more)\n- Goals and success metrics\n- Test flow: Map which part of the customer journey to test\n\nTypes:\n- Click prototype: Digital interface with clickable zones, simulating software behavior. Set up in a few days.\n- Coded prototype: Very close to real product in UX. An interactive sandbox for feedback.\n- End-to-end no-code mashup: Represent the product as a whole using no-code tools.\n\nGetting started:\n- Determine goals & target audience\n- Map the prototype flow\n- Create and test internally\n- Schedule experiments with 10-15 target customers\n- Have participants narrate their thought processes\n- Analyze: What delighted? What caused friction? Where did they get stuck?\n\nTools: Miro (journey mapping), Figma (click dummy), Builder.io (web/mobile apps), Typeform, Airtable, Make/Zapier.",
    cost: "Several free/low-cost tools available: Miro (freemium), Figma (freemium), Builder.io, Typeform, Airtable, Make/Zapier.",
    costLevel: "Variable",
    practicalApplication: "Google Ventures uses prototyping in their design sprints: 5 days ending with prospects trying the prototype, results collected on a scoreboard to detect patterns."
  },
  {
    id: 28,
    name: "MVP (Minimum Viable Product)",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: "3-5",
    evidenceDetail: "Evidence strength varies: Single feature MVP = 3, End-to-end customer journey MVP = 5. The MVP is built for early adopters to collect feedback and validate your riskiest hypothesis. It is NOT a fully formed product that customers will love.",
    descriptionShort: "Build the smallest version of your product that allows you to collect maximum validated learning about customers with the least effort.",
    descriptionFull: "Eric Ries defines an MVP as 'the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.'\n\nBuilt for early adopters to validate your riskiest hypothesis. Can be coded, no-code, or mixed.\n\nWhat an MVP is NOT:\n- A fully formed product\n- Something customers will choose over competitors\n- Not necessarily the foundation for the 'real' product\n\nTypes:\n- Single feature MVP: Learn whether the core promise resonates. Identify the main customer job and design the smallest feature solving it.\n- End-to-end customer journey: The product can be sold because it's considered Viable.\n\nBackend processes can be handled manually at first (see Concierge and Wizard of Oz).\n\nCase studies: Groupon started with a rudimentary WordPress site and PDF vouchers. Spotify's MVP focused solely on music streaming with a closed beta.",
    cost: "Depends on approach (code vs. no-code) and scope. Choose the most low-cost approach that validates your hypothesis.",
    costLevel: "Variable",
    practicalApplication: "Groupon started with a simple WordPress site and PDF vouchers. Spotify focused on streaming only in a closed beta. Both validated their core value before building the full product."
  },
  {
    id: 29,
    name: "Co-creation",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). Co-creation combines customer feedback with real-world user behavior on an actual product. Feedback from co-creators is an extremely valuable proof point, but should still be backed up by supporting evidence.",
    descriptionShort: "Release a beta version to a curated group of friendly users who commit to providing constructive feedback during the building process.",
    descriptionFull: "Co-creation mixes customer feedback on your MVP with real-world user behavior. If your product lends itself to co-creation, it's strongly recommended.\n\nRelease to a select group of friendly users who commit to providing constructive feedback. Take in all feedback, but don't immediately build everything co-creators ask for.\n\nCritical: Select the right users who fit your narrow target audience. Be brave enough to say no to poor-fit prospects.\n\nGetting ready:\n- Build/create beta version\n- Identify target audience and channels\n- Define rewards (discounted rate, extra features, newsletter shoutout, Amazon coupon)\n- Define required co-creators count and timeframe\n- Outline process to capture, measure, and prioritize feedback\n- Approach & onboard co-creators\n\nCase studies: Pickyourself.com ran 30 beta users through a co-creation process, seeing 8x industry standard sign-up rates at launch. Braintrust leverages their community to even build parts of the product.",
    cost: "Combined costs of driving co-creators to your beta plus creation of the beta version.",
    costLevel: "Medium",
    practicalApplication: "Pickyourself.com saw 8x industry standard sign-up rates after launching a co-created course with 30 beta users. The process creates enthusiasm and great references before official launch."
  },
  {
    id: 30,
    name: "Concierge",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). You can handle the entire flow from start to value proof (usage, purchase, payment). Customer satisfaction feedback is provided after delivering on your value proposition, making it more reliable than feedback on hypothetical situations.",
    descriptionShort: "Create and deliver the customer experience manually, with the customer aware of the human involvement behind the scenes.",
    descriptionFull: "Create and deliver a customer experience manually. Unlike Wizard of Oz, the customer is aware of the humans involved.\n\nStandalone: Everything done manually from sign-up to fulfillment.\nCombined with MVP: Digital interface for sign-up, then manual matching/delivery.\n\nGet started:\n- Create a customer journey map\n- Test the entire flow before starting\n- Set up tracking (funnel reports)\n- Set up a system to capture customer feedback\n\nBecause the experiment relies on human effort, it will only succeed if you give it full attention. If you drop a lead, there won't be value realization.\n\nCase study: AirBnB started by targeting conference guests, inviting them to stay on founders' couches. Later, they manually recruited hosts and hired photographers to improve listing quality, resulting in 3x bookings increase.",
    cost: "Depends on backend processes (e.g. physical goods production). Additionally: high manual effort.",
    costLevel: "Medium",
    practicalApplication: "AirBnB's case teaches: Do things that don't scale first to see what works. Automation comes later. They manually recruited hosts and hired photographers before building automated systems."
  },
  {
    id: 31,
    name: "Wizard of Oz",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). You can handle the entire flow from start to value indicator while the customer believes they're using an automated product. Customer satisfaction feedback is given on a real experience, making it highly reliable.",
    descriptionShort: "Deliver the customer experience manually behind the scenes while presenting a digital, automated-looking interface to the customer.",
    descriptionFull: "Wizard of Oz delivers a customer experience manually using human effort instead of software. Unlike concierge, customers don't see the people involved.\n\nCombines a digital, customer-facing interface with human-delivered backend processes. Example: A digital sign-up interface where leads are fed into a CRM, then manually matched to projects by the team.\n\nGet started:\n- Create a customer journey map\n- Test the entire flow before starting\n- Set up tracking (funnel reports)\n- Set up a system to capture customer feedback\n\nThis is another way to do things that don't scale first, before investing time in automating something that ends up not working.\n\nBecause the experiment relies on human effort, it will only succeed if you and your team give it full attention.",
    cost: "Depends on backend processes. Additionally: high manual effort.",
    costLevel: "Medium",
    practicalApplication: "Use Wizard of Oz when you want to validate the full customer experience without building the backend. The customer believes they're using a fully automated product, giving you the most realistic feedback possible."
  },
  {
    id: 32,
    name: "Customer Service/Success Feedback",
    category: "Team Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). CS teams have access to real-world information and can back up claims with proof and data. However, customers inherently share more negative feedback, so the outcome will be skewed negatively.",
    descriptionShort: "Learn from your CS team about customer jobs, pains, gains, and product shortcomings through calls, tickets, and interviews.",
    descriptionFull: "Talk to your CS team, listen in on calls, or read call transcripts & tickets. The aim is to learn about the jobs, pains, and gains of your customers.\n\nApproaches:\n1. Set up continuous feedback: Create open communication between departments. Use a tagging/referral system in your CRM.\n2. Dig through pre-recorded calls/tickets: Listen to calls or read through tickets to detect optimization areas, bugs, and friction points. Use tools like Descript for transcription.\n3. Interviews with CS agents: Ask predefined questions to uncover optimization areas, unmet gains, unaddressed pains, and ways to reduce friction or churn.\n\nDon't implement every feature request. This is the starting point for experimentation. Validate and prioritize.\n\nAnecdote is a tool that stores and interprets all customer review data in one central place.",
    cost: "Low, especially when reviewing pre-existing conversations. You won't need CS team cooperation, only access.",
    costLevel: "Low",
    practicalApplication: "Set up a continuous feedback loop with your CS team. Use tagging systems in your CRM so product teams are automatically notified of tickets that can provide insights."
  },
  {
    id: 33,
    name: "Sales Force Feedback",
    category: "Team Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Sales teams have real-world information and can back up claims with proof and data. However, their perspective may be biased toward closing deals rather than long-term product fit.",
    descriptionShort: "Learn from your Sales team about customer needs, near misses, feature requests, and competitive landscape through structured feedback.",
    descriptionFull: "Learn from your sales team about customer jobs, pains, gains, and how well your product meets their needs.\n\nApproaches:\n1. Continuous feedback: Create open communication. Set up tagging/referral systems in CRM/sales tools.\n2. Interviews with Sales agents: Ask predefined questions. For B2B, separate between economic buyers, end users, and implementers.\n\nLook for:\n- Near misses: What prevented sales from occurring?\n- Feature requests\n- Who you're being compared to (competitive landscape)\n- Better understanding of your Ideal Customer Profile\n\nDon't implement every feature request. This is the starting point for research and experimentation.\n\nTools: Anecdote stores and interprets all customer data in one central place with semantic search.",
    cost: "Relatively cheap. The cost of Sales team's time is outweighed by the benefit of cross-departmental collaboration.",
    costLevel: "Low",
    practicalApplication: "Focus on 'near misses' from your sales team - understanding what prevented a sale is often more valuable than understanding what caused one. Use structured interviews to capture these insights systematically."
  },
  {
    id: 34,
    name: "Customer Advisory Board",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Decreased by reliance on self-reporting and small group size (not representative of overall customer base). Increased by the fact that feedback is given on a concrete, existing product rather than a hypothetical situation.",
    descriptionShort: "Maintain a group of friendly customers who provide regular feedback on your product, marketing materials, and new features.",
    descriptionFull: "A group of friendly customers who speak to you regularly is extremely valuable. They can provide feedback on website copy, marketing materials, or product features, and keep you informed of their pains, gains, and new solutions in the market.\n\nGrowth stalls can sneak up on you, even as market leader. Customer trust can erode without you noticing.\n\nGetting ready:\n- Ask loyal customers to join with fitting incentives (website mention, newsletter shoutout, podcast invite, monetary incentive)\n- Decide what you want to learn & format\n- Set up tooling for capturing feedback\n- For product feedback: Have customers narrate their thought process while using it\n\nYou can also do 'A Day in the Life' with your advisors: Watch them use your tool and narrate their journey.\n\nCase studies: Adobe shapes product strategy with global Customer Advisory Boards. Dell's Advisory Board offered guidance on strategy and helped beta test new solutions.",
    cost: "Depends on whether you need to incentivize members. With a lovable product and solid early adopters, intrinsic motivation may suffice.",
    costLevel: "Low",
    practicalApplication: "Adobe, VMware, and Dell all use Customer Advisory Boards to shape product strategy, beta test solutions, and identify cross-sell opportunities. The key is curating the right group of engaged customers."
  },
  {
    id: 35,
    name: "PMF Audit (Sean Ellis Test)",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). The Sean Ellis test provides a specific, actionable benchmark (40% 'very disappointed' = PMF). Results can be reliable with as few as 40 respondents. However, it relies on self-reporting and the benchmark may not apply to all product categories.",
    descriptionShort: "Survey existing customers with the key question: 'How disappointed would you be if you could no longer use this product?' to measure product/market fit.",
    descriptionFull: "A survey for existing customers who recently used your product, including the key question: 'How disappointed would you be if you could no longer use this product? Very disappointed, somewhat disappointed, or not disappointed.'\n\nAccording to Sean Ellis, a 40% 'very disappointed' rate is a strong indicator of product/market fit. Most startups don't achieve this. However, you can segment answers to identify which customer cohort would be most disappointed - indicating your Ideal Customer.\n\nResults can be reliable with as few as 40 respondents.\n\nGood additional questions:\n- 'Who would you recommend this product to?' (identify target audience)\n- 'How can we improve this product?' (identify new features)\n- 'What's the main benefit you get?' (identify core value)\n\nImportant: Allow anonymous responses. Only include recent product users. Time the test appropriately.\n\nCase study: Superhuman's CEO found only 22% 'very disappointed', but segmented to find their ideal persona: 'founders, managers, executives, and business development.'",
    cost: "Low. Create survey & capture results with Typeform and Google Sheets.",
    costLevel: "Low",
    practicalApplication: "Superhuman used the Sean Ellis test to discover their ideal persona. Despite only 22% overall 'very disappointed,' they segmented results to focus on 'founders, managers, executives, and business development' as their High Expectation Customer."
  },
  {
    id: 36,
    name: "Surveys (In-App & Email)",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Stronger than pre-launch surveys because you're addressing real customers about a concrete product. However, self-reporting is inherently weak and lowers reliability. Combine with data analytics for the 'why' behind behavior.",
    descriptionShort: "Present short questionnaires to existing customers in the app or via email to uncover friction points and optimization potential.",
    descriptionFull: "Short questionnaires for existing customers aimed at learning specific things. Present in-app or via email. Should be combined with data analytics (#38) to find the 'why' behind customer behavior.\n\nIn-app surveys:\n- Keep short (max two questions), use open-ended questions\n- Present when user seems confused ('What's holding you back from signing up?')\n- Present when user takes an uncommon step ('What almost stopped you?')\n- About specific features: 'Do you like this feature?'\n- NPS: 'How likely are you to recommend us, 1-10'\n\nEmail surveys:\n- Discovery survey for active customers\n- PMF audit\n- Ask customers to rank roadmap features\n\nCase study: GitHub sent customers email surveys with roadmap features to rank, increasing user participation and loyalty.",
    cost: "In-app: Depends on tool (Pendo.io, Hotjar). Email: Free tools available (Sendgrid, Mailchimp).",
    costLevel: "Variable",
    practicalApplication: "GitHub directly involved users in product development by asking them to rank roadmap features via email surveys. This increased participation and loyalty while ensuring they built wanted features."
  },
  {
    id: 37,
    name: "Scrape Review Sites / App Store Reviews",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Similar to pre-launch review scraping, this provides real customer opinions but they may not be representative. Reviews tend to be polarized (very positive or very negative), missing the middle ground.",
    descriptionShort: "Monitor and analyze what current and churned customers are saying about your company and product on review sites and app stores.",
    descriptionFull: "Just as you can scrape review sites of competitors pre-launch, it's advisable to keep abreast of what your current and churned customers are saying about your company and product.\n\nUse tools like Simplescraper (free) to scrape data from the web, then import into another tool for analysis (Google Sheets or Airtable).\n\nAnecdote stores and interprets all customer review data in one central place (online reviews, survey responses, interviews, CS complaints, etc.) with semantic search to ensure you don't miss relevant data.",
    cost: "Free tools available (Simplescraper). More advanced tools (Anecdote) have subscription costs.",
    costLevel: "Low",
    practicalApplication: "Set up regular monitoring of your review sites and app store listings. Use tools like Anecdote to centralize and interpret all customer feedback data in one place with semantic search."
  },
  {
    id: 38,
    name: "Data Analytics",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5) because it shows how users actually behave within your product. Strength increases with sample size. Data only shows 'how,' not 'why' - always combine with other methods like interviews and surveys.",
    descriptionShort: "Measure and analyze how customers use your product to detect patterns, friction, optimization opportunities, and churn indicators.",
    descriptionFull: "Every business must measure how customers use what they build. Without it, you're flying blind. Strong data analytics is the cornerstone of experimentation.\n\nExample reports:\n- Conversion rates for end-to-end journey\n- Funnel reports showing actions and drop-offs\n- Heat maps showing click and scroll patterns\n- Monetization funnel identifying revenue bottlenecks\n\nCohorts to analyze:\n- New Users, Never activated, Active, Best/recurring, Churned\n- By acquisition source, period, and user persona\n\nFor New Users: Get them to core value as quickly as possible through personalized onboarding.\n\nBest users are your blueprint for what you want other users to become. Analyze their features, screens, frequency, and demographics.\n\nAbandonment and churn: Measure exit rates, bugs, pricing friction, and pre-churn indicators.\n\nCase study: AirBnB conducts ~700 growth experiments weekly. They discovered users from Asian countries were leaving quickly, and adapted the experience to show relevant destinations, increasing conversions 10%.",
    cost: "Pendo.io, Mixpanel, Hotjar, Amplitude, Microsoft Clarity, Heap, June (B2B SaaS) - most have freemium versions.",
    costLevel: "Variable",
    practicalApplication: "AirBnB conducts approximately 700 growth experiments weekly. They use data as 'the voice of the customer' with cross-functional growth teams of data scientists, engineers, designers, PMs, and marketers."
  },
  {
    id: 39,
    name: "Feature Stub",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). You can see whether people show interest by clicking within your app, but you can't measure whether they'll actually follow through on using the full feature.",
    descriptionShort: "Place a button or entry point for a non-existent feature in your product to measure actual user interest before building it.",
    descriptionFull: "A small test of interest in a feature at the very beginning of the experience (e.g. a button). Include a feature stub within your existing product to see how many users click on it.\n\nIf clicked, present a friendly 'coming soon' message. Include a 'learn more' link to qualify interest further, or ask users to fill out a short survey (max three questions, ideally multiple-choice).\n\nRequires event tracking/data analytics to measure the outcome.\n\nMake sure to include a toggle to quickly turn the feature stub on and off.\n\nMeasure:\n- How many people click the feature stub\n- How many click 'learn more'\n- How many fill out the survey & survey output",
    cost: "Cheap, as you only need to implement the entry point (button + message).",
    costLevel: "Low",
    practicalApplication: "Use feature stubs to validate demand for new features before investing in building them. The 'coming soon' pattern lets you measure genuine interest within your product's natural context."
  },
  {
    id: 40,
    name: "A/B Testing Product Versions/Features",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). A/B tests are statistically reliable for evaluating performance of product variations. Effectiveness relies on sample size and your ability to measure and interpret data. Roll out to a subset first to reduce risk.",
    descriptionShort: "Compare two or more versions of a product feature to determine which performs better with real users using statistically reliable methods.",
    descriptionFull: "In product management, A/B tests (split tests) find the most effective variation of a product feature or update. A statistically reliable method to evaluate performance and determine which version is more likely to succeed.\n\nYou can test anything: buttons, text, colors, features, UI, or product messaging. Intended results: greater engagement, higher conversion, improved retention.\n\nDon't roll out new features to all customers at once. This creates risk of KPI drop-offs or bugs. Roll out to a select few first.\n\nBy using A/B testing, product managers can:\n1. Determine whether they're building the right product\n2. Launch new features with confidence through staged rollouts\n3. Experiment with pricing and sorting algorithms\n\nTools: Google Optimize (free), Optimizely, Hotjar, VWO, Omniconvert.",
    cost: "Most tools have freemium versions but increase in price with usage. Google Optimize is free.",
    costLevel: "Variable",
    practicalApplication: "Use A/B testing to de-risk feature launches by rolling out to a subset of users first. Monitor key metrics and only do a full release once you've validated the new version outperforms the current one."
  }
];

export const categories: Category[] = [
  "Public Data",
  "Self-Reporting",
  "Observation",
  "Watch User with Artefact",
  "Real-World Test",
  "Community & Network",
  "Expert Interview",
  "Team Feedback",
  "Customer Feedback",
  "Customer Behavior"
];

export const phases: Phase[] = [
  "Understand Problem Space & Market",
  "Test Value Proposition",
  "Early Product",
  "Mature Product"
];

export const costLevels: CostLevel[] = ["Free", "Low", "Medium", "High", "Variable"];

export function getCategoryColor(category: Category): string {
  const colors: Record<Category, string> = {
    "Public Data": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Self-Reporting": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    "Observation": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    "Watch User with Artefact": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    "Real-World Test": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300",
    "Community & Network": "bg-cyan-100 text-cyan-800 dark:bg-cyan-900/30 dark:text-cyan-300",
    "Expert Interview": "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
    "Team Feedback": "bg-indigo-100 text-indigo-800 dark:bg-indigo-900/30 dark:text-indigo-300",
    "Customer Feedback": "bg-pink-100 text-pink-800 dark:bg-pink-900/30 dark:text-pink-300",
    "Customer Behavior": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300"
  };
  return colors[category];
}

export function getPhaseColor(phase: Phase): string {
  const colors: Record<Phase, string> = {
    "Understand Problem Space & Market": "bg-sky-100 text-sky-800 dark:bg-sky-900/30 dark:text-sky-300",
    "Test Value Proposition": "bg-fuchsia-100 text-fuchsia-800 dark:bg-fuchsia-900/30 dark:text-fuchsia-300",
    "Early Product": "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
    "Mature Product": "bg-stone-100 text-stone-800 dark:bg-stone-900/30 dark:text-stone-300"
  };
  return colors[phase];
}
