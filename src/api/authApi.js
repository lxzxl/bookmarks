/**
 * Created by steven on 16/5/11.
 */
'use strict';

export default function (ref) {
  let authData;
  // login to wilddog.
  const login = () => {
    return new Promise((resolve, reject) => {
      ref.authWithPassword({
        email: 'lxz318@aliyun.com',
        password: 'asdf'
      }, (error, data) => {// login success handler.
        debugger;
        if (error) {
          console.log("Login Failed!", error);
          reject('Login Failed!');
        } else {
          console.log("Authenticated successfully!");
          resolve(data);
        }
      });
    });
  };

  const isAuthenticated = () => {
    authData = ref.getAuth();
    return !!authData;
  };

  return {
    login,
    isAuthenticated
  };
}

