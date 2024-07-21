import './App.css';
import styled from 'styled-components';
import sprite from './assets/img/sprite.svg'
import Header from "./layout/header/header";
import {Icon} from "./components/Icon";
import Main from "./layout/sections/main/Main";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
        </div>
    );
}

export default App;
