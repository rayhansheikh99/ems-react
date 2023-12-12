import SideNav from "../../components/ui/home/SideNav"
import TopHeader from "../../components/ui/home/TopHeader"

const Home = () => {

  return (
    <div className="bg-[#f5f6fa] min-h-screen">
      <div className="max-w-[1400px] mx-auto">
        <div className="flex gap-x-5">
          <SideNav />
          <div className="w-[calc(100%-255px)] min-h-screen max-h-screen mr-5">
            <TopHeader />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home