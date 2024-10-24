import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { styles } from "../styles";
import { experiences } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../untils/motion";
import { m } from "framer-motion";
import { animationVariants } from "../untils/motion";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ExperienceCard = ({ experience }) => {
  const handleClick = () => {
    window.open(experience.link, "_blank");
  };
  return (
    <VerticalTimelineElement
      contentStyle={{
        background: "#101c30",
        color: "#fff",
      }}
      contentArrowStyle={{ borderRight: "7px solid  #101c30" }}
      date={experience.date}
      iconStyle={{ background: experience.iconBg }}
      icon={
        <m.div
          className="flex justify-center items-center w-full h-full cursor-pointer"
          variants={animationVariants}
          initial="initial"
          whileHover="hover"
          whileTap="clicked"
          onClick={handleClick}
        >
          <LazyLoadImage
            src={experience.icon}
            alt={experience.company_name}
            className="w-[60%] h-[60%] object-contain"
            onClick={handleClick}
          />
        </m.div>
      }
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{experience.title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {experience.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {experience.points.map((point, index) => (
          <>
            <li
              key={`experience-point-${index}`}
              className="text-white-100 text-[14px] pl-1 tracking-wider"
            >
              {point}
            </li>
          </>
        ))}
      </ul>
    </VerticalTimelineElement>
  );
};

const Experience = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          これまでにやってきたこと
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>職歴</h2>
      </m.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard
              key={`experience-${index}`}
              experience={experience}
            />
          ))}
        </VerticalTimeline>
      </div>
    </>
  );
};

export default SectionWrapper(Experience, "work");
