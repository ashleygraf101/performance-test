## Performance test study

TODO: Add tests for rate of successful logins for auth tests

### How to use

Install k6

	npm add k6
	yarn install k6

Run tests

	k6 run test_name.js

## Thinking

Numbers in these tests are a scaled down version of my prediction of Showpo's traffic numbers - 10%. I have used test-k6 with these scaled down numbers because I do not wish to crash ShowPo. 

I assume that ShowPo's system can comfortably cope with 8000 concurrent users, to accommodate for spikes from email marketing campaigns, social media marketing, and press coverage.

This is not a full-scale load test. It follows two use cases: signing in, and viewing a home page.

I used $100 million in projected revenue for 2020 and a 8% conversion rate as my guide to this number to find a baseline, as well as an average order value of $90. 

The typical ecommerce fashion and apparel website, according to Fireclick Index, has a 7.2% conversion rate. My thinking is that ShowPo is a higher performer, due to growing with their customers over the years through social media marketing.

SimilarWeb say they get 1.01 million visits a year, with 5.8 pages a visit, an 8 minute long visit, and a 49.8% bounce rate. I think 1.01 million visits is a little of an underestimation, but the rest of the numbers look about right. 

The Performance SLAs I have used are based on e-commerce industry benchmarks. 

As their main European market is the UK, I assume that the bulk of their traffic is from 18 hours of the day, starting from NZ waking hours rolling over to the UK early evening hours.  

Reliability testing is new to me, so in this section I’m just going to throw out a few ideas based on the calculations above.

Expected outcome is based on the ecommerce expectation of five nines uptime, especially for a company like ShowPo.

### Smoke test

Two concurrent users. 

0 errors.

100% of requests finish within 1000ms.

### Load - authenticated: typical load

38,051 users over 24 hours, the majority over 18 hours.

10,651 adds to cart.

3,044 transactions.

Averaging 3200 concurrent users.

99% of requests should finish within 5000ms.

95% of requests should finish within 1000ms.

99% users should be able to login successfully on the first try.


### Load - guest users: typical load

38,051 users over 24 hours, the majority over 18 hours.

10,651 adds to cart.

3,044 transactions.

Averaging 3200 concurrent users.

99% of requests should finish within 5000ms.

95% of requests should finish within 1000ms.


### Load - authenticated: peak load

Estimation of concurrent users during sales launches. I think 7000 to 15000. I've used the lower limit for this.

Gradually ramps up to 7,000 concurrent users. 

99% of requests should finish within 5000ms.

95% of requests should finish within 2000ms.

99% users should be able to login successfully on the first try.


### Load - guest users: peak load

Estimation of concurrent users during sales launches. I think 7000 to 15000. I've used the lower limit for this.

Gradually ramps up to 7,000 concurrent users. 

99% of requests should finish within 5000ms.

95% of requests should finish within 2000ms.

### Spike test

12,000 concurrent users in 5 minutes.

60,000 home page loads in 10 minutes.

20,000 adds to cart in 20 minutes.

2,000 transactions in 10 minutes.

99% of requests should finish within 5000ms.

95% of requests should finish within 3000ms.

### Stress test

Ramping up to 8,000 concurrent users.

98% of requests should finish within 5000ms.

95% of requests should finish within 1500ms.


### Soak test

8,000 concurrent users everr hour for 9 hours.

70,000 users searching through 7 pages in 9 hours.

7,500 transactions in 9 hours. 

98% of requests should finish within 5000ms.

95% of requests should finish within 1500ms.
