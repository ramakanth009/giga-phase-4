// src/components/common/fulltime/programfee/ProgramFee.jsx
import React from "react";
import { Box, Typography, Button, Paper, Divider } from "@mui/material";
import { makeStyles } from "@mui/styles";
import CoffeeIcon from "@mui/icons-material/Coffee";
import ApartmentIcon from "@mui/icons-material/Apartment";
import ScholarshipIcon from "@mui/icons-material/CardGiftcard";
import VisibilityIcon from "@mui/icons-material/Visibility";
import CentralizedPopupForms from "../../popupforms/CentralizedPopupForms";

const useStyles = makeStyles({
  container: {
    padding: "10px 0",
    position: "relative",
    overflow: "hidden",
    // background: "linear-gradient(135deg, #f8f9ff 0%, #f0f6ff 100%)",
    
  },
  feeCard: {
    padding: "0 20px",
    margin: "0 auto",
    borderRadius: "24px !important",
    boxShadow: "0 15px 50px rgba(0, 0, 0, 0.1) !important",
    overflow: "hidden",
    background: "white",
    position: "relative",
    "@media (max-width: 1200px)": {
      padding: "0 15px",
      borderRadius: "20px !important",
    },
    "@media (max-width: 960px)": {
      padding: "0 12px",
      borderRadius: "18px !important",
    },
    "@media (max-width: 600px)": {
      padding: "0 10px",
      borderRadius: "16px !important",
    },
    "@media (max-width: 480px)": {
      padding: "0 8px",
      borderRadius: "14px !important",
    },
    "@media (max-width: 375px)": {
      padding: "0 5px",
      borderRadius: "12px !important",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "-50px",
      right: "-50px",
      width: "200px",
      height: "200px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(74, 99, 231, 0.1) 0%, rgba(74, 99, 231, 0) 70%)",
      zIndex: 0,
      "@media (max-width: 600px)": {
        width: "150px",
        height: "150px",
        top: "-30px",
        right: "-30px",
      },
      "@media (max-width: 375px)": {
        width: "100px",
        height: "100px",
        top: "-20px",
        right: "-20px",
      },
    },
    "&::after": {
      content: '""',
      position: "absolute",
      bottom: "-70px",
      left: "-70px",
      width: "250px",
      height: "250px",
      borderRadius: "50%",
      background:
        "radial-gradient(circle, rgba(255, 198, 20, 0.1) 0%, rgba(255, 198, 20, 0) 70%)",
      zIndex: 0,
      "@media (max-width: 600px)": {
        width: "180px",
        height: "180px",
        bottom: "-50px",
        left: "-50px",
      },
      "@media (max-width: 375px)": {
        width: "120px",
        height: "120px",
        bottom: "-30px",
        left: "-30px",
      },
    },
    
  },
  feeCardbox: { 
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3a3e8f 100%)',
    padding: "20px 30px",
    marginBottom: "20px",
    borderRadius: "20px",
  },
  header: {
    position: "relative",
    padding: "20px 50px",
    borderBottom: "1px solid rgba(0, 0, 0, 0.05)",
    // background: 'linear-gradient(135deg, #2A2B6A 0%, #3a3e8f 100%)',
    color: "white",
    borderTopLeftRadius: "24px",
    borderTopRightRadius: "24px",
    "@media (max-width: 1200px)": {
      padding: "35px 40px",
      borderTopLeftRadius: "20px",
      borderTopRightRadius: "20px",
    },
    "@media (max-width: 960px)": {
      padding: "32px 35px",
      borderTopLeftRadius: "18px",
      borderTopRightRadius: "18px",
    },
    "@media (max-width: 600px)": {
      padding: "30px 25px",
      borderTopLeftRadius: "16px",
      borderTopRightRadius: "16px",
    },
    "@media (max-width: 480px)": {
      padding: "25px 20px",
      borderTopLeftRadius: "14px",
      borderTopRightRadius: "14px",
    },
    "@media (max-width: 375px)": {
      padding: "20px 15px",
      borderTopLeftRadius: "12px",
      borderTopRightRadius: "12px",
    },
  },
  title: {
    fontSize: "2.4rem !important",
    fontWeight: "bold !important",
    marginBottom: "10px !important",
    textAlign: "center",
    background: "linear-gradient(45deg, #ffffff 30%, #f0f8ff 90%)",
    WebkitBackgroundClip: "text",
    WebkitTextFillColor: "transparent",
    backgroundClip: "text",
    position: "relative",
    "& span": {
      background: "linear-gradient(135deg, #FFC614 0%, #FFD700 100%)",
      WebkitBackgroundClip: "text",
      WebkitTextFillColor: "transparent",
      backgroundClip: "text",
      fontWeight: "bold",
    },
    "@media (max-width: 1200px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.1rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "1.8rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.6rem !important",
    },
  },
  subtitle: {
    fontSize: "1.1rem !important",
    opacity: 0.9,
    textAlign: "center",
    fontWeight: "400 !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.05rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.02rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
    },
  },
  content: {
    padding: "10px",
    
  },
  priceRow: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
    gap: "30px",
    padding:"10px 200px",
    marginBottom: "40px",
    "@media (max-width: 1200px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
      gap: "25px",
    },
    "@media (max-width: 960px)": {
      gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
      gap: "20px",
    },
    "@media (max-width: 600px)": {
      gridTemplateColumns: "1fr",
      gap: "25px",
      marginBottom: "35px",
    },
    "@media (max-width: 480px)": {
      gap: "20px",
      marginBottom: "30px",
    },
    "@media (max-width: 375px)": {
      gap: "15px",
      marginBottom: "25px",
    },
  },
  priceBox: {
    textAlign: "center",
    padding: "35px 25px",
    borderRadius: "20px",
    // background:"linear-gradient(135deg, rgba(42, 43, 106, 0.02) 0%, rgba(42, 43, 106, 0.05) 100%) !important",
    background: "white",
    border: "1px solid rgba(42, 43, 106, 0.08)",
    position: "relative",
    overflow: "hidden",
    transition: "all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)",
    "&:hover": {
      transform: "translateY(-8px) scale(1.02)",
      boxShadow: "0 20px 40px rgba(42, 43, 106, 0.15)",
      borderColor: "rgba(42, 43, 106, 0.2)",
    },
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "4px",
      background: "linear-gradient(90deg, #2A2B6A, #4A4C9B, #FFC614)",
      opacity: 0,
      transition: "opacity 0.3s ease",
    },
    "&:hover::before": {
      opacity: 1,
    },
    "@media (max-width: 1200px)": {
      padding: "32px 22px",
      borderRadius: "18px",
    },
    "@media (max-width: 960px)": {
      padding: "30px 20px",
      borderRadius: "16px",
    },
    "@media (max-width: 600px)": {
      padding: "30px 20px",
    },
    "@media (max-width: 480px)": {
      padding: "25px 18px",
      borderRadius: "14px",
    },
    "@media (max-width: 375px)": {
      padding: "20px 15px",
      borderRadius: "12px",
    },
  },
  priceLabel: {
    fontSize: "1.2rem !important",
    color: "#666 !important",
    fontWeight: "500 !important",
    marginBottom: "10px !important",
    textTransform: "uppercase",
    letterSpacing: "0.5px",
    "@media (max-width: 1200px)": {
      fontSize: "0.95rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "0.92rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      marginBottom: "6px !important",
    },
  },
  priceValue: {
    fontSize: "3rem !important",
    fontWeight: "bold !important",
    color: "#2A2B6A !important",
    marginBottom: "15px !important",
    fontFamily: '"Poppins", sans-serif !important',
    "@media (max-width: 1200px)": {
      fontSize: "2.3rem !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "2.2rem !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "2rem !important",
      marginBottom: "12px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1.8rem !important",
      marginBottom: "10px !important",
    },
  },
  comparisonContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    gap: "8px",
    marginTop: "10px",
    "@media (max-width: 480px)": {
      gap: "6px",
      marginTop: "8px",
    },
    "@media (max-width: 375px)": {
      gap: "4px",
      marginTop: "6px",
    },
  },
  comparisonIcon: {
    fontSize: "1.2rem !important",
    color: "#FFC614 !important",
    "@media (max-width: 480px)": {
      fontSize: "1.1rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "1rem !important",
    },
  },
  comparisonText: {
    fontSize: "0.9rem !important",
    color: "#888 !important",
    fontStyle: "italic",
    "@media (max-width: 480px)": {
      fontSize: "0.85rem !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.8rem !important",
    },
  },
  // New reveal fee button styles
  revealFeeButton: {
    background: "linear-gradient(135deg, #FFC614 0%, #FFD700 100%) !important",
    color: "#2A2B6A !important",
    padding: "12px 30px !important",
    borderRadius: "50px !important",
    fontWeight: "600 !important",
    fontSize: "1rem !important",
    textTransform: "none !important",
    transition: "all 0.3s ease !important",
    boxShadow: "0 8px 20px rgba(255, 198, 20, 0.3) !important",
    position: "relative",
    overflow: "hidden",
    border: "none",
    marginTop: "20px",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 25px rgba(255, 198, 20, 0.4) !important",
      background: "linear-gradient(135deg, #FFD700 0%, #FFC614 100%) !important",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
      transform: "rotate(30deg)",
      animation: "$shine 3s infinite",
    },
    "@media (max-width: 1200px)": {
      padding: "11px 28px !important",
      fontSize: "0.98rem !important",
    },
    "@media (max-width: 960px)": {
      padding: "10px 25px !important",
      fontSize: "0.96rem !important",
    },
    "@media (max-width: 600px)": {
      padding: "10px 25px !important",
      fontSize: "0.95rem !important",
      marginTop: "15px",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
      padding: "9px 20px !important",
      borderRadius: "40px !important",
      marginTop: "12px",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      padding: "8px 18px !important",
      borderRadius: "35px !important",
      marginTop: "10px",
    },
  },
  divider: {
    margin: "40px 0 !important",
    backgroundColor: "rgba(42, 43, 106, 0.1) !important",
    "@media (max-width: 1200px)": {
      margin: "38px 0 !important",
    },
    "@media (max-width: 960px)": {
      margin: "36px 0 !important",
    },
    "@media (max-width: 600px)": {
      margin: "35px 0 !important",
    },
    "@media (max-width: 480px)": {
      margin: "30px 0 !important",
    },
    "@media (max-width: 375px)": {
      margin: "25px 0 !important",
    },
  },

  "@keyframes shine": {
    "0%": {
      left: "-50%",
    },
    "100%": {
      left: "150%",
    },
  },
  scholarshipSection: {
    background:
      "linear-gradient(135deg, rgba(255, 198, 20, 0.05) 0%, rgba(255, 198, 20, 0.1) 100%)",
    borderRadius: "16px",
    padding: "25px",
    marginBottom: "30px",
    border: "1px solid rgba(255, 198, 20, 0.2)",
    position: "relative",
    overflow: "hidden",
    textAlign: "center",
    "&::before": {
      content: '""',
      position: "absolute",
      top: "0",
      left: "0",
      right: "0",
      height: "3px",
      background: "linear-gradient(90deg, #FFC614, #FFD700)",
    },
    "@media (max-width: 1200px)": {
      padding: "22px",
      marginBottom: "28px",
      borderRadius: "14px",
    },
    "@media (max-width: 960px)": {
      padding: "20px",
      marginBottom: "26px",
    },
    "@media (max-width: 600px)": {
      padding: "20px",
      marginBottom: "25px",
    },
    "@media (max-width: 480px)": {
      padding: "18px",
      marginBottom: "22px",
      borderRadius: "12px",
    },
    "@media (max-width: 375px)": {
      padding: "15px",
      marginBottom: "20px",
      borderRadius: "10px",
    },
  },
  scholarshipText: {
    fontSize: "1.1rem !important",
    color: "#2A2B6A !important",
    marginBottom: "20px !important",
    fontWeight: "500 !important",
    lineHeight: "1.6 !important",
    "@media (max-width: 1200px)": {
      fontSize: "1.05rem !important",
      marginBottom: "18px !important",
    },
    "@media (max-width: 960px)": {
      fontSize: "1.02rem !important",
    },
    "@media (max-width: 600px)": {
      fontSize: "1rem !important",
      marginBottom: "15px !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.95rem !important",
      marginBottom: "12px !important",
      lineHeight: "1.5 !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.9rem !important",
      marginBottom: "10px !important",
      lineHeight: "1.4 !important",
    },
  },
  scholarshipButton: {
    background: "linear-gradient(45deg, #FFC614 0%, #FFD700 100%) !important",
    color: "#2A2B6A !important",
    padding: "12px 30px !important",
    borderRadius: "50px !important",
    fontWeight: "bold !important",
    fontSize: "1rem !important",
    transition: "all 0.3s ease !important",
    boxShadow: "0 8px 20px rgba(255, 198, 20, 0.3) !important",
    position: "relative",
    overflow: "hidden",
    marginRight: "10px !important",
    marginBottom: "10px !important",
    "&:hover": {
      transform: "translateY(-3px)",
      boxShadow: "0 12px 25px rgba(255, 198, 20, 0.4) !important",
      background: "linear-gradient(45deg, #FFD700 0%, #FFC614 100%) !important",
    },
    "&::after": {
      content: '""',
      position: "absolute",
      top: "-50%",
      left: "-50%",
      width: "200%",
      height: "200%",
      background:
        "linear-gradient(to right, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.4) 50%, rgba(255, 255, 255, 0) 100%)",
      transform: "rotate(30deg)",
      animation: "$shine 3s infinite",
    },
    "@media (max-width: 1200px)": {
      padding: "11px 28px !important",
      fontSize: "0.98rem !important",
      marginRight: "8px !important",
    },
    "@media (max-width: 960px)": {
      padding: "10px 25px !important",
      fontSize: "0.96rem !important",
    },
    "@media (max-width: 600px)": {
      width: "100%",
      fontSize: "0.95rem !important",
      padding: "10px 25px !important",
      marginBottom: "10px !important",
      marginRight: "0 !important",
    },
    "@media (max-width: 480px)": {
      fontSize: "0.9rem !important",
      padding: "9px 20px !important",
      borderRadius: "40px !important",
      marginBottom: "8px !important",
    },
    "@media (max-width: 375px)": {
      fontSize: "0.85rem !important",
      padding: "8px 18px !important",
      borderRadius: "35px !important",
      marginBottom: "6px !important",
    },
  },
});

