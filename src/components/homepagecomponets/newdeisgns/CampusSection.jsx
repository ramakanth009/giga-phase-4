// import React from 'react';
// import { Box, Typography, Container, Button } from '@mui/material';
// import { makeStyles } from '@mui/styles';
// import { useNavigate } from 'react-router-dom';

// // Import campus images
// import foundationHallImg from '../../../assets/mentor-room/Foundation-hall.png';
// import productRoomImg from '../../../assets/mentor-room/Product-room.jpg';
// import startupRoomImg from '../../../assets/mentor-room/Startup-room.png';
// import mentorRoomImg from '../../../assets/mentor-room/mentor-room .png';
// import caffeImg from '../../../assets/mentor-room/cafe.jpg';
// import sportsArenaImg from '../../../assets/mentor-room/sports-arena.jpg';

// const useStyles = makeStyles({
//   section: {
//     backgroundColor: '#f8f9fa',
//     padding: '20px 0',
//     minHeight: '100vh',
//     display: 'flex',
//     alignItems: 'center',
//     '@media (max-width: 960px)': {
//       padding: '20px 0',
//       minHeight: 'auto',
//     },
//   },
//   container: {
//     width: '100%',
//     display: 'flex',
//     flexDirection: 'column',
//     justifyContent: 'center',
//   },
//   header: {
//     textAlign: 'center',
//     marginBottom: '30px',
//     '@media (max-width: 960px)': {
//       marginBottom: '40px',
//     },
//   },
  
//   title: {
//     fontSize: '3.5rem !important',
//     fontWeight: 'bold !important',
//     color: '#2A2B6A !important',
//     marginBottom: '20px !important',
//     '& span': {
//       color: '#FFC614 !important',
//       // textShadow: '0 4px 24px rgba(255, 198, 20, 0.5)',
//     },
//     '@media (max-width: 1200px)': {
//       fontSize: '3rem !important',
//     },
//     '@media (max-width: 960px)': {
//       fontSize: '2.5rem !important',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '2rem !important',
//     },
//   },
//   subtitle: {
//     fontSize: '1.1rem !important',
//     color: '#6c757d !important',
//     maxWidth: '600px',
//     margin: '0 auto !important',
//     lineHeight: '1.6 !important',
//     fontWeight: '400 !important',
//     '@media (max-width: 960px)': {
//       fontSize: '1rem !important',
//       maxWidth: '90%',
//     },
//     '@media (max-width: 600px)': {
//       fontSize: '0.95rem !important',
//     },
//   },
//   campusGrid: {
//     display: 'grid',
//     gridTemplateColumns: 'repeat(3, 1fr)',
//     gap: '30px',
//     marginBottom: '50px',
//     '@media (max-width: 1200px)': {
//       gap: '25px',
//     },
//     '@media (max-width: 960px)': {
//       gridTemplateColumns: 'repeat(2, 1fr)',
//       gap: '20px',
//     },
//     '@media (max-width: 600px)': {
//       gridTemplateColumns: '1fr',
//       gap: '20px',
//     },
//   },
//   campusCard: {
//     backgroundColor: '#ffffff',
//     borderRadius: '12px',
//     overflow: 'hidden',
//     cursor: 'pointer',
//     transition: 'all 0.3s ease',
//     border: '1px solid #e9ecef',
//     boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
//     '&:hover': {
//       transform: 'translateY(-4px)',
//       boxShadow: '0 8px 25px rgba(0, 0, 0, 0.15)',
//       '& $cardImage': {
//         transform: 'scale(1.05)',
//       },
//     },
//   },
//   cardImageContainer: {
//     position: 'relative',
//     height: '200px',
//     overflow: 'hidden',
//     '@media (max-width: 600px)': {
//       height: '180px',
//     },
//   },
//   cardImage: {
//     width: '100%',
//     height: '100%',
//     objectFit: 'cover',
//     transition: 'transform 0.3s ease',
//   },
//   cardContent: {
//     padding: '24px',
//     '@media (max-width: 600px)': {
//       padding: '20px',
//     },
//   },
//   cardTitle: {
//     fontSize: '1.25rem !important',
//     fontWeight: '600 !important',
//     color: '#2c3e50 !important',
//     marginBottom: '12px !important',
//     lineHeight: '1.3 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '1.15rem !important',
//       marginBottom: '10px !important',
//     },
//   },
//   cardDescription: {
//     fontSize: '0.95rem !important',
//     color: '#6c757d !important',
//     lineHeight: '1.5 !important',
//     fontWeight: '400 !important',
//     '@media (max-width: 600px)': {
//       fontSize: '0.9rem !important',
//     },
//   },
//   ctaContainer: {
//     display: 'flex',
//     justifyContent: 'center',
//     // marginTop: '40px',
//     '@media (max-width: 960px)': {
//       // marginTop: '30px',
//     },
//   },
//   ctaButton: {
//     backgroundColor: '#FFC614 !important',
//     color: '#2c3e50 !important',
//     padding: '14px 32px !important',
//     borderRadius: '25px !important',
//     fontSize: '1.2rem !important',
//     fontWeight: 'bold !important',
//     textTransform: 'none !important',
//     boxShadow: '0 4px 12px rgba(255, 198, 20, 0.3) !important',
//     transition: 'all 0.3s ease !important',
//     border: 'none !important',
//     '&:hover': {
//       backgroundColor: '#e6b312 !important',
//       transform: 'translateY(-2px)',
//       boxShadow: '0 6px 16px rgba(255, 198, 20, 0.4) !important',
//     },
//     '@media (max-width: 600px)': {
//       padding: '12px 28px !important',
//       fontSize: '0.95rem !important',
//     },
//   },
// });

