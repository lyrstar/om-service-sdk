const crypto = require('crypto');
const axios = require('axios')

module.exports.AccountApi = class AccountApi {
    constructor(appId, appSecret) {
        this.baseUrl = 'https://service.itaotuo.com/account'
        this.appId = appId;
        this.appSecret = appSecret;
    }

    /**
     * token登录
     * @param {*} data
     */
    async loginToken(data) {
        let url = this.baseUrl + '/login/token';
        return this.post(url, data);
    }

    /**
     * 账号密码登录
     * @param {*} data
     */
    async loginPhonePassword(data) {
        let url = this.baseUrl + '/login/phone/password';
        return this.post(url, data);
    }

    /**
     * 苹果登录
     * @param {*} data
     */
    async loginApple(data) {
        let url = this.baseUrl + '/login/apple';
        return this.post(url, data);
    }

    /**
     * Google登录
     * @param {*} data
     */
    async loginGoogle(data) {
        let url = this.baseUrl + '/login/google';
        return this.post(url, data);
    }

    /**
     * Facebook登录
     * @param {*} data
     */
    async loginFaceBook(data) {
        let url = this.baseUrl + '/login/facebook';
        return this.post(url, data);
    }

    /**
     * 微信登录
     * @param {*} data
     */
    async wechatCode(data) {
        let url = this.baseUrl + '/login/wechat';
        return this.post(url, data);
    }


    /**
     * 验证码登录
     * @param {*} data
     */
    async loginPhoneVerificationCode(data) {
        let url = this.baseUrl + '/login/phone/code';
        return this.post(url, data);
    }

    /**
     * 发送验证码
     * @param {*} phone
     */
    async codeLoginPhone(phone) {
        let url = this.baseUrl + '/code/login/phone?phone=' + phone;
        return this.get(url, {phone});
    }

    /**
     * 谜案馆用户注销
     * @param {*} data
     */
    async puzzleDelete(data) {
        let url = this.baseUrl + '/puzzle/delete';
        return this.post(url, data);
    }

    /**
     * 绑定手机号
     * @param {*} data
     */
    async bindPhone(data) {
        let url = this.baseUrl + '/bind/phone';
        return this.post(url, data);
    }

    /**
     * 绑定微信
     * @param {*} data
     */
    async bindWechat(data) {
        let url = this.baseUrl + '/bind/wechat';
        return this.post(url, data);
    }

    /**
     * 发送身份验证验证码
     * @param {string} phone - 手机号
     */
    async codeAuthentication(phone) {
        let url = this.baseUrl + '/code/authentication?phone=' + phone;
        return this.get(url, {phone});
    }

    /**
     * 发送重置密码验证码
     * @param {string} phone - 手机号
     */
    async codePasswordReset(phone) {
        let url = this.baseUrl + '/code/password/reset/phone?phone=' + phone;
        return this.get(url, {phone});
    }

    /**
     * 修改密码
     * @param {*} data
     */
    async passwordUpdate(data) {
        let url = this.baseUrl + '/password/update';
        return this.post(url, data);
    }

    /**
     * 通过手机号重置密码
     * @param {*} data
     */
    async passwordResetPhone(data) {
        let url = this.baseUrl + '/password/reset/phone';
        return this.post(url, data);
    }

    /**
     * 设置密码
     * @param {*} data
     */
    async passwordSet(data) {
        let url = this.baseUrl + '/password/set';
        return this.post(url, data);
    }

    /**
     * 获取用户信息
     * @param {*} data
     */
    async getUserInfo(data) {
        let url = this.baseUrl + '/info';
        return this.get(url, data);
    }

    /**
     * 获取账号列表
     * @param {number} page - 页码
     * @param {number} limit - 每页数量
     * @param {string} search - 搜索关键词
     */
    async getAccountList(page, limit, search) {
        let url = this.baseUrl + '/list';
        return this.get(url, {page, limit, search});
    }

    /**
     * 获取白名单列表
     */
    async getWhiteList() {
        let url = this.baseUrl + '/white-list';
        return this.get(url, {});
    }

    /**
     * 设置白名单列表
     * @param {Array} whiteList - 白名单数组
     */
    async postWhiteList(whiteList) {
        let url = this.baseUrl + '/white-list';
        return this.post(url, {whiteList});
    }

    /**
     * 获取白名单开关状态
     */
    async getWhiteListSwitch() {
        let url = this.baseUrl + '/white-list/switch';
        return this.get(url, {});
    }

    /**
     * 设置白名单开关状态
     * @param {*} status - 开关状态
     */
    async postWhiteListSwitch(status) {
        let url = this.baseUrl + '/white-list/switch';
        return this.post(url, {status});
    }

    /**
     * 获取每日活跃用户统计
     * @param {string} startDate - 开始日期
     * @param {string} endDate - 结束日期
     */
    async getDailyActiveUserStatistic(startDate, endDate) {
        let url = this.baseUrl + '/statistic/daily-active-user';
        return this.get(url, {startDate, endDate});
    }

    /**
     * 获取每日新增用户统计
     * @param {string} startDate - 开始日期
     * @param {string} endDate - 结束日期
     */
    async getDailyNewUserStatistic(startDate, endDate) {
        let url = this.baseUrl + '/statistic/daily-new-user';
        return this.get(url, {startDate, endDate});
    }

    /**
     * 获取每周活跃用户统计
     * @param {string} startDate - 开始日期
     * @param {string} endDate - 结束日期
     */
    async getWeeklyActiveUserStatistic(startDate, endDate) {
        let url = this.baseUrl + '/statistic/weekly-active-user';
        return this.get(url, {startDate, endDate});
    }

    /**
     * 获取每月活跃用户统计
     * @param {string} startDate - 开始日期
     * @param {string} endDate - 结束日期
     */
    async getMonthlyActiveUserStatistic(startDate, endDate) {
        let url = this.baseUrl + '/statistic/monthly-active-user';
        return this.get(url, {startDate, endDate});
    }


    /**
     * 封装GET方式获取接口
     *
     * @param {*} url
     * @param {*} data
     */
    async get(url, data) {
        let timestamp = Date.now();
        let sign = this.getSign(data, timestamp);
        let option = {
            params: data,
            headers: {
                "appid": this.appId,
                "timestamp": timestamp,
                "sign": sign
            }
        };
        return axios.get(url, option);
    }


    /**
     * 封装POST方式获取接口
     * @param {*} url
     * @param {*} data
     */
    async post(url, data) {
        let timestamp = Date.now();
        let sign = this.getSign(data, timestamp);
        let option = {
            headers: {
                "appid": this.appId,
                "timestamp": timestamp,
                "sign": sign
            }
        };
        return axios.post(url, data, option);
    }


    /**
     * 生成签名
     * @param {*} params
     * @param {*} timestamp
     */
    getSign(params, timestamp) {
        let str = '';
        for (let attr in params) str += String(params[attr]);
        return this.md5(this.md5(str + timestamp) + this.appSecret);
    }

    md5(str) {
        return crypto.createHash('md5').update(str, 'utf8').digest('hex');
    }
}
