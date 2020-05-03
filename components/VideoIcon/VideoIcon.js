import React from 'react';
import { motion } from "framer-motion";
import styles from "./VideoIcon.module.scss";


export default function VideoIcon() {
    return (
        <div className="column">
            <div className={`box has-background-danger ${styles.videoContainer}`}>
                <img className={styles.thumbnail} src="https://i.ytimg.com/vi/vldOCeRypGg/maxresdefault.jpg" alt="" />
                <h5 className={`is-size-5 has-text-white has-text-weight-bold ${styles.title}`}>Video Name</h5>
                <p className={`is-size-7 has-text-white ${styles.date}`}>01/01/2020</p>
            </div>
        </div>
    )
}
