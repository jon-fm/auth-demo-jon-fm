
exports.handler = async () => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      "app_metadata": {
        "roles": ["member"]
      }
    }),
  }
}
