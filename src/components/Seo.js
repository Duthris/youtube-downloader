import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
    root: {
        maxWidth: 345,
    },
    media: {
        height: 140,
    },
});


function Seo() {
    const classes = useStyles();
    return (
        <div style={{ marginTop: "15px" }}>
            <Card style={{ marginTop: "15px" }}>
                <CardContent >
                    <h2 style={{ textAlign: "" }}>Best Downloader</h2>
                    <p>
                        Duthris YouTube Video Downloader helps you to save Youtube videos to your device. You can choose from a variety of formats and qualities to download.
                    </p>
                </CardContent >
            </Card >

            <Card style={{ marginTop: "15px" }}>
                <CardContent >
                    <h2 style={{ textAlign: "" }}>Download Youtube Shorts Video</h2>
                    <p>
                        Many youtube downloaders cannot download videos from youtube shorts, but we can.
                    </p>
                </CardContent >
            </Card >
            <Card style={{ marginTop: "15px" }}>
                <CardContent >
                    <h2 style={{ textAlign: "" }}>Easy</h2>
                    <p>
                        Simplest youtube downloader, download different formats in just 2 clicks.
                    </p>
                </CardContent >
            </Card >

            <Card style={{ marginTop: "15px" }}>
                <CardContent >
                    <h2 style={{ textAlign: "" }}>Safe</h2>
                    <p>
                        100% safe, download videos without worries.
                    </p>
                </CardContent >
            </Card >

            <Card style={{ marginTop: "15px" }}>
                <CardContent >
                    <h2 style={{ textAlign: "" }}>Download in Different Formats</h2>
                    <p>
                        Download all video and audio formats conversion. You can easily convert YouTube videos to MP3, 3GP, MP4, WMA, M4A, FLV, WEBM and MO formats, etc.
                    </p>
                </CardContent >
            </Card >
            <p>By using our downloader you can easily convert YouTube videos to MP3, MP4, 3GP, WEBM, M4A files... and download them for free - this service works for computers, tablets and mobile devices. The videos are always converted in the highest available quality.</p>
        </div>
    )
}

export default Seo