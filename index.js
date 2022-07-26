export default {
  fetch: (req, env, ctx) => {
    const dsn = env.SENTRY_DSN
    const sentry = new Toucan({ dsn, ctx, req })
      
    try {

      const request = req.clone()
      request.id = req.headers.get
      const response = await env.API.fetch(request)
      
      if(env.LOGGING_ENABLED) {
        const event = {
          request: request.clone(),
          response: response.clone(),
        }
        env.LOGS.put(request.id, { event })
      }

      return response

    } catch (err) {
      sentry.captureException(err)
      return new Response('Something went wrong', {
        status: 500,
        statusText: 'Internal Server Error',
      })
    }
  },
}
