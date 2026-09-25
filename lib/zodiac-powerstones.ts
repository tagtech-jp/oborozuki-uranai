export type ZodiacPowerStone = {
  zodiacId: string;
  nameJa: string;
  nameEn: string;
  meaning: string;
  colorFrom: string;
  colorTo: string;
  amazonUrl: string;
  available: boolean;
};

export const ZODIAC_POWERSTONES: ZodiacPowerStone[] = [
  {
    zodiacId: "aries",
    nameJa: "カーネリアン",
    nameEn: "Carnelian",
    meaning: "行動力と情熱を呼び覚ます石",
    colorFrom: "#E25822",
    colorTo: "#FF6F3C",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90hibikurasu%E3%80%91%E3%82%AB%E3%83%BC%E3%83%8D%E3%83%AA%E3%82%A2%E3%83%B3-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E5%A4%A9%E7%84%B6%E7%9F%B3-%E3%82%AA%E3%83%AC%E3%83%B3%E3%82%B8/dp/B0FTLN7M7Z?sr=8-7&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=5f6228b74371f54f355a8273a89f06f0&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "taurus",
    nameJa: "ローズクォーツ",
    nameEn: "Rose Quartz",
    meaning: "愛と調和を育む石",
    colorFrom: "#F4A6B8",
    colorTo: "#FFC0CB",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90hibikurasu%E3%80%91%E3%83%AD%E3%83%BC%E3%82%BA%E3%82%AF%E3%82%A9%E3%83%BC%E3%83%84-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E5%A4%A9%E7%84%B6%E7%9F%B3-%E7%B4%85%E7%9F%B3%E8%8B%B1/dp/B0B96GQWJ8?sr=8-6&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=61cad478c2177314cd05a892fc455b7c&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "gemini",
    nameJa: "シトリン",
    nameEn: "Citrine",
    meaning: "知性と豊かさを引き寄せる石",
    colorFrom: "#E4D00A",
    colorTo: "#FFD700",
    amazonUrl: "https://www.amazon.co.jp/ARUAURA-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%83%9E%E3%82%A4%E3%83%B3%E3%83%89%E3%83%95%E3%83%AB%E3%83%8D%E3%82%B9-AURA0008/dp/B0FTGBZF87?__mk_ja_JP=%E3%82%AB%E3%82%BF%E3%82%AB%E3%83%8A&crid=34Z1EXZE85IYA&sprefix=%E3%82%B7%E3%83%88%E3%83%AA%E3%83%B3+%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88+%E5%A4%A9%E7%84%B6%E7%9F%B3%2Caps%2C241&sr=8-9&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&linkCode=ll2&tag=oborozuki22-22&linkId=a13d96e6d32ce213fcd78db8550b807c&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "cancer",
    nameJa: "ムーンストーン",
    nameEn: "Moonstone",
    meaning: "月の光が宿る感受性の石",
    colorFrom: "#E6E6FA",
    colorTo: "#F8F8FF",
    amazonUrl: "https://www.amazon.co.jp/KOREWA-%E3%83%A0%E3%83%BC%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%83%92%E3%83%BC%E3%83%AA%E3%83%B3%E3%82%B0%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3%E3%81%AE%E4%B8%80%E3%81%A4-Bracelet-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3/dp/B0DMZG5DHR?sr=8-7&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&linkCode=ll2&tag=oborozuki22-22&linkId=bade4693b242385880fc0faae0ae6773&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "leo",
    nameJa: "タイガーアイ",
    nameEn: "Tiger's Eye",
    meaning: "王者の威厳と自信を授ける石",
    colorFrom: "#B8860B",
    colorTo: "#DAA520",
    amazonUrl: "https://www.amazon.co.jp/MASHISO-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%82%A4%E3%82%A8%E3%83%AD%E3%83%BC%E3%82%BF%E3%82%A4%E3%82%AC%E3%83%BC%E3%82%A2%E3%82%A4-%E3%80%90%E9%87%91%E9%81%8BUP%E3%83%BB%E4%BB%95%E4%BA%8B%E9%81%8BUP%E3%80%91-%E3%82%A8%E3%83%8D%E3%83%AB%E3%82%AE%E3%83%BC%E3%83%81%E3%83%A3%E3%83%BC%E3%82%B8/dp/B0FWS5J3WH?sr=8-5&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=1a96ec82ca2fa6221ff82fce12986d44&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "virgo",
    nameJa: "アマゾナイト",
    nameEn: "Amazonite",
    meaning: "冷静さと調和をもたらす石",
    colorFrom: "#4FB3A9",
    colorTo: "#7FFFD4",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90-%E7%A6%8F%E7%B8%81%E9%96%A3-%E3%80%91%E9%81%B8%E3%81%B9%E3%82%8B20%E7%A8%AE%E9%A1%9E%EF%BC%81%EF%BC%886-8-10mm%EF%BC%893%E3%82%B5%E3%82%A4%E3%82%BA%EF%BC%81%E5%A4%A9%E7%84%B6%E7%9F%B3%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88%EF%BC%81%E3%82%A2%E3%83%9E%E3%82%BE%E3%83%8A%E3%82%A4%E3%83%88%EF%BC%888mm%EF%BC%89/dp/B08PSTG3CN?sr=8-5&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&psc=1&linkCode=ll2&tag=oborozuki22-22&linkId=942fcbec475084c2db74a39250668dcb&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "libra",
    nameJa: "ラピスラズリ",
    nameEn: "Lapis Lazuli",
    meaning: "天空の知恵を宿す石",
    colorFrom: "#26619C",
    colorTo: "#4682B4",
    amazonUrl: "https://www.amazon.co.jp/%E7%9F%B3%E8%A1%97-%E3%83%A9%E3%83%94%E3%82%B9%E3%83%A9%E3%82%BA%E3%83%AA-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E8%89%B2%E5%90%88%E3%81%84%E8%89%AF%E5%A5%BD-%E5%A4%A9%E7%A9%BA%E3%81%AE%E7%A0%B4%E7%89%87/dp/B01NAQJOTU?sr=8-5&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=6b890f58e42a8b76e198b13d10ac6193&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "scorpio",
    nameJa: "オブシディアン",
    nameEn: "Obsidian",
    meaning: "闇を払う神秘の黒い石",
    colorFrom: "#1C1C1C",
    colorTo: "#4A4A4A",
    amazonUrl: "https://www.amazon.co.jp/%E3%81%8D%E3%82%89%E3%81%8D%E3%82%89%E3%81%B7%E3%82%93%E3%81%B7%E3%82%93%E4%B8%B8-%E5%A4%A9%E7%84%B6%E7%9F%B3%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%82%AA%E3%83%96%E3%82%B7%E3%83%87%E3%82%A3%E3%82%A2%E3%83%B3-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-BRS-008/dp/B0FZHK36TM?sr=8-5&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&linkCode=ll2&tag=oborozuki22-22&linkId=f96a3af1c70b1f9359993e950ddf5275&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "sagittarius",
    nameJa: "ターコイズ",
    nameEn: "Turquoise",
    meaning: "旅と自由を守護する石",
    colorFrom: "#40E0D0",
    colorTo: "#48D1CC",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90%E4%BA%AC%E7%8F%A0%E5%A0%82%E3%80%91%E3%82%BF%E3%83%BC%E3%82%B3%E3%82%A4%E3%82%BA-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%82%BF%E3%83%BC%E3%82%B3%E3%82%A4%E3%82%BA%C3%97%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%9E%E3%83%AA%E3%83%B3/dp/B0B293W93C?sr=8-9&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=a8fcacaf0223f9fad34398de341a9ff2&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "capricorn",
    nameJa: "ガーネット",
    nameEn: "Garnet",
    meaning: "努力と継続を支える石",
    colorFrom: "#733635",
    colorTo: "#B22222",
    amazonUrl: "https://www.amazon.co.jp/%E3%82%AC%E3%83%BC%E3%83%8D%E3%83%83%E3%83%88-%E3%83%94%E3%83%B3%E3%82%AF%E3%83%88%E3%83%AB%E3%83%9E%E3%83%AA%E3%83%B3-%E3%83%A0%E3%83%BC%E3%83%B3%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%83%AC%E3%83%87%E3%82%A3%E3%83%BC%E3%82%B9/dp/B0DWXHYNX9?sr=8-15&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=5a610e08466729de18cbb1d8da7ff5d9&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "aquarius",
    nameJa: "アメジスト",
    nameEn: "Amethyst",
    meaning: "直感と霊性を高める紫の石",
    colorFrom: "#9966CC",
    colorTo: "#BA55D3",
    amazonUrl: "https://www.amazon.co.jp/%E3%80%90hinryo%E3%80%91-AAAAA-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E3%83%96%E3%83%A9%E3%82%B8%E3%83%AB%E7%94%A3-%E5%A4%A9%E7%84%B6%E7%9F%B3-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-8mm-%E3%82%A2%E3%83%A1%E3%82%B8%E3%82%B9%E3%83%88/dp/B0774J7D32?sr=8-6&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&linkCode=ll2&tag=oborozuki22-22&linkId=359627e4e6f29be17bf5f20682427d26&ref_=as_li_ss_tl",
    available: true,
  },
  {
    zodiacId: "pisces",
    nameJa: "アクアマリン",
    nameEn: "Aquamarine",
    meaning: "海の静けさを宿す癒しの石",
    colorFrom: "#7FFFD4",
    colorTo: "#AFEEEE",
    amazonUrl: "https://www.amazon.co.jp/%E7%9F%B3%E6%B5%81%E9%80%9A%E3%82%BB%E3%83%B3%E3%82%BF%E3%83%BC-%E3%83%91%E3%83%AF%E3%83%BC%E3%82%B9%E3%83%88%E3%83%BC%E3%83%B3-%E3%83%96%E3%83%AC%E3%82%B9%E3%83%AC%E3%83%83%E3%83%88-%E9%81%B8%E3%81%B9%E3%82%8B60%E7%A8%AE%E9%A1%9E-%E3%82%A2%E3%82%AF%E3%82%A2%E3%83%9E%E3%83%AA%E3%83%B3%E3%82%B8%E3%82%A7%E3%83%BC%E3%83%89/dp/B0C7PPCQ77?sr=8-6&ufe=app_do%3Aamzn1.fos.d8e7ee72-073f-4b97-8ec0-59c18d6dfebe&th=1&psc=1&linkCode=ll2&tag=oborozuki22-22&linkId=9cd45562f4e6509c3d65774879381a39&ref_=as_li_ss_tl",
    available: true,
  },
];

export function getPowerStoneByZodiacId(
  zodiacId: string
): ZodiacPowerStone | undefined {
  return ZODIAC_POWERSTONES.find((s) => s.zodiacId === zodiacId);
}
