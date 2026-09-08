import { Avatar, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { DotIcon } from "lucide-react";
import { useState } from "react";

const TradingForm = () => {
  const [orderType, setOrderType] = useState("BUY");
  const handleChange = () => {};

  return (
    <div>
      Fill this form
      <div className="space-y-10 p-5">
        <div className="">
          <div className="flex gap-4 items-center justify-between">
            <Input
              className={"py-7 focus:outline-none"}
              placeholder="Enter amount.."
              onChange={handleChange}
              type={"number"}
              name="amount"
            />
            <div className="">
              <p className="border text-2xl flex justify-center items-center w-36 h-14 rounded-md">
                4563
              </p>
            </div>
          </div>
          {false && (
            <h1 className="text-red-600 text-center pt-4 font-semibold">
              Insufficient Balance in Wallet
            </h1>
          )}
        </div>

        <div className="flex gap-5 items-center">
          <div className="">
            <Avatar>
              <AvatarImage
                src={
                  "https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400"
                }
              />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>BTC</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">Bitcoin</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">$45667</p>
              <p className="text-red-600">
                <span>-13677</span>
                <span>(-0.29607%)</span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <p>Order Type</p>
          <p>Market Order</p>
        </div>
        <div className="flex items-center justify-between">
          <p>{orderType == "BUY" ? "Available cash" : "Available quanity"}</p>
          <p>{orderType == "BUY" ? "Rs. 19,346" : "139.8419"}</p>
        </div>
        <div>
          <Button
            className={`w-full py-6 text-lg ${
              orderType == "SELL" ? "bg-red-500 text-white" : ""
            }`}
          >
            {orderType}
          </Button>
          <Button
            variant={"link"}
            className={"w-[20%] cursor-pointer mt-5 text-xl text-white"}
            onClick={() => {
              setOrderType(orderType == "BUY" ? "SELL" : "BUY");
            }}
          >
            {orderType == "BUY" ? "or Sell" : "or Buy"}
          </Button>
        </div>
      </div>
    </div>
  );
};

export default TradingForm;
