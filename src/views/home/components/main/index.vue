<template>
  <el-tabs
    v-model="active"
    type="card"
    closable
    @tab-click="handleTabClick"
    @tab-remove="handleTabRemove"
    @click.middle="handleMiddleClick"
  >
    <el-tab-pane
      v-for="(item, index) in routeList"
      :key="index"
      :label="item.title"
      :name="item.path"
    >
      <router-view></router-view>
    </el-tab-pane>
  </el-tabs>
</template>

<script>
import {
  setTabList,
  getTabList,
  setTabPath,
  getTabPath,
} from "../../../../utils/storage/index.js";
export default {
  data() {
    return {
      active: "/index",
      routeList: [
        {
          title: "首页",
          path: "/index",
        },
      ],
    };
  },
  methods: {
    handleMiddleClick(e) {
      const { path } = this.routeList.find(
        (item) => e.target.innerText === item.title
      );
      this.handleTabRemove(path);
    },
    // 查重
    findObject(path) {
      const flag = this.routeList.find((item) => item.path === path);
      return !!flag;
    },
    handleTabClick(tab) {
      this.$router.replace({ path: tab.props.name });
    },
    handleTabRemove(path) {
      let idx = null;
      this.routeList = this.routeList.filter((item, index) => {
        if (item.path === path) {
          idx = index;
        }
        return item.path !== path;
      });
      if (this.routeList.length <= 0) {
        this.routeList = [
          {
            title: "首页",
            path: "/index",
          },
        ];
        this.active = "/index";
        this.$router.replace({ path: "/index" });
      }
      if (!this.findObject(this.$route.path)) {
        const routeIdx = idx === this.routeList.length ? 0 : idx;
        this.$router.replace({ path: this.routeList[routeIdx].path });
        this.active = this.routeList[routeIdx].path;
      }
    },
  },
  created() {
    if (getTabList() && getTabPath()) {
      this.active = getTabPath();
      this.routeList = getTabList();
    } else {
      if (this.$route.path !== "/index") {
        this.routeList.push({
          title: this.$route["meta"].title,
          path: this.$route.path,
        });
        this.active = this.$route.path;
      }
    }
  },
  watch: {
    $route(val) {
      const { title } = val["meta"];
      if (this.findObject(val.path)) {
        this.active = val.path;
      } else {
        this.routeList.push({
          title: title,
          path: val.path,
        });
        this.active = val.path;
      }
      setTabPath(val.path);
    },
    routeList: {
      handler(val) {
        setTabList(val);
      },
      deep: true,
    },
  },
};
</script>

<style></style>
