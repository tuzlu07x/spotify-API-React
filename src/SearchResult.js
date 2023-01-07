import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Grid, ImageList } from "@mui/material";

export default function SearchResult({ datas, setDatas }) {
  return (
    <>
      <Grid container    spacing={2}>
        {datas.map((data) => (
          <Card
            sx={{
              background: "linear-gradient(45deg, #8A2BE2 30%, #7FFFD4 90%)",
              marginTop: 4,
              boxShadow: 3,
              marginLeft: 2,
            }}
          >
            <CardContent>
              <ImageList>
                <a
                  href={data.external_urls.spotify}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={data.album.images[0].url} style={{ width: 200 }} />
                </a>
              </ImageList>
              <Typography variant="h5" component="div">
                {data.name}
              </Typography>
              <Typography variant="body2">{data.artists[0].name}</Typography>
            </CardContent>
          </Card>
        ))}
      </Grid>
    </>
  );
}
