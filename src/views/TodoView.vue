<template>
  <div class="">
    <!-- <div class="text-right justify-end">
      <RouterLink to="/login" class="py-1 px-3 text-white rounded-bl-lg bg-sky-400 hover:bg-sky-600">Sign-in</RouterLink>
    </div> -->
    <div
      class="container-todo flex flex-col mx-auto justify-center items-center"
    >
      <h1 class="text-2xl sm:text-4xl font-bold">
        <span v-if="full_name != null" class="text-sky-500">{{
          full_name
        }}</span>
        Notes
      </h1>
      <div class="my-4">
        <form
          class="flex flex-col sm:flex-row shadow-sm w-72 sm:w-full"
          @submit.prevent="addTodo"
        >
          <div class="flex flex-col">
            <input
              v-model.lazy="inputTitle"
              class="py-2 px-3 w-full sm:w-96 rounded-tl-lg rounded-tr-lg sm:rounded-tr-none bg-slate-100 focus:outline-none border-2"
              type="text"
              placeholder="Title"
            />
            <input
              v-model.lazy="inputDesc"
              class="py-0 px-3 w-full sm:w-96 h-24 sm:rounded-bl-lg bg-slate-100 focus:outline-none border-2"
              type="text"
              placeholder="Description"
            />
          </div>
          <div class="flex flex-col">
            <a
              class="order-last sm:order-first tooltip tooltip-bottom sm:tooltip-right flex h-10 w-full py-1 mx-auto justify-center items-center rounded-bl-lg rounded-br-lg sm:rounded-bl-none sm:rounded-br-none sm:rounded-tr-lg text-white text-center bg-sky-300 hover:bg-sky-500"
              data-tip="View List"
              href="/list"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M14 3v2h3.59l-9.83 9.83l1.41 1.41L19 6.41V10h2V3m-2 16H5V5h7V3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7h-2z"
                /></svg
            ></a>
            <input
              class="py-2 px-3 h-full sm:rounded-br-lg bg-gradient-to-r from-sky-300 to-sky-400 hover:from-sky-500 hover:to-sky-600 transition-colors duration-300 text-white font-bold hover:cursor-pointer"
              type="submit"
              value="Submit"
            />
          </div>
        </form>
      </div>
      <a href="/logout" class="text-sky-400">Logout</a>
    </div>
    <div class="text-center text-slate-400">
      Copyright {{ copyright }}. BalApp
    </div>
  </div>
</template>
<script>
// import { RouterLink } from "vue-router";
import supabase from "@/lib/supabase";

export default {
  data() {
    return {
      copyright: "",
      inputTitle: "",
      inputDesc: "",
      noteStatus: "Idle",
      users: {},
      full_name: "",
    };
  },
  methods: {
    async addTodo() {
      // eslint-disable-next-line no-unused-vars
      const { data, error } = await supabase
        .from("notes")
        .insert([
          {
            note_title: this.inputTitle,
            note_desc: this.inputDesc,
            note_status: this.noteStatus,
          },
        ])
        .select();

      window.alert("Your note is recorded");
    },
    toList() {
      window.location.href = "/list";
    },
  },
  mounted() {
    let date = new Date();
    this.copyright = date.getFullYear();

    window.onload = async () => {
      const {
        data: { user },
        error: errUser,
      } = await supabase.auth.getUser();
      if (errUser) {
        alert("Please login first");
        window.location.href = "http://app.balramadan.xyz/loginTodo";
        // eslint-disable-next-line no-unused-vars
        // const { data, error } = await supabase.auth.signInWithOAuth({
        //   provider: "github",
        //   options: {
        //     redirectTo: "http://localhost:5173"
        //   }
        // })
      } else {
        this.users = user;
        this.full_name = user.user_metadata.full_name;
      }
    };
  },
  components: {
    // RouterLink,
  },
};
</script>
<style>
.container-todo {
  height: 95vh;
  width: 100%;
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}
</style>