// const CampusSection = () => {
//   const classes = useStyles();
//   const navigate = useNavigate();

//   const handleCTAClick = () => {
//     navigate('/campus');
//   };

//   const campusAreas = [
//     {
//       title: "Foundation Hall",
//       description: "Dynamic collaborative learning space where students from all backgrounds unite for high-energy sessions and problem-solving.",
//       image: foundationHallImg,
//       altText: "Foundation Hall of Gigaversity"
//     },
//     {
//       title: "Product Chamber",
//       description: "Real tech products are built and executed collaboratively by teams in this dynamic, inspiring workspace.",
//       image: productRoomImg,
//       altText: "Product chamber of Gigaversity"
//     },
//     {
//       title: "Startup Studio",
//       description: "Fuel ideas with mentorship and founder guidance. Secure up to ₹1 lakh funding for tech startup ideas.",
//       image: startupRoomImg,
//       altText: "Startup Cabin of Gigaversity"
//     },
//     {
//       title: "Mentor Hub",
//       description: "Connect with industry experts for personalized 1:1 support to accelerate learning and career growth.",
//       image: mentorRoomImg,
//       altText: "1:1 Mentor room of Gigaversity"
//     },
//     {
//       title: "Campus Café",
//       description: "A vibrant space for thinkers and innovators to connect, recharge, and build meaningful relationships.",
//       image: caffeImg,
//       altText: "Campus Cafe of Gigaversity"
//     },
//     {
//       title: "Play Arena",
//       description: "Sports and recreation space for cricket, badminton, chess, and team-building activities.",
//       image: sportsArenaImg,
//       altText: "Sports room of Gigaversity"
//     }
//   ];

//   return (
//     <Box className={classes.section}>
//       <Container maxWidth="xl" className={classes.container}>
//         <Box className={classes.header}>
//           <Typography variant="h2" className={classes.title}>
//             Gigaversity State of the <span> Art Campus </span>
//           </Typography>
//           <Typography variant="body1" className={classes.subtitle}>
//             Learn, build, and grow in a dynamic environment equipped with everything you need to thrive in the tech industry
//           </Typography>
//         </Box>

