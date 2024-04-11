import Image from "next/image";
import instagramIcon from "@/public/instagram.svg";
import githubIcon from "@/public/github.svg";
import mailIcon from "@/public/mail.svg";
import Link from "next/link";

export default function Footer() {
  return (
    <div className="footerContainer">
      <h1 className="footerText">Stay obsessed</h1>
      <div className="socials">
        <Link
          // rel="noopener noreferrer"
          target="_blank"
          href="https://www.instagram.com/tejasanand_/"
          passHref
        >
          <Image
            className="insta"
            src={instagramIcon}
            alt="instagram"
            width={96}
            height={96}
          ></Image>
        </Link>
        <Link
          target="_blank"
          // rel="noopener noreferrer"
          href="https://github.com/tejasanand"
        >
          <Image
            className="insta"
            src={githubIcon}
            alt="GitHub"
            width={64}
            height={64}
          ></Image>
        </Link>
        <Link
          rel="noopener noreferrer"
          target="_blank"
          href="mailto:tsanand@uwaterloo.ca"
        >
          <Image
            className="insta"
            src={mailIcon}
            alt="Email"
            width={64}
            height={64}
          ></Image>
        </Link>
      </div>
    </div>
  );
}
