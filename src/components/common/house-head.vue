<template>
  <header class="house-head" @click="goBackPage">
    <span class="return-text">
      <span v-show="goBack" class="return"></span>
      {{ goBack }}
    </span>
    <span class="return-save" @click="jump" v-if="save">{{ save }}</span>
    <!--<span class="title"><slot></slot></span>-->
    <slot></slot>
  </header>
</template>
<script>
import { mapState } from 'vuex'
export default {
  template: '.house-head',
  computed: {
    ...mapState([
      'isBack','batchApplyId'
    ])
  },
  props: {
    goBack: {
      type: String,
      default: ''
    },
    save: {
      type: String,
      default: ''
    },
    direction: {
      type: String,
      default: ''
    },
    backUrl: {
      type: Object,
      default: undefined
    }
  },
  methods: {
    // 返回
    goBackPage (event) {
      if (event.target.className === 'return' || event.target.className === 'return-text') {
        if (this.backUrl && this.backUrl.name) {
          this.$router.push(this.backUrl.name);
        } else if (this.isBack) {
          this.$router.push({path: '/main/loanapply?batchApplyId='+this.batchApplyId})
          this.$store.dispatch('SET_ISBACK',false)
        } else {
          this.$router.back(-1);
        }
      } else if (event.target.className === 'return-save') {
        this.$emit('save');
      }
    },
    // 右侧按钮跳转
    jump () {
      this.$router.push(this.direction);
    }
  }
};
</script>
<style lang="less" scoped>
  @import './../../assets/less/house-head.less';
</style>
