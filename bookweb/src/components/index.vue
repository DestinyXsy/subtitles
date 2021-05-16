<template>
  <div class="Index">
    <van-row class="swipe_text">
      <van-col span="8">
        <div class="text">
          <h3>警句名言</h3>
          <div v-html="infomation"></div>
        </div>
      </van-col>
      <van-col span="16">
        <van-swipe :autoplay="6000" @change="OnChange">
          <van-swipe-item
            class="swipe-item"
            width="600"
            height="600"
            v-for="(image, index) in images"
            :key="index"
          >
            <van-image class="img" :src="image" :v-lazy="image" fit="contain" />
          </van-swipe-item>
        </van-swipe>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Col, Row, Swipe, SwipeItem, Lazyload, Image as VanImage } from "vant";
export default {
  name: "Index",
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [VanImage.name]: VanImage,
  },
  data() {
    return {
      infomation:
        "<p>读书无嗜好，就能尽其多。不先泛览群书，则会无所适从或失之偏好，广然后深，博然后专。\
            　——鲁迅</p>",
      images: [
        require('../assets/image/image2.png'),
        require('../assets/image/image3.png'),
        require('../assets/image/image5.png')
      ],
      info: [
        {
          id: 1,
          content:
            "<p>读书无嗜好，就能尽其多。不先泛览群书，则会无所适从或失之偏好，广然后深，博然后专。\
            　——鲁迅</p>",
        },
        {
          id: 2,
          content:
            "<p>知古不知今，谓之落沉。知今不知古，谓之盲瞽。\
            　——王充</p>",
        },{
          id: 3,
          content:
            "<p>如果我阅读得和别人一样多，我就知道得和别人一样少。\
            　——霍伯斯</p>",
        }
      ],
    };
  },
  methods: {
    OnChange(index) {
      if (index == 0) this.infomation = this.info[1].content;
      else this.infomation = this.info[0].content;
    },
  },
};
</script>

<style scoped>
 .my-swipe .van-swipe-item {
    color: #fff;
    font-size: 20px;
    line-height: 150px;
    text-align: center;
    background-color: #39a9ed;
  }
  .swipe-item{
   height: 600px;
    width: 600px;
}
</style>