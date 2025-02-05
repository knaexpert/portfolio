import "./styles.css";
import { skills } from "../../contants";
import Page from "../../components/Page";

const Skills = () => {
  return (
    <Page title="All Skills">
      <table id="content" className="mt-12 w-full border-collapse text-left">
        <thead className="sticky top-0 z-10 border-b border-slate-300/10 bg-slate-900/75 px-6 py-5 backdrop-blur">
          <tr>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Skill
            </th>
            <th className="py-4 pr-8 text-sm font-semibold text-slate-200">
              Years of Experience
            </th>
          </tr>
        </thead>
        <tbody>
          {skills.map((skill, i) => {
            return (
              <tr
                className="border-b border-slate-300/10 last:border-none"
                key={i}
              >
                <td className="py-4 pr-4 align-top font-semibold leading-snug text-slate-200">
                  {skill.type}
                </td>
                <td>{`${skill.expertise} with ${skill.years} years of experience`}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </Page>
  );
};

export default Skills;
