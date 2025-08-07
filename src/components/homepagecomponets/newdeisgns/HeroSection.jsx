// import React, { useState } from 'react';
// import { Box, Typography, Button, Container, Link } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import Heroguy from '../../../assets/heroguy3.png'; 
// import { ReactComponent as Stack } from '../../../assets/stack.svg';
// import { ReactComponent as Tick } from '../../../assets/tick.svg';
// import { ReactComponent as Message } from '../../../assets/message.svg';
// import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// const useStyles = makeStyles({
//   heroSection: {
//     backgroundColor: '#f8f9fa',
//     display: 'flex',
//     alignItems: 'center',
//     padding: '20px 0',
//     position: 'relative',
//     overflow: 'hidden',
//     '@media (max-width: 600px)': {
//       padding: '16px 0',
//     },
//     '@media (max-width: 480px)': {
//       padding: '12px 0',
//     }
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//     '@media (max-width: 1200px)': {
//       padding: '0 16px',
//     },
//     '@media (max-width: 600px)': {
//       padding: '0 12px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '0 8px',
//     }
//   },
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '96px',
//     '@media (max-width: 1200px)': {
//       gap: '64px',
//     },
//     '@media (max-width: 960px)': {
//       gap: '48px',
//     },
//     '@media (max-width: 780px)': {
//       flexDirection: 'column',
//       gap: '0px',
//     },
//     '@media (max-width: 600px)': {
//       flexDirection: 'column',
//       gap: '0px',
//     }
//   },
//   leftBox: {
//     flex: 1,
//     paddingRight: '40px',
//     zIndex: 2,
//     '@media (max-width: 1200px)': {
//       paddingRight: '24px',
//     },
//     '@media (max-width: 960px)': {
//       paddingRight: '16px',
//     },
//     '@media (max-width: 780px)': {
//       paddingRight: 0,
//       textAlign: 'center',
//       width: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//     '@media (max-width: 600px)': {
//       paddingRight: 0,
//       textAlign: 'center',
//       width: '100%',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     }
//   },
//   mainTitle: {
//     fontSize: '3.5rem !important', // base
//     fontWeight: 'bold !important',
//     color: '#292B6B',
//     lineHeight: '1.1 !important',
//     marginBottom: '20px !important',
//     fontFamily: 'Montserrat !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '3rem !important', // was 4rem, now 3rem
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.5rem !important', // was 3.5rem, now 2.5rem
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '2rem !important', // was 2.8rem, now 2rem
//       marginBottom: '16px !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '1.6rem !important', // was 2.4rem, now 1.6rem
//       marginBottom: '12px !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '1.3rem !important', // was 2rem, now 1.3rem
//       lineHeight: '1.2 !important',
//     }
//   },
//   yellowUnderline: {
//     width: '580px',
//     height: '8px',
//     backgroundColor: '#FFC614',
//     borderRadius: '4px',
//     marginBottom: '30px',
//     '@media (max-width: 1200px)': {
//       width: '480px',
//     },
//     '@media (max-width: 960px)': {
//       width: '400px',
//     },
//     '@media (max-width: 900px)': {
//       margin: '0 auto 30px auto',
//     },
//     '@media (max-width: 600px)': {
//       width: '300px',
//       height: '6px',
//       marginBottom: '20px',
//     },
//     '@media (max-width: 480px)': {
//       width: '250px',
//       marginBottom: '16px',
//     },
//     '@media (max-width: 375px)': {
//       width: '200px',
//       height: '4px',
//     }
//   },
//   subtitle: {
//     fontSize: '1.2rem !important',
//     color: '#000 !important',
//     lineHeight: '1.6 !important',
//     marginBottom: '20px !important',
//     maxWidth: '480px !important',
//     fontFamily: 'Montserrat !important',
//     '@media (max-width: 1200px)': {
//       fontSize: '1.1rem !important',
//       maxWidth: '420px !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       maxWidth: '380px !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//       maxWidth: '320px !important',
//       marginBottom: '16px !important',
//       margin: '0 auto 16px auto !important',
//     },
//     '@media (max-width: 480px)': {
//       fontSize: '0.9rem !important',
//       maxWidth: '280px !important',
//       marginBottom: '12px !important',
//       margin: '0 auto 12px auto !important',
//     },
//     '@media (max-width: 375px)': {
//       fontSize: '0.85rem !important',
//       maxWidth: '250px !important',
//       margin: '0 auto 12px auto !important',
//     }
//   },
//   applyButton: {
//     backgroundColor: '#292B6B !important',
//     color: 'white !important',
//     padding: '15px 35px !important',
//     fontSize: '1.1rem !important',
//     fontWeight: 'bold !important',
//     textTransform: 'none !important',
//     borderRadius: '8px !important',
//     boxShadow: 'none !important',
//     transition: 'all 0.3s ease !important',
//     '&:hover': {
//       backgroundColor: '#1a1b43 !important', // match Navbar.jsx
//       boxShadow: '0 4px 8px rgba(0,0,0,0.2) !important',
//       transform: 'translateY(-2px)'
//     },
//     '@media (max-width: 1200px)': {
//       padding: '14px 32px !important',
//       fontSize: '1.05rem !important',
//     },
//     '@media (max-width: 960px)': {
//       padding: '12px 28px !important',
//       fontSize: '1rem !important',
//     },
//     '@media (max-width: 600px)': {
//       padding: '12px 24px !important',
//       fontSize: '0.95rem !important',
//     },
//     '@media (max-width: 480px)': {
//       padding: '10px 20px !important',
//       fontSize: '0.9rem !important',
//     },
//     '@media (max-width: 375px)': {
//       padding: '8px 16px !important',
//       fontSize: '0.85rem !important',
//     }
//   },
//   rightBox: {
//     flex: 1,
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '620px',
//     '@media (max-width: 1200px)': {
//       height: '560px',
//     },
//     '@media (max-width: 960px)': {
//       height: '500px',
//     },
//     '@media (max-width: 780px)': {
//       display: 'none',
//     },
//     '@media (max-width: 600px)': {
//       display: 'none',
//     },
//     '@media (max-width: 375px)': {
//       display: 'none',
//     }
//   },
//   yellowCircle: {
//     width: '450px',
//     height: '450px',
//     backgroundColor: '#FFC614',
//     borderRadius: '50%',
//     position: 'absolute',
//     zIndex: 1,
//     '@media (max-width: 1200px)': {
//       width: '400px',
//       height: '400px',
//     },
//     '@media (max-width: 960px)': {
//       width: '360px',
//       height: '360px',
//     },
//     '@media (max-width: 900px)': {
//       width: '320px',
//       height: '320px',
//     },
//     '@media (max-width: 600px)': {
//       width: '280px',
//       height: '280px',
//     },
//     '@media (max-width: 480px)': {
//       width: '240px',
//       height: '240px',
//     },
//     '@media (max-width: 375px)': {
//       width: '220px',
//       height: '220px',
//     }
//   },
//   heroImage: {
//     width: '350px',
//     height: 'auto',
//     zIndex: 2,
//     position: 'relative',
//     bottom: '67px',
//     '@media (max-width: 1200px)': {
//       width: '320px',
//       bottom: '60px',
//     },
//     '@media (max-width: 960px)': {
//       width: '290px',
//       bottom: '55px',
//     },
//     '@media (max-width: 900px)': {
//       width: '260px',
//       bottom: '50px',
//     },
//     '@media (max-width: 600px)': {
//       width: '230px',
//       bottom: '45px',
//     },
//     '@media (max-width: 480px)': {
//       width: '200px',
//       bottom: '40px',
//     },
//     '@media (max-width: 375px)': {
//       width: '180px',
//       bottom: '35px',
//     }
//   },
//   floatingIcon: {
//     position: 'absolute',
//     zIndex: 3,
//     borderRadius: '12px',
//     padding: '12px',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'scale(1.1) rotate(5deg)',
//     },
//     '@media (max-width: 600px)': {
//       padding: '8px',
//     },
//     '@media (max-width: 480px)': {
//       padding: '6px',
//     }
//   },
//   icon1: {
//     top: '98px',
//     right: '88px',
//     width: '50px',
//     height: '50px',
//     '@media (max-width: 1200px)': {
//       top: '90px',
//       right: '75px',
//       width: '45px',
//       height: '45px',
//     },
//     '@media (max-width: 960px)': {
//       top: '80px',
//       right: '65px',
//       width: '42px',
//       height: '42px',
//     },
//     '@media (max-width: 900px)': {
//       top: '70px',
//       right: '55px',
//       width: '40px',
//       height: '40px',
//     },
//     '@media (max-width: 600px)': {
//       top: '60px',
//       right: '45px',
//       width: '36px',
//       height: '36px',
//     },
//     '@media (max-width: 480px)': {
//       top: '50px',
//       right: '35px',
//       width: '32px',
//       height: '32px',
//     },
//     '@media (max-width: 375px)': {
//       top: '45px',
//       right: '30px',
//       width: '28px',
//       height: '28px',
//     }
//   },
//   icon2: {
//     bottom: '210px',
//     left: '7px',
//     width: '45px',
//     height: '45px',
//     '@media (max-width: 1200px)': {
//       bottom: '190px',
//       left: '15px',
//       width: '42px',
//       height: '42px',
//     },
//     '@media (max-width: 960px)': {
//       bottom: '170px',
//       left: '20px',
//       width: '40px',
//       height: '40px',
//     },
//     '@media (max-width: 900px)': {
//       bottom: '150px',
//       left: '25px',
//       width: '38px',
//       height: '38px',
//     },
//     '@media (max-width: 600px)': {
//       bottom: '130px',
//       left: '30px',
//       width: '34px',
//       height: '34px',
//     },
//     '@media (max-width: 480px)': {
//       bottom: '110px',
//       left: '25px',
//       width: '30px',
//       height: '30px',
//     },
//     '@media (max-width: 375px)': {
//       bottom: '100px',
//       left: '20px',
//       width: '26px',
//       height: '26px',
//     }
//   },
//   icon3: {
//     bottom: '170px',
//     right: '67px',
//     width: '40px',
//     height: '40px',
//     '@media (max-width: 1200px)': {
//       bottom: '155px',
//       right: '60px',
//       width: '38px',
//       height: '38px',
//     },
//     '@media (max-width: 960px)': {
//       bottom: '140px',
//       right: '50px',
//       width: '36px',
//       height: '36px',
//     },
//     '@media (max-width: 900px)': {
//       bottom: '125px',
//       right: '45px',
//       width: '34px',
//       height: '34px',
//     },
//     '@media (max-width: 600px)': {
//       bottom: '110px',
//       right: '40px',
//       width: '30px',
//       height: '30px',
//     },
//     '@media (max-width: 480px)': {
//       bottom: '95px',
//       right: '30px',
//       width: '28px',
//       height: '28px',
//     },
//     '@media (max-width: 375px)': {
//       bottom: '85px',
//       right: '25px',
//       width: '24px',
//       height: '24px',
//     }
//   },
//   iconSvg: {
//     // Additional icon styling if needed
//   },
//   curveIcon: {
//     width: '487px',
//     height: 'auto',
//     marginBottom: '30px',
//     '& svg': {
//       width: '100%',
//       height: 'auto',
//     },
//     '@media (max-width: 1200px)': {
//       width: '400px',
//     },
//     '@media (max-width: 960px)': {
//       width: '350px',
//     },
//     '@media (max-width: 780px)': {
//       width: '320px',
//       marginBottom: '25px',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     '@media (max-width: 600px)': {
//       width: '280px',
//       marginBottom: '20px',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     '@media (max-width: 480px)': {
//       width: '240px',
//       marginBottom: '16px',
//       display: 'flex',
//       justifyContent: 'center',
//     },
//     '@media (max-width: 375px)': {
//       width: '200px',
//       marginBottom: '12px',
//       display: 'flex',
//       justifyContent: 'center',
//     }
//   }
// });

