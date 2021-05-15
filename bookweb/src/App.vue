<template>
  <div id="app">
    <div>
      <van-row class="row">
        <van-col span="3.5">
          <van-image
          style="position:relative;left:30px;"
          round
          width="80"
          height="80"
          :src="require('./assets/image/image8.jpg')"/>
        </van-col>
        <van-col span="0.5"
          ><van-icon
          style="position:relative;left:50px;top:28px;"
            size="32"
            name="https://b.yzcdn.cn/vant/icon-demo-1126.png"
            @click="showChannel"
          ></van-icon
        ></van-col>
        <van-col
          span="2"
          class="col"
          style="color: black;position:relative;left:100px"
          v-if="!cur"
          @click="unshow"
          ><router-link to="/">主页</router-link></van-col
        >
        <van-col span="8"></van-col>
        <van-col span="3" class="col" @click="show"
          ><router-link to="/video">视频演绎</router-link></van-col
        >
        <van-col span="3" class="col" @click="show"
          ><router-link to="/book">配音朗诵</router-link></van-col
        >
        <van-col span="3" class="col" @click="show"
          ><router-link to="/data">书友交流</router-link></van-col
        >
      </van-row>
    </div>
    <div class="channel" id="channel">
      <van-image
        round
        width="5rem"
        height="5rem"
        class="topimage"
        :src="image"
      />
      <p style="display: block">{{ username }}</p>
      <p style="display: block; font-weight: 100; color: black">
        登录状态：已登录 <van-icon name="checked" color="#00FF00" />
      </p>
      <br />
      <br />
      <br />
      <ul>
        <li @click="showO = true">文件上传</li>
        <li>退出登录</li>
      </ul>
      <van-overlay :show="showO" @click="showO = false">
        <div class="wrapper">
          <div class="block" @click.stop>
            <h1 style="color: black">文件上传</h1>
            <van-field
              name="标题"
              label="标题"
              placeholder="标题"
              :rules="[{ required: true, message: '请输入标题' }]"
            />
            <p style="float: left; margin: 10px; color: black">请选择：</p>
            <br />
            <br />
            <br />
            <van-uploader
              style="display: block; margin: 20px"
              v-model="fileList"
              :after-read="afterRead"
            />
            <br />
            <br />
            <br />
            <van-button
              native-type="submit"
              type="info"
              style="display: block; margin: 0 auto"
              @click="onSubmit"
              :disabled="showS ? false : true"
              >提交</van-button
            >
          </div>
        </div>
      </van-overlay>
    </div>
    <div class="body" @click="hideChannel">
      <router-view @click="hideChannel"></router-view>
    </div>
  </div>
</template>

<script>
import {
  Col,
  Row,
  Swipe,
  SwipeItem,
  Lazyload,
  Image as VanImage,
  Button,
  Icon,
  Overlay,
  Uploader,
  Field,
} from "vant";
export default {
  name: "App",
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem,
    [Lazyload.name]: Lazyload,
    [VanImage.name]: VanImage,
    [Button.name]: Button,
    [Icon.name]: Icon,
    [Overlay.name]: Overlay,
    [Uploader.name]: Uploader,
    [Field.name]: Field,
  },
  data() {
    return {
      cur: true,
      image: require("./assets/image/image1.jpg"),
      isRegisterA: true,
      showC: false,
      username: "xxy",
      showO: false,
      showS: false,
      fileList: [
        /*{
          url: 'https://img01.yzcdn.cn/vant/leaf.jpg',
          status: 'uploading',
          message: '上传中...',
        },
        {
          url: 'https://img01.yzcdn.cn/vant/tree.jpg',
          status: 'failed',
          message: '上传失败',
        },*/
      ],
    };
  },
  methods: {
    show() {
      this.cur = false;
      this.$forceUpdate();
    },
    unshow() {
      this.cur = true;
      this.$forceUpdate();
    },
    showChannel() {
      if (this.isRegisterA && !this.showC) {
        document.getElementById("channel").style.display = "block";
        this.showC = true;
      }
    },
    hideChannel() {
      this.showC = false;
      document.getElementById("channel").style.display = "none";
    },
    afterRead(file) {
      file.status = "uploading";
      file.message = "上传中...";

      setTimeout(() => {
        file.status = "failed";
        file.message = "上传失败";
      }, 1000);
      console.log(file);
      if (file.message == "上传失败") {
        this.showS = false;
      }
    },
    onSubmit() {},
  },
  mounted:{
    
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #648e93;
  height: 100%;
  width: 100%;
  background-color: #f2e9e1;
  position: fixed;
  overflow: hidden;
}

.body {
  height: 100%;
  width: 100%;
  position: relative;
}
.row {
  background-color: white;
}
.col {
  margin: 0 0.1%;
  padding: 1.5% 0% 2% 0%;
  text-align: center;
  color: white;
  font-weight: 500;
  font-family: "隶书";
  font-size: 30px;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: white;
}

.router-link-active {
  color: red;
}

.inner {
  filter: Alpha(Opacity=70);
  -moz-opacity: 0.6;
  opacity: 0.6;
  width: 100%;
  height: 200px;
  margin: 0;
}

.swipe_text {
  height: 70%;
  margin: 5%;
  padding: 5% 0;
}

.text {
  padding: 0 2%;
  margin: 0%;
}

.img {
  width: 70%;
  height: 70%;
}

.swipe_item {
  width: 50%;
  height: 50%;
}

.channel {
  width: 200px;
  height: 300px;
  background-color: white;
  position: absolute;
  z-index: 9999;
  top: 50px;
  left:160px;
  display: none;
  border: 1px solid black;
}

.topimage {
  position: relative;
  top: 10px;
}

.wrapper {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
}

.block {
  width: 500px;
  height: 420px;
  background-color: #fff;
}
</style>
