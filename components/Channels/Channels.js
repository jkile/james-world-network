import React, { useEffect } from 'react';
import YouTube from "react-youtube-embed";
import styles from "./Channels.module.scss";
import LiveFeed from '../LiveFeed/LiveFeed';

export default function Channels(props) {

    return (
        <section className={`section ${styles.main}`}>
            <div className="columns">
                <div className="column is-two-thirds">
                    <div className="box has-background-primary">
                        <div className={styles.header}>

                            <figure className="image is-48x48">
                                <img className="is-rounded" src="https://bulma.io/images/placeholders/48x48.png" />
                            </figure>

                                <h3 className="is-size-3 has-text-weight-bold has-text-white">
                                    {props.channel.content.title}
                                </h3>
                        </div>
                            <YouTube id={props.channel.content.video_url} />
                        </div>
                    </div>
                    <div className="column is-one-third-desktop">
                        <div className="box has-background-primary">
                            <h3 className="is-size-3 has-text-weight-bold has-text-white">ABOUT</h3>
                            <p className="is-size-6 has-text-white">
                                {props.channel.content.about}
                            </p>
                        </div>
                        <LiveFeed />
                    </div>
                </div>
        </section>
    )
}

