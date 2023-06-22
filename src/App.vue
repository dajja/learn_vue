<template>
  <div>
    <ul v-if="foodRender.length">
      <li v-for="(ok, i) in foodRender" :key="i">{{ ok.name }} - {{ i }}</li>
    </ul>
    <div v-else>
      {{ foods[0].name }}
      <div class="chu">--- End</div>
    </div>
    <div v-for="(value, key) in info" :key="key">
      <h1>{{ key }} : {{ value }}</h1>
    </div>
    <Index v-for="lit in list" :key="lit.id" :lit="lit" />
    <div>
      <div>{{ message }}</div>
      <div>
        <input type="text" v-model="message" name="">
      </div>
    </div>
    <RouterLink to="/about">Go to about page</RouterLink> 
    <RouterLink to="/pinia">Test pinia</RouterLink> 
  </div>
  <div>
    <User @chonUser="childrenChonUser" />
    <Detail :userDetail="chonUserDetail" />
  </div>
</template>

<script>
import { reactive, computed, ref } from 'vue';
import Index from './components/Index.vue';
import User from './components/User.vue';
import Detail from './components/Detail.vue';

export default {
  name: 'App',
  components: {
    Index,
    User,
    Detail
  },
  setup() {
    const foods = ref([
      { name: 'Hamburger', isDelicious: false },
      { name: 'Sandwich', isDelicious: true },
      { name: 'Chicken chop', isDelicious: true },
    ]);

    const info = reactive({
      name: "mandan",
      age: 18,
      add: "sita"
    });

    const list = reactive([
      { id: 1, title: "title 1" },
      { id: 2, title: "title 2" },
      { id: 3, title: "title 3" }
    ]);
    const message = ref('');
    const chonUserDetail = ref({});

    const childrenChonUser = (user) => {
      // console.log(user);
      chonUserDetail.value = user;
    };

    const foodRender = computed(() => {
      return foods.value.filter(i => i.isDelicious);
    });

    return {
      foods,
      info,
      list,
      message,
      chonUserDetail,
      childrenChonUser,
      foodRender
    };
  }
}
</script>

<style scoped>
.chu {
  color: red;
}
</style>
