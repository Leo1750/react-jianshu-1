import axios from 'axios';
import * as constants from './constants.js';

const changeLogin = () => ({
	type: constants.CHANGE_LOGIN,
	value: true
})

export const login = (accout, password) => {
	return (dispatch) => {
		axios.get('/react-jianshu-1/api/login.json?account=' + accout + '&password=' + password).then((res) => {
			const result = res.data.data;
			if (result) {
				dispatch(changeLogin())
			}else {
				alert('登陆失败')
			}
		})
	}
}
//  点击退出修改数据
export const logout = () => ({
	type: constants.LOGOUT,
	value: false
})