import TopNavigation from './TopNavigation';
import { BsPlusCircleFill } from 'react-icons/bs';
import { Switch , Route} from "react-router-dom"
// import { useState } from 'react';

const ContentContainer = () => {
  return (
    <div className='content-container'>
      <TopNavigation />
      <div className='content-list'>
          <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route path="/settings">
                <Settings/>
            </Route>
            <Route path="/moon">
                <Moon/>
            </Route>
            <Route path="/feed">
                <Feed/>
            </Route>
            <Route path="/double">
                <Double/>
            </Route>
          </Switch>
       </div>
    </div>
  );
};

  function Home() {
    return <h2>Home</h2>;
  }
  
  function Settings() {
    return <h2>Settings</h2>;
  }
  
  function Double() {
    return <h2>Double</h2>;
  }

  function Feed() {
      return <h2>Feed</h2>
  }

  function Moon() {
    return <h2>Moon</h2>
}

const BottomBar = () => (
  <div className='bottom-bar'>
    <PlusIcon />
    <input type='text' placeholder='Enter message...' className='bottom-bar-input' />
  </div>
);

const Post = ({ name, timestamp, text }) => {

  const seed = Math.round(Math.random() * 100);
  return (
    <div className={'post'}>
      <div className='avatar-wrapper'>
        <img src={`https://avatars.dicebear.com/api/open-peeps/${seed}.svg`} alt='' className='avatar' />
      </div>

      <div className='post-content'>
        <p className='post-owner'>
          {name}
          <small className='timestamp'>{timestamp}</small>
        </p>
        <p className='post-text'>{text}</p>
      </div>
    </div>
  );
};

const PlusIcon = () => (
  <BsPlusCircleFill
    size='22'
    className='text-green-500 dark:shadow-lg mx-2 dark:text-primary'
  />
);

export default ContentContainer;