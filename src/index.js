//Create a new Component. This component should produce
import ReactDOM from 'react-dom';
import React from 'react';
import SearchBar from './components/search_bar';
const API_KEY = 'AIzaSyCUKZwcpomrkOozjgKGumbeA_-Cu-z1Jjg';
const { divide } = require('lodash')

//some HTML
const App =() => {//화살표는 함수 정의와 동일하다
    return (
        <div>
            <SearchBar />
        </div>
    )
    
    //jsx html을 js에 쓸수 있도록 사용
    //jsx의 목적 : html로 변환되어 페이지의 dom으로 삽입
}

// dom에 렌더링하기 전에 컴포넌트(클래스)를 인스턴스화해야한다
//<App></App> 이런식으로도 가능
ReactDOM.render(<App />,document.querySelector('.container'));
//render은 넘기는 요소와 어디에 넘길지도 설정해주어야한다

// Take this component's generated HTML and pui it
//on page