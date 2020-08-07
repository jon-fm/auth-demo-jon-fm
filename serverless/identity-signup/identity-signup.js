
exports.handler = async (_, context) => {
  const { user } = context.clientContext
  console.log(`Signup from ${user.email}`)

  return {
    statusCode: 200,
    body: JSON.stringify({
      "app_metadata": {
        "roles": ["member"]
      }
    }),
  }
}
