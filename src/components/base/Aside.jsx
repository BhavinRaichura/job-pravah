
import React from "react";
import TagRecentPostView from "../ui/aside/TagRecentPostView";
import TagRenderer from "../ui/TagRenderer";

const sectors = [
  "BankJob",
  "CompanyJob",
  "CourtJob",
  "EngineeringJob",
  "Google",
  "HealthDepartmentJOb",
  "IndustrialJob",
  "ItiJob",
  "OfficialJob",
  "PoliceArmyJob",
  "PostOfficeJob",
  "RailwayJob",
  "SchoolCollegeUniversity",
  "ShikshaVibhag",
  "SportsJob",
  "Ssc",
  "TeachingJob",
  "Upsc",
];
const qualifications = [
  "10th",
  "12th",
  "5th",
  "8th",
  "ComputerJob",
  "GraduationJob",
  "ItiJob",
  "PostGraduateJob",
];

const Aside = () => {
  return (
    <div className="px-10 py-10 max-md:px-5">
      <div className="mt-10 bg-gray-100 p-4 rounded-lg">
      <h1 className=" text-base font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
        Breaking
      </h1>
      </div>
      <TagRecentPostView tag={"Job"} />
      <TagRecentPostView tag={"Govt"} />
      <TagRecentPostView tag={"IT"} />
      <TagRecentPostView tag={"AdmitCard"} />

      <div className="mt-10 bg-gray-100 p-4 rounded-lg">
      <h1 className=" text-base font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
          Search By Sector
        </h1>
        <div className=" p-2 flex flex-wrap gap-1">
          {sectors.map((data, key) => (
            <TagRenderer tag={data} key={key}/>
          ))}
        </div>
      </div>

      <div className="mt-10 bg-gray-100 p-4 rounded-lg">
        <h1 className=" text-base font-semibold group-hover:text-gray-950 text-gray-700 border-b border-gray-300 p-2">
          Search By Qualifications
        </h1>
        <div className=" p-2 flex flex-wrap gap-1">
          {qualifications.map((data, key) => (
            <TagRenderer tag={data} key={key}/>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Aside;
