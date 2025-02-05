import Vue from 'vue'
import VueRouter from 'vue-router'
import HomeView from '../views/HomeView.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView,
      meta: {
      requiresAuth: true
    },

  },
  {
    path: '/about',
    name: 'about',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/AboutView.vue'),
      meta: {
      requiresAuth: true
    },

  },
  {
    path: '/login',
    name: 'LoginUser',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/LoginUser.vue')
  },
     {
    path: '/questionnaire_for_10',
    name: 'questionnaire_for_10',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/questionnaire_for_10.vue'),
         meta: {
      requiresAuth: true
    },

  },
  {
    path: '/questionnaire_for_11',
    name: 'questionnaire_for_11',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/questionnaire_for_11.vue'),
      meta: {
      requiresAuth: true
    },

  },
  {
    path: '/temperament_type_test',
    name: 'Temperament',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Temperament.vue'),
      meta: {
      requiresAuth: true
    },

  },


{
    path: '/petrushin_determine_of_ability',
    name: 'petrushin_determine_of_ability',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/petrushin_determine_of_ability.vue'),
    meta: {
      requiresAuth: true
    },

  },
{
    path: '/career_choice_motivation',
    name: 'career_choice_motivation',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/career_choice_motivation.vue'),
    meta: {
      requiresAuth: true
    },

  },
{
    path: '/vocational_aptitude_questionnaire',
    name: 'vocational_aptitude_questionnaire',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/vocational_aptitude_questionnaire.vue'),
    meta: {
      requiresAuth: true
    },

  },
{
    path: '/interest_map',
    name: 'interest_map',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/interest_map.vue'),
    meta: {
      requiresAuth: true
    },

  },
{
    path: '/character_and_profession',
    name: 'character_and_profession',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/character_and_profession.vue'),
    meta: {
      requiresAuth: true
    },

  },
{
    path: '/career_selection_matrix',
    name: 'career_selection_matrix',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/career_selection_matrix.vue'),
    meta: {
      requiresAuth: true
    },

  },

{
    path: '/regionpsychologist/:id',
    name: 'regionpsychologist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/Region/index.vue'),
    meta: {
      requiresAuth: true
    },

  },

{
    path: '/districtpsychologist/:id',
    name: 'districtpsychologist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/District/index.vue'),
    meta: {
      requiresAuth: true
    },

  },

{
    path: '/schoolpsychologist/:id',
    name: 'schoolpsychologist',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () => import(/* webpackChunkName: "about" */ '../views/School/index.vue'),
    meta: {
      requiresAuth: true
    },

  },

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    // always scroll to top
    return { top: 0 }
  },
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {

    if (!localStorage.getItem('token')) {
      next({ name: 'LoginUser' })

    } else {
      next() // go to wherever I'm going
    }
  } else {
    next() // does not require auth, make sure to always call next()!
  }
});
export default router
