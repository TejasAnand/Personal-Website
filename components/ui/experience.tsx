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
        <a href={link}>
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
          <div className="title">
            <b>{title}</b>
          </div>
        </div>
        <div className="text-stone-400 description">{description}</div>
      </div>
    </div>
  );
}
