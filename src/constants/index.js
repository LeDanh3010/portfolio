import {
  javascript,
  html,
  css,
  reactjs,
  redux,
  nodejs,
  mongodb,
  git,
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
  seihin,
  meisterWork,
  catiaWork,
  queue,
  queue2,
  product,
  product1,
  jig,
  projectIt,
  projectItMusic,
  brainwave,
  aspark,
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
    company_name: "BTECH 会社",
    icon: btech,
    iconBg: "#383E56",
    date: "2014年 9月 - 2019年 7月",
    link: "http://www.btech.com.vn/",
    points: [
      "会社所在:ベトナム",
      "Orcad、CCSコンパイラ、およびProteusなどのソフトウェアを使用して、駐車システムと指紋認証、順番待ち受付のシステムのハードウェアの設計と開発を行います。",
      "システム障害に関連する問題の管理と対策を行います。",
      "顧客の要求に基づいて新しいシステムを開発します。",
    ],
  },
  {
    title: "金型設計",
    company_name: "Planex 株式会社",
    icon: planex,
    iconBg: "#E6DEDD",
    date: "2019年 7月 - 2024年 10月",
    link: "https://planex-jp.co.jp/",
    points: [
      "会社所在:ベトナムと日本",
      "Cadmeister、NX、CATIAなどのソフトウェアを使用し、インパネやバンパーなどの自動車部品に関連する金型のサーフェス設計や作成を担当します。また、振動溶着機用の治具の図面作成も行ます。",
      "2022年8月から2022年10月まで、埼玉車体株式会社へ出張し、CadmeisterとCATIAを用いてRoof Panel、Hemming Table、Skin Tail Gateのプレス型を設計します。",
    ],
  },
  // {
  //   title: "ボビン製品設計",
  //   company_name: "Tokuden 株式会社",
  //   icon: tokuden,
  //   iconBg: "#383E56",
  //   date: "2023年 4月 - 2024年 10月",
  //   link: "https://www.k-tokuden.co.jp/",
  //   points: [
  //     "会社所在:日本",
  //     "ボビン製品の設計および図面作成をCadSuperやSolidWorksで行い、Ansysを用いて構造解析などの強度試験も担当します。",
  //     "ボビン金型の設計や回転溶着機用の治具設計します。",
  //     "サンプル試作、実験・評価、データ収集および分析も可能です,。また、Excelを使用して、評価実験データのレポート作成および提出も行っています。",
  //   ],
  // },
  {
    title: "カメラ部品治具設計",
    company_name: "アスパーク 株式会社",
    icon: aspark,
    iconBg: "#383E56",
    date: "2024年 11月 - 現在",
    link: "https://www.aspark.co.jp/",
    points: [
      "会社所在:日本",
      "カメラ部品治具の設計および図面作成をSolidWorksで行い、3D測定機で製品の測定も担当します。",
    ],
  },
];

const testimonials = [
  {
    title: "個人",
    info3: "名前:グエン レ ザイン",
    info1: "生年月日:4平成10月30日",
    info2: "現住所:山形県米沢市",
  },
  {
    title: "資格",
    info1: "言語:日本語N2JLPT",
    info3: "基本情報技術者試験：勉強中",
    info2: "専攻:メカトロニクス学科",
  },
  {
    title: "希望",
    info1: "年収:400万円以上",
    info2: "勤務地:日本であればどこでも可",
    info3: "",
  },
];

const projects = [
  // {
  //   name: "ボビン製品設計",
  //   company: "Tokuden 株式会社",
  //   description:
  //     "CadSuperやSolidWorksのソフトでボビンの製品に関連する設計業務に従事し、製品の構造および硬度を解析するためにANSYSソフトウェアを使用して検証を行いました。また、顧客の要求に基づき、製品の改良にも積極的に取り組んできました。さらに、製品の金型設計にも携わり、製造プロセス全体の最適化を目指します。",
  //   tags: [
  //     {
  //       name: "nextjs",
  //       color: "blue-text-gradient",
  //     },
  //     {
  //       name: "supabase",
  //       color: "green-text-gradient",
  //     },
  //     {
  //       name: "css",
  //       color: "pink-text-gradient",
  //     },
  //   ],
  //   poster: solidImg,
  //   image: { solidImg, seihin },
  // },
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
    poster: meisterWork,
    image: { meisterWork, catiaWork, product, product1, jig },
  },
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
    poster: queue2,
    image: { queue, queue2 },
  },
];

const hobbies = [
  {
    name: "Brainwave",
    description:
      "React.jsとTailwind CSSを使用して、パララックス効果と弁当箱レイアウトを持つモダンなウェブサイトを構築する。",
    tags: [
      {
        name: "Link Live",
        color: "green-text-gradient",
      },
    ],
    image: brainwave,
    source_code_link: "https://github.com/LeDanh3010/BrainwaveApp",
    link_live: "https://ledanh3010.github.io/BrainwaveApp/",
  },
  {
    name: "スポティファイアプリ",
    description:
      "Spotifyに似た音楽アプリを構築しています。フロントエンドではReact.jsを使用し、Axiosパッケージを使ってブラウザからサーバーへAPIコールを行い、ユーザー認証にはJSON Web Tokenを使用しています。バックエンドではNode.jsプラットフォームを使ってサーバーサイドを構築し、データベースにはリレーショナルデータベースであるPostgreSQLを使用します。",
    tags: [
      {
        name: "Link Live",
        color: "green-text-gradient",
      },
    ],
    image: projectItMusic,
    source_code_link: "https://github.com/LeDanh3010/music-app",
    link_live: "https://ledanh3010.github.io/Music-ui/",
  },
  {
    name: "ポートフォリオ",
    description:
      "React.jsとTailwind CSSを使用してユーザーインターフェースを構築し、react three fiberというライブラリを使用して3D画像をレンダリングしました。シングルページのポートフォリオサイトを作成します。",
    tags: [
      {
        name: "Link Live",
        color: "green-text-gradient",
      },
    ],
    image: projectIt,
    source_code_link: "https://github.com/LeDanh3010/portfolio",
    link_live: "https://ledanh3010.github.io/portfolio/",
  },
];
export { services, technologies, experiences, testimonials, projects, hobbies };
