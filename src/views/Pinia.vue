<template>
    <div style="display: flex ; align-items: center ; justify-content: center;">
        <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1c/Pinialogo.svg/1200px-Pinialogo.svg.png" alt="">
        <h1>{{ counterStore.name }}</h1>
    </div> <br>
    <div class="form">
        <form @submit.prevent="addNewTask">
            <label for="id">ID</label>
            <input type="text" placeholder="input id" name="id" v-model="newTask.id">
            <label for="name">Name task</label>
            <input type="text" placeholder="input name" name="name" v-model="newTask.name">
            <label for="like">Favor status</label>
            <input type="radio" v-model="newTask.like" value="true" name="like" id="like1" />
            <label for="like1">Yes</label>
            <input type="radio" v-model="newTask.like" value="false" name="like" id="like2" />
            <label for="like2">No</label>
            <button class="submitBtn">Submit</button>
        </form>
        <div v-show="noInput">Chua nhap du thong tin</div>
    </div>
    <div style="display: flex ; gap: 20px;">
        <button @click="filter = 'all'">All task</button>
        <button @click="filter = 'like'">Like task</button>
    </div>
    <div v-if="counterStore.loading">Loading tasks .....</div>
    <div class="tasklist">
        <div v-if="filter === 'all'">
            <div>{{ counterStore.task.length }} task</div>
            <div v-for="task in counterStore.task" style="padding: 0 40%;">
                <div class="task" :style="task.like ? { 'background-color': 'yellow' } : ''">
                    <div>{{ task.id }}</div>
                    <div>{{ task.name }}</div>
                    <button @click="counterStore.deleteTask(task.id)">Delete</button>
                    <button :class="task.like ?  'toggleBtn' : ''" @click="counterStore.changeStatus(task.id)">{{ task.like ? "Liked" : "Like" }}</button>
                </div>
            </div>
        </div>
        <div v-if="filter === 'like'">
            <div>{{ counterStore.likeTaskCount }} like task</div>
            <div v-for="task in counterStore.likeTask" style="padding: 0 40%;">
                <div class="task">
                    <div>{{ task.id }}</div>
                    <div>{{ task.name }}</div>
                    <button @click="counterStore.deleteTask(task.id)">Delete</button>
                    <button @click="counterStore.changeStatus(task.id)">Liked</button>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
import { ref } from 'vue';
import { useCounterStore } from '../stores/stores';
import { storeToRefs } from 'pinia';
export default {
    setup() {
        const counterStore = useCounterStore();
        // const { task, name, loading, likeTask, likeTaskCount } = storeToRefs(counterStore);
        counterStore.getSsrTasks();
        const filter = ref('all');
        const noInput = ref(false);
        const newTask = ref({
            id: '',
            name: '',
            like: null,
        });
        const addNewTask = () => {
            if (newTask.value.id && newTask.value.name && newTask.value.like !== null) {
                counterStore.addTask({
                    id: /^[0-9]+$/.test(newTask.value.id) ? parseInt(newTask.value.id) : newTask.value.id,
                    name: newTask.value.name,
                    like: newTask.value.like === 'true' ? true : false
                });
                noInput.value = false;
                newTask.value.id = '';
                newTask.value.name = '';
                newTask.value.like = null;
            }
            else {
                noInput.value = true;
            }
        }
        return {
            counterStore, filter, addNewTask, newTask, noInput, 
        }
    }
}
</script>
<style scoped>
img {
    width: 10%;
}

.form {
    margin: 30px 0;
    justify-content: center;
    display: flex;
}

.form>label,
input {
    margin: 0 5px;
}

.submitBtn {
    background-color: aquamarine;
    cursor: pointer;
    padding: 5px 10px;
    margin: 0 5px;
    border: 1px solid black;
}

.tasklist {
    width: 100%;
}

.task {
    display: flex;
    justify-content: space-between;
    padding: 5px;
    background-color: aqua;
    margin: 10px 0;
}
.task > button {
    background-color: rgb(21, 211, 69);
    border: none;
    cursor: pointer;
    color: white;
}
.task > .toggleBtn {
    background-color: rgb(175, 177, 14);
}
</style>