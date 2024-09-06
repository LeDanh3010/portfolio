import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../untils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({ index, info1, info2, info3, title }) => {
  return (
    <motion.div
      variants={fadeIn("", "spring", index * 0.5, 0.75)}
      className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
    >
      <p className="text-white font-black text-[24px]">{title}</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">{info3}</p>
        <p className="text-white tracking-wider text-[18px]">{info1}</p>
        <p className="text-white tracking-wider text-[18px]">{info2}</p>
      </div>
    </motion.div>
  );
};

const Feedbacks = () => {
  return (
    <div className="mt-20 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.heroSubText}>自分について</p>
          <h2 className={styles.heroHeadText}>個人情報</h2>
        </motion.div>
      </div>
      <div className={`${styles.paddingX} -mt-20 pb-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
