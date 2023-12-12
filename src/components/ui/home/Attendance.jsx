import { FiUser } from "react-icons/fi";
import { GoDotFill } from "react-icons/go";

const Attendance = () => {

    return (
        <>
            <div className="bg-white p-4 w-full rounded-sm">
                <div className="flex justify-between items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-[#CFD9FB] flex justify-center items-center">
                        <FiUser className="text-2xl text-[#5362B3]" />
                    </div>
                    <div>
                        <h1 className="text-[#878CA8]">Total attendance</h1>
                        <p className="text-2xl  text-right font-bold">24</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[#B5D0B1] text-[12px]">
                    <GoDotFill className="" />
                    <p className="">This months attendance</p>
                </div>
            </div>
            <div className="bg-white p-4 w-full rounded-sm">
                <div className="flex justify-between items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-[#FBE9CF] flex justify-center items-center">
                        <FiUser className="text-2xl text-[#B39253]" />
                    </div>
                    <div>
                        <h1 className="text-[#878CA8]">Holiday this year</h1>
                        <p className="text-2xl  text-right font-bold">65</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[#B39253] text-[12px]">
                    <GoDotFill className="" />
                    <p className="">3 holiday this month</p>
                </div>
            </div>
            <div className="bg-white p-4 w-full rounded-sm">
                <div className="flex justify-between items-center gap-2">
                    <div className="h-11 w-11 rounded-full bg-[#CFFBF6] flex justify-center items-center">
                        <FiUser className="text-2xl text-[#53B3A7]" />
                    </div>
                    <div>
                        <h1 className="text-[#878CA8]">Leave this year</h1>
                        <p className="text-2xl  text-right font-bold">35</p>
                    </div>
                </div>
                <div className="flex items-center gap-1 mt-1 text-[#53B3A7] text-[12px]">
                    <GoDotFill className="" />
                    <p className="">10 leave accepted <span className="text-[#44BBAD] text-[13px] underline">Apply for Leave</span></p>
                </div>
            </div>
        </>
    )
}

export default Attendance