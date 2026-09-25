import zodiacData from "@/data/zodiac.json";
import templates from "@/data/fortune_templates.json";
import { dateToSeed } from "@/lib/seed";

export type Zodiac = (typeof zodiacData.zodiacs)[number];

export interface DailyFortune {
  score: number;
  scorePreamble: string;
  overall: string;
  love: string;
  work: string;
  health: string;
  luckyColor: string;
  luckyItem: string;
}

function mulberry32(seed: number): () => number {
  let s = seed;
  return function () {
    s = (s + 0x6d2b79f5) | 0;
    let t = Math.imul(s ^ (s >>> 15), 1 | s);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

function pick<T>(arr: T[], rand: () => number): T {
  return arr[Math.floor(rand() * arr.length)];
}

function zodiacIdToNum(id: string): number {
  return id.split("").reduce((acc, c) => acc + c.charCodeAt(0), 0);
}

export function generateDailyFortune(zodiacId: string, date: Date): DailyFortune {
  const seed = dateToSeed(date) * 97 + zodiacIdToNum(zodiacId);
  const rand = mulberry32(seed);

  const score = Math.floor(rand() * 5) + 1;
  const scorePreamble = templates.scorePreamble[score.toString() as keyof typeof templates.scorePreamble];
  const overall = pick(templates.overall, rand);
  const love = pick(templates.love, rand);
  const work = pick(templates.work, rand);
  const health = pick(templates.health, rand);
  const luckyColor = pick(templates.luckyColor, rand);
  const luckyItem = pick(templates.luckyItem, rand);

  return { score, scorePreamble, overall, love, work, health, luckyColor, luckyItem };
}

export function getAllZodiacs(): Zodiac[] {
  return zodiacData.zodiacs;
}

export function getZodiac(id: string): Zodiac | undefined {
  return zodiacData.zodiacs.find((z) => z.id === id);
}
