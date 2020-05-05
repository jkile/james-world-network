import "../styles/reset.scss";
import "../styles/App.scss";

import Head from "next/head";
import React, { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {

    const [loading, setLoading] = useState(true);

    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    })

    return (
        <div className="has-background-dark">
            <Head>
                <title>
                    James World Network
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
                <Component {...pageProps} />
            <div class={`pageloader has-background-danger is-top-to-bottom ${loading ? "is-active" : {}}`}>
                <span class={"title is-size-1"}>Welcome to the Network</span>
            </div>
        </div>
    )
}
