import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container } from "@mui/system";
import { useState } from "react";
import { useEffect } from "react";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  ></Box>
);

export default function LoginSpotify() {
  const [clientId, setClientId] = useState("c04ef139f141432c896e76f7c3255f14");
  const [accessToken, setAccessToken] = useState("");
  const [redirectUri, setRedirectUri] = useState("http://localhost:3000");
  const [authEndpoint, setAuthEndpoint] = useState(
    "https://accounts.spotify.com/authorize"
  );
  const [responseType, setResponseType] = useState("token");

  useEffect(() => {
    const hash = window.location.hash
      .substring(1)
      .split("&")
      .reduce(function (initial, item) {
        if (item) {
          var parts = item.split("=");
          initial[parts[0]] = decodeURIComponent(parts[1]);
        }
        return initial;
      }, {});
    window.location.hash = "";
    let _token = hash.access_token;
    if (_token) {
      setAccessToken(_token);
      window.localStorage.setItem("token", _token);
    }
  }, []);

  useEffect(() => {
    const storedToken = window.localStorage.getItem("token");
    if (storedToken) {
      setAccessToken(storedToken);
    }
  }, []);

  return (
    <Container>
      <Card
        sx={{
          minWidth: 275,
          marginTop: 4,
          boxShadow: 3,
          background: "linear-gradient(45deg, #8A2BE2 30%, #7FFFD4 90%)",
          color: "white",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14 }}
            color="text.secondary"
            gutterBottom
          ></Typography>
          <Typography variant="h5" component="div">
            {accessToken ? ( 'Hello User!' ) : ( 'Login to Spotify' )}
          </Typography>
        </CardContent>
        <CardActions>
          {accessToken ? (
            <Button
              sx = {{marginLeft: 'auto'}}
              variant="contained"
              onClick={() => {
                window.localStorage.removeItem("token");
                window.location.reload();
              }}
              size="small"
            >
              Logout
            </Button>
          ) : (
            <Button
              sx = {{marginLeft: 'auto'}}
              href={`${authEndpoint}?client_id=${clientId}&redirect_uri=${redirectUri}&response_type=${responseType}`}
              variant="contained"
              color="secondary"
              size="small"
            >
              Login
            </Button>
          )}
        </CardActions>
      </Card>
    </Container>
  );
}
