import http from 'k6/http';
import { check, group, sleep, fail } from 'k6';

export let options = {
	stages: [
	    { target: 2, duration: "1m" },
	],

	thresholds: {
	'http_req_duration': ['p(100)<1000'], // 100% of requests must complete below 1s
	}
};


//smoke test
export default function() {

	http.get('http://test.k6.io');
	sleep(1);

}