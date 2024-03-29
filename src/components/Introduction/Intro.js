import React, { useState,useEffect } from 'react'
import {Container,Row,Col} from "react-bootstrap"
import ProfilePic from './profilepic';

export default function Intro() {
    const [loopNum,setLoopNum] =useState(0);
    const [isdelete,setIsdelete] = useState(false);
    const toRotate = ["Nurul Hasan","MERN stack developer","software Engineer"];
    const [text,SetText]=useState('');
    const [delta,setDelta]=useState(300 - Math.random()*100);
    const period=2000;

     useEffect(() => {
      let ticker= setInterval(()=>{
        tick();
      },delta);
      return () => {clearInterval(ticker)}
    }, [text])

    const tick=()=>{
        let i = loopNum % toRotate.length;
        let fullText= toRotate[i];
        let updatedText = isdelete ? fullText.substring(0,text.length - 1): fullText.substring(0,text.length+1);
        SetText(updatedText); 

        if(isdelete){
            setDelta(prevDelta => prevDelta/1.6 )
        }
        if(!isdelete && updatedText ===fullText){
              setIsdelete(true);
              setDelta(period);
        } else if(isdelete && updatedText==='') {
            setIsdelete(false);
            setLoopNum(loopNum+1);
            setDelta(200);
        }
    }

  return (
    <section className='banner' id="home">
  
        <Container>
        <Row className="align-item-center">
            <Col xs={12} md={6} xl={5}>
              <ProfilePic/>
            </Col>
            <Col xs={12} md={6} xl={7}>
                <h1 className='txt-rotate'>{`Hii I'm`}<span className='wrap'> <br />{text}<span c></span></span></h1>
                <p className='fs-5'>&#128526; My goal is to achieve excellence<br /></p>
               <button className='downlode'> <a href="https://drive.google.com/file/d/1HkTjnsCYBKULTEGg65MjV89rvXHqv_pV/view" target='blank'>Resume</a></button>
            </Col>
        </Row>
        </Container>
    </section>
  )
}
