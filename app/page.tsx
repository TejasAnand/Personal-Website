"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/nav";
import { ModeToggle } from "@/components/ui/toggleTheme";

export default function Home() {
  return (
    <main>
      <div className="text-end">
        <ModeToggle></ModeToggle>
      </div>

      <nav className="navbar">
        <Nav></Nav>
      </nav>
      <div className="intro_container">
        <h1 className="header text-3xl">
          <b>Tejas Anand</b>
        </h1>
        <p>
          I{"'"}m a software engineer based in Waterloo, Canada.
          <br className="dynamic-breakpoint"></br>
          Currently, I work on the cloud operations team at{" "}
          <a className="" href="https://www.sunlife.com/en/">
            Sun Life
          </a>{" "}
          as a cloud engineer
        </p>
        <br className="dynamic-breakpoint"></br>

        <p>
          I express myself through the art of building software and believe that
          the tools we use should feel fun, fast, and filled with magic. I am
          excited about the web.
        </p>
        <br className="dynamic-breakpoint"></br>
        <p>You can find me on caacaca ccacaca cacaca caca</p>
      </div>
    </main>
  );
}
