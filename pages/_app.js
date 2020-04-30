import "../styles/reset.scss";
import "../styles/App.scss";

import Head from "next/head";

export default function App({ Component, pageProps }) {
    return (
        <div>
            <Head>
                <title>
                    James World Network
                </title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
                <script defer src="https://use.fontawesome.com/releases/v5.3.1/js/all.js"></script>
            </Head>
            <Component {...pageProps} />
        </div>
    )
}
