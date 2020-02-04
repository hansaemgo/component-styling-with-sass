import React from 'react';
import styled from 'styled-components';
import Button from '../styledcomponents/Button';

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
	background: rgba(0, 0, 0, 0.5);
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
	cancleText,
	visible,
	onConfirm,
	onCancle
}) {
	if (!visible) return null;
	return (
		<DarkBackground>
			<DialogBlock>
				<h3>{title}</h3>
				<p>{children}</p>
				<ButtonGroup>
					<ShortMarginButton color="gray" onClick={onCancle}>
						{cancleText}
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
	cancleText: '취소',
	confirmText: '확인'
};

export default Dialog;
