# Cloudflare Workers API Gateway

An API Gateway Built on Cloudflare Workers, Durable Objects, and Service Bindings

Start by creating a new repo from this template here.

Then, update `wrangler.toml` with your desired configuration:
```
[vars]
AUTH_REQUIRED = true
LOGGING_ENABLED = true
LOG_REQUEST_BODY = true
LOG_RESPONSE_BODY = true
SUBSCRIPTION_REQUIRED = true
STRIPE_CHECKOUT_URL = "https://buy.stripe.com/eVa03Y5Su8p51Xi5ku"
```

This was built by [@NathanClevenger](https://github.com/nathanclevenger) to manage the [Driv.ly](https://driv.ly) API which gets millions of calls per day.


## We're [hiring](https://driv.ly)! 🏎️ 🔥 🚀
If you love Cloudflare Workers, and want to join a developer-first VC-funded startup on a mission to disrupt the $3.6 trillion automotive industry at the intersection of Auto Commerce, FinTech, and InsureTech, with a simple unified API to buy and sell cars online, please connect with us [here](https://driv.ly)
