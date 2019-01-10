import React, { Component } from 'react';
import GlobalStyle from './Global';
import StyledHeader from './layouts';
import { Button, Card } from './elements';
import { ThemeProvider } from 'styled-components/macro';

const theme = {
	colors: {
		primary: '#E54B4B',
		secondary: '#DBDE61',
	},
};

const themeTwo = {
	colors: {
		primary: '#524763',
		secondary: '#82D8D8',
	},
};

class App extends Component {
	render() {
		return (
			<ThemeProvider theme={theme}>
				<div>
					<StyledHeader />
					<GlobalStyle />
					<main
						css={`
							background: red;
							h2 {
								font-size: 100px;
							}
						`}
					>
						<Button>Say Hello</Button>
						<ThemeProvider theme={themeTwo}>
							<Card>
								<h2>Card Heading</h2>
								<Card.Button modifiers="cancel">Say Hello</Card.Button>
								<Card.Button as="a">Say Hello</Card.Button>
							</Card>
						</ThemeProvider>
						{/* <Button modifiers="cancel">Don't Say Hello</Button>
					<Button modifiers="small">Say Hello</Button>
					<Button modifiers={['cancel', 'small']}>Don't Say Hello</Button> */}
					</main>
				</div>
			</ThemeProvider>
		);
	}
}

export default App;
