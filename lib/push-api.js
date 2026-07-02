import {HttpClient} from './http-client.js';

/** 账号服务 API 根路径 */
const BASE_URL = 'https://service.itaotuo.com/push';

/**
 * 账号服务 API
 */
export class PushApi {
    /**
     * @param {string} appId     - 应用 ID
     * @param {string} appSecret - 应用密钥
     */
    constructor(appId, appSecret) {
        this.request = new HttpClient(appId, appSecret, BASE_URL);
    }

    // ──────────────────────────────── 登录 ────────────────────────────────

    /**
     * 发送服务异常短信通知
     * @param {string|string[]} PhoneNumbers  - 接收短信的手机号（单个或多个）
     * @param {string}          service_name  - 服务名称
     * @param {string}          service_id    - 服务 ID
     * @param {string}          error_message - 错误信息
     * @returns {Promise}
     */
    sendServiceFailSMS(PhoneNumbers, service_name, service_id, error_message) {
        return this.request.post(`${BASE_URL}/sms/serviceFail`, {
            PhoneNumbers, service_name, service_id, error_message
        });
    }

}
