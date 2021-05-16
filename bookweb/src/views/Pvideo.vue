<template>
  <div class="pvideo">
    <AVideo />
  </div>
</template>

<script>
//import AVideo from '@/components/video.vue'
import { Col, Row } from "vant";
export default {
  name: "Pvideo",
  components: {
    [Col.name]: Col,
    [Row.name]: Row,
  },
  data() {
    return {
      video: [1, 2, 3],
    };
  },
};
</script>
