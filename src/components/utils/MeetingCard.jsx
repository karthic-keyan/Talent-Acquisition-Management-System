import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCalendarAlt, faClock } from "@fortawesome/free-solid-svg-icons";

const MeetingCard = ({
  name,
  role,
  date,
  time,
  profileImg,
  level1,
  level2,
  level3,
  meetVia,
  interviewer1,
  interviewer2,
  interviewer3,
  attendees,
}) => {
  return (
    <div className="flex bg-white rounded-lg shadow-lg">
      <div className="flex flex-col w-72">
        <div className="flex flex-col items-center justify-center gap-3 p-3 border">
          <img src={profileImg} alt={name} className="rounded-full" />
          <div className="flex flex-col items-center justify-center gap-3 ml-4">
            <h3 className="text-lg font-semibold">{name}</h3>
            <p className="text-gray-600">{role}</p>
          </div>
        </div>
        <div className="grid grid-cols-2 border">
          <div className="flex flex-col items-center justify-center gap-3 p-2 border">
            <FontAwesomeIcon
              icon={faCalendarAlt}
              className="text-blue-500 w-7 h-7"
            />
            <span>{date}</span>
          </div>
          <div className="flex flex-col items-center justify-center gap-3 p-2 border">
            <FontAwesomeIcon icon={faClock} className="text-blue-500 w-7 h-7" />
            <span>{time}</span>
          </div>
        </div>
      </div>
      <div className="flex flex-col">
        {/* <td className="py-1">1st Level:</td>
                        <td className="py-1">{level1}</td>
                        <td className="py-1">Interviewer: {interviewer1}</td> */}
        <div className="flex flex-col h-[60%]">
          <div className="flex h-[25%] w-full">
            <div className="flex border text-sm items-center  w-[50%] justify-center">
              {`1st Level :  ${level1}`}
            </div>
            <div className="flex items-center justify-center w-1/2 text-sm border">
              interviewer : {interviewer1}
            </div>
          </div>
          <div className="flex h-[25%] w-full">
            <div className="flex border text-sm items-center  w-[50%] justify-center">
              {`1st Level :  ${level2}`}
            </div>
            <div className="flex items-center justify-center w-1/2 text-sm border">
              interviewer : {interviewer2}
            </div>
          </div>
          <div className="flex h-[25%] w-full">
            <div className="flex border text-sm items-center  w-[50%] justify-center">
              {`1st Level :  ${level3}`}
            </div>
            <div className="flex items-center justify-center w-1/2 text-sm border">
              interviewer : {interviewer3}
            </div>
          </div>
          <div className="flex h-[25%] w-full">
            <div className="flex border text-sm items-center  w-[50%] justify-center">
              {`Meet Via :  ${meetVia}`}
            </div>
            <div className="flex items-center justify-center w-1/2 text-sm border">
              Attendees : {attendees}
            </div>
          </div>
        </div>
        <div className="flex items-center h-[40%] justify-center gap-3 px-2">
          <button className="w-56 h-10 p-2 py-2 text-xs text-blue-500 bg-blue-100 rounded ">
            Reschedule Meeting
          </button>
          <button className="w-40 h-10 p-2 text-xs text-white bg-blue-500 rounded">
            Join Meeting
          </button>
        </div>
      </div>
    </div>
  );
};

export default MeetingCard;
