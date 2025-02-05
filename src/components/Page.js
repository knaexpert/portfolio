import { ReactComponent as ArrowLeft } from "../assets/svg/arrowLeft.svg";

const Page = ({ title, children }) => (
  <div className="lg:py-24">
    <a
      className="group mb-2 inline-flex items-center font-semibold leading-tight text-teal-300"
      href="/"
    >
      <ArrowLeft /> Kristina Gjozev
    </a>
    <h1 className="text-4xl font-bold tracking-tight text-slate-200 sm:text-5xl">
      {title}
    </h1>
    {children}
  </div>
);

export default Page;
