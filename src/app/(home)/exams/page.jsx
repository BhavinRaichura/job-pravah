//import Heading from "@/components/ui/Heading";
import Link from "next/link";
import React from "react";



const ExamsPage = () => {
  return (
    <div className="p-5 w-full">
      {/*<Heading heading={"Exams"} />*/}
      <div className="my-5 px-10">
        <ol>
          <Link target="_blank" href={"https://upsc.gov.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              UPSC
            </li>
          </Link>
          <Link target="_blank" href={"https://psc.cg.gov.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              CGPSC
            </li>
          </Link>
          <Link target="_blank" href={"https://uppsc.up.nic.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              UPPSC
            </li>
          </Link>
          <Link target="_blank" href={"https://upsc.gov.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              UPSC
            </li>
          </Link>
          <Link target="_blank" href={"https://psc.cg.gov.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              CGPSC
            </li>
          </Link>
          <Link target="_blank" href={"https://uppsc.up.nic.in/"}>
            <li className=" list-decimal font-semibold text-base p-2 hover:text-blue-500">
              UPPSC
            </li>
          </Link>
        </ol>
      </div>
    </div>
  );
};

export default ExamsPage;
