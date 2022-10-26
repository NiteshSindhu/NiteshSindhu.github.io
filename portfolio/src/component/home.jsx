import { Link, Button, Box } from "@mui/material";
// import Typical from "typical";
export default function Home() {
  return (
    <Box
      sx={{
        display: { lg: "flex" },
        boxSizing: "border-box",
        backgroundColor: "#0a192f",
        color: "white",
      }}
    >
      <Box
        sx={{
          width: { lg: "50%", sm: "100%", xs: "100%" },
          display: "flex",
          flexDirection: "column",
          color: "white",
          justifyContent: "center",
          paddingLeft: "50px",
          textAlign: "center",
          margin: "auto",
          boxSizing: "border-box",
        }}
      >
        <h1>Hi There!</h1>
        <h1>
          I'M <span style={{ color: "#cd5ff8" }}>NITESH SINDHU</span>
              </h1>
        <Button
          sx={{
            color: "white",
            fontWeight: "bold",
            fontSize: "20px",
            display: "block",
            margin: "auto",
            width: "fit-content",
          }}
        >
          <Link
            href="https://drive.google.com/file/d/1sz41DUZj0qrHWskFS5tUz-EgVhnjiD1U/view?usp=sharing"
            target="_blank"
            style={{ textDecoration: "none", color: "white" }}
          >
            Resume
          </Link>
        </Button>
      </Box>
      <Box sx={{ width: "50%", display: "flex", margin: "auto" }}>
        <img
          src="https://www.ravishukla.me/static/media/home-main.359935c39288e92d4dba5c9f2445b91d.svg"
          style={{ height: "100%", width: "100%" }}
          alt="img"
        />
      </Box>
    </Box>
  );
}
