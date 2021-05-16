<template>
  <div>
    <rejester :atype="typename[0]" :show="show" />
  </div>
</template>

<script>
import rejester from "@/components/rejester.vue";

export default {
  name: "data",
  components: { rejester },
  data() {
    return {
      typename: ["登录", "注册"],
      show: false,
      isRegister: false,
    };
  },
};
</script>

<style scoped>
</style>
