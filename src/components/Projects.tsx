import * as React from "react";
import { useTheme } from "@mui/material/styles";
import { Box } from "@mui/material";
import MobileStepper from "@mui/material/MobileStepper";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import KeyboardArrowLeft from "@mui/icons-material/KeyboardArrowLeft";
import KeyboardArrowRight from "@mui/icons-material/KeyboardArrowRight";
import SwipeableViews from "react-swipeable-views";
import { autoPlay } from "react-swipeable-views-utils";
import "../App.css"

import smartSol from "../assets/smartSol.jpg";
import massMedia from "../assets/massMedia.jpg";
import RwadAqar from "../assets/RwadAqar.jpg";
import AdhanTime from "../assets/AdhanTime.jpg";
import DashBoard from "../assets/DashBoard.jpg";
import copyWriter from "../assets/copyWriter.jpg";
import Ecommerce from "../assets/Ecommerce.jpg";
import sbabah from "../assets/sbabah.jpg";

const AutoPlaySwipeableViews = autoPlay(SwipeableViews);

const images = [
  {
    label: "Rwad-Aqar",
    imgPath: RwadAqar,
    link: "https://rwadaqar.com/",
  },
  {
    label: "mass-Media",
    imgPath: massMedia,
    link: "https://marketingportfolio.netlify.app",
  },
  {
    label: "Adhan-Time",
    imgPath: AdhanTime,
    link: "https://adhantime.netlify.app/",
  },
  {
    label: "Dash-Board",
    imgPath: DashBoard,
    link: "https://gilded-brioche-dc35e1.netlify.app/",
  },
  {
    label: "Smart-Soluations",
    imgPath: smartSol,
    link: "https://astonishing-cocada-087d82.netlify.app/",
  },
  {
    label: "Copy-Writer",
    imgPath: copyWriter,
    link: "https://marketingportfolio.netlify.app",
  },
  {
    label: "ECommerce",
    imgPath: Ecommerce,
    link: "https://ecommerce-p-omega.vercel.app/",
  },
  {
    label: "Sbabah",
    imgPath: sbabah,
    link: "https://sbabah.com/",
  },
];

export default function Projects() {
  const theme = useTheme();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = images.length;

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleStepChange = (step: number) => {
    setActiveStep(step);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        background: "#ccc",
        padding: "2em 0",
      }}
    >
      <Box
        sx={{
          width: "100%",
          flexGrow: 1,
          maxWidth: "50%",
          height: "100%",
          "@media (max-width: 600px)": {
             maxWidth: "80%",
            //  maxHeight: "80%",  
          },
          "@media (max-width: 960px)": {
             maxWidth: "60%",  
          },
        }}
      >
        <Paper
          square
          elevation={0}
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            height: 50,
            pl: 2,
            pr: 2,
            bgcolor: "background.default",
          }}
        >
          <Typography
            sx={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "#333",
              textAlign: "center",
              margin: "10px 0",
              padding: "5px",
              backgroundColor: "#f0f0f0",
              border: "1px solid #ccc",
              borderRadius: "5px",
              "@media (max-width: 600px)": {
                padding: "2px", 
          },
            }}
          >
            {images[activeStep].label}
          </Typography>
          <a
            href={images[activeStep].link}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "Arial, sans-serif",
              fontSize: "16px",
              color: "#000",
              textDecoration: "none",
              padding: "10px",
              backgroundColor: "#F9636C",
              borderRadius: "5px",
              display: "inline-block",
              margin: "10px 0",
              boxShadow: "2px 2px 5px rgba(0, 0, 0, 0.2)",
              transition: "background-color 0.3s, color 0.3s",
          
            }}
          >
            View More
          </a>
        </Paper>
        <AutoPlaySwipeableViews
          axis={theme.direction === "rtl" ? "x-reverse" : "x"}
          index={activeStep}
          onChangeIndex={handleStepChange}
          enableMouseEvents
        >
          {images.map((step, index) => (
            <div key={step.label}>
              {Math.abs(activeStep - index) <= 2 && (
                <Box
                  component="div"
                  sx={{
                    position: "relative",
                    textAlign: "center",
                    height: "100%",
                    overflow: "hidden",
                  }}
                >
                  <img
                    src={step.imgPath}
                    alt={step.label}
                    style={{
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </Box>
              )}
            </div>
          ))}
        </AutoPlaySwipeableViews>
        <MobileStepper
          steps={maxSteps}
          position="static"
          activeStep={activeStep}
          nextButton={
            <Button
              size="medium"
              onClick={handleNext}
              disabled={activeStep === maxSteps - 1}
            >
              Next{" "}
              {theme.direction === "rtl" ? (
                <KeyboardArrowLeft />
              ) : (
                <KeyboardArrowRight />
              )}
            </Button>
          }
          backButton={
            <Button
              size="medium"
              onClick={handleBack}
              disabled={activeStep === 0}
            >
              {theme.direction === "rtl" ? (
                <KeyboardArrowRight />
              ) : (
                <KeyboardArrowLeft />
              )}{" "}
              Back
            </Button>
          }
        />
      </Box>
    </Box>
  );
}
