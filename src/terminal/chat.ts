import { profile } from "../data/portfolio";

interface Rule {
  keywords: string[];
  replies: string[];
}

const RULES: Rule[] = [
  {
    keywords: ["hello", "hi", "hey", "salaam", "namaste", "yo"],
    replies: [
      "Hey! I'm NIZ.AI a simulated version of Nizamuddin. Ask me about his projects, skills, or how to hire him.",
      "Hello, human. I'm running on pure JavaScript and confidence. What do you want to know about Nizam?",
    ],
  },
  {
    keywords: ["project", "build", "built", "work on", "portfolio"],
    replies: [
      "Nizam's favorite build is AskAllen a RAG chatbot searching 43,000+ resumes with vector embeddings. He also built an AI Image Detector (92%+ accuracy, published research) and QuizBuddy, a real-time multiplayer quiz platform. Type `projects` for the full list.",
    ],
  },
  {
    keywords: ["skill", "stack", "tech", "language", "framework", "python"],
    replies: [
      "Core stack: Python, FastAPI, LangChain, PyTorch, Hugging Face for AI plus React and TypeScript on the frontend. His specialty is RAG systems and LLM applications. Type `skills` for everything.",
    ],
  },
  {
    keywords: ["rag", "llm", "chatbot", "vector", "embedding", "ai"],
    replies: [
      "RAG is Nizam's home turf embeddings, vector databases, semantic search, prompt engineering. He's shipped RAG systems processing 43K+ documents in production. I am, ironically, not RAG-powered. I'm just if-statements. He'd build me better.",
    ],
  },
  {
    keywords: ["hire", "job", "opportunit", "recruit", "available", "salary", "role", "position"],
    replies: [
      `Smart move. Nizam is open to AI engineering roles. Fastest channel: ${profile.email} or type \`hire\` to get all contact info. Tell him NIZ.AI sent you.`,
    ],
  },
  {
    keywords: ["experience", "company", "current"],
    replies: [
      "He's currently an AI Engineer at AutomateBuddy Technologies, before that Jr. AI Engineer at SAAR IT Resources where he worked on a government e-governance chatbot serving citizens in 3 languages. Type `experience` for details.",
    ],
  },
  {
    keywords: ["research", "paper", "publication", "published"],
    replies: [
      "Two published papers the 2025 one classifies AI-generated faces with a fine-tuned ResNet50 (IJISRT). Type `research` for DOI links.",
    ],
  },
  {
    keywords: ["education", "degree", "college", "study", "cgpa"],
    replies: [
      "MSc in Artificial Intelligence, 9.26 CGPA B.K. Birla College. His BSc CGPA was 9.27, so technically he peaked in undergrad by 0.01 points. Don't tell him I said that.",
    ],
  },
  {
    keywords: ["who are you", "what are you", "real", "fake", "human"],
    replies: [
      "I'm NIZ.AI a scripted homage to Nizam's actual work building real LLM chatbots. He builds the real thing with RAG pipelines and vector search; I'm the demo that fits in a portfolio bundle.",
    ],
  },
  {
    keywords: ["contact", "email", "phone", "reach", "linkedin", "github"],
    replies: [
      `Email ${profile.email}, or find him on GitHub and LinkedIn (icons in the top bar). Type \`contact\` for everything including phone.`,
    ],
  },
  {
    keywords: ["askallen", "allen", "recruitment"],
    replies: [
      "AskAllen is his flagship: an LLM recruitment chatbot with RAG over 43,000+ resumes, chunked and embedded for semantic retrieval, running in GPU environments with Qwen/LLaMA variants. It's live at askallen.cxengine.net, go poke it.",
    ],
  },
  {
    keywords: ["quizbuddy", "quiz", "game"],
    replies: [
      "QuizBuddy is a real-time multiplayer quiz platform: three synced React + TypeScript apps (Host, TV, Player) on Firebase Firestore, 6 game modes, live game-show energy. He built the whole thing solo.",
    ],
  },
  {
    keywords: ["image detector", "detector", "resnet", "deepfake", "synthetic"],
    replies: [
      "The AI Image Detector classifies real vs AI-generated faces at 92%+ accuracy using a fine-tuned ResNet50. It became a published IJISRT paper and a live Hugging Face Space. Type `research` for the DOI.",
    ],
  },
  {
    keywords: ["wssd", "government", "governance", "citizen", "marathi", "hindi"],
    replies: [
      "For the Water Supply and Sanitation Department he helped build a multilingual chatbot serving citizens in Marathi, Hindi, and English, with voice via Whisper + GTTS and real-time complaint tracking through SQL-backed ticket IDs. Real public-sector AI, real users.",
    ],
  },
  {
    keywords: ["what is rag", "explain rag", "how does rag"],
    replies: [
      "RAG = Retrieval-Augmented Generation: chunk documents, embed them into vectors, retrieve the most relevant chunks for a query, and feed them to an LLM so it answers from facts instead of vibes. Nizam has shipped this at 43K-document scale.",
    ],
  },
  {
    keywords: ["remote", "relocat", "onsite", "office", "where", "location", "kalyan", "mumbai"],
    replies: [
      "He's based in Kalyan, Maharashtra (Mumbai metro area) and comfortable with remote, hybrid, or onsite. He's deployed to Ubuntu servers from a Windows machine, he adapts.",
    ],
  },
  {
    keywords: ["available", "availability", "notice", "when can", "start"],
    replies: [
      `He's open to conversations right now. The fastest way to check availability is to just ask him: ${profile.email}.`,
    ],
  },
  {
    keywords: ["language", "speak", "english", "urdu"],
    replies: [
      "Human languages: English, Marathi, Hindi, and Urdu. Machine languages: Python, SQL, TypeScript. He builds chatbots that speak three of the former, which is a nice party trick.",
    ],
  },
  {
    keywords: ["certificat", "course"],
    replies: [
      "Certified in Deep Learning (2025) and Machine Learning (2024) by L&T EduTech, on top of the MSc in AI. Type `education` for the full record.",
    ],
  },
  {
    keywords: ["this site", "this website", "this portfolio", "terminal", "how did you", "who made", "built this"],
    replies: [
      "This whole OS is React + TypeScript + Tailwind + Framer Motion, a custom command parser, a canvas matrix rain, and CSS scanlines. No template. Even I'm handwritten, which explains a lot.",
    ],
  },
  {
    keywords: ["favorite model", "best llm", "gpt", "claude", "qwen", "llama", "model"],
    replies: [
      "He's worked hands-on with Qwen and LLaMA variants, Groq-hosted models, and Whisper for speech. His take: the best model is the one that fits the latency, cost, and accuracy budget of the actual product.",
    ],
  },
  {
    keywords: ["power bi", "dashboard", "analytics", "data"],
    replies: [
      "Beyond LLMs he builds Power BI dashboards (monthly/quarterly/yearly sales for restaurant clients) and does sentiment analysis over thousands of Google reviews with Pandas and NumPy. AI plus analytics, full loop.",
    ],
  },
  {
    keywords: ["whatsapp", "webhook", "integration", "api"],
    replies: [
      "He's integrated the Meta WhatsApp Business API with FastAPI webhooks (Ngrok-tunneled during dev), so yes, he can make your chatbot live where your users actually are.",
    ],
  },
  {
    keywords: ["voice", "whisper", "speech", "tts", "stt"],
    replies: [
      "Voice AI: he wired Whisper for speech-to-text and GTTS for text-to-speech into a production government chatbot. Citizens could literally talk to it in Marathi.",
    ],
  },
  {
    keywords: ["weakness", "flaw", "bad at"],
    replies: [
      "His biggest weakness? He'll refactor a working thing at 2am because the naming bothered him. As weaknesses go, hiring managers tend to forgive that one.",
    ],
  },
  {
    keywords: ["help", "what can i ask", "topics"],
    replies: [
      "Ask me about: his projects (askallen, quizbuddy, image detector), skills, RAG, experience, research, education, remote work, availability, or how to hire him. Or type `exit` and use the shell commands.",
    ],
  },
  {
    keywords: ["joke", "funny"],
    replies: [
      "Why did the LLM cross the road? Insufficient context. Try increasing the window. ...Nizam writes better prompts than jokes, I promise.",
    ],
  },
  {
    keywords: ["thank", "thanks", "cool", "nice", "awesome", "great"],
    replies: [
      "Anytime. I'll be here, blinking in cyan. Type `exit` to leave chat, or keep asking.",
    ],
  },
  {
    keywords: ["bye", "exit", "quit"],
    replies: ["Type `exit` to close the chat session. I'll pretend not to be sad."],
  },
];

const FALLBACKS = [
  "Hmm, that's outside my training data (which is one TypeScript file). Try asking about projects, skills, experience, or hiring Nizam.",
  "I could hallucinate an answer, but Nizam taught me better. Ask me about his work, stack, research, or availability.",
  "404: wit not found. But I do know his projects, skills, and how to reach him ask away.",
];

let fallbackIndex = 0;

export function aiReply(message: string): string {
  const msg = message.toLowerCase();
  for (const rule of RULES) {
    if (rule.keywords.some((k) => msg.includes(k))) {
      return rule.replies[Math.floor(Math.random() * rule.replies.length)];
    }
  }
  const reply = FALLBACKS[fallbackIndex % FALLBACKS.length];
  fallbackIndex++;
  return reply;
}
