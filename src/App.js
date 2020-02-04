import React, { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './styledcomponents/Button';
import Dialog from './components/Dialog';

const AppBlock = styled.div`
	width: 512px;
	margin: 0 auto;
	margin-top: 4rem;
	border: 1px solid black;
	padding: 1rem;
`;

const palette = {
	blue: '#228be6',
	gray: '#adb5bd',
	pink: '#ff8787'
};

const ButtonGroup = styled.div`
	& + & {
		margin-top: 1rem;
	}
`;

function App() {
	const [dialog, setDialog] = useState(false);
	const onClick = () => {
		setDialog(true);
	};

	const onConfirm = () => {
		console.log('확인');
		setDialog(false);
	};

	const onCancle = () => {
		console.log('취소');
		setDialog(false);
	};
	return (
		<ThemeProvider theme={{ palette }}>
			<>
				<AppBlock>
					<Button color="pink" onClick={onClick}>
						삭제
					</Button>
				</AppBlock>
				<Dialog
					title="정말로 삭제하시겠습니까?"
					cancleText="취소"
					confirmText="삭제"
					onConfirm={onConfirm}
					onCancle={onCancle}
					visible={dialog}
				>
					데이터를 정말로 삭제하시겠습니까?
				</Dialog>
			</>
		</ThemeProvider>
	);
}
export default App;
