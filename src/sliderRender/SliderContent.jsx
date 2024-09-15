import videoFile1 from "../assets/video/mold.mp4";
import videoFile2 from "../assets/video/seihin.mp4";
import videoFile3 from "../assets/video/seihin1.mp4";
import videoFile4 from "../assets/video/mold1.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from "react-responsive-carousel";
import { useState } from "react";
import { RotatingLines } from "react-loader-spinner";
import { LazyLoadImage } from "react-lazy-load-image-component";

const SliderContent = ({ name, images }) => {
  const videos = [videoFile2, videoFile3, videoFile4, videoFile1];
  const [loadingStates, setLoadingStates] = useState(
    new Array(videos.length).fill(true)
  );

  const handleVideoLoad = (index) => {
    setLoadingStates((prevStates) => {
      const newState = [...prevStates];
      newState[index] = false;
      return newState;
    });
  };
  switch (name) {
    case "ボビン製品設計":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          {videos.map((video, index) => (
            <div key={index} className="relative">
              {loadingStates[index] && (
                <div className="absolute inset-0 flex items-center justify-center bg-transparent">
                  <RotatingLines
                    visible={true}
                    height="96"
                    width="96"
                    strokeColor="#1c83e2"
                    strokeWidth="5"
                    animationDuration="0.75"
                    ariaLabel="rotating-lines-loading"
                  />
                </div>
              )}
              <video
                src={video}
                autoPlay
                loop
                muted
                loading="lazy"
                className={`w-full h-full object-cover sm:rounded-2xl rounded-xl ${
                  loadingStates[index] ? "opacity-0" : "opacity-100"
                }`}
                onLoadedData={() => handleVideoLoad(index)}
              />
            </div>
          ))}
        </Carousel>
      );
    case "自動車部品金型":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          <LazyLoadImage
            src={images.meisterWork}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <LazyLoadImage
            src={images.catiaWork}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <LazyLoadImage
            src={images.jig}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <LazyLoadImage
            src={images.product}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <LazyLoadImage
            src={images.product1}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
        </Carousel>
      );
    case "順番待ち受付システム":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          <LazyLoadImage
            src={images.queue2}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <LazyLoadImage
            src={images.queue}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
        </Carousel>
      );

    default:
      return null;
  }
};

export default SliderContent;
