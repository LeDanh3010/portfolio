import { useState, useEffect } from "react";
import { GrLinkTop } from "react-icons/gr";
const BtnBackTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      // Check if the user has scrolled to the bottom of the page
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          className="fixed bottom-4 right-4 p-3 bg-blue-500 bg-opacity-30 text-white rounded-full shadow-lg hover:bg-opacity-100"
          onClick={scrollToTop}
        >
          <GrLinkTop className="text-xl " />
        </button>
      )}
    </>
  );
};

export default BtnBackTop;
