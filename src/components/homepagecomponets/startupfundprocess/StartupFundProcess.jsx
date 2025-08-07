// import React from 'react';
// import { Box, Typography, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';

// const useStyles = makeStyles({
//   section: {
//     padding: '30px 0',
//     position: 'relative',
//     overflow: 'hidden',
//     display: 'flex',
//     alignItems: 'center',
//     '@media (max-width: 1200px)': {
//       padding: '25px 0',
//     },
//     '@media (max-width: 960px)': {
//       padding: '20px 0',
//     },
//     // Optimized mobile spacing starting from 600px
//     '@media (max-width: 600px)': {
//       padding: '24px 0',
//       minHeight: 'auto',
//     },
//     '@media (max-width: 480px)': {
//       padding: '20px 0',
//     },
//     '@media (max-width: 375px)': {
//       padding: '16px 0',
//     },
//   },
//   container: {
//     position: 'relative',
//     zIndex: 2,
//     textAlign: 'center',
//     width: '100%',
//     // Mobile-first padding optimization
//     '@media (max-width: 600px)': {
//       padding: '0 16px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '0 12px',
//     },
//   },
//   header: {
//     marginBottom: '40px',
//     '@media (max-width: 1200px)': {
//       marginBottom: '35px',
//     },
//     '@media (max-width: 960px)': {
//       marginBottom: '30px',
//     },
//     '@media (max-width: 600px)': {
//       marginBottom: '32px',
//     },
//     '@media (max-width: 480px)': {
//       marginBottom: '24px',
//     },
//     '@media (max-width: 375px)': {
//       marginBottom: '20px',
//     },
//   },
//   title: {
//     fontSize: '2.5rem !important',
//     fontWeight: '800 !important',
//     marginBottom: '12px !important',
//     color: '#2A2B6A !important',
//     textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
//     '@media (max-width: 1200px)': {
//       fontSize: '2.3rem !important',
//       marginBottom: '10px !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.1rem !important',
//       marginBottom: '10px !important',
//     },
//     // Enhanced mobile typography
//     '@media (max-width: 600px)': {
//       fontSize: '1.875rem !important',
//       marginBottom: '12px !important',
//       lineHeight: '1.2 !important',
//       letterSpacing: '-0.5px',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.625rem !important',
//       marginBottom: '10px !important',
//       lineHeight: '1.25 !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.5rem !important',
//       marginBottom: '8px !important',
//       lineHeight: '1.3 !important',
//     },
//   },
//   highlightText: {
//     color: '#FFC614 !important',
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#64748b !important',
//     marginBottom: '20px !important',
//     maxWidth: '500px',
//     margin: '0 auto 20px auto !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.05rem !important',
//       marginBottom: '18px !important',
//       maxWidth: '450px',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       marginBottom: '16px !important',
//       maxWidth: '400px',
//     },
//     // Improved mobile readability
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//       marginBottom: '16px !important',
//       maxWidth: '100%',
//       lineHeight: '1.5 !important',
//       padding: '0 8px',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.875rem !important',
//       marginBottom: '14px !important',
//       lineHeight: '1.6 !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.8125rem !important',
//       marginBottom: '12px !important',
//     },
//   },
//   fundingBadge: {
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
//     color: 'white !important',
//     padding: '8px 20px !important',
//     borderRadius: '20px !important',
//     fontSize: '0.9rem !important',
//     fontWeight: '700 !important',
//     display: 'inline-block !important',
//     textTransform: 'uppercase',
//     letterSpacing: '1px',
//     boxShadow: '0 6px 20px rgba(42, 43, 106, 0.25)',
//     '@media (max-width: 1200px)': {
//       padding: '7px 18px !important',
//       fontSize: '0.85rem !important',
//     },
//     '@media (max-width: 960px)': {
//       padding: '6px 16px !important',
//       fontSize: '0.8rem !important',
//       borderRadius: '18px !important',
//     },
//     // Enhanced mobile badge design
//     '@media (max-width: 600px)': {
//       padding: '8px 16px !important',
//       fontSize: '0.8125rem !important',
//       borderRadius: '16px !important',
//       letterSpacing: '0.5px',
//       fontWeight: '600 !important',
//     },
//     '@media (max-width: 480px)': {
//       padding: '6px 14px !important',
//       fontSize: '0.75rem !important',
//       borderRadius: '14px !important',
//     },
//     '@media (max-width: 375px)': {
//       padding: '5px 12px !important',
//       fontSize: '0.6875rem !important',
//       borderRadius: '12px !important',
//     },
//   },
//   pathwayContainer: {
//     position: 'relative',
//     maxWidth: '1200px',
//     margin: '0 auto',
//     '@media (max-width: 1200px)': {
//       maxWidth: '1000px',
//     },
//     '@media (max-width: 960px)': {
//       maxWidth: '800px',
//     },
//     '@media (max-width: 600px)': {
//       maxWidth: '100%',
//       padding: '0',
//     },
//   },
//   stepsGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(6, 1fr)',
//     gap: '20px',
//     position: 'relative',
//     '@media (max-width: 1024px)': {
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '25px',
//     },
//     '@media (max-width: 960px)': {
//       gridTemplateColumns: 'repeat(3, 1fr)',
//       gap: '20px',
//     },
//     // Optimized mobile grid layout
//     '@media (max-width: 600px)': {
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '20px',
//       padding: '0 4px',
//     },
//     '@media (max-width: 480px)': {
//       gridTemplateColumns: '1fr',
//       gap: '20px',
//       maxWidth: '320px',
//       margin: '0 auto',
//     },
//     '@media (max-width: 375px)': {
//       gap: '16px',
//       maxWidth: '280px',
//     },
//   },
//   pathLine: {
//     position: 'absolute',
//     top: '40px',
//     left: '8%',
//     right: '8%',
//     height: '3px',
//     background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
//     borderRadius: '2px',
//     zIndex: 1,
//     '@media (max-width: 1024px)': {
//       display: 'none',
//     },
//   },
//   step: {
//     position: 'relative',
//     zIndex: 2,
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
//     textAlign: 'center',
//   },
//   stepNumber: {
//     width: '80px',
//     height: '80px',
//     borderRadius: '50%',
//     background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'center',
//     marginBottom: '16px',
//     color: 'white',
//     fontSize: '1.8rem !important',
//     fontWeight: '900 !important',
//     boxShadow: '0 12px 30px rgba(42, 43, 106, 0.3), 0 6px 15px rgba(42, 43, 106, 0.2)',
//     border: '3px solid white',
//     position: 'relative',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'scale(1.1)',
//       boxShadow: '0 16px 40px rgba(42, 43, 106, 0.4)',
//     },
//     '@media (max-width: 1200px)': {
//       width: '75px',
//       height: '75px',
//       fontSize: '1.7rem !important',
//       marginBottom: '14px',
//     },
//     '@media (max-width: 960px)': {
//       width: '70px',
//       height: '70px',
//       fontSize: '1.6rem !important',
//       marginBottom: '12px',
//     },
//     // Enhanced mobile touch targets
//     '@media (max-width: 600px)': {
//       width: '72px',
//       height: '72px',
//       fontSize: '1.5rem !important',
//       marginBottom: '12px',
//       border: '2px solid white',
//       // Improved touch interaction
//       '&:active': {
//         transform: 'scale(0.95)',
//       },
//     },
//     '@media (max-width: 480px)': {
//       width: '68px',
//       height: '68px',
//       fontSize: '1.4rem !important',
//       marginBottom: '12px',
//     },
//     '@media (max-width: 375px)': {
//       width: '64px',
//       height: '64px',
//       fontSize: '1.3rem !important',
//       marginBottom: '10px',
//     },
//   },
//   stepContent: {
//     background: 'rgba(255, 255, 255, 0.9)',
//     borderRadius: '16px',
//     padding: '20px 16px',
//     height: '180px',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
//     border: '1px solid rgba(42, 43, 106, 0.08)',
//     backdropFilter: 'blur(10px)',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       boxShadow: '0 12px 35px rgba(42, 43, 106, 0.15)',
//     },
//     '@media (max-width: 1200px)': {
//       height: '170px',
//       padding: '18px 14px',
//       borderRadius: '14px',
//     },
//     '@media (max-width: 960px)': {
//       height: '160px',
//       padding: '16px 12px',
//       borderRadius: '12px',
//     },
//     // Optimized mobile content containers
//     '@media (max-width: 600px)': {
//       height: 'auto',
//       minHeight: '140px',
//       padding: '16px 12px',
//       borderRadius: '12px',
//       // Better mobile interaction
//       '&:active': {
//         transform: 'translateY(-2px)',
//       },
//     },
//     '@media (max-width: 480px)': {
//       minHeight: '130px',
//       padding: '14px 12px',
//       borderRadius: '10px',
//     },
//     '@media (max-width: 375px)': {
//       minHeight: '120px',
//       padding: '12px 10px',
//       borderRadius: '8px',
//     },
//   },
//   stepTitle: {
//     fontSize: '1.1rem !important',
//     fontWeight: '700 !important',
//     marginBottom: '8px !important',
//     color: '#2A2B6A !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.05rem !important',
//       marginBottom: '7px !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       marginBottom: '6px !important',
//     },
//     // Enhanced mobile typography hierarchy
//     '@media (max-width: 600px)': {
//       fontSize: '1rem !important',
//       marginBottom: '8px !important',
//       lineHeight: '1.3 !important',
//       fontWeight: '600 !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.9375rem !important',
//       marginBottom: '6px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.875rem !important',
//       marginBottom: '5px !important',
//     },
//   },
//   stepDescription: {
//     fontSize: '0.85rem !important',
//     color: '#64748b !important',
//     lineHeight: '1.4 !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '0.82rem !important',
//       lineHeight: '1.35 !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '0.8rem !important',
//       lineHeight: '1.35 !important',
//     },
//     // Improved mobile readability
//     '@media (max-width: 600px)': {
//       fontSize: '0.8125rem !important',
//       lineHeight: '1.4 !important',
//       color: '#52525b !important', // Slightly darker for better contrast
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.75rem !important',
//       lineHeight: '1.45 !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.6875rem !important',
//       lineHeight: '1.5 !important',
//     },
//   },
//   decorativeElements: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     bottom: 0,
//     zIndex: 1,
//     pointerEvents: 'none', // Prevent interference with touch on mobile
//     '&::before': {
//       content: '""',
//       position: 'absolute',
//       width: '300px',
//       height: '300px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(42, 43, 106, 0.04) 0%, transparent 70%)',
//       top: '10%',
//       left: '5%',
//       animation: '$float 8s ease-in-out infinite',
//       '@media (max-width: 1200px)': {
//         width: '250px',
//         height: '250px',
//       },
//       '@media (max-width: 960px)': {
//         width: '200px',
//         height: '200px',
//       },
//       '@media (max-width: 600px)': {
//         width: '120px',
//         height: '120px',
//         top: '15%',
//         left: '10%',
//       },
//       '@media (max-width: 480px)': {
//         width: '80px',
//         height: '80px',
//       },
//       '@media (max-width: 375px)': {
//         width: '60px',
//         height: '60px',
//       },
//     },
//     '&::after': {
//       content: '""',
//       position: 'absolute',
//       width: '250px',
//       height: '250px',
//       borderRadius: '50%',
//       background: 'radial-gradient(circle, rgba(255, 198, 20, 0.06) 0%, transparent 70%)',
//       bottom: '10%',
//       right: '5%',
//       animation: '$float 10s ease-in-out infinite reverse',
//       '@media (max-width: 1200px)': {
//         width: '200px',
//         height: '200px',
//       },
//       '@media (max-width: 960px)': {
//         width: '180px',
//         height: '180px',
//       },
//       '@media (max-width: 600px)': {
//         width: '100px',
//         height: '100px',
//         bottom: '15%',
//         right: '10%',
//       },
//       '@media (max-width: 480px)': {
//         width: '60px',
//         height: '60px',
//       },
//       '@media (max-width: 375px)': {
//         width: '40px',
//         height: '40px',
//       },
//     },
//   },
//   '@keyframes float': {
//     '0%, 100%': { transform: 'translateY(0px)' },
//     '50%': { transform: 'translateY(-20px)' },
//     '@media (max-width: 600px)': {
//       '0%, 100%': { transform: 'translateY(0px)' },
//       '50%': { transform: 'translateY(-10px)' },
//     },
//   },
// });

