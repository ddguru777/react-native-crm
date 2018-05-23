import schema from 'app/graphql/schema'
import { getTokenFromHeader } from 'app/services/utils'

export const buildOptions = (req, res) => {
  return {
    schema: schema,

    formatError: (err) => ({
      message: err.message,
      status: err.status
    }),

    context: {
      // payload: req.payload,
      // user_id: req.payload && req.payload.user_id,
      // body: req.body,
      token: getTokenFromHeader(req),
    },
  }
}