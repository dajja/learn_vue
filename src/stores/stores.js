import { defineStore } from "pinia";

export const useCounterStore = defineStore("counter", {
    state: () => ({
        task: [
            {id: 1, name: 'Reack', like: true},
            {id: 2, name: 'Viu', like: true},
            {id: 3, name: 'Angulord', like: false}
        ],
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
        addTask(newTask) {
            this.task.push(newTask)
        }
    },
})