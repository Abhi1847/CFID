import CompanyInfo from "./components/CompanyInfo";
import ProductsProduced from "./components/ProductsProduced";
import Species from "./components/Species";
import Equipment from "./components/Equipment";
import LogBuying from "./components/LogBuying";
import Residue from "./components/Residue";
import Services from "./components/Services";
import Certifications from "./components/Certifications";
import CompanyContacts from "./components/CompanyContacts";
import { Box, Step, StepLabel, Stepper } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { dropDowns } from "../../store/reducers";
import { useEffect, useState } from "react";

function AddCompany() {
  const { step } = useSelector((state) => state.counter);
  // const [currentStep, setCurrentStep] = useState(0);
  const [data, setdata] = useState();

  const steps = [
    "Company Info",
    "Products",
    "Species",
    "Equipment",
    "Log Buying Preferences",
    "Residue",
    "Services",
    "Certifications",
    "Company Contacts",
  ];
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(dropDowns()).then((res) => {
      setdata(res.payload);
    });
  }, []);

  const handleStepClick = (index) => {
    // setCurrentStep(index);
    // setActiveStep(index);
  };
  // const CustomStepConnector = (props) => (
  //   <StepConnector
  //     {...props}
  //     style={{
  //       display: "block",
  //       borderColor: "rgba(0, 0, 0, 0.12)", // Adjust line color
  //       width: "100%", // Ensure line width covers the space between steps
  //     }}
  //   />
  // );
  const isMobile = window.innerWidth <= 768; // Example check for mobile

  return (
    <>
      <div className="modal_ul_main">
        <div style={{ display: "flex" }} className="step-con">
          <div
            style={{ width: "20%", margin: "2em 0em 0em 5em" }}
            className="stepp-width"
          >
            <h4 style={{ margin: "1em 0em" }}>Add Company</h4>
            {/* <Stepper
              orientation={window.innerWidth <= 768 ? "horizontal" : "vertical"}
              className="pro-width"
              activeStep={step}
              connector={<CustomStepConnector />}
              style={{
                overflowX: window.innerWidth <= 768 ? "auto" : "visible",
                whiteSpace: "nowrap",
              }}
            >
              {steps.map((step, index) => (
                <Step key={index}>
                  <StepLabel
                    className={"text-capitalize"}
                    onClick={() => handleStepClick(index)}
                  >
                    {step}
                  </StepLabel>
                </Step>
              ))}
            </Stepper> */}
            <Box
              sx={{
                overflowX: isMobile ? "auto" : "unset", // Enable horizontal scrolling on mobile
                width: isMobile ? "100%" : "30em", // Full width on mobile, fixed width on larger screens
                display: "flex", // Use flexbox for layout
                justifyContent: isMobile ? "flex-start" : "center", // Align steps properly based on device
              }}
            >
              <Stepper
                activeStep={step}
                orientation={isMobile ? "horizontal" : "vertical"} // Horizontal for mobile, vertical otherwise
                alternativeLabel={isMobile}
                style={{ width: isMobile ? "auto" : "30em" }} // Set width based on view
                className="pro-width"
              >
                {steps.map(
                  (step, index) =>
                    step !== "all" && (
                      <Step key={index}>
                        <StepLabel className={"text-capitalize"}>
                          {step}
                        </StepLabel>
                      </Step>
                    )
                )}
              </Stepper>
            </Box>
          </div>

          <div style={{ width: "70%" }} className="stepp-width">
            {step === 0 && <CompanyInfo />}
            {step === 1 && <ProductsProduced data={data} />}
            {step === 2 && <Species data={data} />}
            {step === 3 && <Equipment data={data} />}
            {step === 4 && <LogBuying />}
            {step === 5 && <Residue data={data} />}
            {step === 6 && <Services data={data} />}
            {step === 7 && <Certifications data={data} />}
            {step === 8 && <CompanyContacts />}
          </div>
        </div>
      </div>
    </>
  );
}

export default AddCompany;
