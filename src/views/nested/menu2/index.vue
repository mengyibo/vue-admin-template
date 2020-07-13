<template>
  <div style="padding:2vh;padding-inline-start:6vh;padding-inline-end:6vh;">
    <div class="popWebsites">
      <div class="popWebsitestitle">
        <img src="@/assets/daohang/right.png">
        常用网址：
      </div>
      <div class="popWebsite">
        <li class="recommendation" @click="openweb('http://www.sasclouds.com/chinese/home')">
          自然资源卫星遥感云服务平台
        </li>
        <li class="recommendation" @click="openweb('http://www.nsoas.org.cn/')">
          国家卫星海洋应用中心
        </li>
        <li class="recommendation" @click="openweb('http://www.nsmc.org.cn/NSMC/Home/Index.html')">
          国家卫星气象中心
        </li>
        <li class="recommendation" @click="openweb('http://www.dsac.cn/')">
          地理国情监测云平台
        </li>
        <li class="recommendation" @click="openweb('http://www.resdc.cn/Default.aspx')">
          资源环境数据云平台
        </li>
        <li class="recommendation" @click="openweb('http://www.chinageoss.cn/dsp/home/index.jsp')">
          国家综合地球观测数据共享平台
        </li>
        <li class="recommendation" @click="openweb('http://data.casearth.cn/')">
          数据共享服务系统
        </li>
        <li class="recommendation" @click="openweb('http://www.qrstuv.cn/static/home')">
          国家民用空间基础设施共性技术支撑服务网
        </li>
        <li class="recommendation" @click="openweb('http://www.csdb.cn/')">
          中科院数据云
        </li>
        <li class="recommendation" @click="openweb('http://www.geodata.gov.cn/web/geo/index.html')">
          国家自然资源和地理空间基础信息库
        </li>
      </div>
    </div>
    <div v-if="secondMenuinfo" class="thirdMenucontainer">
      <div class="secondMenuname">
        <img src="@/assets/daohang/down.png">
        {{ secondMenuinfo.meta.title }}
        <img src="@/assets/daohang/up.png">
      </div>
      <div class="thirdMenucontent">
        <ul class="thirdMenucontent">
          <li :class="{'is-active':secondMenuinfo.name===selectedMenuid}" @click="searchall3rdmenu(secondMenuinfo.name)">全部</li>
          <li
            v-for="(item,index) in thirdMenu"
            :key="index"
            :class="{'is-active':item.objectId===selectedMenuid}"
            @click="selectThirdmenu(item)"
          >{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="row websites">
      <div v-for="(web,index) in websites" :key="index" class="col-sm-3">
        <div
          class="websiteItem"
          data-toggle="tooltip"
          data-placement="bottom"
          title
          :data-original-title="web.linkUrl"
        >
          <div class="websiteInfo" @click="openweb(web.linkUrl)">
            <a class="xe-user-img">
              <img
                :src="'http://192.168.8.207:10521/portal' + web.icon"
                class="lozad img-circle"
              >
            </a>
            <div class="xe-comment">
              <a href="#" class="websiteName">
                <strong>{{ web.name }}</strong>
              </a>
            </div>
          </div>
          <el-divider />
          <div class="websiteFooter">
            <div class="userAction" @click="voteManage(1,web.objectId,1)">
              <img src="@/assets/daohang/like.png">
              <!-- <label for="">999</label> -->
            </div>
            <div class="userAction" @click="voteManage(-1,web.objectId,2)">
              <img src="@/assets/daohang/ulike.png">
            </div>
            <div class="userAction">
              <img src="@/assets/daohang/favorit.png">
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchThirdMenu, searchWebsites, searchallThirdmenu, searchallwebsites } from '@/api/remote-search'
import global from '@/store/Globel'
import jquery from 'jquery'

export default {
  // store,
  data() {
    return {
      thirdMenu: '',
      secondMenuinfo: global.secondMenuinfo ? global.secondMenuinfo : '',
      // secondMenuinfo: '',
      websites: '',
      selectedMenuid: ''
    }
  },
  created() {
    this.fetchData()
    if (this.secondMenuinfo) {
      this.searchall3rdmenu(this.secondMenuinfo.name)
    } else {
      this.searchallwebsite()
    }
    this.$bus.$on('websites', params => {
      this.websites = params
    })
    // this.getUserIP()
  },
  methods: {
    fetchData() {
      const menuId = global.secondMenuinfo.name
      searchThirdMenu(menuId).then(response => {
        this.thirdMenu = response.dataList
      })
    },
    selectThirdmenu(thirdMenu) {
      const thirdMenuid = thirdMenu.objectId
      this.selectedMenuid = thirdMenuid
      global.thirdMenuinfo = thirdMenu
      searchWebsites(thirdMenuid).then(response => {
        this.websites = response.dataList
      })
    },
    searchall3rdmenu(secondMenuid) {
      this.selectedMenuid = secondMenuid
      searchallThirdmenu(secondMenuid).then(response => {
        this.websites = response.dataList
      })
    },
    searchallwebsite() {
      searchallwebsites().then(response => {
        this.websites = response.dataList
      })
    },
    voteManage(...args) {
      const jsonStr = {
        'score': args[0],
        'ip': returnCitySN['cip'],
        'websiteObjectId': args[1],
        'voteType': args[2]
      }
      jquery.ajax({
        type: 'POST',
        url: process.env.VUE_APP_BASE_API + '/vote',
        data: JSON.stringify(jsonStr),
        async: false,
        contentType: 'application/json;charset=UTF-8',
        success: function(result) {
          // 处理成功后你自己的处理
          console.log(result)
        }
      })
    },
    openweb(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style  lang="scss" scoped>
.websiteFooter {
  width: 100%;
  display: inline-flex;
  margin-top: 0.5vh;
}
.userAction {
  width: 30%;
  text-align: center;
  img{
    width: 0.83vw;
  }
}
.popWebsites{
    display: inline-flex;
    .popWebsitestitle{
      width: 11vw;
      line-height: 6.5vh;
      font-size: 1.6rem;
      img{
        height: 0.73vw;
      }
    }
    .popWebsite{
      list-style: none;
      white-space: nowrap;
      -webkit-box-orient: horizontal;
      -webkit-box-direction: normal;
      flex-direction: row;
      flex-wrap: wrap;
      padding-inline-start: 0.521vw;
      display: inline-flex;
      .recommendation{
        line-height: 2.3vh;
        font-size: 1.6rem;
        width: 11vw;
        text-align: left;
        overflow: hidden;
        text-overflow: ellipsis;
        padding: 1vh;
      }
    }
  }
  .thirdMenucontent .is-active{
    color:#0F70E0;
    border-left:0.185vh solid;
  }
  .websites{
    max-height: 54vh;
    overflow-y: scroll;

  }
  .websites::-webkit-scrollbar {
  /*滚动条整体样式*/
  width : 10px;  /*高宽分别对应横竖滚动条的尺寸*/
  height: 1px;
  }
  .websites::-webkit-scrollbar-thumb {
  /*滚动条里面小方块*/
  border-radius   : 10px;
  background-color: #c5c5c5;
  background-image: -webkit-linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
  );
  }
  // .websites::-webkit-scrollbar-thumb {
  // /*滚动条里面小方块*/
  // border-radius: 10px;
  // box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  // background   : #535353;
  // }
  .websites::-webkit-scrollbar-track {
  /*滚动条里面轨道*/
  box-shadow   : inset 0 0 5px rgba(0, 0, 0, 0.2);
  border-radius: 10px;
  background   : #ededed;
  }
</style>
