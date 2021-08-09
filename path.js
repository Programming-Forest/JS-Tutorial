const IntroduceList = ["introduce", "install", "HelloWorld"];
const BasicsList = ["data_struct", "data_type"];
module.exports = [
  {
    title: "시작하기에 앞서..",
    path: "",
    sidebarDepth: 2,
  },
  {
    title: "언어 소개 및 환경 구축",
    children: IntroduceList.map((f) => `Introduce/${f}`),
    sidebarDepth: 2,
  },
  {
    title: "기본 문법 및 자료형",
    children: BasicsList.map((f) => `Basics/${f}`),
    sidebarDepth: 2,
  },
];
