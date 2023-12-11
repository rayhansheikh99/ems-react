import Date from "../../components/ui/home/Date"
import SideNav from "../../components/ui/home/SideNav"
import { FaRegBell } from "react-icons/fa6";
import { FiClock } from "react-icons/fi";
import { FiCalendar } from "react-icons/fi";

const Home = () => {

  return (
    <div className="bg-[#f5f6fa] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-x-5">
          <SideNav />
          <div className="w-[calc(100%-255px)] min-h-screen max-h-screen mr-5">
            <div className="flex justify-between items-center bg-white text-[#505673] px-4 h-16 rounded-[3px]">
              <div className="flex items-center gap-x-10">
                <div className="text-sm bg-[#F5F6FA] px-2 h-7 rounded flex gap-x-2 justify-center items-center">
                  <div className="h-5 w-5 bg-[#d0d2df] rounded-full flex justify-center items-center"><FiCalendar className="text-[12px]" /></div>
                  <Date />
                </div>
                <div className="flex items-center gap-x-5">
                  <div className="bg-[#E8EAF2] px-2.5 h-7 rounded flex gap-x-2 justify-center items-center">
                    <div className="h-5 w-5 bg-[#F3F4F6] rounded-full flex justify-center items-center"><FiClock className="text-[12px]" /></div>
                    <p>Break In</p>
                  </div>
                  <div className="bg-[#E8EAF2] px-2.5 h-7 rounded flex gap-x-2 justify-center items-center">
                    <div className="h-5 w-5 bg-[#F3F4F6] rounded-full flex justify-center items-center"><FiClock className="text-[12px]" /></div>
                    <p>Break Out</p>
                  </div>
                </div>
              </div>
              <div className="h-[30px] w-[30px] bg-[#CBD1F1] rounded-full flex justify-center items-center">
                <FaRegBell className="text-[#3D55CC] text-sm" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home