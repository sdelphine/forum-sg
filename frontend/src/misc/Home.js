import React, { useEffect } from 'react';
import Nav from './Nav';
import { useStoreState, useStoreActions } from 'easy-peasy';
import Logo from'../img/forum.jpg';

export default function Home() {
    const topicsList = useStoreState(states => states.topicsModel.topics.data)
    const fetchTopics = useStoreActions(actions => actions.topicsModel.topics.list);

    useEffect(() => { fetchTopics() }, [])
    const topicsListFiltered = topicsList.filter(topic => topic.slug !== '')
    return (
        <div className="container">
            <img src={Logo} alt='Logo'/>
            <p className='home'>
                Please select a topic
            </p>
            <div className="navbar-home">
                <Nav topicsList={topicsListFiltered}/>
            </div>
        </div>
    )
}