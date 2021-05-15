<template>
  <div class="video">
    <ul class="videoStyle" v-for="(item, index) in videolist" :key="item.index">
      <li>
        <div>
          <video-player
            class="video-player vjs-custom-skin"
            ref="videoPlayer"
            :playsinline="true"
            :options="playerOptions[index]"
            @play="onPlayerPlay($event, index)"
          >
          </video-player>
          <div class="outline">{{ item.outline }}</div>
        </div>
      </li>
    </ul>
    <div></div>
  </div>
</template>

<script>
import "video.js/dist/video-js.css";
import "vue-video-player/src/custom-theme.css";
export default {
  name: "AVideo",
  data() {
    return {
      videolist: [
        {
          title: "a",
          video: require("../assets/video/video1.mp4"),
          outline: "1",
        },
        {
          title: "b",
          video: require("../assets/video/video2.mp4"),
          outline: "2",
        },
        {
          title: "c",
          video: require("../assets/video/video3.mp4"),
          outline: "3",
        },
        {
          title: "d",
          video: require("../assets/video/video4.mp4"),
          outline: "4",
        },
        {
          title: "e",
          video: require("../assets/video/video5.mp4"),
          outline: "5",
        },
        {
          title: "f",
          video: require("../assets/video/video6.mp4"),
          outline: "6",
        },
        {
          title: "g",
          video: require("../assets/video/video7.mp4"),
          outline: "7",
        },
        {
          title: "h",
          video: require("../assets/video/video8.mp4"),
          outline: "8",
        },{
          title: "i",
          video: require("../assets/video/video9.mp4"),
          outline: "9",
        },{
          title: "k",
          video: require("../assets/video/video10.mp4"),
          outline: "10",
        },{
          title: "l",
          video: require("../assets/video/video11.mp4"),
          outline: "11",
        },{
          title: "m",
          video: require("../assets/video/video12.mp4"),
          outline: "12",
        },{
          title: "n",
          video: require("../assets/video/video13.mp4"),
          outline: "13",
        },{
          title: "o",
          video: require("../assets/video/video14.mp4"),
          outline: "14",
        },{
          title: "p",
          video: require("../assets/video/video15.mp4"),
          outline: "15",
        },
      ],
      playerOptions: [],
      playsinline: false,
      option: "",
    };
  },
  created() {
    this.getVideoList();
  },
  methods: {
    getVideoList() {
      for (var i = 0; i < this.videolist.length; i++) {
        let arrs = {
          //播放速度
          playbackRates: [0.5, 1.0, 1.5, 2.0],
          //如果true,浏览器准备好时开始回放。
          autoplay: false,
          // 默认情况下将会消除任何音频。
          muted: false,
          // 导致视频一结束就重新开始。
          loop: false,
          // 建议浏览器在<video>加载元素后是否应该开始下载视频数据。auto浏览器选择最佳行为,立即开始加载视频（如果浏览器支持）
          preload: "auto",
          language: "zh-CN",
          // 将播放器置于流畅模式，并在计算播放器的动态大小时使用该值。值应该代表一个比例 - 用冒号分隔的两个数字（例如"16:9"或"4:3"）
          aspectRatio: "16:9",
          // 当true时，Video.js player将拥有流体大小。换句话说，它将按比例缩放以适应其容器。
          fluid: true,
          sources: [
            {
              //类型
              type: "video/mp4",
              //url地址
              src: this.videolist[i].video,
            },
          ],
          //你的封面地址
          poster: "",
          //封面标题
          //允许覆盖Video.js无法播放媒体源时显示的默认信息。
          notSupportedMessage: "此视频暂无法播放，请稍后再试",
          controlBar: {
            timeDivider: false,
            durationDisplay: false,
            remainingTimeDisplay: false,
            //全屏按钮
            fullscreenToggle: true,
          },
        };

        this.playerOptions.push(arrs);
      }
    },
    onPlayerPlay(player, index) {
      var that = this.$refs.videoPlayer;
      for (let i = 0; i < that.length; i++) {
        if (i != index) that[i].player.pause();
      }
    },
  },
};
</script>

<style>
.video {
  height: 85%;
  overflow: auto;
}
.videoStyle {
  position: relative;
  top: 30px;
  float: left;
  width: 255px;
  height: 190px;
  text-align: center;
  line-height: 10px;
  border: 0 0 0 1px solid transparent;
  border-radius: 2%;

  border-bottom-width: 5px;
  overflow: hidden;
  background: #fff;
  position: relative;
  box-shadow: 0 1px 1px rgba(0, 0, 0, 0.2);
  padding: auto;
  margin: 15px;
}
.video::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
.video::-webkit-scrollbar-thumb {
  border-radius: 10px;
  background-image: -webkit-gradient(
    linear,
    left bottom,
    left top,
    color-stop(0.44, rgb(122, 153, 217)),
    color-stop(0.72, rgb(73, 125, 189)),
    color-stop(0.86, rgb(28, 58, 148))
  );
}

.outline {
  position: relative;
  top: 15px;
  text-align: center;
  font-family: "仿宋";
}
</style>

