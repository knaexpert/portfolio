import kyros from "./assets/images/kyros.png";
import socialroots from "./assets/images/socialroots.png";
import zenwellness from "./assets/images/zenwellness.png";
import semoscloud from "./assets/images/semoscloud.png";

export const skills = [
  { type: "React.js", level: 98, expertise: "Expert", years: 7 },
  { type: "JavaScript", level: 98, expertise: "Expert", years: 8 },
  { type: "TypeScript", level: 98, expertise: "Expert", years: 8 },
  { type: "Redux", level: 98, expertise: "Expert", years: 6 },
  { type: "Next.js", level: 95, expertise: "Expert", years: 6 },
  { type: "Frontend Development", level: 96, expertise: "Expert", years: 8 },
  { type: "ES6+", level: 98, expertise: "Expert", years: 7 },
  { type: "Tailwind CSS", level: 95, expertise: "Expert", years: 5 },
  { type: "Figma", level: 96, expertise: "Expert", years: 8 },
  { type: "UI/UX", level: 96, expertise: "Expert", years: 8 },
  { type: "Visual Design", level: 96, expertise: "Expert", years: 8 },
  { type: "Research", level: 96, expertise: "Expert", years: 8 },
  { type: "GraphQL", level: 95, expertise: "Expert", years: 6 },
  { type: "Styled-Components", level: 98, expertise: "Expert", years: 7 },
  { type: "HTML/HTML5", level: 98, expertise: "Expert", years: 8 },
  { type: "CSS/CSS3", level: 98, expertise: "Expert", years: 8 },
  { type: "AWS", level: 85, expertise: "Advanced", years: 8 },
  { type: "Firebase", level: 90, expertise: "Expert", years: 7 },
  { type: "jQuery", level: 98, expertise: "Expert", years: 8 },
  { type: "Bootstrap", level: 98, expertise: "Expert", years: 8 },
  { type: "Webflow", level: 92, expertise: "Expert", years: 5 },
];

export const sections = [
  {
    href: "#about",
    name: "About",
  },
  {
    href: "#experience",
    name: "Experience",
  },
  {
    href: "#projects",
    name: "Projects",
  },
];

export const projects = [
  {
    name: "Kyros.ai",
    year: 2024,
    appName: "Web App for AI-Powered College Prep",
    description: `● Led the development of high-performance, scalable web applications using React, Next.js, TypeScript, Tailwind CSS, and modern frontend technologies.
      ● Collaborated closely with cross-functional teams to deliver seamless user experiences, ensuring robust and maintainable frontend architecture.
      ● Implemented best practices for code quality, performance optimization, and responsive design while mentoring junior developers.
      ● Conducted code reviews to maintain high standards and delivered innovative e-commerce solutions that enhanced customer engagement and drove business growth.
    `,
    experience:
      "Built a platform focusing on empowering high school students on their college prep journey with personalized resources and leveraging professional guidance from college counselors across the US.",
    skills: [
      "React",
      "TypeScript",
      "Next.js",
      "Tailwind CSS",
      "Figma",
      "Responsive Design",
      "UI/UX",
    ],
    duration: "Aug 2022 - Nov 2024",
    role: "Senior Frontend Developer",
    image: kyros,
    link: "https://www.kyros.ai/",
  },
  {
    name: "Social Roots",
    year: 2022,
    appName: "Civic Tech Infrastructure for networks",
    description: `● Worked as a Frontend Developer, building dynamic and user-friendly web applications using React, Redux, ES6, Tailwind CSS, and modern frontend technologies.
      ● Collaborated with product managers, backend developers, and graphic designers to deliver responsive, high-quality solutions.
      ● Focused on creating ecient, visually appealing user interfaces, enhancing application performance, and ensuring a seamless  cross-platform experience.
      ● Contributed to the development of innovative features while maintaining a strong emphasis on code quality and best practices.
      ● Implemented unit-test cases using Jest to ensure comprehensive code coverage.
    `,
    experience:
      "Built a SaaS Solution for De-Siloing Communication Across Groups",
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "ES6+",
      "Figma",
      "Tailwind CSS",
      "UI/UX",
    ],
    duration: "Feb 2021 - May 2022",
    role: "Frontend Developer",
    image: socialroots,
    link: "https://www.socialroots.io/",
  },
  {
    name: "Zen Wellness",
    year: 2020,
    appName: "Web App for Experts in Haircare Defining Holistic Beauty Treatments",
    description: `● Designed and developed user-centric web applications to enhance the online experience for wellness-focused users.
      ● Built responsive, accessible, and visually engaging interfaces using React, Redux, Styled-Components, and modern frontend technologies.
      ● Collaborated directly with the Zen Wellness team to understand business goals, implement new features, and optimized website performance.
      ● Ensured a seamless user experience across devices while maintaining high standards of code quality and eciency.
    `,
    experience:
      "Add features into the web applications for personal and students loans and refactored multiple projects without a massive rewrite based on best practices",
    skills: [
      "React",
      "Redux",
      "Styled-Components",
      "Figma",
      "React Hooks",
      "Figma",
      "UI/UX",
    ],
    duration: "Nov 2019 - Dec 2020",
    role: "Frontend Developer",
    image: zenwellness,
    link: "https://zenwellness.com.sg/",
  },
  {
    name: "Semos Cloud",
    appName: "Web app to connect Culture, empower people and build skills",
    year: 2019,
    description: `● Maintained and enhanced a full-stack web application with a focus on responsive design and cross-browser compatibility using JavaScript, HTML, CSS, and Bootstrap.
        ● Collaborated closely with design and product teams to optimize key features, such as quick view and product portals, by leveraging React components to improve performance and rendering across devices.
        ● Implemented solutions to enhance application reliability and reduce latency, ensuring a seamless and efficient user experience while adhering to high standards of code quality  by identifying and addressing areas for improvement
      `,
    skills: [
      "React",
      "Redux",
      "JavaScript",
      "Jest",
      "D3.js",
      "Lodash",
      "Figma",
      "HTML",
      "CSS",
    ],
    role: "Frontend Developer",
    image: semoscloud,
    link: "https://semoscloud.com/",
  },
];
