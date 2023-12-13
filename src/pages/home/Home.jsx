import ActivityChart from "../../components/ui/home/ActivityChart"
import Attendance from "../../components/ui/home/Attendance"
import SideNav from "../../components/ui/home/SideNav"
import TaskProgress from "../../components/ui/home/TaskProgress"
import TopHeader from "../../components/ui/home/TopHeader"
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const Home = () => {

  const data = [
    {
      name: '0',
      uv: 4000,
      pv: 2400,
      amt: '08.00 am',
    },
    {
      name: '1',
      uv: 3000,
      pv: 1398,
      amt: 2210,
    },
    {
      name: '2',
      uv: 2000,
      pv: 5800,
      amt: 2290,
    },
    {
      name: '3',
      uv: 2780,
      pv: 3908,
      amt: 2000,
    },
    {
      name: '4',
      uv: 1890,
      pv: 4800,
      amt: 2181,
    },
    {
      name: '5',
      uv: 2390,
      pv: 3800,
      amt: 2500,
    },
    {
      name: '6',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '7',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
    {
      name: '8',
      uv: 3490,
      pv: 4300,
      amt: 2100,
    },
  ];

  return (
    <div className="bg-[#f5f6fa] min-h-screen">
      <div className="max-w-[1500px] mx-auto ">
        <div className="flex gap-x-5">
          <div>
            <SideNav />
          </div>

          <div className="w-[calc(100%-255px)] ml-[255px] min-h-screen mr-5">
            <TopHeader />
            <div className="w-full flex gap-x-5 mt-5">
              <div className="w-full max-w-[70%] h-full grid grid-cols-3 gap-5">
                <Attendance />
                <ActivityChart />
                <div className="col-span-3 flex gap-5 justify-center items-center w-full">
                  <TaskProgress />
                  <div className="w-[60%] bg-white p-5 h-full">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart width={730} height={250} data={data}
                        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                        <defs>
                          <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
                          </linearGradient>
                          <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <XAxis dataKey="name" />
                        <YAxis />
                        <CartesianGrid strokeDasharray="3 3" />
                        <Tooltip />
                        <Area type="monotone" dataKey="uv" stroke="#8884d8" fillOpacity={1} fill="url(#colorUv)" />
                        <Area type="monotone" dataKey="pv" stroke="#82ca9d" fillOpacity={1} fill="url(#colorPv)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
              <div className="bg-red-400 w-full max-w-[30%] h-full">
                hello
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