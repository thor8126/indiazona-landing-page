import React from "react";
import { Typography, Box, Container } from "@mui/material";

const ProductCategories = () => {
  return (
    <Container sx={{ mt: 10, mb: 5 }}>
      {/* Title Section */}
      <Box
        sx={{
          textAlign: "center",
          borderRadius: "8px",
          padding: "10px 20px",
          mb: 5,
        }}
      >
        <Typography
          sx={{
            fontFamily: "Montserrat, sans-serif",
            fontSize: { xs: "20px", sm: "24px", md: "28px" },
            fontWeight: 600,
            lineHeight: "1.2",
            color: "#212121",
          }}
        >
          Product Categories you can sell at Indiazona
        </Typography>
      </Box>

      {/* Categories Flexbox */}
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "16px", // Spacing between items
        }}
      >
        {[
          "Automotive, Car & Accessories",
          "Baby Products & Toys",
          "Bags & Luggage",
          "Handicrafts",
          "Books & Education",
          "Home, Décor & Furniture",
          "Grocery & Food",
          "Musical Instruments & Video Games",
          "Industrial Supplies",
          "Home Improvement & Outdoor Products",
          "Health, Beauty, Personal Care & Appliances",
          "Clothing, Fashion, Fashion Accessories, Shoes",
          "Jewellery & Precious Items",
          "Office Products & Stationery",
          "Electronics & Accessories",
          "Kitchen Appliances & Accessories",
          "Medical & Scientific Supplies",
          "Sports & Gym Equipment",
          "Gifts, Festivities & Pooja Supplies",
          "Pet Supplies",
        ].map((category, index) => (
          <Box
            key={index}
            sx={{
              flex: "1 1 calc(33.333% - 16px)", // 3 items per row with space
              maxWidth: "calc(33.333% - 16px)", // Ensures proper width
              boxSizing: "border-box",
              padding: "20px",
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              borderRadius: "10px",
              backgroundColor: "#EFF8FF",
              border: "1px solid #EFF8FF",
              textAlign: "center",
              height: "100%",
            }}
          >
            <Typography
              sx={{
                fontFamily: "Montserrat, sans-serif",
                fontSize: "16px",
                fontWeight: 600,
                lineHeight: "1.2",
                color: "#212121",
              }}
            >
              {category}
            </Typography>
          </Box>
        ))}
      </Box>
    </Container>
  );
};

export default ProductCategories;
