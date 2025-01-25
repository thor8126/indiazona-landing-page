import React from "react";
import {
  Container,
  Typography,
  Box,
  Paper,
  Divider,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import HeaderSection from "../registerShop/HeaderSection";
import Footer from "../HomePage/Footer";
const CustomerFAQs = () => {
  const faqCategories = [
    {
      category: "Account Related",
      faqs: [
        {
          question: "How do I register?",
          answer:
            "To register, go to the Indiazona website or app and follow the registration process by providing the required details.",
        },
        {
          question: "Are there any charges for registration?",
          answer:
            "No, registration on Indiazona is free. You can simply create your account & start shopping with us!",
        },
        {
          question:
            "Can I have multiple registrations from the same mobile and email?",
          answer:
            "No, you can only have one registration per mobile number and email.",
        },
      ],
    },
    {
      category: "Payments",
      faqs: [
        {
          question: "What are the different payment methods?",
          answer:
            "You can pay easily through various payment options: Cash on delivery, UPI, Net Banking, Debit Card & Credit Card, Payment Wallets.",
        },
        {
          question: "What is COD - cash on delivery?",
          answer:
            "Cash on delivery means that you can pay for the order when it gets delivered to you. You may not need to pay the full amount at the time of placing the order.",
        },
        {
          question: "Are there any charges on COD?",
          answer:
            "Yes, Rs.50 per order until the order value is Rs.2500, above that as per the applicable rates.",
        },
      ],
    },
    {
      category: "Returns & Exchange",
      faqs: [
        {
          question: "How to create a return request?",
          answer:
            "Go to 'My Orders,' select the order you wish to return, and click on 'Return Item.' State the reasons for the return and upload product images and product unboxing videos.",
        },
        {
          question: "When will I get my refund?",
          answer:
            "Refunds for return requests are typically processed within 10 business days after the product is received back.",
        },
      ],
    },
    {
      category: "Orders & Delivery",
      faqs: [
        {
          question: "How to place bulk orders?",
          answer:
            "To place bulk orders, simply add the desired quantities of items to your cart. Once you have all the items in your cart, proceed to checkout and complete your order.",
        },
        {
          question: "What is the Swipe & Buy Section?",
          answer:
            "It is a unique feature of Indiazona using which you can shop through videos. Just swipe through videos until you find the product you love! Once you get it, simply click on 'Buy Now' or 'Add to Cart'.",
        },
        {
          question: "How much are delivery charges?",
          answer: "Free Standard Delivery for all products!",
        },
      ],
    },
    {
      category: "Customer Support",
      faqs: [
        {
          question: "How do I contact customer service?",
          answer:
            "Get in touch with our customer service through the 'Contact Us' on our website or app (available Monday-Sunday, 10am-6pm). You can also reach us anytime at care@indiazona.com.",
        },
        {
          question: "What are the timings of customer service?",
          answer:
            "Customer service is available from Monday-Sunday between 10am to 6pm.",
        },
      ],
    },
  ];

  return (
    <>
      <HeaderSection />
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
            <HelpOutlineIcon
              sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
            />
            <Typography variant="h4" color="primary" fontWeight="bold">
              Customer FAQs
            </Typography>
          </Box>

          <Divider sx={{ mb: 3, borderColor: "primary.main" }} />

          {faqCategories.map((category, categoryIndex) => (
            <Box key={categoryIndex} sx={{ mb: 3 }}>
              <Typography variant="h6" color="primary" sx={{ mb: 2 }}>
                {category.category}
              </Typography>
              {category.faqs.map((faq, faqIndex) => (
                <Accordion
                  key={faqIndex}
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
                      color="black"
                    >
                      {faq.question}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails
                    sx={{
                      backgroundColor: "background.paper",
                      borderRadius: 2,
                    }}
                  >
                    <Typography variant="body2" color="grey">
                      {faq.answer}
                    </Typography>
                  </AccordionDetails>
                </Accordion>
              ))}
            </Box>
          ))}
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default CustomerFAQs;
