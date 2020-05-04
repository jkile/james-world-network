import React, { useEffect } from 'react';
import YouTubeEmbed from "../YouTubeEmbed/YouTubeEmbed";
import styles from "./Channels.module.scss";
import LiveFeed from '../LiveFeed/LiveFeed';
import PreviousVideos from '../PreviousVideos/PreviousVideos';

export default function Channels(props) {

    return (
        <section className={`section ${styles.main} has-background-dark`}>

            <div className="columns is-multiline">
                <div className="column is-two-thirds is-7-fullhd">
                    <div className="box has-background-dark">
                        <YouTubeEmbed id={props.channel.video_url} />
                    </div>
                </div>
                <div className="column is-one-third-desktop is-5-fullhd">
                    <div className="box has-background-dark">
                        <div className={styles.header}>

                            <figure className="image is-48x48">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" />
                            </figure>

                            <h3 className="is-size-3 has-text-weight-bold has-text-white">
                                {props.channel.title}
                            </h3>
                        </div>
                        <p className="is-size-6 has-text-white">
                            {props.channel.about}
                        </p>
                    </div>
                    <LiveFeed />
                </div>
                <div className="column is-12">
                    <PreviousVideos />
                </div>
            </div>

        </section>
    )
}

