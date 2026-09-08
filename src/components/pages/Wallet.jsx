import React, { useEffect } from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  DollarSign,
  IndianRupee,
  SendToBackIcon,
  ShuffleIcon,
  UploadIcon,
  WalletIcon,
} from "lucide-react";
import { CopyIcon } from "lucide-react";
import { ReloadIcon, UpdateIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import TopupForm from "../partials/wallet/TopupForm";
import WithdrawalForm from "../partials/wallet/WithdrawalForm";
import TransferForm from "../partials/wallet/TransferForm";
import { Avatar, AvatarFallback } from "../ui/avatar";
import { useDispatch, useSelector } from "react-redux";
import {
  depositMoney,
  getUserWallet,
  getWalletTransactions,
} from "@/State/Wallet/Action";
import { useLocation, useNavigate } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Wallet = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { wallet } = useSelector((store) => store);
  const query = useQuery();
  const orderId = query.get("orderId");
  const paymentId = query.get("razorpay_payment_id");

  useEffect(() => {
    handleFetchUserWallet();
    // handleFetchWalletTransaction();
  }, []);

  useEffect(() => {
    if (orderId) {
      dispatch(
        depositMoney({
          jwt: localStorage.getItem("jwt"),
          orderId,
          paymentId,
          navigate,
        })
      );
    }
  }, [orderId, paymentId]);

  const handleFetchUserWallet = () => {
    dispatch(getUserWallet(localStorage.getItem("jwt")));
  };

  const handleFetchWalletTransaction = () => {
    dispatch(getWalletTransactions({ jwt: localStorage.getItem("jwt") }));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader className={"pb-9"}>
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-5">
                <WalletIcon size={30} />
                <div>
                  <CardTitle className={"text-2xl"}>My Wallet</CardTitle>
                  <div className="flex items-center gap-2">
                    <p className="text-gray-200 text-sm">
                      {wallet.userWallet?.id}
                    </p>
                    <CopyIcon
                      size={15}
                      className="cursor-pointer hover:text-slate-300"
                    />
                  </div>
                </div>
              </div>
              <div>
                <ReloadIcon
                  onClick={handleFetchUserWallet}
                  className="w-6 h-6 cursor-pointer hover:text-gray-400"
                />
              </div>
            </div>
          </CardHeader>
          <CardContent>
            <div className="flex items-center">
              <IndianRupee />
              <span className="text-2xl font-semibold">
                {wallet.userWallet?.balance}
              </span>
            </div>
            <div className="flex gap-7 mt-5">
              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 flex items-center flex-col justify-center rounded-md cursor-pointer hover:text-gray-400 shadow-slate-800 shadow-md">
                    <UploadIcon />
                    <span className="text-sm mt-2">Add Money</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className={"text-center text-xl"}>
                      Top up wallet
                    </DialogTitle>
                  </DialogHeader>
                  <TopupForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 flex items-center flex-col justify-center rounded-md cursor-pointer hover:text-gray-400 shadow-slate-800 shadow-md">
                    <ShuffleIcon />
                    <span className="text-sm mt-2">Withdraw</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className={"text-center text-xl"}>
                      Request Withdraw
                    </DialogTitle>
                  </DialogHeader>
                  <WithdrawalForm />
                </DialogContent>
              </Dialog>

              <Dialog>
                <DialogTrigger>
                  <div className="h-24 w-24 flex items-center flex-col justify-center rounded-md cursor-pointer hover:text-gray-400 shadow-slate-800 shadow-md">
                    <SendToBackIcon />
                    <span className="text-sm mt-2">Transfer</span>
                  </div>
                </DialogTrigger>
                <DialogContent>
                  <DialogHeader>
                    <DialogTitle className={"text-center text-xl"}>
                      Send to...
                    </DialogTitle>
                  </DialogHeader>
                  <TransferForm />
                </DialogContent>
              </Dialog>
            </div>
          </CardContent>
        </Card>
        <div className="py-5 pt-10">
          <div className="flex gap-2 items-center pb-5">
            <h1 className="text-2xl font-semibold">History</h1>
            <UpdateIcon className="h-7 w-7 p-0 cursor-pointer hover:text-gray-400" />
          </div>
          <div className="space-y-5">
            {[1, 1, 1, 1, 1, 1, 1, 1, 11, 1, 1, 1, 1].map((item, i) => (
              <div key={i}>
                <Card className="flex justify-between px-5 items-center flex-row p-2">
                  <div className="flex items-center gap-5">
                    <Avatar>
                      <AvatarFallback>
                        <ShuffleIcon></ShuffleIcon>
                      </AvatarFallback>
                    </Avatar>

                    <div className="">
                      <h1>Buy Assets</h1>
                      <p className="text-sm text-gray-500">2025-03-15</p>
                    </div>
                  </div>
                  <div>
                    <p className="text-green-500">9999 INR</p>
                  </div>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wallet;
