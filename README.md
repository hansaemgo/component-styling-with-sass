### 01. Sass

    - Syntactically Awesome Style Sheets : 문법적으로 짱 멋진 스타일 시트
    - 두가지의 확장자 지원 (.scss/.sass)
    - 문법
        1. $blue: #556677; 과같이 변수 선언 가능
        2. &:hover { background : lighten($blue, 10%) } : 호버시 10%밝게
        3. $ 사인은 자기자신을 가르킴
        4. darken() 도 가능

### 02. button size props 설정

    - size, color, outline fullwidth, mixin
      1. <button className={['Button', size].join(' ')}>
        => className = "button small"
      2. <button className={`Button ${size}`}>
      3. 조건부 스타일링 할때 쉽게 할 수 있도록 도와주는 라이브러리 classNames (클래스 네임 값 쉽게 만들어줌)
      4. className ={className('Button' size)}
      5. 마지막 디폴트값 설정 ( defaultProps)
      6. 반복되는 코드 = @mixin 으로만들어서 @include로 사용
      7. outline, fullwidth : true, false 에 따라 바뀌기 때문에 객체 형태로 넣어준다.

    - rest Props  전달
        1. 필요한 이벤트가 있을때 마다 넣어주는 불편함 해결 (ex: onClick onMouseMove)
        2. ...rest 로 전달

    - 클래스 이름이 겹치지 않게 하는 방법
        1. 컴포넌트의 이름을 고유하게 지정
        2. 최상위 엘레먼트의 클레스 이름을 컴포넌트 이름과 같게
        3. 그 내부에서 셀렉터 사용

### 03. CSS Module

    - 컴포넌트 스타일링 할때 CSS Module 사용하면 class중첩되는 것을 완벽히 방지할 수 있다
    - CSS 파일의 확장자를 .module.css로 하면 된다.
    - 다음과 같은 상황에 유용
        1. 레거시 프로젝트에 래약트 도입할때
        2. CSS 클래스 네이밍 규직 만들기 귀찮을 때

### 04. styled component

    - yarn add styled-components
    - 여러줄의 CSS코드를 조건부로 보여주고 싶다면 {css} 추가

### 05. styled component로 재사용성 높은 버튼 만들기

    -polished 라이븨러리 설치
    - ${props.size === 'large && css` ..... } 이런식으로 medium, small
    - outline 값은  false or true
