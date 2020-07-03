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
          <li v-for="(item,index) in list" :key="index" class="" @click="selectNav(item.title)">
            {{item.name}}
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import { searchThirdMenu } from '@/api/remote-search'
import global from '@/store/Globel'
export default {
  data() {
    return {
      list: '',
      secondMenutitle: global.secondMenuinfo ? global.secondMenuinfo.meta.title : '国家行业中心'
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
        this.list = response.dataList
      })
    }
  }
}
</script>

<style>
</style>
