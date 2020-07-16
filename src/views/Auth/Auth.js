import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';
import './Auth.scss';
import AuthService from '../../services/AuthService/AuthService';

const textRegex = /[\w}{!#:,.]{3,72}/gi;
const digitRegex = /\d{1,20}/
const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

function Auth({ setSocket }) {
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [so2_id, setSo2_id] = useState('');
	const [so2_nickname, setSo2_nickname] = useState('');
	const [err, setErr] = useState('');
	const [isAuthtorizing, setIsAuthtorizing] = useState(false);

	async function signUp() {
		if (
			validateSignup() ||
			!isAuthtorizing
		) {
			setIsAuthtorizing(true);
			const result = await AuthService.singup(username, password, email, so2_nickname, so2_id);

			if (result.err || result.errors) {
				setErr(result.err ? result.err : result.errors[0].msg);
				setIsAuthtorizing(false);
			} else {
				await AuthService.authorize().then((socket) => {
					console.log(socket, 'signing up');
					setSocket(socket);
				});
			}
		} else {
			console.log("cant signup")
		}
	}

	async function signIn() {
		if (validateLogin() && isAuthtorizing === false) {
			setIsAuthtorizing(true);
			const signinResult = await AuthService.signin(username, password);

			if (!signinResult.err) {
				const socket = await AuthService.authorize();
				setSocket(socket);
			} else {
				setErr(signinResult.err);
				setIsAuthtorizing(false);
			}
		}
	}

	function validateLogin() {
		if (!username.match(textRegex)) {
			setErr('Никнейм содержит запрещенные символы или слишком длинный или короткий');
			return false;
		}
		if (!password.match(textRegex)) {
			setErr('Пароль содержит запрещенные символы или слишком длинный или короткий');
			return false;
		}
	}

	function validateSignup() {
		if (!email.match(emailRegex)) {
			setErr('Email неправильного формата');
			return false;
		}
		if (!username.match(textRegex)) {
			setErr('Никнейм содержит запрещенные символы или слишком длинный или короткий');
			return false;
		}
		if (!password.match(textRegex)) {
			setErr('Пароль содержит запрещенные символы или слишком длинный или короткий');
			return false;
		}
		if (!so2_id.match(digitRegex)) {
			setErr('id может содержать только цифры или введенный id длиннее 20 символов')

			return false;
		}
		if (!so2_nickname.match(textRegex)) {
			setErr('SO2 никнейм содержит запрещенные символы или слишком длинный или короткий');

			return false;
		}

	}

	if (isLogin) {
		return (
			<div className="auth">
				<p className="topInfo">Вход</p>
				<AuthInput placeHodler="Никнейм" name="email" onChange={(e) => setUsername(e.target.value)} />
				<AuthInput placeHodler="Пароль" name="password" onChange={(e) => setPassword(e.target.value)} />

				<p className="err">{err}</p>
				<button className={`signin ${isAuthtorizing}`} onClick={() => signIn()}>
					Войти
				</button>
				<p className="alternative" onClick={() => setIsLogin(false)}>
					Нет аккаунта
				</p>
			</div>
		);
	} else {
		return (
			<div className="auth">
				<p className="topInfo">Регистрация</p>
				<AuthInput placeHodler="Email" name="new email" onChange={(e) => setEmail(e.target.value)} />
				<AuthInput placeHodler="Никнейм" name="new nickname" onChange={(e) => setUsername(e.target.value)} />
				<AuthInput placeHodler="Пароль" type="password" name="new password" onChange={(e) => setPassword(e.target.value)} />
				<AuthInput placeHodler="SO2 никнейм" onChange={(e) => setSo2_nickname(e.target.value)} />
				<AuthInput placeHodler="SO2 id" onChange={(e) => setSo2_id(e.target.value)} />

				<p className="err">{err}</p>
				<button className={`signup ${isAuthtorizing}`} onClick={() => signUp()}>
					Зарегистрироваться
				</button>
				<p className="alternative" onClick={() => setIsLogin(true)}>
					Уже есть аккаунт
				</p>
				{/* <button className={`signin ${isAuthtorizing}`} onClick={() => setIsLogin(true)}>
					Уже есть аккаунт
				</button> */}
			</div>
		);
	}
}

export default Auth;
