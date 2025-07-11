import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";
import smaile from './photo/smile.gif';
import Box from '@mui/material/Box';
const Home: React.FC = () => {
  

  return (
    <div>
      <div >
         <div className="app-container">
          {/* <div className="box">Box ด้านบน</div> */}

          <div className="box2">
            <div className="d-inline-flex gap-2">
              <Stack direction="row" spacing={2}>
              <Link to="/home" className="link-button  ">Home</Link>
              <Link to="/about" className="link-button ">About</Link>
              <Link to="/portfolio" className="link-button ">Portfolio</Link>
              <Link to="/contact" className="link-button ">Contact</Link>
              </Stack>
            </div>
          </div>

          {/* <div className="box3">Box ด้านล่าง</div> */}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
           <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ padding: '40px', textAlign: 'left', flex: 1 }}
          >
            <h1 className="text-lg text-gray-500 mt-2">Hi!, I'm Pitchayaporn Wo.</h1>
                <h3 className="text-lg text-gray-500 mt-2">Web Developer | Frontend Developer | React | UI/UX | Java</h3>
                <p className="text-lg text-gray-500 mt-2">I have a great passion for software development and am known as a team player who collaborates well. 
                    I possess excellent interpersonal skills and am eager to apply my technical knowledge to contribute 
                    to impactful software projects and the success of the organization.</p>
              <Box
                sx={{
                  width: 120,
                  backgroundColor: '#FFB26F',
                  padding: 1,
                  textAlign: 'center',
                  borderRadius: 2,
                }}
              >
                <Link to="/about" style={{ textDecoration: 'none', color: 'white' }}>
                  More
                </Link>
              </Box>
              
          </motion.div>
          <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ padding: '40px', textAlign: 'center', flex: 1 }}
          >
                 <div className="box2">
            <div className="d-inline-flex gap-2">
                <div className="hero-right">
                  <img src={smaile} alt="Pitchayaporn Wo" />
                </div>
            </div>
          </div>
          </motion.div>
        </div>
       <div>
         <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 3 }}
            style={{ padding: '40px', textAlign: 'center', flex: 1 }}
          >
                 <div className="box2">
            <div className="d-inline-flex gap-2">
                <div className="hero-right">
                  <img src={smaile} alt="Pitchayaporn Wo" />
                </div>
            </div>
          </div>
          </motion.div>
       </div>
         

      </div>
    </div>
  );
};

export default Home;
