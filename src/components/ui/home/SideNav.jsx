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
import { FiPieChart } from "react-icons/fi";
import user from "../../../assets/user/icon.jpg";

const SideNav = () => {
    return (
        <div className="bg-white w-[255px] min-h-screen fixed">
            <div className="bg-white absolute top-0 h-16 border-b-2 flex flex-col justify-center w-full">
                <h2 className="ml-[60px] text-lg text-blue-500 font-bold">Employee</h2>
                <p className="ml-[60px] text-[12px] text-[#878CA8]">Management System</p>
            </div>

            <div className="ml-[30px] pt-28 space-y-[18px] pb-20 max-h-screen overflow-y-auto no-scrollbar">
                <div className="bg-blue-500 flex items-center gap-x-2 text-white font-bold w-max px-[30px] py-2.5 rounded-lg lg:cursor-pointer duration-500">
                    <LuHome className="icon-sidebar" />
                    <h2>Dashboard</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <CiCalendar className="icon2-sidebar" />
                    <h2>Attendance</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <GoClock className="icon2-sidebar" />
                    <h2>Leave</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <LuDollarSign className="icon-sidebar"/>
                    <h2>Salary</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <TbDatabase className="icon-sidebar" />
                    <h2>Loan Application</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <FiPieChart className="icon-sidebar" />
                    <h2>Report</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <LuBookOpen className="icon-sidebar" />
                    <h2>Task</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <GoAlert className="icon2-sidebar" />
                    <h2>Penalty</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <GrDocumentText className="icon2-sidebar" />
                    <h2>Notice Board</h2>
                </div>
                <div className="flex items-center gap-x-2 w-max px-[30px] py-2.5 hover:bg-blue-500 hover:text-white rounded-lg lg:cursor-pointer duration-500">
                    <BsChatLeft className="icon2-sidebar" />
                    <h2>Chat</h2>
                </div>
            </div>
            <div className="bg-white w-full absolute bottom-0 pl-[30px] overflow-hidden">
                <div className="bg-[#F5F6FA] flex items-center justify-between gap-x-2 p-2.5 w-[210px] mb-5 rounded">
                    <img src={user} alt="user" className="h-6 w-6 rounded-sm" />
                    <h2 className="text-sm font-bold truncate">Humayon Anthony</h2>
                    <PiDotsThreeOutlineFill className="text-slate-300 text-xl" />
                </div>
            </div>
        </div>
    )
}

export default SideNav