// const HeroSection = () => {
//   const classes = useStyles();
//   const [popupOpen, setPopupOpen] = useState(false);

//   const handleApplyClick = (e) => {
//     e.preventDefault();
//     setPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setPopupOpen(false);
//   };

//   return (
//     <>
//       <Box className={classes.heroSection}>
//         <Container className={classes.container}>
//           <Box className={classes.flexRow}>
//             <Box className={classes.leftBox}>
//               <Typography variant="h1" className={classes.mainTitle}>
//                 India’s first  <br />
//                 product-based<br />
//                 learning Platform Gigaversity
//               </Typography>
//               <Box className={classes.curveIcon}>
//                 <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
//                   <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FFC614" strokeWidth="8" strokeLinecap="round"/>
//                 </svg>
//               </Box>
//               <Typography className={classes.subtitle}>
//                 Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.
//               </Typography>
//               <Button 
//                 className={classes.applyButton}
//                 onClick={handleApplyClick}
//                 title="Share your details to start your learning journey with Gigaversity"
//               >
//                 Apply Now
//               </Button>
//             </Box>
//             <Box className={classes.rightBox}>
//               <Box className={classes.yellowCircle}></Box>
//               <img 
//                 src={Heroguy} 
//                 alt="Gigaversity—India’s first product-based learning" 
//                 className={classes.heroImage}
//               />
//               {/* Floating Icons */}
//               <Box className={`${classes.floatingIcon} ${classes.icon1}`}>
//                 <Stack/>
//               </Box>
//               <Box className={`${classes.floatingIcon} ${classes.icon2}`}>
//                 <Tick/>
//               </Box>
//               <Box className={`${classes.floatingIcon} ${classes.icon3}`}>
//                 <Message/>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </Box>
//       <CentralizedPopupForms
//         open={popupOpen}
//         onClose={handlePopupClose}
//         variant="demo"
//       />
//     </>
//   );
// };

