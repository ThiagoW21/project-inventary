<script setup>
import { ref } from "vue";
import { useStore } from "vuex";
import CadastroUser from "../components/CadastroUser.vue";

const store = useStore();
</script>
<template>
  <input type="email" />
  <input type="password" />
  <b-button v-b-modal.modal-prevent-closing>Open Modal</b-button>
  <b-modal
    centered
    id="modal-prevent-closing"
    title="Submit Your Name"

    @hidden="show"
    @ok="store.dispatch('submit')"
  >
    <template #modal-footer="{ ok, cancel, hide }">
      <b>Custom Footer</b>
      <!-- Emulate built in modal footer ok and cancel button actions -->
      <b-button size="sm" variant="success" @click="ok()"> OK </b-button>
      <b-button size="sm" variant="danger" @click="cancel()"> Cancel </b-button>
      <!-- Button with custom close trigger value -->
      <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
        Forget it
      </b-button>
    </template>
  </b-modal>
</template>
<style scoped>
.modal-content {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  height: 700px;
  margin: 0px auto;
  padding-bottom: 60px;
}
</style>
