import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

const Home: React.FC = () => {
  const handleNavClick = (section: string) => {
    console.log(`กำลังไปยัง: ${section}`);
    // คุณสามารถใส่ scroll หรือเปลี่ยน state ได้ที่นี่
  };

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

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1>Home Page</h1>
        <p>ยินดีต้อนรับสู่หน้า Home!</p>
      </div>
    </>
  );
};

export default Home;
