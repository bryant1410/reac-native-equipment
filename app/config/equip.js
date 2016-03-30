/**
 * 装备类型
 */
'use strict';

export const EQUIP_TYPE = {
    'RUN_SHOES': 'RUN_SHOES',//鞋子
    'RUN_SWEATPANTS': 'RUN_SWEATPANTS',//裤子
    'RUN_HAT': 'RUN_HAT',//帽子
    'RUN_SOCKS': 'RUN_SOCKS',//袜子
    'RUN_BLAZER': 'RUN_BLAZER',//上衣
    'RUN_BACKPACK': 'RUN_BACKPACK',//背包
    'RUN_BRA': 'RUN_BRA',//内衣
    'RUN_COAT': 'RUN_COAT',//夹克外套
    'RUN_EARPLUG': 'RUN_EARPLUG',//耳机
    'RUN_GLOVES': 'RUN_GLOVES',//手套
    'RUN_INSOLE': 'RUN_INSOLE',//鞋垫
    'RUN_KETTLE': 'RUN_KETTLE',//水壶
    'RUN_PROTECTIVE': 'RUN_PROTECTIVE',//防护
    'RUN_WATCH': 'RUN_WATCH',//手表
}
/**
 * 装备筛选条件
 */
export const EQUIP_FILTER_FACOTR={
    'RUN_SHOES':['brand',''],
    'RUN_INSOLE':['brand','price_range','fit_type','thickness','filter'],//品牌、价格、类型、厚度、功能
    'RUN_KETTLE':['brand','price_range','application','filter'],//品牌、价格、跑量、功能
    'RUN_EARPLUG':['brand','price_range','wearing_styles','style','sound_effect','filter'],//品牌、价格、佩戴方式、款式、声效、功能
    'RUN_PROTECTIVE':['brand','price_range','style','application'],//品牌、价格、款式、适用情况
    ''
}