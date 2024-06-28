import React, { useState, useEffect } from 'react';
import moment from 'moment-timezone';

// Replace these with your actual image URLs
const yourImageUrl = 'path/to/your/image.jpg';
const herImageUrl = 'path/to/her/image.jpg';

const LoveWebsite = () => {
    const [dublinTime, setDublinTime] = useState('');
    const [melbourneTime, setMelbourneTime] = useState('');
    const [dublinDay, setDublinDay] = useState('');
    const [melbourneDay, setMelbourneDay] = useState('');

    useEffect(() => {
        // Function to fetch and set the current time and day in both time zones
        const fetchTime = () => {
            const dublinNow = moment().tz('Europe/Dublin');
            const melbourneNow = moment().tz('Australia/Melbourne');

            const dublinTimeNow = dublinNow.format('HH:mm');
            const melbourneTimeNow = melbourneNow.format('HH:mm');

            const dublinDayNow = dublinNow.format('dddd');
            const melbourneDayNow = melbourneNow.format('dddd');

            setDublinTime(dublinTimeNow);
            setMelbourneTime(melbourneTimeNow);
            setDublinDay(dublinDayNow);
            setMelbourneDay(melbourneDayNow);
        };

        // Fetch the time initially
        fetchTime();

        // Update the time every minute
        const interval = setInterval(fetchTime, 60000); // Update every minute

        // Clean up interval on component unmount
        return () => clearInterval(interval);
    }, []);

return (
        <div>
            <div className="image-container">
                <div>
                    <h2>Hubby</h2>
                    <p>
                        Current Time in Dublin, Ireland: {dublinTime} <br />
                        Current Day: {dublinDay}
                    </p>
                </div>
                <div>
                    <h2>Wifey</h2>
                    <p>
                        Current Time in Melbourne, Australia: {melbourneTime} <br />
                        Current Day: {melbourneDay}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default LoveWebsite;
