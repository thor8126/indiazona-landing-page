import React from "react";
import { Typography, Box, Container } from "@mui/material";
import { IN_ASSETS } from "../../BaseUrl";

const WatchVideo = () => {
  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      {/* Title Section */}
      <Box
        sx={{
          textAlign: "center",
        
          borderRadius: "8px",
          padding: "10px 20px",
          mb: 3,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "20px", sm: "24px", md: "28px" }, // Responsive font size
            fontWeight: 600,
            lineHeight: "1.2",
            color: "#212121",
          }}
        >
          Watch this video to know more about Indiazona
        </Typography>
      </Box>

      {/* Video Section */}
      <Box
        sx={{
          width: "100%",
          maxWidth: "759px",
          height: { xs: "250px", sm: "350px", md: "427px" }, // Responsive height
          margin: "0 auto", // Center the video horizontally
          borderRadius: "20px 0px 0px 0px",
          // border: "1px solid #C7DEEF",
          overflow: "hidden",
        }}
      >
        <video
          style={{
            width: "100%",
            height: "100%",
            borderRadius: "20px 20px 20px 20px",
          }}
          controls
        >
          <source src={IN_ASSETS+"Benifits_of_becoming_our_seller.mp4"} type="video/mp4" />
          
        </video>
      </Box>
    </Container>
  );
};

export default WatchVideo;