//         <Box className={classes.campusGrid}>
//           {campusAreas.map((area, index) => (
//             <Box
//               key={index}
//               className={classes.campusCard}
//             >
//               <Box className={classes.cardImageContainer}>
//                 <img
//                   src={area.image}
//                   alt={area.altText}
//                   className={classes.cardImage}
//                 />
//               </Box>
              
//               <Box className={classes.cardContent}>
//                 <Typography className={classes.cardTitle}>
//                   {area.title}
//                 </Typography>
//                 <Typography className={classes.cardDescription}>
//                   {area.description}
//                 </Typography>
//               </Box>
//             </Box>
//           ))}
//         </Box>

//         <Box className={classes.ctaContainer}>
//           {/* <Button
//             variant="contained"
//             className={classes.ctaButton}
//             onClick={handleCTAClick}
//             title="Take a virtual tour of the Gigaversity campus and resources"
//           >
//             Explore Our Campus
//           </Button> */}
//         </Box>
//       </Container>
//     </Box>
//   );
// };

// export default CampusSection;

import React from 'react';
import { Box, Typography, Container, Button } from '@mui/material';
import { makeStyles } from '@mui/styles';
import { useNavigate } from 'react-router-dom';

// Import campus images
import foundationHallImg from '../../../assets/mentor-room/Foundation-hall.png';
import productRoomImg from '../../../assets/mentor-room/Product-room.jpg';
import startupRoomImg from '../../../assets/mentor-room/Startup-room.png';
import mentorRoomImg from '../../../assets/mentor-room/mentor-room .png';
import caffeImg from '../../../assets/mentor-room/cafe.jpg';
import sportsArenaImg from '../../../assets/mentor-room/sports-arena.jpg';

