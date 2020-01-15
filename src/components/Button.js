import React from 'react';
import classNames from 'classnames';
import './Button.scss';


// 다양한 버튼 크기 만들기
// large, medium, small
// 다양한 버튼 컬러 생성
// color: blue, pink, gray

function Button({children, size, color, outline, fullWidth, onClick, onMove }) {
    return (
    <button className ={classNames('Button', size, color, {
        outline,
        fullWidth
    })}
    onClick={onClick}>{children}</button>
    )
};

Button.defaultProps = {
    size : 'medium',
    color: 'blue'
};


export default Button;

// 템플릿 리터럴  template literal
// {{`Button ${size`}} -> 조건마다 추가해 줘야 해서 번거로움
// 라이브러리 사용 : classNames (yarn add classNames)