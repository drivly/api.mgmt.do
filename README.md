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

## Roadmap of Drivly APIs

### Primitives

### Security

### Database

### Data Transformation

- transform.do
- mashup.do

### Automotive Data

- makes.api.auto.dev - 
- vin.api.auto.dev - 
- listings.api.auto.dev - 


### Horizontal Services

- notary.do - Remote Online Notary
- poa.do - Power of Attorney

### Automotive Services

- inspection.api.driv.ly - Build a new vehicle
- transport.api.driv.ly - Transport a vehicle
- finance.api.driv.ly - Finance a vehicle
- insurance.api.driv.ly - Insure a vehicle

### Automotive Commerce

- build.api.driv.ly - Build a new vehicle
- buy.api.driv.ly - Buy a new or used vehicle
- sell.api.driv.ly - Sell a new or used vehicle

 



This was built to manage the [Driv.ly](https://driv.ly) API which gets millions of calls per day.


## [🚀 We're hiring!](https://careers.do/apply)
[Driv.ly](https://driv.ly) is simple APIs to buy & sell cars online, funded by some of the [biggest names](https://twitter.com/TurnerNovak) in [automotive](https://fontinalis.com/team/#bill-ford) and [finance & insurance](https://www.detroit.vc)

We're building our entire infrastructure on Cloudflare Workers, Durable Objects, KV, R2, and PubSub.  If you're as passionate about these transformational technologies as we are, we'd love for you to join our rapidly-growing team.
