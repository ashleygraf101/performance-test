import http from 'k6/http';
import { check, group, sleep } from "k6";
import { Counter, Rate, Trend } from "k6/metrics";


const loginData = JSON.parse(open("./users.json"));  // download the data file here: https://test.k6.io/static/examples/users.json

export let options = {
    stages: [
        // stress test
        { target: 900, duration: "10m" },
        { target: 900, duration: "10m" },
        { target: 0, duration: "5m" },

    ],
    thresholds: {
        "http_req_duration": ["p(98)<5000"],
        "http_req_duration": ["p(95)<1500"],
    },
};

export default function () {
  const BASE_URL = 'https://test-api.k6.io'; // make sure this is not production

  let responses = http.batch([
    [
      'GET',
      `${BASE_URL}/public/crocodiles/`,
      null,
      { tags: { name: 'PublicCrocs' } },
    ]
  ]);

  sleep(1);

};