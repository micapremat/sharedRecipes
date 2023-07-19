export type Categories = "All Categories" | "Beverages" | "Appetizers" | "Soup/Stews" | "Salads" | "Main dishes" | "Sauces" | "Bread" | "Vegan" | "Gluten-free" | "Others"
export interface Category {
  name: Categories,
  selected: boolean,
}