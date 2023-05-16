import React, { useState } from 'react';
import './style.css';

const Home = () => {
  const questions = [
    'I have ambitious aims of making a difference',
    'My leadership journey has progressed as I anticipated',
    'I have spent fewer than 4 years in full-time service or ministry',
  ];

  const [values, setValues] = useState([]);
  const [index, setIndex] = useState(1);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [progressBar, setProgressBar] = useState(0);
  const [counter, setCounter] = useState(3);
  const [pointer, setPointer] = useState(0);

  const handleClick = (e) => {
    setProgressBar((n) => {
      if (n < 100) {
        return (100 / questions.length) + n;
      }
    });

    if (index < questions.length) {
      setIndex((n) => n + 1);
    }

    setCounter((n) => n - 1);

    setValues((prev) => {
      const newValues = [...prev, e.target.value];
      setSliderWidth((newValues[newValues.length - 1] * 2 - 2) * 8);
      return newValues;
    });

    setTimeout(() => {
      setSliderWidth(0);
      e.target.checked = false;
    }, 500);

    pointer < questions.length - 1 && setPointer(values.length);
  };

  console.log(index);
  console.log(values);
  console.log(progressBar);
  console.log(pointer);

  return (
    <>
      <div className="navbar" style={{ marginBottom: 20 }}>
        ARE YOU DISILLUSIONED?
      </div>

      <div className="container">
        <div className="progressbar">
          <span className="progress" style={{ width: `${progressBar}%` }}></span>

          <div className="labels">
            <div className="bar">idealistic</div>
            <div className="bar">disillusioned</div>
            <div className="bar">cynical</div>
            <div className="bar">hopeful</div>
          </div>
        </div>

        <div className="questions">
          <p>{`${index}/3`}</p>
          <p>{questions[index - 1]}</p>
        </div>

        <div className="sliderContainer">
          <div className="line"></div>

          <div className="valuesContainer">
            <div className="slider" style={{ width: `${sliderWidth}%` }}></div>
            <div className="values">
              <input
                type="radio"
                name="radio"
                id="radio-1"
                value="1"
                onClick={handleClick}
              />
              <label htmlFor="radio-1">strongly disagree</label>
            </div>

            <div className="values">
              <input
                type="radio"
                name="radio"
                id="radio-2"
                value="2"
                onClick={handleClick}
              />
              <label htmlFor="radio-2">disagree</label>
            </div>

            <div className="values">
              <input
                type="radio"
                name="radio"
                id="radio-3"
                value="3"
                onClick={handleClick}
              />
              <label htmlFor="radio-3">neutral</label>
                </div>
                
                <div className="values">
                   <input type="radio" name="radio"id="radio-4" value="4" onClick={handleClick}/>
                   <label htmlFor="radio-4">agree</label>

                </div>
                
                <div className="values">
                   <input type="radio" name="radio"id="radio-5" value="5"  onClick={handleClick}/>
                   <label htmlFor="radio-5">strongly agree</label>

                </div>
                
                
            </div>

 
        </div>

      
      <div className='togglePages'>
        <p className='prev' onClick={()=>{

            if(index>1){
                setIndex(n=>n-1)
                setPointer(n=>n-1)
                setSliderWidth((values[pointer]*2-2)*8)
            }

            index>=1 && setProgressBar(n=>{
                return Math.abs(n-(100/3))}
            );


       } }>prev</p>
        <p className='next' onClick={()=>{if(index<3)
            {
                setIndex(n=>n+1)
            }
             setProgressBar(n=>{if(n<100){
                return (100/3)+n}
            });
            }}>next</p>
      </div>

    </div>

    </>
  )
}

export default Home