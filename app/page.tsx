"use client";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import Nav from "@/components/ui/nav";
import { ModeToggle } from "@/components/ui/toggleTheme";
import ExperienceComponent from "@/components/ui/experience";
import sunLifeIcon from "@/public/trace.svg";
import protoIcon from "@/public/proto2.svg";
import avanadeIcon from "@/public/avanade.svg";
import uwaterlooIcon from "@/public/uwaterloo.svg";
import ProjectComponent from "@/components/ui/projects";

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
        <div className="experience font-semibold my-16 text-2xl">
          Experience
        </div>
        <ExperienceComponent
          imgName="logoStyle"
          link="https://www.sunlife.com/en/"
          iconName={sunLifeIcon}
          alt="Sun Life"
          width={80}
          height={80}
          title="Sun Life"
          description="Cloud Engineering"
          iconStyle="icon"
        />
        <ExperienceComponent
          imgName="logoStyle"
          link="https://www.proto.cx/"
          iconName={protoIcon}
          alt="Proto"
          width={48}
          height={48}
          title="Proto"
          description="Full Stack Developer"
          iconStyle="icon2"
        />
        <ExperienceComponent
          imgName="logoStyle"
          link="https://www.avanade.com/en-ca"
          iconName={avanadeIcon}
          alt="Avanade"
          width={48}
          height={48}
          title="Avanade"
          description="Devops Engineer"
          iconStyle="icon3"
        />

        <br></br>
        <br></br>

        <ExperienceComponent
          imgName="logoStyle"
          link="https://uwaterloo.ca/"
          iconName={uwaterlooIcon}
          alt="Avanade"
          width={48}
          height={48}
          title="University of Waterloo"
          description="Computer Engineering, Bachelors"
          iconStyle="icon3"
        />
        <div className="projectHeading font-semibold my-16 text-2xl">
          Projects
        </div>
        <div className="allProjects">
          <ProjectComponent></ProjectComponent>
          <ProjectComponent></ProjectComponent>
        </div>
      </div>
    </main>
  );
}
