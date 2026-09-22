export const site = {
  legalName: "Legacy Life Management, LLC",
  shortName: "Legacy Life Management",
  owner: "Bobbie Libbey",
  ownerRole: "Owner",
  tagline: "Support Today. Brighter Tomorrows.",
  phoneDisplay: "812-598-5423",
  phoneHref: "tel:8125985423",
  email: "legacylifemanagementllc@gmail.com",
  emailHref: "mailto:legacylifemanagementllc@gmail.com",
  region: "Southern Indiana",
  siteUrl: "https://legacy-life-management.web.app",
} as const;

export const navLinks = [
  { href: "/#top", label: "Home" },
  { href: "/about", label: "About Bobbie" },
  { href: "/faq", label: "Frequently Asked Questions" },
  { href: "/help", label: "How I can help" },
  { href: "/rates", label: "Rates and fees" },
  { href: "/#services", label: "Services" },
  { href: "/#how-it-works", label: "How It Works" },
  { href: "/#contact", label: "Contact" },
] as const;

export const helpServices = [
  {
    title: "Appointments & health-related organization",
    body: "Be informed. Feel supported.",
    image: "/service-appointments.webp",
    alt: "Stethoscope on a clipboard",
    icon: "calendar",
    items: [
      "Schedule and manage appointments",
      "Prepare for visits with questions and information",
      "Provide reminders and follow-up",
      "Coordinate with healthcare providers (with your permission)",
      "Help organize medical information",
    ],
  },
  {
    title: "Moves & transitions",
    body: "Helping life’s changes feel more manageable.",
    image: "/service-moves.webp",
    alt: "Moving boxes labeled Next Chapter",
    icon: "home",
    items: [
      "Plan and coordinate moves (senior living, downsizing, or rightsizing)",
      "Sort, organize, and declutter",
      "Coordinate with family, vendors, and facilities",
      "Create practical timelines and checklists",
      "Support you through each step with care and understanding",
    ],
  },
  {
    title: "Funeral & family project support",
    body: "Compassionate help when it matters most.",
    image: "/service-funeral.webp",
    alt: "White lily on a dark surface",
    icon: "heart",
    items: [
      "Help organize important information and documentation",
      "Coordinate tasks and timelines",
      "Communicate with funeral homes, clergy, or other providers",
      "Support family members during a difficult time",
      "Assist with follow-up tasks and details",
    ],
  },
  {
    title: "Everyday life assistance",
    body: "Practical help for daily living.",
    image: "/service-everyday.webp",
    alt: "Mug and blanket on a sofa",
    icon: "people",
    items: [
      "Errands and shopping",
      "Home organization",
      "Paperwork and correspondence",
      "Phone calls and communication",
      "Calendar and task management",
      "Technology support",
      "Companionship and an extra set of hands",
    ],
  },
  {
    title: "Special Projects",
    body: "Personalized support for the things that don’t fit neatly on a to-do list.",
    image: "/service-special.webp",
    alt: "Checklist notebook on a desk",
    icon: "clipboard",
    items: [
      "Estate and household organization",
      "Life documentation projects",
      "Seasonal projects (holidays, travel, etc.)",
      "Coordinate with trusted professionals (attorneys, financial advisors, etc.)",
      "Custom support tailored to your unique needs",
      "Transportation to out-of-town events",
    ],
  },
] as const;

export const ratesSheet = {
  eyebrow: "You don’t have to do it all alone.",
  title: "Service & Rate Information",
  subtitle: "Practical support for a more organized, less stressful tomorrow",
  hourly: {
    heading: "Hourly rate",
    items: [
      "$20 per hour",
      "Applies to local services within the immediate Evansville area only.",
      "Time is billed in 1-hour increments.",
    ],
  },
  largerProjects: {
    heading: "Larger or out-of-town projects",
    items: [
      "Priced on a case-by-case basis.",
      "Projects involving significant travel or extended planning will be quoted individually based on the scope of work, estimated time, and any travel requirements.",
      "You will always receive clear information before any work begins.",
    ],
  },
  expenses: {
    heading: "Additional expenses",
    items: [
      "Any out-of-pocket expenses (mileage, parking, tolls, supplies, postage, etc.) will be billed at actual cost with a receipt provided.",
      "Mileage, when applicable, is billed at the current IRS standard rate.",
    ],
  },
  included: {
    heading: "What’s included",
    intro:
      "My services provide practical, non-medical support tailored to your needs, such as:",
    items: [
      "Appointment assistance and companionship",
      "Errands and shopping",
      "Home organization and downsizing support",
      "Communication and coordination",
      "Project management",
      "Advocacy and resource connection",
    ],
    close:
      "And more — all designed to make daily life easier and help you focus on what matters most.",
  },
  notIncluded: {
    heading: "What’s not included",
    body: "I do not provide medical care, legal advice, or financial advising. When needed, I can help connect you with trusted professionals in those fields.",
  },
  commitment: {
    heading: "Our commitment",
    items: [
      "You can count on clear communication, professional boundaries, and respectful, compassionate support.",
      "My goal is to help you maintain independence, reduce stress, and enjoy a more organized, fulfilling life.",
    ],
  },
} as const;

