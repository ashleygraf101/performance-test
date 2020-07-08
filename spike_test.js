import http from 'k6/http';
import { sleep } from 'k6';

export let options = {
  stages: [
        // double capacity
        { vus: 1200, duration: "10m" },
        { target: 1200, duration: "1h" },
        { target: 0, duration: "10m" },
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
    ],
  ]);

  sleep(1);
}