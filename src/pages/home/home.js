import React from 'react';
import { Row, Col, Card } from 'antd';


import Page from '../page.js';

import './home.css';

function Content() {
    return (
        <div>
            
        </div>
        
    );
}

function Home() {
    return (
        <Page
            page="home"
            noFooter={false}
            content={<Content />}
        />
    );
	
}

export default Home;
