import { m } from "framer-motion";
import { styles } from "../styles";
import { staggerContainer } from "../untils/motion";

const SectionWrapper = (Component, idName) =>
  function HOC() {
    return (
      <m.section
        variants={staggerContainer()}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto relative z-auto`}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </m.section>
    );
  };
export default SectionWrapper;
