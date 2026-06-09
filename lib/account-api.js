import { HttpClient } from './http-client.js';

/** 账号服务 API 根路径 */
const BASE_URL = 'https://service.itaotuo.com/account';

/**
 * 账号服务 API
 */
export class AccountApi {
    /**
     * @param {string} appId     - 应用 ID
     * @param {string} appSecret - 应用密钥
     */
    constructor(appId, appSecret) {
        this.request = new HttpClient(appId, appSecret, BASE_URL);
    }

    // ──────────────────────────────── 登录 ────────────────────────────────

    /**
     * Token 登录
     * @param {object} data - 登录数据
     */
    loginToken(data) {
        return this.request.post(`${BASE_URL}/login/token`, data);
    }

    /**
     * 账号密码登录
     * @param {object} data - 登录数据（phone, password）
     */
    loginPhonePassword(data) {
        return this.request.post(`${BASE_URL}/login/phone/password`, data);
    }

    /**
     * 验证码登录
     * @param {object} data - 登录数据（phone, code）
     */
    loginPhoneVerificationCode(data) {
        return this.request.post(`${BASE_URL}/login/phone/code`, data);
    }

    /**
     * 苹果登录
     * @param {object} data - 登录数据
     */
    loginApple(data) {
        return this.request.post(`${BASE_URL}/login/apple`, data);
    }

    /**
     * Google 登录
     * @param {object} data - 登录数据
     */
    loginGoogle(data) {
        return this.request.post(`${BASE_URL}/login/google`, data);
    }

    /**
     * Facebook 登录
     * @param {object} data - 登录数据
     */
    loginFaceBook(data) {
        return this.request.post(`${BASE_URL}/login/facebook`, data);
    }

    /**
     * 微信登录
     * @param {object} data - 登录数据（code）
     */
    wechatCode(data) {
        return this.request.post(`${BASE_URL}/login/wechat`, data);
    }

    // ──────────────────────────────── 验证码 ────────────────────────────────

    /**
     * 发送登录验证码
     * @param {string} phone - 手机号
     */
    codeLoginPhone(phone) {
        return this.request.get(`${BASE_URL}/code/login/phone`, { phone });
    }

    /**
     * 发送身份验证验证码
     * @param {string} phone - 手机号
     */
    codeAuthentication(phone) {
        return this.request.get(`${BASE_URL}/code/authentication`, { phone });
    }

    /**
     * 发送重置密码验证码
     * @param {string} phone - 手机号
     */
    codePasswordReset(phone) {
        return this.request.get(`${BASE_URL}/code/password/reset/phone`, { phone });
    }

    // ──────────────────────────────── 密码 ────────────────────────────────

    /**
     * 修改密码
     * @param {object} data - 包含旧密码和新密码
     */
    passwordUpdate(data) {
        return this.request.post(`${BASE_URL}/password/update`, data);
    }

    /**
     * 通过手机号重置密码
     * @param {object} data - 包含手机号、验证码和新密码
     */
    passwordResetPhone(data) {
        return this.request.post(`${BASE_URL}/password/reset/phone`, data);
    }

    /**
     * 设置密码（首次）
     * @param {object} data - 包含新密码信息
     */
    passwordSet(data) {
        return this.request.post(`${BASE_URL}/password/set`, data);
    }

    // ──────────────────────────────── 绑定 ────────────────────────────────

    /**
     * 绑定手机号
     * @param {object} data - 包含手机号和验证码
     */
    bindPhone(data) {
        return this.request.post(`${BASE_URL}/bind/phone`, data);
    }

    /**
     * 绑定微信
     * @param {object} data - 包含微信授权数据
     */
    bindWechat(data) {
        return this.request.post(`${BASE_URL}/bind/wechat`, data);
    }

    // ──────────────────────────────── 用户信息 ────────────────────────────────

    /**
     * 获取用户信息
     * @param {object} [data={}] - 查询参数
     */
    getUserInfo(data = {}) {
        return this.request.get(`${BASE_URL}/info`, data);
    }

    /**
     * 获取账号列表
     * @param {number} page   - 页码
     * @param {number} limit  - 每页数量
     * @param {string} search - 搜索关键词
     */
    getAccountList(page, limit, search) {
        return this.request.get(`${BASE_URL}/list`, { page, limit, search });
    }

    /**
     * 谜案馆用户注销
     * @param {object} data - 注销数据
     */
    puzzleDelete(data) {
        return this.request.post(`${BASE_URL}/puzzle/delete`, data);
    }

    // ──────────────────────────────── 白名单 ────────────────────────────────

    /**
     * 获取白名单列表
     */
    getWhiteList() {
        return this.request.get(`${BASE_URL}/white-list`);
    }

    /**
     * 设置白名单列表
     * @param {Array<string>} whiteList - 白名单数组
     */
    postWhiteList(whiteList) {
        return this.request.post(`${BASE_URL}/white-list`, { whiteList });
    }

    /**
     * 获取白名单开关状态
     */
    getWhiteListSwitch() {
        return this.request.get(`${BASE_URL}/white-list/switch`);
    }

    /**
     * 设置白名单开关状态
     * @param {number} status - 开关状态（1 开启 / 0 关闭）
     */
    postWhiteListSwitch(status) {
        return this.request.post(`${BASE_URL}/white-list/switch`, { status });
    }

    // ──────────────────────────────── 统计 ────────────────────────────────

    /**
     * 获取每日活跃用户统计
     * @param {string} startDate - 开始日期（YYYY-MM-DD）
     * @param {string} endDate   - 结束日期（YYYY-MM-DD）
     */
    getDailyActiveUserStatistic(startDate, endDate) {
        return this.request.get(`${BASE_URL}/statistic/daily-active-user`, { startDate, endDate });
    }

    /**
     * 获取每日新增用户统计
     * @param {string} startDate - 开始日期（YYYY-MM-DD）
     * @param {string} endDate   - 结束日期（YYYY-MM-DD）
     */
    getDailyNewUserStatistic(startDate, endDate) {
        return this.request.get(`${BASE_URL}/statistic/daily-new-user`, { startDate, endDate });
    }

    /**
     * 获取每周活跃用户统计
     * @param {string} startDate - 开始日期（YYYY-MM-DD）
     * @param {string} endDate   - 结束日期（YYYY-MM-DD）
     */
    getWeeklyActiveUserStatistic(startDate, endDate) {
        return this.request.get(`${BASE_URL}/statistic/weekly-active-user`, { startDate, endDate });
    }

    /**
     * 获取每月活跃用户统计
     * @param {string} startDate - 开始日期（YYYY-MM-DD）
     * @param {string} endDate   - 结束日期（YYYY-MM-DD）
     */
    getMonthlyActiveUserStatistic(startDate, endDate) {
        return this.request.get(`${BASE_URL}/statistic/monthly-active-user`, { startDate, endDate });
    }
}
