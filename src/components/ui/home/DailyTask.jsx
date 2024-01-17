import { FiPlus } from "react-icons/fi";

const DailyTask = () => {
    return (
        <div className="h-full w-full bg-white p-4 rounded-sm flex-grow">
            <div className="flex flex-col gap-3 h-full w-full">
                <h1 className="mb-3 font-bold text-xl text-[#505673]">Daily Task (3)</h1>
                <div className="grid grid-cols-2 gap-3 h-full w-full">
                    <div className="bg-[#F5F6FA] relative min-h-[150px]">
                        <p className="absolute top-3 left-3">Add new</p>
                        <FiPlus className="absolute bottom-3 right-3 text-2xl" />
                    </div>
                    <div className="bg-[#D5DBF7] relative min-h-[150px]">
                        <div className="absolute top-3 right-3 flex items-center gap-1">
                            <p className="h-1 w-1 rounded-full bg-[#5F7FD2]"></p>
                            <p className="text-[10px]">New Assign</p>
                        </div>
                        <p className="absolute top-10 left-3 text-sm max-w-[60%]">Change color pallet to more bright</p>
                    </div>
                    <div className="bg-[#f7f3e3] relative min-h-[150px]">
                        <div className="absolute top-3 right-3 flex items-center gap-1">
                            <p className="h-1 w-1 rounded-full bg-[#56B455]"></p>
                            <p className="text-[10px]">In progress</p>
                        </div>
                        <p className="absolute top-10 left-3 text-sm max-w-[60%]">Make prototype for mobile versions</p>
                    </div>
                    <div className="bg-[#dfedda] relative min-h-[150px]">
                        <div className="absolute top-3 right-3 flex items-center gap-1">
                            <p className="text-[10px] text-[#56B455]">Complete</p>
                        </div>
                        <p className="absolute top-10 left-3 text-sm max-w-[60%]">Fix Home page responsive issue</p>
                    </div>
                    {/* <div className="bg-[#f7f3e3] relative min-h-[150px]">
                        <p className="absolute top-3 left-3">Add new</p>
                    </div>
                    <div className="bg-[#dfedda] relative min-h-[150px]">
                        <p className="absolute top-3 left-3">Add new</p>
                    </div> */}
                </div>
            </div>
        </div>
    )
}

export default DailyTask