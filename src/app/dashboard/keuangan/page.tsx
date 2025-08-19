"use client";

import {useState} from "react";
import {Card, CardContent, CardHeader, CardTitle} from "@/components/ui/card";
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import {Badge} from "@/components/ui/badge";
import {
    DollarSign,
    TrendingUp,
    TrendingDown,
    Calendar,
    Receipt,
    PieChart,
    BarChart3
} from "lucide-react";

interface Transaction {
    id: string;
    type: "income" | "expense";
    category: string;
    description: string;
    amount: number;
    date: string;
    property: string;
    status: "completed" | "pending" | "failed";
}

const mockTransactions: Transaction[] = [
    {
        id: "1",
        type: "income",
        category: "Rent",
        description: "Monthly rent - Sarah Johnson",
        amount: 4500,
        date: "2023-12-01",
        property: "The Sterling Tower",
        status: "completed"
    },
    {
        id: "2",
        type: "expense",
        category: "Maintenance",
        description: "HVAC system repair",
        amount: -850,
        date: "2023-12-02",
        property: "Manhattan Heights",
        status: "completed"
    },
    {
        id: "3",
        type: "income",
        category: "Rent",
        description: "Monthly rent - Michael Chen",
        amount: 3200,
        date: "2023-12-01",
        property: "Manhattan Heights",
        status: "pending"
    },
    {
        id: "4",
        type: "expense",
        category: "Insurance",
        description: "Property insurance premium",
        amount: -2100,
        date: "2023-12-01",
        property: "All Properties",
        status: "completed"
    },
    {
        id: "5",
        type: "income",
        category: "Rent",
        description: "Monthly rent - Emma Davis",
        amount: 5200,
        date: "2023-12-01",
        property: "Luxury Residences",
        status: "completed"
    }
];

const FinancialMetrics = () => {
    const totalIncome = mockTransactions
        .filter(t => t.type === "income" && t.status === "completed")
        .reduce((sum, t) => sum + t.amount, 0);

    const totalExpenses = Math.abs(mockTransactions
        .filter(t => t.type === "expense" && t.status === "completed")
        .reduce((sum, t) => sum + t.amount, 0));

    const netIncome = totalIncome - totalExpenses;
    const profitMargin = ((netIncome / totalIncome) * 100);

    return (
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <Card className="metric-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Income</CardTitle>
                    <TrendingUp className="h-4 w-4 text-success"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-success">${totalIncome.toLocaleString()}</div>
                    <div className="flex items-center text-xs">
                        <TrendingUp className="h-3 w-3 text-success mr-1"/>
                        <span className="text-success">+8.2% from last month</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="metric-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Total Expenses</CardTitle>
                    <TrendingDown className="h-4 w-4 text-destructive"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold text-destructive">${totalExpenses.toLocaleString()}</div>
                    <div className="flex items-center text-xs">
                        <TrendingDown className="h-3 w-3 text-success mr-1"/>
                        <span className="text-success">-3.1% from last month</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="metric-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Net Income</CardTitle>
                    <DollarSign className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">${netIncome.toLocaleString()}</div>
                    <div className="flex items-center text-xs">
                        <TrendingUp className="h-3 w-3 text-success mr-1"/>
                        <span className="text-success">+12.8% from last month</span>
                    </div>
                </CardContent>
            </Card>

            <Card className="metric-card">
                <CardHeader className="flex flex-row items-center justify-between pb-2">
                    <CardTitle className="text-sm font-medium text-muted-foreground">Profit Margin</CardTitle>
                    <PieChart className="h-4 w-4 text-muted-foreground"/>
                </CardHeader>
                <CardContent>
                    <div className="text-2xl font-bold">{profitMargin.toFixed(1)}%</div>
                    <div className="text-xs text-muted-foreground">Healthy margin</div>
                </CardContent>
            </Card>
        </div>
    );
};

