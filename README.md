## Performance test

Numbers are a scaled down version of my prediction of Showpo's traffic numbers - 10%. I assume that the system can comfortably cope with 8000 concurrent users, to accommodate for spikes from email marketing campaigns, social media marketing, and press coverage.

Typically, members will add more items to cart and have a higher conversion rate.

### Smoke test

Two concurrent users. 
O errors.
100% of requests finish within 1 second.

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

Gradually ramps up to 7,000 concurrent users. 
99% of requests should finish within 5000ms
95% of requests should finish within 2000ms.
99% users should be able to login successfully on the first try.


### Load - guest users: peak load

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

90,000 users in 9 hours.
70,000 users searching through 7 pages in 9 hours.
7,500 transactions in 9 hours. 

98% of requests should finish within 5000ms.
95% of requests should finish within 1500ms.


### Soak test

8,000 concurrent users.