import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
    // simulate a normal day
    { duration: '10m', target: 400 }, 
    { duration: '10m', vus: 700 }, 
    { duration: '10m', target: 0 }, 
  ],
  thresholds: {
      "http_req_duration": ["p(99)<5000"],
      "http_req_duration": ["p(95)<2000"],
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