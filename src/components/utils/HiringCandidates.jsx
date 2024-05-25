import { Button } from "@mui/material"
import Avatar from '@mui/material/Avatar';

export const HiringCandidate = () => {
    return (
        <div className="flex flex-col w-full mt-4 px-[10%]">
            <div>
            <div className="flex justify-between h-[15%] w-full">
            <div>
            Hiring Candidates
            </div>
            <div>
                View All
            </div>
            </div>
            <div className="flex mb-4">
            <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[25px]">
                    <div className="text-sm">Interview with Designer</div>
                    <div className="text-sm">Created by Stella</div>
                    <div className="text-sm">10 AM to 11 AM </div>
                    </div>
                    <div className="flex items-center justify-center"><Button variant="contained">Details</Button></div>
                </div>
                <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[50px]">
                    <div className="text-sm">Interview with PMO</div>
                    <div className="text-sm">Created by Stephen</div>
                    <div className="text-sm">10 AM to 11 AM </div>
                    </div>
                    <div className="flex items-center justify-center"><Button variant="contained">Details</Button></div>
                </div>
                <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[15px]">
                    <div className="text-sm">Interview with Net Admin</div>
                    <div className="text-sm">Created by Stella</div>
                    <div className="text-sm">10 AM to 11 AM </div>
                    </div>
                    <div className="flex items-center justify-center"><Button variant="contained">Details</Button></div>
                </div>
                <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[15px]">
                    <div className="text-sm">Interview with Net Admin</div>
                    <div className="text-sm">Created by Stella</div>
                    <div className="text-sm">10 AM to 11 AM </div>
                    </div>
                    <div className="flex items-center justify-center"><Button variant="contained">Details</Button></div>
                </div>
                <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[15px]">
                    <div className="text-sm">Interview with Net Admin</div>
                    <div className="text-sm">Created by Stella</div>
                    <div className="text-sm">10 AM to 11 AM </div>
                    </div>
                    <div className="flex items-center justify-center"><Button variant="contained">Details</Button></div>
                </div>
            </div>
                
            </div>
    )
}