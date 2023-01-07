import * as React from "react";
import Box from "@mui/material/Box";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Paper } from "@mui/material";

export default function Footer() {
  return (
    <Paper
      sx={{
        marginTop: "calc(23% + 60px)",
        width: "100%",
        position: "sticky",
        bottom: 0,
        width: "100%",
      }}
      component="footer"
      square
      variant="outlined"
    >
      <Card
        sx={{
          minWidth: 275,
          boxShadow: 5,
          background: "linear-gradient(45deg, #8A2BE2 30%, #7FFFD4 90%)",
        }}
      >
        <CardContent>
          <Typography
            sx={{ fontSize: 14, marginTop: 10 }}
            align="center"
            color="text.secondary"
            gutterBottom
          >
            Spotify API Project
          </Typography>
          <Typography align="center" variant="body2">
            <a href="https://fatihtuzlu.com" target="_blank" rel="noreferrer">
              Fatih Tuzlu
            </a>
          </Typography>
        </CardContent>
      </Card>
    </Paper>
  );
}
