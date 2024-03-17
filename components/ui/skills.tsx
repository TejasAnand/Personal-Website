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
            <Image src={pythonSvg} alt="Python" height={50} width={50}></Image>
            <Image src={pythonSvg} alt="Python" height={50} width={50}></Image>
            <Image src={pythonSvg} alt="Python" height={50} width={50}></Image>
            <Image src={pythonSvg} alt="Python" height={50} width={50}></Image>
            <Image src={pythonSvg} alt="Python" height={50} width={50}></Image>
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  );
}

// export function images() {
//   return <Image src={pythonSvg} alt="Python" height={280} width={250}></Image>;
// }
