import React from "react";
import {
  Box,
  Typography,
  Button,
  Stack,
  useMediaQuery,
  Link,
} from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { IN_ASSETS } from "../../BaseUrl";

const theme = createTheme({
  typography: {
    fontFamily: "Montserrat, Roboto, Arial, sans-serif",
  },
});

const Banner = () => {
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));
  const isTablet = useMediaQuery(theme.breakpoints.between("sm", "md"));

  return (
    <ThemeProvider theme={theme}>
      <Stack
        sx={{
          display: "flex",
          flexDirection: isMobile ? "column" : "row",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "2rem",
          width: "100%",
          height: "100%",
          margin: "0 auto",
          gap: "1rem",
          background: "#FFFDF8",
        }}
      >
        {/* Left Section */}
        <Stack
          spacing={2}
          sx={{ maxWidth: isMobile ? "100%" : "50%", height: "100%" }}
        >
          <Box
            sx={{
              width: "100%",
              maxWidth: "883px",
              height: "auto",
              // position: isMobile ? 'relative' : 'absolute',
              // top: isMobile ? '0' : '259px',
              // left: isMobile ? '0' : '60px',
              gap: "0px",
            }}
          >
            <Typography
              variant={isMobile ? "h5" : isTablet ? "h4" : "h3"}
              sx={{
                fontFamily: "Montserrat, Roboto, Arial, sans-serif",
                fontSize: isMobile ? "24px" : isTablet ? "36px" : "48px",
                fontWeight: 700,
                lineHeight: "1.2",
                textAlign: "left",
                textUnderlinePosition: "from-font",
                textDecorationSkipInk: "none",
                marginBottom: "37px",
              }}
            >
              <span style={{ color: "#455F76" }}>
                Turn Your Products Into Profits
              </span>
              <br />
              <span style={{ color: "#619075" }}>Register and</span>{" "}
              <Link href="#" underline="hover" sx={{ color: "#FF944E" }}>
                Start Selling Now!
              </Link>
            </Typography>
            <Box
              sx={{
                width: "100%",
                maxWidth: "811px",
                height: "auto",
                top: "437px",
                left: "60px",
                gap: "0px",
              }}
            >
              <Typography
                variant={isMobile ? "body2" : "body1"}
                sx={{
                  fontFamily: "Montserrat, Roboto, Arial, sans-serif",
                  fontSize: isMobile ? "14px" : isTablet ? "16px" : "18px",
                  fontWeight: 400,
                  lineHeight: isMobile ? "24px" : isTablet ? "32px" : "36px",
                  textAlign: "justify",
                  textUnderlinePosition: "from-font",
                  textDecorationSkipInk: "none",
                }}
              >
                Become an Indiazona Seller and{" "}
                <span style={{ color: "#619075" }}>
                  grow your business across India!{" "}
                </span>
                If you don’t have a{" "}
                <span style={{ color: "#619075" }}>GST number?</span> Not an
                issue, start selling with just an{" "}
                <span style={{ color: "#619075" }}>enrollment number</span>
                and take your business to new heights.
              </Typography>
            </Box>
          </Box>
          <Button
            variant="contained"
            color="primary"
            size={isMobile ? "medium" : "large"}
            sx={{
              width: isMobile ? "100%" : "292px",
              height: "60px",
              gap: "10px",
              borderRadius: "5px",
              backgroundColor: "#455F76",
              fontFamily: "Montserrat",
              fontSize: isMobile ? "16px" : "20px",
              fontWeight: 700,
              lineHeight: "1.2",
              textAlign: "left",
              marginBottom: "37px",
              textTransform: "none",
              textUnderlinePosition: "from-font",
              textDecorationSkipInk: "none",
              whiteSpace: "nowrap",
              "&:hover": {
                textDecoration: "underline",
                textDecorationColor: "#FF944E",
              },
            }}
            href="https://dev.indiazona.in/"
          >
            Register your shop now
          </Button>
        </Stack>

        {/* Right Section */}
        {!isMobile && (
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              gap: "1rem",
            }}
          >
            <img
              // src="/assets/images/INDIAZONAwn.png"
              src={IN_ASSETS + "lady_image_hero_section.png"}
              alt="Indiazona Seller"
              style={{
                width: "425px",
                height: "547px",
                // position: 'absolute',
                // top: '189px',
                // left: '993px',
                opacity: 1,
              }}
            />
          </Box>
        )}
      </Stack>
    </ThemeProvider>
  );
};

export default Banner;
