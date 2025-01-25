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
import CancelPresentationIcon from "@mui/icons-material/CancelPresentation";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import HeaderSection from "../registerShop/HeaderSection";
import Footer from "../HomePage/Footer";
const OrderCancellationFAQs = () => {
  const faqs = [
    {
      question: "Can I change or modify orders that are already placed?",
      answer:
        "You cannot modify an order after it's placed, but you can cancel it if it's not yet shipped and place a new one.",
    },
    {
      question: "How to cancel orders?",
      answer:
        "Go to 'My Orders,' select the order you wish to cancel, and click 'Cancel Order.' It will be cancelled if it hasn't been shipped.",
    },
    {
      question: "Can I cancel only part of my order?",
      answer:
        "Yes, you can cancel a part of your order before it is dispatched. Go to 'My Orders' section, select your order and then select the item which you want to cancel.",
    },
    {
      question: "Why is the cancellation button disabled?",
      answer:
        "The order has been dispatched and hence it cannot be cancelled, so the cancellation button is disabled.",
    },
    {
      question: "What are the modes of refund available after cancellation?",
      answer:
        "Refunds can be processed through original payment methods like credit/debit cards, net banking, etc.",
    },
    {
      question:
        "What happens when I have made a payment from a credit card and the order is returned or cancelled?",
      answer:
        "If your order is returned or cancelled, the payment will be refunded to your credit card.",
    },
    {
      question: "I have cancelled my order. When will I get my refund?",
      answer:
        "Refunds for cancelled orders are usually processed within 10 working days.",
    },
    {
      question: "Will I get the complete refund of the cancelled order?",
      answer:
        "Yes, you will get the complete refund of the amount paid by you for the item cancelled by you.",
    },
    {
      question: "Was my order cancelled by Indiazona?",
      answer:
        "Occasionally, our sellers need to cancel orders due to reasons like product unavailability or not meeting our quality standards. When an order is cancelled, we process the refund right away. Generally, it will appear in your original payment method within 10 working days.",
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
            <CancelPresentationIcon
              sx={{ fontSize: 40, color: "primary.main", mr: 2 }}
            />
            <Typography variant="h4" color="primary" fontWeight="bold">
              Order Cancellation FAQs
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
                    color="black"
                  >
                    {faq.question}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails
                  sx={{ backgroundColor: "background.paper", borderRadius: 2 }}
                >
                  <Typography variant="body2">{faq.answer}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Paper>
      </Container>
      <Footer />
    </>
  );
};

export default OrderCancellationFAQs;
