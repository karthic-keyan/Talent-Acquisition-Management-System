import { Divider } from "@mui/material";
import { FaPython } from "react-icons/fa";
import { MdArrowUpward } from "react-icons/md";
import { SearchButton } from "./searchButton";
import FilterListIcon from "@mui/icons-material/FilterList";

export const PostedJobs = () => {
  return (
    <div
      style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className="flex flex-col w-full p-2 "
    >
      <div className="flex justify-between px-[3%] py-[1%] mb-[1%] w-full">
        <div className="flex items-center justify-center gap-6">
          <div className="text-2xl font-semibold">Posted Jobs</div>
          <div>View All</div>
        </div>
        <div className="flex gap-6">
          <div>
            <SearchButton classname=" w-80" />
          </div>
          <div>
            <button
              type="button"
              style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
              class=" focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-3 text-center inline-flex items-center me-2"
            >
              <FilterListIcon sx={{ color: "blue" }} />
              Filters
            </button>
          </div>
        </div>
      </div>
      <div className="flex w-full gap-9">
        <div>Active Jobs</div>
        <div>Inactive Jobs</div>
        <div>Completed Jobs</div>
      </div>
      <Divider />
      <div className="flex p-[2%] w-full gap-8 h-full">
        <div
          style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="flex flex-col p-2 w-[23%] h-[100%]"
        >
          <div className="flex items-center justify-between px-2 py-3">
            <FaPython />
            <div> Python Developer</div>
            #001
          </div>
          <Divider />
          <div className="flex flex-col items-center justify-center gap-3 h-[70%]">
            Senior Developer
            <div className="flex items-center justify-center w-20 h-20 text-2xl bg-blue-300 rounded">
              258
            </div>
            Total Applicant
          </div>
          <Divider />
          <div className="flex py-[2%]">
            <MdArrowUpward className="w-7 h-7" />
            <div className="flex items-center">28 % vs lat month</div>
            <div className="flex items-center pl-4">6 mins ago</div>
          </div>
        </div>
        <div
          style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="flex flex-col p-2 w-[23%] h-[100%]"
        >
          <div className="flex items-center justify-between px-2 py-3">
            <FaPython />
            <div> Angular Developer</div>
            #001
          </div>
          <Divider />
          <div className="flex flex-col items-center justify-center gap-3 h-[70%]">
            Senior Developer
            <div className="flex items-center justify-center w-20 h-20 text-2xl bg-blue-300 rounded">
              258
            </div>
            Total Applicant
          </div>
          <Divider />
          <div className="flex py-[2%]">
            <MdArrowUpward className="w-7 h-7" />
            <div className="flex items-center">28 % vs lat month</div>
            <div className="flex items-center pl-4">6 mins ago</div>
          </div>
        </div>
        <div
          style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="flex flex-col p-2 w-[23%] h-[100%]"
        >
          <div className="flex items-center justify-between px-2 py-3">
            <FaPython />
            <div> Python Developer</div>
            #001
          </div>
          <Divider />
          <div className="flex flex-col items-center justify-center gap-3 h-[70%]">
            Senior Developer
            <div className="flex items-center justify-center w-20 h-20 text-2xl bg-blue-300 rounded">
              258
            </div>
            Total Applicant
          </div>
          <Divider />
          <div className="flex py-[2%]">
            <MdArrowUpward className="w-7 h-7" />
            <div className="flex items-center">28 % vs lat month</div>
            <div className="flex items-center pl-4">6 mins ago</div>
          </div>
        </div>
        <div
          style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
          className="flex flex-col p-2 w-[23%] h-[100%]"
        >
          <div className="flex items-center justify-between px-2 py-3">
            <FaPython />
            <div> Python Developer</div>
            #001
          </div>
          <Divider />
          <div className="flex flex-col items-center justify-center gap-3 h-[70%]">
            Senior Developer
            <div className="flex items-center justify-center w-20 h-20 text-2xl bg-blue-300 rounded">
              258
            </div>
            Total Applicant
          </div>
          <Divider />
          <div className="flex py-[2%]">
            <MdArrowUpward className="w-7 h-7" />
            <div className="flex items-center">28 % vs lat month</div>
            <div className="flex items-center pl-4">6 mins ago</div>
          </div>
        </div>
      </div>
    </div>
  );
};