export const aboutFaq = [
  {
    question: "What kinds of things can Legacy Life Management help with?",
    answer:
      "Legacy Life Management provides personal, practical support for older adults and their families. Services may include accompanying clients to appointments, coordinating moves or life transitions, helping organize funeral- or family-related projects, communicating with vendors or family members, assisting with everyday tasks, and managing special projects. Each situation is different, so services are tailored to the individual client’s needs.",
  },
  {
    question:
      "Does Legacy Life Management provide medical, legal, or financial advice?",
    answer:
      "No. Legacy Life Management does not provide medical, legal, financial, or other licensed professional advice or services. I can help organize information, prepare questions, take notes, coordinate appointments, and assist with follow-up. When specialized assistance is needed, referrals to appropriate professionals can be provided for the client or family to consider and pursue at their own discretion.",
  },
  {
    question:
      "Can you communicate with doctors, facilities, family members, or other professionals on my behalf?",
    answer:
      "Yes, when appropriate and with the client’s permission. The client packet includes written authorization allowing Legacy Life Management to communicate with designated individuals or organizations for the specific services requested. Medical providers, financial institutions, attorneys, facilities, and other organizations may require their own authorization or release forms as well.",
  },
  {
    question:
      "Can clients give you gifts, money, or include you in financial arrangements?",
    answer:
      "No. Maintaining clear professional boundaries protects both the client and Legacy Life Management. The client packet includes a No-Gifts & Financial Boundaries Acknowledgment, which is signed as part of the client relationship. Legacy Life Management does not accept cash gifts, tips, gift cards, personal loans, valuable property, inheritances, beneficiary designations, or other significant financial benefits from clients. Payment for agreed-upon services and reimbursement of documented, pre-approved business expenses are not considered gifts.",
  },
  {
    question:
      "What happens when I contact Legacy Life Management for the first time?",
    answer:
      "We start with a conversation. You don’t need to know exactly what service you need before calling. We’ll talk about what is happening, what needs attention, and where an extra set of hands could make things easier. From there, we can determine whether Legacy Life Management is a good fit, discuss the scope of assistance, and create a plan for moving forward.",
  },
] as const;

export const personYouCanCall = [
  "Sometimes you don’t need another company, another complicated process, or another person telling you what you should do. You simply need someone dependable who can step in, understand what needs to happen, and help move things forward.",
  "That’s the role I want Legacy Life Management to fill.",
  "When you call, you’ll work directly with me. I’ll take the time to understand what’s happening, what matters most to you, and where you could use some help. From there, we’ll figure out the next steps together.",
  "Some situations may be fairly simple—a few phone calls, an appointment, an errand, or something that has been sitting on the to-do list for too long. Others may involve many moving pieces, family members, appointments, vendors, deadlines, or decisions that need to be coordinated. Either way, you don’t have to sort through everything by yourself.",
  "I believe good support begins with listening. Every person, family, and situation is different, so my approach is personal rather than one-size-fits-all. I’ll help bring organization to the details, communicate clearly, follow through on what we’ve agreed upon, and keep you informed along the way.",
  "Most importantly, I want you and your family to feel comfortable calling me when something comes up—even when you aren’t quite sure what kind of help you need.",
  "You don’t have to have everything figured out before you call. That’s where we can start.",
] as const;

export const aboutStory = [
  "Hi, I’m Bobbie Libbey, owner of Legacy Life Management, LLC. I created this business to provide older adults and their families with personal, practical support for life’s transitions and everyday needs. Whether it’s accompanying you to appointments, helping with a move, coordinating funeral-related tasks, managing a special project, or simply tackling the to-do list, I’m here to help make life a little easier.",
  "My background includes operations, program coordination, community engagement, event planning, and administrative support. I’ve worked with families, community organizations, nonprofit leaders, educators, volunteers, and other professionals — often serving as the person who keeps communication clear, coordinates moving pieces, and makes sure important details don’t get overlooked.",
  "I’m a graduate of the University of Southern Indiana and am currently continuing my education there through its MBA program. I value learning and bringing that same thoughtful, organized approach to the way I serve my clients.",
  "Most importantly, I truly love serving people. I have a special place in my heart for older adults and a deep respect for the experience, independence, and individuality each person brings to this stage of life. It is an honor to come alongside clients and their families with practical help, compassion, and a dependable presence.",
  "My goal is simple: to listen, organize, coordinate, and help get things done while treating every client with dignity, respect, and kindness.",
  "Legacy Life Management is not a medical or home-health service. It is personal, practical support for the moments when you or someone you love could simply use another capable person by your side.",
] as const;
