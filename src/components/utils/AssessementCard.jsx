import emp from "../../assets/image.png";

const AssessmentCard = () => {
  return (
    <div className="flex w-[35%] m-2 rounded bg-neutral-400">
      <div className="relative flex items-center justify-between w-full h-full p-5 font-sans text-white rounded-lg bg-gradient-to-r from-blue-700 to-blue-400">
        <div className="flex flex-col items-center justify-between h-full">
          <div className="text-[70px]">📋</div>
          <div className="text-[60px] font-bold">0033</div>
          <div className="text-xl">New Assessment's</div>
        </div>
        <div className="absolute flex flex-col items-center space-y-5 right-5 bottom-5">
          <div className="flex items-end">
            <img src={emp} alt="Large Character" className="h-24" />
            <img src={emp} alt="Small Character" className=" h-60" />
          </div>
          <button className="px-4 py-2 text-center text-blue-500 bg-white rounded">
            VIEW DETAILS
          </button>
        </div>
      </div>
    </div>
  );
};

export default AssessmentCard;
