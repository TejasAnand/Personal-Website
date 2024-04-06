import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

import Image from "next/image";

import pythonSvg from "@/public/python2.svg";
import javascriptSvg from "@/public/javascript.svg";
import typescriptSvg from "@/public/typescript.svg";
import csvg from "@/public/c.svg";
import perlSvg from "@/public/perl.svg";
import sqlSvg from "@/public/mysql.svg";
import mongoSvg from "@/public/mongodb.svg";
import postgresqlSvg from "@/public/postgresql.svg";
import drizzleSvg from "@/public/drizzle.svg";
import awsSvg from "@/public/aws.svg";
import azureSvg from "@/public/azure.svg";
import gitSvg from "@/public/git.svg";
import vercelSvg from "@/public/vercel.svg";
import linuxSvg from "@/public/linux.svg";
import openai from "@/public/openai.svg";
import redis from "@/public/redis.svg";

export default function Skills() {
  return (
    <Table>
      <TableCaption>A list of tech I&apos;ve learnt to use</TableCaption>
      <TableHeader>
        <TableRow>
          <TableHead className="w-[100px]">Categories</TableHead>
          <TableHead className="text-right">Technologies</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell className="font-medium">Programming Languages</TableCell>
          <TableCell className="skillBox text-right">
            <Image src={pythonSvg} alt="Python" height={40} width={40}></Image>
            <Image
              src={javascriptSvg}
              alt="JavaScript"
              height={40}
              width={40}
            ></Image>
            <Image
              src={typescriptSvg}
              alt="Typescript"
              height={35}
              width={35}
            ></Image>
            <Image src={csvg} alt="C" height={35} width={35}></Image>
            <Image src={perlSvg} alt="Perl" height={40} width={40}></Image>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Databases</TableCell>
          <TableCell className="skillBox text-right">
            <Image src={sqlSvg} alt="JavaScript" height={40} width={40}></Image>
            <Image
              src={mongoSvg}
              alt="Typescript"
              height={35}
              width={35}
            ></Image>
            <Image src={postgresqlSvg} alt="C" height={35} width={35}></Image>
            <Image src={redis} alt="C" height={35} width={35}></Image>
            <Image src={drizzleSvg} alt="C" height={35} width={35}></Image>
          </TableCell>
        </TableRow>
        <TableRow>
          <TableCell className="font-medium">Cloud/DevOps</TableCell>
          <TableCell className="skillBox text-right">
            <Image src={awsSvg} alt="JavaScript" height={40} width={40}></Image>
            {/* <Image
              src={azureSvg}
              alt="Typescript"
              height={35}
              width={35}
            ></Image> */}
            <Image src={openai} alt="C" height={35} width={35}></Image>
            <Image src={vercelSvg} alt="C" height={35} width={35}></Image>
            <Image src={gitSvg} alt="C" height={35} width={35}></Image>
            <Image src={linuxSvg} alt="C" height={35} width={35}></Image>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// export function images() {
//   return <Image src={pythonSvg} alt="Python" height={280} width={250}></Image>;
// }
