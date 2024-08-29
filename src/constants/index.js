import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  starbucks,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
  btech,
  tokuden,
  planex,
  cadmeister,
  solidwork,
  Catia,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "自己紹介",
  },
  {
    id: "work",
    title: "勤務",
  },
  {
    id: "contact",
    title: "連絡先",
  },
];

const services = [
  {
    title: "Solidworks",
    icon: web,
  },
  {
    title: "Catia",
    icon: mobile,
  },
  {
    title: "Cadmeister",
    icon: backend,
  },
  {
    title: "Nx graphic",
    icon: creator,
  },
];

const technologies = [
  {
    name: "Catia",
    icon: Catia,
  },
  {
    name: "cadmeister",
    icon: cadmeister,
  },
  {
    name: "solidwork",
    icon: solidwork,
  },
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },

  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },

  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "技術開発",
    company_name: "BTECH 有限会社",
    icon: btech,
    iconBg: "#383E56",
    date: "2014年 9月 - 2017年 8月",
    link: "http://www.btech.com.vn/",
    points: [
      "会社所在:ベトナム",
      "Orcad、CCSコンパイラ、およびProteusなどのソフトウェアを使用して、駐車システムと指紋認証、順番待ち受付のシステムの設計と開発を行う。",
      "システム障害に関連する問題の管理と対策を行う。",
      "顧客の要求に基づいて新しいシステムを開発する。",
    ],
  },
  {
    title: "金型設計",
    company_name: "Planex 株式会社",
    icon: planex,
    iconBg: "#E6DEDD",
    date: "2017年 9月 - 2023年 4月",
    link: "https://planex-jp.co.jp/",
    points: [
      "会社所在:ベトナムと日本",
      "Cadmeister、NX、CATIAなどのソフトウェアを使用し、インパネやバンパーなどの自動車部品に関連する金型のサーフェス設計や作成を担当します。また、振動溶着機用の治具の図面作成も行ます。",
      "2022年8月から2022年10月まで、埼玉車体株式会社へ出張し、CadmeisterとCATIAを用いてRoof Panel、Hemming Table、Skin Tail Gateのプレス型を設計します。",
    ],
  },
  {
    title: "ボビン製品設計",
    company_name: "Tokuden 株式会社",
    icon: tokuden,
    iconBg: "#383E56",
    date: "2023年 7月 - 現在",
    link: "https://www.k-tokuden.co.jp/",
    points: [
      "会社所在:日本",
      "ボビン製品の設計および図面作成をCadSuperやSolidWorksで行い、Ansysを用いて構造解析などの強度試験も担当します",
      "ボビン金型の設計や回転溶着機用の治具設計します。",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Car Rent",
    description:
      "Web-based platform that allows users to search, book, and manage car rentals from various providers, providing a convenient and efficient solution for transportation needs.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "tailwind",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Job IT",
    description:
      "Web application that enables users to search for job openings, view estimated salary ranges for positions, and locate available jobs based on their current location.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "restapi",
        color: "green-text-gradient",
      },
      {
        name: "scss",
        color: "pink-text-gradient",
      },
    ],
    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Trip Guide",
    description:
      "A comprehensive travel booking platform that allows users to book flights, hotels, and rental cars, and offers curated recommendations for popular destinations.",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "supabase",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
