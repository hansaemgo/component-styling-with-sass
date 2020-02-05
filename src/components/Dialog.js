import React, { useState, useEffect } from 'react';
import styled, { keyframes, css } from 'styled-components';
import Button from '../styledcomponents/Button';

// 트랜지션 구현 - 서서히 나타나는 효과 (keyframe)
const fadeIn = keyframes`
  from {
    opacity: 0
  }
  to {
    opacity: 1
  }
`;

const fadeOut = keyframes`
  from {
    opacity: 1
  }
  to {
    opacity: 0
  }
`;
// 트랜지션 구현 - 위로 올라오는 효과 (keyframe)
const slideUp = keyframes`
  from {
    transform: translateY(200px);
  }
  to {
    transform: translateY(0px);
  }
`;

const slideDown = keyframes`
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(200px);
  }
`;

// 어두운 배경 만들어주기
const DarkBackground = styled.div`
	position: fixed;
	left: 0;
	top: 0;
	width: 100%;
	height: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	background: rgba(0, 0, 0, 0.8);

	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	animation-name: ${fadeIn};
	animation-fill-mode: forwards;

	${(props) =>
		props.disappear &&
		css`
			animation-name: ${fadeOut};
		`}
`;

const DialogBlock = styled.div`
	width: 320px;
	padding: 1.5rem;
	background: white;
	border-radius: 2px;
	h3 {
		margin: 0;
		font-size: 1.5rem;
	}
	p {
		font-size: 1.125rem;
	}

	animation-duration: 0.25s;
	animation-timing-function: ease-out;
	animation-name: ${slideUp};
	animation-fill-mode: forwards;

	${(props) =>
		props.disappear &&
		css`
			animation-name: ${slideDown};
		`}
	${(props) =>
		props.disappear &&
		css`
			animation-name: ${slideDown};
		`}
`;

const ButtonGroup = styled.div`
	margin-top: 3rem;
	display: flex;
	justify-content: flex-end;
`;

// 버튼 상속받아서 간격줄이기 가능
const ShortMarginButton = styled(Button)`
	& + & {
		margin-left: 0.5rem;
	}
`;

// 다이얼로그 받아올 프롭스 설정

function Dialog({
	title,
	children,
	confirmText,
	cancelText,
	onConfirm,
	onCancel,
	visible
}) {
	const [animate, setAnimate] = useState(false);
	const [localVisible, setlocalVisible] = useState(visible);

	useEffect(() => {
		// visible true => false
		if (localVisible && !visible) {
			setAnimate(true);
			setTimeout(() => setAnimate(false), 250);
		}
		setlocalVisible(visible);
	}, [localVisible, visible]);

	if (!localVisible && !animate) return null;
	return (
		<DarkBackground disappear={!visible}>
			<DialogBlock disappear={!visible}>
				<h3>{title}</h3>
				<p>{children}</p>
				<ButtonGroup>
					<ShortMarginButton color="gray" onClick={onCancel}>
						{cancelText}
					</ShortMarginButton>
					<ShortMarginButton color="pink" onClick={onConfirm}>
						{confirmText}
					</ShortMarginButton>
				</ButtonGroup>
			</DialogBlock>
		</DarkBackground>
	);
}

Dialog.defaultProps = {
	confirmText: '확인',
	cancelText: '취소'
};

export default Dialog;
