import React, { useEffect } from "react";
import { Button } from "../ui/button";
import AssetTable from "./AssetTable";
import StockChart from "./StockChart";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Cross1Icon, DotIcon } from "@radix-ui/react-icons";
import { MessageCircle } from "lucide-react";
import { Input } from "../ui/input";
import { useDispatch, useSelector } from "react-redux";
import { getCoinList, getTop50 } from "@/State/Coin/Action";
import {
  Pagination,
  PaginationContent,
  PaginationEllipsis,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

const Home = () => {
  const dispatch = useDispatch();
  const { coin } = useSelector((store) => store);

  const [category, setCategory] = React.useState("all");
  const [inputValue, setInputValue] = React.useState("");
  const [botRelease, setBotRelease] = React.useState(false);

  const handleBotRelease = () => setBotRelease(!botRelease);
  const handleCategory = (value) => {
    setCategory(value);
  };

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };
  const handleKeyPress = (event) => {
    if (event.key == "Enter") {
      console.log(inputValue);
      setInputValue("");
    }
  };

  useEffect(() => {
    dispatch(getCoinList(3));
  }, []);

  useEffect(() => {
    dispatch(getTop50());
  }, [category]);

  return (
    <div className="relative">
      <div className="lg:flex">
        <div className="lg:w-[50%] lg:border-r">
          <div className="p-3 flex items-center gap-4">
            <Button
              className="rounded-full"
              variant={category == "all" ? "default" : "outline"}
              onClick={() => handleCategory("all")}
            >
              All
            </Button>
            <Button
              className="rounded-full"
              variant={category == "top50" ? "default" : "outline"}
              onClick={() => handleCategory("top50")}
            >
              Top 50
            </Button>
            <Button
              className="rounded-full"
              variant={category == "topGainers" ? "default" : "outline"}
              onClick={() => handleCategory("topGainers")}
            >
              Top Gainers
            </Button>
            <Button
              className="rounded-full"
              variant={category == "topLosers" ? "default" : "outline"}
              onClick={() => handleCategory("topLosers")}
            >
              Top Losers
            </Button>
          </div>
          <AssetTable
            coin={category == "all" ? coin.coinList : coin.top50}
            category={category}
          />
          <div className="">
            <Pagination>
              <PaginationContent>
                <PaginationItem>
                  <PaginationPrevious href="#" />
                </PaginationItem>
                <PaginationItem>
                  <PaginationLink href="#">1</PaginationLink>
                </PaginationItem>
                <PaginationItem>
                  <PaginationEllipsis />
                </PaginationItem>
                <PaginationItem>
                  <PaginationNext href="#" />
                </PaginationItem>
              </PaginationContent>
            </Pagination>
          </div>
        </div>
        <div className="hidden lg:block lg:w-[50%] p-5">
          <StockChart coinId={"bitcoin"} />
          <div className="flex gap-5 items-center">
            <div>
              <Avatar>
                <AvatarImage src="https://assets.coingecko.com/coins/images/1/small/bitcoin.png?1696501400"></AvatarImage>
              </Avatar>
            </div>
            <div>
              <div className="flex items-center gap-2">
                <p>BTC</p>
                <DotIcon className="text-gray-400" />
                <p className="text-gray-400">Bitcoin</p>
              </div>
              <div className="flex item-ends gap-2">
                <p className="text-xl font-bold">5463</p>
                <p className="text-red-600">
                  <span>-7558658765</span>
                  <span>(4464747)</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <section className="absolute bottom-5 right-5 z-40 flex flex-col justify-end items-ends gap-2">
        {botRelease && (
          <div className="rounded-md w-[20rem] md:w-[25rem] lg:w-[25rem] h-[70vh] bg-slate-900">
            <div className="flex justify-between items-center border-b px-6 h-[12%]">
              <p className="text-xl">Chat Bot</p>
              <Button onClick={handleBotRelease} variant={"ghost"} size="icon">
                <Cross1Icon />
              </Button>
            </div>
            <div className="flex flex-col overflow-y-auto gap-5 px-5 py-2 scroll-container h-[76%]">
              <div className="self-start pb-5 w-auto">
                <div className="justify-start px-5 py-2 rounded-md bg-slate-800 w-auto">
                  <p>Find you help</p>
                  <p>here...</p>
                </div>
              </div>
              {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, i) => (
                <div
                  key={i}
                  className={`${
                    i % 2 == 0 ? "self-start" : "self-end"
                  } " w-auto"`}
                >
                  {i % 2 == 0 ? (
                    <div className="justify-start self-end my-1 px-5 py-2 rounded-md bg-slate-800 w-auto">
                      <p>Here goes your question for AI</p>
                      <p>...</p>
                    </div>
                  ) : (
                    <div className="justify-start self-end px-5 py-2 rounded-full bg-slate-800 w-auto">
                      <p>Here is the answer for your prompt</p>
                      <p>Answer is this only...</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
            <div>
              <div className="h-[12%] pt-3 border-t">
                <Input
                  className={"h-full p-2 order-none"}
                  onChange={handleChange}
                  value={inputValue}
                  onKeyPress={handleKeyPress}
                  type="text"
                  placeholder="Write Promt..."
                />
              </div>
            </div>
          </div>
        )}

        <div className="self-end sticky bottom-10 right-10 w-[10rem] cursor-pointer group">
          <Button
            onClick={handleBotRelease}
            className={"w-full h-[3rem] items-center"}
          >
            <MessageCircle
              size={30}
              className="fill-[#1e293b] -rotate-90 stroke-none group-hover:fill-[#1a1a1a]"
            />
            <span className="text-2xl">ChatBot</span>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