// export default HeroSection;


// import React, { useRef, useEffect, useState } from 'react';
// import { Box, Typography, Button, Container } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { gsap } from 'gsap';
// import { ScrollTrigger } from 'gsap/ScrollTrigger';
// import * as THREE from 'three';
// import { Canvas, useFrame } from '@react-three/fiber';

// // Import assets
// import Heroguy from '../../../assets/heroguy3.png';
// import { ReactComponent as Stack } from '../../../assets/stack.svg';
// import { ReactComponent as Tick } from '../../../assets/tick.svg';
// import { ReactComponent as Message } from '../../../assets/message.svg';
// import HeroImage1 from '../../../assets/banners2/Banner1.png';
// import HeroImage2 from '../../../assets/banners2/Banner2.png';
// import HeroImage3 from '../../../assets/banners2/Banner3.png';
// import HeroImage4 from '../../../assets/banners2/Banner4.png';
// import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// // Register GSAP plugin
// gsap.registerPlugin(ScrollTrigger);

// const useStyles = makeStyles({
//   scrollContainer: {
//     position: 'relative',
//     overflow: 'hidden',
//   },
//   section: {
//     position: 'relative',
//     height: '100vh',
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//     overflow: 'hidden',
//   },
//   heroSection: {
//     backgroundColor: '#f8f9fa',
//   },
//   container: {
//     maxWidth: '1200px',
//     margin: '0 auto',
//     padding: '0 20px',
//   },
//   flexRow: {
//     display: 'flex',
//     flexDirection: 'row',
//     alignItems: 'center',
//     gap: '96px',
//     '@media (max-width: 960px)': {
//       flexDirection: 'column',
//       gap: '0px',
//     },
//   },
//   leftBox: {
//     flex: 1,
//     paddingRight: '40px',
//     zIndex: 2,
//     '@media (max-width: 960px)': {
//       paddingRight: 0,
//       textAlign: 'center',
//       display: 'flex',
//       flexDirection: 'column',
//       alignItems: 'center',
//     },
//   },
//   mainTitle: {
//     fontSize: '3.5rem !important',
//     fontWeight: 'bold !important',
//     color: '#292B6B',
//     lineHeight: '1.1 !important',
//     marginBottom: '20px !important',
//     fontFamily: 'Montserrat !important',
//   },
//   yellowUnderline: {
//     width: '580px',
//     height: '8px',
//     backgroundColor: '#FFC614',
//     borderRadius: '4px',
//     marginBottom: '30px',
//   },
//   subtitle: {
//     fontSize: '1.2rem !important',
//     color: '#000 !important',
//     lineHeight: '1.6 !important',
//     marginBottom: '20px !important',
//     maxWidth: '480px !important',
//     fontFamily: 'Montserrat !important',
//   },
//   applyButton: {
//     backgroundColor: '#292B6B !important',
//     color: 'white !important',
//     padding: '15px 35px !important',
//     fontSize: '1.1rem !important',
//     fontWeight: 'bold !important',
//     borderRadius: '8px !important',
//     '&:hover': {
//       backgroundColor: '#1a1b43 !important',
//     },
//   },
//   rightBox: {
//     flex: 1,
//     position: 'relative',
//     display: 'flex',
//     justifyContent: 'center',
//     alignItems: 'center',
//     height: '620px',
//     '@media (max-width: 960px)': {
//       display: 'none',
//     },
//   },
//   yellowCircle: {
//     width: '450px',
//     height: '450px',
//     backgroundColor: '#FFC614',
//     borderRadius: '50%',
//     position: 'absolute',
//     zIndex: 1,
//   },
//   heroImage: {
//     width: '350px',
//     height: 'auto',
//     zIndex: 2,
//     position: 'relative',
//     bottom: '67px',
//   },
//   floatingIcon: {
//     position: 'absolute',
//     zIndex: 3,
//     borderRadius: '12px',
//     padding: '12px',
//     transition: 'all 0.3s ease',
//     '&:hover': {
//       transform: 'scale(1.1) rotate(5deg)',
//     },
//   },
//   bannerSection: {
//     backgroundColor: '#f8f9fa',
//   },
//   bannerImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//   },
//   contentSection: {
//     minHeight: '100vh',
//     padding: '40px 20px',
//     backgroundColor: '#f8f9fa',
//   },
//   threeCanvas: {
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '100vw',
//     height: '100vh',
//     pointerEvents: 'none',
//     zIndex: -1,
//   },
// });