const useStyles = makeStyles({
  section: {
    backgroundColor: '#f8f9fa',
    padding: '20px 0',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    '@media (max-width: 960px)': {
      padding: '20px 0',
      minHeight: 'auto',
    },
  },
  container: {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  header: {
    textAlign: 'center',
    marginBottom: '30px',
    '@media (max-width: 960px)': {
      marginBottom: '40px',
    },
  },
  
  title: {
    fontSize: '3.5rem !important',
    fontWeight: 'bold !important',
    color: '#2A2B6A !important',
    marginBottom: '20px !important',
    '& span': {
      color: '#FFC614 !important',
    },
    '@media (max-width: 1200px)': {
      fontSize: '3rem !important',
    },
    '@media (max-width: 960px)': {
      fontSize: '2.5rem !important',
    },
    '@media (max-width: 600px)': {
      fontSize: '2rem !important',
    },
  },
  subtitle: {
    fontSize: '1.1rem !important',
    color: '#6c757d !important',
    maxWidth: '600px',
    margin: '0 auto !important',
    lineHeight: '1.6 !important',
    fontWeight: '400 !important',
    '@media (max-width: 960px)': {
      fontSize: '1rem !important',
      maxWidth: '90%',
    },
    '@media (max-width: 600px)': {
      fontSize: '0.95rem !important',
    },
  },
  campusGrid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(3, 1fr)',
    gap: '30px',
    marginBottom: '50px',
    '@media (max-width: 1200px)': {
      gap: '25px',
    },
    '@media (max-width: 960px)': {
      gridTemplateColumns: 'repeat(2, 1fr)',
      gap: '20px',
    },
    '@media (max-width: 600px)': {
      gridTemplateColumns: '1fr',
      gap: '20px',
    },
  },
  campusCard: {
    backgroundColor: '#ffffff',
    borderRadius: '12px',
    overflow: 'hidden',
    cursor: 'pointer',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    border: '1px solid #e9ecef',
    boxShadow: '0 2px 8px rgba(0, 0, 0, 0.08)',
    position: 'relative',
    opacity: 0.99,
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
    '&:hover': {
      transform: 'translateY(-8px) scale(1.02)',
      boxShadow: '0 20px 60px rgba(0, 0, 0, 0.25)',
      '& $cardImage': {
        transform: 'scale(1.05)',
      },
      '& $gradientOverlay': {
        opacity: 1,
        top: '50%',
      },
      '& $cardTitle': {
        opacity: 1,
        transform: 'translateY(-80px)',
        transitionDelay: '0.1s',
      },
      '& $cardDescription': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.2s',
      },
    },
    '&:focus': {
      outline: '2px solid #292B6B',
      outlineOffset: '4px',
      '& $gradientOverlay': {
        opacity: 1,
        top: '50%',
      },
      '& $cardTitle': {
        opacity: 1,
        transform: 'translateY(-80px)',
        transitionDelay: '0.1s',
      },
      '& $cardDescription': {
        opacity: 1,
        transform: 'translateY(0)',
        transitionDelay: '0.2s',
      },
    },
  },
  cardImageContainer: {
    position: 'relative',
    height: '280px',
    overflow: 'hidden',
    '@media (max-width: 600px)': {
      height: '240px',
    },
  },
  cardImage: {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    transition: 'transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    backfaceVisibility: 'hidden',
    WebkitBackfaceVisibility: 'hidden',
  },
  gradientOverlay: {
    position: 'absolute',
    top: '100%',
    left: 0,
    width: '100%',
    height: '50%',
    background: 'linear-gradient(to bottom, rgba(0,0,0,0) -64%, rgba(0,0,0,0.85) 100%)',
    // background:"#ffffff",
    borderRadius:"20px 200px 200px 20px",
    opacity: 0,
    zIndex: 2,
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    pointerEvents: 'none',
  },
  cardTitle: {
    fontSize: '1.25rem !important',
    fontWeight: '600 !important',
    color: '#ffffff !important',
    marginBottom: '0px !important',
    // lineHeight: '1.3 !important',
    display: 'block',
    opacity: 1,
    transform: 'translateY(0)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0s',
    textShadow: '0 2px 8px rgba(0,0,0,0.8)',
    textAlign: 'left',
    position: 'absolute',
    bottom: '0',
    left: '0',
    right: '0',
    padding: '24px',
    zIndex: 4,
    '@media (max-width: 600px)': {
      fontSize: '1.15rem !important',
      padding: '20px',
    },
  },
  cardDescription: {
    fontSize: '1rem !important',
    color: 'rgba(255, 255, 255, 0.95) !important',
    lineHeight: '1.5 !important',
    fontWeight: '400 !important',
    display: 'block',
    opacity: 0,
    transform: 'translateY(80px)',
    transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
    transitionDelay: '0s',
    textShadow: '0 1px 4px rgba(0,0,0,0.6)',
    textAlign: 'left',
    position: 'absolute',
    bottom: '24px',
    left: '0',
    right: '0',
    padding: '0 24px',
    zIndex: 3,
    '@media (max-width: 600px)': {
      fontSize: '0.9rem !important',
      bottom: '20px',
      padding: '0 20px',
    },
  },
  // Additional gradient overlay for better text readability on default state
  defaultTextOverlay: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    height: '50%',
    // background: 'linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,0.7) 100%)',
    // background:"#ffffff",
    zIndex: 1,
    pointerEvents: 'none',
  },
  ctaContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  ctaButton: {
    backgroundColor: '#FFC614 !important',
    color: '#2c3e50 !important',
    padding: '14px 32px !important',
    borderRadius: '25px !important',
    fontSize: '1.2rem !important',
    fontWeight: 'bold !important',
    textTransform: 'none !important',
    boxShadow: '0 4px 12px rgba(255, 198, 20, 0.3) !important',
    transition: 'all 0.3s ease !important',
    border: 'none !important',
    '&:hover': {
      backgroundColor: '#e6b312 !important',
      transform: 'translateY(-2px)',
      boxShadow: '0 6px 16px rgba(255, 198, 20, 0.4) !important',
    },
    '@media (max-width: 600px)': {
      padding: '12px 28px !important',
      fontSize: '0.95rem !important',
    },
  },
});

