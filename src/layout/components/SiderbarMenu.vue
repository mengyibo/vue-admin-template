<template>
  <ul class="siderBarright">
    <li v-for="(item,index) in nav" :key="index" class="productImg" @click="selectNav(item.title)">
      <img :src="isSelected ===item.title?item.url_one:item.url" alt="item.title">
    </li>
  </ul>
</template>

<script>
export default {
  name: 'SidebarMenu',
  data() {
    return {
      isSelected: '天汇搜',
      nav: [
        {
          title: '首页',
          url: require('@/assets/daohang/home.png'),
          url_one: require('@/assets/daohang/home_h.png')
        },
        {
          title: '天汇搜',
          url: require('@/assets/daohang/THSearch.png'),
          url_one: require('@/assets/daohang/THSearch_h.png')
        },
        {
          title: '易搜',
          url: require('@/assets/daohang/yi.png'),
          url_one: require('@/assets/daohang/yi_h.png')
        },
        {
          title: '数方',
          url: require('@/assets/daohang/shuf.png'),
          url_one: require('@/assets/daohang/shuf_h.png')
        },
        {
          title: '天小惠',
          url: require('@/assets/daohang/ai.png'),
          url_one: require('@/assets/daohang/ai_h.png')
        },
        {
          title: '地球引擎',
          url: require('@/assets/daohang/earth.png'),
          url_one: require('@/assets/daohang/earth_h.png')
        },
        {
          title: '招聘',
          url: require('@/assets/daohang/join.png'),
          url_one: require('@/assets/daohang/join_h.png')
        }
      ]
    }
  },
  methods: {
    selectNav(title) {
      this.isSelected = title
    }
  }
}
</script>

<style>
</style>
