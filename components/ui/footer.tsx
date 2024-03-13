import Image from "next/image";
import instagramIcon from "@/public/instagram.svg";
import githubIcon from "@/public/github.svg";
import mailIcon from "@/public/mail.svg";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="socials">
        <Image
          className="insta"
          src={instagramIcon}
          alt="instagram"
          width={96}
          height={96}
        ></Image>
        <Image
          className="insta"
          src={githubIcon}
          alt="GitHub"
          width={64}
          height={64}
        ></Image>
        <Image
          className="insta"
          src={mailIcon}
          alt="Email"
          width={64}
          height={64}
        ></Image>
      </div>
    </div>
  );
}
