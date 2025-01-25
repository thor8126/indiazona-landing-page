import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Grid,
  Divider,
} from "@mui/material";
import BusinessIcon from "@mui/icons-material/Business";

const ComplianceUndertaking = () => {
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
          <BusinessIcon sx={{ fontSize: 40, color: "primary.main", mr: 2 }} />
          <Typography variant="h4" color="primary" fontWeight="bold">
            Compliance Undertaking
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, borderColor: "primary.main" }} />

        <Typography
          variant="body1"
          paragraph
          sx={{ fontWeight: "bold", mb: 2 }}
        >
          UNDERTAKING
        </Typography>

        <Typography variant="body1" paragraph>
          I, Bhawna Pagaria, Partner at Mahakali Infotek ("Indiazona"), do
          hereby confirm and declare that:
        </Typography>

        <Box sx={{ pl: 2, mb: 2 }}>
          <Typography variant="body1" paragraph>
            • Indiazona is an e-commerce Platform and in no way is or promotes a
            Pyramid Scheme, nor does it enroll any person who participates in
            such a scheme/arrangement in any manner whatsoever.
          </Typography>
          <Typography variant="body1" paragraph>
            • Indiazona doesn't charge any vendor/partner onboarding fees of any
            manner.
          </Typography>
          <Typography variant="body1" paragraph>
            • IndiaZona does not subject its buyers to any inflated product
            prices and that the prices of the products are solely decided by the
            Vendors who list their products on the Platform.
          </Typography>
          <Typography variant="body1" paragraph>
            • Likewise, Indiazona does not participate in any Money Circulation
            Scheme, nor does it enroll any person who participates in such a
            scheme/arrangement in any manner whatsoever.
          </Typography>
          <Typography variant="body1" paragraph>
            • Indiazona is compliant with the provisions of the Consumer
            Protection (Direct Selling) Rules, 2021 promulgated vide No. G.S.R.
            889(E) by Department of Consumer Affairs.
          </Typography>
        </Box>

        <Grid container spacing={2} sx={{ mt: 3 }}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Place:</strong> Kolkata
            </Typography>
            <Typography variant="body2">
              <strong>Date:</strong> 30/08/24
            </Typography>
            <Typography variant="body2">
              <strong>Designation:</strong> Partner
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Typography variant="body2">
              <strong>Name:</strong> Bhawna Pagaria
            </Typography>
            <Typography variant="body2">
              <strong>Mail:</strong> info@indiazona.com
            </Typography>
            <Typography variant="body2">
              <strong>Mobile:</strong> 9748530006
            </Typography>
          </Grid>
        </Grid>

        <Typography variant="body2" sx={{ mt: 2 }}>
          <strong>Registered Office:</strong> Room No. 1B/3, 2nd Floor, 11 Clive
          Row, Dalhousie Square, Kolkata, West Bengal
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Website:</strong> www.indiazona.in
        </Typography>

        <Typography variant="body2" sx={{ mt: 1 }}>
          <strong>Follow us:</strong> Instagram | Facebook | X | LinkedIn
        </Typography>
      </Paper>
    </Container>
  );
};

export default ComplianceUndertaking;
