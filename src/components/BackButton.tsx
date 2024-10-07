"use client";
import { useRouter } from "next/navigation";
import React from "react";
import { Button } from "./ui/button";
import { ArrowLeft } from "lucide-react";
import { cn } from "@/lib/utils";

const BackButton = ({
  text,
  className,
}: {
  text?: string;
  className?: string;
}) => {
  const nav = useRouter();
  return (
    <Button onClick={() => nav.back()} className={cn("w-fit", className)}>
      {text ? text : <ArrowLeft />}
    </Button>
  );
};

export default BackButton;
