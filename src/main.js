import { BootstrapVue3, BToastPlugin } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import "primeicons/primeicons.css";
import PrimeVue from "primevue/config";
import "primevue/resources/primevue.min.css";
import "primevue/resources/themes/saga-blue/theme.css";
import { createApp } from "vue";
import MDialogPlugin from "vue-m-dialog";
import "vue-m-dialog/dist/style.css";
import VueGravatar from "vue3-gravatar";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.use(MDialogPlugin);
app.use(createVuestic());
app.use(VueGravatar);
app.use(PrimeVue);
app.use(BToastPlugin);

app.mount("#app");
