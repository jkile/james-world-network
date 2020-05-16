import React, { useEffect } from 'react';
import styles from "./UpNext.module.scss";

export default function UpNext(props) {

    const schedule = [

        {
            name: "Ark After Dark",
            day: 5,
            order: 1,
            time: "8:00 PM PST/11:00 PM EST"
        },
        {
            name: "Wow! Look at That Food!",
            day: 6,
            order: 1,
            time: "8:00 PM PST/11:00 PM EST"
        },
        {
            name: "James World Tonight",
            day: 6,
            order: 2,
            time: "9:00 PM PST/12:00 EST"
        },
        {
            name: "Goodnight Nate",
            day: 1,
            order: 1,
            time: "9:00 PM PST/12:00 EST"
        },
        {
            name: "Workters Winshop",
            day: 2,
            order: 1,
            time: "8:00 PM PST/11:00 EST"
        },
        {
            name: "Ex/Perts PST",
            day: 4,
            order: 1,
            time: "8:00 PM PST/11:00 EST"
        }

    ]


    let date = new Date();
    return (
        <div className="box has-background-dark">
            <h3 className="is-size-3 has-text-weight-bold has-text-white">AIRING TODAY</h3>
            {schedule.map(item => {

                if (item.day === date.getDay()) {
                    return (
                        <div className={`box has-background-dark ${styles.nextItem}`}>
                            <h5 className="is-size-4 has-text-danger has-text-weight-bold">{item.name}</h5>
                            <h5 className="is-size-6 has-text-danger has-text-weight-semibold">{item.time}</h5>
                        </div>
                    )
                }
            })}

            {/* <div className={`box has-background-dark ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-danger has-text-weight-bold">James World Tonight</h5>
                <h5 className="is-size-6 has-text-danger has-text-weight-semibold">10:00 PM</h5>
            </div>
            <div className={`box has-background-dark ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-danger has-text-weight-bold">Ark After Dark</h5>
                <h5 className="is-size-6 has-text-danger has-text-weight-semibold">11:00 PM</h5>
            </div>
            <div className={`box has-background-dark ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-danger has-text-weight-bold">James World Radio</h5>
                <h5 className="is-size-6 has-text-danger has-text-weight-semibold">12:00 AM</h5>
            </div>
            <div className={`box has-background-dark ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-danger has-text-weight-bold">Goodnight Nate</h5>
                <h5 className="is-size-6 has-text-danger has-text-weight-semibold">01:00 AM</h5>
            </div> */}
        </div>
    )
}