const CampusSection = () => {
  const classes = useStyles();
  const navigate = useNavigate();

  const handleCTAClick = () => {
    navigate('/campus');
  };

  const campusAreas = [
    {
      title: "Foundation Hall",
      description: "Dynamic collaborative learning space where students from all backgrounds unite for high-energy sessions and problem-solving.",
      image: foundationHallImg,
      altText: "Foundation Hall of Gigaversity"
    },
    {
      title: "Product Chamber",
      description: "Real tech products are built and executed collaboratively by teams in this dynamic, inspiring workspace.",
      image: productRoomImg,
      altText: "Product chamber of Gigaversity"
    },
    {
      title: "Startup Studio",
      description: "Fuel ideas with mentorship and founder guidance. Secure up to ₹1 lakh funding for tech startup ideas.",
      image: startupRoomImg,
      altText: "Startup Cabin of Gigaversity"
    },
    {
      title: "Mentor Hub",
      description: "Connect with industry experts for personalized 1:1 support to accelerate learning and career growth.",
      image: mentorRoomImg,
      altText: "1:1 Mentor room of Gigaversity"
    },
    {
      title: "Campus Café",
      description: "A vibrant space for thinkers and innovators to connect, recharge, and build meaningful relationships.",
      image: caffeImg,
      altText: "Campus Cafe of Gigaversity"
    },
    {
      title: "Play Arena",
      description: "Sports and recreation space for cricket, badminton, chess, and team-building activities.",
      image: sportsArenaImg,
      altText: "Sports room of Gigaversity"
    }
  ];

  const handleCardClick = (area) => {
    // Handle card click - could navigate or open modal
    console.log('Clicked area:', area.title);
  };

  const handleKeyPress = (event, area) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleCardClick(area);
    }
  };

  return (
    <Box className={classes.section}>
      <Container maxWidth="xl" className={classes.container}>
        <Box className={classes.header}>
          <Typography variant="h2" className={classes.title}>
            Gigaversity State of the <span> Art Campus </span>
          </Typography>
          <Typography variant="body1" className={classes.subtitle}>
            Learn, build, and grow in a dynamic environment equipped with everything you need to thrive in the tech industry
          </Typography>
        </Box>

        <Box className={classes.campusGrid}>
          {campusAreas.map((area, index) => (
            <Box
              key={index}
              className={classes.campusCard}
              onClick={() => handleCardClick(area)}
              onKeyPress={(e) => handleKeyPress(e, area)}
              tabIndex={0}
              role="button"
              aria-label={`${area.title}: ${area.description}`}
            >
              <Box className={classes.cardImageContainer}>
                <img
                  src={area.image}
                  alt={area.altText}
                  className={classes.cardImage}
                />
                
                {/* Default gradient for text readability */}
                <Box className={classes.defaultTextOverlay} />
                
                {/* Animated gradient overlay */}
                <Box className={classes.gradientOverlay} />
                
                {/* Title positioned at bottom */}
                <Typography component="span" className={classes.cardTitle}>
                  {area.title}
                </Typography>
                
                {/* Description positioned for animation */}
                <Typography component="span" className={classes.cardDescription}>
                  {area.description}
                </Typography>
              </Box>
            </Box>
          ))}
        </Box>

        <Box className={classes.ctaContainer}>
          {/* <Button
            variant="contained"
            className={classes.ctaButton}
            onClick={handleCTAClick}
            title="Take a virtual tour of the Gigaversity campus and resources"
          >
            Explore Our Campus
          </Button> */}
        </Box>
      </Container>
    </Box>
  );
};

export default CampusSection;