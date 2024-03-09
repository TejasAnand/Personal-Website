"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/nav";
import { ModeToggle } from "@/components/ui/toggleTheme";

export default function Home() {
  return (
    <div className="text-end">
      <ModeToggle></ModeToggle>
    </div>
  );
}
