"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";

interface EventCardProps {
  title: string;
  date: string;
  time: string;
  location: string;
  imageUrl?: string;
}

const EventCard = ({
  title,
  date,
  time,
  location,
  imageUrl = "/api/placeholder/400/200",
}: EventCardProps) => {
  return (
    <Card className="overflow-hidden rounded-3xl shadow-lg border border-gray-100 w-full max-w-sm flex flex-col min-h-[440px]">
      <div className="relative w-full px-5 pt-1">
        {imageUrl && (
          <div className="relative w-full h-48 rounded-xl overflow-hidden">
            <Image
              src={imageUrl}
              alt={title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}
      </div>

      <CardContent className="px-6 pt-4 pb-1 flex flex-col flex-1 gap-4">
        <h3 className="text-xl font-bold">{title}</h3>
        <p className="text-gray-700">
          {date} | {time} | {location}
        </p>
        <div className="mt-auto">
          <Button className="rounded-lg bg-gray-950 text-white hover:bg-gray-800">
            Daftar Sekarang
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
