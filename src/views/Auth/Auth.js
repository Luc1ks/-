import React, { useState } from 'react';
import AuthInput from '../../components/AuthInput/AuthInput';
import './Auth.scss'

function Auth({ setSocket }) {
	const [isLogin, setIsLogin] = useState(false);

	if (isLogin) {
		return (
			<div className="auth">
				<AuthInput placeHodler="Никнейм" />
				<AuthInput placeHodler="Пароль" />

				<button className="signin">Войти</button>
				<button className="signup" onClick={() => setIsLogin(false)}>
					Нет аккаунта
				</button>
			</div>
		);
	} else {
		return (
			<div className="auth">
				<AuthInput placeHodler="Email" />
				<AuthInput placeHodler="Никнейм" />
				<AuthInput placeHodler="Пароль" />
				<AuthInput placeHodler="Повтори пароль" />
				<AuthInput placeHodler="SO2 никнейм" />
				<AuthInput placeHodler="SO2 id" />

				<button className="signup">Зарегистрироваться</button>
				<button className="signin" onClick={() => setIsLogin(true)}>
					Уже есть аккаунт
				</button>
			</div>
		);
	}
}

export default Auth;
