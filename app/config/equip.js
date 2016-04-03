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

export const EQUIP_FILTER={
    selectedItems: {
        'brand': [
            {'name': '所有品牌', 'value': ''},
            {'name': '亚瑟士', 'value': 104},
            {'name': '耐克', 'value': 105},
            {'name': '新百伦', 'value': 106},
            {'name': '布鲁克斯', 'value': 107},
            {'name': '李宁', 'value': 108},
            {'name': '安德玛', 'value': 109},
            {'name': '卡虎', 'value': 110},
            {'name': '爱步', 'value': 111},
            {'name': '所康尼', 'value': 112},
            {'name': '阿迪达斯', 'value': 113},
            {'name': 'HOKA ONE ONE', 'value': 114},
            {'name': 'INOVE-8', 'value': 115},
            {'name': '盖世威', 'value': 116},
            {'name': '迈乐', 'value': 117},
            {'name': '美津浓', 'value': 118},
            {'name': '蒙特利尔', 'value': 119},
            {'name': '牛顿', 'value': 120},
            {'name': 'ON', 'value': 121},
            {'name': '彪马', 'value': 122},
            {'name': '锐步', 'value': 123},
            {'name': '萨洛蒙', 'value': 124},
            {'name': '斯凯奇', 'value': 125},
            {'name': 'ZOOT', 'value': 126},
            {'name': '多威 do win', 'value': 210}
        ],
        'price_range': [
            {'name': '价格不限', 'value': ''},
            {'name': '300以下', 'value': 'lt,300'},
            {'name': '300 ~ 500', 'value': '300,500'},
            {'name': '500 ~ 800', 'value': '500,800'},
            {'name': '800以上', 'value': 'gt,800'},
        ],
        'fit_type': [
            {'name': '全部类型', 'value': '0'},
            {'name': '缓震型', 'value': 127},
            {'name': '支撑型', 'value': 128},
            {'name': '控制型', 'value': 129},
        ],
        'distance': [
            {'name': '跑量不限', 'value': ''},
            {'name': '5公里以内', 'value': 136},
            {'name': '5 ~ 10公里', 'value': 137},
            {'name': '10公里以上', 'value': 138}
        ],
        'gender': [
            {'name': '不限', 'value': ''},
            {'name': '男', 'value': 139},
            {'name': '女', 'value': 140}
        ]
    },
}