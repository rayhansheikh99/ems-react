import { LuHome } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { TbDatabase } from "react-icons/tb";

const Home = () => {
  return (
    <div className="container mx-auto bg-[#f5f6fa] ">
      <div className="flex gap-x-5">

        <div className="bg-white w-[255px]">
          <div className="ml-[70px] py-2">
            <h2 className="text-lg text-blue-500 font-bold">Employee</h2>
            <p className="text-[12px] text-[#878CA8]">Management System</p>
          </div>
          <hr />
          <div className="ml-10 mt-10 space-y-[18px]">
            <div className="bg-blue-500 flex items-center gap-x-2 text-white w-max px-[30px] py-2.5 rounded-lg">
              <LuHome />
              <h2>Dashboard</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <CiCalendar />
              <h2>Attendance</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <GoClock />
              <h2>Leave</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuDollarSign />
              <h2>Salary</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <TbDatabase />
              <h2>Loan Application</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuHome />
              <h2>Report</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuHome />
              <h2>Task</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuHome />
              <h2>Penalty</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuHome />
              <h2>Notice Board</h2>
            </div>
            <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
              <LuHome />
              <h2>Chat</h2>
            </div>
          </div>
        </div>

        <div className="w-full">
          main
        </div>
      </div>
    </div>
  )
}

export default Home