import Image from "next/image";
import Link from "next/link";
import colorcalIcon from "@/public/colorcalfinal.svg";

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
  return (
    <div className={name} style={{ position: "relative" }}>
      <div className="descriptionStyle"></div>
      <Link href={url}>
        <Image
          className="pagal"
          src={icon}
          alt={name}
          height={280}
          width={250}
        />
        <p
          className="textHidden"
          style={{
            display: "none",
            position: "absolute",
            bottom: 0,
            left: 0,
            right: 0,
            textAlign: "center",
            color: "white",
            margin: "auto",
            padding: "10px",
          }}
        >
          REDISAFE<br></br> Modern app for monitoring your health data offline
          and prevent contracting COVID.
        </p>
      </Link>
    </div>
  );
}

const projectDiv = document.getElementById("colorcal");

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
