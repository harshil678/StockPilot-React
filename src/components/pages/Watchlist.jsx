import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarImage } from "@radix-ui/react-avatar";
import { Button } from "../ui/button";
import { BookmarkFilledIcon } from "@radix-ui/react-icons";

const Watchlist = () => {
  const handleRemoveWatchlist = (value) => {
    console.log(value);
  };

  return (
    <div>
      {" "}
      <div className="p-5 lg:p-20">
        <h2 className=" text-3xl pb-5">Coins under observation</h2>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className="w-[100px] text-center">COIN</TableHead>
              <TableHead className="text-center">SYMBOL</TableHead>
              <TableHead className="text-center">MARKET CAP</TableHead>
              <TableHead className="text-center">VOLUME</TableHead>
              <TableHead className="text-center">24 H</TableHead>
              <TableHead className="text-center">PRICE(₹)</TableHead>
              <TableHead className="text-center">Remove</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <TableRow key={index} className="text-center">
                <TableCell className="font-medium flex items-center gap-2">
                  <Avatar className="-z-50">
                    <AvatarImage src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                  </Avatar>
                  <span className="text-center">Bitcoin</span>
                </TableCell>
                <TableCell>btc</TableCell>
                <TableCell>114412401493056</TableCell>
                <TableCell>122111459218826</TableCell>
                <TableCell>134854</TableCell>
                <TableCell className="text-center">5817429</TableCell>
                <TableCell>
                  <Button
                    size={"icon"}
                    variant={"ghost"}
                    className={"h-10 w-10"}
                    onClick={() => handleRemoveWatchlist(item.toString())}
                  >
                    <BookmarkFilledIcon className="w-6 h-6" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Watchlist;
