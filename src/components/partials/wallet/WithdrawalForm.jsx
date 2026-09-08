import { Button } from "@/components/ui/button";
import { DialogClose } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { getUserWallet } from "@/State/Wallet/Action";
import {
  getPaymentDetails,
  withdrawalRequest,
} from "@/State/Withdrawal/Action";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const WithdrawalForm = () => {
  const dispatch = useDispatch();
  const { wallet } = useSelector((store) => store);

  const [amount, setAmount] = React.useState("");

  useEffect(() => {
    dispatch(getPaymentDetails({ jwt: localStorage.getItem("jwt") }));
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  }, []);
  const { withdrawal } = useSelector((store) => store);

  const handleSubmit = () => {
    console.log(amount);
    dispatch(
      withdrawalRequest({ jwt: localStorage.getItem("jwt"), amount: amount })
    );
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };

  return (
    <div className="pt-10 space-y-5">
      <div className="flex justify-between items-center rounded-md bg-slate-900 text-xl font-bold px-5 py-4">
        <p>Available Balance</p>
        <p>₹{wallet.userWallet?.balance}</p>
      </div>
      <div className="flex flex-col items-center">
        <h1>Enter amount</h1>
        <div className="w-[65%] mt-2 flex justify-center items-center">
          <Input
            type="number"
            onChange={handleChange}
            value={amount}
            className={
              "withdrawalInput py-3 border-none px-0 text-2xl text-center"
            }
            placeholder="₹1200"
          />
        </div>
      </div>
      <div>
        <p>Transfer to</p>
        <div className="flex items-center gap-5 border px-5 py-2 rounded-md">
          <img className="h-8 w-8" alt="Bank" />
          <div>
            <p className="text-xl font-bold">
              {withdrawal.paymentDetails?.bank}
            </p>
            <p className="text-xs">
              {withdrawal.paymentDetails?.accountNumber}
            </p>
          </div>
        </div>
      </div>
      <DialogClose className="w-full">
        <Button onClick={handleSubmit} className={"w-full  py-7 text-xl"}>
          Withdraw
        </Button>
      </DialogClose>
    </div>
  );
};

export default WithdrawalForm;
