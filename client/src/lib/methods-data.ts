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
    evidenceDetail: "Evidence strength is low (1 out of 5). Public research is about broad audiences and may not reflect your niche. Article headlines are often taken out of context, and even reputable sources can be biased. <a href='https://journals.plos.org/plosone/article?id=10.1371/journal.pone.0005738' target='_blank' rel='noopener noreferrer' class='underline text-primary hover:text-primary/80'>34% of scientists admitted</a> to sometimes applying questionable research practices. Facts and figures relying on many assumptions are far easier to get wrong than right. When using LLMs for this research, keep in mind they are trained on publicly available sources and may confidently present outdated or fabricated citations. Always verify the original source.",
    descriptionShort: "Deep dive into your problem space, target audience, or industry using online studies, reports, public data sources, and LLM-assisted research.",
    descriptionFull: "There are plenty of online sources that allow you to deep dive into your problem space, target audience, or industry. Online studies, reports and public data are especially helpful when you're defining your audience size/market size and analyzing your competitors' strengths and weaknesses.\n\nSome examples of reputable sources:\n- Industry trends: McKinsey, Bain&Co\n- Consumer behavior & opinion: Gallup, GWI\n- Industry specific reports: Fintech, SaaS, Ecommerce\n- Data/startup news: Crunchbase, Statista, Growjo, TechCrunch\n\nAI-powered research:\nLLMs like ChatGPT, Claude, and Perplexity can dramatically speed up your desktop research. Use them to synthesize industry reports, summarize academic papers, and identify trends. However, LLMs are trained on publicly available data and have critical limitations:\n- They may hallucinate citations and statistics. Always ask for the source and verify it exists.\n- Their training data has a cutoff date. Use tools with web search (Perplexity, ChatGPT with browsing) for recent data.\n- They reflect the biases of their training data. Cross-reference findings with primary sources.\n- Use Deep Research features (available in ChatGPT, Gemini, Claude) for more thorough, multi-source analysis.\n\nThe key rule: treat LLM output as a starting point, not a conclusion. Judge the evidence strength of every study or statistic the LLM references by checking: sample size, methodology, recency, and source credibility.\n\nLimitations:\n- Research studies are generally about broad audiences. If you're targeting a niche audience, you'll struggle to find studies reflecting that niche.\n- Article headlines are often taken out of context, so trace back to the original source.\n- Facts and figures can be unreliable due to human bias and mathematical errors.",
    cost: "Can vary from free to several thousand (for certain studies), to monthly subscription fees (Crunchbase, Statista). LLM tools: ChatGPT Plus ($20/mo), Claude Pro ($20/mo), Perplexity Pro ($20/mo).",
    costLevel: "Variable",
    practicalApplication: "Company Builders start their process by digging into industry trends to identify a market opportunity. Use an LLM with Deep Research capabilities to get a first comprehensive landscape overview in minutes instead of days. Then verify the most critical data points against primary sources. Follow up with qualitative interviews and surveys to see if there truly is an opportunity."
  },
  {
    id: 2,
    name: "User Reviews & Discussions",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). While you can learn a lot about unmet customer needs, the information is anecdotal and should be treated as a starting point for more experimentation. Just because the same criticism is repeated on a forum doesn't mean your assumption is validated. Most online forums don't allow you to identify the poster, so it's impossible to figure out whether they belong to your ICP. AI-powered sentiment analysis can help identify patterns at scale, but beware of over-interpreting noisy data.",
    descriptionShort: "Crawl discussion forums, review sites, app stores, and YouTube channels to uncover unmet customer needs. Use AI to spot patterns at scale.",
    descriptionFull: "Dive into the places where your target customers talk about their problems. Which source depends on your audience: Reddit or Substack for techies, G2 or Capterra for business buyers, Google or Yelp for local services.\n\nWhat to look for:\n- Workarounds and hacks customers use (signals no perfect solution exists)\n- Recurring feature requests and complaints about existing products\n- The exact language customers use to describe their problems (crucial for your messaging)\n\nAI-powered approaches:\n- Paste batches of reviews into an LLM and ask it to extract recurring themes, 'jobs to be done,' and customer language.\n- Scraping tools (Browse AI, Apify) automate data collection across platforms.\n- Use sentiment analysis to categorize feedback into pain points, wishes, and praise.\n\nTimebox yourself — it's easy to go down the rabbit hole. Treat findings as hypotheses to validate, not conclusions.",
    cost: "Low. Scraping tools have free tiers. LLM analysis costs are minimal.",
    costLevel: "Low",
    practicalApplication: "Common practice for CRO experts, venture builders, and Product Managers. Use an LLM to batch-analyze hundreds of reviews and extract the exact customer language for your messaging and positioning."
  },
  {
    id: 3,
    name: "Search Trend Analysis",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Search volume data gives you insights into whether your target audience is already aware of the problem or looking for a specific solution. However, you won't be able to get results that are particularly indicative of your niche target audience. Note: as more people use AI chatbots for search, traditional search volume data may underrepresent actual interest in a topic.",
    descriptionShort: "Analyze search volume and AI query trends to understand whether your target audience is aware of the problem or looking for specific solutions.",
    descriptionFull: "Analyzing search volume data gives you insights into whether your target audience is already aware of the problem you're trying to solve, or is looking for a specific product or product category. If you're introducing a new product category, search volume will be low or non-existent.\n\nTools:\n- Google Trends, Google Keyword Planner, Google 'people also ask', Bing keyword research\n- AI-enhanced SEO tools like Ahrefs, SEMrush, and SparkToro now use AI to cluster topics, predict trends, and identify content gaps\n\nImportant AI-era consideration:\nAs more people shift their searches to AI chatbots (ChatGPT, Perplexity, Gemini), traditional search volume data increasingly underrepresents actual interest. Consider:\n- Using Perplexity or ChatGPT to understand what questions people are asking about your problem space\n- Monitoring AI-generated 'people also ask' and related query suggestions\n- Looking at social media discussion volume as a complement to search data\n\nDefine a geographical area for your search. Decide what you want to explore (pains, gains, jobs, existing solutions, etc.). Take screenshots and notes during your research.\n\nThe downside is that you won't be able to get results that are particularly indicative of your niche target audience.",
    cost: "Most tools (Google Trends, Keyword Planner) are free. AI-enhanced SEO tools have subscription costs ($99-299/mo).",
    costLevel: "Free",
    practicalApplication: "Use search trend analysis early in your discovery process to validate whether there is existing awareness and demand for the problem you're solving. Complement traditional search data with AI chatbot query analysis to get a fuller picture of intent. Combine with other methods for stronger validation."
  },
  {
    id: 4,
    name: "Competitor Research & Mystery Shopping",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Competitor research can help prove that a certain pain point is not solved by anyone else, but competitors will continue to adapt their strategies. Never treat competitive intelligence as a static asset; it requires continuous updating. AI can speed up the research but the insights are only as current as the data available.",
    descriptionShort: "Analyze competitors' strategies, landing pages, customer journeys, and marketing materials using AI-assisted research to identify gaps in the market.",
    descriptionFull: "After identifying your key competitors, look at them for inspiration and to identify gaps in the market. Approaches include:\n- Analyzing landing pages, ad campaigns, and marketing materials (Similarweb)\n- Analyzing the personas competitors address\n- Analyzing web traffic (Similarweb)\n- Mystery shopping: Sign up and experience the full customer journey. Map the entire journey in a flowchart tool like Miro.\n\nAI-powered competitor analysis:\n- Use LLMs to analyze competitor websites, pricing pages, and positioning. Paste their landing page copy into ChatGPT/Claude and ask it to identify their target persona, value proposition, and positioning gaps.\n- AI tools like Crayon, Klue, or Kompyte automate competitive intelligence monitoring.\n- Use ChatGPT/Claude to compare multiple competitors side-by-side based on features, pricing, positioning, and reviews.\n- AI can analyze competitors' job postings to infer their strategic priorities and upcoming features.\n\nImportant: Your competitors probably aren't who you think they are. For many SaaS products, their key competitor isn't another SaaS product, but Microsoft Excel (or now, an AI chatbot). Ask target customers 'How else have you tried to solve the problem?' to understand your competitive landscape.\n\nAlthough useful to keep an eye on competitors, don't get stuck in rearview mirror-looking behavior. In the AI era, competitive landscapes shift faster than ever.",
    cost: "Low. LLM-assisted analysis is nearly free. Similarweb has a free tier. Dedicated competitive intelligence tools (Crayon, Klue) have subscription costs.",
    costLevel: "Low",
    practicalApplication: "Use an LLM to do a rapid competitive analysis: paste competitor landing pages, pricing pages, and G2 reviews into a prompt and ask for a structured comparison. Map competitors' customer journeys to identify friction points and gaps. Update your competitive intelligence regularly, as AI is accelerating the pace of change."
  },
  {
    id: 5,
    name: "Review FAQ Pages of Competitors",
    category: "Public Data",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). FAQ pages reveal customer objections in disguise, but the information is indirect and requires interpretation. AI can help you analyze FAQ pages at scale and translate them into actionable objection-handling insights.",
    descriptionShort: "Use AI to analyze competitors' FAQ pages at scale, uncovering real customer objections and unmet needs disguised as questions.",
    descriptionFull: "Diving deep into your competitors' FAQ pages gives you unique insights into the problems that real customers are facing. The questions on the FAQ page are actually customer objections in disguise. Ask yourself why customers might have been putting this forward.\n\nExamples:\n- 'Where is this product made' = How can I validate the quality?\n- 'What are popular products' = What would you recommend to me, and what fits my use case?\n- 'How long does the battery last' = I've been disappointed by battery life in the past\n\nAI-powered approach:\nInstead of manually reading through dozens of FAQ pages, use an LLM to analyze them:\n- Paste competitors' FAQ content into ChatGPT/Claude and ask it to reframe each question as the underlying customer objection or fear.\n- Ask the LLM to cluster the objections by theme (trust, quality, pricing, usability) to identify systemic gaps.\n- Use this analysis to proactively address these objections in your own messaging and product design.\n- AI web browsing tools can scrape and analyze FAQ pages from multiple competitors in one session.\n\nEnsure to timebox your work because it's easy to get lost down the rabbit hole.",
    cost: "Low. LLM analysis makes this nearly free and much faster than manual review.",
    costLevel: "Free",
    practicalApplication: "Use an LLM to batch-analyze FAQ pages from your top 5-10 competitors. Ask it to identify the top recurring customer objections and suggest how to address them in your own value proposition and landing page copy."
  },
  {
    id: 6,
    name: "Leverage / Create Communities",
    category: "Community & Network",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Communities are a starting point for engagement and word of mouth, but community interactions alone don't validate your assumptions. They represent an opportunity to access tightly-knit groups for further research.",
    descriptionShort: "Tap into existing online/offline communities or build your own to reach your target audience and kickstart word of mouth.",
    descriptionFull: "There are plenty of online and offline communities you can tap into, or you can start building your own. Communities are great starting points for new startups since they represent tightly-knit groups likely to reference each other when making buying decisions.\n\nLeveraging existing communities:\n- Online: Facebook groups, forums, subreddits, Discord channels, blogs, Twitch, YouTube, ProductHunt\n- Offline: cafes, yoga groups, meetups, conferences\n\nYou can invite them to interviews/surveys/co-creation, drive them to your landing page, social media ads, or crowdfunding campaign.\n\nBuilding your own community:\nA database of engaged prospects is extremely valuable. However, community-building takes time, perseverance, and hard work.\n\nAI in community building:\n- Use AI tools to monitor community discussions and identify trending topics, pain points, and opportunities.\n- AI chatbots can help manage community engagement at scale (answering FAQs, routing questions).\n- Use AI to analyze community discussions and extract customer insights without manually reading every post.\n- Tools like SparkToro help you find where your target audience already hangs out online.\n\nCase studies: Etsy visited craft fairs to identify their ideal community. Facebook started by targeting Harvard students. Tinder spread through specific colleges and fraternities.",
    cost: "Leveraging existing communities is free. Building your own entails maintaining a webpage, forum, or newsletter plus human effort.",
    costLevel: "Variable",
    practicalApplication: "Identify where your target audience naturally gathers online and offline. Use AI to monitor community discussions at scale and extract insights. Use these communities as a starting point for recruitment into interviews, surveys, and co-creation processes."
  },
  {
    id: 7,
    name: "Qualitative Interviews with Experts (1:1)",
    category: "Expert Interview",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Expert interviews partially circumvent the self-reporting problem because experts have real-world experience with how customers actually behave. You need to factor in differences between your target audience and the expert's experience base. While AI can help you prepare for and analyze interviews, it cannot replace the depth of insight from a real expert conversation.",
    descriptionShort: "Interview industry experts, ex-employees of competitors, partners, and suppliers to gain real-world insights. Use AI to prepare questions and analyze transcripts.",
    descriptionFull: "Experts can be project stakeholders, industry experts, ex-employees of competitors, or partners & suppliers. The biggest problem with customer interviews (people don't behave as they say they will) can be partially circumvented by speaking to experts who have real-world experience.\n\nDepending on what you're learning:\n- Strategy insights: VP/head-of level\n- Customer/prospect behavior: Marketing, sales, CS agents\n\nFor ex-employees of competitors, retain anonymity using third-party providers like Alphasights or Expertwired.\n\nAI-enhanced expert interviews:\n- Use AI to prepare: Feed your research into an LLM and ask it to generate targeted interview questions based on your riskiest assumptions.\n- AI transcription tools (Otter.ai, Fireflies.ai, Fathom) automatically transcribe and summarize interviews in real-time, letting you focus on the conversation.\n- After the interview, use an LLM to analyze transcripts: extract key insights, identify patterns across multiple interviews, and flag contradictions.\n- AI note-taking tools can tag and categorize insights automatically.\n\nImportant: Do not replace expert interviews with LLM conversations. An LLM can simulate expert knowledge but cannot provide real-world, current industry intelligence or nuanced judgment. Use AI to prepare and analyze, not to replace the human conversation.",
    cost: "A 1-hour expert interview costs approximately \u20AC200-400. AI transcription tools: free to $30/mo. LLM costs for preparation and analysis are minimal.",
    costLevel: "Medium",
    practicalApplication: "Use AI to prepare smarter questions before the interview, then use AI transcription and analysis tools to extract every insight from the conversation. Feed multiple interview transcripts into an LLM to identify patterns and contradictions across experts."
  },
  {
    id: 8,
    name: "Qualitative Customer Interviews (1:1)",
    category: "Self-Reporting",
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
    id: 9,
    name: "A Day in the Life (1:1)",
    category: "Observation",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Observing real behavior provides stronger evidence than self-reporting, but the small sample size limits generalizability. AI tools like session recording and screen-sharing analysis can supplement in-person observation.",
    descriptionShort: "Observe a target customer during their day to learn about real-world behaviors, jobs, pains, and gains through direct observation. AI tools can extend observation to digital environments.",
    descriptionFull: "This method is about observing the subject during a day in their life (or several hours) to learn about their jobs, pains, and gains. Key: identify the right, niche target audience beforehand.\n\nRather than asking how they would solve problems, you watch them go about their day and see how they behave in real life. The observation should take place at the regular place where the challenge occurs (e.g. workplace).\n\nA simple version: Ask your target customer to let you watch while they use the tools they currently use (that you're aiming to replace) and narrate their journey. Identify friction points.\n\nAI-enhanced observation:\n- Screen recording tools with AI analysis (Hotjar, FullStory, Microsoft Clarity) can extend observation to digital workflows, automatically flagging friction points and rage clicks.\n- AI can analyze recorded sessions to identify behavioral patterns across multiple users.\n- Use AI transcription to capture and analyze narrated walkthroughs.\n- For remote observation, tools like Loom or Grain allow users to record their screen while narrating, which you can then analyze with AI.\n\nThe core principle remains: watch what people do, not what they say they do. AI can scale this observation but cannot replace the depth of in-person shadowing for complex workflows.\n\nCase studies: Intuit's follow-me-home program visits customers at their workplace to watch them use software. Rows.com asked target customers to share their existing spreadsheets to learn about use cases.",
    cost: "Low. You may need to compensate subjects for time and incur travel costs. AI session recording tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Combine in-person observation with AI-powered session recording to get both depth and scale. Use AI to analyze recorded sessions and identify the friction points that users don't consciously notice or report."
  },
  {
    id: 10,
    name: "Card Sorting (Group)",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). Card sorting relies on self-reported priorities, which may not reflect actual behavior. However, it's useful for understanding how customers conceptualize and prioritize their pains, gains, and jobs. AI can help synthesize results from multiple sessions.",
    descriptionShort: "Invite target customers to sort and rank cards representing pains, gains, and jobs to understand priorities and mental models.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.). Create cards (analog or digital) containing the different pains, gains, and jobs you've uncovered.\n\nInvite 15-20 target customers for a card sorting session where they map and rank the cards in each category. Ask them to talk through their thought process. Write additional cards if new jobs, pains, or gains come up.\n\nSessions should take max 45 minutes.\n\nAI-enhanced card sorting:\n- Use an LLM to generate initial card content from your interview transcripts and survey responses.\n- Digital card sorting tools (Optimal Workshop, Maze) can run sessions remotely and asynchronously, reaching more participants.\n- Use AI to analyze results across multiple sessions and identify clustering patterns.\n- AI can help you synthesize the 'why' behind the sorting decisions when participants explain their reasoning.",
    cost: "Low, depending on whether target customers need compensation. Miro (free), Optimal Workshop, and Maze have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use an LLM to extract pains, gains, and jobs from your interview transcripts, then turn them into cards for the sorting session. After sessions, feed all participant reasoning into an LLM to identify patterns in how customers prioritize."
  },
  {
    id: 11,
    name: "Buy a Feature (Group)",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). The play money mechanism adds forced prioritization that makes results more meaningful than simple ranking, but it's still self-reported and may not reflect actual purchase behavior.",
    descriptionShort: "Give target customers play money to 'buy' features from a list, revealing which features they value most through forced prioritization.",
    descriptionFull: "This method requires input from previous methods (customer interviews, surveys, desktop research, etc.) and is executed in a group setting with ideally 15-20 target customers.\n\nCreate a list of 15-30 features and assign a play money budget for each participant. Each customer allocates their money to the features they want most. They can bundle their funds together to receive more features.\n\nThe group dynamic and limited budget force genuine prioritization decisions.\n\nAI-enhanced approach:\n- Use an LLM to generate your initial feature list based on interview insights and competitive analysis.\n- Digital tools can facilitate this exercise remotely, making it easier to reach more participants.\n- After the exercise, use AI to analyze spending patterns and identify which feature combinations are most popular together.",
    cost: "Low, depending on whether target customers need compensation for their time.",
    costLevel: "Low",
    practicalApplication: "Use 'Buy a Feature' when you have a list of potential features and need to understand which ones your target audience values most. AI can help generate the feature list and analyze spending patterns."
  },
  {
    id: 12,
    name: "Discovery Survey",
    category: "Self-Reporting",
    phase: "Understand Problem Space & Market",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Surveys are great for uncovering customer jobs, pains, and gains at scale, but suffer from the inherent problem of poor self-reporting. AI can help craft better questions using customer language and analyze open-ended responses at scale.",
    descriptionShort: "A survey with mostly open-ended questions to uncover customer jobs, pains, gains, and willingness to pay at scale. AI helps craft questions and analyze responses.",
    descriptionFull: "Create the discovery survey after having performed at least 5 qualitative interviews, so you can use the language of your target customer and ask the right questions. Only send to respondents in your niche target audience.\n\nA discovery survey should mostly contain open-ended questions. Using multiple-choice limits interviewees too much at this early stage.\n\nAI-enhanced surveys:\n- Use an LLM to write survey questions using the exact language from your customer interviews. This dramatically improves response quality.\n- AI makes open-ended questions far more practical: tools like MonkeyLearn, or simply pasting responses into ChatGPT/Claude, can analyze hundreds of open-ended responses in minutes, identifying themes, sentiment, and recurring patterns.\n- AI-powered survey tools (Typeform with AI, SurveyMonkey Genius) can optimize question phrasing and predict response rates.\n- Use AI to segment and cross-tabulate responses to find patterns across customer groups.\n\nDefine upfront how many survey responses will be sufficient (considering confidence level and sample size) and assume a 10-20% response rate.\n\nDon't forget to ask respondents whether you can contact them again. Start building your bench of trusted users!",
    cost: "Depends on whether you need to offer a reward. Survey tools (Typeform, SurveyMonkey) have free tiers. LLM analysis of responses is nearly free.",
    costLevel: "Low",
    practicalApplication: "TaxFix New Markets gathers approximately 500 customer survey responses when validating new markets. Use AI to analyze open-ended responses at scale, something that was previously the biggest bottleneck of open-ended surveys."
  },
  {
    id: 13,
    name: "Storyboard",
    category: "Self-Reporting",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5, self-reporting). Storyboards help explore which value propositions resonate, but rely on customer self-reporting about hypothetical scenarios. AI image generation has made storyboard creation dramatically faster and cheaper.",
    descriptionShort: "Illustrate different value propositions on storyboards using AI-generated visuals and invite target customers to provide feedback on which resonates most.",
    descriptionFull: "This method requires input from previous exercises such as qualitative interviews or surveys. Work with an internal team (Design, Marketing, Product) to illustrate several different value propositions and scenarios on storyboards.\n\n10-15 target customers are invited to provide feedback on each storyboard. The goal is to learn about customer jobs, pains, and gains and see which value proposition resonates.\n\nAI-enhanced storyboarding:\n- AI image generation (Midjourney, DALL-E, Ideogram, Flux) can create storyboard visuals in minutes instead of hours. You no longer need a designer for this step.\n- Use an LLM to script different storyboard scenarios based on your customer interview insights.\n- Create multiple visual variations quickly to test very different value propositions.\n- AI video tools (Synthesia, HeyGen) can even turn storyboards into short animated videos for richer testing.\n\nAs with all research methods, the results become more trustworthy if you're more precise about narrowing down your target audience upfront.",
    cost: "Very low with AI. Image generation tools: free to $30/mo. Previously required designer time.",
    costLevel: "Low",
    practicalApplication: "Use AI to generate multiple storyboard variations in an afternoon instead of a week. Test wildly different value propositions visually with target customers to learn which narrative resonates strongest."
  },
  {
    id: 14,
    name: "Offline Pitching",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase, so gauging reactions is imprecise. Upside: you might walk away with real prospects. Works better for services than software products that aren't ready yet.",
    descriptionShort: "Test your elevator pitch at events where your target audience is present to gauge real-time reactions to your value proposition.",
    descriptionFull: "Test your elevator pitch by using it in the wild. Visit an occasion where your target audience is present (meetup, industry conference, retreat, interest group) and pitch your solution to prospects.\n\nThis works well when selling services, but is generally less effective for software products that aren't ready yet. In that case, bring a click dummy or prototype along to capture feedback.\n\nPitching allows you to quickly gauge whether your value proposition resonates: If people glaze over, that's a bad sign; if they ask for your business card, good news!\n\nAI can help you prepare:\n- Use an LLM to craft and iterate on your elevator pitch, testing different framings and angles.\n- Practice your pitch with an AI (ChatGPT voice mode) and get feedback on clarity, conciseness, and persuasiveness.\n- After pitching, use an LLM to analyze the feedback you received and identify patterns.\n\nThis is one method where AI cannot replace the real thing. The face-to-face reaction is the data.",
    cost: "Varies from free to several thousand (depending on conference entry costs).",
    costLevel: "Variable",
    practicalApplication: "Use an LLM to help you craft 3-4 pitch variations before the event, each emphasizing a different value proposition. Test all versions and track which one gets the strongest reactions. The face-to-face signal is irreplaceable."
  },
  {
    id: 15,
    name: "Cold Outreach (Email, Calling)",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength varies by outcome: Cold lead to warm/demo = 2, Cold lead to LOI/waitlist = 3, Cold lead to purchase = 5. AI has transformed cold outreach: hyper-personalization at scale is now possible, but so is inbox fatigue from AI-generated spam. Quality over quantity matters more than ever.",
    descriptionShort: "Reach out via email or messaging to test whether your value proposition resonates. AI enables hyper-personalization at scale, but quality over quantity is critical.",
    descriptionFull: "Reach out via phone, email or another messaging channel (e.g. LinkedIn InMail) to prospects who haven't heard of you. You can either try to convince them of your solution or ask them to participate in interviews/surveys.\n\nAI-powered cold outreach:\n- AI writing tools (ChatGPT, Claude, Jasper) can generate personalized email sequences at scale, but beware: everyone else is doing this too, causing massive inbox fatigue.\n- AI prospect research tools (Clay, Apollo, Instantly) can automatically research each prospect and personalize outreach based on their LinkedIn activity, company news, and job postings.\n- AI can analyze which email variants get the best response rates and automatically optimize.\n- Use AI to identify trigger events (funding rounds, new hires, product launches) that make prospects more receptive.\n\nCritical warning: Because AI has made it trivially easy to send mass personalized emails, recipient tolerance is at an all-time low. A 1-2% sale-conversion rate is now optimistic for generic AI-generated outreach. The bar for genuine personalization and value has gone up significantly.\n\nFor small TAMs, invest heavily in genuine personalization. Study each prospect and lead with something truly relevant to them. AI can help you research, but the outreach should feel human.\n\nFinding prospects: LinkedIn, Apollo, Clay, ZoomInfo. Use AI agents to build prospect lists based on specific criteria.",
    cost: "Low. AI prospecting tools: $50-200/mo. CRM and email tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use AI to research prospects and draft personalized outreach, but don't automate the sending blindly. The best approach: AI does the research and first draft, a human reviews and adds genuine personal touches. Track response rates by variant to learn which messaging works."
  },
  {
    id: 16,
    name: "Online/Social Media Post or Paid Ad",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "2-5",
    evidenceDetail: "Evidence strength depends on CTA: Views/shares/likes/comments = 2, Clicks = 3, Sign ups = 4, Orders = 5. Don't get bogged down by vanity metrics. Figure out what's truly relevant for your business model.",
    descriptionShort: "Articulate your value proposition in an online ad or post targeting a specific customer segment. AI dramatically speeds up ad creation and variation testing.",
    descriptionFull: "An online advertisement or post that articulates your value proposition for a targeted customer segment with a clear CTA.\n\nTypes: Organic social media posts, Paid social media campaigns, Paid online ads (SEA).\n\nAI-powered ad creation:\n- AI tools generate ad copy, headlines, and creative variations in seconds. Use ChatGPT/Claude for copy, Midjourney/DALL-E/Ideogram for visuals.\n- Meta, Google, LinkedIn, and TikTok all now offer AI-powered ad creation and optimization within their platforms.\n- AI can generate dozens of ad variations for rapid A/B testing, something that previously required a creative team.\n- Use AI to analyze competitors' ad libraries (Meta Ad Library, Google Ads Transparency Center) and identify winning patterns.\n\nStart with organic advertising to learn who resonates with your message before moving to paid. Test wildly different value propositions, tones, messages, and imagery.\n\nTop tip: Use the words your customers are using for language/market fit! AI can help you extract this language from interview transcripts and reviews.\nFor established businesses: Run ads under an alias brand to protect your main brand.\n\nThis type of experiment needs to run for several weeks or months for trustworthy results.",
    cost: "AI has dramatically reduced creative production costs. Organic posting is free. Paid campaigns: start small ($5-50/day) to test, scale what works. Monthly budget of $15-20K is common at scale.",
    costLevel: "Variable",
    practicalApplication: "Use AI to generate 10-20 ad copy and visual variations in an hour. Test them with small budgets to learn which value proposition, tone, and imagery resonates best before scaling spend."
  },
  {
    id: 17,
    name: "Landing Page",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5) for basic tracking. However, it depends heavily on your CTA. If measuring actual sales-conversion rates, evidence is very strong (5). Tracking only leads (demos, contact forms) tells you little about actual closing rate.",
    descriptionShort: "Create a landing page to validate whether your value proposition resonates. With AI coding tools, you can build and iterate on landing pages in hours, not weeks.",
    descriptionFull: "A simple landing page can help you validate whether your value proposition resonates. You'll need to drive traffic to it (organic/paid content, word of mouth, etc.).\n\nThe AI revolution in landing pages:\nThe old choice between hiring an agency (\u20AC5,000+) or struggling with no-code tools is obsolete. Today, you can:\n- Vibe code a landing page: Use AI coding assistants (Cursor, Replit Agent, v0, Bolt) to describe your landing page in plain language and have a fully functional, professional-looking page in hours.\n- Generate and iterate rapidly: Need to test a different value proposition? Describe the change and have a new variant live within minutes.\n- AI design tools (v0 by Vercel, Lovable, Bolt.new) can generate complete landing page designs from a text description.\n- AI copywriting: Use ChatGPT/Claude to write landing page copy based on your customer interview insights and the exact language customers use.\n\nFor early-stage startups targeting innovators and early adopters: They don't care about glamorous websites. They want to see your product and understand how you can help them leapfrog their competition.\n\nGetting started:\n- A value proposition to test\n- Customer pains, gains, jobs, and how your solution helps\n- A basic brand for recognizability\n- A Call To Action\n- Integrated analytics\n\nHonesty above all. Don't try to look more mature than you are. Avoid me-too claims.\n\nTop tip: Use the words your customers are using for language/market fit!",
    cost: "Near-zero with AI coding tools. Domain: \u20AC1-\u20AC15/year. AI coding assistants: free to $20/mo. No need for agencies or expensive no-code subscriptions.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to build a landing page in an afternoon. Test different value propositions by creating variant pages. The speed of iteration is the real advantage: you can test 5 different positionings in a week instead of one per month."
  },
  {
    id: 18,
    name: "A/B Testing Campaigns & Landing Pages",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). A/B tests provide statistically comparable results between variants. AI makes it vastly easier to generate and deploy variants, enabling faster experimentation cycles. Make sure not to change too many things per variant.",
    descriptionShort: "Compare two or more versions of campaigns or landing pages. AI enables generating many more variants for faster experimentation.",
    descriptionFull: "With an A/B test (split test), you compare two or more versions of a marketing campaign or landing page. You can play with different value propositions, imagery, tone of voice, brand, pricing pages, etc.\n\nEssential: Know precisely what parameter you're testing and don't change too many things per variant.\n\nAI-enhanced A/B testing:\n- AI can generate dozens of copy and design variants in minutes, removing the creative bottleneck from A/B testing.\n- Platforms like Meta and Google now use AI to automatically optimize ad delivery across variants (Advantage+ campaigns, Performance Max).\n- AI-powered tools (Mutiny, Intellimize) can dynamically personalize landing pages per visitor segment.\n- Use AI to analyze test results and identify statistically significant winners faster.\n- AI coding tools make it trivial to create landing page variants: describe the change and deploy.\n\nIn early stages, test wildly differing value propositions to learn quickly. The speed advantage of AI means you can run more experiments per unit of time.\n\nCase study: Bloomberg used A/B testing for Facebook ads. The ad showing the sales price alongside the original price with strikethrough reduced cost per subscription conversion by 50%.",
    cost: "Most platforms have built-in A/B testing. AI variant generation is nearly free. Landing page variants can be created in minutes with AI coding tools.",
    costLevel: "Low",
    practicalApplication: "Use AI to generate 5-10x more variants than you could manually. The speed of AI-generated variants means you can complete in one week what used to take a quarter of experimentation."
  },
  {
    id: 19,
    name: "Web Traffic Analysis",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Web traffic analysis shows aggregate user behavior but doesn't tell you about individual motivations. AI analytics tools can now surface insights automatically that previously required a data analyst. Cookie consent and ad blockers limit tracking coverage.",
    descriptionShort: "Track website users' behavior to identify patterns and friction. AI analytics tools now surface actionable insights automatically.",
    descriptionFull: "Track your website users' behavior to identify patterns and friction.\n\nGoogle Analytics (free) shows:\n- Website traffic per source, device, new vs. recurring\n- Visitor engagement, top navigation flows, top pages, bounce rates\n\nAI-enhanced web analytics:\n- GA4 now includes AI-powered insights that automatically surface anomalies and trends.\n- Microsoft Clarity (free) uses AI to identify rage clicks, dead clicks, and scroll patterns.\n- Tools like Heap and PostHog use AI to auto-capture events and suggest which metrics matter.\n- AI chatbot interfaces (built into many analytics tools) let you ask questions about your data in natural language instead of building reports.\n- Session recording tools with AI analysis (Hotjar, FullStory) automatically flag problematic user sessions.\n\nFor advanced tracking (funnel reports, heatmaps): Hotjar, Crazy Egg, Amplitude, Mixpanel.\n\nNote: Cookie consent banners and ad blockers mean many visitors can't be tracked. Privacy-first tools (Fathom, Plausible, PostHog) don't require cookie consent.\n\nThe run-time of these experiments is relatively long because you need to collect enough data over time.",
    cost: "Free for basic tracking (GA4, Microsoft Clarity). Advanced AI-powered tools: $30-200/mo depending on traffic volume.",
    costLevel: "Variable",
    practicalApplication: "Set up Microsoft Clarity (free, AI-powered) from day one alongside Google Analytics. The AI will automatically surface your biggest UX problems without you needing to dig through dashboards."
  },
  {
    id: 20,
    name: "Crowdfunding",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Crowdfunding gives strong evidence that people believe in your idea and want it to exist, but it doesn't necessarily tell you whether there will be buyers at market price.",
    descriptionShort: "Raise a small amount of money via platforms like Kickstarter to validate interest in your idea while funding early development.",
    descriptionFull: "Raise a small amount of money to get your idea off the ground, for example via Kickstarter. This gives strong evidence that people believe in your idea.\n\nGetting started:\n- Define your funding goal\n- Choose a crowdfunding platform\n- Create a high-quality video about your target audience, their pains/gains/jobs, and your solution\n- Drive traffic to your pledge (paid/organic ads, forums, email, word of mouth)\n\nAI-enhanced crowdfunding:\n- AI video tools (Synthesia, HeyGen, Runway, Sora) can create professional campaign videos without a studio, at a fraction of the cost.\n- Use AI to write compelling campaign copy and reward tier descriptions.\n- AI image generation can create product mockups and lifestyle shots without physical prototypes.\n- Use AI to analyze successful campaigns in your category and identify what worked.\n\nDo's:\n- Account for platform commission fees\n- Refund contributors if you don't meet your goal\n- Be transparent about how you'll use funds\n\nDon'ts:\n- Don't raise more than you need\n- Don't make unrealistic claims",
    cost: "Platform commission fees plus traffic costs. AI has dramatically reduced video and visual production costs (previously \u20AC1000+ for video, now near-zero with AI tools).",
    costLevel: "Medium",
    practicalApplication: "Use AI video tools to create a professional campaign video in a day instead of spending weeks and thousands of euros. Use AI image generation for product mockups and lifestyle visuals."
  },
  {
    id: 21,
    name: "Video",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Videos work at scale and demonstrate your product visually, but engagement metrics are relatively weak signals of actual purchase intent. AI has made video production dramatically cheaper and faster.",
    descriptionShort: "Create a short video explaining your product idea and value proposition. AI video tools have made production nearly free and instant.",
    descriptionFull: "A short video explaining your product idea and value proposition in a crisp, compelling way.\n\nPointers:\n- Address your ideal customer profile\n- Introduce the pain/problem\n- Illustrate the gain or pain reduction\n- Include a Call To Action\n\nAI video revolution:\n- AI avatar tools (Synthesia, HeyGen) create professional talking-head videos without filming. Choose an AI avatar, write a script, and generate a video in minutes.\n- Screen recording + AI (Loom, Tella) adds automatic editing, captions, and polish.\n- AI video editing (Descript, Runway, CapCut) makes post-production accessible to anyone. Edit video by editing text.\n- AI can generate b-roll footage, animations, and product demos.\n- Text-to-video tools (Runway Gen-3, Sora) can create visual sequences from text descriptions.\n- AI auto-generates captions and translations, making your video accessible to international audiences.\n\nThe choice between 'traditional' (animated) and 'new' (founder-led, demo-focused) videos still depends on your audience. Techies appreciate quick product demos; industry professionals may expect polish.\n\nAnalyze: Likes, shares, comments, open rates, click-through rates, feedback.\n\nCase study: Dropbox went to market without a product. Their introductory video generated 70,000+ email sign-ups.",
    cost: "Near-zero with AI. Synthesia/HeyGen: free to $30/mo. Loom: free. Previously, professional video required \u20AC1,000+ minimum.",
    costLevel: "Low",
    practicalApplication: "Create a professional product explainer video in one afternoon using AI avatar tools or screen recording with AI editing. No studio, no videographer, no post-production team needed. Test multiple versions with different messaging."
  },
  {
    id: 22,
    name: "Resource Download",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 1,
    evidenceDetail: "Evidence strength is low (1 out of 5). You're far from an actual purchase. If leads provide their email, evidence is slightly higher. AI has made content creation easier, but it's also made it harder to stand out because everyone can produce content now. Quality and originality matter more than ever.",
    descriptionShort: "Create and publish resources (white papers, studies, frameworks) to generate leads and validate problem awareness. AI speeds up creation but raises the bar for originality.",
    descriptionFull: "Creating resources such as white papers, studies, and frameworks is an effective way to generate leads and validate whether your prospects 'feel the problem' or are interested in your value proposition.\n\nAI and the content quality paradox:\nAI has made content creation dramatically easier, but this has also flooded the market with generic content. The bar for standing out has risen significantly:\n- Everyone can now produce 'good enough' content with AI. You need to be significantly better.\n- AI-generated content without original insights, data, or perspectives will be ignored.\n- The winning strategy: Use AI for research, structure, and drafting, but add original analysis, proprietary data, unique perspectives, and expert quotes that AI cannot generate.\n- Use AI to create professional visuals (charts, infographics, diagrams) that make your content more shareable.\n\nQuality is king, and the bar has risen:\nYou can only stand out by writing specifically for a niche target audience with genuine, original insights. Generic AI-generated content will not differentiate you.\n\nDriving people to your content: Use methods #14-16 to distribute.\n\nCase study: Datawallet invested in a study investigating 50 prominent brands for their DSR handling practices, offered via LinkedIn campaigns alongside free assessments.",
    cost: "Content creation time has dropped dramatically with AI assistance. The human effort is now in original research and analysis rather than writing.",
    costLevel: "Low",
    practicalApplication: "Use AI to draft and structure your content quickly, but invest your time in original research, proprietary data, and unique perspectives. The combination of AI efficiency + human originality is the sweet spot for content that generates leads."
  },
  {
    id: 23,
    name: "Email Series / Newsletter",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Email engagement metrics show interest but are relatively weak signals of purchase intent. AI has made newsletters easier to create but also increased competition. Authentic voice and original insights are key differentiators.",
    descriptionShort: "Feed content and build trust with prospects through email series or newsletters. AI helps with writing and personalization, but authentic voice wins.",
    descriptionFull: "An email series (drip campaign) or newsletter is a great way to feed content and build trust over time. Identify a topic interesting to your target audience.\n\nAI-enhanced email/newsletter creation:\n- AI writing assistants (ChatGPT, Claude, Jasper) can draft email content, subject lines, and CTAs quickly.\n- AI-powered email tools (Beehiiv, ConvertKit, Mailchimp) offer built-in AI for subject line optimization, send time optimization, and content suggestions.\n- AI can personalize email content at scale based on subscriber segments.\n- A/B test subject lines and content variations effortlessly by generating multiple versions with AI.\n\nThe AI paradox for newsletters:\nBecause AI makes it easy for anyone to start a newsletter, the market is more crowded than ever. The newsletters that thrive are those with:\n- An authentic, distinctive voice (which AI can support but not replace)\n- Original insights and analysis (not just AI-rewritten summaries)\n- Genuine expertise in a specific niche\n- Strong point of view\n\nMeasure performance: Open rates, Read rates, Replies, Clicks, Unsubscribes.\n\nSubscribers come from: Social media, forums, website sign-up, blog, word of mouth.\n\nCase study: Product Hunt started as a 20-minute email experiment by Ryan Hoover. Within two weeks: 200 subscribers and 30 well-respected contributors. Eventually acquired by AngelList for $20M.",
    cost: "Email tools have generous free tiers: Beehiiv, ConvertKit, Mailchimp, Sendgrid. AI writing: free to $20/mo.",
    costLevel: "Low",
    practicalApplication: "Use AI to draft your newsletter content, but add your own analysis, opinions, and unique perspectives. The newsletters winning today combine AI efficiency with human authenticity and expertise."
  },
  {
    id: 24,
    name: "Letter of Intent (LOI)",
    category: "Self-Reporting",
    phase: "Test Value Proposition",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is low (2 out of 5). LOIs are non-binding documents. It's not uncommon for potential partners or clients to back away from promises made. In the current market, investors prefer to see binding purchases.",
    descriptionShort: "Use a short, non-binding written contract to gauge serious interest, especially for products that are expensive or complex to build.",
    descriptionFull: "A short, written contract that isn't legally binding. Ensure your LOI restates your value proposition to increase signing rates.\n\nLOIs are suitable when it's very difficult, time-consuming, or expensive to create an MVP (e.g. complex hardware products).\n\nAI-enhanced LOI creation:\n- Use an LLM to draft LOIs using language that resonates with your target audience (based on interview insights).\n- AI can help you create multiple LOI versions targeting different customer segments.\n- Use AI to analyze which LOI framings get the highest sign rates.\n\nNote: With AI coding tools making it faster than ever to build software MVPs, LOIs are less necessary for software products than they used to be. If you can build a working prototype in days instead of months, do that instead of collecting LOIs. LOIs remain valuable for complex hardware, physical products, or high-investment services.\n\nCase study: Thrive Smart Systems (wireless smart irrigation) sent LOIs after verbal feedback was overwhelmingly positive. When asked to write things down, the number was slashed by 80%. However, they predicted \u20AC50,000 in forecasted revenue.",
    cost: "Low. Only requires time to create and distribute.",
    costLevel: "Low",
    practicalApplication: "LOIs are most valuable for products that can't be prototyped quickly. For software products, consider using AI to build a working prototype instead, as this provides much stronger evidence than a non-binding document."
  },
  {
    id: 25,
    name: "Presale or Waitlist (Fake Door)",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: "4-5",
    evidenceDetail: "Evidence strength is high. Waitlist sign-up = 3, Presale without payment = 4, Presale with payment = 5. Tread lightly: it's easy to disappoint prospects if they expected a ready product. Be transparent.",
    descriptionShort: "Direct interested customers to a waitlist or pre-sale page to measure strong purchase intent. AI coding tools let you build these in hours.",
    descriptionFull: "Instead of directing interested customers to your product, send them to a waitlist or pre-sale page.\n\nWaitlist: Notify/early bird access when MVP is live (suitable for SaaS).\nPre-sale: Pre-order a physical product to be shipped when ready (e-commerce).\n\nThis delivers strong results because customers show very strong interest, especially with presales involving payment.\n\nAI-era approach:\n- Use AI coding tools (Replit Agent, Cursor, v0, Bolt) to build a professional waitlist landing page in hours. No need for no-code tools or agencies.\n- AI can generate compelling waitlist page copy based on your customer insights.\n- Payment integration is straightforward: Stripe checkout can be set up quickly with AI assistance.\n- Use AI to create email nurture sequences for waitlisted users automatically.\n\nMitigate disappointment by being transparent. Explain your commitment to creating a product customers will love. Involve early-bird customers in co-creation.\n\nCase studies: Buffer validated demand and pricing tiers through a waitlist. Galileo.ai generated massive excitement through their waitlist.",
    cost: "Near-zero with AI coding tools. Domain + hosting costs only. Previously required no-code tool subscriptions or agency fees.",
    costLevel: "Low",
    practicalApplication: "Build a professional waitlist page in an afternoon with AI coding tools. Buffer learned both that demand existed AND which pricing tier was most popular. The speed of AI means you can have a waitlist live within hours of formulating your hypothesis."
  },
  {
    id: 26,
    name: "Redirect to Third-Party Seller",
    category: "Real-World Test",
    phase: "Test Value Proposition",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). This method measures actual purchase conversion without building anything. The downside is losing the sale to a competitor, but you gain very strong test results about purchase intent.",
    descriptionShort: "Direct your prospects to an existing similar product on a third-party platform to measure actual purchase conversion without building anything.",
    descriptionFull: "If you're creating a product similar to an existing one, you can direct prospects (from your ads, social media, cold outreach) to a third-party seller.\n\nThe downside: You lose the sale to a competitor.\nThe upside: Extremely lightweight method to test purchase conversion. No need to build anything.\n\nAI-era consideration:\nWith AI coding tools making it faster and cheaper than ever to build MVPs, the calculus has shifted. If you can build a basic working version of your product in days (using AI), it may be worth capturing the sale yourself instead of redirecting to competitors. However, this method remains valuable when:\n- Your product requires physical manufacturing or complex logistics\n- You need to validate demand before any development investment\n- The product category is well-established and similar offerings exist\n\nCase study: An early-stage entrepreneur wanting to organize yoga retreats in Italy was convinced to test demand by sending customers to similar AirBnB properties first.",
    cost: "Free (apart from the cost of a 'lost' sale and customer acquisition channel costs).",
    costLevel: "Free",
    practicalApplication: "Consider whether AI tools can help you build a basic version of your product faster than redirecting to competitors. If building is feasible, capture the sale yourself. If not (physical products, complex logistics), redirect remains a powerful validation method."
  },
  {
    id: 27,
    name: "Prototype (Low to High Fidelity)",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: "2-4",
    evidenceDetail: "Evidence strength varies by fidelity: Clickable prototype = 2, Coded prototype = 4. AI has dramatically compressed the time from idea to coded prototype. What used to take weeks now takes hours to days. This makes higher-fidelity testing accessible earlier in the process.",
    descriptionShort: "Create a prototype ranging from AI-generated designs to fully coded interactive experiences. AI has collapsed the prototype-to-product timeline from weeks to hours.",
    descriptionFull: "Prototypes range from low to high fidelity. AI has fundamentally changed the economics of prototyping.\n\nThe AI prototyping revolution:\n- AI design tools (v0, Galileo.ai, Uizard) generate complete UI designs from text descriptions in seconds.\n- AI coding tools (Replit Agent, Cursor, Bolt, Lovable) can turn designs into working, interactive prototypes in hours, not weeks.\n- The distinction between 'click prototype' and 'coded prototype' is collapsing. With AI, you can go straight to a coded, interactive prototype for the same effort that a click dummy used to require.\n- AI can generate multiple design variations for rapid testing.\n\nThis means you should aim higher:\n- Skip low-fidelity click dummies and go straight to interactive coded prototypes when possible.\n- Use AI to create the prototype, then spend your time on user testing, not building.\n- Create multiple prototype variants to test different approaches simultaneously.\n\nGetting started:\n- Determine goals & target audience\n- Describe what you want to the AI tool\n- Iterate based on feedback (AI makes iteration nearly instant)\n- Schedule experiments with 10-15 target customers\n- Have participants narrate their thought processes\n- Use AI transcription to capture every detail of testing sessions\n\nAnalyze: What delighted customers? What caused friction? Where did they get stuck?",
    cost: "Dramatically reduced by AI. v0/Bolt: free to $20/mo. Replit: free to $25/mo. Figma: free tier. What used to cost thousands in designer + developer time now costs hours of your own time.",
    costLevel: "Low",
    practicalApplication: "Use AI to build a coded, interactive prototype in a day. Spend your time testing with users, not building. The speed of AI means you can test 3-4 prototype variants in the time it used to take to build one."
  },
  {
    id: 28,
    name: "MVP (Minimum Viable Product)",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: "3-5",
    evidenceDetail: "Evidence strength varies: Single feature MVP = 3, End-to-end customer journey MVP = 5. AI has redefined 'minimum viable': what used to take months to build can now be vibe-coded in days. This means the bar for 'minimum' has dropped, while 'viable' can be achieved faster.",
    descriptionShort: "Build the smallest version of your product to validate your riskiest assumption. AI coding tools have compressed MVP timelines from months to days.",
    descriptionFull: "Eric Ries defines an MVP as 'the version of a new product that allows a team to collect the maximum amount of validated learning about customers with the least effort.'\n\nAI has redefined the MVP:\n- Vibe coding (using AI coding assistants like Replit Agent, Cursor, Bolt, Lovable) lets you describe your product in natural language and get a working application in hours to days.\n- The 'no-code vs. code' debate is becoming irrelevant. AI-assisted coding is often faster than no-code tools and produces more flexible, scalable results.\n- You can build end-to-end customer journeys in days that previously required weeks or months of development.\n- AI handles boilerplate (auth, payments, databases, email) that used to consume most of the MVP development time.\n\nWhat this means for your approach:\n- The 'minimum' in MVP has gotten much smaller. You can test more specific hypotheses with less investment.\n- You can build and throw away multiple MVPs in the time it used to take to build one. Experimentation is now cheap.\n- Don't over-invest in any single MVP. Build it fast, test it, learn, iterate or pivot.\n\nWhat an MVP is NOT:\n- A fully formed product\n- Something customers will choose over established competitors\n- Not necessarily the foundation for the 'real' product\n\nCase studies: Groupon started with a WordPress site and PDF vouchers. Spotify's MVP focused solely on streaming in a closed beta. Today, either could be built in a weekend with AI tools.",
    cost: "Dramatically reduced by AI coding tools. A functional MVP that would have cost $10,000-50,000 in development can now be built in days for near-zero marginal cost. Your main investment is time and thought.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to build your MVP in days, not months. The key insight: because building is now cheap, spend more of your time on customer discovery and testing, and less on agonizing over what to build. Build, test, learn, repeat rapidly."
  },
  {
    id: 29,
    name: "Co-creation",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). Co-creation combines customer feedback with real-world user behavior on an actual product. AI makes it faster to iterate on feedback, shrinking the co-creation cycle from months to weeks.",
    descriptionShort: "Release a beta version to a curated group of friendly users who provide constructive feedback. AI enables faster iteration on their input.",
    descriptionFull: "Co-creation mixes customer feedback on your MVP with real-world user behavior. If your product lends itself to co-creation, it's strongly recommended.\n\nRelease to a select group of friendly users who commit to providing constructive feedback. Take in all feedback, but don't immediately build everything co-creators ask for.\n\nAI-enhanced co-creation:\n- AI coding tools let you implement feedback and ship updates in hours instead of weeks, dramatically tightening the feedback loop.\n- Use AI to analyze feedback from multiple co-creators: identify patterns, contradictions, and the most requested changes.\n- AI-powered analytics (Hotjar, Clarity) can automatically surface how co-creators are actually using the product vs. what they say.\n- Use AI to prioritize feedback based on frequency, impact, and alignment with your core value proposition.\n- AI transcription tools capture co-creation session insights automatically.\n\nCritical: Select the right users who fit your narrow target audience. Be brave enough to say no to poor-fit prospects.\n\nGetting ready:\n- Build/create beta version (AI makes this much faster)\n- Identify target audience and channels\n- Define rewards (discounted rate, extra features, newsletter shoutout)\n- Outline process to capture and prioritize feedback\n\nCase studies: Pickyourself.com ran 30 beta users through co-creation, seeing 8x industry standard sign-up rates at launch. Braintrust leverages their community to even build parts of the product.",
    cost: "Combined costs of beta creation (much lower with AI) plus co-creator incentives. The faster iteration cycle means less total time investment.",
    costLevel: "Medium",
    practicalApplication: "AI has made co-creation dramatically more powerful by shrinking the iteration cycle. When a co-creator gives feedback on Monday, you can ship the improvement by Tuesday. This rapid responsiveness builds trust and generates enthusiasm."
  },
  {
    id: 30,
    name: "Concierge",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). You can handle the entire flow from start to value proof. Customer satisfaction feedback is provided after delivering on your value proposition. AI can now automate portions of the concierge process that were previously fully manual.",
    descriptionShort: "Create and deliver the customer experience manually, with the customer aware of the human involvement. AI can partially automate backend processes.",
    descriptionFull: "Create and deliver a customer experience manually. Unlike Wizard of Oz, the customer is aware of the humans involved.\n\nStandalone: Everything done manually from sign-up to fulfillment.\nCombined with MVP: Digital interface for sign-up, then manual matching/delivery.\n\nAI-enhanced concierge:\n- AI can handle parts of the concierge process that used to be fully manual: automated email responses, AI chatbot for initial triage, AI-assisted matching.\n- The line between concierge and automated product is blurring. You can start with AI handling 20% and gradually increase automation as you validate.\n- Use AI to analyze concierge interactions and identify which parts can be automated first.\n- AI CRM tools (HubSpot with AI, Clay) can automate follow-ups and lead nurturing.\n\nThe concierge approach remains valuable because:\n- It lets you learn before you automate\n- You understand edge cases before writing code for them\n- Customer feedback is provided after real value delivery\n\nCase study: AirBnB started by targeting conference guests, inviting them to stay on founders' couches. They manually recruited hosts and hired photographers before automating.",
    cost: "AI can reduce the manual effort significantly. Backend automation with AI tools is increasingly affordable. However, the human touch remains essential in early stages.",
    costLevel: "Medium",
    practicalApplication: "Start with a fully manual concierge, then gradually replace manual steps with AI automation as you validate each part of the process. Use AI analytics to identify which manual steps can be automated first without losing quality."
  },
  {
    id: 31,
    name: "Wizard of Oz",
    category: "Watch User with Artefact",
    phase: "Early Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5). The customer believes they're using an automated product, giving you the most realistic feedback possible. AI has blurred the line between Wizard of Oz and real product: AI can handle much of what used to require human 'wizards.'",
    descriptionShort: "Present an automated-looking interface while delivering manually behind the scenes. AI can now serve as the 'wizard,' handling much of the manual work.",
    descriptionFull: "Wizard of Oz delivers a customer experience manually using human effort instead of software. Unlike concierge, customers don't see the people involved.\n\nCombines a digital, customer-facing interface with human-delivered backend processes.\n\nAI as the wizard:\nThe Wizard of Oz method has been transformed by AI. In many cases, AI can now serve as the 'wizard' behind the curtain:\n- Use AI chatbots as the customer-facing interface, with humans reviewing and correcting the most important decisions.\n- AI can handle matching, recommendations, and content generation that used to require human effort.\n- The 'wizard' can be an AI agent that handles 80% of cases automatically, with humans stepping in for complex edge cases.\n- This 'AI-assisted Wizard of Oz' approach lets you validate faster and cheaper than ever.\n\nThe key insight: Instead of choosing between 'fully manual' and 'fully automated,' use AI to create a spectrum. Start with AI handling the easy cases and humans handling the hard ones, then gradually expand AI coverage.\n\nGet started:\n- Build a customer-facing interface (AI coding tools make this fast)\n- Set up AI to handle the most common backend processes\n- Have humans monitor and handle edge cases\n- Track which cases AI handles well and which require human intervention",
    cost: "Significantly reduced by AI. The 'human wizard' cost is lower because AI handles routine cases. Combine AI tools with human oversight for the best balance.",
    costLevel: "Low",
    practicalApplication: "Use AI as your 'wizard' for routine cases while humans handle edge cases. This lets you validate the full customer experience at a fraction of the traditional Wizard of Oz cost. Gradually replace human oversight with AI as you learn which decisions can be safely automated."
  },
  {
    id: 32,
    name: "Customer Service/Success Feedback",
    category: "Team Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). CS teams have real-world information and can back up claims with data. However, customers inherently share more negative feedback, skewing results. AI can now analyze CS conversations at scale to surface patterns.",
    descriptionShort: "Learn from your CS team about customer needs through calls, tickets, and interviews. AI can analyze conversations at scale to surface patterns automatically.",
    descriptionFull: "Talk to your CS team, listen in on calls, or read call transcripts & tickets. The aim is to learn about the jobs, pains, and gains of your customers.\n\nAI-powered CS analysis:\n- AI tools (Anecdote, Dovetail, MonkeyLearn, Enterpret) can automatically analyze thousands of CS tickets and calls, identifying recurring themes, sentiment trends, and feature requests.\n- AI transcription (Otter.ai, Fireflies.ai) converts calls into searchable text, making it trivial to search across all customer interactions.\n- LLMs can summarize weeks of CS conversations into actionable insights in minutes.\n- AI-powered tagging automatically categorizes tickets by theme, urgency, and product area.\n- Real-time AI dashboards can surface emerging issues before they become widespread.\n\nApproaches:\n1. Set up continuous feedback: Use AI-powered tagging in your CRM so product teams are automatically notified of relevant tickets.\n2. Analyze pre-recorded calls: Use AI transcription and analysis to process historical conversations at scale.\n3. Interviews with CS agents: AI can help prepare questions and analyze themes across multiple agent interviews.\n\nDon't implement every feature request. This is the starting point for experimentation. Validate and prioritize.",
    cost: "Low. AI analysis tools range from free to $100/mo. Much cheaper than manually analyzing hundreds of tickets.",
    costLevel: "Low",
    practicalApplication: "Set up AI-powered ticket analysis to automatically surface the top 10 recurring customer pain points each week. Use an LLM to summarize CS conversations into a weekly 'voice of customer' report for the product team."
  },
  {
    id: 33,
    name: "Sales Force Feedback",
    category: "Team Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Sales teams have real-world information and can back up claims with data. AI conversation intelligence tools can now capture and analyze sales calls automatically.",
    descriptionShort: "Learn from your Sales team about customer needs, near misses, and competitive landscape. AI conversation intelligence captures insights automatically.",
    descriptionFull: "Learn from your sales team about customer jobs, pains, gains, and how well your product meets their needs.\n\nAI-powered sales intelligence:\n- Conversation intelligence tools (Gong, Chorus, Clari) use AI to automatically record, transcribe, and analyze every sales call, surfacing competitive mentions, objections, feature requests, and buying signals.\n- AI can identify which talk tracks, objections handling, and value propositions correlate with won deals vs. lost deals.\n- LLMs can analyze CRM notes and call transcripts to identify patterns in near-misses.\n- AI can automatically flag competitive intelligence and price sensitivity from sales conversations.\n\nApproaches:\n1. Continuous feedback: AI conversation intelligence runs in the background, capturing everything.\n2. Structured analysis: Use AI to analyze call recordings and identify the top reasons for lost deals, most common objections, and most requested features.\n\nLook for:\n- Near misses: What prevented sales from occurring?\n- Feature requests\n- Who you're being compared to (competitive landscape)\n- Better understanding of your Ideal Customer Profile\n\nDon't implement every feature request. This is the starting point for experimentation.",
    cost: "Conversation intelligence tools: $50-150/user/mo for enterprise tools (Gong, Chorus). LLM analysis of existing call recordings can be done for minimal cost.",
    costLevel: "Variable",
    practicalApplication: "If you have a sales team, AI conversation intelligence tools are among the highest-ROI investments. They capture every competitive mention, objection, and feature request automatically, turning your sales conversations into a product discovery goldmine."
  },
  {
    id: 34,
    name: "Customer Advisory Board",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Decreased by reliance on self-reporting and small group size. Increased by the fact that feedback is given on a concrete, existing product. AI can help analyze and act on advisory board feedback faster.",
    descriptionShort: "Maintain a group of friendly customers who provide regular feedback. AI helps analyze feedback patterns and accelerate follow-up.",
    descriptionFull: "A group of friendly customers who speak to you regularly is extremely valuable. They can provide feedback on website copy, marketing materials, or product features, and keep you informed of their pains, gains, and new solutions in the market.\n\nAI-enhanced advisory boards:\n- Use AI transcription and analysis tools to capture every insight from advisory board meetings.\n- Feed all meeting transcripts into an LLM to identify recurring themes, track how feedback evolves over time, and flag contradictions.\n- AI can help you prepare more targeted questions for each meeting based on previous feedback and product analytics.\n- Use AI to automatically generate follow-up summaries and action items after each meeting.\n- AI-powered session recording (Grain, Fathom) clips and organizes key moments from advisory meetings.\n\nGetting ready:\n- Ask loyal customers to join with fitting incentives (website mention, newsletter shoutout, podcast invite, monetary incentive)\n- Decide what you want to learn & format\n- Set up tooling for capturing feedback\n- For product feedback: Have customers narrate their thought process while using it\n\nCase studies: Adobe shapes product strategy with global Customer Advisory Boards. Dell's Advisory Board helped beta test new solutions.",
    cost: "Depends on whether you need to incentivize members. AI meeting analysis tools: free to $30/mo.",
    costLevel: "Low",
    practicalApplication: "Use AI to turn advisory board meetings into structured insights automatically. Track feedback themes over time to identify trends. The combination of human relationships + AI analysis makes advisory boards more actionable than ever."
  },
  {
    id: 35,
    name: "PMF Audit (Sean Ellis Test)",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). The Sean Ellis test provides a specific, actionable benchmark (40% 'very disappointed' = PMF). Results can be reliable with as few as 40 respondents. AI can help with segmentation and analysis of results.",
    descriptionShort: "Survey existing customers with the key question: 'How disappointed would you be if you could no longer use this product?' AI helps with segmentation and analysis.",
    descriptionFull: "A survey for existing customers who recently used your product, including the key question: 'How disappointed would you be if you could no longer use this product? Very disappointed, somewhat disappointed, or not disappointed.'\n\nAccording to Sean Ellis, a 40% 'very disappointed' rate is a strong indicator of product/market fit. Most startups don't achieve this. However, you can segment answers to identify which customer cohort would be most disappointed.\n\nResults can be reliable with as few as 40 respondents.\n\nAI-enhanced PMF analysis:\n- Use AI to automatically segment survey responses by customer attributes (company size, use case, acquisition channel, etc.) and find your most loyal cohort.\n- LLMs can analyze open-ended follow-up questions to identify what makes your 'very disappointed' segment different from others.\n- AI can help you apply Julie Supan's 'High Expectation Customer' framework by analyzing behavioral and demographic patterns.\n- Use AI to generate actionable recommendations based on the gap between your 'very disappointed' and 'somewhat disappointed' segments.\n\nGood additional questions:\n- 'Who would you recommend this product to?' (identify target audience)\n- 'How can we improve this product?' (identify new features)\n- 'What's the main benefit you get?' (identify core value)\n\nCase study: Superhuman's CEO found only 22% 'very disappointed,' but segmented to find their ideal persona: 'founders, managers, executives, and business development.'",
    cost: "Low. Survey tools (Typeform, Google Forms) are free. AI analysis adds minimal cost.",
    costLevel: "Low",
    practicalApplication: "Run the Sean Ellis test, then use AI to segment results and find your ideal customer persona. Feed the open-ended responses into an LLM to understand what makes your happiest customers different and how to attract more of them."
  },
  {
    id: 36,
    name: "Surveys (In-App & Email)",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). Stronger than pre-launch surveys because you're addressing real customers about a concrete product. AI makes open-ended question analysis practical at scale.",
    descriptionShort: "Present short questionnaires to existing customers in the app or via email. AI makes analyzing open-ended responses at scale practical and fast.",
    descriptionFull: "Short questionnaires for existing customers aimed at learning specific things. Present in-app or via email. Should be combined with data analytics (#38) to find the 'why' behind customer behavior.\n\nAI-enhanced surveys:\n- AI makes open-ended questions far more practical at scale. Paste hundreds of responses into an LLM and get thematic analysis in minutes.\n- AI-powered survey tools (Sprig, Refiner) can trigger contextual micro-surveys based on user behavior in real-time.\n- AI can identify optimal survey timing based on user engagement patterns.\n- Natural language analysis tools can automatically categorize sentiment and extract actionable insights from free-text responses.\n- AI can generate personalized follow-up questions based on previous answers.\n\nIn-app surveys:\n- Keep short (max two questions), use open-ended questions\n- Present when user seems confused ('What's holding you back?')\n- Present after key actions ('What almost stopped you?')\n\nEmail surveys:\n- Discovery survey for active customers\n- PMF audit\n- Ask customers to rank roadmap features\n\nCase study: GitHub sent customers email surveys with roadmap features to rank, increasing user participation and loyalty.",
    cost: "In-app survey tools: $50-200/mo. Email surveys: free tools available. AI analysis of responses: minimal cost.",
    costLevel: "Variable",
    practicalApplication: "Use AI-powered contextual surveys (Sprig, Refiner) to ask the right question at the right moment. Then use AI to analyze open-ended responses at scale, something that was the biggest bottleneck of qualitative surveys."
  },
  {
    id: 37,
    name: "Scrape Review Sites / App Store Reviews",
    category: "Customer Feedback",
    phase: "Mature Product",
    evidenceStrength: 2,
    evidenceDetail: "Evidence strength is moderate-low (2 out of 5). Reviews provide real customer opinions but tend to be polarized. AI makes large-scale review analysis practical and can surface nuanced patterns that manual reading would miss.",
    descriptionShort: "Monitor and analyze what customers say about you on review sites and app stores. AI enables sentiment analysis and pattern detection at scale.",
    descriptionFull: "Just as you can scrape review sites of competitors pre-launch, it's advisable to keep abreast of what your current and churned customers are saying about your company and product.\n\nAI-powered review analysis:\n- AI scraping and analysis tools (Browse AI, Apify + LLM analysis) can automatically collect and analyze reviews from multiple platforms.\n- LLMs can perform nuanced sentiment analysis beyond simple positive/negative, identifying specific pain points, feature requests, and competitive comparisons.\n- Tools like Anecdote and Enterpret centralize all customer feedback (reviews, CS tickets, surveys) and use AI to surface trends.\n- AI can monitor review sites continuously and alert you to emerging themes or sentiment shifts.\n- Use AI to compare your reviews against competitors' reviews to identify your relative strengths and weaknesses.\n\nKey approach:\n1. Set up automated scraping for your key review platforms\n2. Feed reviews into an LLM monthly for trend analysis\n3. Compare sentiment over time to detect improvements or regressions\n4. Cross-reference review themes with your product roadmap",
    cost: "Scraping tools: free to $50/mo. AI analysis: minimal cost. Dedicated feedback platforms (Anecdote, Enterpret): $100-500/mo.",
    costLevel: "Low",
    practicalApplication: "Set up automated review monitoring with AI analysis. Feed all reviews into an LLM monthly to identify trends, competitive mentions, and feature requests. The combination of automated scraping + AI analysis turns review monitoring from a manual chore into an automated insight engine."
  },
  {
    id: 38,
    name: "Data Analytics",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 5,
    evidenceDetail: "Evidence strength is very high (5 out of 5) because it shows how users actually behave. AI analytics tools can now surface insights automatically that previously required a dedicated data analyst. Data shows 'how,' not 'why' - combine with other methods.",
    descriptionShort: "Measure and analyze how customers use your product. AI analytics tools automatically surface insights, anomalies, and optimization opportunities.",
    descriptionFull: "Every business must measure how customers use what they build. Without it, you're flying blind. Strong data analytics is the cornerstone of experimentation.\n\nAI-powered analytics revolution:\n- AI-powered tools (Amplitude, Mixpanel, PostHog, Heap) can automatically surface insights, anomalies, and trends without you building reports.\n- Natural language query: Ask questions about your data in plain English instead of writing SQL or building dashboards.\n- AI can automatically identify which user behaviors correlate with retention, conversion, and churn.\n- Predictive analytics: AI can predict which users are likely to churn, convert, or become power users, enabling proactive intervention.\n- Session replay with AI analysis (FullStory, Microsoft Clarity) automatically flags problematic user sessions.\n- AI can run automated funnel analysis and suggest optimization priorities.\n\nKey reports:\n- Conversion rates for end-to-end journey\n- Funnel reports showing actions and drop-offs\n- Heat maps showing click and scroll patterns\n- Cohort analysis (by acquisition source, period, persona)\n\nFor New Users: Get them to core value as quickly as possible. AI can identify the optimal onboarding path by analyzing which steps correlate with long-term retention.\n\nBest users: Your blueprint for what you want others to become. AI can identify the behaviors that distinguish power users from churned users.\n\nCase study: AirBnB conducts ~700 growth experiments weekly. They discovered users from Asian countries were leaving quickly, adapted the experience, and saw 10% conversion increase.",
    cost: "Microsoft Clarity: free. PostHog: generous free tier. Amplitude/Mixpanel: free tiers, then $50-1000/mo. Previously required hiring a data analyst ($80-150K/year).",
    costLevel: "Variable",
    practicalApplication: "AI analytics tools have democratized data analysis. You no longer need a dedicated data analyst to get actionable insights. Start with free tools (Clarity, PostHog) and let AI surface your biggest opportunities and problems automatically."
  },
  {
    id: 39,
    name: "Feature Stub",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 3,
    evidenceDetail: "Evidence strength is moderate (3 out of 5). You can see whether people show interest by clicking within your app, but can't measure whether they'll actually use the full feature. AI makes implementing feature stubs faster than ever.",
    descriptionShort: "Place a button or entry point for a non-existent feature in your product to measure actual user interest before building it.",
    descriptionFull: "A small test of interest in a feature at the very beginning of the experience (e.g. a button). Include a feature stub within your existing product to see how many users click on it.\n\nIf clicked, present a friendly 'coming soon' message. Include a 'learn more' link to qualify interest further, or ask users to fill out a short survey (max three questions).\n\nRequires event tracking/data analytics to measure the outcome.\n\nAI-enhanced feature stubs:\n- AI coding tools make implementing feature stubs trivially fast. Add a button, modal, and tracking event in minutes.\n- AI-powered analytics can automatically measure stub interactions without manual event setup (auto-capture tools like Heap, PostHog).\n- Use AI to analyze the profile of users who click the stub vs. those who don't to understand who wants this feature.\n- If the stub includes a micro-survey, use AI to analyze open-ended responses.\n\nMake sure to include a toggle that allows you to quickly turn your feature stub on and off.\n\nMeasure:\n- How many people click the feature stub\n- How many click 'learn more'\n- How many fill out the survey & survey output",
    cost: "Cheap, especially with AI coding tools. Implementation takes minutes. Analytics tools have free tiers.",
    costLevel: "Low",
    practicalApplication: "Use AI coding tools to implement feature stubs in minutes. The speed of AI means you can test interest in 5 potential features simultaneously, each with its own stub, and let the data guide your roadmap."
  },
  {
    id: 40,
    name: "A/B Testing Product Versions/Features",
    category: "Customer Behavior",
    phase: "Mature Product",
    evidenceStrength: 4,
    evidenceDetail: "Evidence strength is high (4 out of 5). A/B tests are statistically reliable for evaluating product variations. AI can now generate variants, run experiments, and analyze results faster than ever. Roll out to a subset first to reduce risk.",
    descriptionShort: "Compare two or more versions of a product feature to determine which performs better. AI accelerates variant creation, experimentation, and analysis.",
    descriptionFull: "In product management, A/B tests (split tests) find the most effective variation of a product feature or update. A statistically reliable method to evaluate performance.\n\nAI-enhanced product A/B testing:\n- AI coding tools make it faster to create feature variants for testing.\n- AI-powered experimentation platforms (LaunchDarkly, Statsig, Eppo, GrowthBook) can automatically calculate statistical significance, detect anomalies, and flag winning variants.\n- AI can suggest which features to test based on user behavior analysis and predicted impact.\n- Multi-armed bandit algorithms (built into many AI experimentation tools) automatically shift traffic to winning variants, reducing experimentation time.\n- AI can identify interaction effects between different experiments running simultaneously.\n\nYou can test anything: buttons, text, colors, features, UI, messaging. Intended results: greater engagement, higher conversion, improved retention.\n\nDon't roll out new features to all customers at once. Roll out to a select few first.\n\nBy using A/B testing, product managers can:\n1. Determine whether they're building the right product\n2. Launch new features with confidence through staged rollouts\n3. Experiment with pricing and sorting algorithms\n\nTools: Statsig (free tier), GrowthBook (open source), LaunchDarkly, Optimizely, Eppo.",
    cost: "Many tools have free tiers: Statsig, GrowthBook (open source). Enterprise tools: $100-1000/mo. AI coding tools make variant creation nearly free.",
    costLevel: "Variable",
    practicalApplication: "Use AI experimentation platforms to run more experiments faster. Multi-armed bandit algorithms automatically optimize traffic allocation, meaning you get answers sooner with less risk. The combination of AI variant creation + automated experimentation = continuous optimization."
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
