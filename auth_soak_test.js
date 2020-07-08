import http from 'k6/http';
import {check, group, sleep, fail} from 'k6';

export let options = {
  stages: [
        // soak test
        { target: 800, duration: "10m" },
        { vus: 800, duration: "1h" },
        { target: 0, duration: "2m" },

  ],
};

 function randomString(length) {
    const charset = 'abcdefghijklmnopqrstuvwxyz';
    let res = '';
    while (length--) res += charset[Math.random() * charset.length | 0];
    return res;
  }

  const USERNAME = `${randomString(10)}@example.com`;  // Set your own email or `${randomString(10)}@example.com`;
  const PASSWORD = 'superCroc2020';
  const BASE_URL = 'https://test-api.k6.io';

  export function setup() {
    // register a new user and authenticate via a Bearer token.
    let res = http.post(`${BASE_URL}/user/register/`, {
      first_name: 'Crocodile',
      last_name: 'Owner',
      username: USERNAME,
      password: PASSWORD,
    });

    check(res, { 'created user': (r) => r.status === 201 });

    let loginRes = http.post(`${BASE_URL}/auth/token/login/`, {
      username: USERNAME,
      password: PASSWORD
    });

    let authToken = loginRes.json('access');
    check(authToken, { 'logged in successfully': () => authToken !== '', });

    return authToken;
  }

export default (authToken) => {
    const requestConfigWithTag = tag => ({
      headers: {
        Authorization: `Bearer ${authToken}`
      },
      tags: Object.assign({}, {
        name: 'PrivateCrocs'
      }, tag)
    });

  sleep(1);

}