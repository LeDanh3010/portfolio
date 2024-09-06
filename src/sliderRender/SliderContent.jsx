import videoFile1 from "../assets/video/mold.mp4";
import videoFile2 from "../assets/video/seihin.mp4";
import videoFile3 from "../assets/video/seihin1.mp4";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const SliderContent = (name, image) => {
  switch (name) {
    case "ボビン製品設計":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          <video
            src={videoFile2}
            autoPlay
            loop
            muted
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <video
            src={videoFile3}
            autoPlay
            loop
            muted
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <video
            src={videoFile1}
            autoPlay
            loop
            muted
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
        </Carousel>
      );
    case "自動車部品金型":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          <img
            src={image.meisterWork}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <img
            src={image.catiaWork}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <img
            src={image.jig}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <img
            src={image.product}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
          <img
            src={image.product1}
            alt={name}
            loading="lazy"
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
          />
        </Carousel>
      );
    case "順番待ち受付システム":
      return (
        <Carousel showStatus={false} showThumbs={false}>
          <img
            src={image.queue2}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
            loading="lazy"
          />
          <img
            src={image.queue}
            alt={name}
            className="w-full h-full object-cover sm:rounded-2xl rounded-xl"
            loading="lazy"
          />
        </Carousel>
      );

    default:
      return null;
  }
};

export default SliderContent;
