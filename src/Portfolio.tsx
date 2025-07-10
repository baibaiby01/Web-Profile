import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';
import Resume from './Resume.pdf';

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
  <div className="flex justify-center mt-6">
        <Stack direction="row" spacing={2} style={{ padding: '40px', textAlign: 'left' }}>
          <a href="https://github.com/baibaiby01" target="_blank" rel="noopener noreferrer" className="link-button">GitHub</a>
          <a href="https://www.linkedin.com/in/pitchayaporn-wo" target="_blank" rel="noopener noreferrer" className="link-button">LinkedIn</a>
          <a href={Resume} target="_blank" rel="noopener noreferrer" className="link-button">Resume</a>
        </Stack>
      </div>
    </>
  );
};

export default Home;
