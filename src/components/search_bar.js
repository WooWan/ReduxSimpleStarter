import React, {Component} from 'react';
//{Component}의 의미: 앞의 React 라이브러리에서 component 프로퍼티를 가져와라
class SearchBar extends Component{

    constructor(props){
        super(props);
        //super 부모 메소드 호출
        //props와 state state는 자바스크립트 객체
        //constructor 함수 안에서만 스테이트 설정가능
        this.state={term: 'Startvalue'};
    }
    render(){
        return (
            <div>
                <input
                value={this.state.term} //제어 요소
                onChange={event => this.setState({term:event.target.value})} />       
            </div>        
        );
    }
    
    //onChange는 이벤트 감지 프로퍼티 
    //사용자 정의 함수 선언
    //class를 생성 해줄때마다 render랑 jsx를 변환해줘야한다
}

export default SearchBar;