// const StartupFundProcess = () => {
//   const classes = useStyles();

//   const steps = [
//     {
//       number: 1,
//       title: "Ideation",
//       description: "Think of a real-world tech problem worth solving. Conceptualize and validate product-market fit."
//     },
//     {
//       number: 2,
//       title: "Prototyping",
//       description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
//     },
//     {
//       number: 3,
//       title: "Mentorship",
//       description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
//     },
//     {
//       number: 4,
//       title: "Pitch Day",
//       description: "Present your startup to our in-house incubation panel for feedback and funding."
//     },
//     {
//       number: 5,
//       title: "Get Funded",
//       description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
//     },
//     {
//       number: 6,
//       title: "Scale Product",
//       description: "Grow your MVP into a market-ready product with expert guidance and go-to-market strategies."
//     }
//   ];

//   return (
//     <Box className={classes.section}>
//       <Box className={classes.decorativeElements} />
//       <Container maxWidth="lg" className={classes.container}>
//         <Box className={classes.header}>
//           <Typography variant="h2" className={classes.title}>
//             Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
//           </Typography>
//           <Typography variant="body1" className={classes.subtitle}>
//             Turn your tech idea into reality — right from campus.
//           </Typography>
//           <Box className={classes.fundingBadge}>
//             ₹1 LAKH FUNDING
//           </Box>
//         </Box>
        
