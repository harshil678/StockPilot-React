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
import { useDispatch, useSelector } from "react-redux";
import { getWithdrawalHistory } from "@/State/Withdrawal/Action";

const Withdrawal = () => {
  const dispatch = useDispatch();
  const { withdrawal } = useSelector((store) => store);

  useEffect(() => {
    dispatch(getWithdrawalHistory({ jwt: localStorage.getItem("jwt") }));
  }, []);

  return (
    <div className="p-5 lg:p-20">
      <h2 className=" text-3xl pb-5">Your withdrawal summary...</h2>
      <Table className={""}>
        <TableHeader className={"border"}>
          <TableRow>
            <TableHead className="text-center py-4">Date</TableHead>
            <TableHead className="text-center">Method</TableHead>
            <TableHead className="text-center">Amount</TableHead>
            <TableHead className="text-center">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {withdrawal.history.map((item, index) => (
            <TableRow key={index} className="text-center">
              <TableCell>
                <p>{(item?.date).toString().slice(0, 20)}</p>
              </TableCell>
              <TableCell>Bank</TableCell>
              <TableCell>{item?.amount}</TableCell>
              <TableCell>{item?.status}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default Withdrawal;
