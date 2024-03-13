import Image from "next/image";
import instagramIcon from "@/public/insta.png";
import githubIcon from "@/public/github.svg";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="socials">
        <Image
          className="insta"
          src={instagramIcon}
          alt="instagram"
          width={60}
          height={60}
        ></Image>
        <Image
          className="insta"
          src={githubIcon}
          alt="GitHub"
          width={60}
          height={60}
        ></Image>
      </div>
    </div>
  );
}
