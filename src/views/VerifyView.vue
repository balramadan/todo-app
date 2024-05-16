<template>
  <div class="">
    <div
      class="container-verify flex flex-col gap-2 justify-center items-center mx-auto"
    >
      <h1 class="text-2xl font-bold text-sky-400 mb-4">Verification</h1>
      <div class="flex flex-row">
        <form @submit.prevent="submitOtp">
          <input
            v-model.lazy="otpInput"
            class="py-2 px-3 w-60 bg-slate-200 focus:outline-none"
            type="text"
            placeholder="Enter your otp code..."
          />
          <input
            class="px-3 h-full font-bold text-white hover:cursor-pointer bg-sky-400"
            type="submit"
            value="Verified"
          />
        </form>
      </div>
      {{ otpInput }}
    </div>
  </div>
</template>
<script>
// eslint-disable-next-line no-unused-vars
import supabase from "../lib/supabase";

export default {
  data() {
    return {
      otpInput: "",
    };
  },
  methods: {
    async submitOtp() {
      // eslint-disable-next-line no-unused-vars
      const { data: { session }, error,} = await supabase.auth.verifyOtp({ 
        // eslint-disable-next-line no-undef
        email,
        token: "123456",
        type: "email",
      });
    },
  },
};
</script>
<style>
.container-verify {
  height: 100vh;
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