const ProgramFee = ({
  totalFee,
  onApplyClick,
  scholarshipButtonTitle = "",
  expertButtonTitle = "",
}) => {
  const classes = useStyles();

  const monthlyFee = Math.round(parseInt(totalFee.replace(/,/g, "")) / 24);
  const monthlyFeeFormatted = monthlyFee.toLocaleString("en-IN");

  const dailyFee = parseInt(totalFee.replace(/,/g, "")) / 730;
  const dailyFeeFormatted = Math.round(dailyFee).toLocaleString("en-IN");

  // Popup state for "Talk to our expert today"
  const [popupOpen, setPopupOpen] = React.useState(false);
  const [popupVariant, setPopupVariant] = React.useState("demo");

  const handleScholarshipClick = () => {
    window.location.href = "/pre-screening-test";
  };

  const handleExpertClick = () => {
    setPopupVariant("demo");
    setPopupOpen(true);
  };

  const handleRevealFeeClick = () => {
    setPopupVariant("demo");
    setPopupOpen(true);
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  return (
    <Box className={classes.container}>
      <Paper className={classes.feeCard}>
        
        <Box className={classes.content}>
          <Box className={classes.feeCardbox}>
          <Box className={classes.header}>
            <Typography variant="h2" className={classes.title}>
              Invest in Your Future — <span>Not Just a Course Fee</span>
            </Typography>
            <Typography className={classes.subtitle}>
              A 12-month career investment for real-world skills, AI tools, and
              job-ready projects.
            </Typography>
          </Box>
          <Box className={classes.priceRow}>
            <Box className={classes.priceBox}>
              <Typography variant="h3" className={classes.priceLabel}>
                Monthly Investment
              </Typography>
              <Typography variant="h4" className={classes.priceValue}>
                ₹{monthlyFeeFormatted}/month
              </Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Spread over 24 months
                </Typography>
              </Box>
            </Box>

            <Box className={classes.priceBox}>
              <Typography variant="h3" className={classes.priceLabel}>
                Daily Investment
              </Typography>
              <Typography variant="h4" className={classes.priceValue}>
                ₹{dailyFeeFormatted}/day
              </Typography>
              <Box className={classes.comparisonContainer}>
                <CoffeeIcon className={classes.comparisonIcon} />
                <Typography className={classes.comparisonText}>
                  Less than a meal outside
                </Typography>
              </Box>
            </Box>
          </Box>
          
          {/* Centered Reveal Fee Button */}
          <Box style={{ textAlign: 'center' }}>
            <Button
              variant="contained"
              className={classes.revealFeeButton}
              startIcon={<VisibilityIcon />}
              onClick={handleRevealFeeClick}
            >
              Click here to reveal the Full Fee
            </Button>
          </Box>
        </Box>
          
          {/* Scholarship Section */}
          <Box className={classes.scholarshipSection}>
            <Typography className={classes.scholarshipText}>
              Need financial support? Apply for scholarships with coverage of up
              to 100% of the program fee.
            </Typography>
            <Button
              variant="contained"
              className={classes.scholarshipButton}
              startIcon={<ScholarshipIcon />}
              onClick={handleScholarshipClick}
              title={scholarshipButtonTitle}
            >
              Apply for Scholarship
            </Button>
            <Button
              variant="contained"
              className={classes.scholarshipButton}
              startIcon={<ScholarshipIcon />}
              onClick={handleExpertClick}
              title={expertButtonTitle}
            >
              Talk to our expert today
            </Button>
          </Box>
        </Box>
      </Paper>
      {/* Centralized Popup for "Talk to our expert today" and "Start Your Career Investment" */}
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant={popupVariant}
      />
    </Box>
  );
};

export default ProgramFee;
