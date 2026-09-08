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

const Activity = () => {
  return (
    <div>
      {" "}
      <div className="p-5 lg:p-20">
        <h2 className=" text-3xl pb-5">Your trading summary...</h2>
        <Table className={""}>
          <TableHeader className={"border"}>
            <TableRow>
              <TableHead className="text-center py-4">Date & Time</TableHead>
              <TableHead className="text-center">Coin</TableHead>
              <TableHead className="text-center">Buy</TableHead>
              <TableHead className="text-center">Sell</TableHead>
              <TableHead className="text-center">Order</TableHead>
              <TableHead className="text-center">Profit/Loss</TableHead>
              <TableHead className="text-center">Value</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => (
              <TableRow key={index} className="text-center">
                <TableCell>
                  <p>2025/03/30</p>
                  <p className="text-gray-400">10:00:00 AM</p>
                </TableCell>
                <TableCell>
                  <Avatar className="-z-50">
                    <AvatarImage className="h-10 w-10" src=""></AvatarImage>
                  </Avatar>
                  <span>Bitcoin</span>
                </TableCell>
                <TableCell>134854</TableCell>
                <TableCell>-</TableCell>
                <TableCell>BUY</TableCell>
                <TableCell>5817429</TableCell>
                <TableCell>58174</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
};

export default Activity;
