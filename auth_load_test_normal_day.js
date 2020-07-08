import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    // simulate a normal day
    { duration: '10m', target: 40 }, 
    { duration: '10m', target: 70 }, 
    { duration: '10m', target: 80 }, 
    { duration: '10m', target: 100 },
    { duration: '10m', target: 158 },
    { duration: '10m', target: 211 },
    { duration: '10m', target: 233 },
    { duration: '10m', target: 244 },
    { duration: '10m', target: 253 },
    { duration: '10m', target: 280 },
    { duration: '10m', target: 355 },
    { duration: '10m', target: 340 },
    { duration: '10m', target: 250 },
    { duration: '10m', target: 255 },
    { duration: '10m', target: 253 },
    { duration: '10m', target: 200 },
    { duration: '10m', target: 158 },
    { duration: '10m', target: 158 },
    { duration: '10m', target: 130 },
    { duration: '10m', target: 80 },
    { duration: '10m', target: 60 },
    { duration: '10m', target: 50 },
    { duration: '10m', target: 30 },
    { duration: '10m', target: 20 },
  ],
  thresholds: {
      "http_req_duration": ["p(99)<5000"],
      "http_req_duration": ["p(95)<2000"],
  },
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