import React from "react";
import {
  Container,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Paper,
  Divider,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import StorefrontIcon from "@mui/icons-material/Storefront";

const VendorFAQs = () => {
  const faqs = [
    {
      question: "What is Sell on Indiazona?",
      answer:
        "IndiaZona is an e-commerce marketplace dedicated to Indian origin brands & businesses. We have thoughtfully designed the features and policies of our platform to be vendor-friendly, offering benefits and advantages that no other marketplaces provide. Become our vendors & sell on Indiazona to boost your sales & profits.",
    },
    {
      question: "Is there any kind of onboarding/joining fee?",
      answer:
        "It is totally free to join Indiazona as a seller, there are no onboarding or joining fees. Simply register yourself and start listing the products that you want to sell on Indiazona.",
    },
    {
      question: "How does selling on Indiazona work?",
      answer:
        "Selling on Indiazona is very simple. First you register & list your products that you want to sell on Indiazona. Customers then see your products and make purchases. As an order is placed you will receive a notification to ship the product. Based on your choice, either you can ship it yourselves or the shipping can be managed by us. Based on your return window, Indiazona will deposit money in your wallet after adjusting the applicable charges.",
    },
    {
      question: "What do I need to do to register as a seller on Indiazona?",
      answer:
        "You need to login and register using your name, email & mobile number. Once your account is created you need to add Personal & Contact information, Business information, Authorization of the person managing your Indiazona store, your GST Details and the list of your pickup addresses.",
    },
    {
      question: "What products can I sell on Indiazona?",
      answer:
        "Indiazona offers a wide range of categories for vendors to choose from, including fashion, clothing, electronics, jewelry, home furnishings, books, electronics, beauty products, kitchenware, and many more. We give special preference and visibility to Handmade & Made in India products. However, some categories may require prior quality approval before going live on the platform.",
    },
    {
      question:
        "I don't have a website, can I still sell on Indiazona?/ Who can sell on Indiazona",
      answer:
        "Yes, you can be anyone, work from anywhere to sell on IndiaZona.",
    },
    {
      question: "What is the minimum inventory required to sell on Indiazona?",
      answer:
        "There are no stringent minimum inventory requirements on Indiazona, you can begin with even a minimum of 1 product and easily stock out the product at your choice. However, it's important to keep your inventory updated in real-time to avoid order cancellations due to items being out of stock at your end.",
    },
    {
      question: "Who takes care of delivery?",
      answer:
        "There are 2 options: a. 'Delivery by Vendor' where you manage the end to end logistics. b. 'Delivery by Indiazona' where Indiazona manages the end to end logistics. You can choose your preference while listing the products.",
    },
    {
      question:
        "Who takes care of packaging? If I take care of packaging, where do I get the packaging material from?",
      answer:
        "Vendors are responsible for packing the products according to the guidelines so that the product reaches customers safely. In due course Indiazona will also provide packaging material on request and will charge a nominal amount for it.",
    },
    {
      question:
        "If I list my products on Indiazona, will the customer know that he or she is purchasing from me on Indiazona marketplace?",
      answer:
        "Yes, at IndiaZona we provide free and fair visibility to vendors. When customers see your product we will clearly mention your display name along with your return & replacement policy for that product.",
    },
    {
      question: "Can I offer both products and services on Indiazona?",
      answer: "No, currently only products can be sold on Indiazona.",
    },
    {
      question:
        "Can I sell multiple categories of product some of them require GST & some of them fall under GST Exempt category?",
      answer:
        "Yes, you can sell multiple categories of products on IndiaZona. If your product falls under categories that require GST, ensure you provide your GST details during registration. For products that are GST exempt, you can select the GST exempt option when listing those items.",
    },
  ];

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
            Vendor FAQs
          </Typography>
        </Box>

        <Divider sx={{ mb: 3, borderColor: "primary.main" }} />

        <Box>
          {faqs.map((faq, index) => (
            <Accordion
              key={index}
              sx={{
                mb: 2,
                borderRadius: 2,
                boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                "&:before": {
                  display: "none",
                },
              }}
              disableGutters
            >
              <AccordionSummary
                expandIcon={<ExpandMoreIcon />}
                sx={{
                  backgroundColor: "#f3f4f6",
                  borderRadius: 2,
                  "&:hover": {
                    backgroundColor: "#e5e7eb",
                  },
                }}
              >
                <Typography
                  variant="subtitle1"
                  fontWeight="bold"
                  color="primary"
                >
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails
                sx={{ backgroundColor: "background.paper", borderRadius: 2 }}
              >
                <Typography variant="body2" color="text.secondary">
                  {faq.answer}
                </Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Paper>
    </Container>
  );
};

export default VendorFAQs;
