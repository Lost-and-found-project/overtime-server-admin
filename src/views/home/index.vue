<template>
  <el-container id="home">
    <el-header><Header></Header></el-header>
    <el-container id="bottom">
      <el-aside><Aside></Aside></el-aside>
      <el-main><Main></Main></el-main>
    </el-container>
  </el-container>
</template>

<script>
import Header from "./components/header/index.vue";
import Aside from "./components/aside/index.vue";
import Main from "./components/main/index.vue";
export default {
  components: {
    Header,
    Aside,
    Main,
  },
};
</script>

<style lang="scss" scoped>
.el-header {
  background-color: #b3c0d1;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 60px;
}

.el-aside {
  color: var(--el-text-color-primary);
  text-align: center;
}

.el-main {
  background-color: #e9eef3;
  color: var(--el-text-color-primary);
  text-align: center;
  line-height: 160px;
}
#home {
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
}
</style>
