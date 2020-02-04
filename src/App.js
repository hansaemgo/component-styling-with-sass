import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import Button from './styledcomponents/Button';

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
	return (
		<ThemeProvider theme={{ palette }}>
			<AppBlock>
				<ButtonGroup>
					<Button size="large">Button</Button>
					<Button color="gray">Button</Button>
					<Button size="small" color="pink">
						Button
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button size="large" outline>
						Button
					</Button>
					<Button color="gray" outline>
						Button
					</Button>
					<Button size="small" color="pink" outline>
						Button
					</Button>
				</ButtonGroup>
				<ButtonGroup>
					<Button size="large" fullwidth>
						Button
					</Button>
					<Button color="gray" size="large" fullwidth>
						Button
					</Button>
					<Button color="pink" size="large" fullwidth>
						Button
					</Button>
				</ButtonGroup>
			</AppBlock>
		</ThemeProvider>
	);
}
export default App;
