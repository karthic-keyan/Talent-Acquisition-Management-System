import { Divider } from "@mui/material";
import Chart from "./utils/Chart";
import Dropdown from "./utils/select";
import ApplicationInfoCard from "./utils/ApplicationInfoCard";
import AssessmentCard from "./utils/AssessementCard";
import InterviewsInfo from "./utils/InterviewInfo";
import DatePicker from "./utils/DateCalender";
import { Upcoming } from "./utils/Upcomings";
import { Hiring } from "./utils/Hiring";
import { HiringCandidate } from "./utils/HiringCandidates";
import { PostedJobs } from "./utils/PostedJobs";
import { CandidateStatus } from "./utils/CandidateStatus";

const Body = () => {
  return (
    <div className="flex w-full">
      <div className="flex flex-col w-full">
        <div className="flex flex-col w-full">
          <div className="flex flex-col h-24 gap-3">
            <div className="text-2xl">Hr employee</div>
            <div>
              Enjoy your selection potential candidates Tracking and management
              system
            </div>
          </div>
          <div className="flex h-72">
            <ApplicationInfoCard />
            <AssessmentCard />
          </div>
        </div>
        <div className="flex w-full">
          <div className="flex flex-col w-3/4">
            <div
              style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              id="scrollbar1"
              className="scrollbar1 mb-4 flex overflow-x-auto overflow-y-hidden h-[400px]"
            >
              <InterviewsInfo />
            </div>
            <div className="flex h-[500px]">
              <PostedJobs />
            </div>
            <div className="flex h-[520px]">
              <CandidateStatus />
            </div>
          </div>
          <div className="flex flex-col w-1/4">
            <div className="flex">
              <DatePicker />
            </div>
            <div className="flex h-72">
              <Upcoming />
            </div>
            <div className="flex h-72">
              <Hiring />
            </div>
            <div className="flex">
              <HiringCandidate />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Body;
