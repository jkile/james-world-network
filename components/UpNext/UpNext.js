import React, { useEffect } from 'react';
import styles from "./UpNext.module.scss";

export default function UpNext(props) {


    return (
        <div className="box has-background-dark">

            <h3 className="is-size-3 has-text-weight-bold has-text-white">UP NEXT</h3>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-white has-text-weight-bold">James World Tonight</h5>
                <h5 className="is-size-6 has-text-white has-text-weight-semibold">10:00 PM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-white has-text-weight-bold">Ark After Dark</h5>
                <h5 className="is-size-6 has-text-white has-text-weight-semibold">11:00 PM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-white has-text-weight-bold">James World Radio</h5>
                <h5 className="is-size-6 has-text-white has-text-weight-semibold">12:00 AM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-4 has-text-white has-text-weight-bold">Goodnight Nate</h5>
                <h5 className="is-size-6 has-text-white has-text-weight-semibold">01:00 AM</h5>
            </div>
        </div>
    )
}
