import React from "react";
import { Box, Typography, Grid, Container, Link } from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';

const SupportSection = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#E6F9EE",
        padding: "40px 20px",
      }}
    >
      <Container maxWidth="lg">
        <Grid
          container
          spacing={3}
          alignItems="center"
          justifyContent="space-between"
        >
          {/* Left Side */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "20px", sm: "24px", md: "28px" },
                fontWeight: 600,
                lineHeight: "1.4",
                textAlign: { xs: "center", md: "left" },
                color: "#212121",
              }}
            >
              Indiazona Support team
              <Typography
                component="span"
                sx={{
                  display: "block",
                  fontFamily: "Montserrat",
                  fontSize: { xs: "18px", sm: "22px", md: "28px" },
                  fontWeight: 500,
                  lineHeight: "1.4",
                  textAlign: { xs: "center", md: "left" },
                  color: "#619075",
                }}
              >
                Available and ready to guide you anytime!
              </Typography>
            </Typography>
          </Grid>

          {/* Right Side */}
          <Grid item xs={12} md={6}>
            <Typography
              sx={{
                fontFamily: "Montserrat",
                fontSize: { xs: "14px", sm: "16px", md: "18px" },
                fontWeight: 500,
                lineHeight: "1.6",
                textAlign: { xs: "center", md: "left" },
                color: "#212121",
                marginBottom: "20px",
              }}
            >
              Indiazona's seller support is here to assist you with all your
              queries and concerns, both before and after you start your online
              selling journey.
            </Typography>
            <Grid
              container
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              spacing={1}
            >
              <Grid item>
                <EmailIcon
                  sx={{
                    color: "#212121",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 400,
                    lineHeight: "1.6",
                    textAlign: "left",
                    color: "#212121",
                  }}
                >
                  You can reach out to
                </Typography>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 400,
                    lineHeight: "1.6",
                    textAlign: "left",
                    color: "#619075",
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Link href="mailto:vsupport@indiazona.com" sx={{color: "#619075"}}>vsupport@indiazona.com</Link>
                </Typography>
              </Grid>
            </Grid>
            <Grid
              container
              alignItems="center"
              justifyContent={{ xs: "center", md: "flex-start" }}
              spacing={1}
            >
              <Grid item sx={{mt:1}}>
                <LocalPhoneIcon
                  sx={{
                    color: "#212121",
                    width: "40px",
                    height: "40px",
                  }}
                />
              </Grid>
              <Grid item>
                <Typography
                  sx={{
                    fontFamily: "Montserrat",
                    fontSize: { xs: "14px", sm: "15px" },
                    fontWeight: 400,
                    lineHeight: "1.6",
                    textAlign: "left",
                    color: "#619075",
                    "&:hover": {
                      textDecoration: "underline",
                      cursor: "pointer",
                    },
                  }}
                >
                  <Link href="tel:+918374320725" sx={{color: "#619075"}}>+91 8374320725</Link>
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default SupportSection;
