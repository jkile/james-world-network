import React, { useEffect, useState } from "react";
import { TwitchStream } from "react-twitch-stream";
import UpNext from "../../components/UpNext/UpNext";
import About from "../../components/About/About";
import styles from "./Home.module.scss";
import LiveFeed from "../../components/LiveFeed/LiveFeed";



export default function Home(props) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 2000)
    })

    return (
        <section className={`section ${styles.main}`}>
            <div className="columns">
                <div className="column is-12 is-two-thirds-desktop">
                    {/* <img src="./assets/JMWRODMUSICNEARFINAL2.png" alt="Jame World Network Logo" className={styles.headerLogo} /> */}

                    <div className="box has-background-primary">
                        {loading ?
                            <progress class="progress is-large is-danger" max="100"></progress>
                            :
                            <TwitchStream channelName="jamesworldnetwork" allowFullScreen autoplay muted />
                        }
                    </div>
                    <About />
                </div>
                <div className="column is-12 is-one-third-desktop">
                    <UpNext isNotMobile={props.isNotMobile} />
                    <LiveFeed />
                </div>
            </div>

            <div class={`pageloader has-background-danger is-top-to-bottom ${loading ? "is-active" : {}}`}><span class="title is-size-3">Welcome to the Network</span></div>
        </section>
    )
}
