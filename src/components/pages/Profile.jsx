import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Badge } from "../ui/badge";
import { VerifiedIcon } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import PaymentDetailsForm from "../partials/PaymentDetails/PaymentDetailsForm";
import { Button } from "../ui/button";
import AccountVerificationForm from "../partials/Profile/AccountVerificationForm";
import { useSelector } from "react-redux";
import { store } from "@/State/Store";

const Profile = () => {
  const { auth } = useSelector((store) => store);

  const handleEnableVerification = () => {
    console.log("two step enabled.");
  };

  return (
    <div className="flex flex-col items-center mb-5">
      <div className="pt-10 w-full lg:w-[60%]">
        <Card>
          <CardHeader>
            <CardTitle>Personal Information</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="lg:flex gap-32">
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Email :</p>
                  <p className="text-gray-500">{auth.user?.email}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Fullname :</p>
                  <p className="text-gray-500">{auth.user?.fullname}</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">DOB :</p>
                  <p className="text-gray-500">March 16,2025</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Nationality :</p>
                  <p className="text-gray-500">Bharat</p>
                </div>
              </div>
              <div className="space-y-7">
                <div className="flex">
                  <p className="w-[9rem]">Address :</p>
                  <p className="text-gray-500">Vasad</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">City :</p>
                  <p className="text-gray-500">Anand</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Postcode :</p>
                  <p className="text-gray-500">388306</p>
                </div>
                <div className="flex">
                  <p className="w-[9rem]">Country :</p>
                  <p className="text-gray-500">Bharat</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
        <div className="mt-6">
          <Card className="w-full">
            <CardHeader className="pb-7">
              <div className="flex items-center gap-3">
                <CardTitle>Two-step Verification</CardTitle>
                {false ? (
                  <Badge className="bg-green-600 space-x-2 text-background">
                    <VerifiedIcon />
                    <span className="text-[18px]">Enabled</span>
                  </Badge>
                ) : (
                  <Badge className="bg-orange-500 w-30 h-8 text-[18px]">
                    <span>Disabled</span>
                  </Badge>
                )}
              </div>
            </CardHeader>
            <CardContent>
              <div>
                <Dialog>
                  <DialogTrigger>
                    <Button className="py-2 my-5 text-lg">Enable</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Verify account</DialogTitle>
                    </DialogHeader>
                    <AccountVerificationForm
                      handleSubmit={() => handleEnableVerification()}
                    />
                  </DialogContent>
                </Dialog>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Profile;
