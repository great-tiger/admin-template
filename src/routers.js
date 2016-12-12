import React from 'react';
import { Route, IndexRoute } from 'react-router';
import App from './components/App';
import ProjectList from './components/ProjectList/ProjectList.js';
import NoticeList from './components/NoticeList/NoticeList.js';
import Home from './components/Home/Home.js';


export default () => (
    <Route path="/" component={App} >
       <IndexRoute component={Home} />
       <Route path="/pl" component={ProjectList}/>
       <Route path="/nl" component={NoticeList}/>
    </Route>
)
