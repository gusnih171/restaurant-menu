import React from 'react';
import Review1 from './component/Collie.png';
import Review2 from './component/FatherMaxy.png';
import Review3 from './component/Louise.png';
import Review4 from './component/Poppy.png';
import Review5 from './component/Sheriff.png';
import './ReviewSlides.css';

const ReviewSlides = () => {
  return (
    <div>
      <div className="slider" style={{ "--quantity": 9, "--width": "350px", "--height": "350px" }}>
        <div className="list">
          <div className="item" style={{ "--position": 1 }}><img src={Review1} alt=""/></div>
          <div className="item" style={{ "--position": 2 }}><img src={Review2} alt=""/></div>
          <div className="item" style={{ "--position": 3 }}><img src={Review3} alt=""/></div>
          <div className="item" style={{ "--position": 4 }}><img src={Review4} alt=""/></div>
          <div className="item" style={{ "--position": 5 }}><img src={Review5} alt=""/></div>
          <div className="item" style={{ "--position": 6 }}><img src={Review1} alt=""/></div>
          <div className="item" style={{ "--position": 7 }}><img src={Review2} alt=""/></div>
          <div className="item" style={{ "--position": 8 }}><img src={Review5} alt=""/></div>
          <div className="item" style={{ "--position": 9 }}><img src={Review3} alt=""/></div>
        </div>
      </div>
    </div>
  );
}

export default ReviewSlides;