//         <Box className={classes.pathwayContainer}>
//           <Box className={classes.pathLine} />
//           <Box className={classes.stepsGrid}>
//             {steps.map((step) => (
//               <Box key={step.number} className={classes.step}>
//                 <Box className={classes.stepNumber}>
//                   {step.number}
//                 </Box>
//                 <Box className={classes.stepContent}>
//                   <Typography className={classes.stepTitle}>{step.title}</Typography>
//                   <Typography className={classes.stepDescription}>{step.description}</Typography>
//                 </Box>
//               </Box>
//             ))}
//           </Box>
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default StartupFundProcess;
import React, { useState } from 'react';
import { Box, Typography, Container } from '@mui/material';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  section: {
    padding: '30px 20px',
    position: 'relative',
    overflow: 'hidden',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    // minHeight: '100vh',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      padding: '25px 20px',
    },
    '@media (max-width: 960px)': {
      padding: '20px 16px',
    },
    '@media (max-width: 600px)': {
      padding: '24px 16px',
      minHeight: 'auto',
    },
    '@media (max-width: 480px)': {
      padding: '20px 12px',
    },
    '@media (max-width: 375px)': {
      padding: '16px 12px',
    },
  },
  wrapper: {
    position: 'relative',
    zIndex: 2,
    textAlign: 'center',
    width: '100%',
    maxWidth: '1400px',
    margin: '0 auto',
    '@media (max-width: 600px)': {
      padding: '0 8px',
    },
    '@media (max-width: 480px)': {
      padding: '0 4px',
    },
  },
  header: {
    marginBottom: '40px',
    '@media (max-width: 1200px)': {
      marginBottom: '35px',
    },
    '@media (max-width: 960px)': {
      marginBottom: '30px',
    },
    '@media (max-width: 600px)': {
      marginBottom: '32px',
    },
    '@media (max-width: 480px)': {
      marginBottom: '24px',
    },
    '@media (max-width: 375px)': {
      marginBottom: '20px',
    },
  },
  title: {
    fontSize: '2.5rem !important',
    fontWeight: '800 !important',
    marginBottom: '12px !important',
    color: '#2A2B6A !important',
    textShadow: '0 4px 12px rgba(42, 43, 106, 0.2)',
    '@media (max-width: 1200px)': {
      fontSize: '2.3rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.1rem !important',
      marginBottom: '10px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1.875rem !important',
      marginBottom: '12px !important',
      lineHeight: '1.2 !important',
      letterSpacing: '-0.5px',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.625rem !important',
      marginBottom: '10px !important',
      lineHeight: '1.25 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.5rem !important',
      marginBottom: '8px !important',
      lineHeight: '1.3 !important',
    },
  },
  highlightText: {
    color: '#FFC614 !important',
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#64748b !important',
    marginBottom: '20px !important',
    maxWidth: '500px',
    margin: '0 auto 20px auto !important',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      marginBottom: '18px !important',
      maxWidth: '450px',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '16px !important',
      maxWidth: '400px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '16px !important',
      maxWidth: '100%',
      lineHeight: '1.5 !important',
      padding: '0 8px',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.875rem !important',
      marginBottom: '14px !important',
      lineHeight: '1.6 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.8125rem !important',
      marginBottom: '12px !important',
    },
  },
  fundingBadge: {
    background: 'linear-gradient(135deg, #2A2B6A 0%, #1e1f4f 100%)',
    color: 'white !important',
    padding: '8px 20px !important',
    borderRadius: '20px !important',
    fontSize: '0.9rem !important',
    fontWeight: '700 !important',
    display: 'inline-block !important',
    textTransform: 'uppercase',
    letterSpacing: '1px',
    boxShadow: '0 6px 20px rgba(42, 43, 106, 0.25)',
    '@media (max-width: 1200px)': {
      padding: '7px 18px !important',
      fontSize: '0.85rem !important',
    },
    '@media (max-width: 960px)': {
      padding: '6px 16px !important',
      fontSize: '0.8rem !important',
      borderRadius: '18px !important',
    },
    '@media (max-width: 600px)': {
      padding: '8px 16px !important',
      fontSize: '0.8125rem !important',
      borderRadius: '16px !important',
      letterSpacing: '0.5px',
      fontWeight: '600 !important',
    },
    '@media (max-width: 480px)': {
      padding: '6px 14px !important',
      fontSize: '0.75rem !important',
      borderRadius: '14px !important',
    },
    '@media (max-width: 375px)': {
      padding: '5px 12px !important',
      fontSize: '0.6875rem !important',
      borderRadius: '12px !important',
    },
  },
  pathwayContainer: {
    position: 'relative',
    width: '100%',
    '@media (max-width: 600px)': {
      padding: '0',
    },
  },
  stepsGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(6, 1fr)',
    gap: '40px',
    position: 'relative',
    width: '100%',
    '@media (max-width: 1024px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '35px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(3, 1fr)',
      gap: '30px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '25px',
      padding: '0 4px',
    },
    '@media (max-width: 480px)': {
      gridTemplateColumns: '1fr',
      gap: '25px',
      maxWidth: '380px',
      margin: '0 auto',
    },
    '@media (max-width: 375px)': {
      gap: '20px',
      maxWidth: '320px',
    },
  },
  pathLine: {
    position: 'absolute',
    top: '40px',
    left: '8%',
    right: '8%',
    height: '3px',
    background: 'linear-gradient(90deg, #2A2B6A 0%, #FFC614 50%, #2A2B6A 100%)',
    borderRadius: '2px',
    zIndex: 1,
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: '-100%',
      width: '100%',
      height: '100%',
      background: 'linear-gradient(90deg, transparent 0%, #FFFFFF 50%, transparent 100%)',
      animation: '$shimmer 2s linear infinite',
      opacity: 0.9,
    },
    '@media (max-width: 1024px)': {
      display: 'none',
    },
  },
  step: {
    position: 'relative',
    zIndex: 2,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    textAlign: 'center',
  },
  stepNumber: {
    width: '80px',
    height: '80px',
    borderRadius: '50px',
    background: 'linear-gradient(135deg, #2A2B6A 0%, #3b4dbf 100%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '16px',
    color: 'white',
    fontSize: '1.8rem !important',
    fontWeight: '900 !important',
    boxShadow: '0 12px 30px rgba(42, 43, 106, 0.3), 0 6px 15px rgba(42, 43, 106, 0.2)',
    border: '3px solid white',
    position: 'relative',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1), color 0.4s cubic-bezier(0.4, 0, 0.2, 1), background 0.4s cubic-bezier(0.4, 0, 0.2, 1), border-color 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    
    '&::after': {
      content: '""',
      position: 'absolute',
      right: '-12px',  
      top: '50%',
      transform: 'translateY(-50%)',
      width: 0,
      height: 0,
      borderLeft: '12px solid #fff',
      borderTop: '8px solid transparent',
      borderBottom: '8px solid transparent',
      filter: 'drop-shadow(2px 2px 4px rgba(42, 43, 106, 0.2))',
      transition: 'all 0.3s ease',
    },

    '@media (max-width: 1200px)': {
      width: '75px',
      height: '75px',
      fontSize: '1.7rem !important',
      marginBottom: '14px',
      borderRadius: '47px',
      
      '&::after': {
        right: '-11px',
        borderLeft: '11px solid #fff',
        borderTop: '7px solid transparent',
        borderBottom: '7px solid transparent',
      },
    },

    '@media (max-width: 960px)': {
      width: '70px',
      height: '70px',
      fontSize: '1.6rem !important',
      marginBottom: '12px',
      borderRadius: '44px',
      
      '&::after': {
        right: '-10px',
        borderLeft: '10px solid #fff',
        borderTop: '6px solid transparent',
        borderBottom: '6px solid transparent',
      },
    },

    '@media (max-width: 600px)': {
      width: '66px',
      height: '66px',
      fontSize: '1.4rem !important',
      marginBottom: '12px',
      border: '2px solid white',
      borderRadius: '42px',
      
      '&:active': {
        transform: 'scale(0.95)',
      },
      
      '&::after': {
        right: '-9px',
        borderLeft: '9px solid #fff',
        borderTop: '5px solid transparent',
        borderBottom: '5px solid transparent',
      },
    },

    '@media (max-width: 480px)': {
      width: '62px',
      height: '62px',
      fontSize: '1.3rem !important',
      marginBottom: '10px',
      borderRadius: '40px',
      
      '&::after': {
        right: '-8px',
        borderLeft: '8px solid #fff',
        borderTop: '4px solid transparent',
        borderBottom: '4px solid transparent',
      },
    },

    '@media (max-width: 375px)': {
      width: '58px',
      height: '58px',
      fontSize: '1.2rem !important',
      marginBottom: '8px',
      borderRadius: '38px',
      
      '&::after': {
        right: '-7px',
        borderLeft: '7px solid #fff',
        borderTop: '4px solid transparent',
        borderBottom: '4px solid transparent',
      },
    },

    '@media (max-width: 320px)': {
      width: '54px',
      height: '54px',
      fontSize: '1.1rem !important',
      marginBottom: '6px',
      borderRadius: '36px',
      
      '&::after': {
        right: '-6px',
        borderLeft: '6px solid #fff',
        borderTop: '3px solid transparent',
        borderBottom: '3px solid transparent',
      },
    },
  },
  stepNumberHovered: {
    transform: 'scale(1.05)',
    boxShadow: '0 20px 50px rgba(42, 43, 106, 0.25)',
    color: '#2A2B6A',
    background: 'white',
    border: '3px solid #2A2B6A',
    '&::after': {
      right: 'auto',
      bottom: '-20px',
      top: 'auto',
      left: '50%',
      transform: 'translateX(-50%)',
      borderLeft: '8px solid transparent',
      borderRight: '8px solid transparent',
      borderTop: '12px solid #2A2B6A',
      
      '@media (max-width: 1200px)': {
        bottom: '-11px',
        borderLeft: '7px solid transparent',
        borderRight: '7px solid transparent',
        borderTop: '11px solid #2A2B6A',
      },
      
      '@media (max-width: 960px)': {
        bottom: '-10px',
        borderLeft: '6px solid transparent',
        borderRight: '6px solid transparent',
        borderTop: '10px solid #2A2B6A',
      },
      
      '@media (max-width: 600px)': {
        bottom: '-9px',
        borderLeft: '5px solid transparent',
        borderRight: '5px solid transparent',
        borderTop: '9px solid #2A2B6A',
      },
      
      '@media (max-width: 480px)': {
        bottom: '-8px',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '8px solid #2A2B6A',
      },
      
      '@media (max-width: 375px)': {
        bottom: '-7px',
        borderLeft: '4px solid transparent',
        borderRight: '4px solid transparent',
        borderTop: '7px solid #2A2B6A',
      },
      
      '@media (max-width: 320px)': {
        bottom: '-6px',
        borderLeft: '3px solid transparent',
        borderRight: '3px solid transparent',
        borderTop: '6px solid #2A2B6A',
      },
    },
  },
  stepContent: {
    background: 'rgba(255, 255, 255, 0.9)',
    borderRadius: '16px',
    padding: '24px 20px',
    height: '200px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    boxShadow: '0 8px 25px rgba(42, 43, 106, 0.1)',
    border: '1px solid rgba(42, 43, 106, 0.08)',
    backdropFilter: 'blur(10px)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    cursor: 'pointer',
    
    '@media (max-width: 1200px)': {
      height: '190px',
      padding: '22px 18px',
      borderRadius: '14px',
    },
    '@media (max-width: 960px)': {
      height: '180px',
      padding: '20px 16px',
      borderRadius: '12px',
    },
    '@media (max-width: 600px)': {
      height: 'auto',
      minHeight: '160px',
      padding: '20px 16px',
      borderRadius: '12px',
      '&:active': {
        transform: 'translateY(-2px)',
      },
    },
    '@media (max-width: 480px)': {
      minHeight: '150px',
      padding: '18px 16px',
      borderRadius: '10px',
    },
    '@media (max-width: 375px)': {
      minHeight: '140px',
      padding: '16px 14px',
      borderRadius: '8px',
    },
  },
  stepContentHovered: {
    transform: 'translateY(-6px)',
    boxShadow: '0 16px 45px rgba(42, 43, 106, 0.12)',
    border: '3px solid #2A2B6A',
  },
  stepTitle: {
    fontSize: '1.1rem !important',
    fontWeight: '700 !important',
    marginBottom: '8px !important',
    color: '#2A2B6A !important',
    // whiteSpace: 'nowrap',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    '@media (max-width: 1200px)': {
      fontSize: '1.05rem !important',
      marginBottom: '7px !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      marginBottom: '8px !important',
      lineHeight: '1.3 !important',
      fontWeight: '600 !important',
      whiteSpace: 'normal',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.9375rem !important',
      marginBottom: '6px !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.875rem !important',
      marginBottom: '5px !important',
    },
  },
  stepDescription: {
    fontSize: '0.85rem !important',
    color: '#64748b !important',
    lineHeight: '1.4 !important',
    display: '-webkit-box',
    // WebkitLineClamp: 3,
    // WebkitBoxOrient: 'vertical',
    // overflow: 'hidden',
    // textOverflow: 'ellipsis',
    '@media (max-width: 1200px)': {
      fontSize: '0.82rem !important',
      lineHeight: '1.35 !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '0.8rem !important',
      lineHeight: '1.35 !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.8125rem !important',
      lineHeight: '1.4 !important',
      color: '#52525b !important',
      WebkitLineClamp: 3,
    },
    '@media (max-width: 480px)': {
      fontSize: '0.75rem !important',
      lineHeight: '1.45 !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.6875rem !important',
      lineHeight: '1.5 !important',
    },
  },
  decorativeElements: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    pointerEvents: 'none',
    '&::before': {
      content: '""',
      position: 'absolute',
      width: '300px',
      height: '300px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(42, 43, 106, 0.04) 0%, transparent 70%)',
      top: '10%',
      left: '5%',
      animation: '$float 8s ease-in-out infinite',
      '@media (max-width: 1200px)': {
        width: '250px',
        height: '250px',
      },
      '@media (max-width: 960px)': {
        width: '200px',
        height: '200px',
      },
      '@media (max-width: 600px)': {
        width: '120px',
        height: '120px',
        top: '15%',
        left: '10%',
      },
      '@media (max-width: 480px)': {
        width: '80px',
        height: '80px',
      },
      '@media (max-width: 375px)': {
        width: '60px',
        height: '60px',
      },
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '250px',
      height: '250px',
      borderRadius: '50%',
      background: 'radial-gradient(circle, rgba(255, 198, 20, 0.06) 0%, transparent 70%)',
      bottom: '10%',
      right: '5%',
      animation: '$float 10s ease-in-out infinite reverse',
      '@media (max-width: 1200px)': {
        width: '200px',
        height: '200px',
      },
      '@media (max-width: 960px)': {
        width: '180px',
        height: '180px',
      },
      '@media (max-width: 600px)': {
        width: '100px',
        height: '100px',
        bottom: '15%',
        right: '10%',
      },
      '@media (max-width: 480px)': {
        width: '60px',
        height: '60px',
      },
      '@media (max-width: 375px)': {
        width: '40px',
        height: '40px',
      },
    },
  },
  '@keyframes shimmer': {
    '0%': { left: '-100%' },
    '100%': { left: '100%' },
  },
  '@keyframes float': {
    '0%, 100%': { transform: 'translateY(0px)' },
    '50%': { transform: 'translateY(-20px)' },
    '@media (max-width: 600px)': {
      '0%, 100%': { transform: 'translateY(0px)' },
      '50%': { transform: 'translateY(-10px)' },
    },
  },
});

