import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textHoverVariant, textVariant } from "../untils/motion";
import { projects } from "../constants";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";
import Modal from "../untils/modal";

const disableBodyScroll = () => {
  document.body.style.overflow = "hidden";
};

const enableBodyScroll = () => {
  document.body.style.overflow = "";
};

const ProjectCard = ({
  index,
  name,
  company,
  description,
  tags,
  image,
  source_code_link,
}) => {
  const [showModal, setShowModal] = useState(false);
  const handleOpenModal = () => setShowModal(true);
  const handleCloseModal = () => setShowModal(false);
  useEffect(() => {
    if (showModal) {
      disableBodyScroll();
    } else {
      enableBodyScroll();
    }
    return () => enableBodyScroll();
  }, [showModal]);
  return (
    <>
      <motion.div
        variants={fadeIn("up", "spring", index * 0.5, 0.75)}
        className="relative"
      >
        <motion.div
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
        >
          <div className="relative w-full h-[230px]">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover rounded-2xl"
            />
            {/* <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <img
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div> */}
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

          {/* <div className="mt-4 flex flex-wrap gap-2">
            {tags.map((tag) => (
              <p
                key={`${name}-${tag.name}`}
                className={`text-[14px] ${tag.color}`}
              >
                #{tag.name}
              </p>
            ))}
          </div> */}

          <div className="mt-4 flex  text-sky-400 cursor-pointer">
            <motion.div
              onClick={handleOpenModal}
              variants={textHoverVariant}
              whileHover="hover"
              whileTap="clicked"
              className="flex flex-row items-center"
            >
              <span className="font-medium">詳細</span>
              <MdKeyboardDoubleArrowRight className="text-[20px]" />
            </motion.div>
          </div>
        </motion.div>
      </motion.div>
      <Modal
        handleCloseModal={handleCloseModal}
        showModal={showModal}
        name={name}
        image={image}
        description={description}
        company={company}
      />
      {/* <div className="relative w-full h-[230px]">
          <img
            src={image}
            alt={name}
            className="w-full h-full object-cover rounded-2xl"
          />
    
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px] line-clamp-3 ">
            {description}
          </p>
        </div> */}
    </>
  );
};

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.heroSubText}`}>勤務</p>
        <h2 className={`${styles.heroHeadText}`}>プロジェクト</h2>
      </motion.div>
      <div className="w-full flex">
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          以下のいくつかのプロジェクトでは、私のスキルと経験を実際の仕事の例を通じて示し、これまでに行ったことを簡潔に説明します。
        </motion.p>
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
