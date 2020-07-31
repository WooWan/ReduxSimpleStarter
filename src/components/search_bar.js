import React, {Component} from 'react';
//{Component}의 의미: 앞의 React 라이브러리에서 component 프로퍼티를 가져와라
class SearchBar extends Component{
    render(){
        return <input onChange={event => console.log(event.target.value)} />
    }
    
    //onChange는 이벤트 감지 프로퍼티 
    //사용자 정의 함수 선언
    //class를 생성 해줄때마다 render랑 jsx를 변환해줘야한다
}

export default SearchBar;