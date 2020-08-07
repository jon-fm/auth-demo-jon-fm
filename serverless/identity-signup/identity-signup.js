
exports.handler = async (event, context) => {

  // `user` doesn't actually exist yet in identity-signup
  const { user } = context.clientContext // => null

  // To get info about signup at this stage, dig into event
  const newUser = JSON.parse(event.body).user
  console.log(`Signed up with email ${newUser.email}`)

  // Wondering if this is because clientContext is really made to hold
  // data about an active client hitting a function directly whereas this
  // hook is fired as a background process from the identity service. Alas.

  // All new users are members :)
  return {
    statusCode: 200,
    body: JSON.stringify({
      "app_metadata": {
        roles: ["member"],
      }
    }),
  }
}
