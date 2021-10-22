<template>
  <el-breadcrumb separator-class="el-icon-arrow-right">
    <el-breadcrumb-item
      v-for="(item, index) in breadList"
      :key="index"
      :to="{ ...item }"
    >
      {{ item.title }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
export default {
  computed: {
    breadList() {
      const { matched } = this.$route
      matched.splice(0, 1)
      const list = matched.map((item) => {
        return {
          path: item.path,
          title: item["meta"].title,
        }
      })
      return list
    },
  },
}
</script>

<style></style>
