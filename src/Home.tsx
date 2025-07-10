import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import { motion } from "framer-motion";

const Home: React.FC = () => {
  

  return (
    <div className="wrapper">
      <div className="card">
         <div className="app-container">
          {/* <div className="box">Box ด้านบน</div> */}

          <div className="box2">
            <div className="d-inline-flex gap-2">
              <Stack direction="row" spacing={2}>
              <Link to="/home" className="button ">Home</Link>
              <Link to="/about" className="button">About</Link>
              <Link to="/portfolio" className="button">Portfolio</Link>
              <Link to="/contact" className="button">Contact</Link>
              </Stack>
            </div>
          </div>

          {/* <div className="box3">Box ด้านล่าง</div> */}
        </div>
        <motion.div
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -300, opacity: 0 }}
            transition={{ duration: 1 }}
            style={{ padding: '40px', textAlign: 'left' }}
          >
            <h1 className="text-lg text-gray-500 mt-2">Hi!, I'm Pitchayaporn Wo.</h1>
                <h3 className="text-lg text-gray-500 mt-2">Web Developer | Frontend Developer | React | UI/UX | Java</h3>
                <p className="text-lg text-gray-500 mt-2">I have a great passion for software development and am known as a team player who collaborates well. 
                    I possess excellent interpersonal skills and am eager to apply my technical knowledge to contribute 
                    to impactful software projects and the success of the organization.</p>
          </motion.div>
      </div>
    </div>
  );
};

export default Home;
