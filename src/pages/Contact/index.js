import { useRef, useState, useEffect } from "react";
import { sendForm } from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Page from "../../components/Page";

const Contact = () => {
  const form = useRef();
  const firstRender = useRef(true);
  const [field, setField] = useState({
    message: "",
    name: "",
    email: "",
  });

  const handleChange = (e, field) => {
    setField((current) => ({
      ...current,
      [field]: e.target.value,
    }));
  };

  const validateEmail = (mail) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
      return true;
    }
    return false;
  };

  useEffect(() => {
    if (firstRender.current) {
      firstRender.current = false;
    }
  }, [field.email, field.message, field.name]);

  const isEnabled =
    field.message && field.name && field.email && validateEmail(field.email);

  const sendEmail = (e) => {
    e.preventDefault();
    if (isEnabled) {
      sendForm(
        "service_8buo5sp",
        "template_wp5f308",
        form.current,
        "user_O5HFMB4vdt5pPNPhH3aqS"
      ).then(
        (result) => {
          console.log(result);
          toast.success(
            "Thank you for getting in touch! I appreciate you contacting us! I will get back in touch with you soon! Have a great day!",
            {
              progress: undefined,
            }
          );
        },
        (error) => {
          console.log(error);
          toast.error(
            "Sorry, could you please reach out to kgj.webservices@gmail.com?",
            {
              progress: undefined,
            }
          );
        }
      );
    } else {
      firstRender.current = false;
    }
  };

  return (
    <Page>
      <div className="py-10 m-auto max-w-[640px]">
        <h5 className="text-center font-sans font-semibold text-3xl text-slate-200 mb-4">Contact Me</h5>
        <p className="text-center text-base mb-2">
          Every amazing partnership begins with a dialogue, and I believe the
          starting point for something extraordinary is a click away. Please
          fill out the form below and I'll be in touch to continue the
          conversation, and see where that takes me - to new products, or new
          visions, or new ways of using technology for shared benefit.
        </p>
        <p className="text-center text-xl">Let's make something great!</p>
        <form ref={form} onSubmit={sendEmail} className="flex flex-col my-5">
          <label
            className={`${
              field.message === "" && !firstRender.current ? "error" : ""
            } text-base mb-1`}
          >
            Please tell me how I can help you <span className="text-red-500">*</span>
          </label>
          <textarea
            name="message"
            value={field.message}
            onChange={(e) => handleChange(e, "message")}
            rows={3}
            className="rounded-sm mb-2 py-2 px-3 text-base text-slate-900"
          />
          <label
            className={`${
              field.name === "" && !firstRender.current ? "error" : ""
            } text-base mb-1`}
          >
            Name <span className="text-red-500">*</span>
          </label>
          <input
            type="text"
            name="user_name"
            value={field.name}
            onChange={(e) => handleChange(e, "name")}
            className="rounded-sm mb-2 py-2 px-3 text-base text-slate-900"
          />
          <label
            className={`${
              (field.email === "" || !validateEmail(field.email)) &&
              !firstRender.current
                ? "error"
                : ""
            } text-base mb-1`}
          >
            Email <span className="text-red-500">*</span>
          </label>
          <input
            type="email"
            name="user_email"
            value={field.email}
            onChange={(e) => handleChange(e, "email")}
            className="rounded-sm mb-2 py-2 px-3 text-base text-slate-900"
          />
          <input
            type="submit"
            value="Submit"
            className="p-2 text-slate-950 disabled:text-slate-400 bg-slate-200 mt-4 rounded-sm cursor-pointer disabled:cursor-not-allowed"
            disabled={!isEnabled}
          />
        </form>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={8000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
      />
    </Page>
  );
};

export default Contact;
