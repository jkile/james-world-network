import React, { useEffect, useState } from "react";
import { TwitchStream } from "react-twitch-stream";
import UpNext from "../../components/UpNext/UpNext";
import About from "../../components/About/About";
import styles from "./Home.module.scss";
import LiveFeed from "../../components/LiveFeed/LiveFeed";



export default function Home(props) {

    return (
        <section className={`section ${styles.main}`}>
            <div className="columns">
                <div className="column is-12 is-two-thirds-desktop">
                    {/* <img src="./assets/JMWRODMUSICNEARFINAL2.png" alt="Jame World Network Logo" className={styles.headerLogo} /> */}

                    <div className="box has-background-primary">
                        <TwitchStream channelName="jamesworldnetwork" allowFullScreen autoplay muted />
                    </div>
                    <About />
                </div>
                <div className="column is-12 is-one-third-desktop">
                    <UpNext isNotMobile={props.isNotMobile} />
                    <LiveFeed />
                </div>
            </div>

            
        </section>
    )
}
