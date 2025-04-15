"use client";
import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import Link from "next/link";

interface RegistrationCardProps {
  title: string;
  description: string;
}

const RegistrationCard = ({ title, description }: RegistrationCardProps) => {
  return (
    <Card className="w-[390px] h-full shadow-lg border-none rounded-4xl flex flex-col">
      <CardContent className="p-7 flex flex-col flex-grow space-y-3 pt-[5]">
        <div className="bg-gray-950 p-3 rounded-full shadow-lg w-fit">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <circle cx="12" cy="12" r="10" stroke="white" strokeWidth="2" />
          </svg>
        </div>

        <h3 className="font-semibold text-2xl">{title}</h3>
        <p className="text-gray-950 text-md">{description}</p>

        <div className="flex-grow" />

        <Link href="/" className="w-full">
          <Button variant="outline" className="w-full py-6 border-2 rounded-2xl -mb-14">
            Daftar Sekarang
          </Button>
        </Link>
      </CardContent>
    </Card>
  );
};

export default RegistrationCard;
