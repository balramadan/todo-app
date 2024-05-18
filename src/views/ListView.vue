<!-- eslint-disable vue/require-v-for-key -->
<template lang="">
  <div class="px-5 py-5 sm:px-20">
    <h1 class="text-xl sm:text-3xl text-center font-bold text-sky-500">
      List Todo
    </h1>
    <a class="btn mt-5 text-white bg-sky-400 hover:bg-sky-600" href="/">Add New</a>
    <div
      class="grid mt-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5"
    >
      <div
        v-for="i in data"
        class="grid grid-rows-3 py-3 px-4 bg-sky-500 text-white rounded shadow"
      >
        <div>
          <h2 class="font-semibold">{{ i.note_title }}</h2>
          <hr class="my-3 opacity-55" />
        </div>
        <div>
          <p>{{ i.note_desc }}</p>
        </div>
        <div>
          <hr class="my-3 opacity-55" />
          <div class="flex flex-row justify-between items-center">
            <span
              class="text-xs border py-1 px-2 rounded-full bg-white text-sky-500"
              >{{ i.note_status }}</span
            >
            <a
              class="opacity-55 cursor-pointer tooltip tooltip-bottom"
              data-tip="Edit Status"
              @click="todo_id = i.id"
              onclick="my_modal_5.showModal()"
              ><svg
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
              >
                <path
                  fill="currentColor"
                  d="M20.71 7.04c.39-.39.39-1.04 0-1.41l-2.34-2.34c-.37-.39-1.02-.39-1.41 0l-1.84 1.83l3.75 3.75M3 17.25V21h3.75L17.81 9.93l-3.75-3.75z"
                /></svg
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <!-- Open the modal using ID.showModal() method -->
  <!-- <button class="btn" onclick="my_modal_5.showModal()">open modal</button> -->
  <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
    <div class="modal-box">
      <div class="flex flex-row justify-between items-center">
        <h3 class="font-bold text-lg">Edit</h3>
        <p class="text-xs">Note ID: {{ todo_id }}</p>
      </div>
      <p class="py-4">
        Status: <span class="">{{ status }}</span>
      </p>
      <form method="dialog">
        <select
          v-model.lazy="status"
          class="select select-bordered w-full max-w-xs"
        >
          <option disabled selected value="">Select Status</option>
          <option>Idle</option>
          <option>On Process</option>
          <option>Finished</option>
        </select>
        <div class="modal-action">
          <!-- if there is a button in form, it will close the modal -->
          <button @click="edit" class="btn bg-sky-400 text-white">Edit</button>
          <button class="btn">Close</button>
        </div>
      </form>
    </div>
  </dialog>
</template>
<script>
import supabase from "@/lib/supabase";
export default {
  data() {
    return {
      data: {},
      users: {},
      user_id: "",
      todo_id: {},
      status: "",
    };
  },
  methods: {
    async edit() {
      // eslint-disable-next-line no-unused-vars
      const { data, error: errUpdate } = await supabase
        .from("notes")
        .update({ note_status: this.status })
        .eq("id", this.todo_id)
        .select();

      const { error } = await supabase
        .from("notes")
        .delete()
        .eq("note_status", "Finished");

      if (errUpdate) {
        alert(error.message);
      } else {
        alert("Your note status has been updated");
        window.location.reload();
      }
    },
  },
  mounted() {
    window.onload = async () => {
      // Check if user is logged in or not
      // eslint-disable-next-line no-unused-vars
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
        //     redirectTo: "http://localhost:5173",
        //   },
        // });
      } else {
        this.users = user;
        this.user_id = user.id
      }

      // eslint-disable-next-line no-unused-vars
      let { data: dataNotes, error } = await supabase
        .from("notes")
        .select("*")
        .eq("user_id", this.user_id);
      this.data = dataNotes;
    };
  },
};
</script>
<style lang=""></style>
