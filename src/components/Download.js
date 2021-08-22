import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom"
import axios from "axios"
import { makeStyles } from '@material-ui/core/styles';
import Chip from '@material-ui/core/Chip';
import loadingSvg from "../loading.svg"
import swal from 'sweetalert';

const useStyles = makeStyles((theme) => ({
    root: {
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    downloadPage: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        margin: "0 auto",
    },
    loading: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%"
    }
}));

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

export default function Download({ loading, setLoading }) {
    const classes = useStyles();
    let query = useQuery();

    const [title, setTitle] = useState("Loading")

    const [url, setUrl] = useState("")

    const [thumbnail, setThumbnail] = useState("")

    const [formats, setFormats] = useState()

    const [audioFormats, setAudioFormats] = useState();

    let rl = "Pitbull - Feel This Moment ft. Christina Aguilera"

    useEffect(() => {
        setUrl(query.get("url"))

        axios.get(`https://powerful-forest-52012.herokuapp.com/video?videoId=${query.get("url")}`)
            .then(res => {
                setTitle(res.data.videoDetails.title)
                setThumbnail(res.data.videoDetails.thumbnails[res.data.videoDetails.thumbnails.length - 1].url)
                setFormats(res.data.formats)
                console.log(res.data.videoDetails.thumbnails[res.data.videoDetails.thumbnails.length - 1])
                setLoading(false)
                swal({
                    icon: 'success',
                    title: 'Done!',
                    text: 'Your link is ready to download. If you like the project please give me a star on my Github :)'
                })
            })
        axios.get(`https://powerful-forest-52012.herokuapp.com/audio?videoId=${query.get("url")}`)
            .then(res => {

                setAudioFormats(res.data)

            })


    }, [query.get("url")])


    const downloadFile = (itag, type) => {
        console.log(itag, type)
        window.open(`https://powerful-forest-52012.herokuapp.com/download?title=${title}&videoId=${url}&type=${type ? "mp4" : "mp3"}&itag=${itag}`);
    }
    return (
        <>
            {!loading ?
                <div className={classes.downloadPage}>
                    <div className={classes.VideoPlayer}>
                        <img src={thumbnail} style={{ width: "100%", marginTop: "7px" }} />
                    </div>
                    <h1>{title === rl ? `Invalid URL to download. Please enter a valid URL...` : title}</h1>
                    <p>Video</p>
                    <div className={classes.DownloadSection}>
                        {formats && formats.map((format, index) => (
                            format.qualityLabel === null ? "" : <Chip label={format.qualityLabel} onClick={() => { downloadFile(format.itag, format.hasVideo) }} key={index} color="primary" style={{ margin: "0px 7px 7px 0px", cursor: "pointer" }} />
                        ))}
                    </div>
                    <p>Audio</p>
                    <div className={classes.DownloadSection}>
                        {audioFormats && audioFormats.map((format, index) => (

                            <Chip label={format.mimeType.split(";")[0] === "audio/mp4" ? "audio/mp3" : format.mimeType.split(";")[0]} onClick={() => { downloadFile(format.itag, format.hasVideo) }} key={index} style={{ margin: "0px 7px 7px 0px", cursor: "pointer", backgroundColor: "red", color: "#fff" }} />
                        ))}
                    </div>
                </div> :
                <div className={classes.loading}>
                    <img src={loadingSvg} />
                    <p>Loading...</p>
                </div>}
        </>

    )




}