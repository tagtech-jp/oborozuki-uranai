export type AffiliateBanner = {
  id: string;
  provider: "a8" | "moshimo";
  href: string;
  imgSrc: string;
  imgWidth: number;
  imgHeight: number;
  trackingSrc: string;
  trackingProtocolRelative?: boolean;
  hrefProtocolRelative?: boolean;
  alt?: string;
};

export const affiliateBanners: AffiliateBanner[] = [
  // A8 #1 (120x60) - 12星座詳細ページ配置
  {
    id: "a8-1",
    provider: "a8",
    href: "https://px.a8.net/svt/ejp?a8mat=4B3WJB+6HDYOQ+5N7K+5ZMCH",
    imgSrc:
      "https://www21.a8.net/svt/bgt?aid=260522615392&wid=002&eno=01&mid=s00000026336001006000&mc=1",
    imgWidth: 120,
    imgHeight: 60,
    trackingSrc: "https://www11.a8.net/0.gif?a8mat=4B3WJB+6HDYOQ+5N7K+5ZMCH",
  },
  // A8 #2 (468x60) - 12星座詳細ページ配置
  {
    id: "a8-2",
    provider: "a8",
    href: "https://px.a8.net/svt/ejp?a8mat=4B3WJB+6LJZ5E+GE+NUMHT",
    imgSrc:
      "https://www20.a8.net/svt/bgt?aid=260522615399&wid=001&eno=01&mid=s00000000059004006000&mc=1",
    imgWidth: 468,
    imgHeight: 60,
    trackingSrc: "https://www16.a8.net/0.gif?a8mat=4B3WJB+6LJZ5E+GE+NUMHT",
  },
  // A8 #3 (468x60) - トップページ配置
  {
    id: "a8-3",
    provider: "a8",
    href: "https://px.a8.net/svt/ejp?a8mat=4B3WJB+6D7XGA+4N6C+BYLJL",
    imgSrc:
      "https://www27.a8.net/svt/bgt?aid=260522615385&wid=002&eno=01&mid=s00000021666002009000&mc=1",
    imgWidth: 468,
    imgHeight: 60,
    trackingSrc: "https://www10.a8.net/0.gif?a8mat=4B3WJB+6D7XGA+4N6C+BYLJL",
  },
  // もしも (380x60) - トップページ配置
  {
    id: "moshimo-1",
    provider: "moshimo",
    href: "//af.moshimo.com/af/c/click?a_id=5580938&p_id=54&pc_id=54&pl_id=1221",
    imgSrc: "//image.moshimo.com/af-img/0032/000000001221.gif",
    imgWidth: 380,
    imgHeight: 60,
    trackingSrc:
      "//i.moshimo.com/af/i/impression?a_id=5580938&p_id=54&pc_id=54&pl_id=1221",
    hrefProtocolRelative: true,
    trackingProtocolRelative: true,
  },
];
