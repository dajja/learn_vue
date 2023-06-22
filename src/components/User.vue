<template>
    <div class="list-user">
        <table class="tbl-list-user" v-if="listUserApi.length">
            <thead>
                <th>Name</th>
                <th>Location</th>
                <th>Website</th>
            </thead>
            <tbody>
                <tr v-for="user in listUserApi">
                    <td><a @click="selectUser(user)">{{ user.name }}</a>
                    </td>
                    <td>{{ user.address.street }} - {{ user.address.city }}</td>
                    <td>{{ user.website }}</td>
                </tr>
            </tbody>
        </table>
        <div v-else>Loading user....</div>
    </div>
</template>
<script>
import axios from 'axios';
import data from './data.json';
import { onMounted, reactive, ref } from 'vue';
export default {
    name: "User",
    setup(props, context) {
        const userList = reactive(data);
        const listUserApi = ref([]);
        const selectUser = (user) => {
            context.emit('chonUser', user);
        };
        const fetchApi = async () => {
            try {
                const fetchUser = await axios.get('https://jsonplaceholder.typicode.com/users')
                listUserApi.value = fetchUser.data;
            }
            catch (err) {
                console.log(err.message);
            }
        }
        onMounted(() => {
            fetchApi();
        })
        return {
            userList, selectUser, listUserApi
        }
    },
}
</script>
<style scoped>
th,
tr,
td {
    border: 1px solid black;
}
a {
    cursor: pointer;
}
td {
    padding: 5px 15px;
}
</style>