import Image from "next/image";
import Link from "next/link";
import colorcalIcon from "@/public/colorcalfinal.svg";
import { useHover } from "@uidotdev/usehooks";
import * as React from "react";
import { useState } from "react";

interface ProjectCardComponentProps {
  name: string;
  description: string;
  url: string;
  icon: string;
}

export function ProjectCardComponent({
  name,
  description,
  url,
  icon,
}: ProjectCardComponentProps) {
  const [hidden, setHidden] = useState(true);
  return (
    <div
      onMouseEnter={() => setHidden(false)}
      onMouseLeave={() => setHidden(true)}
      className={name}
      style={{ position: "relative" }}
    >
      {/* {hidden ? null : <h1>Hovering</h1>} */}
      <div className="descriptionStyle"></div>
      <Link href={url}>
        <Image
          className="pagal"
          src={icon}
          alt={name}
          height={280}
          width={250}
          style={{
            filter: hidden ? "none" : "blur(3px)",
            transition: "filter 0.5s ease-in-out",
          }}
        />
        <p className="textHidden">
          Modern app for monitoring your health data offline and prevent
          contracting COVID.
        </p>
      </Link>
    </div>
  );
}

interface OtherProjectComponentProps {
  name: string;
  description: string;
  url: string;
}

export function OtherProjectComponent({
  name,
  description,
  url,
}: OtherProjectComponentProps) {
  return (
    <div className="otherProject">
      <div className="font-semibold text-lg projectName">
        <a className="projectLink" href={url}>
          {name}
        </a>
      </div>
      <div className="text-gray-400 text-sm projectDescription">
        {description}
      </div>
    </div>
  );
}
