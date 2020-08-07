
exports.handler = async (_, context) => {

  const { user } = context.clientContext
  user && console.log(`user.email: ${user.email}`)
  user && console.log(`user.app_metadata: ${user.app_metadata}`)

  return {
    statusCode: 200,
    body: JSON.stringify({
      "app_metadata": {
        roles: ["member"],
        ...user.app_metadata
      }
    }),
  }
}
