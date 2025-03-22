import { m } from "framer-motion";
import { styles } from "../styles";
import ComputersCanvas from "./canvas/Computers";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`absolute inset-0 top-[120px]  max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#1c83e2]" />
          <div className="w-1 sm:h-90 h-40 blue-gradient" />
        </div>
        <div>
          <m.h1
            className={`${styles.heroHeadText} text-white`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 0.5,
              damping: 8,
              stiffness: 100,
            }}
          >
            こんにちは。
            <span className="text-[#1c83e2]">ザインと申します。</span>
          </m.h1>
          <m.p
            className={`${styles.heroSubText} mt-2 text-white-100`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: "spring",
              delay: 2,
              damping: 8,
              stiffness: 100,
            }}
          >
            私は金型および <br className="sm:block hidden" />
            治具の設計をしております。
          </m.p>
        </div>
      </div>
      <ComputersCanvas />
      <div className="absolute xs:bottom-2 bottom-32 w-full flex justify-center items-center">
        <a href="#about">
          <div className="'w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <m.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
