import React, {Component} from 'react';

class Title_btn extends Component{
	render(){
		return (
			<button onClick={function(e){
                this.props.onChangePage();
            }.bind(this)}>타이틀 바꾸기</button>
		);
	}
}

export default Title_btn;