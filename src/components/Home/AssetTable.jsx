import React, { useEffect } from "react";
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
import { useNavigate } from "react-router-dom";
import { ScrollArea } from "../ui/scroll-area";

const AssetTable = ({ coin, category }) => {
  const navigate = useNavigate();

  return (
    <Table>
      <ScrollArea className={"h-[77vh]"}>
        <TableHeader>
          <TableRow className="text-center">
            <TableHead className="w-[100px] text-center">COIN</TableHead>
            <TableHead className="text-center">SYMBOL</TableHead>
            <TableHead className="text-center">MARKET CAP</TableHead>
            <TableHead className="text-center">VOLUME</TableHead>
            <TableHead className="text-center">24 H</TableHead>
            <TableHead className="text-center">PRICE(₹)</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {/* {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1].map((item, index) => ( */}
          {coin.map((item, index) => (
            <TableRow
              onClick={() => {
                navigate(`/market/${item.id}`);
              }}
              key={item.id}
              className={"cursor-pointer text-center"}
            >
              <TableCell className="font-medium flex items-center gap-2 w-[180px]">
                <Avatar className="-z-50 w-[45px]">
                  <AvatarImage src={item.image} />
                </Avatar>
                <span className="overflow-x-hidden">{item.name}</span>
              </TableCell>
              <TableCell>{item.symbol}</TableCell>
              <TableCell>{item.total_volume}</TableCell>
              <TableCell>{item.market_cap}</TableCell>
              <TableCell>{item.price_change_percentage_24h}</TableCell>
              <TableCell>{item.current_price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </ScrollArea>
    </Table>
  );
};

export default AssetTable;
