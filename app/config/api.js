/**
 * 应用的所有请求地址
 */

//根域名
const ADDR = 'http://web.langtogether.com/';

const API = {

    'upload_statistic': ADDR + '',//统计数据上传

    'get_hots_equips': ADDR + '',//获取热门装备，用于装备库首页
    'get_equip_detail': ADDR + '',//获取装备详情
    'get_related_equips': ADDR + '',//获取相关装备
    'get_equips_by_filter': ADDR + '',//根据筛选条件获取装备列表
    'get_equips_by_tag': ADDR + '',//根据标签获取装备，用于装备库的一键选装
    'get_sys_equips': ADDR + '',//获取系统推荐装备

    'get_search_result': ADDR + '',//搜索

    'get_ai_result': ADDR + '',//获取智能选装结果

    'send_feedback': ADDR + ''//发送反馈意见
}

export default API;