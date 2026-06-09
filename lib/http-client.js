import crypto from 'crypto';
import axios from 'axios';

/**
 * HTTP 基础客户端
 * 封装带签名鉴权的 GET / POST 请求
 */
export class HttpClient {
    /**
     * @param {string} appId     - 应用 ID
     * @param {string} appSecret - 应用密钥
     * @param {string} baseUrl   - 接口根地址
     */
    constructor(appId, appSecret, baseUrl) {
        this.appId = appId;
        this.appSecret = appSecret;
        this.baseUrl = baseUrl;
    }

    /**
     * 发起 GET 请求
     * @param {string} url           - 请求地址
     * @param {object} [params={}]   - 查询参数
     * @returns {Promise}
     */
    get(url, params = {}) {
        const timestamp = Date.now();
        const sign = this._getSign(params, timestamp);
        return axios.get(url, {
            params,
            headers: this._buildHeaders(timestamp, sign),
        });
    }

    /**
     * 发起 POST 请求
     * @param {string} url         - 请求地址
     * @param {object} [data={}]   - 请求体数据
     * @returns {Promise}
     */
    post(url, data = {}) {
        const timestamp = Date.now();
        const sign = this._getSign(data, timestamp);
        return axios.post(url, data, {
            headers: this._buildHeaders(timestamp, sign),
        });
    }

    /**
     * 构建鉴权请求头
     * @param {number} timestamp - 时间戳（毫秒）
     * @param {string} sign      - 签名字符串
     * @returns {object}
     * @private
     */
    _buildHeaders(timestamp, sign) {
        return {
            appid: this.appId,
            timestamp,
            sign,
        };
    }

    /**
     * 生成签名
     * @param {object} params    - 参与签名的参数对象
     * @param {number} timestamp - 时间戳（毫秒）
     * @returns {string} 签名字符串
     * @private
     */
    _getSign(params, timestamp) {
        let str = '';
        for (const attr in params) str += String(params[attr]);
        return this._md5(this._md5(str + timestamp) + this.appSecret);
    }

    /**
     * 计算 MD5 哈希值
     * @param {string} str - 输入字符串
     * @returns {string} 十六进制 MD5 字符串
     * @private
     */
    _md5(str) {
        return crypto.createHash('md5').update(str, 'utf8').digest('hex');
    }
}
