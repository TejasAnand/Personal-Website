import Image from "next/image";

export function ProjectCardComponent() {
  return <div className="projectCard"></div>;
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
