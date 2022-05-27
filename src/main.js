import { BootstrapVue3 } from "bootstrap-vue-3";
import "bootstrap/dist/css/bootstrap.css";
import "mdb-vue-ui-kit/css/mdb.min.css";
import { createApp } from "vue";
import MDialogPlugin from "vue-m-dialog";
import "vue-m-dialog/dist/style.css";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { createVuestic } from "vuestic-ui";
import "vuestic-ui/dist/vuestic-ui.css";
import VueGravatar from "vue3-gravatar";
import PrimeVue from "primevue/config";
import "primevue/resources/themes/saga-blue/theme.css";
import "primevue/resources/primevue.min.css";
import "primeicons/primeicons.css";

const app = createApp(App);

app.use(router);
app.use(store);
app.use(BootstrapVue3);
app.use(MDialogPlugin);
app.use(createVuestic());
app.use(VueGravatar);
app.use(PrimeVue);

app.mount("#app");
