import { useState } from "react";
import { m } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textHoverVariant, textVariant } from "../untils/motion";
import { projects } from "../constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Modal from "../untils/modal";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { AnimatePresence } from "framer-motion";
import { disablePageScroll, enablePageScroll } from "scroll-lock";

const ProjectCard = ({ index, name, company, description, image, poster }) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  if (showModal) {
    disablePageScroll();
  } else {
    enablePageScroll();
  }
  return (
    <>
      <m.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="relative "
      >
        <span className="absolute shadow-card overflow-hidden -z-50 inset-[-2px] rounded-2xl before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] before:bg-[conic-gradient(from_-30deg,#4a437d,#9b8cff)] before:animate-spin-slow blur"></span>
        <m.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <LazyLoadImage
              src={poster}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
          </div>
          <div className="mt-5">
            <h3 className="text-white font-bold text-[24px]">{name}</h3>
            <p className="mt-2 text-secondary text-[15px] font-medium">
              {company}
            </p>
            <p className="mt-2 text-secondary text-[14px] line-clamp-2 ">
              {description}
            </p>
          </div>
          <div className="mt-4 flex  text-sky-400 cursor-pointer">
            <m.div
              onClick={handleOpenModal}
              variants={textHoverVariant}
              whileHover="hover"
              whileTap="clicked"
              className="flex flex-row items-center"
            >
              <span className="font-medium">詳細</span>
              <MdKeyboardDoubleArrowRight className="text-[20px]" />
            </m.div>
          </div>
        </m.div>
      </m.div>
      <AnimatePresence>
        {showModal && (
          <Modal
            handleCloseModal={handleCloseModal}
            name={name}
            image={image}
            description={description}
            company={company}
          />
        )}
      </AnimatePresence>
    </>
  );
};

const Works = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>勤務</p>
        <h2 className={`${styles.sectionHeadText}`}>プロジェクト</h2>
      </m.div>
      <div className="w-full flex">
        <m.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          以下のいくつかのプロジェクトでは、私のスキルと経験を実際の仕事の例を通じて示し、これまでに行ったことを簡潔に説明します。
        </m.p>
      </div>
      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Works, "");
