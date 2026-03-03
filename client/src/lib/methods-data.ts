export type EvidenceStrength = 1 | 2 | 3 | 4 | 5;

export type Category =
  | "Desktop Research"
  | "Self-Reportage"
  | "Watch User in Environment"
  | "Watch User with Artefact"
  | "Real-World Behaviour";

export type Phase =
  | "Understand Problem Space & Market"
  | "Test Value Proposition"
  | "Early Product"
  | "Mature Product";

export type CostLevel = "Free" | "Low" | "Medium" | "High" | "Variable";

export interface Method {
  id: number;
  name: string;
  categories: Category[];
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
    categories: ["Desktop Research"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Public research is about broad audiences and may not reflect your niche. Article headlines are often taken out of context, and even reputable sources can be biased. <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0005738' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>34% of scientists admitted</a> to sometimes applying questionable research practices. Facts and figures relying on many assumptions are far easier to get wrong than right. When using LLMs for this research, keep in mind they are trained on publicly available sources and may confidently present outdated or fabricated citations. Always verify the original source.",
    descriptionShort: "Deep dive into your problem space, target audience, or industry using online studies, reports, public data sources, and LLM-assisted research.",
    descriptionFull: "There are plenty of online sources that allow you to deep dive into your problem space, target audience, or industry. Online studies, reports and public data are especially helpful when you're defining your audience size/market size and analyzing your competitors' strengths and weaknesses.\n\nSome examples of reputable sources:\n- Industry trends: McKinsey, Bain&Co\n- Consumer behavior & opinion: Gallup, GWI\n- Industry specific reports: Fintech, SaaS, Ecommerce\n- Data/startup news: Crunchbase, Statista, Growjo, TechCrunch\n\nLimitations:\n- Research studies are generally about broad audiences. If you're targeting a niche audience, you'll struggle to find studies reflecting that niche.\n- Article headlines are often taken out of context, so trace back to the original source.\n- Facts and figures can be unreliable due to human bias and mathematical errors.",
    cost: "Can vary from free to several thousand (for certain studies), to monthly subscription fees (Crunchbase, Statista). LLM tools: ChatGPT Plus ($20/mo), Claude Pro ($20/mo), Perplexity Pro ($20/mo).",
    costLevel: "Variable",
    practicalApplication: "Company Builders start their process by digging into industry trends to identify a market opportunity. Use an LLM with Deep Research capabilities to get a first comprehensive landscape overview in minutes instead of days. Then verify the most critical data points against primary sources. Follow up with qualitative interviews and surveys to see if there truly is an opportunity."
  },
  {
    id: 2,
    name: "User Reviews & Discussions",
    categories: ["Desktop Research"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). While you can learn a lot about unmet customer needs, the information is anecdotal and should be treated as a starting point for more experimentation. Just because the same criticism is repeated on a forum doesn't mean your assumption is validated. Most online forums don't allow you to identify the poster, so it's impossible to figure out whether they belong to your ICP. AI-powered sentiment analysis can help identify patterns at scale, but beware of over-interpreting noisy data.",
    descriptionShort: "Crawl discussion forums, review sites, app stores, and YouTube channels to uncover unmet customer needs. Use AI to spot patterns at scale.",
    descriptionFull: "Dive into the places where your target customers talk about their problems. Which source depends on your audience: Reddit or Substack for techies, G2 or Capterra for business buyers, Google or Yelp for local services.\n\nWhat to look for:\n- Workarounds and hacks customers use (signals no perfect solution exists)\n- Recurring feature requests and complaints about existing products\n- The exact language customers use to describe their problems (crucial for your messaging)\n\nTimebox yourself — it's easy to go down the rabbit hole. Treat findings as hypotheses to validate, not conclusions.",
    cost: "Low. Scraping tools have free tiers. LLM analysis costs are minimal.",
    costLevel: "Low",
    practicalApplication: "Common practice for CRO experts, venture builders, and Product Managers. Use an LLM to batch-analyze hundreds of reviews and extract the exact customer language for your messaging and positioning."
  },
  {
    id: 3,
    name: "Search Trend Analysis",
    categories: ["Desktop Research"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Search volume data gives you insights into whether your target audience is already aware of the problem or looking for a specific solution. However, you won't be able to get results that are particularly indicative of your niche target audience. Note: as more people use AI chatbots for search, traditional search volume data may underrepresent actual interest in a topic.",
    descriptionShort: "Analyze search volume and AI query trends to understand whether your target audience is aware of the problem or looking for specific solutions.",
    descriptionFull: "Analyzing search volume data gives you insights into whether your target audience is already aware of the problem you're trying to solve, or is looking for a specific product or product category. If you're introducing a new product category, search volume will be low or non-existent.\n\nTools:\n- Google Trends, Google Keyword Planner, Google 'people also ask', Bing keyword research\n- Ahrefs, SEMrush, and SparkToro for deeper topic clustering and trend prediction\n\nDefine a geographical area for your search. Decide what you want to explore (pains, gains, jobs, existing solutions, etc.). Take screenshots and notes during your research.\n\nThe downside is that you won't be able to get results that are particularly indicative of your niche target audience.",
    cost: "Most tools (Google Trends, Keyword Planner) are free. AI-enhanced SEO tools have subscription costs ($99-299/mo).",
    costLevel: "Free",
    practicalApplication: "Use search trend analysis early in your discovery process to validate whether there is existing awareness and demand for the problem you're solving. Complement traditional search data with AI chatbot query analysis to get a fuller picture of intent. Combine with other methods for stronger validation."
  },
  {
    id: 4,
    name: "Competitor Research & Mystery Shopping",
    categories: ["Desktop Research"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Competitor research can help prove that a certain pain point is not solved by anyone else, but competitors will continue to adapt their strategies. Never treat competitive intelligence as a static asset; it requires continuous updating. AI can speed up the research but the insights are only as current as the data available.",
    descriptionShort: "Analyze competitors' strategies, landing pages, customer journeys, and marketing materials using AI-assisted research to identify gaps in the market.",
    descriptionFull: "After identifying your key competitors, look at them for inspiration and to identify gaps in the market. Approaches include:\n- Analyzing landing pages, ad campaigns, and marketing materials (Similarweb)\n- Analyzing the personas competitors address\n- Analyzing web traffic (Similarweb)\n- Mystery shopping: Sign up and experience the full customer journey. Map the entire journey in a flowchart tool like Miro.\n\nImportant: Your competitors probably aren't who you think they are. For many SaaS products, their key competitor isn't another SaaS product, but Microsoft Excel. Ask target customers 'How else have you tried to solve the problem?' to understand your competitive landscape.\n\nAlthough useful to keep an eye on competitors, don't get stuck in rearview mirror-looking behavior.",
    cost: "Low. LLM-assisted analysis is nearly free. Similarweb has a free tier. Dedicated competitive intelligence tools (Crayon, Klue) have subscription costs.",
    costLevel: "Low",
    practicalApplication: "Use an LLM to do a rapid competitive analysis: paste competitor landing pages, pricing pages, and G2 reviews into a prompt and ask for a structured comparison. Map competitors' customer journeys to identify friction points and gaps. Update your competitive intelligence regularly, as AI is accelerating the pace of change."
  },
  {
    id: 5,
    name: "Review FAQ Pages of Competitors",
    categories: ["Desktop Research"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). FAQ pages reveal customer objections in disguise, but the information is indirect and requires interpretation. AI can help you analyze FAQ pages at scale and translate them into actionable objection-handling insights.",
    descriptionShort: "Use AI to analyze competitors' FAQ pages at scale, uncovering real customer objections and unmet needs disguised as questions.",
    descriptionFull: "Diving deep into your competitors' FAQ pages gives you unique insights into the problems that real customers are facing. The questions on the FAQ page are actually customer objections in disguise. Ask yourself why customers might have been putting this forward.\n\nExamples:\n- 'Where is this product made' = How can I validate the quality?\n- 'What are popular products' = What would you recommend to me, and what fits my use case?\n- 'How long does the battery last' = I've been disappointed by battery life in the past\n\nEnsure to timebox your work because it's easy to get lost down the rabbit hole.",
    cost: "Low. LLM analysis makes this nearly free and much faster than manual review.",
    costLevel: "Free",
    practicalApplication: "Use an LLM to batch-analyze FAQ pages from your top 5-10 competitors. Ask it to identify the top recurring customer objections and suggest how to address them in your own value proposition and landing page copy."
  },
  {
    id: 6,
    name: "Leverage / Create Communities",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Communities are a starting point for engagement and word of mouth, but community interactions alone don't validate your assumptions. They represent an opportunity to access tightly-knit groups for further research.",
    descriptionShort: "Tap into existing online/offline communities or build your own to reach your target audience and kickstart word of mouth.",
    descriptionFull: "There are plenty of online and offline communities you can tap into, or you can start building your own. Communities are great starting points for new startups since they represent tightly-knit groups likely to reference each other when making buying decisions.\n\nLeveraging existing communities:\n- Online: Facebook groups, forums, subreddits, Discord channels, blogs, Twitch, YouTube, ProductHunt\n- Offline: cafes, yoga groups, meetups, conferences\n\nYou can invite them to interviews/surveys/co-creation, drive them to your landing page, social media ads, or crowdfunding campaign.\n\nBuilding your own community:\nA database of engaged prospects is extremely valuable. However, community-building takes time, perseverance, and hard work. Tools like SparkToro help you find where your target audience already hangs out online.\n\nCase studies: Etsy visited craft fairs to identify their ideal community. Facebook started by targeting Harvard students. Tinder spread through specific colleges and fraternities.",
    cost: "Leveraging existing communities is free. Building your own entails maintaining a webpage, forum, or newsletter plus human effort.",
    costLevel: "Variable",
    practicalApplication: "Identify where your target audience naturally gathers online and offline. Use AI to monitor community discussions at scale and extract insights. Use these communities as a starting point for recruitment into interviews, surveys, and co-creation processes."
  },
  {
    id: 7,
    name: "Qualitative Interviews with Experts (1:1)",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Expert interviews partially circumvent the self-reporting problem because experts have real-world experience with how customers actually behave. You need to factor in differences between your target audience and the expert's experience base. While AI can help you prepare for and analyze interviews, it cannot replace the depth of insight from a real expert conversation.",
    descriptionShort: "Interview industry experts, ex-employees of competitors, partners, and suppliers to gain real-world insights. Use AI to prepare questions and analyze transcripts.",
    descriptionFull: "Experts can be project stakeholders, industry experts, ex-employees of competitors, or partners & suppliers. The biggest problem with customer interviews (people don't behave as they say they will) can be partially circumvented by speaking to experts who have real-world experience.\n\nDepending on what you're learning:\n- Strategy insights: VP/head-of level\n- Customer/prospect behavior: Marketing, sales, CS agents\n\nFor ex-employees of competitors, retain anonymity using third-party providers like Alphasights or Expertwired.",
    cost: "A 1-hour expert interview costs approximately \u20AC200-400. AI transcription tools: free to $30/mo. LLM costs for preparation and analysis are minimal.",
    costLevel: "Medium",
    practicalApplication: "Use AI to prepare smarter questions before the interview, then use AI transcription and analysis tools to extract every insight from the conversation. Feed multiple interview transcripts into an LLM to identify patterns and contradictions across experts."
  },
  {
    id: 8,
    name: "Qualitative Customer Interviews (1:1)",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). As David Ogilvy said: 'People don't think what they feel, don't say what they think, and they don't do what they say.' Story-based interviews tries to reduce answers from the 'perfect self' perspective by asking about concrete stories. Nonetheless, self-reportage remains flawed, no statistical significance, people report what's on top of mind for them (no latent needs). AI can help you <a href='https://elsevanderberg.substack.com/p/claude-code-for-interview-synthesis' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>analyze interviews at scale</a> but cannot fix the underlying self-reporting bias. Customer interviews are valuable but findings need to be backed up by real-world tests.",
    descriptionShort: "Open-ended interviews exploring target audience's pain points, challenges, jobs to be done, and willingness to pay. <a href='https://www.producttalk.org/glossary-discovery-story-based-interviews/?srsltid=AfmBOoqPSqL-elHYpRngV2tZZnjS5hn4sVGDOuueAx1-ux564h9YshgF' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>Teresa Torres' story-based interview technique</a> reduces risk of 'hypothetical' answers.",
    descriptionFull: "A prerequisite is knowing exactly who you want to target. Recommend 5-15 qualitative interviews before starting to build your product.\n\nKey tips:\n- Focus on the most important topics, keep it to max 30 minutes\n- This is not a chance to pitch; the goal is to learn\n- Ask if you can come back later for feedback on prototypes or beta launches\n- Note the language your interviewees use (language/market fit)\n- Ask how else they've tried solving their problem (reveals true competitors)\n\nFor example questions and structure, see the <a href='https://www.notion.so/Customer-interview-cheat-sheet-183660ca2b5280769bf2df69cb0e45d0' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>Customer Interview Cheat Sheet</a>.",
    cost: "Low. Interviewees rarely need compensation. AI transcription tools: free to $30/mo.",
    costLevel: "Low",
    practicalApplication: "Do at least 10-15 interviews. Feed all transcripts into an LLM to surface the top recurring pain points and the exact language customers use — this language becomes your messaging and positioning."
  },
  {
    id: 41,
    name: "ODI – Job Mapping & Desired Outcome Interviews",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). ODI interviews produce structured, solution-free outcome statements rather than feature requests or pain narratives. More actionable than standard discovery interviews, but the qualitative phase alone doesn't tell you which outcomes are unmet — that requires the quantitative ODI survey.",
    descriptionShort: "Map the customer's job-to-be-done into process steps and interview job executors to uncover desired outcomes — measurable, solution-free metrics of success. Part of <a href='https://innovationroundtable.com/summit/wp-content/uploads/2014/05/Strategyn_what_is_Outcome_Driven_Innovation.pdf' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>Outcome-Driven Innovation (ODI)</a> by Strategyn.",
    descriptionFull: "ODI interviews are fundamentally different from discovery interviews. Instead of exploring pains and wishes, you capture how customers measure success.\n\n<strong>Step 1: Build the job map</strong>\nBreak down the customer's job-to-be-done into process steps: define, locate, prepare, confirm, execute, monitor, modify, conclude. This map becomes your interview guide.\n\n<strong>Step 2: Uncover desired outcomes</strong>\nFor each job step, ask what needs to be measured and controlled for success. Capture outcomes in a specific format:\n\n<em>Direction of improvement + metric + object of control + context</em>\nExample: 'Minimize the time it takes to find songs that match the current mood.'\n\n<strong>How this differs from discovery interviews:</strong>\n- You capture metrics of success, not stories or feature requests\n- Outcomes are solution-free and stable over time\n- A typical job yields 100+ desired outcomes\n- The job map ensures comprehensive coverage — no blind spots\n\nThe output — a complete set of desired outcomes — becomes both the input for the quantitative ODI survey and a long-term strategic asset.",
    cost: "Medium. Requires trained interviewers and 10-30 interviews depending on job complexity. Often conducted as a professional Strategyn engagement.",
    costLevel: "Medium",
    practicalApplication: "Use ODI job mapping when you need comprehensive, structured insight into what customers are trying to achieve — not what they say they want. The output feeds directly into the quantitative ODI survey for statistical prioritization."
  },
  {
    id: 42,
    name: "ODI – Quantitative Survey",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). Unlike standard surveys, ODI surveys measure importance and satisfaction for each desired outcome, producing an opportunity score that predicts where innovation will succeed. Strategyn reports an 86% success rate for products developed using this data — 5x the industry average.",
    descriptionShort: "Survey job executors to quantify which desired outcomes are underserved, discover hidden segments, and predict which product concepts will win. Part of <a href='https://innovationroundtable.com/summit/wp-content/uploads/2014/05/Strategyn_what_is_Outcome_Driven_Innovation.pdf' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>Outcome-Driven Innovation (ODI)</a> by Strategyn.",
    descriptionFull: "Takes the desired outcomes from the qualitative ODI interviews and quantifies them across a statistically valid sample.\n\n<strong>What respondents rate (for each outcome):</strong>\n- Importance (1-5): how important is this outcome?\n- Satisfaction (1-5): how well is it currently satisfied?\n\n<strong>The Opportunity Score:</strong>\nImportance + max(Importance – Satisfaction, 0)\n- Above 10 = underserved → innovation opportunity\n- Below 6 = overserved → disruption/cost-reduction opportunity\n\n<strong>The real power: outcome-based segmentation</strong>\nUsing factor and cluster analysis on the survey data, you discover hidden segments of customers with unique sets of unmet needs. These segments can't be found through demographics or personas — they're defined by which outcomes are unmet.\n\nThis is what makes ODI predictable: you know exactly which outcomes to target, for whom, and how large the opportunity is.\n\n<strong>Sample size:</strong>\nMinimum 180 respondents for segmentation. Typically 180-600+.",
    cost: "High. Requires a statistically valid sample (180-600+ respondents), professional survey design, and factor/cluster analysis. Typically part of a Strategyn engagement or executed by ODI-trained teams.",
    costLevel: "High",
    practicalApplication: "Use the ODI survey when you need statistically validated prioritization of customer needs. Opportunity scores tell you exactly where to focus, and outcome-based segmentation reveals customer groups that demographics miss."
  },
  {
    id: 9,
    name: "Ethnography",
    categories: ["Watch User in Environment"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Observing real behavior provides stronger evidence than self-reporting — we see what people actually do, rather than what they say they do, and we'll catch things that aren't top of mind (hidden needs, hard-facts-of-life). But small sample sizes limit generalizability. Despite being <a href='https://elsevanderberg.substack.com/p/ethnography-finds-what-interviews' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>rated the most useful research method</a>, only 15% of organizations use ethnography.",
    descriptionShort: "Observe target customers in their natural environment to uncover hidden needs that interviews miss. Ethnography finds the workarounds, routines, and frustrations people no longer consciously notice.",
    descriptionFull: "Observe your target customer in the environment where their challenge occurs. Rather than asking how they'd solve problems, you watch how they actually behave.\n\nKey: identify your niche target audience beforehand.\n\nPreparation is half the work:\n- Decide what you're looking for before you walk in: task stages, environment, body language at friction points, workarounds that look too practiced to be accidental.\n- Go in without a framework and you'll collect noise.\n\nEthnography is a skill:\n- Famous case studies were executed by trained anthropologists who could read body language, spatial signals, and subtle gestures an untrained observer would miss.\n- You won't have that on day one, but even imperfect observation will teach you far more than interviews alone.",
    cost: "Low. You may need to compensate subjects for time and incur travel costs. AI session recording tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Combine in-person observation with AI-powered session recording to get both depth and scale. Use AI to analyze recorded sessions and identify the friction points that users don't consciously notice or report."
  },
  {
    id: 10,
    name: "Card Sorting (Group)",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Card sorting relies on self-reported priorities, which may not reflect actual behavior. However, it's useful for understanding how customers conceptualize and prioritize their pains, gains, and jobs. AI can help synthesize results from multiple sessions.",
    descriptionShort: "Invite target customers to sort and rank cards representing pains, gains, and jobs to understand priorities and mental models.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.). Create cards (analog or digital) containing the different pains, gains, and jobs you've uncovered.\n\nInvite 15-20 target customers for a card sorting session where they map and rank the cards in each category. Ask them to talk through their thought process. Write additional cards if new jobs, pains, or gains come up.\n\nSessions should take max 45 minutes.\n\nDigital card sorting tools (Optimal Workshop, Maze) can run sessions remotely and asynchronously, reaching more participants.",
    cost: "Low, depending on whether target customers need compensation. Miro (free), Optimal Workshop, and Maze have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use an LLM to extract pains, gains, and jobs from your interview transcripts, then turn them into cards for the sorting session. After sessions, feed all participant reasoning into an LLM to identify patterns in how customers prioritize."
  },
  {
    id: 11,
    name: "Buy a Feature (Group)",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). The play money mechanism adds forced prioritization that makes results more meaningful than simple ranking, but it's still self-reported and may not reflect actual purchase behavior.",
    descriptionShort: "Give target customers play money to 'buy' features from a list, revealing which features they value most through forced prioritization.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.) and is executed in a group setting with ideally 15-20 target customers.\n\nCreate a list of 15-30 features and assign a play money budget for each participant. Each customer allocates their money to the features they want most. They can bundle their funds together to receive more features.\n\nThe group dynamic and limited budget force genuine prioritization decisions. Digital tools can facilitate this exercise remotely, making it easier to reach more participants.",
    cost: "Low, depending on whether target customers need compensation for their time.",
    costLevel: "Low",
    practicalApplication: "Use 'Buy a Feature' when you have a list of potential features and need to understand which ones your target audience values most. AI can help generate the feature list and analyze spending patterns."
  },
  {
    id: 12,
    name: "Discovery Survey",
    categories: ["Self-Reportage"],
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Surveys are great for uncovering customer jobs, pains, and gains at scale, but suffer from the inherent problem of poor self-reporting. AI can help craft better questions using customer language and analyze open-ended responses at scale.",
    descriptionShort: "A survey with mostly open-ended questions to uncover customer jobs, pains, gains, and willingness to pay at scale. AI helps craft questions and analyze responses.",
    descriptionFull: "Create the discovery survey after having performed at least 5 qualitative interviews, so you can use the language of your target customer and ask the right questions. Only send to respondents in your niche target audience.\n\nA discovery survey should mostly contain open-ended questions. Using multiple-choice limits interviewees too much at this early stage.\n\nDefine upfront how many survey responses will be sufficient (considering confidence level and sample size) and assume a 10-20% response rate.\n\nDon't forget to ask respondents whether you can contact them again. Start building your bench of trusted users!",
    cost: "Depends on whether you need to offer a reward. Survey tools (Typeform, SurveyMonkey) have free tiers. LLM analysis of responses is nearly free.",
    costLevel: "Low",
    practicalApplication: "TaxFix New Markets gathers approximately 500 customer survey responses when validating new markets. Use AI to analyze open-ended responses at scale, something that was previously the biggest bottleneck of open-ended surveys."
  },
  {
    id: 13,
    name: "Storyboard",
    categories: ["Self-Reportage", "Watch User with Artefact"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5, self-reporting). Storyboards help explore which value propositions resonate, but rely on customer self-reporting about hypothetical scenarios. AI image generation has made storyboard creation dramatically faster and cheaper.",
    descriptionShort: "Illustrate different value propositions on storyboards using AI-generated visuals and invite target customers to provide feedback on which resonates most.",
    descriptionFull: "This method requires input from previous exercises such as qualitative interviews or surveys. Work with an internal team (Design, Marketing, Product) to illustrate several different value propositions and scenarios on storyboards.\n\n10-15 target customers are invited to provide feedback on each storyboard. The goal is to learn about customer jobs, pains, and gains and see which value proposition resonates.\n\nAs with all research methods, the results become more trustworthy if you're more precise about narrowing down your target audience upfront.",
    cost: "Very low with AI. Image generation tools: free to $30/mo. Previously required designer time.",
    costLevel: "Low",
    practicalApplication: "Use AI to generate multiple storyboard variations in an afternoon instead of a week. Test wildly different value propositions visually with target customers to learn which narrative resonates strongest."
  },
  {
    id: 14,
    name: "Offline Pitching",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase, so gauging reactions is imprecise. Upside: you might walk away with real prospects. Works better for services than software products that aren't ready yet.",
    descriptionShort: "Test your elevator pitch at events where your target audience is present to gauge real-time reactions to your value proposition.",
    descriptionFull: "Test your elevator pitch by using it in the wild. Visit an occasion where your target audience is present (meetup, industry conference, retreat, interest group) and pitch your solution to prospects.\n\nThis works well when selling services, but is generally less effective for software products that aren't ready yet. In that case, bring a click dummy or prototype along to capture feedback.\n\nPitching allows you to quickly gauge whether your value proposition resonates: If people glaze over, that's a bad sign; if they ask for your business card, good news!\n\nThe face-to-face reaction is the data.",
    cost: "Varies from free to several thousand (depending on conference entry costs).",
    costLevel: "Variable",
    practicalApplication: "Use an LLM to help you craft 3-4 pitch variations before the event, each emphasizing a different value proposition. Test all versions and track which one gets the strongest reactions. The face-to-face signal is irreplaceable."
  },
  {
    id: 15,
    name: "Cold Outreach (Email, Calling)",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength varies by outcome: Cold lead to warm/demo = 2, Cold lead to LOI/waitlist = 3, Cold lead to purchase = 5. AI has transformed cold outreach: hyper-personalization at scale is now possible, but so is inbox fatigue from AI-generated spam. Quality over quantity matters more than ever.",
    descriptionShort: "Reach out via email or messaging to test whether your value proposition resonates. AI enables hyper-personalization at scale, but quality over quantity is critical.",
    descriptionFull: "Reach out via phone, email or another messaging channel (e.g. LinkedIn InMail) to prospects who haven't heard of you. You can either try to convince them of your solution or ask them to participate in interviews/surveys.\n\nFor small TAMs, invest heavily in genuine personalization. Study each prospect and lead with something truly relevant to them.\n\nFinding prospects: LinkedIn, Apollo, Clay, ZoomInfo.",
    cost: "Low. AI prospecting tools: $50-200/mo. CRM and email tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use AI to research prospects and draft personalized outreach, but don't automate the sending blindly. The best approach: AI does the research and first draft, a human reviews and adds genuine personal touches. Track response rates by variant to learn which messaging works."
  },
  {
    id: 16,
    name: "Online/Social Media Post or Paid Ad",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength depends on CTA: Views/shares/likes/comments = 2, Clicks = 3, Sign ups = 4, Orders = 5. Don't get bogged down by vanity metrics. Figure out what's truly relevant for your business model.",
    descriptionShort: "Articulate your value proposition in an online ad or post targeting a specific customer segment. AI dramatically speeds up ad creation and variation testing.",
    descriptionFull: "An online advertisement or post that articulates your value proposition for a targeted customer segment with a clear CTA.\n\nTypes: Organic social media posts, Paid social media campaigns, Paid online ads (SEA).\n\nStart with organic advertising to learn who resonates with your message before moving to paid. Test wildly different value propositions, tones, messages, and imagery.\n\nTop tip: Use the words your customers are using for language/market fit!\nFor established businesses: Run ads under an alias brand to protect your main brand.\n\nThis type of experiment needs to run for several weeks or months for trustworthy results.",
    cost: "AI has dramatically reduced creative production costs. Organic posting is free. Paid campaigns: start small ($5-50/day) to test, scale what works. Monthly budget of $15-20K is common at scale.",
    costLevel: "Variable",
    practicalApplication: "Use AI to generate 10-20 ad copy and visual variations in an hour. Test them with small budgets to learn which value proposition, tone, and imagery resonates best before scaling spend."
  },
  {
    id: 17,
    name: "1:1 Landing Page Test",
    categories: ["Watch User with Artefact", "Self-Reportage"],
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Low numbers mean no statistical significance, but you can learn the <em>why</em> behind the <em>what</em>. You observe real reactions to your messaging, headline clarity, and value proposition — qualitative insight that traffic analytics can never provide.",
    descriptionShort: "Show your landing page to target users in a moderated 1:1 session. A <a href='http://systm.co/post/how-to-increase-your-landing-page-conversion-rate' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>5-second headline clarity check</a> followed by self-directed exploration reveals whether your messaging lands.",
    descriptionFull: "<strong>How to run this test</strong>\nTwo distinct phases in a single session:\n\n<strong>Phase 1: Headline clarity check (5 seconds)</strong>\nShare your screen, display the landing page, and after five seconds switch to a blank tab. Ask: 'What did you just see? What was the product about?' This reveals whether your headline communicates the core offering at a glance. Expect many 'I wasn't paying attention…' responses — that's data too.\n\n<strong>Phase 2: Self-directed exploration (~15 min)</strong>\nSend the participant the URL and have them share their screen. Ask them to review the page as they normally would when evaluating new software, narrating their thoughts aloud. This uncovers natural browsing behavior and provides opportunities for follow-up questions.\n\n<strong>What you validate:</strong>\n- Headline effectiveness: does it grab attention and communicate clearly?\n- Value proposition resonance: does it speak to the target audience's real problems?\n- Expectation alignment: does the landing page set the right expectations for what the product delivers? A gap here is a common cause of activation and retention issues.",
    cost: "Low. Only requires participant time and a screen-sharing tool.",
    costLevel: "Low",
    practicalApplication: "Run 5-8 sessions before driving paid traffic. The 5-second headline test is brutally honest — if participants can't articulate what your product does after five seconds, your headline needs work. Fix messaging issues here before spending money on traffic."
  },
  {
    id: 43,
    name: "Landing Page: Direct Traffic",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). You can direct enough (paid) traffic to achieve statistical significance, but you'll only see <em>what</em> users do — you can't learn the <em>why</em> behind the <em>what</em>. If measuring actual sales-conversion rates, evidence is very strong (5). Tracking only leads (demos, contact forms) tells you little about actual closing rate.",
    descriptionShort: "Direct traffic to a landing page to validate whether your value proposition resonates. With AI coding tools, you can build and iterate on landing pages in hours, not weeks.",
    descriptionFull: "A simple landing page can help you validate whether your value proposition resonates. You'll need to drive traffic to it (organic/paid content, word of mouth, etc.).\n\nFor early-stage startups targeting innovators and early adopters: They don't care about glamorous websites. They want to see your product and understand how you can help them leapfrog their competition.\n\nGetting started:\n- A value proposition to test\n- Customer pains, gains, jobs, and how your solution helps\n- A basic brand for recognizability\n- A Call To Action\n- Integrated analytics\n\nHonesty above all. Don't try to look more mature than you are. Avoid me-too claims.\n\nTop tip: Use the words your customers are using for language/market fit!\n\nHow to drive traffic:\n- Organic: social media posts, communities, forums, newsletters\n- Paid: social media ads, search ads (start small, $5-50/day)\n- Direct: cold outreach, word of mouth\n\nThis type of experiment needs to run for several weeks for trustworthy results. Define success metrics upfront: what conversion rate would validate your hypothesis?",
    cost: "Near-zero with AI coding tools. Domain: €1-€15/year. AI coding assistants: free to $20/mo. No need for agencies or expensive no-code subscriptions.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to build a landing page in an afternoon. Test different value propositions by creating variant pages. The speed of iteration is the real advantage: you can test 5 different positionings in a week instead of one per month."
  },
  {
    id: 18,
    name: "A/B Testing Campaigns & Landing Pages",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). A/B tests provide statistically comparable results between variants. AI makes it vastly easier to generate and deploy variants, enabling faster experimentation cycles. Make sure not to change too many things per variant.",
    descriptionShort: "Compare two or more versions of campaigns or landing pages. AI enables generating many more variants for faster experimentation.",
    descriptionFull: "With an A/B test (split test), you compare two or more versions of a marketing campaign or landing page. You can play with different value propositions, imagery, tone of voice, brand, pricing pages, etc.\n\nEssential: Know precisely what parameter you're testing and don't change too many things per variant.\n\nIn early stages, test wildly differing value propositions to learn quickly.\n\nCase study: Bloomberg used A/B testing for Facebook ads. The ad showing the sales price alongside the original price with strikethrough reduced cost per subscription conversion by 50%.",
    cost: "Most platforms have built-in A/B testing. AI variant generation is nearly free. Landing page variants can be created in minutes with AI coding tools.",
    costLevel: "Low",
    practicalApplication: "Use AI to generate 5-10x more variants than you could manually. The speed of AI-generated variants means you can complete in one week what used to take a quarter of experimentation."
  },
  {
    id: 19,
    name: "Web Traffic Analysis",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Web traffic analysis shows aggregate user behavior but doesn't tell you about individual motivations. AI analytics tools can now surface insights automatically that previously required a data analyst. Cookie consent and ad blockers limit tracking coverage.",
    descriptionShort: "Track website users' behavior to identify patterns and friction. AI analytics tools now surface actionable insights automatically.",
    descriptionFull: "Track your website users' behavior to identify patterns and friction.\n\nGoogle Analytics (free) shows:\n- Website traffic per source, device, new vs. recurring\n- Visitor engagement, top navigation flows, top pages, bounce rates\n\n<strong>Common tools:</strong>\nBasic analytics: Google Analytics (free), Microsoft Clarity (free). Advanced (funnel reports, heatmaps, session recordings): Hotjar, Amplitude, Mixpanel, PostHog, FullStory. Privacy-first (no cookie consent needed): Fathom, Plausible, PostHog.\n\nNote: Cookie consent banners and ad blockers mean many visitors can't be tracked.\n\nThe runtime of these experiments is relatively long because you need to collect enough data over time.",
    cost: "Free for basic tracking (GA4, Microsoft Clarity). Advanced AI-powered tools: $30-200/mo depending on traffic volume.",
    costLevel: "Variable",
    practicalApplication: "Set up Microsoft Clarity (free, AI-powered) from day one alongside Google Analytics. The AI will automatically surface your biggest UX problems without you needing to dig through dashboards."
  },
  {
    id: 20,
    name: "Crowdfunding",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Crowdfunding gives strong evidence that people believe in your idea and want it to exist, but it doesn't necessarily tell you whether there will be buyers at market price.",
    descriptionShort: "Raise a small amount of money via platforms like Kickstarter to validate interest in your idea while funding early development.",
    descriptionFull: "Raise a small amount of money to get your idea off the ground, for example via Kickstarter. This gives strong evidence that people believe in your idea.\n\nGetting started:\n- Define your funding goal\n- Choose a crowdfunding platform\n- Create a high-quality video about your target audience, their pains/gains/jobs, and your solution\n- Drive traffic to your pledge (paid/organic ads, forums, email, word of mouth)\n\nDo's:\n- Account for platform commission fees\n- Refund contributors if you don't meet your goal\n- Be transparent about how you'll use funds\n\nDon'ts:\n- Don't raise more than you need\n- Don't make unrealistic claims",
    cost: "Platform commission fees plus traffic costs. AI has dramatically reduced video and visual production costs (previously \u20AC1000+ for video, now near-zero with AI tools).",
    costLevel: "Medium",
    practicalApplication: "Use AI video tools to create a professional campaign video in a day instead of spending weeks and thousands of euros. Use AI image generation for product mockups and lifestyle visuals."
  },
  {
    id: 21,
    name: "Video",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Videos work at scale and demonstrate your product visually, but engagement metrics are relatively weak signals of actual purchase intent. AI has made video production dramatically cheaper and faster.",
    descriptionShort: "Create a short video explaining your product idea and value proposition. AI video tools have made production nearly free and instant.",
    descriptionFull: "A short video explaining your product idea and value proposition in a crisp, compelling way.\n\nPointers:\n- Address your ideal customer profile\n- Introduce the pain/problem\n- Illustrate the gain or pain reduction\n- Include a Call To Action\n\nThe choice between 'traditional' (animated) and 'new' (founder-led, demo-focused) videos still depends on your audience. Techies appreciate quick product demos; industry professionals may expect polish.\n\nAnalyze: Likes, shares, comments, open rates, click-through rates, feedback.\n\nCase study: Dropbox went to market without a product. Their introductory video generated 70,000+ email sign-ups.",
    cost: "Near-zero with AI. Synthesia/HeyGen: free to $30/mo. Loom: free. Previously, professional video required \u20AC1,000+ minimum.",
    costLevel: "Low",
    practicalApplication: "Create a professional product explainer video in one afternoon using AI avatar tools or screen recording with AI editing. No studio, no videographer, no post-production team needed. Test multiple versions with different messaging."
  },
  {
    id: 22,
    name: "Resource Download",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase. If leads provide their email, evidence is slightly higher. AI has made content creation easier, but it's also made it harder to stand out because everyone can produce content now. Quality and originality matter more than ever.",
    descriptionShort: "Create and publish resources (white papers, studies, frameworks) to generate leads and validate problem awareness. AI speeds up creation but raises the bar for originality.",
    descriptionFull: "Creating resources such as white papers, studies, and frameworks is an effective way to generate leads and validate whether your prospects 'feel the problem' or are interested in your value proposition.\n\nQuality is king:\nYou can only stand out by writing specifically for a niche target audience with genuine, original insights. Generic content will not differentiate you.\n\nDriving people to your content: Use methods #14-16 to distribute.\n\nCase study: Datawallet invested in a study investigating 50 prominent brands for their DSR handling practices, offered via LinkedIn campaigns alongside free assessments.",
    cost: "Content creation time has dropped dramatically with AI assistance. The human effort is now in original research and analysis rather than writing.",
    costLevel: "Low",
    practicalApplication: "Use AI to draft and structure your content quickly, but invest your time in original research, proprietary data, and unique perspectives. The combination of AI efficiency + human originality is the sweet spot for content that generates leads."
  },
  {
    id: 23,
    name: "Email Series / Newsletter",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Email engagement metrics show interest but are relatively weak signals of purchase intent. AI has made newsletters easier to create but also increased competition. Authentic voice and original insights are key differentiators.",
    descriptionShort: "Feed content and build trust with prospects through email series or newsletters. AI helps with writing and personalization, but authentic voice wins.",
    descriptionFull: "An email series (drip campaign) or newsletter is a great way to feed content and build trust over time. Identify a topic interesting to your target audience.\n\nThe newsletters that thrive are those with:\n- An authentic, distinctive voice\n- Original insights and analysis\n- Genuine expertise in a specific niche\n- Strong point of view\n\nMeasure performance: Open rates, Read rates, Replies, Clicks, Unsubscribes.\n\nSubscribers come from: Social media, forums, website sign-up, blog, word of mouth.\n\nCase study: Product Hunt started as a 20-minute email experiment by Ryan Hoover. Within two weeks: 200 subscribers and 30 well-respected contributors. Eventually acquired by AngelList for $20M.",
    cost: "Email tools have generous free tiers: Beehiiv, ConvertKit, Mailchimp, Sendgrid. AI writing: free to $20/mo.",
    costLevel: "Low",
    practicalApplication: "Use AI to draft your newsletter content, but add your own analysis, opinions, and unique perspectives. The newsletters winning today combine AI efficiency with human authenticity and expertise."
  },
  {
    id: 24,
    name: "Letter of Intent (LOI)",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is low (2 out of 5). LOIs are non-binding documents. It's not uncommon for potential partners or clients to back away from promises made. In the current market, investors prefer to see binding purchases.",
    descriptionShort: "Use a short, non-binding written contract to gauge serious interest, especially for products that are expensive or complex to build.",
    descriptionFull: "A short, written contract that isn't legally binding. Ensure your LOI restates your value proposition to increase signing rates.\n\nLOIs are suitable when it's very difficult, time-consuming, or expensive to create an MVP (e.g. complex hardware products, physical products, or high-investment services).\n\nCase study: Thrive Smart Systems (wireless smart irrigation) sent LOIs after verbal feedback was overwhelmingly positive. When asked to write things down, the number was slashed by 80%. However, they predicted €50,000 in forecasted revenue.",
    cost: "Low. Only requires time to create and distribute.",
    costLevel: "Low",
    practicalApplication: "LOIs are most valuable for products that can't be prototyped quickly. For software products, consider using AI to build a working prototype instead, as this provides much stronger evidence than a non-binding document."
  },
  {
    id: 25,
    name: "Presale or Waitlist (Fake Door)",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: "4-5",
    evidenceDetail: "Evidence strength is high. Waitlist sign-up = 3, Presale without payment = 4, Presale with payment = 5. Tread lightly: it's easy to disappoint prospects if they expected a ready product. Be transparent.",
    descriptionShort: "Direct interested customers to a waitlist or pre-sale page to measure strong purchase intent. AI coding tools let you build these in hours.",
    descriptionFull: "Instead of directing interested customers to your product, send them to a waitlist or pre-sale page.\n\nWaitlist: Notify/early bird access when MVP is live (suitable for SaaS).\nPre-sale: Pre-order a physical product to be shipped when ready (e-commerce).\n\nThis delivers strong results because customers show very strong interest, especially with presales involving payment.\n\nMitigate disappointment by being transparent. Explain your commitment to creating a product customers will love. Involve early-bird customers in co-creation.\n\nCase studies: Buffer validated demand and pricing tiers through a waitlist. Galileo.ai generated massive excitement through their waitlist.",
    cost: "Near-zero with AI coding tools. Domain + hosting costs only. Previously required no-code tool subscriptions or agency fees.",
    costLevel: "Low",
    practicalApplication: "Build a professional waitlist page in an afternoon with AI coding tools. Buffer learned both that demand existed AND which pricing tier was most popular. The speed of AI means you can have a waitlist live within hours of formulating your hypothesis."
  },
  {
    id: 26,
    name: "Redirect to Third-Party Seller",
    categories: ["Real-World Behaviour"],
    phase: "Test Value Proposition",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). This method measures actual purchase conversion without building anything. The downside is losing the sale to a competitor, but you gain very strong test results about purchase intent.",
    descriptionShort: "Direct your prospects to an existing similar product on a third-party platform to measure actual purchase conversion without building anything.",
    descriptionFull: "If you're creating a product similar to an existing one, you can direct prospects (from your ads, social media, cold outreach) to a third-party seller.\n\nThe downside: You lose the sale to a competitor.\nThe upside: Extremely lightweight method to test purchase conversion. No need to build anything.\n\nThis method is especially valuable when:\n- Your product requires physical manufacturing or complex logistics\n- You need to validate demand before any development investment\n- The product category is well-established and similar offerings exist\n\nCase study: An early-stage entrepreneur wanting to organize yoga retreats in Italy was convinced to test demand by sending customers to similar AirBnB properties first.",
    cost: "Free (apart from the cost of a 'lost' sale and customer acquisition channel costs).",
    costLevel: "Free",
    practicalApplication: "Consider whether AI tools can help you build a basic version of your product faster than redirecting to competitors. If building is feasible, capture the sale yourself. If not (physical products, complex logistics), redirect remains a powerful validation method."
  },
  {
    id: 27,
    name: "Prototype (Low to High Fidelity)",
    categories: ["Watch User with Artefact"],
    phase: "Early Product",
    evidenceStrength: "n/a",
    evidenceDetail: "A prototype is an artefact, not a test. Evidence strength depends on how you test it: moderated user tests (#44) provide deep qualitative insight, unmoderated user tests (#45) provide faster but shallower validation.",
    descriptionShort: "Create a prototype ranging from AI-generated designs to fully coded interactive experiences. AI has collapsed the prototype-to-product timeline from weeks to hours.",
    descriptionFull: "Prototypes range from low to high fidelity.\n\nGetting started:\n- Determine goals & target audience\n- Create a prototype at the appropriate fidelity level for your stage\n- Iterate based on feedback\n\nOnce built, test your prototype with target users using moderated user tests (#44) for deep qualitative insight, or unmoderated user tests (#45) for faster, broader validation.",
    cost: "Dramatically reduced by AI. v0/Bolt: free to $20/mo. Replit: free to $25/mo. Figma: free tier. What used to cost thousands in designer + developer time now costs hours of your own time.",
    costLevel: "Low",
    practicalApplication: "Use AI to build a coded, interactive prototype in a day. Spend your time testing with users, not building. The speed of AI means you can test 3-4 prototype variants in the time it used to take to build one."
  },
  {
    id: 28,
    name: "MVP (Minimum Viable Product)",
    categories: ["Real-World Behaviour"],
    phase: "Early Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength: 3. An MVP allows you to collect real usage data to see how users behave in the real world. AI has reduced the cost (time & spend) for developing an MVP, but the 'viable' bar depends heavily on your target audience and their expectations (when a market is flooded with half-finished products, users will likely get less forgiving).",
    descriptionShort: "Build the smallest version of your product to validate your riskiest assumption. AI coding tools have compressed MVP timelines from months to days.",
    descriptionFull: "Eric Ries defines an MVP as 'the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.'\n\nWhat an MVP is NOT:\n- A fully formed product\n- Something customers will choose over established competitors\n- Not necessarily the foundation for the 'real' product\n\nDon't over-invest in any single MVP. Build it fast, test it, learn, iterate or pivot.\n\nCase studies: Groupon started with a WordPress site and PDF vouchers. Spotify's MVP focused solely on streaming in a closed beta.",
    cost: "Dramatically reduced by AI coding tools. A functional MVP that would have cost $10,000-50,000 in development can now be built in days for near-zero marginal cost. Your main investment is time and thought.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to build your MVP in days, not months. The key insight: because building is now cheap, spend more of your time on customer discovery and testing, and less on agonizing over what to build. Build, test, learn, repeat rapidly."
  },
  {
    id: 29,
    name: "Co-creation",
    categories: ["Self-Reportage", "Watch User with Artefact"],
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). Co-creation combines customer feedback with real-world user behavior on an actual product. AI makes it faster to iterate on feedback, shrinking the co-creation cycle from months to weeks.",
    descriptionShort: "Release a beta version to a curated group of friendly users who provide constructive feedback. AI enables faster iteration on their input.",
    descriptionFull: "Co-creation mixes customer feedback on your MVP with real-world user behavior. If your product lends itself to co-creation, it's strongly recommended.\n\nRelease to a select group of friendly users who commit to providing constructive feedback. Take in all feedback, but don't immediately build everything co-creators ask for.\n\nCritical: Select the right users who fit your narrow target audience. Be brave enough to say no to poor-fit prospects.\n\nGetting ready:\n- Build/create beta version\n- Identify target audience and channels\n- Define rewards (discounted rate, extra features, newsletter shoutout)\n- Outline process to capture and prioritize feedback\n\nCase studies: Pickyourself.com ran 30 beta users through co-creation, seeing 8x industry standard sign-up rates at launch. Braintrust leverages their community to even build parts of the product.",
    cost: "Combined costs of beta creation (much lower with AI) plus co-creator incentives. The faster iteration cycle means less total time investment.",
    costLevel: "Medium",
    practicalApplication: "AI has made co-creation dramatically more powerful by shrinking the iteration cycle. When a co-creator gives feedback on Monday, you can ship the improvement by Tuesday. This rapid responsiveness builds trust and generates enthusiasm."
  },
  {
    id: 30,
    name: "Concierge",
    categories: ["Real-World Behaviour"],
    phase: "Early Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). You can handle the entire flow from start to value proof. Customer satisfaction feedback is provided after delivering on your value proposition. AI can now automate portions of the concierge process that were previously fully manual.",
    descriptionShort: "Create and deliver the customer experience manually, with the customer aware of the human involvement. AI can partially automate backend processes.",
    descriptionFull: "Create and deliver a customer experience manually. Unlike Wizard of Oz, the customer is aware of the humans involved.\n\nStandalone: Everything done manually from sign-up to fulfillment.\nCombined with MVP: Digital interface for sign-up, then manual matching/delivery.\n\nThe concierge approach is valuable because:\n- It lets you learn before you automate\n- You understand edge cases before writing code for them\n- Customer feedback is provided after real value delivery\n\nCase study: AirBnB started by targeting conference guests, inviting them to stay on founders' couches. They manually recruited hosts and hired photographers before automating.",
    cost: "AI can reduce the manual effort significantly. Backend automation with AI tools is increasingly affordable. However, the human touch remains essential in early stages.",
    costLevel: "Medium",
    practicalApplication: "Start with a fully manual concierge, then gradually replace manual steps with AI automation as you validate each part of the process. Use AI analytics to identify which manual steps can be automated first without losing quality."
  },
  {
    id: 31,
    name: "Wizard of Oz",
    categories: ["Real-World Behaviour"],
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). The customer believes they're using an automated product, giving you the most realistic feedback possible. AI has blurred the line between Wizard of Oz and real product: AI can handle much of what used to require human 'wizards.'",
    descriptionShort: "Present an automated-looking interface while delivering manually behind the scenes. AI can now serve as the 'wizard,' handling much of the manual work.",
    descriptionFull: "Wizard of Oz delivers a customer experience manually using human effort instead of software. Unlike concierge, customers don't see the people involved.\n\nCombines a digital, customer-facing interface with human-delivered backend processes.\n\nGet started:\n- Build a customer-facing interface\n- Handle backend processes manually behind the scenes\n- Track which cases are routine and which require special handling\n- Gradually automate as you learn which decisions can be safely systematized",
    cost: "Significantly reduced by AI. The 'human wizard' cost is lower because AI handles routine cases. Combine AI tools with human oversight for the best balance.",
    costLevel: "Low",
    practicalApplication: "Use AI as your 'wizard' for routine cases while humans handle edge cases. This lets you validate the full customer experience at a fraction of the traditional Wizard of Oz cost. Gradually replace human oversight with AI as you learn which decisions can be safely automated."
  },
  {
    id: 32,
    name: "Customer Service/Success Feedback",
    categories: ["Self-Reportage"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). CS teams have real-world information and can back up claims with data. However, customers inherently share more negative feedback, skewing results. AI can now analyze CS conversations at scale to surface patterns.",
    descriptionShort: "Learn from your CS team about customer needs through calls, tickets, and interviews. AI can analyze conversations at scale to surface patterns automatically.",
    descriptionFull: "Talk to your CS team, listen in on calls, or read call transcripts & tickets. The aim is to learn about the jobs, pains, and gains of your customers.\n\nApproaches:\n1. Set up continuous feedback: Tag tickets in your CRM so product teams are automatically notified of relevant issues.\n2. Analyze pre-recorded calls: Process historical conversations to identify recurring themes.\n3. Interviews with CS agents: Prepare questions and analyze themes across multiple agent interviews.\n\n<strong>Feature requests ≠ product discovery:</strong>\nCS conversations are full of customers requesting specific features, but rarely reveal the underlying opportunity. Why do they think they need that feature? A good product discovery process digs beneath the immediate request to understand what it solves, then validates whether that's a shared, important, recurring problem across the ICP, whether solving it likely contributes to achieving your #1 outcome, then ideates multiple solution ideas and runs tests to identify the best one. Simply implementing what users request skips all that fundamental product work.\n\nDon't implement every feature request. This is the starting point for experimentation. Validate and prioritize.",
    cost: "Low. AI analysis tools range from free to $100/mo. Much cheaper than manually analyzing hundreds of tickets.",
    costLevel: "Low",
    practicalApplication: "Set up AI-powered ticket analysis to automatically surface the top 10 recurring customer pain points each week. Use an LLM to summarize CS conversations into a weekly 'voice of customer' report for the product team."
  },
  {
    id: 33,
    name: "Sales Force Feedback",
    categories: ["Self-Reportage"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Sales teams have real-world information and can back up claims with data. AI conversation intelligence tools can now capture and analyze sales calls automatically.",
    descriptionShort: "Learn from your Sales team about customer needs, near misses, and competitive landscape. AI conversation intelligence captures insights automatically.",
    descriptionFull: "Learn from your sales team about customer jobs, pains, gains, and how well your product meets their needs.\n\nApproaches:\n1. Continuous feedback: Use conversation intelligence tools (Gong, Chorus, Clari) to record, transcribe, and analyze sales calls.\n2. Structured analysis: Analyze call recordings to identify the top reasons for lost deals, most common objections, and most requested features.\n\nLook for:\n- Near misses: What prevented sales from occurring?\n- Feature requests\n- Who you're being compared to (competitive landscape)\n- Better understanding of your Ideal Customer Profile\n\n<strong>Feature requests ≠ product discovery:</strong>\nSales conversations are full of prospects requesting specific features, but rarely reveal the underlying opportunity. Why do they think they need that feature? A good product discovery process digs beneath the immediate request to understand what it solves, then validates whether that's a shared, important, recurring problem across the ICP, whether solving it likely contributes to achieving your #1 outcome, then ideates multiple solution ideas and runs tests to identify the best one. Simply implementing what users request skips all that fundamental product work.\n\nDon't implement every feature request. This is the starting point for experimentation.",
    cost: "Conversation intelligence tools: $50-150/user/mo for enterprise tools (Gong, Chorus). LLM analysis of existing call recordings can be done for minimal cost.",
    costLevel: "Variable",
    practicalApplication: "If you have a sales team, AI conversation intelligence tools are among the highest-ROI investments. They capture every competitive mention, objection, and feature request automatically, turning your sales conversations into a product discovery goldmine."
  },
  {
    id: 34,
    name: "Customer Advisory Board",
    categories: ["Self-Reportage"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Decreased by reliance on self-reporting and small group size. Increased by the fact that feedback is given on a concrete, existing product. AI can help analyze and act on advisory board feedback faster.",
    descriptionShort: "Maintain a group of friendly customers who provide regular feedback. AI helps analyze feedback patterns and accelerate follow-up.",
    descriptionFull: "A group of friendly customers who speak to you regularly is extremely valuable. They can provide feedback on website copy, marketing materials, or product features, and keep you informed of their pains, gains, and new solutions in the market.\n\nGetting ready:\n- Ask loyal customers to join with fitting incentives (website mention, newsletter shoutout, podcast invite, monetary incentive)\n- Decide what you want to learn & format\n- Set up tooling for capturing feedback\n- For product feedback: Have customers narrate their thought process while using it\n\nCase studies: Adobe shapes product strategy with global Customer Advisory Boards. Dell's Advisory Board helped beta test new solutions.",
    cost: "Depends on whether you need to incentivize members. AI meeting analysis tools: free to $30/mo.",
    costLevel: "Low",
    practicalApplication: "Use AI to turn advisory board meetings into structured insights automatically. Track feedback themes over time to identify trends. The combination of human relationships + AI analysis makes advisory boards more actionable than ever."
  },
  {
    id: 35,
    name: "PMF Audit (Sean Ellis Test)",
    categories: ["Self-Reportage"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). The Sean Ellis test provides a specific, actionable benchmark (40% 'very disappointed' = PMF). Results can be reliable with as few as 40 respondents. AI can help with segmentation and analysis of results.",
    descriptionShort: "Survey existing customers with the key question: 'How disappointed would you be if you could no longer use this product?' AI helps with segmentation and analysis.",
    descriptionFull: "A survey for existing customers who recently used your product, including the key question: 'How disappointed would you be if you could no longer use this product? Very disappointed, somewhat disappointed, or not disappointed.'\n\nAccording to Sean Ellis, a 40% 'very disappointed' rate is a strong indicator of product/market fit. Most startups don't achieve this. However, you can segment answers to identify which customer cohort would be most disappointed.\n\nResults can be reliable with as few as 40 respondents.\n\nGood additional questions:\n- 'Who would you recommend this product to?' (identify target audience)\n- 'How can we improve this product?' (identify new features)\n- 'What's the main benefit you get?' (identify core value)\n\nCase study: Superhuman's CEO found only 22% 'very disappointed,' but segmented to find their ideal persona: 'founders, managers, executives, and business development.'",
    cost: "Low. Survey tools (Typeform, Google Forms) are free. AI analysis adds minimal cost.",
    costLevel: "Low",
    practicalApplication: "Run the Sean Ellis test, then use AI to segment results and find your ideal customer persona. Feed the open-ended responses into an LLM to understand what makes your happiest customers different and how to attract more of them."
  },
  {
    id: 36,
    name: "Surveys (In-App & Email)",
    categories: ["Self-Reportage"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Stronger than pre-launch surveys because you're addressing real customers about a concrete product. AI makes open-ended question analysis practical at scale.",
    descriptionShort: "Present short questionnaires to existing customers in the app or via email. AI makes analyzing open-ended responses at scale practical and fast.",
    descriptionFull: "Short questionnaires for existing customers aimed at learning specific things. Present in-app or via email. Should be combined with data analytics (#38) to find the 'why' behind customer behavior.\n\nIn-app surveys:\n- Keep short (max two questions), use open-ended questions\n- Present when user seems confused ('What's holding you back?')\n- Present after key actions ('What almost stopped you?')\n\nEmail surveys:\n- Discovery survey for active customers\n- PMF audit\n- Ask customers to rank roadmap features\n\nContextual survey tools (Sprig, Refiner) can trigger micro-surveys based on user behavior in real-time.\n\nCase study: GitHub sent customers email surveys with roadmap features to rank, increasing user participation and loyalty.",
    cost: "In-app survey tools: $50-200/mo. Email surveys: free tools available. AI analysis of responses: minimal cost.",
    costLevel: "Variable",
    practicalApplication: "Use AI-powered contextual surveys (Sprig, Refiner) to ask the right question at the right moment. Then use AI to analyze open-ended responses at scale, something that was the biggest bottleneck of qualitative surveys."
  },
  {
    id: 37,
    name: "Scrape Review Sites / App Store Reviews",
    categories: ["Desktop Research"],
    phase: "Mature Product",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Reviews provide real customer opinions but tend to be polarized. AI makes large-scale review analysis practical and can surface nuanced patterns that manual reading would miss.",
    descriptionShort: "Monitor and analyze what customers say about you on review sites and app stores. AI enables sentiment analysis and pattern detection at scale.",
    descriptionFull: "Just as you can scrape review sites of competitors pre-launch, it's advisable to keep abreast of what your current and churned customers are saying about your company and product.\n\nKey approach:\n1. Set up automated monitoring for your key review platforms\n2. Analyze reviews regularly for trend analysis\n3. Compare sentiment over time to detect improvements or regressions\n4. Cross-reference review themes with your product roadmap\n\nTools like Anecdote and Enterpret centralize all customer feedback (reviews, CS tickets, surveys) and surface trends.",
    cost: "Scraping tools: free to $50/mo. AI analysis: minimal cost. Dedicated feedback platforms (Anecdote, Enterpret): $100-500/mo.",
    costLevel: "Low",
    practicalApplication: "Set up automated review monitoring with AI analysis. Feed all reviews into an LLM monthly to identify trends, competitive mentions, and feature requests. The combination of automated scraping + AI analysis turns review monitoring from a manual chore into an automated insight engine."
  },
  {
    id: 38,
    name: "Data Analytics",
    categories: ["Real-World Behaviour"],
    phase: "Mature Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5) because it shows how users actually behave. AI analytics tools can now surface insights automatically that previously required a dedicated data analyst. Data shows 'how,' not 'why' - combine with other methods.",
    descriptionShort: "Measure and analyze how customers use your product. AI analytics tools automatically surface insights, anomalies, and optimization opportunities.",
    descriptionFull: "Every business must measure how customers use what they build. Without it, you're flying blind. Strong data analytics is the cornerstone of experimentation.\n\nKey reports:\n- Conversion rates for end-to-end journey\n- Funnel reports showing actions and drop-offs\n- Heat maps showing click and scroll patterns\n- Cohort analysis (by acquisition source, period, persona)\n\nCommon tools: Amplitude, Mixpanel, PostHog, Heap for product analytics. FullStory, Microsoft Clarity for session replay. Google Analytics for web traffic.\n\nFor New Users: Get them to core value as quickly as possible. Identify the optimal onboarding path by analyzing which steps correlate with long-term retention.\n\nBest users: Your blueprint for what you want others to become. Identify the behaviors that distinguish power users from churned users.\n\nCase study: AirBnB conducts ~700 growth experiments weekly. They discovered users from Asian countries were leaving quickly, adapted the experience, and saw 10% conversion increase.",
    cost: "Microsoft Clarity: free. PostHog: generous free tier. Amplitude/Mixpanel: free tiers, then $50-1000/mo. Previously required hiring a data analyst ($80-150K/year).",
    costLevel: "Variable",
    practicalApplication: "AI analytics tools have democratized data analysis. You no longer need a dedicated data analyst to get actionable insights. Start with free tools (Clarity, PostHog) and let AI surface your biggest opportunities and problems automatically."
  },
  {
    id: 39,
    name: "Feature Stub",
    categories: ["Real-World Behaviour"],
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). You can see whether people show interest by clicking within your app, but can't measure whether they'll actually use the full feature. AI makes implementing feature stubs faster than ever.",
    descriptionShort: "Place a button or entry point for a non-existent feature in your product to measure actual user interest before building it.",
    descriptionFull: "A small test of interest in a feature at the very beginning of the experience (e.g. a button). Include a feature stub within your existing product to see how many users click on it.\n\nIf clicked, present a friendly 'coming soon' message. Include a 'learn more' link to qualify interest further, or ask users to fill out a short survey (max three questions).\n\nRequires event tracking/data analytics to measure the outcome.\n\nMake sure to include a toggle that allows you to quickly turn your feature stub on and off.\n\nMeasure:\n- How many people click the feature stub\n- How many click 'learn more'\n- How many fill out the survey & survey output",
    cost: "Cheap, especially with AI coding tools. Implementation takes minutes. Analytics tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to implement feature stubs in minutes. The speed of AI means you can test interest in 5 potential features simultaneously, each with its own stub, and let the data guide your roadmap."
  },
  {
    id: 40,
    name: "A/B Testing Product Versions/Features",
    categories: ["Real-World Behaviour"],
    phase: "Mature Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). A/B tests are statistically reliable for evaluating product variations. AI can now generate variants, run experiments, and analyze results faster than ever. Roll out to a subset first to reduce risk.",
    descriptionShort: "Compare two or more versions of a product feature to determine which performs better. AI accelerates variant creation, experimentation, and analysis.",
    descriptionFull: "In product management, A/B tests (split tests) find the most effective variation of a product feature or update. A statistically reliable method to evaluate performance.\n\nYou can test anything: buttons, text, colors, features, UI, messaging. Intended results: greater engagement, higher conversion, improved retention.\n\nDon't roll out new features to all customers at once. Roll out to a select few first.\n\nBy using A/B testing, product managers can:\n1. Determine whether they're building the right product\n2. Launch new features with confidence through staged rollouts\n3. Experiment with pricing and sorting algorithms\n\nTools: Statsig (free tier), GrowthBook (open source), LaunchDarkly, Optimizely, Eppo.",
    cost: "Many tools have free tiers: Statsig, GrowthBook (open source). Enterprise tools: $100-1000/mo. AI coding tools make variant creation nearly free.",
    costLevel: "Variable",
    practicalApplication: "Use AI experimentation platforms to run more experiments faster. Multi-armed bandit algorithms automatically optimize traffic allocation, meaning you get answers sooner with less risk. The combination of AI variant creation + automated experimentation = continuous optimization."
  },
  {
    id: 44,
    name: "Moderated User Test (1:1)",
    categories: ["Watch User with Artefact"],
    phase: "Early Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is low (1 out of 5). You observe real behavior on a real artefact and can probe in real time — asking 'why did you hesitate there?' turns a surface observation into a deep insight. The Hawthorne effect (people behave differently when watched) and social desirability bias reduce evidence quality somewhat. It's advisable to always run a moderated user test before directing 'real traffic' to your MVP: Nielsen Norman Group research shows 5 users uncover ~85% of usability problems.",
    descriptionShort: "Sit with a target user while they use your product as they usually would (without direction) or complete tasks. The moderator observes, probes, and follows up in real time.",
    descriptionFull: "Briefing (5 min): explain the purpose, set the participant at ease, emphasize there are no wrong answers.\n\nTask execution (20-40 min): participant works through 3-5 core tasks while thinking aloud OR uses the product as they usually would, without direction.\n\nDebrief (5-10 min): open-ended reflection, follow-up on moments of friction or delight.\n\n<strong>What makes moderated tests powerful:</strong>\n- You can probe: 'What did you expect to happen?'; 'What was your goal?' (especially powerful if executed immediately after a 1:1 landing page test) / 'Why did you go there first?'\n- You catch non-verbal cues: hesitation, facial expressions, posture shifts\n- You can adapt mid-session when something unexpected surfaces\n- Works with low-fidelity prototypes — the moderator can explain what isn't built yet\n\n<strong>Watch out for:</strong>\n- Hawthorne effect: participants behave differently when observed\n- Social desirability bias: participants may be kinder than their true opinion\n- Leading questions: 'Don't you think this button is easy to find?' biases the answer\n- Keep sessions under 60 minutes to avoid fatigue\n\nNielsen Norman Group recommends 5 users per round for qualitative tests. Test, fix, test again — iterative rounds of 5 beat one round of 20.",
    cost: "Low-Medium. Participant compensation might be needed. Recruitment via your own network is free; third-party panels (User Interviews, Respondent) charge per recruit. Remote testing tools (Lookback, Zoom): free tiers available.",
    costLevel: "Low",
    practicalApplication: "Run 5 moderated sessions on your prototype before directing 'real traffic'. Record every session (with consent) so the team can watch highlights. The moderator's ability to ask 'why?' is irreplaceable — use moderated tests whenever you need to understand the reasoning behind user behavior, not just the behavior itself."
  },
  {
    id: 45,
    name: "Unmoderated User Test",
    categories: ["Watch User with Artefact"],
    phase: "Early Product",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You see real behavior on a real artefact, but you can't probe or ask follow-up questions — you'll see <em>what</em> happened but often not <em>why</em>. When using third-party panel providers, data quality varies wildly: professional testers may give rehearsed 'website critiques' rather than authentic reactions, and some sessions are unusable pulp.",
    descriptionShort: "Participants complete tasks on your prototype or product independently, without a moderator present. Faster and cheaper than moderated tests, but you sacrifice the ability to probe and risk receiving low-quality sessions.",
    descriptionFull: "<strong>When to use unmoderated tests:</strong>\n- Evaluating specific UI elements, flows, or micro-interactions\n- Comparing two design variants (A vs B) at scale\n- Quick validation of minor design changes\n- When you need results fast and can't schedule 1:1 sessions\n- Quantitative benchmarking (task completion rate, time on task) across 20-50+ participants\n\n<strong>When NOT to use them:</strong>\n- Early-stage concept testing where context and explanation are needed\n- Complex flows that require participant guidance\n- When you need to understand deep emotional reactions or reasoning\n\n<strong>The data quality problem:</strong>\n- You can't tell if a session is useful until you watch it — expect to discard 10-30% of sessions\n- Third-party panel testers may rush through tasks or give generic feedback to collect compensation\n- Instructions must be crystal clear — participants can't ask for clarification\n- Think-aloud data is shallower: people feel unnatural talking to themselves\n\n<strong>Common tools:</strong>\nMaze, Lyssna (formerly UsabilityHub), UserTesting, Lookback, PlaybookUX. Most offer their own participant panels, or you can recruit your own users.\n\nTip: always pilot-test your task instructions with one person before launching to the full panel. Ambiguous instructions are the #1 cause of wasted sessions.",
    cost: "Low. Platform costs: free tiers available (Maze, Lyssna). Third-party panel participants: €5-50 per tester depending on the platform and audience specificity.",
    costLevel: "Low",
    practicalApplication: "Use unmoderated tests for quick, focused validation of specific UI decisions — button placement, navigation clarity, checkout flow. Pair with moderated tests: run 5 moderated sessions first to understand the 'why,' then run 20-30 unmoderated sessions to quantify how widespread the issues are. Always over-recruit by 20-30% to compensate for unusable sessions."
  }
];

export const categories: Category[] = [
  "Desktop Research",
  "Self-Reportage",
  "Watch User in Environment",
  "Watch User with Artefact",
  "Real-World Behaviour"
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
    "Desktop Research": "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
    "Self-Reportage": "bg-amber-100 text-amber-800 dark:bg-amber-900/30 dark:text-amber-300",
    "Watch User in Environment": "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
    "Watch User with Artefact": "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
    "Real-World Behaviour": "bg-rose-100 text-rose-800 dark:bg-rose-900/30 dark:text-rose-300"
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
