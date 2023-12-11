import { LuHome } from "react-icons/lu";
import { LuDollarSign } from "react-icons/lu";
import { CiCalendar } from "react-icons/ci";
import { GoClock } from "react-icons/go";
import { TbDatabase } from "react-icons/tb";
import { LuBookOpen } from "react-icons/lu";
import { GoAlert } from "react-icons/go";
import { GrDocumentText } from "react-icons/gr";
import { BsChatLeft } from "react-icons/bs";
import { PiDotsThreeOutlineFill } from "react-icons/pi";
import user from "../../assets/user/icon.jpg";

const Home = () => {
  
  return (
    <div className="bg-[#f5f6fa] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-x-5">

          <div className="bg-white w-[255px] max-h-screen relative">
            <div className="ml-[60px]  py-2">
              <h2 className="text-lg text-blue-500 font-bold">Employee</h2>
              <p className="text-[12px] text-[#878CA8]">Management System</p>
            </div>
            <hr className="bg-red-500"/>
            <div className="ml-[30px] pt-10 space-y-[18px] pb-20 max-h-screen overflow-y-auto no-scrollbar">
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
                <LuBookOpen />
                <h2>Task</h2>
              </div>
              <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
                <GoAlert />
                <h2>Penalty</h2>
              </div>
              <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
                <GrDocumentText />
                <h2>Notice Board</h2>
              </div>
              <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5">
                <BsChatLeft />
                <h2>Chat</h2>
              </div>
              <div className="bg-[#F5F6FA] flex items-center justify-between gap-x-2 p-2.5 w-[210px] rounded fixed bottom-5">
                <img src={user} alt="user" className="h-6 w-6 rounded-sm" />
                <h2 className="text-sm font-bold truncate">Humayon Anthony</h2>
                <PiDotsThreeOutlineFill className="text-slate-300 text-xl" />
              </div>
            </div>
          </div>

          <div className="w-[calc(100%-255px)] min-h-screen">
            main
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home