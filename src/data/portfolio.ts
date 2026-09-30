export interface Project {
  slug: string;
  name: string;
  category: string;
  platform: "React.js" | "Vue.js" | "WordPress" | "Webflow" | "Wix";
  tags: string[];
  description: string;
  year: string;
  url: string;
}

export const projects: Project[] = [
  {
    slug: "gym-city",
    name: "GymCity",
    category: "Fitness platform",
    platform: "WordPress",
    tags: ["WordPress", "AI", "SaaS"],
    description: "An AI-powered fitness business platform for trainers, gyms, and wellness professionals.",
    year: "2024",
    url: "https://gymcity.com/",
  },
  {
    slug: "1touchpoint",
    name: "1TouchPoint",
    category: "Business website",
    platform: "WordPress",
    tags: ["WordPress", "UX", "CMS"],
    description: "A focused business website designed to make a complex service offer feel clear and approachable.",
    year: "2025",
    url: "https://1touchpoint.com/",
  },
  {
    slug: "get-levrg",
    name: "Get Levrg",
    category: "Services website",
    platform: "WordPress",
    tags: ["WordPress", "Strategy", "Conversion"],
    description: "A high-clarity services experience built around trust, conversion, and a confident brand voice.",
    year: "2026",
    url: "https://getlevrg.com/",
  },
  {
    slug: "coders-bucket",
    name: "CodersBucket",
    category: "Software studio",
    platform: "WordPress",
    tags: ["WordPress", "Software", "Elementor"],
    description: "A custom software development partner website with a direct, technical, and service-led presentation.",
    year: "2026",
    url: "https://codersbucket.com/",
  },
  {
    slug: "wg-counsel",
    name: "WG Counsel",
    category: "Professional website",
    platform: "WordPress",
    tags: ["WordPress", "Brand", "SEO"],
    description: "A polished professional services website shaped around authority, clarity, and easy contact.",
    year: "2025",
    url: "https://wgcounsel.com/",
  },
  {
    slug: "ts-imagine",
    name: "TS Imagine",
    category: "Creative website",
    platform: "WordPress",
    tags: ["WordPress", "Creative", "Motion"],
    description: "A creative brand presence designed to turn a distinctive point of view into an engaging web experience.",
    year: "2025",
    url: "https://tsimagine.com/",
  },
  {
    slug: "simply-eloped",
    name: "Simply Eloped",
    category: "Venue finder",
    platform: "React.js",
    tags: ["React", "Search", "UX"],
    description: "A React venue discovery experience helping couples find the right place for an intimate celebration.",
    year: "2025",
    url: "https://simplyeloped.com/venue-finder/",
  },
  {
    slug: "swalitime",
    name: "SwaliTime",
    category: "Web application",
    platform: "React.js",
    tags: ["React", "Product", "Responsive"],
    description: "A responsive React product experience built to make everyday interactions feel fast and intuitive.",
    year: "2025",
    url: "https://www.swalitime.com/",
  },
  {
    slug: "ryogen-ai",
    name: "Ryogen AI",
    category: "AI product",
    platform: "React.js",
    tags: ["React", "AI", "Product design"],
    description: "A focused AI product experience with a clear path from curiosity to understanding and action.",
    year: "2025",
    url: "https://ryogen.ai/",
  },
  {
    slug: "shuttle-bd",
    name: "Shuttle BD",
    category: "Transport website",
    platform: "Vue.js",
    tags: ["Vue.js", "Travel", "UX"],
    description: "A Vue.js experience for a transport service with clear routes, useful information, and a direct booking journey.",
    year: "2025",
    url: "https://www.shuttlebd.com/",
  },
  {
    slug: "hidden-lake-haunts",
    name: "Hidden Lake Haunts",
    category: "Experience website",
    platform: "Wix",
    tags: ["Wix", "Brand", "Bookings"],
    description: "A memorable Wix website for a destination experience, built to make discovery and planning feel immersive.",
    year: "2025",
    url: "https://www.hiddenlakehaunts.com/",
  },
  {
    slug: "tei3",
    name: "TEI3",
    category: "Organization website",
    platform: "Wix",
    tags: ["Wix", "Content", "Responsive"],
    description: "A clear, approachable Wix presence for an organization with information structured for easy exploration.",
    year: "2025",
    url: "https://www.tei3.org/",
  },
  {
    slug: "gladis-cleaning",
    name: "Gladis Cleaning Services",
    category: "Local business website",
    platform: "Wix",
    tags: ["Wix", "Local business", "SEO"],
    description: "A service-led Wix website designed to build local trust and make enquiries straightforward.",
    year: "2025",
    url: "https://www.gladiscleaningservices11.com/",
  },
  {
    slug: "akadia-group",
    name: "Akadia Group",
    category: "Business website",
    platform: "Wix",
    tags: ["Wix", "Business", "Brand"],
    description: "A polished Wix business presence focused on presenting services with confidence and clarity.",
    year: "2025",
    url: "https://www.akadiagroup.com/",
  },
  {
    slug: "portable-x-ray-repair",
    name: "Portable X-Ray Repair",
    category: "Specialist services",
    platform: "Wix",
    tags: ["Wix", "Services", "CMS"],
    description: "A specialist Wix service website helping customers quickly understand repair expertise and reach the team.",
    year: "2025",
    url: "https://www.portablex-rayrepaircorporation.com/",
  },
  {
    slug: "kevin-baker",
    name: "Kevin Baker",
    category: "Personal website",
    platform: "Wix",
    tags: ["Wix", "Personal brand", "Design"],
    description: "A personal Wix site shaped around a clear introduction, focused content, and easy contact.",
    year: "2025",
    url: "https://semexpertsaa.wixsite.com/kevinbaker406",
  },
  {
    slug: "jacobson-doug",
    name: "Jacobson Doug",
    category: "Wix Studio website",
    platform: "Wix",
    tags: ["Wix Studio", "Responsive", "CMS"],
    description: "A Wix Studio build with a flexible visual system and a presentation tailored to its subject.",
    year: "2025",
    url: "https://jacobsondoug.wixstudio.com/website",
  },
  {
    slug: "aat-3d",
    name: "AAT 3D",
    category: "3D studio website",
    platform: "Webflow",
    tags: ["Webflow", "3D", "Motion"],
    description: "A Webflow experience for a 3D-focused brand, balancing visual impact with a clear project story.",
    year: "2025",
    url: "https://aat3d.com/",
  },
  {
    slug: "oleria",
    name: "Oleria",
    category: "Brand website",
    platform: "Webflow",
    tags: ["Webflow", "Brand", "Marketing"],
    description: "A refined Webflow brand experience built around visual storytelling, polish, and confident navigation.",
    year: "2025",
    url: "https://www.oleria.com/",
  },
];

