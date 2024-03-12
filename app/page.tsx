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
import { ProjectCardComponent } from "@/components/ui/projects";
import { OtherProjectComponent } from "@/components/ui/projects";
import colorcalIcon from "@/public/colorcal3.svg";
import prepresentIcon from "@/public/prepresent2.svg";
import Spline from "@splinetool/react-spline";
import Footer from "@/components/ui/footer";
// import NowMap from "@/components/ui/nowmap";
import dynamic from "next/dynamic";
import { useMemo } from "react";

export default function Home() {
  const Map = useMemo(
    () =>
      dynamic(() => import("../components/ui/nowmap"), {
        loading: () => <p>A map is loading</p>,
        ssr: false,
      }),
    []
  );

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
            <br className="dynamic-breakpoint"></br>Currently, I am working on
            the cloud operations team at{" "}
            <a className="" href="https://www.sunlife.com/en/">
              Sun Life
            </a>{" "}
            as a cloud engineering intern
          </p>
          <br className="dynamic-breakpoint"></br>

          <p>
            I{"'"}ve taken an interest in the software infrastructure space. I
            {"'"}ve had experience in building products from an AI powered no
            code builder scratch to solutions for the cloud.
            {/* This helps me build creative solutions and collaborate. */}
          </p>
          <br className="dynamic-breakpoint"></br>
          <p>
            You can react out to me at{" "}
            <a href="mailto:tsanand@uwaterloo.ca">tsanand@uwaterloo.ca</a>
          </p>
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
          <ProjectCardComponent
            name="colorcal"
            url=""
            icon={colorcalIcon}
            description="Automatically color codes your google calendar events. Uses Gemini API to decide categories"
          ></ProjectCardComponent>
          <ProjectCardComponent
            name="prepresent"
            url=""
            icon={prepresentIcon}
            description="Emotion recognition to help you present better. Uses OpenCV and Flask"
          ></ProjectCardComponent>
        </div>
        <div className="otherStart">
          <div className="otherProjects">
            <OtherProjectComponent
              name="GrapesJS Plugin"
              url=""
              description="A Multi-page plugin for GrapesJS, a no-code builder"
            ></OtherProjectComponent>
            <OtherProjectComponent
              name="Pashu"
              url=""
              description="A web-based animal shelter game, built on WebGL"
            ></OtherProjectComponent>

            <br></br>
          </div>
          <div className="otherProjects">
            <OtherProjectComponent
              name="EcoClassifer"
              url=""
              description="An app to classify daily use products as harmful"
            ></OtherProjectComponent>
            <OtherProjectComponent
              name="Traviz"
              url=""
              description="A web-based animal shelter game, built on WebGL"
            ></OtherProjectComponent>
            <br></br>
          </div>
        </div>
        <div className="nowHeading font-semibold my-16 text-2xl">Now</div>
        <div className="ending">
          Learning about cloud infrastructure and also working on a fullstack
          project with a friend. Trying to increase my system design knowledge
        </div>
        <Map></Map>
        <div className="spline">
          <Spline scene="https://prod.spline.design/XGp0DZbfZeK6WW5n/scene.splinecode" />
        </div>
      </div>
      <hr className="hrLine"></hr>
      <Footer></Footer>
    </main>
  );
}
