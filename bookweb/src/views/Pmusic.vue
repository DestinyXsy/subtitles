<template>
  <div class="Pmusic">
    <ul v-for="item in list" :key="item.index">
      <li>
        <div>
          <Aplayer :songInfo="item" :list="list" />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import Aplayer from "@/components/Music.vue";

export default {
  name: "Pmusic",
  components: {
    Aplayer,
  },
  data() {
    return {
      list: [
        {
          title: "典狱司", //歌曲名称
          artist: "音频怪物", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music1.mp3"), //音频文件的 URL
        },
        {
          title: "流浪的猫写情诗", //歌曲名称
          artist: "音阙诗听,李佳思", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music2.mp3"), //音频文件的 URL
        },
        {
          title: "清明梦", //歌曲名称
          artist: "音阙诗听,李佳思", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music3.mp3"), //音频文件的 URL
        },
        {
          title: "惊蛰", //歌曲名称
          artist: "音阙诗听,王梓钰", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music4.mp3"), //音频文件的 URL
        },
        {
          title: "夜宴风波", //歌曲名称
          artist: "音阙诗听,王梓钰", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music5.mp3"), //音频文件的 URL
        },
        {
          title: "流光记", //歌曲名称
          artist: "银临", //演唱者
          lrc: "", //LRC 歌词或者歌词文件的 URL
          pic: "", //封面图片 URL
          src: require("../assets/music/music6.mp3"), //音频文件的 URL
        },
      ],
    };
  },
};
</script>

<style scoped>
.Pmusic {
  height: 90%;
  overflow: auto;
}
.Pmusic::-webkit-scrollbar {
  width: 10px;
  background-color: #f5f5f5;
}
.Pmusic::-webkit-scrollbar-thumb {
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
</style>
