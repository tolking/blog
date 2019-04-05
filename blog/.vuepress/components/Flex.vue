<template>
<section class="flex">
  <div class="flex-select">
    <span>flex-</span>
    <select v-model="_flexFlow" class="select-item">
      <option v-for="(item, index) in flexFlowList" :key="index" :value="item">{{ item }}</option>
    </select>
    <select v-model="justifyContent" class="select-item">
      <option v-for="(item, index) in justifyContentList" :key="index" :value="item">{{ item }}</option>
    </select>
    <select v-model="alignItems" class="select-item">
      <option v-for="(item, index) in alignItemsList" :key="index" :value="item">{{ item }}</option>
    </select>
    <select v-model="alignContent" :disabled="flexFlow === 'x' || flexFlow === 'y'" class="select-item">
      <option v-for="(item, index) in alignContentList" :key="index" :value="item">{{ item }}</option>
    </select>
  </div>
  <div @click="changeCount(1)" class="flex-btn">add</div>
  <div @click="changeCount(-1)" class="flex-btn">del</div>
  <div ref="flexBox" :class="'flex-' + flexFlow + justifyContent + alignItems + alignContent" class="flex-box">
    <div v-for="(item, index) in count" :key="index" class="box-item">{{ "box" + item }}</div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
      flexFlow: 'x',
      flexFlowList: ['x', 'y', 'w', 'm'],
      justifyContent: 'c',
      justifyContentList: ['s', 'a', 'b', 'c', 'e'],
      alignItems: 'c',
      alignItemsList: ['s', 'b', 'c', 'e', 'h'],
      alignContent: '',
      alignContentList: ['', 's', 'a', 'b', 'c', 'e']
    }
  },
  computed: {
    _flexFlow: {
      get () {
        return this.flexFlow
      },
      set (value) {
        this.flexFlow = value
        if (value === 'x' || value === 'y') this.alignContent = ''
      }
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
    .select-item {
      .box(4rem, 3rem);
    }
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
