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
      "http_req_duration": ["p(95)<3000"],
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
}