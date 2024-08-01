import './App.css';
import styled from 'styled-components';
import sprite from './assets/img/sprite.svg'
import Header from "./layout/header/header";
import {Icon} from "./components/Icon";
import Main from "./layout/sections/main/Main";
import {BackgroundBar} from "./components/BackgroundBar";
import {Skills} from "./layout/sections/skills/Skills";
import {Projects} from "./layout/sections/Projects/projects";
import {AboutMe} from "./layout/sections/aboutMe/aboutMe";
import {Footer} from "./layout/FOOTER/footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <AboutMe/>
            <Skills/>
            <Projects/>
            <Footer/>

        </div>
    );
}

export default App;
