// import { Bar } from 'react-chartjs-2';
import moment from 'moment';
import { FiCalendar } from 'react-icons/fi';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
    {
        name: '09 am',
        uv: 35,
        pv: 58,
        amt: 2400,
    },
    {
        name: '10 am',
        uv: 30,
        pv: 35,
        amt: 2210,
    },
    {
        name: '11 am',
        uv: 47,
        pv: 43,
        amt: 2290,
    },
    {
        name: '12 pm',
        uv: 35,
        pv: 25,
        amt: 2000,
    },
    {
        name: '01 pm',
        uv: 18,
        pv: 23,
        amt: 2181,
    },
    {
        name: '02 pm',
        uv: 10,
        pv: 5,
        amt: 2500,
    },
    {
        name: '03 pm',
        uv: 27,
        pv: 38,
        amt: 2100,
    },
    {
        name: '04 pm',
        uv: 50,
        pv: 60,
        amt: 2100,
    },
    {
        name: '05 pm',
        uv: 40,
        pv: 50,
        amt: 2100,
    },
];

const Date = moment().format('Do MMMM');

const ActivityChart = () => {
    return (
        <div className='bg-white rounded-sm col-span-3 p-5'>
            <div className='flex justify-between mb-5'>
                <h1 className='text-xl font-bold'>Employee Activity </h1>
                <div className="text-sm bg-[#F5F6FA] px-2 h-7 rounded flex gap-x-2 justify-center items-center">
                    <div className="h-5 w-5 bg-[#d0d2df] rounded-full flex justify-center items-center"><FiCalendar className="text-[12px]" /></div>
                    <p>{Date}</p>
                </div>
            </div>

            <div className="w-full bg-white p-5 h-80">
                <ResponsiveContainer width="100%" height="100%">
                    <BarChart width={730} height={250} data={data}>
                        <CartesianGrid stroke="#F5F6FA" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        {/* <Legend /> */}
                        <Bar dataKey="pv" fill="#3D55CC"  radius={[5, 5, 5, 5]}/>
                        <Bar dataKey="uv" fill="#BDC4E2"  radius={[5, 5, 5, 5]}/>
                    </BarChart>
                </ResponsiveContainer>
            </div>

        </div>
    )
}

export default ActivityChart