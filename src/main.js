import Vue from 'vue'
import VueRouter from 'vue-router';
import Vuex from 'vuex';
import {mapState, mapMutations} from 'vuex';
import App from './App.vue'
// import routes from './routes'
import BodyParts1 from './pages/BodyParts1';
import BodyParts2 from './pages/BodyParts2';
import Initial from './pages/Initial';
import Symptoms1 from './pages/Symptoms1';
import Symptoms2 from './pages/Symptoms2';
import Results from './pages/Results';

Vue.config.productionTip = false

Vue.use(VueRouter);
Vue.use(Vuex);

const routes = [
  {
    path: '/',
    component: Initial,
    name: 'initial',
  },
  {
    path: '/bodyparts1',
    component: BodyParts1,
    name: 'bodyparts1',
  },
  {
    path: '/bodyparts2',
    component: BodyParts2,
    name: 'bodyparts2',
  },
  {
    path: '/symptoms1',
    component: Symptoms1,
    name: 'symptoms1',
  },
  {
    path: '/symptoms2',
    component: Symptoms2,
    name: 'symptoms2',
  },
  {
    path: '/results',
    component: Results,
    name: 'results',
  },
]

const router = new VueRouter({
  routes,
  mode: 'history',
});

const store = new Vuex.Store({
  state: {
    count: 0,
    allSymptoms: [],
    selectedSymptoms: [],
    selectedBodyParts: [], //['head'],
    gender: true, // true = female, false = male
    path1: false,
  }, 
  mutations: {
    addSelectedBodyParts (state, payload) {
      // console.log("here");
      state.selectedBodyParts = payload.selectedBodyParts
    },
    mutateSelectedSymptoms (state, payload) {
      state.selectedSymptoms = payload.selectedSymptoms
    },
    // addSelectedSymptom (state, payload) {
    //   // let repeat = false;
    //   // for (let index = 0; index < state.selectedSymptoms.length; index++) {
    //   //   const element = state.selectedSymptoms[index];
    //   //   if (element === payload.value) {
    //   //     repeat = true;
    //   //   }
    //   // }
    //   // if (!repeat) {
    //     // console.log('abc', state.selectedSymptoms);
    //     // state.selectedSymptoms = payload.symp;
    //     // console.log('def', state.selectedSymptoms);
    //   // }
    // },
    genderSwitch(state, payload) {
      state.gender = payload.gender;
    },
    addToAllSymptoms (state, payload) {
      state.allSymptoms = payload.allSymptoms
    },
    completePath1 (state) {
      state.path1 = true;
    },
    clearSelectSymptoms (state) {
      state.selectedSymptoms = []
    },
    clearSelectBodyParts (state) {
      state.selectedBodyParts = []
    },
  },
});

new Vue({
  el: '#app',
  router,
  store,
  computed: mapState([
    'allSymptoms',
    'selectedSymptoms',
    'selectedBodyParts'
  ]),
  methods: mapMutations([
    'addSelectedSymptom',
    'mutateSelectedSymptoms',
    'addToAllSymptoms',
    'clearSelectedBodyParts',
    'clearSelectedSymptoms',
  ]),
  render: h => h(App),
});