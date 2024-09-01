"use client";

import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { PenBox } from "lucide-react";
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
import EmojiPicker from "emoji-picker-react";
import { useUser } from "@clerk/nextjs";
import { Input } from "@/components/ui/input";
import { db } from "@/utils/dbConfig";
import { Budgets } from "@/utils/schema";
import { toast } from "sonner";
import { eq } from "drizzle-orm";

function EditBudget({ budgetInfo, refreshData }) {
  const [emojiIcon, setEmojiIcon] = useState(budgetInfo?.icon);
  const [openEmojiPicker, setOpenEmojiPicker] = useState(false);

  const [name, setName] = useState(budgetInfo?.name);
  const [amount, setAmount] = useState(budgetInfo?.amount);

  useEffect(() => {
    if (budgetInfo) {
      setEmojiIcon(budgetInfo.icon);
      setName(budgetInfo.name);
      setAmount(budgetInfo.amount);
    }
  }, [budgetInfo]);

  const { user } = useUser();

  const onUpdateBudget = async () => {
    const result = await db
      .update(Budgets)
      .set({
        name: name,
        amount: amount,
        icon: emojiIcon,
      })
      .where(eq(Budgets.id, budgetInfo.id))
      .returning();

    if (result) {
      refreshData();
      toast("Budget updated successfully");
    }
  };

  console.log(budgetInfo);

  return (
    <div>
      <Dialog>
        <DialogTrigger asChild>
          <div className="flex gap-2 text-sm justify-center cursor-pointer items-center py-2 px-3 rounded-lg text-white bg-primary hover:bg-indigo-800">
            <PenBox size={18} />
            Edit
          </div>
        </DialogTrigger>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Edit Budget</DialogTitle>
            <DialogDescription>
              <div className="mt-5">
                <div className="flex items-center gap-2">
                  <p className="font-medium text-black">Budget Icon</p>
                  <Button
                    className="text-lg"
                    variant="outline"
                    onClick={() => setOpenEmojiPicker(!openEmojiPicker)}
                  >
                    {emojiIcon}
                  </Button>
                </div>
                <div className="absolute z-50 top-14 left-44">
                  <EmojiPicker
                    open={openEmojiPicker}
                    onEmojiClick={(e) => {
                      setEmojiIcon(e.emoji);
                      setOpenEmojiPicker(false);
                    }}
                  />
                </div>

                <div className="mt-4">
                  <h2 className="text-black font-medium my-1">Budget Name</h2>
                  <Input
                    placeholder="e.g. Groceries"
                    onChange={(e) => setName(e.target.value)}
                    defaultValue={budgetInfo?.name}
                  />
                </div>

                <div className="mt-2">
                  <h2 className="text-black font-medium my-1">Budget Amount</h2>
                  <Input
                    placeholder="e.g. 5000"
                    type="number"
                    onChange={(e) => setAmount(e.target.value)}
                    defaultValue={budgetInfo?.amount}
                  />
                </div>
              </div>
            </DialogDescription>
          </DialogHeader>
          <DialogFooter className="sm:justify-start">
            <DialogClose asChild>
              <Button
                className="mt-5 w-full"
                onClick={() => onUpdateBudget()}
                disabled={!(name && amount)}
              >
                Edit Budget
              </Button>
            </DialogClose>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default EditBudget;