export const platformFilters = ["All", "React.js", "Vue.js", "WordPress", "Webflow", "Wix"] as const;

export const coreStrengths = [
  "React.js",
  "Next.js",
  "Vue.js",
  "WordPress",
  "Webflow",
  "Wix",
  "API Integration",
  "CMS Development",
  "UI Systems",
];

export interface Testimonial {
  quote: string;
  author: string;
  location: string;
}

export const testimonials: Testimonial[] = [
  {
    quote: "Excellent work — reliable and professional. Would gladly collaborate again.",
    author: "mdex2k",
    location: "Austria",
  },
  {
    quote:
      "I had a lot of things wrong or just not the way I wanted with my website. After having a video call we came to conclusion that my website needed some work. He went to work and everyday he had something new he fixed. I will use him anytime my website needs work.",
    author: "iqracer",
    location: "United States",
  },
  {
    quote: "Very fast and good work :)",
    author: "impactrich",
    location: "Germany",
  },
  {
    quote: "Great service and quick. Responsive and willing to help up till he can.",
    author: "shamiro",
    location: "Curaçao",
  },
  {
    quote:
      "Choton Bhowmik did an AMAZING job designing my website! The work was bug-free and highly professional, showcasing true expertise in website development. Choton's quick responsiveness and timely delivery made the entire experience seamless. I'm definitely looking forward to working with him again.",
    author: "mdex2k",
    location: "Austria",
  },
  {
    quote:
      "This was my second project with Choton. He provided support until I was fully satisfied. In the future, I will definitely hire him again. I am very happy with his work.",
    author: "Ben",
    location: "Australia",
  },
  {
    quote:
      "Choton Bhowmik did an outstanding job designing my website. His creative approach and meticulous attention to detail transformed my vision into a compelling, user-friendly digital experience. I am extremely impressed with his professionalism and technical expertise, and I look forward to collaborating with him again in the future.",
    author: "mdex2k",
    location: "Austria",
  },
];
