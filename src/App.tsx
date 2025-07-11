import './App.css';
import React from 'react';
import Stack from '@mui/material/Stack';
import { Link } from 'react-router-dom';
// import AOS from 'aos';
// import 'aos/dist/aos.css';

// useEffect(() => {
//   AOS.init({ duration: 1000, once: true });
// }, []);
const App: React.FC = () => {


  return (
    <div className="app-container">
      {/* <div className="box">Box ด้านบน</div> */}

      <div className="box2">
        <div className="d-inline-flex gap-2">
           <Stack direction="row" spacing={2}>
          {/* <Link to="/app" className="link-button"></Link> */}
          <Link to="/home" className="link-button">Home</Link>
          <Link to="/about" className="link-button">About</Link>
          <Link to="/portfolio" className="link-button">Portfolio</Link>
          <Link to="/contact" className="link-button">Contact</Link>
        
          </Stack>
        </div>
      </div>

      <div className="box3">Box ด้านล่าง</div>
    </div>
  );
};

export default App;
