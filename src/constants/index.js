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
  catiaImg,
  nxImg,
  solidImg,
  cadmeisterImg,
  orcadImg,
  proteusImg,
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
    icon: solidImg,
  },
  {
    title: "Catia",
    icon: catiaImg,
  },
  {
    title: "Cadmeister",
    icon: cadmeisterImg,
  },
  {
    title: "Nx graphic",
    icon: nxImg,
  },
  {
    title: "Orcad",
    icon: orcadImg,
  },
  {
    title: "Proteus",
    icon: proteusImg,
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
      "Orcad、CCSコンパイラ、およびProteusなどのソフトウェアを使用して、駐車システムと指紋認証、順番待ち受付のシステムの設計と開発を行います。",
      "システム障害に関連する問題の管理と対策を行います。",
      "顧客の要求に基づいて新しいシステムを開発します。",
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
      "ボビン製品の設計および図面作成をCadSuperやSolidWorksで行い、Ansysを用いて構造解析などの強度試験も担当します。",
      "ボビン金型の設計や回転溶着機用の治具設計します。",
    ],
  },
];

const testimonials = [
  {
    title: "個人",
    info1: "生年月日:4平成10月30日",
    info2: "現住所:長野県上田市",
  },
  {
    title: "資格",
    info1: "言語:日本語N2JLPT",
    info2: "専攻:メカトロニクス学科",
  },
  {
    title: "希望",
    info1: "年収:430万円",
    info2: "勤務地:日本であればどこでも可",
  },
];

const projects = [
  {
    name: "順番待ち受付システム",
    company: "Btech 有限会社",
    description:
      "自動順番待ちシステムの設計とプログラミングを従事し、このシステムは中央制御ユニットを中心に、タッチスクリーンのチケット発行ポイントやメインディスプレイボード、アンプとスピーカー、タッチセンサー式の呼び出しパネルなどが内部ネットワークを介して連携しています。また、オプションでGSMモデムによる通知機能や、顧客フィードバック用の評価キーボードも含まれます。これらのシステムの設計や開発には、ProteusやOrCADなどのソフトウェアを活用します。",
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
    name: "自動車部品金型",
    company: "Planex 株式会社",
    description:
      "お客さんからの依頼を受けて、インジェクション金型の設計および製作を担当します。主にインパネやバンパーなどの製品に関連するサーフェス設計を行います。またルーフパネル、ヘミングテーブルスやキンテールゲートなどのプレス金型の設計にも従事し、治具に関連する図面作成や生産効率の向上に向けた設計改善も行います。",
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
    name: "ボビン製品設計",
    company: "Tokuden 株式会社",
    description:
      "CadSuperやSolidWorksのソフトでボビンの製品に関連する設計業務に従事し、製品の構造および硬度を解析するためにANSYSソフトウェアを使用して検証を行いました。また、顧客の要求に基づき、製品の改良にも積極的に取り組んできました。さらに、製品の金型設計にも携わり、製造プロセス全体の最適化を目指します。",
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

const hobbies = [
  {
    name: "ポートフォリオ",
    description:
      "このプロジェクトでは、React.jsとTailwind CSSを使用してユーザーインターフェースを構築し、JavaScriptの3DライブラリであるThree.jsを使用して3D画像をレンダリングしました。シングルページのポートフォリオサイトを作成しました。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "tailwindCss",
        color: "green-text-gradient",
      },
      {
        name: "threeJs",
        color: "pink-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "スポティファイアプリ",
    description:
      "Spotifyに似た音楽ストリーミングウェブサイトを構築しました。クライアント側のユーザーインターフェースにはReactJsを使用し、サーバーサイドにはNodeJsを使用しています。また、データベースにはPostgreSQLを採用しています。",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "nodejs",
        color: "green-text-gradient",
      },
    ],
    image: carrent,
    source_code_link: "https://github.com/",
  },
];
export { services, technologies, experiences, testimonials, projects, hobbies };
