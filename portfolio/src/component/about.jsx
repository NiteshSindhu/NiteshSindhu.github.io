import Box from "@mui/material/Box";
import { Avatar } from "@mui/material";

export default function About() {
  return (
    <Box sx={{ backgroundColor: "#191327", color: "white",p:"10px",borderBox:"box-sizing"}}>
      <h1 style={{ textAlign: "center" }}>About</h1>
      <Box sx={{ display: { lg: "flex" } }}>
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", md: "100%" },
            paddingLeft: "50px",
            fontSize: "20px",
            fontWeight: "bold",
            boxSizing: "border-box",
          }}
        >
          <p>
            Hello stranger! 👋, my name is{" "}
            <span style={{ color: "#cd5ff8" }}>NITESH SINDHU</span> and I am a
            Full Stack Developer, passionate about building digital products
            that improve everyday experience for people.
          </p>
          <p>
            I am Quick learner and an aspiring full-stack web developer with
            core knowledge of MERN stack technology. Looking forward to applying
            and enhancing my skills and knowledge as a developer.
          </p>
        </Box>
        <Box
          sx={{
            width: { lg: "50%", sm: "100%", xs: "100%" },
            display: "flex",
            justifyContent: "center",
            alignItem: "center",
          }}
        >
          <Avatar
            src="./img2.JPG"
            alt="Nitesh Sindhu"
            sx={{ width: { lg: "50%", sm: "25%", xs: "50%" }, height: { lg:"90%",sm:"70%",xs:"70%"} }}
          />
        </Box>
      </Box>
    </Box>
  );
}
