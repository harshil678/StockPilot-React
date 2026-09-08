import { Input } from "@/components/ui/input";
import React from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { DotFilledIcon } from "@radix-ui/react-icons";
import { DotSquareIcon } from "lucide-react";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { useDispatch } from "react-redux";
import { paymentHandler } from "@/State/Wallet/Action";

const TopupForm = () => {
  const [amount, setAmount] = React.useState("");
  const [paymentMethod, setPaymentMethod] = React.useState("RAZORPAY");
  const dispatch = useDispatch();

  const handlePayment = (value) => {
    setPaymentMethod(value);
    console.log(value);
  };
  const handleSubmit = () => {
    console.log(amount, ":", paymentMethod);
    dispatch(
      paymentHandler({
        jwt: localStorage.getItem("jwt"),
        amount,
        paymentMethod,
      })
    );
  };

  const handleChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <div className="pt-10 space-y-5">
      <div>
        <h1 className="pb-1">Enter Amount</h1>
        <Input
          type={"number"}
          onChange={handleChange}
          value={amount}
          className={"py-4 text-lg"}
          placeholder="e.g 1234"
        />
      </div>
      <div>
        <h1 className="pb-1">Select payment method</h1>
        <RadioGroup
          onValueChange={(value) => handlePayment(value)}
          className={"flex"}
          defaultValue="RAZORPAY"
        >
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className={"h-9 w-9"}
              value="RAZORPAY"
              id="r1"
            ></RadioGroupItem>
            <Label htmlFor="r1">
              <div className="bg-white rounded-md px-5 py-2 w-32">
                <img
                  src="src\components\logo\Razorpay_logo.png"
                  alt="RazorPay"
                />
              </div>
            </Label>
          </div>
          <div className="flex items-center space-x-2 border p-3 px-5 rounded-md">
            <RadioGroupItem
              icon={DotFilledIcon}
              className={"h-9 w-9"}
              value="STRIPE"
              id="r2"
            ></RadioGroupItem>
            <Label htmlFor="r2">
              <div className="bg-white rounded-md px-10 py-2 w-32">
                <img src="src\components\logo\Stripe_logo.png" alt="Stripe" />
              </div>
            </Label>
          </div>
        </RadioGroup>
      </div>
      <Button onClick={() => handleSubmit()} className={"w-full py-7 text-2xl"}>
        Submit
      </Button>
    </div>
  );
};

export default TopupForm;
