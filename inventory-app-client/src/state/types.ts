export enum ApiTagTypes {
  DASHBOARD_METRICS = 'DashboardMetrics',
  PRODUCTS = 'Products',
  USERS = 'Users',
  EXPENSES = 'Expenses'
}

export type User = {
  userId: string;
  name: string;
  email: string;
};

export type Product = {
  productId: string;
  name: string;
  price: number;
  rating?: number;
  stockQuantity: number;
};

export type NewProduct = Omit<Product, 'productId'>

export type Sale = {
  saleId: string;
  productId: string;
  timestamp: string;
  quantity: number;
  unitPrice: number;
  totalAmount: number;
  product: Product;
};

export type Purchase = {
  purchaseId: string;
  productId: string;
  timestamp: string;
  quantity: number;
  unitCost: number;
  totalCost: number;
  product: Product;
};

export type Expense = {
  expenseId: string;
  category: string;
  amount: number;
  timestamp: string;
};

export type SalesSummary = {
  salesSummaryId: string;
  totalValue: number;
  changePercentage?: number;
  date: string;
};

export type PurchaseSummary = {
  purchaseSummaryId: string;
  totalPurchased: number;
  changePercentage?: number;
  date: string;
};

export type ExpenseSummary = {
  expenseSummaryId: string;
  totalExpenses: number;
  date: string;
};

export type ExpenseByCategorySummary = {
  expenseByCategorySummaryId: string;
  category: string;
  amount: string;
  date: string;
};

export type DashboardMetrics = {
  popularProducts: Product[];
  salesSummary: SalesSummary[];
  purchaseSummary: PurchaseSummary[];
  expenseSummary: ExpenseSummary[];
  expenseByCategorySummary: ExpenseByCategorySummary[];
};
