import React, { useEffect } from "react";
import { Avatar, AvatarImage } from "../ui/avatar";
import { BookmarkIcon, DotIcon } from "lucide-react";
import { Button } from "../ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TradingForm from "../partials/Trade/TradingForm";
import StockChart from "../Home/StockChart";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchCoinDetails } from "@/State/Coin/Action";

const StockDetails = () => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);
  const { id } = useParams();

  // console.log("params----", params);
  useEffect(() => {
    dispatch(
      fetchCoinDetails({ coinId: id, jwt: localStorage.getItem("jwt") })
    );
  }, [id]);

  const [showFilled, setShowFilled] = React.useState(false);
  const toggleBookmark = () => {
    setShowFilled(!showFilled);
  };
  return (
    <div className="p-5 mt-5">
      <div className="flex justify-between">
        <div className="flex gap-5 items-center">
          <div className="">
            <Avatar className="w-[50px] h-[50px]">
              <AvatarImage src={coin.coinDetails?.image.large} />
            </Avatar>
          </div>
          <div>
            <div className="flex items-center gap-2">
              <p>{id.toUpperCase()}</p>
              <DotIcon className="text-gray-400" />
              <p className="text-gray-400">{coin.coinDetails?.name}</p>
            </div>
            <div className="flex items-center gap-2">
              <p className="text-xl font-semibold">
                ₹{coin.coinDetails?.market_data.current_price.inr}
              </p>
              <p className="text-red-600">
                <span>
                  {
                    coin.coinDetails?.market_data.price_change_24h_in_currency
                      .inr
                  }
                </span>
                <span>
                  ({coin.coinDetails?.market_data?.price_change_24h}%)
                </span>
              </p>
            </div>
          </div>
        </div>
        <div className="flex gap-3 items-center">
          <Button
            onClick={toggleBookmark}
            variant={"ghost"}
            className="h-13 w-13"
          >
            {showFilled ? (
              <BookmarkFilledIcon height="13" width="13" />
            ) : (
              <BookmarkIcon height="13" width="13" />
            )}
          </Button>
          <Dialog>
            <DialogTrigger>
              <Button
                variant={"outline"}
                size={"lg"}
                className={"text-lg border-color-primary"}
              >
                Trade
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>How much to spend?</DialogTitle>
              </DialogHeader>
              <TradingForm />
            </DialogContent>
          </Dialog>
        </div>
      </div>
      <div className="mt-15">
        <StockChart coinId={id} />
      </div>
    </div>
  );
};

export default StockDetails;
