<template>
  <div class="modal" v-if="isShow" @click="hide">
    <div class="fadeLeft animated modal-inner" @click="stopPropagation">
      <slot></slot>
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from 'vue-property-decorator';

@Component({
  components: {},
})
export default class Home extends Vue {}
</script>

<style lang="less" scoped>
.modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: #d3dce6;
  z-index: 1000;
}
.modal-inner {
  width: 400px;
  background: #ffffff;
  height: 100%;
}
</style>
