<template>
<section class="flex">
  <div class="flex-select">
    <p style="display:inline-block">flex-</p>
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
  <div :style="setStyle()" class="flex-box">
    <div v-for="(item, index) in count" :key="index" class="box-item">{{ "box" + item }}</div>
  </div>
</section>
</template>

<script>
export default {
  data() {
    return {
      count: 2,
      style: '',
      flexFlow: 'x',
      flexFlowList: ['_', 'x', 'y', 'w', 'm'],
      justifyContent: 'c',
      justifyContentList: ['_', 's', 'a', 'b', 'c', 'e'],
      alignItems: 'c',
      alignItemsList: ['_', 's', 'b', 'c', 'e', 'h'],
      alignContent: '_',
      alignContentList: ['_', 's', 'a', 'b', 'c', 'e']
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
    },
    setStyle() {
      let style = 'display: flex;'
      if (this.flexFlow) {
        style += {
          x: 'flex-flow: row nowrap;',
          y: 'flex-flow: column wrap;',
          w: 'flex-flow: row wrap;',
          m: 'flex-flow: column wrap;'
        }[this.flexFlow]
      }
      if (this.justifyContent) {
        style += {
          s: 'justify-content: flex-start;',
          a: 'justify-content: space-around;',
          b: 'justify-content: space-between;',
          c: 'justify-content: center;',
          e: 'justify-content: flex-end;'
        }[this.justifyContent]
      }
      if (this.alignItems) {
        style += {
          s: 'align-items: flex-start;',
          b: 'align-items: baseline;',
          c: 'align-items: center;',
          e: 'align-items: flex-end;',
          h: 'align-items: stretch;'     
        }[this.alignItems]
      }
      if (this.alignContent) {
        style += {
          s: 'align-content: flex-start;',
          a: 'align-content: space-around;',
          b: 'align-content: space-between;',
          c: 'align-content: center;',
          e: 'align-content: flex-end;'
        }[this.alignContent]
      }
      this.style = style
      return style
    }
  },
}
</script>

<style lang="postcss" scoped>
.flex {
  --c-btn: #0074d9;
  --c-white: #fff;
  --c-bg: #f3f5f7;
  --c-border: #eaecef;
  --c-text: #2c3e50;
  width: 100%;
}
@media (prefers-color-scheme: dark) {
  .flex {
    --c-white: #3e3b3b;
    --c-bg: #282c34;
    --c-border: #4e4e4e;
    --c-text: #ccc;
  }
}
.flex .flex-select {
  display: inline-block;
  vertical-align: top;
  margin: 1rem 1rem 0;
}
.flex .flex-select .select-item {
  width: 4rem;
  height: 3rem;
  border-color: var(--c-border);
  background: var(--c-bg);
  color: var(--c-text);
}
.flex .flex-btn {
  display: inline-block;
  vertical-align: top;
  margin: 1rem;
  btn: 8rem 3rem .5rem var(--c-btn);
  font-size: 1rem;
  color: #fff;
}
.flex .flex-box {
  margin: 2rem 0;
  width: 100%;
  height: 500px;
  background: var(--c-bg);
  resize: both;
  overflow: auto;
}
.flex .flex-box .box-item {
  padding: 5rem;
  border: 1px var(--c-border) solid;
  background: var(--c-white);
  color: var(--c-text);
}
</style>
