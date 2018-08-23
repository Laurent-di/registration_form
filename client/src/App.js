import React, {Component} from 'react';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import {ValidatorForm, TextValidator} from 'react-material-ui-form-validator';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import './scss/stylesheet.scss';


function Transition(props) {
	return <Slide direction="up" {...props} />;
}

class App extends Component {
	constructor(props) {
		super(props);
		this.state = {
			formData: {
				username: '',
				password: '',
			},
			submitted: false,
			open: false,
		};
		this.handleChange = this.handleChange.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	};

	handleChange(event) {
		const {formData} = this.state;
		formData[event.target.name] = event.target.value;
		this.setState({formData});
	}

	handleSubmit() {
		this.setState({submitted: true}, () => {
			setTimeout(() => this.setState({submitted: false}), 5000);
		});
		this.handleClickOpen();
	}

	handleClickOpen = () => {
		this.setState({open: true});
	};

	handleClose = () => {
		this.setState({open: false});
	};


	render() {
		const {formData, submitted} = this.state;
		return (
			<ValidatorForm
				onSubmit={this.handleSubmit}
			>
				<div className="wrap">
					<Paper className="auth">
						<div className="header">
							<div className="header__icon"></div>
							<div className='header__title'>
								<h3 className='header__info'>Swedavia</h3>
								<p className='header__sub'>Swedish airports</p>
							</div>
						</div>
						<TextValidator
							onChange={this.handleChange}
							className='input-text-field'
							name="username"
							label="Username"
							value={formData.username}
							validators={['required']}
							errorMessages={['this field is required']}
						/>
						<TextValidator
							onChange={this.handleChange}
							className='input-text-field'
							name="password"
							label="Password"
							type="password"
							value={formData.password}
							validators={['required']}
							errorMessages={['this field is required']}
						/>
						<div className='footer'>
							<Button
								label="Login"
								className="footer__submit"
								style={{float: 'left', margin: '15px 0 0', background: '#FF1493'}}
								type='submit'
								disabled={submitted}
							>
								{
									(submitted && 'Форма отправлена!')
									|| (!submitted && 'Отправить')
								}
							</Button>
							<div className='footer__forgot-pass'>
								<a href="#">Forgot password ?</a>
							</div>
							<Dialog
								open={this.state.open}
								onEnter={this.props.handleSubmit}
								TransitionComponent={Transition}
								keepMounted
								onClose={this.handleClose}
								aria-labelledby="alert-dialog-slide-title"
								aria-describedby="alert-dialog-slide-description"
							>
								<DialogTitle id="alert-dialog-slide-title">
									{"Welcome to our site !"}
								</DialogTitle>
								<DialogContent>
									<DialogContentText id="alert-dialog-slide-description">
										Dear, {formData.username}.
									</DialogContentText>
								</DialogContent>
								<DialogActions>
									<Button onClick={this.handleClose} color="primary">
										Ok
									</Button>
								</DialogActions>
							</Dialog>
						</div>
					</Paper>
				</div>
			</ValidatorForm>
		);
	}
}

export default App;
