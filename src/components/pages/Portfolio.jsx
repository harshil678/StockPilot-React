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

const Portfolio = () => {
  return (
    <div className="p-5 lg:p-20">
      <h1 className="font-bold text-3xl pb-5">Portfolio</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className=" text-center">ASSETS</TableHead>
            <TableHead className="text-center">Price</TableHead>
            <TableHead className="text-center">Units</TableHead>
            <TableHead className="text-center">Change</TableHead>
            <TableHead className="text-center">Change(%)</TableHead>
            <TableHead className="text-center">Value</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map(
            (item, index) => (
              <TableRow key="index" className="text-center">
                <TableCell className="font-medium flex justify-center items-center gap-2">
                  <Avatar className="-z-50 w-[45px]">
                    <AvatarImage src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1696501400" />
                  </Avatar>
                  <span>Bitcoin</span>
                </TableCell>
                <TableCell>5817429</TableCell>
                <TableCell>12</TableCell>
                <TableCell>13634</TableCell>
                <TableCell>0.24</TableCell>
                <TableCell>581742934567</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    </div>
  );
};

export default Portfolio;
