import React from "react";
import { Container, Typography, Box, Paper, Divider } from "@mui/material";
import ReplayIcon from "@mui/icons-material/Replay";

const ReturnExchangePolicy = () => {
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
          <ReplayIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
          <Typography variant="h4" color="primary" fontWeight="bold">
            Return & Exchange Policy
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
          <Typography variant="body1" sx={{ color: "black" }}>
            At IndiaZona, return and exchange options vary by product and are
            determined by individual vendors. Some products may not be eligible
            for returns, while others may have a limited time exchange policy,
            such as a 7-day window. Please review the product details before
            purchasing to understand the specific return and exchange terms.
          </Typography>

          <Typography variant="body1" sx={{ color: "black" }}>
            If your product is categorized as "No Return", still you have a
            window of 72 hours after successful delivery of product to raise any
            concern like: damaged/defective product, missing product, wrong
            product received, etc.
          </Typography>

          <Typography variant="body1" sx={{ color: "black" }}>
            If your product arrives damaged or with missing parts, please make a
            detailed video and file a complaint. If your claim is valid, the
            vendor is required to return the product. Team IndiaZona reserves
            the right to make final decision in this regard.
          </Typography>
        </Box>
      </Paper>
    </Container>
  );
};

export default ReturnExchangePolicy;
