import { m } from "framer-motion";
import { styles } from "../styles";
import { github } from "../assets";
import { SectionWrapper } from "../hoc";
import { hobbies } from "../constants";
import { fadeIn, textVariant } from "../untils/motion";
import { useState } from "react";
import { LazyLoadImage } from "react-lazy-load-image-component";

const HobbiesCard = ({
  index,
  name,
  description,
  tags,
  image,
  source_code_link,
  link_live,
}) => {
  const [isShow, setIsShow] = useState(false);
  return (
    <m.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="relative bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full"
      >
        <span className="absolute shadow-card overflow-hidden -z-50 inset-[-2px] rounded-2xl before:absolute before:top-[-50%] before:left-[-50%] before:right-[-50%] before:bottom-[-50%] before:bg-[conic-gradient(from_-30deg,#4a437d,#9b8cff)] before:animate-spin-slow blur"></span>
        <div className="relative w-full h-[230px]">
          <LazyLoadImage
            src={image}
            alt="project_image"
            className="w-full h-full object-cover rounded-2xl"
          />

          <div className="absolute inset-0 flex justify-end m-3 card-img_hover">
            <div
              onClick={() => window.open(source_code_link, "_blank")}
              className="black-gradient w-10 h-10 rounded-full flex justify-center items-center cursor-pointer"
            >
              <LazyLoadImage
                src={github}
                alt="source code"
                className="w-1/2 h-1/2 object-contain"
              />
            </div>
          </div>
        </div>

        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          {isShow ? (
            <p className="mt-2 text-secondary text-[14px]  ">{description}</p>
          ) : (
            <p className="mt-2 text-secondary text-[14px] line-clamp-2 ">
              {description}
            </p>
          )}

          <span
            className="text-[15px] blue-text-gradient font-semibold cursor-pointer"
            onClick={() => setIsShow(!isShow)}
          >
            {isShow ? "Show less <<" : "Show more >>"}
          </span>
        </div>

        <div className="mt-4 flex flex-wrap gap-2">
          {tags.map((tag) => (
            <p
              key={`${name}-${tag.name}`}
              className={`text-[16px] ${tag.color} cursor-pointer font-semibold`}
              onClick={() => window.open(link_live, "_blank")}
            >
              #{tag.name}
            </p>
          ))}
        </div>
      </div>
    </m.div>
  );
};

const Hobbies = () => {
  return (
    <>
      <m.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} `}>趣味</p>
        <h2 className={`${styles.sectionHeadText}`}>個人プロジェクト</h2>
      </m.div>

      <div className="w-full flex">
        <m.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]"
        >
          私はいくつかの個人プロジェクトとして、小さなウェブ開発を行っています。もし興味があれば、現在制作中または完成したウェブサイトをぜひご覧ください。GitHubへのリンクを貼ってあり、ソースコードも公開しています。これらのウェブサイトでは、フロントエンドにReact.jsというJavaScriptのライブラリを使用してユーザーインターフェースを作成し、CSSフレームワークにはTailwind
          CSSやBootstrap
          5を使っています。バックエンドにはNode.jsというプラットフォームを使用し、サーバーサイドを構築するためにExpressフレームワークを活用しています。
        </m.p>
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {hobbies.map((project, index) => (
          <HobbiesCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Hobbies, "");
