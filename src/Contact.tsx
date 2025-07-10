import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

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

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Home Page</h1>
        <p>ยินดีต้อนรับสู่หน้า Home!</p>
      </div>
    </div>
    </div>
  );
};

export default Home;
