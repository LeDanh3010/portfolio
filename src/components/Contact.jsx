import { useState, useRef } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { EarthCanvas } from "./canvas";
import emailjs from "@emailjs/browser";
import { slideIn } from "../untils/motion";
import BtnBackTop from "./btnBackToTop/BtnBackTop";
import Modal from "../untils/modal";
import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { AnimatePresence } from "framer-motion";

const Contact = () => {
  const formRef = useRef();
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [showModal, setShowModal] = useState(false);
  if (showModal) {
    disablePageScroll();
  } else {
    enablePageScroll();
  }
  const handleCloseModal = () => setShowModal(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    emailjs
      .send(
        "service_z2ufd6n",
        "template_229txh9",
        {
          from_name: form.name,
          from_email: form.email,
          to_name: "Danh",
          message: form.message,
        },
        "Upga7FuYUITJnwws4"
      )
      .then(() => {
        setLoading(false);
        // alert("Thank you.I will get back to you as soon as possible");
        setShowModal(true);
        setForm({
          name: "",
          email: "",
          message: "",
        });
      })
      .catch((e) => {
        console.error("Error sending email: ", e);
        setLoading(false);
        alert("Failed to send email. Please try again later");
      });
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 p-8 rounded-2xl"
      >
        <p className={styles.sectionSubText}>ご連絡ください</p>
        <h3 className={styles.sectionHeadText}>連絡先</h3>
        <form
          ref={formRef}
          onSubmit={handleSubmit}
          className="mt-12 flex flex-col gap-8"
        >
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">お名前</span>
            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">メール</span>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <label className="flex flex-col">
            <span className="text-white font-medium mb-4">メッセージ</span>
            <textarea
              rows={7}
              name="message"
              value={form.message}
              onChange={handleChange}
              className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white rounded-lg outlined-none border-none font-medium"
            />
          </label>
          <button
            type="submit"
            className="bg-tertiary py-3 px-8 outline-none w-fit text-white font-bold shadow-md shadow-primary"
          >
            {loading ? "送信..." : "送信"}
          </button>
        </form>
      </motion.div>
      <motion.div
        variants={slideIn("right", "tween", 0.2, 1)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
      <BtnBackTop />
      <AnimatePresence>
        {showModal && (
          <Modal
            content="ありがとうございます。できるだけ早くお返事いたします。🙂"
            handleCloseModal={handleCloseModal}
          />
        )}
      </AnimatePresence>
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
