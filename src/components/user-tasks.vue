<template>
    <div class="user-tasks">
      <houseHead>我的申请</houseHead>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import houseHead from './common/house-head.vue';
  export default {
      template: '.user-tasks',
      data: function () {
          return {
              errorMessage: '',
              isHide: true,
              titleShow: true,
              dywFinish: false,
              glrFinish: false,
              jkxqFinish: false,
              disabled: true,
              batchApplyId: ''
          };
      },
      computed: {},
      components: { houseHead },
      methods: {
          init() {

          },
      },
      mounted: function () {
          this.init()
      }
  };
</script>
<style lang="less">
    @import './../assets/less/user-tasks.less';
</style>
