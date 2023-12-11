import { useEffect, useState } from "react";
import moment from "moment"

function Date() {

    const [currentTime, setCurrentTime] = useState(moment());

    useEffect(() => {
        // Update the current time every second
        const intervalId = setInterval(() => {
            setCurrentTime(moment());
        }, 1000);

        return () => clearInterval(intervalId);
    }, []);

    const formattedTime = currentTime.format('Do MMMM, YYYY h:mm a');

    return (
        <>{formattedTime}</>
    )
}

export default Date