/**
 * Homepage FAQ content. Single source of truth for the visible FAQ section
 * and the FAQPage JSON-LD schema emitted from layout.tsx, so the question
 * text and answer text stay perfectly in sync for AI platforms.
 *
 * Questions are phrased the way real prospects ask AI assistants about
 * consultants ("what does X do", "who is X for", "how is X different").
 * Answers lead with a direct 40-60 word response for extractability, then
 * expand.
 */
export type FAQ = {
  question: string;
  answer: string;
};

export const HOMEPAGE_FAQS: readonly FAQ[] = [
  {
    question: "What is Verge AI?",
    answer:
      "Verge AI is an AI strategy consultancy for small business owners who want to use AI to save time, grow revenue, and compete without hiring a dev team. Every engagement ties AI decisions to measurable business outcomes. Founded and run by a digital media strategist with nearly 20 years in marketing technology.",
  },
  {
    question: "Who does Verge AI work with?",
    answer:
      "Verge AI works with small business owners and service-based founders who are overwhelmed by AI tools and want a clear plan. Ideal clients are owners of businesses with one to twenty employees who need to free up five to fifteen hours per week and want strategic guidance, not custom software development.",
  },
  {
    question: "Does Verge AI build custom AI software?",
    answer:
      "No. Verge AI is a strategy and advisory practice, not a development agency. Engagements focus on diagnosing where AI fits in your business, building a roadmap, recommending the right tools and workflows, and guiding implementation. If custom software is the right answer, Verge AI will scope it and refer you to a trusted build partner.",
  },
  {
    question: "What does an AI strategy engagement look like?",
    answer:
      "A typical engagement starts with a discovery call, followed by an AI readiness audit that reviews your website, content, tools, and workflows. You receive a prioritized roadmap with the top three to five AI moves for your business, ranked by impact and effort. Implementation support is available as a separate phase.",
  },
  {
    question: "How is AI strategy consulting different from AI development?",
    answer:
      "AI strategy focuses on which problems to solve and which tools to use, while AI development focuses on building custom models or software. Strategy engagements are faster, lower cost, and produce a plan plus vendor recommendations. Development engagements produce working code. Most small businesses need strategy first to avoid wasting money on the wrong build.",
  },
  {
    question: "How long does it take to see results from AI consulting?",
    answer:
      "Initial wins from workflow automation and AI tool adoption typically show up in four to eight weeks. Content and AI search visibility improvements usually land in ninety to one hundred and eighty days. Verge AI sets clear milestones at week four, week twelve, and month six so you can measure progress at each step.",
  },
  {
    question: "Is Verge AI for solo founders or teams with employees?",
    answer:
      "Both. Solo founders benefit the most from workflow automation and content AI to reclaim time. Small teams benefit from building AI into client delivery, lead nurture, and reporting. Verge AI tailors the plan to your team size, budget, and the specific bottlenecks costing you the most hours each week.",
  },
  {
    question: "Does Verge AI offer an AI readiness assessment?",
    answer:
      "Yes. Verge AI runs a free AI Visibility Scanner that scores any website across eight pillars for readiness on ChatGPT, Claude, Perplexity, and Google AI Overviews. The scanner produces a branded PDF scorecard in under ninety seconds. Upgrade to the full bundle for done-for-you rewrites, schema markup, and an implementation guide.",
  },
  {
    question: "How do I get started with Verge AI?",
    answer:
      "The fastest path is the Blueprint Quiz at blueprintquiz.vergeai.co, which surfaces the three best AI moves for your business in under five minutes. For a direct conversation, book a discovery call at calendar.app.google. You can also email info@vergeai.co to discuss a specific project.",
  },
  {
    question: "Where is Verge AI based and who does it serve?",
    answer:
      "Verge AI is based in British Columbia, Canada and works with clients across Canada and the United States. Engagements are fully remote, with asynchronous Loom walkthroughs and scheduled video calls. The consulting methodology is built around North American small business realities, including Canadian tax context when relevant.",
  },
] as const;
