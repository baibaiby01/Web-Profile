import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';


const Home: React.FC = () => {
  

  return (
    <>
     <div className="app-container">
      {/* <div className="box">Box ด้านบน</div> */}

      <div className="box2">
        <div className="d-inline-flex gap-2">
           <Stack direction="row" spacing={2}>
          <Link to="/home" className="link-button">Home</Link>
          <Link to="/about" className="link-button">About</Link>
          <Link to="/portfolio" className="link-button">Portfolio</Link>
          <Link to="/contact" className="link-button">Contact</Link>
          </Stack>
        </div>
      </div>

      {/* <div className="box3">Box ด้านล่าง</div> */}
    </div>

      <div style={{ padding: '40px', textAlign: 'left' }}>
        <h1 className="text-lg text-gray-500 mt-2">Hi!, I'm Pitchayaporn Wo.</h1>
        <h3 className="text-lg text-gray-500 mt-2">Web Developer | Frontend Developer | React | UI/UX | Java</h3>
        <p className="text-lg text-gray-500 mt-2">I have a great passion for software development and am known as a team player who collaborates well. 
            I possess excellent interpersonal skills and am eager to apply my technical knowledge to contribute 
            to impactful software projects and the success of the organization.</p>
      </div>

  <Box
  sx={{
    position: 'relative',
    width: 200,
    height: 200,
  }}
>
  {/* ล่างสุด */}
  <Paper
    elevation={1}
    sx={{
      width: 128,
      height: 128,
      position: 'absolute',
      top: 40,
      left: 36,
      transform: 'scale(0.9) rotateX(20deg)',
      zIndex: 1,
    }}
  />
  {/* ชั้นกลาง */}
  <Paper
    elevation={3}
    sx={{
      width: 128,
      height: 128,
      position: 'absolute',
      top: 28,
      left: 32,
      transform: 'scale(0.95) rotateX(10deg)',
      zIndex: 2,
    }}
  />
  {/* บนสุด */}
  <Paper
    elevation={10}
    sx={{
      width: 128,
      height: 128,
      position: 'absolute',
      top: 16,
      left: 28,
      transform: 'scale(1) rotateX(0deg)',
      zIndex: 3,
      border: '2px solid blueviolet',
    }}
  />
</Box>

 

    </>
  );
};

export default Home;
