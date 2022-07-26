# api-gateway

An API Gateway Built on Cloudflare Workers, Durable Objects, and Service Bindings

Start by creating a new repo from this template here.

Then, update `wrangler.toml`
```
[vars]
AUTH_REQUIRED = true
LOGGING_ENABLED = true
LOG_REQUEST_BODY = true
LOG_RESPONSE_BODY = true
SUBSCRIPTION_REQUIRED = true
STRIPE_CHECKOUT_URL = "https://buy.stripe.com/eVa03Y5Su8p51Xi5ku"
```
