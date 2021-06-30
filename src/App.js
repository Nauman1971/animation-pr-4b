import './App.css';
import { Bounce, Elastic, gsap, Power2 } from 'gsap/all';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faHandPaper, faHandScissors, faHandLizard, faHandSpock, faHandRock } from '@fortawesome/free-solid-svg-icons';
import { useRef } from 'react';

import { Button, Container, Grid } from "@material-ui/core";

library.add(faHandPaper, faHandScissors, faHandLizard, faHandSpock, faHandRock);


function App() {
  const tlLoop = useRef(null);

  function handleXandY() {
    let letters = document.getElementsByClassName("letter");
    let letter1 = letters[0];
    let letter2 = letters[1];
    let letter3 = letters[2];
    let letter4 = letters[3];
    let letter5 = letters[4];
    let letter6 = letters[5];
    let letter7 = letters[6];
    let letter8 = letters[7];
    let letter9 = letters[8];
    let letter10 = letters[9];
    let letter11 = letters[10];
    let letter12 = letters[11];
    let letter13 = letters[12];

    let tl = new gsap.timeline({ onComplete: () => gsap.set(letters, { clearProps: true }) });

    tl
      .from(letter1, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter2, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter3, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter4, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter5, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter6, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter7, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter8, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter9, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter10, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter11, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
      .from(letter12, { duration: 2, x: '100px', y: "100px", autoAlpha: 0 }, 0.5)
      .from(letter13, { duration: 2, x: '-100px', y: "-100px", autoAlpha: 0 }, 0.5)
  }

  function handleStagger() {
    let elemets = gsap.utils.toArray('.letter');
    let tl = new gsap.timeline({ onComplete: () => gsap.set(elemets, { clearProps: true }) });

    tl
      .from(elemets, { duration: 1, opacity: 0 })
      .to(elemets, { duration: 1, top: "150", ease: Bounce.easeOut, stagger: .5 }, .15)
  }

  function handleElastic() {
    let elements = gsap.utils.toArray('.letter');
    let tl = new gsap.timeline({ onComplete: () => (elements, { clearProps: true }) });

    tl
      .from(elements, { stagger: 0.2, duration: 0.5, y: "100px", ease: Elastic.easeOut }, 0.25)
  }

  function handleStart() {
    let letters = gsap.utils.toArray('.letter');
    let iconsDiv = gsap.utils.toArray('.icons');
    let icons = iconsDiv[0].childNodes;

    tlLoop.current = gsap.timeline({ repeat: -1, onComplete: () => (letters, { clearProps: true }) })
      .from(letters,
        {
          duration: 1,
          y: "-100px",
          ease: Elastic.easeOut,
          repeat: 1,
          repeatDelay: 0.5,
          stagger: {
            each: 0.1
          }
        }, 0.5)
      .from(icons, {
        duration: 1,
        stagger: {
          each: 0.2,
          from: "end",
        },
        scale: 2,
        opacity: 0,
        ease: Power2.easeOut
      }, 0.15, "-=1")
  }

  const handlePause = () => tlLoop.current.pause();
  const handleResume = () => tlLoop.current.play();
  const handleReverse = () => tlLoop.current.reverse();

  return (
    <Container maxWidth="lg">
      <Grid container justify="center">
        <div className="letters-wrapper">
          <div className="letter red">B</div>
          <div className="letter green">O</div>
          <div className="letter blue">O</div>
          <div className="letter orange">T</div>
          <div className="letter purple">C</div>
          <div className="letter green">A</div>
          <div className="letter blue">M</div>
          <div className="letter orange">P</div>
          <div className="letter purple">2</div>
          <div className="letter green">0</div>
          <div className="letter red">2</div>
          <div className="letter blue">0</div>
        </div>
      </Grid>
      <Grid container justify="center">
        <div className="icons">
          <FontAwesomeIcon icon={faHandRock} className="red" />
          <FontAwesomeIcon icon={faHandPaper} className="green" />
          <FontAwesomeIcon icon={faHandScissors} className="blue" />
          <FontAwesomeIcon icon={faHandLizard} className="orange" />
          <FontAwesomeIcon icon={faHandSpock} className="purple" />
        </div>
      </Grid>
      <Grid container justify="center">
        <div className="feat-btns">
          <Button variant="contained" color="primary" onClick={handleXandY}>X/Y</Button>
          <Button style={{ marginLeft: 5 }} variant="contained" color="secondary" onClick={handleStagger}>Staggering</Button>
          <Button style={{ marginLeft: 5 }} variant="contained" color="inherit" onClick={handleElastic}>Elastic</Button>
          <Button style={{ marginLeft: 5 }} variant="text" color="primary" onClick={handleStart}>Start</Button>
          <Button style={{ marginLeft: 5 }} variant="outlined" color="secondary" onClick={handlePause}>Pause</Button>
          <Button style={{ marginLeft: 5 }} variant="outlined" color="inherit" onClick={handleResume}>Resume</Button>
          <Button style={{ marginLeft: 5 }} variant="outlined" color="secondary" onClick={handleReverse}>Reverse</Button>
        </div>
      </Grid>
    </Container>
  )
}

export default App;
