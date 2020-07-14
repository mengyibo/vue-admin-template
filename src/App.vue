<template>
  <div id="app">
    <el-main style="padding: 0px;height: 100%"><router-view /></el-main>
    <el-footer style="height: 12%;background:#1c3ab3">
      <div style="padding-top:1%;padding-left:25%;float: left;z-index:22;position:absolute">
        <div style="color: white;font-size: 16px;">关于天汇空间</div>
        <div style="margin:0;padding:0; width:15px;height:2px;background-color:#8aabe5;overflow:hidden;margin-top: 5px;" />
        <div style="color: white;margin-top: 10px;"><a href="contact.html">公司简介</a></div>
      </div>
      <div style="padding-top:1%;padding-left:35%;z-index:22;position:absolute">
        <div style="color: white;font-size: 16px;">联系我们</div>
        <div style="margin:0;padding:0; width:15px;height:2px;background-color:#8aabe5;overflow:hidden;margin-top: 5px;" />
        <div style="color: white;margin-top: 10px;"><a href="contact.html">公司地址</a></div>
      </div>
      <div style="position: absolute;left: 45%;width: 1px;height: 70px; background: darkgray;float: left;margin-top:1%" />
      <div style="padding-left:35%;position:absolute;padding-top:1%;left:15%">
        <div style="color: white;font-size: 16px;">咨询服务热线:</div>
        <div style="color: white;font-size: 16px;">400-123-456</div>
        <div style="color: white;margin-top: 6px;">京ICP备16021487号-5  京公网安备11010802027588号</div>
      </div>
    </el-footer>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
