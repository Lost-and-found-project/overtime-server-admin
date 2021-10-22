<template>
  <div class="logo">
    <img src="../../../../assets/images/logo.png" alt="logo" />
  </div>
  <el-menu
    background-color="#001529"
    text-color="rgba(255, 255, 255, 0.65)"
    active-text-color="#fff"
    class="el-menu-vertical-demo"
    :router="true"
    :default-active="currentPath"
  >
    <template v-for="(item, index) in menuList" :key="index">
      <el-menu-item v-if="!item.children" :index="item.path">
        <template #title>
          <i class="el-icon-male"></i>
          <span>{{ item["meta"].title }}</span>
        </template>
      </el-menu-item>
      <el-sub-menu index="1" v-else>
        <template #title>
          <i class="el-icon-male"></i>
          <span>{{ item["meta"].title }}</span>
        </template>
        <el-menu-item-group>
          <el-menu-item
            v-for="(val, idx) in item.children"
            :key="idx"
            :index="item.path + '/' + val.path"
          >
            {{ val["meta"].title }}
          </el-menu-item>
        </el-menu-item-group>
      </el-sub-menu>
    </template>
  </el-menu>
</template>

<script>
export default {
  computed: {
    menuList() {
      return this.$router.options.routes[1].children
    },
    currentPath() {
      return this.$route.path
    },
  },
}
</script>

<style lang="scss" scoped>
.logo {
  height: 64px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #00284d;
}
.el-menu {
  border: none;
  width: 256px;
}
</style>
