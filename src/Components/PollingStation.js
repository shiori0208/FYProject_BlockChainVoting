import React, {useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';

const PollingStation = (props) => {
    const [Candidate1URL, changeCandidate1Url]=useState('https://dk135eecbplh9.cloudfront.net/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png');
    const [Candidate2URL, changeCandidate2Url]=useState('https://dk135eecbplh9.cloudfront.net/assets/blt0fa990a7507d7a41/Loading-Screen-Animation.png');
    const [showResults,changeResultsDisplay]=useState(true);
    return (
        <Container>
            <Row>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh", backgroundColor: 'mistyrose'}}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            padding:'3vw',
                        }}>
                            <img style={{height:'35vh', width: '20vw'}}
                             src={Candidate1URL}></img>
                        </div>
                        </Row>
                        {showResults?(
                        <Row className='justify-content-center d-flex' style={{marginTop:'5vh'}}><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'moccasin'
                            }}>3
                            </div>
                            </Row>)
                            :null}
                        <Row style={{marginTop:'1vh'}} className='justify-content-center d-flex'>
                            <Button>Vote</Button>
                        </Row>
                </Container>
                </Col>
                <Col className='justify-content-center d-flex align-items-center'>
                    <div
                    style={{
                        display:'flex',
                        justifyContent:'center',
                        backgroundColor:'darkslategrey',
                        height:'20vh',
                        alignItems:'center',
                        padding:'2vw',
                        textAlign:'center',
                        color:'aquamarine'
                    }}>
                        Best Actor?
                </div>
                </Col>
                <Col className='justify-content-center d-flex'>
                <Container>
                    <Row style={{marginTop: "5vh", backgroundColor: 'mistyrose'}}>
                        <div style={{
                            display:'flex',
                            justifyContent:'center',
                            padding:'3vw',
                        }}>
                            <img style={{height:'35vh', width: '20vw'}}
                             src={Candidate2URL}></img>
                        </div>
                        </Row>
                        {showResults?(
                        <Row className='justify-content-center d-flex' style={{marginTop:'5vh'}}><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'moccasin'
                            }}>3
                            </div>
                            </Row>)
                            :null}
                        <Row style={{marginTop:'1vh'}} className='justify-content-center d-flex'>
                            <Button>Vote</Button>
                        </Row>
                </Container>
                </Col>
            </Row>
        </Container>
    );
};

export default PollingStation;