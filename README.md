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

## Drivly API Roadmaps

### The Jeff Bezos API Mandate
> 1. All teams will henceforth expose their data and functionality through service interfaces.
> 2. Teams must communicate with each other through these interfaces.
>    ...
> 5. All service interfaces, without exception, must be designed from the ground up to be externalizable. That is to say, the team must plan and design to be able to expose the interface to developers in the outside world. No exceptions.
> 6. Anyone who doesn’t do this will be fired.
> 7. Thank you; have a nice day!

### Primitives

- alarms.do
- alerts.do
- bindings.do - Service Binding Proxy Mesh
- counts.do - 
- cname.do - 
- events.do -
- ddns.do - Dynamic DNS Service
- debug.do - 
- decode.do - 
- fetch.do
- hostname.do
- lists.do
- lodash.do
- modules.do
- obj.do
- pkg.do 
- queue.do - FIFO implementation on Durable Objects
- stacks.do - LIFO implementation on Durable Objects
- repo.do
- rewrites.do
- schema.do
- swr.do - Stale While Refresh Cached Proxy
- webhooks.do
- zones.do

### Utilities

- api.qa - Hypermedia-driven Automated API Testing
- benchmark.do
- colo.do 
- cors.do - CORS API Proxy
- logs.do

### APIs

- apikeys.do
- crud.do - Dynamic Hypermedia-driven RESTful CRUD APIs
- rate.limit.do

### Security

- jwt.do
- keys.do
- oauth.do

### Database

- graphdl.org
- graph.do
- database.do
- backups.do
- imports.do
- exports.do
- bases.do - Airtable Base API Proxy to manage Airtable Rate Limits and prevent data loss
- sheet.do

### Data Transformation

- transform.do
- mashup.do
- scraper.do

### Communication

- emails.do
- texts.do
- discord.do
- slack.do
- drip.do

### Integration

- zaps.do - 

### Storage

- bucket.do

### Analytics

- analytics.do

### Workflows

- approvals.do
- flows.do
- workflows.do

### Product 

- features.do
- flags.do
- products.do

### Websites

- blogs.do
- content.do
- landing.do
- pages.do
- sites.do

### Marketing 

- hunts.do - Product Hunt Launch Automation
- flags.do
- waitlist.do

### Open Source

- sponsors.do

### Startups

- startups.do
- drip.do
- interns.do
- careers.do
- monetize.do
- okr.do
- id8.do - Ideation tracking

### SaaS

- c

### Automotive Data

- dealers.do
- lenders.do
- listings.do
- makes.api.auto.dev - 
- vin.api.auto.dev - 
- listings.api.auto.dev - 


### Horizontal Services

- turk.do - Mechanical Turks API
- concierge.do - 
- checkout.do - Dynamic Checkout Redirection
- esignatures.do - Simple 
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
