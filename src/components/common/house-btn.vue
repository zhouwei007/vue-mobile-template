<template>
  <a href="javascript:;"  class="house-btn" @click="handleSave">{{title}}</a>
</template>
<script>
export default {
  template: '.house-btn',
  props: {
    title: String,
    isLoginBtn: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      defaul:false
    }
  },
  methods: {
    handleSave () {
      this.$emit('toSave');
    }
  }
};
</script>
<style lang="less" scoped>
  @import './../../assets/less/house-btn.less';
</style>