// // Three.js Background Component
// const ParticlesBackground = () => {
//   const particlesRef = useRef();
  
//   useFrame(() => {
//     if (particlesRef.current) {
//       particlesRef.current.rotation.y += 0.001;
//     }
//   });

//   return (
//     <group ref={particlesRef}>
//       {[...Array(100)].map((_, i) => (
//         <mesh
//           key={i}
//           position={[
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10,
//             (Math.random() - 0.5) * 10
//           ]}
//           scale={Math.random() * 0.5 + 0.5}
//         >
//           <sphereGeometry args={[0.1, 8, 8]} />
//           <meshBasicMaterial color="#FFC614" />
//         </mesh>
//       ))}
//     </group>
//   );
// };

// const CombinedHeroBanner = () => {
//   const classes = useStyles();
//   const [popupOpen, setPopupOpen] = useState(false);
//   const heroRef = useRef(null);
//   const bannerRef = useRef(null);
//   const contentRef = useRef(null);

//   const heroImages = [
//     HeroImage1, HeroImage2, HeroImage3, HeroImage4
//   ];

//   const handleApplyClick = (e) => {
//     e.preventDefault();
//     setPopupOpen(true);
//   };

//   const handlePopupClose = () => {
//     setPopupOpen(false);
//   };

//   useEffect(() => {
//     // Set up scroll animations
//     const sections = gsap.utils.toArray([heroRef.current, bannerRef.current]);
    
//     sections.forEach((section, index) => {
//       ScrollTrigger.create({
//         trigger: section,
//         start: "top top",
//         end: "bottom top",
//         pin: true,
//         pinSpacing: false,
//         id: `section-${index}`
//       });
//     });

//     // After the last section, allow normal scrolling
//     ScrollTrigger.create({
//       trigger: contentRef.current,
//       start: "top top",
//       end: "bottom bottom",
//       onEnter: () => {
//         gsap.to(window, { scrollTo: contentRef.current, duration: 0.5 });
//       }
//     });

//     return () => {
//       ScrollTrigger.getAll().forEach(trigger => trigger.kill());
//     };
//   }, []);

//   return (
//     <>
//       <Canvas className={classes.threeCanvas}>
//         <ParticlesBackground />
//       </Canvas>

//       {/* Hero Section */}
//       <div ref={heroRef} className={`${classes.section} ${classes.heroSection}`}>
//         <Container className={classes.container}>
//           <Box className={classes.flexRow}>
//             <Box className={classes.leftBox}>
//               <Typography variant="h1" className={classes.mainTitle}>
//                 India's first <br />
//                 product-based<br />
//                 learning Platform Gigaversity
//               </Typography>
//               <Box className={classes.yellowUnderline} />
//               <Typography className={classes.subtitle}>
//                 Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.
//               </Typography>
//               <Button 
//                 className={classes.applyButton}
//                 onClick={handleApplyClick}
//               >
//                 Apply Now
//               </Button>
//             </Box>
//             <Box className={classes.rightBox}>
//               <Box className={classes.yellowCircle} />
//               <img 
//                 src={Heroguy} 
//                 alt="Gigaversity—India's first product-based learning" 
//                 className={classes.heroImage}
//               />
//               <Box className={`${classes.floatingIcon}`} style={{ top: '98px', right: '88px' }}>
//                 <Stack/>
//               </Box>
//               <Box className={`${classes.floatingIcon}`} style={{ bottom: '210px', left: '7px' }}>
//                 <Tick/>
//               </Box>
//               <Box className={`${classes.floatingIcon}`} style={{ bottom: '170px', right: '67px' }}>
//                 <Message/>
//               </Box>
//             </Box>
//           </Box>
//         </Container>
//       </div>

//       {/* Banner Section */}
//       <div ref={bannerRef} className={`${classes.section} ${classes.bannerSection}`}>
//         <Container style={{ height: '100%', display: 'flex', alignItems: 'center' }}>
//           <div style={{ width: '100%', height: '70vh', position: 'relative' }}>
//             {heroImages.map((image, index) => (
//               <img
//                 key={index}
//                 src={image}
//                 alt={`Banner ${index + 1}`}
//                 className={classes.bannerImage}
//                 style={{
//                   position: 'absolute',
//                   top: 0,
//                   left: 0,
//                   opacity: index === 0 ? 1 : 0,
//                   transition: 'opacity 1s ease-in-out',
//                   animation: `fade 8s infinite ${index * 2}s`
//                 }}
//               />
//             ))}
//           </div>
//         </Container>
//       </div>

//       {/* Normal content after scroll sections */}
//       <div ref={contentRef} className={classes.contentSection}>
//         <Container>
//           <Typography variant="h2" style={{ marginBottom: '40px', color: '#292B6B' }}>
//             Continue Your Journey With Us
//           </Typography>
//           <Typography>
//             This is where normal page content begins after the scroll-driven sections.
//           </Typography>
//         </Container>
//       </div>

//       <CentralizedPopupForms
//         open={popupOpen}
//         onClose={handlePopupClose}
//         variant="demo"
//       />

//       <style jsx global>{`
//         @keyframes fade {
//           0%, 100% { opacity: 0; }
//           20%, 80% { opacity: 1; }
//         }
//       `}</style>
//     </>
//   );
// };

// export default CombinedHeroBanner;


import React, { useState, useEffect } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade, Navigation } from 'swiper/modules';
import {
  Layers as LayersIcon,
  CheckCircle as CheckCircleIcon,
  Message as MessageIcon,
  Code as CodeIcon,
  School as SchoolIcon,
  TrendingUp as TrendingUpIcon,
  Lightbulb as LightbulbIcon,
  Rocket as RocketIcon
} from '@mui/icons-material';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/effect-fade';
import 'swiper/css/navigation';

import Heroguy from '../../../assets/heroguy3.png'; 
import CentralizedPopupForms from '../../common/popupforms/CentralizedPopupForms';

// Import banner images for right side
import HeroImage1 from '../../../assets/banners2/Banner5.png';
import HeroImage2 from '../../../assets/banners2/Banner6.png';
import HeroImage3 from '../../../assets/banners2/Banner7.png';
import HeroImage4 from '../../../assets/banners2/Banner8.png';

