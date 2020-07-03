<template>
  <div style="padding:30px;">
    <div class="thirdMenucontainer">
      <div class="secondMenuname">
        <img src="@/assets/daohang/down.png" />
        {{ secondMenutitle }}
        <img src="@/assets/daohang/up.png" />
      </div>
      <div class="thirdMenucontent">
        <ul class="thirdMenucontent">
          <li>全部</li>
          <li
            v-for="(item,index) in thirdMenu"
            :key="index"
            class
            @click="selectThirdmenu(item)"
          >{{ item.name }}</li>
        </ul>
      </div>
    </div>
    <div class="row">
      <div v-for="(web,index) in websites" :key="index" class="col-sm-3">
        <div
          class="websiteItem"
          data-toggle="tooltip"
          data-placement="bottom"
          title
          :data-original-title="web.linkUrl"
          @click="openweb(web.linkUrl)"
        >
          <div class="websiteInfo">
            <a class="xe-user-img">
              <img
                :src="'http://192.168.8.207:10521/portal' + web.icon"
                class="lozad img-circle"
                width="40"
                height="40"
              />
            </a>
            <div class="xe-comment">
              <a href="#" class="websiteName">
                <strong>{{ web.name }}</strong>
              </a>
              <!-- <p class="overflowClip_2">{{web.desc}}</p> -->
            </div>
          </div>
          <el-divider></el-divider>
          <div>
            <a href>
              <img src="@/assets/daohang/like.png" alt />
            </a>
            <a href>
              <img src="@/assets/daohang/ulike.png" alt />
            </a>
            <a href>
              <img src="@/assets/daohang/favorit.png" alt />
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { searchThirdMenu, searchWebsites } from '@/api/remote-search'
import global from '@/store/Globel'
// import websites from '@/views/nested/menu2/websites'
export default {
  data() {
    return {
      thirdMenu: '',
      secondMenutitle: global.secondMenuinfo ? global.secondMenuinfo.meta.title : '国家行业中心',
      websites: ''
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      let menuId = global.secondMenuinfo.name
      if (!menuId) {
        menuId = '5efdaa3b2f4c072e10600066'
      }
      console.log('menu:' + menuId)
      searchThirdMenu(menuId).then(response => {
        this.thirdMenu = response.dataList
      })
    },
    selectThirdmenu(thirdMenu) {
      let thirdMenuid = thirdMenu.objectId
      if (!thirdMenuid) {
        thirdMenuid = '5efdaa3b2f4c072e10600073'
      }
      searchWebsites(thirdMenuid).then(response => {
        this.websites = response.dataList
      })
    },
    openweb(url) {
      window.open(url, '_blank')
    }
  }
}
</script>

<style>
</style>
