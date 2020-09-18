<template>
    <div>
        <input type="text" v-model="message" @keydown.enter="add">
        <button @click="add">Add</button>
        <button @click="items = []">Clear All</button>
        <item-lists title="All Items" :items="items"></item-lists>
        <item-lists title="Done Items" :items="doneItems"></item-lists>
        <item-lists title="Not Done Items" :items="notDoneItems"></item-lists>
    </div>
</template>
<script>
import Example from './Example.vue';
import ItemsList from './ItemsList.vue';
export default {
    components: {
            example: Example,
            'item-lists': ItemsList
        },
    data(){
        return {
            message: "",
            lastId: 3,
            items: [
                {title:'Leib', isDone: false, id:1},
                {title:'Sai', isDone: true, id:2},
                {title:'Õlu', isDone: false,id:3}
                ],
        }
    },
    methods: {
        add() {
            if(this.message != "") {
                this.items.push({title:this.message, isDone: false, id: this.lastId++});
                this.message = "";
            }
        },
    },
    computed: {
        doneItems(){
            return this.items.filter(item => item.isDone);
        },
        notDoneItems() {
            return this.items.filter(item => !item.isDone);
        }
    }

}
</script>
<style>
.red {
    background-color: red;
}
.blue {
    background-color: blue;
}
</style>