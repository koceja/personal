import React from 'react';
import { Row, Col, Card, Timeline } from 'antd';

import Page from '../page.js';

import './projects.css';

const projectList = [
    {
        name: "GameRoom",
        description: "A social media platform where people can find friends to play games with through similar interests."
    },
    {
        name: "FashApp",
        description: "A webapp to help users understand their style more and find more clothes based on their style."
    },
    {
        name: "GameRoom",
        description: "A social media platform where people can find friends to play games with through similar interests."
    },
    {
        name: "GameRoom",
        description: "A social media platform where people can find friends to play games with through similar interests."
    },
]

function Content() {
    return (
        <div>
            <Row justify="space-between" gutter={[16, 40]}>
                {projectList.map(item => (
                    <Col md={8} sm={24} xs={24}>
                        <Card>
                            <div>
                                <h2>{item.name}</h2>
                                <p>{item.description}</p>
                            </div>

                        </Card>
                    </Col>
                ))}
            </Row>

        </div>

    );
}

function Home() {
    return (
        <Page
            page="projects"
            noFooter={false}
            content={<Content />}
        />
    );

}

export default Home;
