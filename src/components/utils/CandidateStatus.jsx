import MTable from "./Table";
import { SearchButton } from "./searchButton";
import FilterListIcon from "@mui/icons-material/FilterList";

export const CandidateStatus = () => {
  return (
    <div
      style={{ "box-shadow": "rgba(0, 0, 0, 0.35) 0px 5px 15px" }}
      className="flex flex-col w-full p-2 my-4"
    >
      <div className="flex justify-between px-[3%] py-[1%] mb-[1%] w-full">
        <div className="flex items-center justify-center gap-6">
          <div className="text-2xl font-semibold">Candidate Status</div>
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
      <div>
        <MTable />
      </div>
    </div>
  );
};
