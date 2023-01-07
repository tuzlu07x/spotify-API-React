import { Button, Card, TextField } from "@mui/material";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Typography from "@mui/material/Typography";
import CardContent from "@mui/material/CardContent";
import axios from "axios";
import SearchResult from "./SearchResult";

export default function Search({ accessToken, setAccessToken }) {
  const [search, setSearch] = useState("");
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    if (accessToken) {
      axios
        .get(`https://api.spotify.com/v1/search?q=${search}&type=track`, {
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
        })
        .then((res) => {
          console.log(res.data.tracks.items);
          setDatas(res.data.tracks.items);
        });
    }
  }, [search, accessToken]);

  return (
    <>
      {accessToken && (
        <>
          <Card
            sx={{
              marginTop: 2,
              boxShadow: 3,
            }}
          >
            <CardContent>
              <Typography
                sx={{ fontSize: 14, color: "text.secondary" }}
                color="text.secondary"
                gutterBottom
              ></Typography>
              <Typography variant="h5" component="div">
                <TextField
                  sx={{ width: "100%" }}
                  id="outlined-basic"
                  label="Search for a song"
                  variant="outlined"
                  color="secondary"
                  onChange={(e) => {
                    console.log(setSearch(e.target.value));
                  }}
                />
              </Typography>
            </CardContent>
          </Card>
          <SearchResult datas={datas} setDatas={setDatas} />
        </>
      )}
    </>
  );
}
