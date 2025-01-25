import React, { useState } from "react";
import { Box, Divider, Typography } from "@mui/material";
import { Link as RouterLink } from "react-router-dom";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import QuestionAnswerOutlinedIcon from "@mui/icons-material/QuestionAnswerOutlined";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import QueryBuilderOutlinedIcon from "@mui/icons-material/QueryBuilderOutlined";
//import morpankh from "../../assets/images/morpankh.png";
let morpankh = "abc"; // Remove this line after adding the image

const FOOTER_DATA = [
  {
    id: 1,
    title: "Indiazona Marketplace",
    subTitle: [
      { name: "Homepage", path: "/" },
      { name: "About Us", path: "/about" },
      { name: "Become a Seller", path: "/registerseller" },
    ],
  },
  {
    id: 2,
    title: "FAQs & Policies",
    subTitle: [
      { name: "Cancellation Policy", path: "/policies/cancellation" },
      { name: "Return & Exchange Policy", path: "/policies/return-exchange" },
      { name: "Compliance", path: "/compliance" },
      { name: "Terms of Use", path: "/terms" },
      { name: "Privacy Policy", path: "/privacy" },
      { name: "Sellers FAQs", path: "/sellers-faqs" },
      { name: "Customer FAQs", path: "/customer-faqs" },
    ],
  },
];

const Footer = () => {
  // 'null' means no section is open by default.
  // If you want 'Contact Us' open by default, set this to 0.
  const [activeId, setActiveId] = useState([]);

  // Toggle logic
  const handleToggle = (id) => {
    if (activeId.includes(id)) {
      // Remove this ID from the array
      setActiveId((prevOpenIds) =>
        prevOpenIds.filter((openId) => openId !== id)
      );
    } else {
      // Add this ID to the array
      setActiveId((prevOpenIds) => [...prevOpenIds, id]);
    }
  };
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <Box
      sx={{
        width: "100%",
        position: "relative",
        padding: { md: "57px 50px 17px 45px", xs: "32px 25px 8px 22px" },
        backgroundColor: "customBg.contrastText1",
        color: "background.paper",
        fontFamily: "Public Sans",
      }}
    >
      {/* Decorative background image */}
      <Box
        component="img"
        sx={{
          width: "441px",
          height: "441px",
          position: "absolute",
          opacity: "60%",
          bottom: "0px",
          right: "0px",
          zIndex: "10",
        }}
        src={morpankh}
        alt="Morpankh Background"
      />

      {/* Main footer content */}
      <Box
        sx={{
          display: "flex",
          position: "relative",
          alignItems: "flex-start",
          justifyContent: "space-evenly",
          gap: "20px",
          zIndex: "10",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        {/* Contact Us Section (Kept as is) */}
        <Box
          sx={{
            display: "flex",
            width: "264px",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "14px",
          }}
        >
          <Box
            sx={{
              borderBottom: "1px solid",
              padding: "0px 21px 12px 0px",
              borderColor: "secondary.main",
            }}
          >
            <Typography
              sx={{
                fontSize: "15.69px",
                fontWeight: "700",
                color: "customBg.white",
              }}
            >
              Contact Us
            </Typography>
          </Box>

          {/* Contact details remain the same */}
          <Box
            sx={{
              display: "flex",
              width: "100%",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <Box sx={{ display: "flex", gap: "2px" }}>
              <QuestionAnswerOutlinedIcon
                sx={{ width: "23px", color: "secondary.main" }}
              />
              <Typography sx={{ fontWeight: "400", fontSize: "12.55px" }}>
                11, Clive Row, Kolkata - 700001
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2px" }}>
              <LocationOnOutlinedIcon
                sx={{ width: "23px", color: "secondary.main" }}
              />
              <Typography sx={{ fontWeight: "400", fontSize: "12.55px" }}>
                Monday to Sunday
              </Typography>
            </Box>
            <Box sx={{ display: "flex", gap: "2px" }}>
              <QueryBuilderOutlinedIcon
                sx={{ width: "23px", color: "secondary.main" }}
              />
              <Typography sx={{ fontWeight: "400", fontSize: "12.55px" }}>
                +91 8374320725 or +91 9477932733 vsupport@indiazona.com
              </Typography>
            </Box>
          </Box>
        </Box>

        {/* Mapped Sections with Links */}
        {FOOTER_DATA.map((item) => (
          <Box
            key={item.id}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              gap: "14px",
            }}
          >
            <Box
              sx={{
                borderBottom: "1px solid",
                padding: "0px 21px 12px 0px",
                borderColor: "secondary.main",
                cursor: "pointer",
                display: "flex",
              }}
              onClick={() => handleToggle(item.id)}
            >
              <Typography
                sx={{
                  fontSize: "15.69px",
                  fontFamily: "Montserrat",
                  fontWeight: "700",
                  color: "customBg.white",
                }}
              >
                {item.title}
              </Typography>
              <KeyboardArrowDownIcon
                sx={{ display: { md: "none", xs: "flex" } }}
              />
            </Box>

            <Box
              sx={{
                display: {
                  md: "flex",
                  xs: activeId.includes(item.id) ? "flex" : "none",
                },
                width: "100%",
                flexDirection: "column",
                alignItems: "flex-start",
                gap: "14px",
              }}
            >
              {item.subTitle.map((sub, idx) => (
                <Typography
                  key={idx}
                  component={RouterLink}
                  to={sub.path}
                  onClick={scrollToTop}
                  sx={{
                    fontWeight: "400",
                    fontSize: "12.55px",
                    fontFamily: "Montserrat",
                    color: "inherit",
                    textDecoration: "none",
                    "&:hover": {
                      textDecoration: "underline",
                    },
                  }}
                >
                  {sub.name}
                </Typography>
              ))}
            </Box>
          </Box>
        ))}
      </Box>

      {/* Bottom row with links */}
      <Divider
        sx={{
          borderColor: "customBg.white",
          opacity: "10%",
          margin: "31px 0px 17px 0px",
        }}
      />

      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexDirection: { md: "row", xs: "column" },
        }}
      >
        <Typography
          sx={{
            fontSize: "12px",
            fontWeight: "400",
            fontFamily: "Public Sans",
          }}
        >
          Copyright © 2024. Indiazona. All rights reserved. Brand owned by
          Mahakali Infotek
        </Typography>
        <Box
          sx={{
            display: "flex",
            gap: "10px",
          }}
        >
          <Typography
            component={RouterLink}
            to="/privacy"
            onClick={scrollToTop}
            sx={{
              cursor: "pointer",
              fontSize: "12px",
              fontWeight: "400",
              fontFamily: "Public Sans",
              color: "inherit",
              zIndex: "11",
              textDecoration: "none",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Privacy Policy
          </Typography>
          <Typography
            component={RouterLink}
            to="/terms"
            onClick={scrollToTop}
            sx={{
              fontSize: "12px",
              cursor: "pointer",
              fontWeight: "400",
              fontFamily: "Public Sans",
              color: "inherit",
              textDecoration: "none",
              zIndex: "11",
              "&:hover": {
                textDecoration: "underline",
              },
            }}
          >
            Terms & Conditions
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default Footer;
