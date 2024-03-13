import Image from "next/image";
import instagramIcon from "@/public/instagram.svg";
import githubIcon from "@/public/github.svg";
import mailIcon from "@/public/mail.svg";

export default function Footer() {
  return (
    <div className="footerContainer">
      <div className="socials">
        <h1 className="footerText">Be kind, work hard, embrace adversity</h1>
        <a href="https://www.instagram.com/tejasanand_/">
          <Image
            className="insta"
            src={instagramIcon}
            alt="instagram"
            width={96}
            height={96}
          ></Image>
        </a>
        <a href="https://github.com/tejasanand">
          <Image
            className="insta"
            src={githubIcon}
            alt="GitHub"
            width={64}
            height={64}
          ></Image>
        </a>
        <a href="mailto:tsanand@uwaterloo.ca">
          <Image
            className="insta"
            src={mailIcon}
            alt="Email"
            width={64}
            height={64}
          ></Image>
        </a>
      </div>
    </div>
  );
}
