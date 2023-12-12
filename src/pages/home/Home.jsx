import Attendance from "../../components/ui/home/Attendance"
import SideNav from "../../components/ui/home/SideNav"
import TopHeader from "../../components/ui/home/TopHeader"

const Home = () => {

  return (
    <div className="bg-[#f5f6fa] min-h-screen">
      <div className="max-w-[1500px] mx-auto ">
        <div className="flex gap-x-5">
          <div>
            <SideNav />
          </div>

          <div className="w-[calc(100%-255px)] min-h-screen max-h-screen mr-5">
            <TopHeader />
            <div className="w-full flex gap-x-5 mt-5">
              <div className="w-full max-w-[70%] h-full grid grid-cols-3 gap-5">
                <Attendance />
              </div>
              <div className="bg-red-400 w-full max-w-[30%] h-full">
                hhello
              </div>
            </div>
            <div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home