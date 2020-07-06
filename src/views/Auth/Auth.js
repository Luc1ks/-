import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';
import './Auth.scss';
import AuthService from '../../services/AuthService/AuthService';

function Auth({ setSocket }) {
	const [isLogin, setIsLogin] = useState(false);
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [username, setUsername] = useState('');
	const [so2_id, setSo2_id] = useState('');
	const [so2_nickname, setSo2_nickname] = useState('');
	const [err, setErr] = useState('');

	async function signUp() {
		if (
			email.length > 2 &&
			username.length > 2 &&
			password.length > 2 &&
			so2_id.length > 2 &&
			so2_nickname.length > 2
		) {
			const result = await AuthService.singup(username, password, email, so2_nickname, so2_id);
			
			if (result.err) {
				setErr(result.err);
			} else {
				await AuthService.authorize().then((socket) => {
					console.log(socket, 'signing up')
					setSocket(socket)
				});
			}
		} else {
			setErr('Минимальная длинна каждого поля 2 символа');
		}
	}

	if (isLogin) {
		return (
			<div className="auth">
				<AuthInput
					placeHodler="Никнейм"
					name="email"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<AuthInput
					placeHodler="Пароль"
					name="password"
					onChange={(e) => setUsername(e.target.value)}
				/>

				<p className="err">{err}</p>
				<button className="signin">Войти</button>
				<button className="signup" onClick={() => setIsLogin(false)}>
					Нет аккаунта
				</button>
			</div>
		);
	} else {
		return (
			<div className="auth">
				<AuthInput
					placeHodler="Email"
					name="new email"
					onChange={(e) => setEmail(e.target.value)}
				/>
				<AuthInput
					placeHodler="Никнейм"
					name="new nickname"
					onChange={(e) => setUsername(e.target.value)}
				/>
				<AuthInput
					placeHodler="Пароль"
					name="new password"
					onChange={(e) => setPassword(e.target.value)}
				/>
				<AuthInput
					placeHodler="SO2 никнейм"
					onChange={(e) => setSo2_nickname(e.target.value)}
				/>
				<AuthInput placeHodler="SO2 id" onChange={(e) => setSo2_id(e.target.value)} />

				<p className="err">{err}</p>
				<button className="signup" onClick={() => signUp()}>Зарегистрироваться</button>
				<button className="signin" onClick={() => setIsLogin(true)}>
					Уже есть аккаунт
				</button>
			</div>
		);
	}
}

export default Auth;
