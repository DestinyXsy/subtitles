<template>
  <div class="about">
    <h1>This is an about page</h1>
    <div>
      <van-button v-if="!i" @click="video">开始会议</van-button>
      <van-button v-if="i" @click="video">结束会议</van-button>
      <div v-if="i">
        <Stream :i="this.i" :key="timer" />
      </div>
    </div>
  </div>
</template>

<script>
import { Button } from "vant";
import Stream from "../components/stream.vue";

export default {
  name: "conference",
  components: {
    Stream,
    [Button.name]: Button,
  },
  data() {
    return {
      i: 0,
      timer: "",
    };
  },
  methods: {
    video: function () {
      //console.log('a')
      if (!this.i) {
        this.i = 1;
        //console.log(this.i)
        //this.$set(this.show,"botton","开始会议")
      } else {
        this.i = 0;
        //console.log(this.i)
        // this.$set(this.show,"button","结束会议")
      }
      this.timer = new Date().getDate();
    },
  },
};
</script>

<style scoped>
.about {
  overflow: auto;
}
</style>