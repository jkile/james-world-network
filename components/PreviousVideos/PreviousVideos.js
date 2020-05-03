import React from 'react';
import VideoIcon from '../VideoIcon/VideoIcon';
import styles from "./PreviousVideos.module.scss"

export default function PreviousVideos() {


    return (
        <div className="box has-background-dark">
            <h4 className={`is-size-3 has-text-white has-text-weight-bold ${styles.header}`}>Previous Videos</h4>
            <div className={`columns is-mobile ${styles.overflow}`}>
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
                <VideoIcon />
            </div>
        </div>
    )
}
