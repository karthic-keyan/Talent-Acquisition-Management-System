import Avatar from '@mui/material/Avatar';

export const Hiring = () => {
    return (
        <div className="flex flex-col w-full pt-[3%] px-[10%]">
            <div>
            <div className="flex justify-between h-[20%] w-full">
            <div>
            Activity
            </div>
            <div>
                View All
            </div>
            </div>
            <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%]">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[25px]">
                    <div className="text-sm">John Doe</div>
                    <div className="text-sm">Interview withStella</div>
                    <div className="text-sm">15 mins ago</div>
                    </div>
                </div>
                <div className="flex mb-4">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%]">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[50px]">
                <div className="text-sm">John Doe</div>
                    <div className="text-sm">Interview withStella</div>
                    <div className="text-sm">15 mins ago</div>
                    </div>
                </div>
                <div className="flex">
                <div className="flex mr-3 flex-col items-center justify-center w-[15%] ">
                <Avatar>H</Avatar>
                </div>
                <div className="flex flex-col mr-[15px]">
                <div className="text-sm">John Doe</div>
                    <div className="text-sm">Interview withStella</div>
                    <div className="text-sm">15 mins ago</div>
                    </div>
                </div>
            </div>
                
            </div>
    )
}