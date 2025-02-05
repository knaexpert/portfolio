import { ReactComponent as ArrowTopRight } from "../../assets/svg/arrowTopRight.svg";
import Page from "../../components/Page";
import { projects } from "../../contants";

function Projects() {
  return (
    <Page title="All Projects">
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Year
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Project
            </th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">
              Made at
            </th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">
              Preview
            </th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">
              Built with
            </th>
            <th className="hidden lg:table-cell py-4 pr-8 text-sm font-semibold text-slate-200">
              Link
            </th>
          </tr>
        </thead>
        <tbody>
          {projects.map((project, i) => {
            return (
              <tr
                className="border-b border-slate-300/10 last:border-none"
                key={i}
              >
                <td className="py-4 pr-4 align-top text-sm">{project.year}</td>
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  <p className="hidden lg:block">{project.appName}</p>
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={project.name}
                    className="lg:hidden flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                  >
                    <p>
                      {project.appName}
                    </p>{" "}
                    <ArrowTopRight />
                  </a>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">{project.name}</td>
                <td className="hidden py-4 pr-4 align-top lg:table-cell">
                  <div className="pr-4">
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
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <ul
                    className="flex flex-wrap"
                    aria-label="Technologies used"
                  >
                    {project.skills.map((skill, idx) => {
                      return (
                        <li className="mr-1.5 mt-2" key={idx}>
                          <div className="flex items-center rounded-full bg-teal-400/10 px-3 py-1 text-xs font-medium leading-5 text-teal-300 ">
                            {skill}
                          </div>
                        </li>
                      );
                    })}
                  </ul>
                </td>
                <td className="hidden py-4 pr-4 align-top text-sm lg:table-cell">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noreferrer"
                    aria-label={project.name}
                    className="flex items-center font-medium leading-tight text-slate-200 hover:text-teal-300 focus-visible:text-teal-300 group/link text-sm"
                  >
                    <p className="max-w-[150px] truncate">
                      {project.link.replace("https://", "")}
                    </p>{" "}
                    <ArrowTopRight />
                  </a>
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Page>
  );
}

export default Projects;
