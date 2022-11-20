import { Description, Categories } from "./types";

type RadioItems = {
  title: Categories;
  description: Description;
  color: "whatsapp" | "facebook" | "yellow" | "red";
}[];

export const RADIO_ITEMS: RadioItems = [
  {
    title: "Do",
    description: "期限や影響があるタスク",
    color: "whatsapp",
  },
  {
    title: "Decide",
    description: "長期的成功に関わる、期限が不明確なタスク",
    color: "facebook",
  },
  {
    title: "Delegate",
    description: "自分のスキルを必要としないが、こなさなければならないタスク",
    color: "yellow",
  },
  {
    title: "Delete",
    description: "気が散るようなことや、不必要なタスク",
    color: "red",
  },
];
