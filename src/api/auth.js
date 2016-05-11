/**
 * Created by steven on 16/5/11.
 */
'use strict';

var authData;

// login to wilddog.
function login() {
  return new Promise((resolve, reject) => {
    if (!authData) ref.authWithPassword({
      email: 'lxz318@aliyun.com',
      password: 'asdf'
    }, (error, data) => {// login success handler.
      if (error) {
        console.log("Login Failed!", error);
        reject();
      } else {
        console.log("Authenticated successfully!");
        resovle(data);
      }
    });
  });
}

export default function (ref) {
  authData = ref.getAuth();

  ref.onAuth((auth) => {
    if (!auth) {
      console.log('login Required!');
      // login().then(
      //   (data) => {
      //     debugger;
      //     console.log(data);
      //   },
      //   () => {
      //   }
      // );
    }
  });
}



