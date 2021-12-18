import React from 'react';
import {
    FaSearch,
    FaHashtag,
    FaRegBell,
    FaUserCircle,
    FaMoon,
    FaSun,
  } from 'react-icons/fa';
import { connect } from 'react-redux';
  import useDarkMode from '../hooks/useDarkMode';
  
  const mapStateToProps = state => ({
    value: state.currentMoney,
})



  const Navigation = (value:any) => {
    console.log(value);
    return (
      <header className='top-navigation'>
        <ThemeIcon />
        <BellIcon />
        <UserCircle />
        <div className="balance">{value.value + '$'}</div>
      </header>
    );
  };

  const TopNavigation = connect(mapStateToProps)(Navigation);
  
  const ThemeIcon = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
    return (
      <span onClick={handleMode}>
        {darkTheme ? (
          <FaSun size='24' className='top-navigation-icon' />
        ) : (
          <FaMoon size='24' className='top-navigation-icon' />
        )}
      </span>
    );
  };
  
  const Search = () => (
    <div className='search'>
      <input className='search-input' type='text' placeholder='Search...' />
      <FaSearch size='18' className='text-secondary my-auto' />
    </div>
  );
  const BellIcon = () => <FaRegBell size='24' className='top-navigation-icon' />;
  const UserCircle = () => <FaUserCircle size='24' className='top-navigation-icon' />;
  const HashtagIcon = () => <FaHashtag size='20' className='title-hashtag' />;
  const Title = () => <h5 className='title-text'>tailwind-css</h5>;
  
  export default TopNavigation;