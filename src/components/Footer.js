import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import './Footer.css'

const useStyles = makeStyles({
    affliate: {
        cursor: "pointer",
        padding: "7px",
        color: "white",
        marginTop: "14px",
        border: "1px solid #eee",
        textDecoration: "none",
    }
});

function Footer() {
    const classes = useStyles();
    return (
        <div style={{ width: "100%", backgroundColor: "red", color: "#fff", height: "15vh", display: "flex", justifyContent: "center" }}>
            <p style={{ textAlign: "center", marginTop: "4em" }}>This is a demo youtube downloader project to improve react knowledge.
                To see more or the source code of the project {<a className={classes.affliate} target="_blank" href={"https://www.github.com/Duthris"}>
                    👉 Check my Github /Duthris
                </a>}</p>
            <img
                className="duthris__logo"
                src="https://i.hizliresim.com/b1ti51x.gif"
                alt="Duthris Logo"
            />

        </div>
    )
}

export default Footer