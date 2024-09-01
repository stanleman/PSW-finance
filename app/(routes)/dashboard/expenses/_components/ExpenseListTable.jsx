import { db } from "@/utils/dbConfig";
import { Expenses } from "@/utils/schema";
import { eq } from "drizzle-orm";
import { Trash2 } from "lucide-react";
import React from "react";
import { toast } from "sonner";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

function ExpenseListTable({ expensesList, refreshData }) {
  const deleteExpense = async (expense) => {
    const result = await db
      .delete(Expenses)
      .where(eq(Expenses.id, expense.id))
      .returning();

    if (result) {
      toast("Expense successfully deleted");
      refreshData();
    }
  };

  return (
    <div>
      <div className="mt-3">
        <div className="grid grid-cols-4 bg-slate-200 p-2">
          <h2 className="font-bold">Name</h2>
          <h2 className="font-bold">Amount</h2>
          <h2 className="font-bold">Date</h2>
          <h2 className="font-bold">Action</h2>
        </div>

        {expensesList.map((expenses, index) => (
          <div className="grid grid-cols-4 bg-slate-50 p-2" key={expenses.id}>
            <h2>{expenses.name}</h2>
            <h2>{expenses.amount}</h2>
            <h2>{expenses.createdAt}</h2>
            <div className="cursor-pointer ">
              <Dialog>
                <DialogTrigger>
                  <Trash2 className="text-gray-500 hover:text-red-600 hover:scale-105 duration-200" />
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle>Are you absolutely sure?</DialogTitle>
                    <DialogDescription>
                      This action cannot be undone. This will permanently delete
                      this expense and remove your data from our servers.
                    </DialogDescription>
                  </DialogHeader>
                  <DialogFooter className="sm:justify-start">
                    <DialogClose asChild>
                      <Button
                        className="w-full bg-red-500 hover:bg-red-700"
                        onClick={() => deleteExpense(expenses)}
                      >
                        Delete expense
                      </Button>
                    </DialogClose>
                  </DialogFooter>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ExpenseListTable;
