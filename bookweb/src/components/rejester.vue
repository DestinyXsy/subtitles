<template>
  <div class="rejester">
    <van-form @submit="onSubmit">
      <van-field
        v-model="username"
        name="用户名"
        label="用户名"
        placeholder="用户名"
        :rules="[{ required: true, message: '请填写用户名' }]"
      />
      <van-field
        v-model="password"
        type="password"
        name="密码"
        label="密码"
        placeholder="密码"
        maxlength="20"
        show-word-limit
        :rules="[{ required: true, message: '请填写密码' }]"
      >
      </van-field>
      <van-field
        v-if="show"
        v-model="phoneNumber"
        name="手机号"
        label="手机号"
        placeholder="手机号"
        :rules="[{ required: true, message: '请填写手机号' }]"
      />
      <van-field
        v-if="show"
        v-model="identifyingCode"
        name="验证码"
        label="验证码"
        placeholder="验证码"
        :rules="[{ required: true, message: '请填写验证码' }]"
      >
        <template #button="">
          <van-button native-type="button" @click="sendCode">{{
            buttonName
          }}</van-button>
        </template>
      </van-field>

      <br />
      <van-button type="info" native-type="sumbit">{{ atype }}</van-button>
    </van-form>
  </div>
</template>

<script>
import { Form, Button, Field } from "vant";

export default {
  name: "rejester",
  components: {
    [Form.name]: Form,
    [Button.name]: Button,
    [Field.name]: Field,
  },
  props: {
    atype: String,
    show: Boolean,
  },
  data() {
    return {
      buttonName: "发送验证码",
      username: "",
      password: "",
      phoneNumber: "",
      identifyingCode: "",
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
      let users = localStorage.users;
      if (this.atype == "注册") {
        if (users) {
          users = JSON.parse(users);
        } else {
          users = [];
        }
        users.push({
          username: this.username,
          password: this.password,
        });
        localStorage.users = JSON.stringify(users);
      } else {
        let userInfo = localStorage.userInfo;
        if (userInfo) {
          userInfo = JSON.parse(userInfo);
          let rel = false;
          userInfo.map((item) => {
            if (
              this.username == item.username &&
              this.password == item.password
            ) {
              rel = true;
              return;
            }
          });

          if (rel) {
            sessionStorage.username = this.username;
            this.$router.push({
              path: "/message",
            });
          } else {
            this.$notify({
              message: "账户或密码输入有误 请确认后再试！",
            });
          }
        }
      }
    },
    sendCode() {
      console.log("code");
    },
  },
};
</script>

<style scoped>
.register {
  width: 40%;
  height: 500px;
  position: relative;
  left: 30%;
  top: 100px;
  background-color: white;
}
</style>
