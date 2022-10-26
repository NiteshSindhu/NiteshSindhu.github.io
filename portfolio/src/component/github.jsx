import { Box } from "@mui/material";
import GitHubCalendar from "react-github-calendar";
export default function Github() {
  return (
    <Box sx={{width:"100%", textAlign:"center" , color:"white"}}>
      <h1>My Statistics</h1>
      <Box sx={{ width: "100%",marginBottom:"50px" }}>
        <img
          src="https://github-readme-stats.vercel.app/api?username=NiteshSindhu&show_icons=true&locale=en&layout=compact" alt="niteshsindhu"
          style={{ width: "100%", height: "200px" }}
        />
  
      </Box>
      <Box sx={{ width: "100%" }}>
        <GitHubCalendar username="NiteshSindhu" style={{color:"white",margin:"auto"}} />
      </Box>
    </Box>
  );
}
