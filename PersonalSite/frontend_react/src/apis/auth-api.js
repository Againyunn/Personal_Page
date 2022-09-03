import axios from 'axios'

const API_URL = "https://57e9b586-d33d-4caf-9871-3b20bccf8fbc.mock.pstmn.io/"

/**
 * 로그인 함수
 * @param {*} userId 
 * @param {*} password 
 * @returns 정상: userId, gender, age
 */
const login = (userId, password) => {

    return axios.get(API_URL + "login/", {
        userId, password
    }).then(
        (response) =>{
            return response;
        }
    ).catch(
        (error) =>{
            return error;
        }
    )
}

const AuthService = {
    login,
  };
export default AuthService;


