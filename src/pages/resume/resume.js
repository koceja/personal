import React, { useState } from 'react';
import { Row, Col, Card, Switch, Timeline, Image, Collapse } from 'antd';
import { ClockCircleOutlined } from '@ant-design/icons';


import Page from '../page.js';

import unc from '../../assets/unc.png';
import amazon from '../../assets/amazon.jpg';
import mozilla from '../../assets/mozilla.jpg';

import './resume.css';

const { Panel } = Collapse;

const resumeItems = {
    education: [
        {
            school: "University of North Carolina at Chapel Hill",
            major: "Computer Science and Mathematics",
            degree: "Bachelors of Science",
            dates: "Aug 2018 - May 2022",
            img: unc
        }
    ],
    experience: [
        {
            company: "Amazon.com",
            title: "Software Development Engineer Intern",
            dates: "Jun 2020 - Sept 2020",
            description: [
                "Fully designed and implemented a management website for the Secure AI Sandbox, a main goal in the teams 3-year plan",
                "Allowed users to set up an entire sandbox in one click, decreasing setup time from minutes to a few seconds",
                "Implemented a fluid UI with dynamic components and API calls with AWS S3, CloudFront, CloudFormation, Lambda and pipelines",
                "Created a team UI component library for shared components and easy of integration for future UIs.",
                "Integrated authentication to limit access to select users to improve security",
                "Designed a login system to be used across all the companies UIs, leading to faster development and a centralized hub for customers",
                "Gave multiple presentations to customers explaining the benefits of the product"
            ],
            img: amazon
        },
        {
            company: "Mozilla Builders Lab",
            title: "Full Stack Developer",
            dates: "Spring 2020",
            description: [
                "Architected and developed a full stack of an AI stylist web app for an early stage startup", 
                "Created an API for modular development for a machine learning developers, significantly increasing productivity", 
                "Managed and setup all frameworks and deployments during development", 
                "Received mentorship from successful startup founders across the globe in small peer groups"
            ],
            img: mozilla

        },
        {
            company: "University of North Carolina at Chapel Hill",
            title: "Undergraduate Teaching Assistant",
            dates: "Fall 2020 - Present",
            description: [
                "Undergraduate teaching assistant for automata theory and object oriented programming courses",
                "Explained challenging course topics to students in intermediate level computer science courses",
                "Assisted the most students out of a team of nearly 40 assistants, logging 22% more hours than the next highest TA"
            ],
            img: unc

        }
    ]
}

const timelineItems = [
    {
        color: "gray",
        description: "Born",
        date: "Oct 1999"
    },
    {
        color: "blue",
        description: "Started school at UNC-Chapel Hill",
        date: "Aug 2018"
    },
    {
        color: "blue",
        description: "Declared Computer Science major",
        date: "Spring 2019"
    },
    {
        color: "green",
        description: "Participated in PackHacks",
        date: "April 2019"
    },
    {
        color: "red",
        description: "Became a TA for COMP 401",
        date: "Fall 2019"
    },
    {
        color: "green",
        description: "Participated in Carolina Data Challenge",
        date: "Oct 2019"
    },
    {
        color: "red",
        description: "Became a TA for COMP 455",
        date: "Spring 2020"
    },
    {
        color: "red",
        description: "Started FashApp as a part of the Mozilla Builders Lab",
        date: "April 2020"
    },
    {
        color: "red",
        description: "Interned at Amazon as a SDE Intern",
        date: "Summer 2020"
    },
    {
        color: "red",
        description: "Continued to TA for COMP 455",
        date: "Fall 2020"
    },
    {
        color: "green",
        description: "Participated in HackMIT",
        date: "Sept 2020"
    },
]


function Content() {
    const [showTimeline, setShowTimeline] = useState(false);

    return (
        <div id="resume">
            <Switch checkedChildren="timeline view" unCheckedChildren="standard view" onChange={ e => {setShowTimeline(e)}}/>
            <br />
            {(showTimeline) ? (
                <div id="resume-timeline">
                    
                    <Row justify="center">
                        <Col span={24}>
                            <h1 style={{fontSize: "5em", marginBottom: "0px"}}>Timeline</h1>
                            <Card>
                                <Timeline mode="alternate">
                                    {timelineItems.map(item => (
                                        <Timeline.Item color={item.color}>{`${item.description} - ${item.date}`}</Timeline.Item>
                                    ))}
                                </Timeline>   
                            </Card>
                        </Col>
                        
                    </Row>
                    
                    
                </div>
            ) : (
                <div id="resume-standard">
                    <Row className="resume-row">
                        <Col span={24} >
                            <Card className="resume-section">
                                <Row align="middle">
                                    <Col span={14}>
                                        <h1 style={{fontSize: "5em"}}>Education</h1>
                                    </Col>
                                    <Col span={10}>
                                        {resumeItems.education.map( item => (
                                        <Card
                                            cover={
                                                <div className="resume-img">
                                                    <Image width={200} src={item.img} />
                                                
                                                </div>
                                            }>
                                            <h2>{item.school}</h2>
                                            <p>{item.major}</p>
                                            <p>{item.degree}</p>
                                            <p>{item.dates}</p>

                                        </Card>
                                        ))}
                                    </Col>
                                </Row>
                                
                            </Card>
                        </Col>
                        
                        
                        
                    </Row>
                    <Row>
                        <Col span={24} >
                            <Card className="resume-section">
                                <Row justify="end">
                                    <h1 style={{fontSize: "5em"}}>Experience</h1>
                                </Row>
                                <Row justify="space-between" gutter={[16, 40]}>
                                    {resumeItems.experience.map( item => (
                                        <Col md={8} sm={24} xs={24}>
                                            <Card   
                                                className="experience-card"
                                                cover={
                                                    <div className="resume-img">
                                                        <p>
                                                            <Image height={150} width={200} src={item.img} />
                                                        </p>
                                                    </div>
                                                    
                                                }>
                                                <div className="experience-body">
                                                    <h2>{item.company}</h2>
                                                    <p>{item.title}</p>
                                                    <p>{item.dates}</p>
                                                    <br />
                                                    <hr />
                                                    <br />
                                                    <ul>
                                                        {item.description.map(point => (<li>{point}</li>))}
                                                    </ul>
                                                </div>
                                                
                                                

                                            </Card>
                                        </Col>
                                    ))}
                                </Row>
                            </Card>
                        </Col>
                    </Row>
                    
                    
                    
                    </div>
            )}
            

            
            
        </div>
        
    );
}

function Resume() {
    return (
        <Page
            page="resume"
            noFooter={false}
            content={<Content />}
        />
    );
	
}

export default Resume;
