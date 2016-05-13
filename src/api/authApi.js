/**
 * Created by steven on 16/5/11.
 */
'use strict';

export default function (ref) {
  let authData;
  // login to wilddog.
  const signIn = (email, password) => {
    return new Promise((resolve, reject) => {
      let authData = ref.getAuth();
      if (authData) resolve(authData);
      ref.authWithPassword({
        email,
        password
      }, (error, data) => {// login success handler.
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

  const signOut = () => {
    return new Promise(function (resolve, reject) {
      ref.unauth();
      resolve();
    });
  };

  return {
    signIn,
    signOut
  };
}

