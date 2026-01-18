"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Loader2 } from "lucide-react";
import useFetch from "@/hooks/use-fetch";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerContent,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  DrawerClose,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Switch } from "@/components/ui/switch";
import { createAccount } from "@/actions/dashboard";
import { accountSchema } from "@/app/lib/schema";

export function CreateAccountDrawer({ children }) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
    setValue,
    watch,
    reset,
  } = useForm({
    resolver: zodResolver(accountSchema),
    defaultValues: {
      name: "",
      type: "CURRENT",
      balance: "",
      isDefault: false,
    },
  });

  const {
    loading: createAccountLoading,
    fn: createAccountFn,
    error,
    data: newAccount,
  } = useFetch(createAccount);

  const onSubmit = async (data) => {
    await createAccountFn(data);
  };

  useEffect(() => {
    if (newAccount) {
      toast.success("Account created successfully");
      reset();
      setOpen(false);
    }
  }, [newAccount, reset]);

  useEffect(() => {
    if (error) {
      toast.error(error.message || "Failed to create account");
    }
  }, [error]);

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>{children}</DrawerTrigger>

      <DrawerContent
        className="
          bg-panel backdrop-blur-glass
          border-t border-panelBorder
          text-foreground
        "
      >
        <DrawerHeader className="border-b border-panelBorder pb-4">
          <DrawerTitle className="text-2xl font-bold text-neonBlue">
            Create New Account
          </DrawerTitle>
        </DrawerHeader>

        <div className="px-6 pb-8 pt-4">
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-5">

            {/* Account Name */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Account Name
              </label>
              <Input
                placeholder="e.g., Main Checking"
                {...register("name")}
                className="bg-background/60 border-panelBorder focus-visible:ring-neonBlue"
              />
              {errors.name && (
                <p className="text-sm text-destructive">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Account Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Account Type
              </label>
              <Select
                onValueChange={(value) => setValue("type", value)}
                defaultValue={watch("type")}
              >
                <SelectTrigger className="bg-background/60 border-panelBorder">
                  <SelectValue placeholder="Select type" />
                </SelectTrigger>
                <SelectContent className="bg-panel backdrop-blur-glass border-panelBorder">
                  <SelectItem value="CURRENT">Current</SelectItem>
                  <SelectItem value="SAVINGS">Savings</SelectItem>
                </SelectContent>
              </Select>
              {errors.type && (
                <p className="text-sm text-destructive">
                  {errors.type.message}
                </p>
              )}
            </div>

            {/* Balance */}
            <div className="space-y-2">
              <label className="text-sm font-medium">
                Initial Balance
              </label>
              <Input
                type="number"
                step="0.01"
                placeholder="0.00"
                {...register("balance")}
                className="bg-background/60 border-panelBorder focus-visible:ring-neonBlue"
              />
              {errors.balance && (
                <p className="text-sm text-destructive">
                  {errors.balance.message}
                </p>
              )}
            </div>

            {/* Default Switch */}
            <div className="flex items-center justify-between rounded-xl border border-panelBorder p-4 bg-background/40">
              <div className="space-y-1">
                <label className="text-sm font-medium cursor-pointer">
                  Set as Default
                </label>
                <p className="text-xs text-muted-foreground">
                  Automatically selected for new transactions
                </p>
              </div>
              <Switch
                checked={watch("isDefault")}
                onCheckedChange={(checked) =>
                  setValue("isDefault", checked)
                }
              />
            </div>

            {/* Actions */}
            <div className="flex gap-4 pt-6">
              <DrawerClose asChild>
                <Button
                  type="button"
                  variant="outline"
                  className="flex-1 border-panelBorder"
                >
                  Cancel
                </Button>
              </DrawerClose>

              <Button
                type="submit"
                className="
                  flex-1
                  bg-neonBlue text-black
                  hover:shadow-glowBlue
                "
                disabled={createAccountLoading}
              >
                {createAccountLoading ? (
                  <>
                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                    Creating...
                  </>
                ) : (
                  "Create Account"
                )}
              </Button>
            </div>

          </form>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
