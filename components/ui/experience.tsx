import Image from "next/image";

interface ExperienceComponentProps {
  imgName: string;
  link: string;
  iconName: string;
  alt: string;
  width: number;
  height: number;
  title: string;
  description: string;
  iconStyle: string;
}

export default function ExperienceComponent({
  imgName,
  link,
  iconName,
  alt,
  width,
  height,
  title,
  description,
  iconStyle,
}: ExperienceComponentProps) {
  return (
    <div className="rows">
      <div className={iconStyle}>
        <a rel="noopener noreferrer" target="_blank" href={link}>
          <Image
            className={imgName}
            src={iconName}
            alt={alt}
            width={width}
            height={height}
          />
        </a>
      </div>
      <div className="col-right">
        <div className="line">
          <div className="font-medium  text-base title">{title}</div>
        </div>
        <div className="text-gray-400 text-base description">{description}</div>
      </div>
    </div>
  );
}