const TransactionsList = ({transactions}: { transactions: Transaction[] }) => (
    <Card className="luxury-card">
        <CardHeader>
            <CardTitle className="flex items-center gap-2">
                <Receipt className="h-5 w-5"/>
                Recent Transactions
            </CardTitle>
        </CardHeader>
        <CardContent className="p-0">
            <div className="overflow-x-auto">
                <table className="luxury-table">
                    <thead>
                    <tr>
                        <th>Date</th>
                        <th>Description</th>
                        <th>Property</th>
                        <th>Category</th>
                        <th>Amount</th>
                        <th>Status</th>
                    </tr>
                    </thead>
                    <tbody>
                    {transactions.map((transaction) => (
                        <tr key={transaction.id}>
                            <td>
                                <div className="flex items-center gap-1">
                                    <Calendar className="h-4 w-4 text-muted-foreground"/>
                                    {new Date(transaction.date).toLocaleDateString()}
                                </div>
                            </td>
                            <td>
                                <div className="font-medium">{transaction.description}</div>
                            </td>
                            <td className="text-muted-foreground">{transaction.property}</td>
                            <td>
                                <Badge variant="outline" className="bg-muted/30">
                                    {transaction.category}
                                </Badge>
                            </td>
                            <td>
                  <span className={`font-semibold ${
                      transaction.type === "income" ? "text-success" : "text-destructive"
                  }`}>
                    {transaction.type === "income" ? "+" : ""}${Math.abs(transaction.amount).toLocaleString()}
                  </span>
                            </td>
                            <td>
                                <Badge
                                    className={`status-${transaction.status === "completed" ? "paid" : transaction.status === "pending" ? "pending" : "overdue"}`}>
                                    {transaction.status}
                                </Badge>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </CardContent>
    </Card>
);

const ExpenseBreakdown = () => {
    const expenseCategories = [
        {category: "Maintenance", amount: 2450, percentage: 35, color: "bg-primary"},
        {category: "Insurance", amount: 2100, percentage: 30, color: "bg-success"},
        {category: "Utilities", amount: 1400, percentage: 20, color: "bg-warning"},
        {category: "Management", amount: 700, percentage: 10, color: "bg-destructive"},
        {category: "Other", amount: 350, percentage: 5, color: "bg-muted"}
    ];

    return (
        <Card className="luxury-card">
            <CardHeader>
                <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5"/>
                    Expense Breakdown
                </CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
                {expenseCategories.map((category, index) => (
                    <div key={index} className="space-y-2">
                        <div className="flex justify-between items-center">
                            <span className="font-medium">{category.category}</span>
                            <div className="text-right">
                                <div className="font-semibold">${category.amount.toLocaleString()}</div>
                                <div className="text-sm text-muted-foreground">{category.percentage}%</div>
                            </div>
                        </div>
                        <div className="w-full bg-muted rounded-full h-2">
                            <div
                                className={`h-2 rounded-full ${category.color} transition-all duration-500`}
                                style={{width: `${category.percentage}%`}}
                            />
                        </div>
                    </div>
                ))}
            </CardContent>
        </Card>
    );
};

export default function Page() {
    const [activeTab, setActiveTab] = useState("overview");

    return (
        <div className="space-y-6">
            {/* Header */}
            <div className="flex flex-col space-y-2">
                <h1 className="text-3xl font-bold tracking-tight">Financial Overview</h1>
                <p className="text-muted-foreground">
                    Track your income, expenses, and financial performance across all properties.
                </p>
            </div>

            <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
                <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="transactions">Transactions</TabsTrigger>
                    <TabsTrigger value="reports">Reports</TabsTrigger>
                </TabsList>

                <TabsContent value="overview" className="space-y-6">
                    <FinancialMetrics/>

                    <div className="grid gap-6 lg:grid-cols-3">
                        <div className="lg:col-span-2">
                            <TransactionsList transactions={mockTransactions.slice(0, 5)}/>
                        </div>
                        <div>
                            <ExpenseBreakdown/>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="transactions" className="space-y-6">
                    <FinancialMetrics/>
                    <TransactionsList transactions={mockTransactions}/>
                </TabsContent>

                <TabsContent value="reports" className="space-y-6">
                    <div className="grid gap-6 md:grid-cols-2">
                        <Card className="luxury-card">
                            <CardHeader>
                                <CardTitle>Monthly Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>Revenue Growth</span>
                                        <span className="text-success font-semibold">+8.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Expense Reduction</span>
                                        <span className="text-success font-semibold">-3.1%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Occupancy Rate</span>
                                        <span className="font-semibold">94.2%</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Collection Rate</span>
                                        <span className="text-success font-semibold">97.8%</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>

                        <Card className="luxury-card">
                            <CardHeader>
                                <CardTitle>Property Performance</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <div className="space-y-4">
                                    <div className="flex justify-between items-center">
                                        <span>The Sterling Tower</span>
                                        <span className="text-success font-semibold">$45K</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Luxury Residences</span>
                                        <span className="text-success font-semibold">$52K</span>
                                    </div>
                                    <div className="flex justify-between items-center">
                                        <span>Manhattan Heights</span>
                                        <span className="text-success font-semibold">$38K</span>
                                    </div>
                                </div>
                            </CardContent>
                        </Card>
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
}