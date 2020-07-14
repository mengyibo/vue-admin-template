<template>
  <div class="navbar">
    <div class="searchBox">
      <el-row class="searchBoxtop">
        <img src="@/assets/daohang/tianhuisou.png" class="searchlogo" alt="天汇搜">
        <div class="searchBoxright">
          <el-button type="primary" @click="submitSearchresult()">汇搜</el-button>
          <el-input v-model="searchText" placeholder="汇搜一下，你就知道" prefix-icon="el-icon-search" class="el-searchinput" @keyup.enter.native="submitSearchresult" />
          <!-- <div class="poplable swiper-container">
            <img src="@/assets/daohang/left.png">
            <div v-for="(item,index) in recommendation" :key="index" class="poplableitem swiper-wrapper" @click="submitSearchresult(item.name)">
              <div class="swiper-slide">
                {{ item.name }}
              </div>
            </div>
            <div class="swiper-button-next" />
            <div class="swiper-button-prev" />
            <img src="@/assets/daohang/right.png">
          </div> -->
          <swiper class="poplable swiper" :options="swiperOption">
            <swiper-slide v-for="(item) in recommendation" :key="item.name" class="poplableitem">
              {{ item.name }}
            </swiper-slide>
            <!-- <div slot="pagination" class="swiper-pagination" /> -->
            <div slot="button-prev" class="swiper-button-prev">
              <img src="@/assets/daohang/left.png">
            </div>
            <div slot="button-next" class="swiper-button-next">
              <img src="@/assets/daohang/right.png">
            </div>
          </swiper>
        </div>
      </el-row>
    </div>
  </div>
</template>
<script>
// import { mapGetters } from 'vuex'
import { searchRecommendation, searchEngine } from '@/api/remote-search'
import { Swiper, SwiperSlide } from 'vue-awesome-swiper'
import '../../../node_modules/swiper/swiper.scss'

var vm = null
export default {

  components: {
    Swiper,
    SwiperSlide
  },
  data() {
    return {
      recommendation: '',
      searchText: '',
      swiperOption: {
        slidesPerView: 5,
        spaceBetween: 2,
        // slidesPerGroup: 5,
        // loop: true,
        // loopFillGroupWithBlank: true,
        // pagination: {
        //   el: '.swiper-pagination',
        //   clickable: true
        // },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        on: {
          click: function() {
            console.log(this)
            const name = this.clickedSlide.innerText
            vm.submitSearchresult(name)
          }
        }
      }
    }
  },
  created() {
    this.displayRecommendation()
    vm = this
  },
  methods: {
    async displayRecommendation() {
      await searchRecommendation().then(response => {
        this.recommendation = response.dataList
      })
    },
    async submitSearchresult(...args) {
      let searchText = ''
      if (args[0] && typeof (args[0]) === 'string') {
        searchText = args[0]
        this.searchText = args[0]
      } else {
        searchText = this.searchText
      }
      // const thirdMenuid = global.thirdMenuinfo.objectId
      searchEngine(searchText).then(response => {
        this.$bus.$emit('websites', response.dataList)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  height: 14vh;
  // overflow: hidden;
  position: relative;
  padding: 3vh 0 0 2.9vw;
  // background: #fff;
  // box-shadow: 0 1px 4px rgba(0,21,41,.08);

  .hamburger-container {
    line-height: 46px;
    height: 100%;
    float: left;
    cursor: pointer;
    transition: background 0.3s;
    -webkit-tap-highlight-color: transparent;

    &:hover {
      background: rgba(0, 0, 0, 0.025);
    }
  }
  .searchBoxtop{
    height: 100px;
  }
  .searchBoxright{
    float: right;
    width: 82%;
  }
  .poplable{
    display:inline-flex;
    margin-left: 5vw;
    margin-top: 1%;
    height: 5vh;
    line-height: 5vh;
    width: 37vw;
    img{
      width: 0.74vh;
      padding: 1.6vh 0;
      margin-left: 1.5vw;
    }
    .poplableitem{
      padding: 0px 10px;
      border-radius: 3px;
      background-color: #EBEBEB;
      margin-left: 1.5vw;
      font-size: 1.6rem;
      overflow: hidden;
      text-overflow: ellipsis;
      cursor: pointer;
      width: auto !important;
    }
  }
  .searchBox {
    .searchlogo {
      // width: 245px;
      width: 12.7vw;
    }
    .el-button{
      float: right;
      right: 9%;
      position: relative;
      width: 8vw;
      height: 4.26vh;
      font-size: 1.6rem;
    }
    .el-input {
      width: 75%;
      float: right;
      right: 9.8%;
      font-size: 1.4rem;
    }

  }
  .el-searchinput{
    height: 4.26vh;
    ::v-deep input{
      height: 4.26vh;
      font-size: 1.7rem;
      line-height: 4.26vh;
      padding: 0 1.78125vw;
      border-radius: 0.4rem;
      border-width: 0.0521vw;
    }
    ::v-deep .el-input__prefix{
      left: 0.5rem;
      .el-input__icon{
        width: 1.3vw;
        line-height: 4.26vh;
      }
    }
  }
  .breadcrumb-container {
    float: left;
  }

  .right-menu {
    float: right;
    height: 100%;
    line-height: 50px;

    &:focus {
      outline: none;
    }

    .right-menu-item {
      display: inline-block;
      padding: 0 8px;
      height: 100%;
      font-size: 18px;
      color: #5a5e66;
      vertical-align: text-bottom;

      &.hover-effect {
        cursor: pointer;
        transition: background 0.3s;

        &:hover {
          background: rgba(0, 0, 0, 0.025);
        }
      }
    }

    .avatar-container {
      margin-right: 30px;

      .avatar-wrapper {
        margin-top: 5px;
        position: relative;

        .user-avatar {
          cursor: pointer;
          width: 40px;
          height: 40px;
          border-radius: 10px;
        }

        .el-icon-caret-bottom {
          cursor: pointer;
          position: absolute;
          right: -20px;
          top: 25px;
          font-size: 12px;
        }
      }
    }
  }
}
</style>
