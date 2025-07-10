import React from "react";
import { Link } from 'react-router-dom';
import Stack from '@mui/material/Stack';

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

      <div style={{ padding: '40px', textAlign: 'center' }}>
        <h1 className="text-lg text-gray-500 mt-2">About Me</h1>
<section className="py-10">
  <p className="text-gray-600">ฉันจบวิศวกรรมคอมพิวเตอร์ สนใจงานด้าน Frontend Developer...</p>
</section>

<hr className="my-8 border-t border-gray-300" />

<section className="py-10">
  <h2 className="text-2xl font-bold mb-4">Projects</h2>
  <p className="text-gray-600">• Portfolio Website • React Weather App • UI Clone Facebook</p>
</section>

      </div>
    </>
  );
};

export default Home;
