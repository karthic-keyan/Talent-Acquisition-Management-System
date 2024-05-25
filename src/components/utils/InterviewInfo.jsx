import React from "react";
import MeetingCard from "./MeetingCard";
import { Divider } from "@mui/material";
import "./style.css";

const InterviewsInfo = () => {
  const meetings = [
    {
      name: "John Smith",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10:30 A.M",
      profileImg: "https://via.placeholder.com/80",
      level1: "7/10",
      level2: "6/10",
      level3: "Waiting",
      meetVia: "G-Meet",
      interviewer1: "Stella",
      interviewer2: "Smith",
      interviewer3: "Stephan",
      attendees: "Johnson",
    },
    {
      name: "Maria",
      role: "Senior Python Developer",
      date: "19th Feb 2024",
      time: "10:30 A.M",
      profileImg: "https://via.placeholder.com/80",
      level1: "7/10",
      level2: "6/10",
      level3: "Waiting",
      meetVia: "G-Meet",
      interviewer1: "Stella",
      interviewer2: "Smith",
      interviewer3: "Stephan",
      attendees: "Johnson",
    },
  ];

  return (
    <div>
      <h2 className="px-4 pt-2 mb-2 text-2xl font-bold">
        Today Interviews Meetings Info
      </h2>
      <Divider />
      <div className="flex gap-6 p-3 mt-4">
        {meetings.map((meeting, index) => (
          <MeetingCard key={index} {...meeting} />
        ))}
      </div>
    </div>
  );
};

export default InterviewsInfo;
