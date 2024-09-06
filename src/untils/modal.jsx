import { motion } from "framer-motion";
import { styles } from "../styles";
import { OverlayScrollbarsComponent } from "overlayscrollbars-react";
import "overlayscrollbars/overlayscrollbars.css";
import { AnimatePresence } from "framer-motion";
import { backdropVariant, modalVariant } from "./motion";

import SliderContent from "../sliderRender/SliderContent";

const Modal = ({
  name,
  image,
  handleCloseModal,
  description,
  showModal,
  company,
}) => {
  return (
    <AnimatePresence>
      {showModal && (
        <motion.div
          className="flex justify-center items-center fixed inset-0 sm:p-16 py-16 bg-black bg-opacity-50 z-50 "
          variants={backdropVariant}
          initial="hidden"
          animate="visible"
          onClick={handleCloseModal}
        >
          <motion.div
            className={`${styles.padding} flex max-w-6xl bg-tertiary sm:max-h-[720px] max-h-[620px] sm:rounded-2xl rounded-xl relative bottom-0 top-0`}
            onClick={(e) => e.stopPropagation()}
            variants={modalVariant}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            <OverlayScrollbarsComponent
              options={{ scrollbars: { autoHide: "scroll" } }}
              className="flex relative w-full left-0 bottom-0 px-2 carousel-style"
            >
              {SliderContent(name, image)}
              <div className="w-full mt-3">
                <h3 className="text-white font-bold sm:text-[24px] text-[20px]">
                  {name}
                </h3>
                <span className="mt-2 text-secondary sm:text-[19px] text-[16px] font-medium">
                  {company}
                </span>
                <p className="mt-2 text-secondary sm:text-[18px] text-[15px] text-justify">
                  {description}
                </p>
              </div>
            </OverlayScrollbarsComponent>
            <button
              className="absolute right-5 top-1 sm:text-[30px] text-[23px] font-bold"
              onClick={handleCloseModal}
            >
              &times;
            </button>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Modal;
