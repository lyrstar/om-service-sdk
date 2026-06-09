# om-service-sdk

om-service 服务端 JavaScript SDK，提供账号服务相关 API 的封装。

## 安装

```bash
npm install om-service-sdk
```

## 项目结构

```
om-service-sdk/
├── lib/
│   ├── http-client.js   # HTTP 基础客户端（axios 封装 + 签名鉴权）
│   └── account-api.js   # 账号服务 API
├── index.js             # 统一导出入口
└── package.json
```

## 快速开始

```js
import { AccountApi } from 'om-service-sdk';

const api = new AccountApi('your-app-id', 'your-app-secret');

// 账号密码登录
const res = await api.loginPhonePassword({ phone: '138xxxxxxxx', password: '123456' });
console.log(res.data);
```

## API 说明

### AccountApi

#### 构造函数

| 参数        | 类型     | 说明      |
| ----------- | -------- | --------- |
| `appId`     | `string` | 应用 ID   |
| `appSecret` | `string` | 应用密钥  |

#### 登录

| 方法                                   | 说明         |
| -------------------------------------- | ------------ |
| `loginToken(data)`                     | Token 登录   |
| `loginPhonePassword(data)`             | 账号密码登录 |
| `loginPhoneVerificationCode(data)`     | 验证码登录   |
| `loginApple(data)`                     | 苹果登录     |
| `loginGoogle(data)`                    | Google 登录  |
| `loginFaceBook(data)`                  | Facebook 登录 |
| `wechatCode(data)`                     | 微信登录     |

#### 验证码

| 方法                        | 说明               |
| --------------------------- | ------------------ |
| `codeLoginPhone(phone)`     | 发送登录验证码     |
| `codeAuthentication(phone)` | 发送身份验证验证码 |
| `codePasswordReset(phone)`  | 发送重置密码验证码 |

#### 密码

| 方法                       | 说明               |
| -------------------------- | ------------------ |
| `passwordUpdate(data)`     | 修改密码           |
| `passwordResetPhone(data)` | 通过手机号重置密码 |
| `passwordSet(data)`        | 设置密码（首次）   |

#### 绑定

| 方法                | 说明       |
| ------------------- | ---------- |
| `bindPhone(data)`   | 绑定手机号 |
| `bindWechat(data)`  | 绑定微信   |

#### 用户信息

| 方法                                  | 说明           |
| ------------------------------------- | -------------- |
| `getUserInfo(data)`                   | 获取用户信息   |
| `getAccountList(page, limit, search)` | 获取账号列表   |
| `puzzleDelete(data)`                  | 谜案馆用户注销 |

#### 白名单

| 方法                          | 说明               |
| ----------------------------- | ------------------ |
| `getWhiteList()`              | 获取白名单列表     |
| `postWhiteList(whiteList)`    | 设置白名单列表     |
| `getWhiteListSwitch()`        | 获取白名单开关状态 |
| `postWhiteListSwitch(status)` | 设置白名单开关状态 |

#### 统计

| 方法                                              | 说明             |
| ------------------------------------------------- | ---------------- |
| `getDailyActiveUserStatistic(startDate, endDate)` | 每日活跃用户统计 |
| `getDailyNewUserStatistic(startDate, endDate)`    | 每日新增用户统计 |
| `getWeeklyActiveUserStatistic(startDate, endDate)` | 每周活跃用户统计 |
| `getMonthlyActiveUserStatistic(startDate, endDate)` | 每月活跃用户统计 |

## License

[Apache-2.0](./LICENSE)
