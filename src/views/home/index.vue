<template>
  <el-container id="home">
    <el-aside><Aside></Aside></el-aside>
    <el-container id="bottom">
      <el-header><Header></Header></el-header>
      <el-main><Main></Main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./components/header/index.vue"
import Aside from "./components/aside/index.vue"
import Main from "./components/main/index.vue"
export default {
  components: {
    Header,
    Aside,
    Main,
  },
}
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #f0f2f5;
  height: 64px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.el-main {
  background-color: #fff;
  padding: 20px;
}
.el-aside {
  width: auto;
  background-color: #001529;
}
#home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
