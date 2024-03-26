import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import Image from "next/image";

import pythonSvg from "@/public/python.svg";
import javascriptSvg from "@/public/javascript.svg";
import typescriptSvg from "@/public/typescript.svg";
import csvg from "@/public/c.svg";
import perlSvg from "@/public/perl.svg";
import sqlSvg from "@/public/mysql.svg";
import mongoSvg from "@/public/mongodb.svg";
import postgresqlSvg from "@/public/postgresql.svg";
import drizzleSvg from "@/public/drizzle.svg";

export default function Skills() {
  return (
    <Table>
      <TableCaption>A list of your recent invoices.</TableCaption>
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
            <Image src={pythonSvg} alt="Python" height={55} width={55}></Image>
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
            <Image src={drizzleSvg} alt="C" height={35} width={35}></Image>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// export function images() {
//   return <Image src={pythonSvg} alt="Python" height={280} width={250}></Image>;
// }
