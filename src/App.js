import React from 'react';
import './App.scss';
import Button from './components/Button';

function App() {
	return (
		<div className="App">
			<div className="Buttons">
				<Button size="large">Button</Button>
				<Button>Button</Button>
				<Button size="small">Button</Button>
			</div>
			<div className="Buttons">
				<Button color="gray" size="large">
					Button
				</Button>
				<Button color="gray">Button</Button>
				<Button color="gray" size="small">
					Button
				</Button>
			</div>
			<div className="Buttons">
				<Button color="orange" size="large">
					Button
				</Button>
				<Button color="orange">Button</Button>
				<Button color="orange" size="small">
					Button
				</Button>
			</div>
			<div className="Buttons">
				<Button color="orange" outline size="large">
					Button
				</Button>
				<Button color="orange" outline>
					Button
				</Button>
				<Button color="orange" size="small" outline>
					Button
				</Button>
			</div>
			<div className="Buttons">
				<Button fullwidth>Button</Button>
				<Button color="orange" fullwidth>
					Button
				</Button>
				<Button
					color="gray"
					fullwidth
					onClick={() => console.log('클릭')}
				>
					Button
				</Button>
			</div>
		</div>
	);
}

export default App;
