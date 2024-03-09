"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/nav";
import { ModeToggle } from "@/components/ui/toggleTheme";
import sunLifeIcon from "@/public/trace.svg";

export default function Home() {
  return (
    <main>
      <div className="text-end">
        <ModeToggle></ModeToggle>
      </div>

      <nav className="navbar">
        <Nav></Nav>
      </nav>
      <div className="container">
        <div className="intro">
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
            I express myself through the art of building software and believe
            that the tools we use should feel fun, fast, and filled with magic.
            I am excited about the web.
          </p>
          <br className="dynamic-breakpoint"></br>
          <p>You can find me on caacaca ccacaca cacaca caca</p>
        </div>
        <div className="experience my-16 text-2xl">Experience</div>
        <div className="rows"></div>
        <div className="icon">
          <a href="https://sunlife.com/">
            <Image
              className="sunlife"
              src={sunLifeIcon}
              alt="Sun Life Financial"
              width={64}
              height={64}
            />
          </a>
        </div>
        <div className="col-right">
          <div className="line">
            <div className="title">Sun Life Financial</div>
          </div>
          <div className="description">Cloud Engineering</div>
        </div>
      </div>
    </main>
  );
}
