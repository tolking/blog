<template>
<section class="flex">
  <select v-model="flexName" class="flex-select">
    <option v-for="(item, index) in className" :key="index" :value="item">{{ item }}</option>
  </select>
  <div @click="changeCount(1)" class="flex-btn">add</div>
  <div @click="changeCount(-1)" class="flex-btn">del</div>
  <div ref="flexBox" :class="flexName" class="flex-box">
    <div v-for="(item, index) in count" :key="index" class="box-item">{{ "box" + item }}</div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      flexName: "flex-cc",
      count: 2,
      className: [
        "flex-x",
        "flex-y",
        "flex-cb",
        "flex-cbc",
        "flex-ccc",
        "flex-cw",
        "flex-a",
        "flex-as",
        "flex-b",
        "flex-bc",
        "flex-bs",
        "flex-c",
        "flex-cc",
        "flex-cs",
        "flex-w",
        "flex-wa",
        "flex-wac",
        "flex-was",
        "flex-wb",
        "flex-wbc",
        "flex-wbs",
        "flex-wc",
        "flex-wcc",
        "flex-wcs"
      ]
    }
  },
  methods: {
    changeCount(n) {
      this.count += n;
      this.count = this.count || 1;
    }
  },
}
</script>

<style lang="less" scoped>
@import url("../less/mixins");
@import url("../less/flex");

.flex {
  width: 100%;
  .flex-select {
    .d-ibt;
    .m(1rem 1rem 0);
    .box(8rem, 3rem);
  }
  .flex-btn {
    .d-ibt;
    .m(1rem);
    .btn(8rem, 3rem, 0.5rem);
    .box>.shadow;
    .font(1rem, @c-white);
  }
  .flex-box {
    .m(2rem 0);
    .box(100%, 500px);
    .bg(#f3f5f7);
    .res-b;
    .box-item {
      .p(5rem);
      .box>.border;
      .bg(@c-white);
    }
  }
}
</style>
