<template>
    <div class="user-center">
      <houseHead>个人中心</houseHead>
    </div>
</template>
<script>
  import {mapGetters} from 'vuex';
  import houseHead from './common/house-head.vue';
  export default {
      template: '.user-center',
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
    @import './../assets/less/user-center.less';
</style>
