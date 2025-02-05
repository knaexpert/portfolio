import { useState, useEffect } from "react";
import Typewriter from "typewriter-effect";

import "./styles.css";
import { ReactComponent as GithubLogo } from "../../assets/svg/github.svg";
import { ReactComponent as PDFLogo } from "../../assets/svg/pdf.svg";
import { ReactComponent as ArrowTopRight } from "../../assets/svg/arrowTopRight.svg";
import { ReactComponent as ArrowRight } from "../../assets/svg/arrowRight.svg";
import { ReactComponent as Mail } from "../../assets/svg/mail.svg";
import { ReactComponent as LaughFace } from "../../assets/svg/smile.svg";
import kristina from "../../assets/images/kristina.jpg";
import { projects, sections, skills } from "../../contants";

function Home() {
  const [section, setSection] = useState("#about");

  useEffect(() => {
    const experienceObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setSection("#experience");
      },
      { threshold: [0.5] }
    );

    const aboutObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setSection("#about");
      },
      { threshold: [0.5] }
    );

    const projectsObserver = new IntersectionObserver(
      function (entries) {
        if (entries[0].isIntersecting === true) setSection("#projects");
      },
      { threshold: [0.5] }
    );

    aboutObserver.observe(document.querySelector("#about"));
    experienceObserver.observe(document.querySelector("#experience"));
    projectsObserver.observe(document.querySelector("#projects"));
    return () => {
      aboutObserver.unobserve(document.querySelector("#about"));
      experienceObserver.unobserve(document.querySelector("#experience"));
      projectsObserver.unobserve(document.querySelector("#projects"));
    };
  }, []);

  return (
    <div className="lg:flex lg:justify-between lg:gap-4">
      <header className="lg:sticky lg:top-0 lg:flex lg:max-h-screen lg:w-1/2 lg:flex-col lg:justify-between lg:py-24">
        <div>
          <a href="/">
            <img
              className="w-48 rounded-full border-2 border-slate-200/10 mb-3"
              src={kristina}
              alt="kristina"
            />
          </a>
          <h1 className="text-4xl font-bold text-slate-200 sm:text-5xl mb-3">
            Kristina Gjozev
          </h1>
          <Typewriter
            options={{
              strings: [
                "Senior Front-End Developer",
                "UI/UX Expert",
                "Senior UI Engineer",
              ],
              loop: true,
              autoStart: true,
              pauseFor: 1500,
              delay: 40,
              cursor: "",
              StyleSheet,
            }}
          />
          <p className="mt-4 max-w-xs leading-normal">
            A Senior Front-End Developer focusing on building pixel-perfect,
            user-centric applications, advocating for best practices in frontend
            development, and continuously improving the intersection of design
            and engineering.
          </p>
          <nav className="nav hidden lg:block" aria-label="In-page jump links">
            <ul className="mt-16 w-max">
              {sections.map((s, idx) => (
                <li key={idx}>
                  <a
                    className={`group flex items-center py-3 ${
                      section === s.href ? "active" : ""
                    }`}
                    href={s.href}
                  >
                    <span className="nav-indicator mr-4 h-px w-8 bg-slate-600 transition-all group-hover:w-16 group-hover:bg-slate-200 group-focus-visible:w-16 group-focus-visible:bg-slate-200 motion-reduce:transition-none" />
                    <span className="nav-text text-xs font-bold uppercase tracking-widest text-slate-500 group-hover:text-slate-200 group-focus-visible:text-slate-200">
                      {s.name}
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200 h-6 w-6"
              href="https://github.com/"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">GitHub</span>
              <GithubLogo />
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200 h-6 w-6"
              href="/Resume.pdf"
              target="_blank"
              rel="noreferrer"
            >
              <span className="sr-only">Resume</span>
              <PDFLogo />
            </a>
          </li>
          <li className="mr-5 text-xs">
            <a
              className="block hover:text-slate-200 h-6 w-6"
              href="/contact"
              rel="noreferrer"
            >
              <span className="sr-only">Contact</span>
              <Mail />
            </a>
          </li>
        </ul>
      </header>
      <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
        <section
          id="about"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="About me"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              About
            </h2>
          </div>
          <div>
            <div className="mb-5 grid grid-cols-2 divide-x text-sm leading-6 rounded-lg overflow-hidden divide-slate-700 border-slate-700 border">
              <div className="px-4 py-2">
                <p className="font-semibold text-sm uppercase">Location</p>
                California City, CA, US
              </div>
              <div className="px-4 py-2">
                <p className="font-semibold text-sm uppercase">Phone Number</p>
                +1 707-654-0804
              </div>
            </div>
            <p className="mb-4">
              Hi, I’m Kristina. I am a senior front-end developer and UI/UX expert
              I have helped clients ranging from small startups with just three team members to
              Fortune 500 companies meet their development needs.
              <br />
              <br />
              I'm a a versatile, hardworking individual; driven to meet or
              exceed a company's expectations to deliver high-quality software
              products and well-versed in React, TypeScript, JavaScript, CSS, and Figma
              <br />
              <br />
              Fun Fact: I'm a skilled mum in debugging code, but I have never debugged a toddler’s logic! 😆
            </p>
            <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
              {skills.map((skill, idx) => {
                if (idx > 11) return undefined;
                return (
                  <li className="mr-1.5 mt-2" key={idx}>
                    <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                      {skill.type}
                    </div>
                  </li>
                );
              })}
              <li className="mr-1.5 mt-2 group">
                <a href="/skills" className="group/link">
                  <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300">
                    Show more... <ArrowTopRight />
                  </div>
                </a>
              </li>
            </ul>
          </div>
          {/* <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d55759.26958500522!2d-86.15311702125344!3d39.773585918542636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x886b50ed7c641e59%3A0x7538f6f6b17ecbe8!2s617%20N%20College%20Ave%20%231405%2C%20Indianapolis%2C%20IN%2046204!5e0!3m2!1sen!2sus!4v1694662158202!5m2!1sen!2sus"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="border-4 rounded md:w-[400px] md:h-[300px] mt-8 w-full h-[400px] border-slate-900"
            title="kristina address"
          /> */}
          <div style={{ filter: "grayscale(1)" }}>
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12612.664908521725!2d-122.44841918536592!3d37.7861439998477!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x808580b7adf723cf%3A0xe6cd59f2341f604e!2sSan%20Francisco%2C%20CA%2094115!5e0!3m2!1sen!2sus!4v1732017222993!5m2!1sen!2sus"
              className="border-4 rounded md:w-[400px] md:h-[300px] mt-8 w-full h-[400px] border-slate-900"
              allowfullscreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
            />
          </div>
        </section>
        <section
          id="experience"
          className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
          aria-label="Work experience"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Experience
            </h2>
          </div>
          <div>
            <ol className="group/list">
              {projects.map((project, idx) => {
                if (!project.experience) return undefined;
                return (
                  <li className="mb-12" key={idx}>
                    <div className="group relative grid pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
                      <header
                        className="z-10 mb-2 mt-1 text-xs font-semibold uppercase tracking-wide text-slate-500 sm:col-span-2"
                        aria-label="July to December 2017"
                      >
                        {project.duration}
                      </header>
                      <div className="z-10 sm:col-span-6">
                        <h3 className="font-medium leading-snug text-slate-200">
                          <div>
                            <a
                              className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                              href={project.link}
                              target="_blank"
                              rel="noreferrer"
                              aria-label={project.appName}
                            >
                              <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                              <span>
                                {project.appName}
                                <ArrowTopRight />
                              </span>
                            </a>
                          </div>
                          <div className="text-slate-500" aria-hidden="true">
                            {project.role}
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal">
                          {project.experience}
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used"
                        >
                          {project.skills?.map((s, idx) => {
                            return (
                              <li className="mr-1.5 mt-2" key={idx}>
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  {s}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                    </div>
                  </li>
                );
              })}
            </ol>
            <div className="mt-12">
              <a
                className="inline-flex items-center leading-tight font-semibold text-slate-200 group"
                aria-label="View Full Projects"
                href="/Resume.pdf"
                target="_blank"
                rel="noreferrer"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View Full Resume <ArrowRight />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
        <section
          id="projects"
          className="scroll-mt-16 lg:scroll-mt-24"
          aria-label="Selected projects"
        >
          <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
            <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
              Projects
            </h2>
          </div>
          <div>
            <ul className="group/list">
              {projects.map((project, idx) => {
                if (![0, 1, 2].includes(idx)) return undefined;
                return (
                  <li className="mb-12" key={idx}>
                    <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
                      <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg" />
                      <div className="z-10 sm:order-2 sm:col-span-6">
                        <h3>
                          <a
                            className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300  group/link text-base"
                            href={project.link}
                            target="_blank"
                            rel="noreferrer"
                            aria-label="Spotify Profile"
                          >
                            <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
                            <span>
                              {project.name} <ArrowTopRight />
                            </span>
                          </a>
                          <div className="text-slate-500" aria-hidden="true">
                            {project.role}
                          </div>
                        </h3>
                        <p className="mt-2 text-sm leading-normal whitespace-pre-line">
                          {project.description}
                        </p>
                        <ul
                          className="mt-2 flex flex-wrap"
                          aria-label="Technologies used:"
                        >
                          {project.skills?.map((skill, idx) => {
                            return (
                              <li className="mr-1.5 mt-2" key={idx}>
                                <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                                  {skill}
                                </div>
                              </li>
                            );
                          })}
                        </ul>
                      </div>
                      <img
                        alt=""
                        loading="lazy"
                        width="200"
                        height="48"
                        decoding="async"
                        data-nimg="1"
                        className="rounded border-2 border-slate-200/10 transition group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
                        src={project.image}
                      />
                    </div>
                  </li>
                );
              })}
            </ul>
            <div className="mt-12">
              <a
                className="inline-flex items-center font-medium leading-tight text-slate-200 font-semibold text-slate-200 group"
                aria-label="View Full Project Archive"
                href="/projects"
              >
                <span>
                  <span className="border-b border-transparent pb-px transition group-hover:border-teal-300 motion-reduce:transition-none">
                    View All Projects <ArrowRight />
                  </span>
                </span>
              </a>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Home;
