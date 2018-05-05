import cityList from '@/script/config/cityList'
require("pinyin4js")

const hotArea = [
    {
        name: '全国',
        code: '000000'
    },
    {
        name: '北京',
        code: '110000'
    },
    {
        name: '上海',
        code: '310000'
    },
    {
        name: '广州',
        code: '440100'
    },
    {
        name: '深圳',
        code: '440300'
    },
    {
        name: '成都',
        code: '510100'
    },
    {
        name: '天津',
        code: '120000'
    },
    {
        name: '南京',
        code: '320100'
    },
    {
        name: '杭州',
        code: '330100'
    },
    {
        name: '武汉',
        code: '420100'
    },
    {
        name: '重庆',
        code: '500000'
    }
]

const cityPinyin = () => {
    let list = []
    Object.keys(cityList).forEach(i => {
        if(Number.isInteger(i/100) && !Number.isInteger(i/10000)) {
            list.push({
                name: cityList[i],
                code: i,
                pinyin: PinyinHelper.convertToPinyinString(cityList[i], '', PinyinFormat.WITHOUT_TONE)
            })
        }
    })
    let pinyinObj = {}, pinyinList = []
    list.forEach(i => {
        let fl = i.pinyin[0]
        if (!pinyinObj[fl]) pinyinObj[fl] = []
        pinyinObj[fl].push(i)
    })
    Object.keys(pinyinObj).forEach(i => {
        pinyinObj[i].sort((a, b) => {
            return a.pinyin > b.pinyin ? 1 : -1
        })
        pinyinList.push({
            fl: i,
            list: pinyinObj[i]
        })
    })
    return pinyinList.sort((a, b) => {
        return a.fl > b.fl ? 1 : -1
    })
}

export default {
    hotArea,
    cityPinyin: cityPinyin()
}