import { Divider } from "@mui/material";
import Chart from "../utils/Chart";
import Dropdown from "../utils/select";

const ApplicationInfoCard = () => {
  return (
    <div
      style={{ boxShadow: "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className="flex w-[65%] my-2 rounded"
    >
      <div className="flex flex-col w-full">
        <div className="flex gap-5 p-4">
          <div className="text-xl">Application's Info</div>
          <div className="flex items-center justify-center">
            <div className="flex w-4 h-4 mx-2 bg-red-500 rounded"></div>
            <div>Received</div>
          </div>
          <div className="flex items-center justify-center">
            <div className="flex w-4 h-4 mx-2 bg-red-500 rounded"></div>
            <div>Processed</div>
          </div>
          <div className="flex ml-[30%]">
            <Dropdown />
          </div>
        </div>
        <Divider />
        <Chart width="100%" height={220} />
      </div>
    </div>
  );
};

export default ApplicationInfoCard;
