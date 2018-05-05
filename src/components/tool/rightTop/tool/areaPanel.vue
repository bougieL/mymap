<template>
    <div id="area-panel-wrapper" v-show="show">
        <div class="panel-action">
            城市列表
            <!-- <i class="ion-close" id="panel-close"></i> -->
        </div>
        <div class="sel-city">
            <div class="cur-locate">
                当前城市：{{curCity.name}}
            </div>
            <div id="hot-area">
                <a class="hot-area-item" v-for="(v, i) in hotArea" :key="i" @click="locate(v)">{{v.name}}</a>
                <div id="area-search">
                    <div id="search-handler-wrapper">
                        <input type="text" placeholder="搜索城市名称" v-model="keyword">
                        <button>搜索</button>
                    </div>
                    <div id="area-search-res" v-if="resList.length>0">
                        <div class="res-item" v-for="(v, i) in resList" :key="i" @click="locate(v)">{{v.name}}</div>
                    </div>
                </div>
            </div>
        </div>
        <div id="city-pinyin-wrapper">
            <div class="segment-pinyin" v-for="(list, index) in cityPinyin" :key="index">
                <div class="segment-first-letter">{{list.fl.toUpperCase()}}</div>
                <div class="segment-letter-list">
                    <a class="segment-part-item" v-for="(v, i) in list.list" @click="locate(v)" :key="i">{{v.name}}</a>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    import cityList from '@/script/config/cityList'
    import locate from '@/script/util/locate'
    import area from './areaFactory'
    export default {
        name: 'areaPanel',
        data: function () {
            return {
                keyword: '',
                resList: [],
                show: false,
                hotArea: area.hotArea,
                cityPinyin: area.cityPinyin,
                curCity: {
                    name: '全国',
                    id: '000000'
                }
            }
        },
        methods: {
            locate(v) {
                // console.log(v)
                this.keyword = ''
                // locate.locateByAdCode(this.map, v.code)
                locate.addCounter(this.map, v.code)
            }
        },
        mounted() {
            locate.adaptArea(this.map)
            this.$bus.$on('ADAPT_AREA', data => {
                this.curCity = data
            })
            this.$bus.$on('TOGGLE_AREA_PANEL', () => {
                this.show = !this.show
            })
            console.log(this.map.getContainer())
            // document.documentElement.addEventListener('click', () => {
            //     alert('1111111')
            // })
        },
        watch: {
            keyword(val) {
                this.resList = []
                if (!val && val.length < 2) return
                Object.keys(cityList).forEach(item => {
                    if (cityList[item].includes(val)) {
                        this.resList.push({
                            name: cityList[item],
                            code: item
                        })
                    }
                })
            }
        }
    }
</script>

<style lang="less">
    #area-panel-wrapper {
      width: 283px;
      display: block;
      height: 393px;
      position: absolute;
      right: 59px;
      top: 37px;
      background: #fff;
      font-size: 12px;
      box-shadow: 1px 2px 1px rgba(0, 0, 0, 0.15);
      .sel-city {
        margin: 5px 5px 7px 5px;
        .cur-locate {
            height: 40px;
            padding-left: 5px;
            line-height: 35px;
            border-bottom: 1px solid rgb(218, 218, 218);
        }
        #hot-area {
          padding: 5px;
          line-height: 24px;
          cursor: pointer;
          .hot-area-item {
            margin-right: 8px;
          }
          border-bottom: 1px solid rgb(218, 218, 218);
        }
      }
      #area-search {
        position: relative;
        margin-bottom: 12px;
        #search-handler-wrapper {
          margin: 10px 0 0;
          display: flex;
          justify-content: space-between;
          input {
            //   height: 18px;
            width: 80%;
            padding: 0 3px;
          }
          button {
            //   height: 18px;
            width: 17%;
          }
        }
        #area-search-res {
          position: absolute;
          border: 1px solid #a9a9a9;
          width: 219px;
          max-height: 150px;
          border-top: none;
          overflow: auto;
          background: #fff;
          .res-item {
            padding: 0 5px;
            &:hover {
              background: #ccc;
            }
          }
        }
      }
      #city-pinyin-wrapper {
          padding: 0 10px;
        height: 205px;
        overflow: auto;
        .segment-pinyin {
          display: flex;
          margin-bottom: 10px;
          .segment-first-letter {
            color: rgb(204, 204, 204);
            width: 20%;
            //   text-align: center;
            font-size: 24px;
            line-height: 24px;
            font-weight: 700;
          }
          .segment-letter-list {
            width: 80%;
            line-height: 20px;
            .segment-part-item {
              margin-right: 12px;
              cursor: pointer;
              font-size: 14px;
              color: rgb(61, 109, 204);
            }
          }
        }
      }

      .panel-action {
        height: 25px;
        line-height: 25px;
        border-bottom: 1px solid rgb(218, 218, 218);
        padding-left: 7px;
        #panel-close {
          float: right;
          margin-right: 7px;
        }
      }
      #area-search-res {
        .res-item {
        }
      }
    }
</style>