const useStyles = makeStyles({
  heroSection: {
    position: 'relative',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    overflow: 'hidden',
  },
  swiperContainer: {
    width: '100%',
    height: '100%',
    '& .swiper-button-next, & .swiper-button-prev': {
      color: '#292B6B !important',
      background: 'rgba(255, 255, 255, 0.9)',
      backdropFilter: 'blur(10px)',
      borderRadius: '50%',
      width: '50px !important',
      height: '50px !important',
      marginTop: '-25px',
      boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
      transition: 'all 0.3s ease',
      '&:after': {
        fontSize: '18px !important',
        fontWeight: 'bold',
      },
      '&:hover': {
        background: 'rgba(255, 198, 20, 0.9)',
        color: '#292B6B !important',
        transform: 'scale(1.1)',
        boxShadow: '0 6px 25px rgba(0, 0, 0, 0.15)',
      },
      '@media (max-width: 768px)': {
        width: '40px !important',
        height: '40px !important',
        marginTop: '-20px',
        '&:after': {
          fontSize: '14px !important',
        },
      },
    },
    '& .swiper-button-next': {
      right: '20px',
      '@media (max-width: 768px)': {
        right: '10px',
      },
    },
    '& .swiper-button-prev': {
      left: '20px',
      '@media (max-width: 768px)': {
        left: '10px',
      },
    },
  },
  slide: {
    position: 'relative',
    minHeight: '80vh',
    width: '100vw',
    display: 'flex',
    alignItems: 'center',
    background: 'linear-gradient(145deg, #ffffff 0%, #f1f3f4 100%)',
    overflow: 'hidden',
    '&::before': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        linear-gradient(90deg, rgba(41, 43, 107, 0.05) 1px, transparent 1px),
        linear-gradient(rgba(41, 43, 107, 0.05) 1px, transparent 1px)
      `,
      backgroundSize: '50px 50px',
      zIndex: 1,
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
      backgroundImage: `
        radial-gradient(circle at 10% 20%, rgba(255, 198, 20, 0.2) 2px, transparent 2px),
        radial-gradient(circle at 90% 10%, rgba(41, 43, 107, 0.15) 3px, transparent 3px),
        radial-gradient(circle at 30% 90%, rgba(255, 198, 20, 0.1) 1px, transparent 1px),
        radial-gradient(circle at 70% 30%, rgba(41, 43, 107, 0.08) 2px, transparent 2px),
        radial-gradient(circle at 85% 85%, rgba(255, 198, 20, 0.12) 1.5px, transparent 1.5px)
      `,
      backgroundSize: '200px 200px, 300px 300px, 150px 150px, 250px 250px, 180px 180px',
      animation: '$floatPattern 25s ease-in-out infinite',
      zIndex: 1,
    },
    '@media (max-width: 600px)': {
      minHeight: '90vh',
    },
  },
  container: {
    width: '100%',
    margin: '0 auto',
    padding: '40px 40px',
    position: 'relative',
    zIndex: 2,
    '@media (max-width: 1400px)': {
      padding: '0 30px',
    },
    '@media (max-width: 1200px)': {
      padding: '0 24px',
    },
    '@media (max-width: 600px)': {
      padding: '0 16px',
    },
  },
  flexRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    gap: '10px',
    width: '100%',
    '@media (max-width: 1200px)': {
      gap: '10px',
    },
    '@media (max-width: 1024px)': {
      gap: '0px',
    },
    '@media (max-width: 768px)': {
      gap: '0',
    },
    '@media (max-width: 600px)': {
      flexDirection: 'column',
      gap: '0px',
    },
  },
  leftBox: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    zIndex: 3,
    '@media (max-width: 600px)': {
      width: '100%',
      marginBottom: '30px',
    },
  },
  mainTitle: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#292B6B',
    lineHeight: '1.1 !important',
    marginBottom: '20px !important',
    fontFamily: 'Montserrat !important',
    opacity: 0,
    transform: 'translateY(30px)',
    animation: '$slideInUp 0.8s ease-out 0.2s forwards',
    minHeight: '150px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      fontSize: '3rem !important',
      minHeight: '130px',
    },
    '@media (max-width: 1024px)': {
      fontSize: '2.4rem !important',
      minHeight: '120px',
    },
    '@media (max-width: 768px)': {
      fontSize: '2.2rem !important',
      minHeight: '110px',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
      marginBottom: '16px !important',
      minHeight: '90px',
      textAlign: 'center',
    },
    '@media (max-width: 480px)': {
      fontSize: '1.6rem !important',
      lineHeight: '1.2 !important',
      minHeight: '80px',
    },
    '@media (max-width: 375px)': {
      fontSize: '1.4rem !important',
      minHeight: '70px',
    },
  },
  highlightText: {
    color: '#FFC614',
    position: 'relative',
    '&::after': {
      content: '""',
      position: 'absolute',
      bottom: '2px',
      left: 0,
      right: 0,
      height: '3px',
      background: '#FFC614',
      borderRadius: '2px',
    },
  },
  curveIcon: {
    width: '487px',
    height: 'auto',
    marginBottom: '30px',
    opacity: 0,
    animation: '$slideInLeft 0.8s ease-out 0.4s forwards',
    '& svg': {
      width: '100%',
      height: 'auto',
    },
    '& svg path': {
      strokeDasharray: '600',
      strokeDashoffset: '600',
      animation: '$drawCurve 1.5s ease-out 0.8s forwards',
    },
    '@media (max-width: 1024px)': {
      width: '450px',
    },
    '@media (max-width: 768px)': {
      width: '400px',
    },
    '@media (max-width: 600px)': {
      display: 'flex',
      justifyContent: 'center',
      width: '320px',
      marginBottom: '20px',
    },
    '@media (max-width: 480px)': {
      width: '280px',
    },
    '@media (max-width: 375px)': {
      width: '240px',
    },
  },
  subtitle: {
    fontSize: '1.2rem !important',
    color: '#000 !important',
    lineHeight: '1.6 !important',
    marginBottom: '30px !important',
    maxWidth: '480px !important',
    fontFamily: 'Montserrat !important',
    opacity: 0,
    animation: '$slideInUp 0.8s ease-out 0.4s forwards',
    minHeight: '120px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    '@media (max-width: 1024px)': {
      fontSize: '1.05rem !important',
      maxWidth: '450px !important',
      minHeight: '115px',
    },
    '@media (max-width: 768px)': {
      fontSize: '1rem !important',
      maxWidth: '420px !important',
      minHeight: '110px',
    },
    '@media (max-width: 600px)': {
      fontSize: '1rem !important',
      maxWidth: '350px !important',
      marginBottom: '25px !important',
      minHeight: '100px',
      margin: '0 auto 25px auto !important',
    },
    '@media (max-width: 480px)': {
      fontSize: '0.95rem !important',
      maxWidth: '320px !important',
      marginBottom: '20px !important',
      minHeight: '90px',
      margin: '0 auto 20px auto !important',
    },
    '@media (max-width: 375px)': {
      fontSize: '0.9rem !important',
      maxWidth: '280px !important',
      minHeight: '80px',
    },
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    width: '100%',
    minHeight: '80px',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      minHeight: '70px',
    },
    '@media (max-width: 600px)': {
      minHeight: '65px',
    },
    '@media (max-width: 480px)': {
      minHeight: '60px',
    },
    '@media (max-width: 375px)': {
      minHeight: '55px',
    },
  },
  applyButton: {
    backgroundColor: '#292B6B !important',
    color: 'white !important',
    padding: '15px 35px !important',
    fontSize: '1.1rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    borderRadius: '8px !important',
    boxShadow: 'none !important',
    transition: 'all 0.3s ease !important',
    opacity: 0,
    animation: '$slideInUp 0.8s ease-out 0.6s forwards',
    minWidth: '200px',
    minHeight: '54px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    position: 'relative',
    overflow: 'hidden',
    '&:hover': {
      backgroundColor: '#1a1b43 !important',
      boxShadow: '0 8px 25px rgba(41, 43, 107, 0.3) !important',
      transform: 'translateY(-3px)',
    },
    '&::after': {
      content: '""',
      position: 'absolute',
      width: '30px',
      height: '100%',
      background: 'rgba(255, 255, 255, 0.3)',
      transform: 'skewX(-30deg) translateX(-150px)',
      animation: '$shine 3s infinite',
    },
    '@media (max-width: 1024px)': {
      padding: '14px 32px !important',
      fontSize: '1.05rem !important',
      minWidth: '190px',
      minHeight: '52px',
    },
    '@media (max-width: 768px)': {
      padding: '13px 30px !important',
      fontSize: '1.02rem !important',
      minWidth: '180px',
      minHeight: '50px',
    },
    '@media (max-width: 600px)': {
      padding: '12px 24px !important',
      fontSize: '1rem !important',
      minWidth: '160px',
      minHeight: '46px',
    },
    '@media (max-width: 480px)': {
      padding: '11px 20px !important',
      fontSize: '0.95rem !important',
      minWidth: '140px',
      minHeight: '42px',
    },
    '@media (max-width: 375px)': {
      padding: '10px 18px !important',
      fontSize: '0.9rem !important',
      minWidth: '120px',
      minHeight: '40px',
    },
  },
  typingText: {
    position: 'relative',
    display: 'inline-block',
    '&::after': {
      content: '"|"',
      color: '#FFC614',
      fontWeight: 'normal',
      animation: '$blink 1s infinite',
      marginLeft: '2px',
    },
  },
  yellowBrackets: {
    color: '#FFC614',
  },
  rightBox: {
    flex: 1,
    position: 'relative',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    '@media (max-width: 600px)': {
      display: 'none',
    },
  },
  yellowCircle: {
    width: '450px',
    height: '450px',
    backgroundColor: '#FFC614',
    borderRadius: '50%',
    position: 'absolute',
    zIndex: 1,
    opacity: 0,
    transform: 'scale(0.8)',
    animation: '$scaleIn 1s ease-out 0.3s forwards',
    '@media (max-width: 1200px)': {
      width: '400px',
      height: '400px',
    },
    '@media (max-width: 1024px)': {
      width: '380px',
      height: '380px',
    },
    '@media (max-width: 768px)': {
      width: '360px',
      height: '360px',
    },
  },
  heroImage: {
    width: '350px',
    height: 'auto',
    zIndex: 2,
    position: 'relative',
    bottom: '67px',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$slideInUp 1s ease-out 0.5s forwards',
    '@media (max-width: 1200px)': {
      width: '320px',
      bottom: '60px',
    },
    '@media (max-width: 1024px)': {
      width: '300px',
      bottom: '58px',
    },
    '@media (max-width: 768px)': {
      width: '290px',
      bottom: '55px',
    },
  },
  bannerImage: {
    objectFit: 'contain',
    objectPosition: 'center',
    borderRadius: '20px',
    zIndex: 2,
    position: 'relative',
    opacity: 0,
    transform: 'translateY(20px)',
    animation: '$slideInUp 1s ease-out 0.5s forwards',
    boxShadow: '0 20px 60px rgba(0, 0, 0, 0.15)',
    transition: 'all 0.3s ease',
    '&:hover': {
      transform: 'scale(1.02)',
      boxShadow: '0 25px 70px rgba(0, 0, 0, 0.2)',
    },
  },
  bannerContainer: {
    width: '100%',
    height: '100%',
    maxWidth: '900px',
    maxHeight: '900px',
    position: 'relative',
    zIndex: 2,
    borderRadius: '20px',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '@media (max-width: 1200px)': {
      maxWidth: '800px',
      maxHeight: '800px',
    },
    '@media (max-width: 1024px)': {
      maxWidth: '750px',
      maxHeight: '750px',
    },
    '@media (max-width: 768px)': {
      maxWidth: '700px',
      maxHeight: '700px',
    },
  },
  floatingIcon: {
    position: 'absolute',
    zIndex: 3,
    borderRadius: '12px',
    padding: '12px',
    background: '#292B6B',
    backdropFilter: 'blur(10px)',
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.1)',
    transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
    opacity: 0,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    '&:hover': {
      transform: 'scale(1.15) rotate(8deg)',
      boxShadow: '0 12px 40px rgba(0, 0, 0, 0.15)',
    },
    '& .MuiSvgIcon-root': {
      color: '#ffffff',
    },
  },
  icon1: {
    top: '20px',
    right: '50px',
    width: '50px',
    height: '50px',
    animation: '$floatIn 1s ease-out 0.8s forwards, $float 3s ease-in-out 1.8s infinite',
    '@media (max-width: 1200px)': {
      top: '15px',
      right: '40px',
      width: '45px',
      height: '45px',
    },
  },
  icon2: {
    bottom: '380px',
    left: '20px',
    width: '45px',
    height: '45px',
    animation: '$floatIn 1s ease-out 1s forwards, $float 3s ease-in-out 2s infinite',
    '@media (max-width: 1200px)': {
      bottom: '360px',
      left: '15px',
      width: '42px',
      height: '42px',
    },
  },
  icon3: {
    bottom: '20px',
    right: '40px',
    width: '40px',
    height: '40px',
    animation: '$floatIn 1s ease-out 1.2s forwards, $float 3s ease-in-out 2.2s infinite',
    '@media (max-width: 1200px)': {
      bottom: '15px',
      right: '30px',
      width: '38px',
      height: '38px',
    },
  },
  icon4: {
    top: '10px',
    left: '100px',
    width: '42px',
    height: '42px',
    animation: '$floatIn 1s ease-out 1.4s forwards, $float 3s ease-in-out 2.4s infinite',
    '@media (max-width: 1200px)': {
      top: '10px',
      left: '90px',
      width: '40px',
      height: '40px',
    },
  },
  icon5: {
    top: '150px',
    right: '10px',
    width: '38px',
    height: '38px',
    animation: '$floatIn 1s ease-out 1.6s forwards, $float 3s ease-in-out 2.6s infinite',
    '@media (max-width: 1200px)': {
      top: '140px',
      right: '8px',
      width: '36px',
      height: '36px',
    },
  },
  icon6: {
    bottom: '250px',
    left: '5px',
    width: '44px',
    height: '44px',
    animation: '$floatIn 1s ease-out 1.8s forwards, $float 3s ease-in-out 2.8s infinite',
    '@media (max-width: 1200px)': {
      bottom: '230px',
      left: '5px',
      width: '42px',
      height: '42px',
    },
  },
  icon7: {
    bottom: '60px',
    left: '40px',
    width: '46px',
    height: '46px',
    animation: '$floatIn 1s ease-out 2s forwards, $float 3s ease-in-out 3s infinite',
    '@media (max-width: 1200px)': {
      bottom: '50px',
      left: '30px',
      width: '44px',
      height: '44px',
    },
  },
  icon8: {
    top: '300px',
    right: '25px',
    width: '40px',
    height: '40px',
    animation: '$floatIn 1s ease-out 2.2s forwards, $float 3s ease-in-out 3.2s infinite',
    '@media (max-width: 1200px)': {
      top: '280px',
      right: '20px',
      width: '38px',
      height: '38px',
    },
  },
  '@keyframes floatPattern': {
    '0%, 100%': {
      transform: 'translate(0, 0) scale(1)',
    },
    '25%': {
      transform: 'translate(10px, -15px) scale(1.05)',
    },
    '50%': {
      transform: 'translate(-5px, -25px) scale(0.95)',
    },
    '75%': {
      transform: 'translate(-15px, -10px) scale(1.02)',
    },
  },
  '@keyframes drawCurve': {
    from: {
      strokeDashoffset: '600',
    },
    to: {
      strokeDashoffset: '0',
    },
  },
  '@keyframes slideInUp': {
    from: {
      opacity: 0,
      transform: 'translateY(30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0)',
    },
  },
  '@keyframes slideInLeft': {
    from: {
      opacity: 0,
      transform: 'translateX(-30px)',
    },
    to: {
      opacity: 1,
      transform: 'translateX(0)',
    },
  },
  '@keyframes scaleIn': {
    from: {
      opacity: 0,
      transform: 'scale(0.8)',
    },
    to: {
      opacity: 1,
      transform: 'scale(1)',
    },
  },
  '@keyframes floatIn': {
    from: {
      opacity: 0,
      transform: 'translateY(20px) scale(0.8)',
    },
    to: {
      opacity: 1,
      transform: 'translateY(0) scale(1)',
    },
  },
  '@keyframes float': {
    '0%, 100%': {
      transform: 'translateY(0px)',
    },
    '50%': {
      transform: 'translateY(-10px)',
    },
  },
  '@keyframes blink': {
    '0%, 50%': {
      opacity: 1,
    },
    '51%, 100%': {
      opacity: 0,
    },
  },
  '@keyframes shine': {
    '0%': {
      transform: 'skewX(-30deg) translateX(-150px)',
    },
    '100%': {
      transform: 'skewX(-30deg) translateX(350px)',
    },
  },
});

const DynamicHeroCarousel = () => {
  const classes = useStyles();
  const [popupOpen, setPopupOpen] = useState(false);
  const [activeSlide, setActiveSlide] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleApplyClick = (e) => {
    e.preventDefault();
    const currentSlideData = slideContent[activeSlide];
    
    switch(currentSlideData.buttonText) {
      case "Apply Now":
        setPopupOpen(true);
        break;
      case "Build Your Free Resume Now":
        window.open('https://resume.gigaversity.in/', '_blank');
        break;
      case "Know more":
        const startupSection = document.getElementById('StartupFundProcess');
        if (startupSection) {
          startupSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      case "Schedule Your Campus Visit":
        setPopupOpen(true);
        break;
      case "Explore all Programs":
        const programsSection = document.getElementById('OtherPrograms');
        if (programsSection) {
          programsSection.scrollIntoView({ behavior: 'smooth' });
        }
        break;
      default:
        setPopupOpen(true);
    }
  };

  const getButtonTitle = (buttonText) => {
    switch(buttonText) {
      case "Apply Now":
        return "Share your details to start your learning journey with Gigaversity";
      case "Build Your Free Resume Now":
        return "Create your professional resume with our free resume builder";
      case "Know more":
        return "Learn more about our startup funding and innovation grants";
      case "Schedule Your Campus Visit":
        return "Book a visit to experience our tech ecosystem firsthand";
      case "Explore all Programs":
        return "Discover all our technology and career programs";
      default:
        return "Get started with Gigaversity";
    }
  };

  const handlePopupClose = () => {
    setPopupOpen(false);
  };

  const slideContent = [
    {
      title: "India's first product-based learning Platform",
      subtitle: "Develop a real-time product before graduation and get a chance to build an MVP with access to up to ₹1,00,000 in startup grants.",
      rightImage: null,
      isHero: true,
      buttonText: "Apply Now"
    },
    {
      title: "Write your First Career Chapter with Gigaversity",
      subtitle: "Increase your chances of shortlisting with project recommendations and ATS friendly Templates Build Your Free Resume Now",
      rightImage: HeroImage1,
      isHero: false,
      buttonText: "Build Your Free Resume Now"
    },
    {
      title: "Build Your Own Startup with Up to ₹1 Lakh Innovation Grant",
      subtitle: "From Idea to Prototype, get funding, mentorship, and resources to launch your startup idea.",
      rightImage: HeroImage2,
      isHero: false,
      buttonText: "Know more"
    },
    {
      title: "Experience the Learning in Tech Ecosystem like never before ",
      subtitle: "Explore live labs, coding pods, tech demos, and startup culture.",
      rightImage: HeroImage3,
      isHero: false,
      buttonText: "Schedule Your Campus Visit"
    },
    {
      title: "Turn Concept into Code, Code into Careers",
      subtitle: "Master full stack, data science, AI, and career-ready tech skills.",
      rightImage: HeroImage4,
      isHero: false,
      buttonText: "Explore all Programs"
    }
  ];

  // Typing effect
  useEffect(() => {
    if (slideContent[activeSlide]) {
      const targetText = slideContent[activeSlide].buttonText;
      setIsTyping(true);
      setDisplayedText('');
      
      // Wait for title animation to complete (1.0s) before starting typing
      const startDelay = setTimeout(() => {
        let currentIndex = 0;
        const typingInterval = setInterval(() => {
          if (currentIndex <= targetText.length) {
            setDisplayedText(targetText.slice(0, currentIndex));
            currentIndex++;
          } else {
            setIsTyping(false);
            clearInterval(typingInterval);
          }
        }, 100); // Slower typing speed
        
        return () => clearInterval(typingInterval);
      }, 1000);

      return () => clearTimeout(startDelay);
    }
  }, [activeSlide]);

  const renderTitle = (title, highlight) => {
    const parts = title.split(highlight);
    if (parts.length === 2) {
      return (
        <>
          {parts[0]}
          <span className={classes.highlightText}>{highlight}</span>
          {parts[1]}
        </>
      );
    }
    return title;
  };

  return (
    <>
      <Box className={classes.heroSection} id="hero-section">
        <Swiper
          className={classes.swiperContainer}
          modules={[Autoplay, EffectFade, Navigation]}
          spaceBetween={0}
          slidesPerView={1}
          effect="fade"
          fadeEffect={{
            crossFade: true
          }}
          navigation={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          loop={true}
          onSlideChange={(swiper) => setActiveSlide(swiper.realIndex)}
          speed={1000}
        >
          {slideContent.map((slide, index) => (
            <SwiperSlide key={index}>
              <Box className={classes.slide}>
                <Box className={classes.container}>
                  <Box className={classes.flexRow}>
                    <Box className={classes.leftBox}>
                      <Typography variant="h1" className={classes.mainTitle}>
                        {renderTitle(slide.title, slide.highlight)}
                      </Typography>
                      
                      <Box className={classes.curveIcon}>
                        <svg width="487" height="34" viewBox="0 0 487 34" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M4 30C73.6307 10.3798 266.914 -17.0885 483 30" stroke="#FFC614" strokeWidth="8" strokeLinecap="round"/>
                        </svg>
                      </Box>
                      
                      <Typography className={classes.subtitle}>
                        {slide.subtitle}
                      </Typography>
                      
                      <Box className={classes.buttonContainer}>
                        <Button 
                          className={classes.applyButton}
                          onClick={handleApplyClick}
                          title={getButtonTitle(slideContent[activeSlide].buttonText)}
                        >
                          <span className={classes.yellowBrackets}>{'{'}</span>
                          <span className={isTyping ? classes.typingText : ''}>
                            {displayedText}
                          </span>
                          <span className={classes.yellowBrackets}>{'}'}</span>
                        </Button>
                      </Box>
                    </Box>
                    
                    <Box className={classes.rightBox}>
                      {slide.isHero ? (
                        <>
                          <Box className={classes.yellowCircle}></Box>
                          <img 
                            src={Heroguy} 
                            alt={`Gigaversity - ${slide.title}`}
                            className={classes.heroImage}
                          />
                          
                          <Box className={`${classes.floatingIcon} ${classes.icon1}`}>
                            <LayersIcon fontSize="large" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon2}`}>
                            <CheckCircleIcon fontSize="large" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon3}`}>
                            <MessageIcon fontSize="medium" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon4}`}>
                            <CodeIcon fontSize="large" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon5}`}>
                            <SchoolIcon fontSize="medium" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon6}`}>
                            <TrendingUpIcon fontSize="large" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon7}`}>
                            <LightbulbIcon fontSize="large" />
                          </Box>
                          <Box className={`${classes.floatingIcon} ${classes.icon8}`}>
                            <RocketIcon fontSize="medium" />
                          </Box>
                        </>
                      ) : (
                        <Box className={classes.bannerContainer}>
                          <img 
                            src={slide.rightImage} 
                            alt={`Gigaversity - ${slide.title}`}
                            className={classes.bannerImage}
                          />
                        </Box>
                      )}
                    </Box>
                  </Box>
                </Box>
              </Box>
            </SwiperSlide>
          ))}
        </Swiper>
      </Box>
      
      <CentralizedPopupForms
        open={popupOpen}
        onClose={handlePopupClose}
        variant="demo"
      />
    </>
  );
};

export default DynamicHeroCarousel;