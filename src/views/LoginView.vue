<template>
  <div class="">
    <div class="text-left justify-start">
      <RouterLink
        to="/"
        class="py-1 px-3 text-white rounded-br-lg bg-sky-400 hover:bg-sky-600"
        >Back</RouterLink
      >
    </div>
    <div
      class="container-login flex flex-col gap-2 justify-center items-center mx-auto"
    >
      <h1 class="text-2xl font-bold text-sky-400 mb-4">Login</h1>
      <div class="flex flex-row">
        <form @submit.prevent="submitEmail">
          <input
            v-model.lazy="emailInput"
            class="py-2 px-3 w-60 bg-slate-200 focus:outline-none"
            type="email"
            placeholder="Enter your email..."
            required
          />
          <input
            class="px-3 h-full font-bold text-white hover:cursor-pointer bg-sky-400"
            type="submit"
            value="Login"
          />
        </form>
      </div>
      <!-- <VueHcaptcha
        sitekey="10000000-ffff-ffff-ffff-000000000001"
        @error="onError"
        @verify="onVerify"
        @expired="onExpire"
        @challengeExpired="onChallengeExpire"
        size="normal"
      /> -->
    </div>
  </div>
</template>
<script>
import supabase from "../lib/supabase";
// import VueHcaptcha from "@hcaptcha/vue3-hcaptcha";

export default {
  data() {
    return {
      session: "",
      emailInput: '',
      captchaToken: {},
      eKey: {},
      dataLogin: [],
    }
  },
  methods: {
    // onVerify(token, eKey) {
    //   this.captchaToken = token;
    //   this.eKey = eKey;
    //   console.log(this.captchaToken, this.eKey)
    // },
    // onExpire() {
    //   console.log("Token expired");
    // },
    // onChallengeExpire() {
    //   console.log("Challenge expired");
    // },
    // onError(err) {
    //   console.log("Error", err);
    // },
    async submitEmail() {
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase.auth.signInWithOtp({
        email: this.emailInput,
        options: {
          // set this to false if you do not want the user to be automatically signed up
          shouldCreateUser: false,
          // captchaToken: this.captchaToken,
        },
      });
      this.dataLogin = data;

      if(error) {
        alert(error);
      } else {
        location.href("/verify")
      }
    },
  },
  components: {
    // VueHcaptcha,
  },
};
</script>
<style>
.container-login {
  height: 95vh;
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
