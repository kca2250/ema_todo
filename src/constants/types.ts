export type Categories = "Do" | "Decide" | "Delegate" | "Delete";

export type Description =
  | "期限や影響があるタスク"
  | "長期的成功に関わる、期限が不明確なタスク"
  | "自分のスキルを必要としないが、こなさなければならないタスク"
  | "気が散るようなことや、不必要なタスク";

export type TITLE_AND_DESCRIPTION = {
  category: Categories;
  description: Description;
};

export type Todo = {
  dueDate: string;
  content: string;
  category: Categories;
};

export type List = Todo[];
