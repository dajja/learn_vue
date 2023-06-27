import { defineStore } from "pinia";
import axios from "axios";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        // task: [
        //     {id: 1, name: 'Reack', like: true},
        //     {id: 2, name: 'Viu', like: true},
        //     {id: 3, name: 'Angulord', like: false}
        // ],
        task: [],
        loading: false,
        name: 'Pinia'
    }),
    getters: {
        likeTask() {
            return this.task.filter(e => e.like);
        },
        likeTaskCount() {
            return this.task.reduce((a, b) => {
                return b.like ? a + 1 : a;
            }, 0)
        }
    },
    actions: {
        async getSsrTasks () {
            this.loading = true;
            const getTask = await axios.get("http://localhost:3000/tasks");
            this.task = getTask.data;
            this.loading = false;
        },
        async addTask(newTask) {
            this.task.push(newTask)
            const res = await axios.post("http://localhost:3000/tasks", newTask);
            if (res.error) {
                console.log(res.error.message);
            }
        },
        async deleteTask(id) {
            this.task = this.task.filter(e => e.id !== id)
            const res = await axios.delete("http://localhost:3000/tasks/" + id);
            if (res.error) {
                console.log(res.error.message);
            }
        },
        async changeStatus(id) {
            const taskChoose = this.task.find(e => e.id === id);
            taskChoose.like = !taskChoose.like;
            const res = await axios.put("http://localhost:3000/tasks/" + id, taskChoose);
            if (res.error) {
                console.log(res.error.message);
            }
        }
    },
})