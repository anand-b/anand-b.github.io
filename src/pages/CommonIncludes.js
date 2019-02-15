import bio from "./bio";
import "../styles/custom.css";
import "../styles/index.css";

export default () => {
    return (<head>
        <title>{`${bio.name.firstName} ${bio.name.lastName}`}</title>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1"></meta>
        <meta name="description" content={bio.description} />
        <meta property="og:type" content={bio.openGraph.type} />
        <meta property="og:title" content={bio.openGraph.title} />
        <meta property="og:description" content={bio.openGraph.description} />
        <meta property="og:url" content={bio.openGraph.url} />
        <meta name="twitter:card" content={bio.twitter.card} />
        <meta property="twitter:title" content={bio.twitter.title} />
        <meta property="twitter:description" content={bio.twitter.description} />
        <link href="https://fonts.googleapis.com/css?family=Open+Sans:400,600" rel="stylesheet"></link>
        <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.2/css/all.css"></link>
    </head>)
}