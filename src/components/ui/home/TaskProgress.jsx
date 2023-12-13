import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import { useEffect, useState } from "react";

const TaskProgress = () => {

    const task = 78
    const [percentage, setPercentage] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            if (percentage < task) {
                setPercentage(percentage + 1);
            }
        }, 1);
    }, [percentage]);

    return (
        <>
            <div className="p-5 bg-white w-[40%] flex justify-center items-center rounded-sm">
                <div style={{ width: 200, height: 200 }} className="relative" >
                    <CircularProgressbar value={percentage}
                        styles={buildStyles({

                            // Colors
                            pathColor: `#ED9515`,
                            textColor: '#f88',
                            trailColor: '#FBE9CF',
                            backgroundColor: '#ED9515',
                        })}
                    />
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-3xl font-bold">
                        <p>{percentage}%</p>
                        <p className="text-lg text-center -mt-2 text-[#8e8e8f]">Task</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default TaskProgress