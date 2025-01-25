import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import StorefrontIcon from "@mui/icons-material/Storefront";

const AboutUsPage = () => {
  return (
    <Container sx={{ py: 4 }}>
      <Paper
        elevation={3}
        sx={{
          p: 4,
          borderRadius: 3,
          background: "linear-gradient(135deg, #f5f7fa 0%, #f3f4f6 100%)",
        }}
      >
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            mb: 3,
          }}
        >
          <StorefrontIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
          <Typography variant="h4" color="primary" fontWeight="bold">
            About IndiaZona
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, borderColor: "primary.main" }} />

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
          }}
        >
          <Typography variant="body1" paragraph>
            <strong style={{ color: "#FF944E" }}>Bharat Ki Apni Dukaan</strong>{" "}
            — that's what IndiaZona stands for. Co-founded by Bawna Pagaria, her
            father, Mr Rajesh Pagaria, and her brother, Mr Harsh Pagaria,
            IndiaZona is more than just an e-commerce marketplace; it is the
            continuation of a vision.
          </Typography>

          <Typography variant="body1" paragraph>
            Over a decade ago, Mr. Rajesh Pagaria, a true entrepreneur, dreamed
            of creating opportunities and generating employment through
            innovative chain and network marketing. Though the idea was ahead of
            its time, today, his children are bringing that vision to life,
            adapting it to the needs of the modern world under his mentorship.
          </Typography>

          <Typography variant="body1" paragraph>
            We started our journey just{" "}
            <strong>100 days ago from scratch</strong> with a vision to uplift
            Indian businesses, artisans, and MSMEs. The idea was born out of a
            realisation that in a market dominated by foreign giants, Indian
            sellers, manufacturers, and small businesses often struggle to gain
            visibility despite their hard work.
          </Typography>

          <Typography variant="body1" paragraph>
            IndiaZona aims to change that by creating a fair and supportive
            platform tailored to Indian talent. We focus on promoting{" "}
            <strong>Made in India products</strong>, making them trendy,
            affordable, and accessible. With features like the latest{" "}
            <strong>trends (swipe & buy)</strong>, zero ad fees, and fair
            visibility, we ensure that every seller — big or small — has an
            equal chance to succeed.
          </Typography>

          <Typography variant="body1" paragraph>
            We handle logistics, marketing, and global shipping, so sellers can
            focus on what they do best: creating unique products. Buyers, in
            turn, get access to authentic Indian creations, from handicrafts to
            fashion, all under one roof.
          </Typography>

          <Typography variant="body1" paragraph>
            Backed by a mission to build a <strong>Vikasit Bharat</strong>,
            IndiaZona stands as a symbol of trust and support for small
            businesses. Whether you're a seller chasing your dream or a buyer
            looking for authentic Indian products, we're here to bridge the gap
            and create opportunities for all.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default AboutUsPage;
