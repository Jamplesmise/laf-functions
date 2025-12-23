import cloud from '@lafjs/cloud'

import cloud from '@simple-ide/cloud'

export default async function (ctx: FunctionContext) {
  // 获取请求参数
  const { body, query } = ctx
  const key = cloud.env.SOPHNET_API_KEY
  console.log(key)
  // 在这里编写你的业务逻辑
  console.log('Hello from cloud function!')

  return {
    message: 'Hello, World!',
    body,
    query
  }
}
