import React, { useEffect, useState } from "react";
import { TwitchStream } from "react-twitch-stream";
import UpNext from "../../components/UpNext/UpNext";
import About from "../../components/About/About";
import styles from "./Home.module.scss";
import LiveFeed from "../../components/LiveFeed/LiveFeed";



export default function Home(props) {

    return (

        <section className={`section ${styles.main} has-background-dark`}>
            <img src="./assets/websiteheader.png" alt="Jame World Network Logo" className={styles.headerLogo} />
            <div className="columns is-multiline">
                <div className="column is-12 is-two-thirds-desktop">

                    <div className="box has-background-dark">

                        <TwitchStream channelName="jamesworldnetwork" allowFullScreen autoplay muted />

                    </div>
                    <About />
                </div>
                <div className="column is-12 is-one-third-desktop">
                    <UpNext isNotMobile={props.isNotMobile} />
                    {/* <LiveFeed /> */}
                </div>
            </div>
        </section>

    )
}
