<template>
  <div>
    <register :atype="typename[0]" :show="show" />
  </div>
</template>

<script>
import register from "@/components/register.vue";

export default {
  name: "data",
  components: { register },
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
