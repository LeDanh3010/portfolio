import { Tilt } from "react-tilt";
import { m } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../untils/motion";
import { SectionWrapper } from "../hoc/index";
import { LazyLoadImage } from "react-lazy-load-image-component";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <m.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="relative"
    >
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <div className=" w-full h-[230px]">
          <LazyLoadImage
            src={icon}
            alt="web-development"
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{title}</h3>
        </div>
      </Tilt>
    </m.div>
  );
};

const About = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={styles.sectionSubText}>自己紹介</p>
        <h2 className={styles.sectionHeadText}>概要</h2>
      </m.div>
      <m.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        私はベトナムのニャチャン市出身で、日本に住んで働いて約4年になります。主な仕事は、SolidWorks、CATIA、Cadmeisterなどの3Dおよび2Dデザインソフトを使用して、プラスチック製品、治具、射出成形金型に関連する図面を作成することです。また、Ansysなどの解析ソフトを使用して、プラスチック製品の構造や硬度を解析しています。
      </m.p>
      <div className="mt-20 flex flex-wrap gap-7">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
