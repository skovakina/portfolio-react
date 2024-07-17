import React, { useState, useEffect } from 'react';
// import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import About from './components/About';
import BurgerBtn from './components/BurgerBtn';
import Navbar from './components/Navbar';
import ProjectList from './components/ProjectList';
import Button from './components/ButtonMain';

const App = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedCategory, setSelectedCategory] = useState('All');

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const togglePopup = () => {
    setIsVisible(!isVisible);
  };

  const handleSetCategory = (category) => {
    setSelectedCategory(category);
    console.log(category);
  };

  return (
    <div className="app">
      <header className="header">
        <div className="header__logo">
          <img className="header__logo-img" src="./assets/images/logo.png" alt="logo" />
          <p>svetlana kovakina</p>
          {windowWidth <= 500 && <BurgerBtn onClick={togglePopup} />}
        </div>
        {isVisible || windowWidth > 500 ? (
          <div className="header__about">
            <About />
            <Navbar className="nav" />
          </div>
        ) : null}
      </header>

      <main className="main">
        <div className="main__header">
          <Button text={'All'} action={() => handleSetCategory('All')} icon={'../assets/images/download-cloud.png'} category={selectedCategory} />
          <Button
            text={'Development'}
            action={() => handleSetCategory('Development')}
            icon={'../assets/images/download-cloud.png'}
            category={selectedCategory}
          />
          <Button
            text={'Design'}
            action={() => handleSetCategory('Design')}
            icon={'../assets/images/download-cloud.png'}
            category={selectedCategory}
          />
        </div>

        <ProjectList windowWidth={windowWidth} selectedCategory={selectedCategory} />
        {/* {windowWidth > 500 && (
          <Link className="main__header" to="/">
            My projects
          </Link>
        )} */}
        {/* 
        <Switch>
          <Route path="/" exact>
            {(props) => <props.Component windowWidth={windowWidth} selectedCategory={selectedCategory} />}
          </Route>
        </Switch> */}
      </main>

      <footer className="footer">
        <p>2024 © Svetlana Kovakina</p>
      </footer>
    </div>
  );
};

export default App;
