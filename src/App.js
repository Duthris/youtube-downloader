import './App.css';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import YouTubeIcon from '@material-ui/icons/YouTube';
import { useState, useEffect } from "react"
import CloudDownloadIcon from '@material-ui/icons/CloudDownload';
import { makeStyles } from '@material-ui/core/styles';
import Download from "./components/Download"
import Seo from "./components/Seo"
import swal from 'sweetalert';
import {
  useHistory,
  useLocation,
  Route,
  Link,
  Switch,
} from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
  app: {
    display: "flex",
    flexDirection: "column",
    width: "80%",
    margin: "0 auto",
  },
  title: {
    color: "red",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    cursor: "pointer",
  },
  form: {
    display: "flex",
    flexDirection: "column",
  },
  Button: {
    marginTop: "8px", backgroundColor: "red", color: "#fff",
    '&:hover': {
      backgroundColor: 'transparent',
      color: 'red',
    },

  },
  affliate: {
    cursor: "pointer",
    padding: "7px",
    color: "blue",
    marginTop: "14px",
    border: "1px solid #eee",
    textDecoration: "none",
  }
}));

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

function App() {

  const classes = useStyles();

  let history = useHistory();

  let query = useQuery();

  const [url, setUrl] = useState("")

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (window.location.pathname === "/") {
      setUrl("")
    } else {
      setUrl(query.get("url"))
    }

  }, [window.location.pathname])

  const handleSubmit = () => {
    if (url === "" || !url.includes("https") || !url.includes("yout")) {
      swal({
        icon: 'error',
        title: 'Oops...',
        text: 'Please enter a video URL!',
      })
    } else {
      if (url.includes("www")) {
        history.push(`/download?url=${url.replace("www.", "")}`)
      } else {
        history.push(`/download?url=${url}`)
      }
      setLoading(true)
    }
  }

  const handleUrlChange = (e) => {
    setUrl(e.target.value)
  }

  return (
    <div className={classes.app} noValidate>
      <div className={classes.title} onClick={() => history.push("/")}>
        <YouTubeIcon style={{ fontSize: "128px" }} />
        <h1 style={{ marginTop: "0px" }}>Duthris YouTube Downloader</h1>
      </div>

      <form className={classes.form} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Youtube Video Link"
          variant="outlined"
          placeholder="Enter Youtube Video Link..."
          required
          onChange={handleUrlChange}
          value={url}
        />
        <Button onClick={handleSubmit}
          variant="contained"
          color="secondary"
          className={classes.Button}
          startIcon={<CloudDownloadIcon />}>
          Download
        </Button>
      </form>
      <Switch>
        <Route path="/download">
          <Download setInputUrl={setUrl} loading={loading} setLoading={setLoading} />
        </Route>
      </Switch>
      <a className={classes.affliate} target="_blank" href={"https://www.github.com/Duthris/Duthris/youtube-downloader"}>
        👉 Click to see the source code of react project on my github.
      </a>
      <Seo />
    </div>
  );
}

export default App;
