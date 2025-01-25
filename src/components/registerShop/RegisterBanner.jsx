import { Box, Stack, IconButton } from "@mui/material";
import { KeyboardArrowLeft, KeyboardArrowRight } from "@mui/icons-material";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const RegisterBanner = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [loaded, setLoaded] = useState(false);
  const navigate = useNavigate();
  const [sliderRef, instanceRef] = useKeenSlider({
    initial: 0,
    slideChanged(slider) {
      setCurrentSlide(slider.track.details.rel);
    },
    created() {
      setLoaded(true);
    },
    loop: true,
  });

  useEffect(() => {
    const autoScrollInterval = setInterval(() => {
      if (instanceRef.current) {
        instanceRef.current.next();
      }
    }, 5000);

    return () => {
      clearInterval(autoScrollInterval);
    };
  }, [instanceRef]);

  const handleSecondImageClick = () => {
    if (currentSlide === 1) {
      navigate("/campaign");
    }
  };

  return (
    <Box
      sx={{
        width: "100%",
        maxWidth: "100vw",
        overflowX: "hidden",
        mb: 10,
      }}
    >
      <Stack
        sx={{
          position: "relative",
          maxWidth: "100%",
          width: "100%",
        }}
      >
        <Box
          sx={{
            position: "relative",
            width: "100%",
            maxWidth: "100%",
            "& .keen-slider": {
              transition: "opacity 0.3s",
              opacity: loaded ? 1 : 0,
              maxWidth: "100%",
              "@media (max-width: 490px)": {
                width: "100%",
              },
            },
          }}
        >
          <Box ref={sliderRef} className="keen-slider">
            <Box
              className="keen-slider__slide"
              sx={{
                cursor: currentSlide === 0 ? "pointer" : "default",
                position: "relative",
                maxWidth: "100%",
                "@media (max-width: 490px)": {
                  width: "100%",
                },
              }}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                  height: {
                    xs: "200px",
                    sm: "300px",
                    md: "auto",
                  },
                  "@media (max-width: 490px)": {
                    height: "150px",
                    objectFit: "cover",
                  },
                }}
                alt="lady_image_hero_section"
                src="https://indiazona-assets.blr1.cdn.digitaloceanspaces.com/assets/images-prod/Indiazona%20Banner%201.jpg"
              />
            </Box>

            <Box
              className="keen-slider__slide"
              sx={{
                position: "relative",
                cursor: currentSlide === 1 ? "pointer" : "default",
                maxWidth: "100%",
                "@media (max-width: 490px)": {
                  width: "100%",
                },
              }}
              onClick={handleSecondImageClick}
            >
              <Box
                component="img"
                sx={{
                  width: "100%",
                  display: "block",
                  objectFit: "contain",
                  height: {
                    xs: "200px",
                    sm: "300px",
                    md: "auto",
                  },
                  "@media (max-width: 490px)": {
                    height: "150px",
                    objectFit: "cover",
                  },
                }}
                alt="second_banner_image"
                src="https://indiazona-assets.blr1.cdn.digitaloceanspaces.com/assets/images-prod/Aapki%20Dukaan,%20Aapki%20Pehchaan%20Banner.jpg"
              />
            </Box>
          </Box>

          {loaded && instanceRef.current && (
            <>
              <IconButton
                sx={{
                  position: "absolute",
                  left: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.prev();
                }}
              >
                <KeyboardArrowLeft />
              </IconButton>

              <IconButton
                sx={{
                  position: "absolute",
                  right: 8,
                  top: "50%",
                  transform: "translateY(-50%)",
                  bgcolor: "rgba(255, 255, 255, 0.8)",
                  "&:hover": {
                    bgcolor: "rgba(255, 255, 255, 0.9)",
                  },
                  width: { xs: 30, md: 40 },
                  height: { xs: 30, md: 40 },
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  instanceRef.current?.next();
                }}
              >
                <KeyboardArrowRight />
              </IconButton>
            </>
          )}
        </Box>
      </Stack>
    </Box>
  );
};

export default RegisterBanner;
