import React, {useEffect, useState} from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import LoadingScreen from '../assets/Loading-Screen-Animation.png';

const PollingStation = (props) => {
    const [Candidate1URL, changeCandidate1Url]=useState(LoadingScreen);
    const [Candidate2URL, changeCandidate2Url]=useState(LoadingScreen);
    const [showResults,changeResultsDisplay]=useState(true);
    const [Candidate1Votes, changeVote1]=useState('--');
    const [Candidate2Votes, changeVote2]=useState('--');
    const[pr,changePr]=useState('Who wins?');
    const[Candidate1,changeCandidate1]=useState('Candidate1');
    const[Candidate2,changeCandidate2]=useState('Candidate2');
    useEffect(()=>{
        const getInfo=async()=>{
            let voteCount= await window.contract.getVotes({
                prompt: localStorage.getItem("prompt"),
            });
            changeVote1(voteCount[0]);
            changeVote2(voteCount[1]);
            changePr(
                localStorage.getItem("prompt")
            );
            changeCandidate1(localStorage.getItem("Candidate1"));
            changeCandidate2(localStorage.getItem("Candidate2"));
            changeCandidate1Url(
                await window.contract.getUrl({name:localStorage.getItem("Candidate1"),
            })
            );
            changeCandidate2Url(
                await window.contract.getUrl({name:localStorage.getItem("Candidate2"),
            })
            );
            let didUserVote= await window.contract.didParticipate({
                prompt:localStorage.getItem("prompt"),
                user:window.accountId,
            });
            changeResultsDisplay(didUserVote);
        };

        getInfo();
    },[]);
    const addVote=async(index)=>{
        await window.contract.addVote({
            prompt:localStorage.getItem("prompt"),
            index: index,
        });

        window.contract.recordUser({
            prompt:localStorage.getItem("prompt"),
            user: window.accountId,
        });
        changeResultsDisplay(true);
    };
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
                        <Row><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'cornsilk'
                            }}>{Candidate1}
                            </div></Row>
                        {showResults?(
                        <Row className='justify-content-center d-flex' style={{marginTop:'5vh'}}><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'moccasin'
                            }}>{Candidate1Votes}
                            </div>
                            </Row>)
                            :null}
                        <Row style={{marginTop:'1vh'}} className='justify-content-center d-flex'>
                            <Button disabled={showResults} onClick={()=>addVote(0)}>Vote</Button>
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
                        {pr}
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
                        <Row><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'cornsilk'
                            }}>{Candidate2}
                            </div></Row>
                        {showResults?(
                        <Row className='justify-content-center d-flex' style={{marginTop:'5vh'}}><div style={{
                            display:'flex',
                            justifyContent:'center',
                            fontSize:'8v',
                            padding:'10px',
                            backgroundColor:'moccasin'
                            }}>{Candidate2Votes}
                            </div>
                            </Row>)
                            :null}
                        <Row style={{marginTop:'1vh'}} className='justify-content-center d-flex'>
                            <Button disabled={showResults} onClick={()=>addVote(1)}>Vote</Button>
                        </Row>
                </Container>
                </Col>
            </Row>
            
        </Container>
    );
};

export default PollingStation;