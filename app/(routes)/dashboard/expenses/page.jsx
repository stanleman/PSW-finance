"use client";

import React, { useState, useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import { db } from "@/utils/dbConfig";
import { desc, eq, getTableColumns, sql } from "drizzle-orm";
import { Budgets, Expenses } from "@/utils/schema";
import ExpenseListTable from "./_components/ExpenseListTable";

function ExpensesScreen() {
  const { user } = useUser();
  const [expensesList, setExpensesList] = useState([]);

  useEffect(() => {
    user && getAllExpenses();
  }, [user]);

  const getAllExpenses = async () => {
    const result = await db
      .select({
        id: Expenses.id,
        name: Expenses.name,
        amount: Expenses.amount,
        createdAt: Expenses.createdAt,
      })
      .from(Budgets)
      .rightJoin(Expenses, eq(Budgets.id, Expenses.budgetId))
      .where(eq(Budgets.createdBy, user?.primaryEmailAddress?.emailAddress))
      .orderBy(desc(Expenses.id));

    setExpensesList(result);
  };

  return (
    <div className="p-5">
      <div className="mt-4">
        <h2 className="font-bold text-3xl">My expenses</h2>
        <ExpenseListTable
          expensesList={expensesList}
          refreshData={() => getBudgetList()}
        />
      </div>
    </div>
  );
}

export default ExpensesScreen;
