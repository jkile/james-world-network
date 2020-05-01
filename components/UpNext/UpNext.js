import React, { useEffect } from 'react';
import styles from "./UpNext.module.scss";

export default function UpNext(props) {


    return (
        <div className="flex box has-background-primary">

            <h3 className="is-size-3 has-text-weight-bold has-text-white">UP NEXT</h3>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-5 has-text-white level-left">James World Tonight</h5>
                <h5 className="is-size-5 has-text-white level-right">10:00 PM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-5 has-text-white level-left">James World Tonight</h5>
                <h5 className="is-size-5 has-text-white level-right">10:00 PM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-5 has-text-white level-left">James World Tonight</h5>
                <h5 className="is-size-5 has-text-white level-right">10:00 PM</h5>
            </div>
            <div className={`box has-background-danger ${styles.nextItem}`}>
                <h5 className="is-size-5 has-text-white level-left">James World Tonight</h5>
                <h5 className="is-size-5 has-text-white level-right">10:00 PM</h5>
            </div>
        </div>
    )
}
