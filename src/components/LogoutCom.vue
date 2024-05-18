<template lang="">
  <div></div>
</template>
<script>
import supabase from "@/lib/supabase";

export default {
  async mounted() {
    // eslint-disable-next-line no-unused-vars
    const { error } = await supabase.auth.signOut({
      scope: "local",
    });
    sessionStorage.clear();
    localStorage.clear();
    function redirectToHome() {
        window.location.href = '/';
    }
    setInterval(redirectToHome, 2000)
  },
};
</script>
<style lang=""></style>
