import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import MDialogPlugin from "vue-m-dialog";
import "vue-m-dialog/dist/style.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.use(MDialogPlugin);

app.mount("#app");