const StartupFundProcess = () => {
  const classes = useStyles();
  const [hoveredStep, setHoveredStep] = useState(null);

  const steps = [
    {
      number: 1,
      title: "Ideation",
      description: "Think of a real-world tech problem worth solving. Conceptualize and validate product-market fit."
    },
    {
      number: 2,
      title: "Prototyping",
      description: "Design and build your MVP using Gigaversity's labs, tools, and mentor guidance."
    },
    {
      number: 3,
      title: "Mentorship",
      description: "Get 1:1 sessions with startup founders, tech leaders, and VCs to refine your product."
    },
    {
      number: 4,
      title: "Pitch Day",
      description: "Present your startup to our in-house incubation panel for feedback and funding."
    },
    {
      number: 5,
      title: "Get Funded",
      description: "Receive up to ₹1 Lakh to build, scale, and launch your product from our campus."
    },
    {
      number: 6,
      title: "Scale Product",
      description: "Grow your MVP into a market-ready product with expert guidance and go-to-market strategies."
    }
  ];

  const handleStepHover = (stepNumber) => {
    setHoveredStep(stepNumber);
  };

  const handleStepLeave = () => {
    setHoveredStep(null);
  };

  return (
    <Box className={classes.section} id="StartupFundProcess" >
      <Box className={classes.decorativeElements} />
      <Box className={classes.wrapper}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Get Access to the <span className={classes.highlightText}>₹1 Lakh Startup</span> Fund
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Turn your tech idea into reality — right from campus.
          </Typography>
          <Box className={classes.fundingBadge}>
            ₹1 LAKH FUNDING
          </Box>
        </Box>
        
        <Box className={classes.pathwayContainer}>
          <Box className={classes.pathLine} />
          <Box className={classes.stepsGrid}>
            {steps.map((step) => (
              <Box 
                key={step.number} 
                className={classes.step}
                onMouseEnter={() => handleStepHover(step.number)}
                onMouseLeave={handleStepLeave}
              >
                <Box 
                  className={`${classes.stepNumber} ${hoveredStep === step.number ? classes.stepNumberHovered : ''}`}
                >
                  {step.number}
                </Box>
                <Box 
                  className={`${classes.stepContent} ${hoveredStep === step.number ? classes.stepContentHovered : ''}`}
                >
                  <Typography className={classes.stepTitle}>{step.title}</Typography>
                  <Typography className={classes.stepDescription}>{step.description}</Typography>
                </Box>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default StartupFundProcess;