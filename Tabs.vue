<template>
      <div class="tabs">
        <ul>
            <li 
            v-for="(title,index) in titles"
            :key="index"
            :class="{'is-active': index == active}"
            @click="active=index"
            >
                <a>{{title}}</a>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    props: ['titles'],
    data() {
        return {
            active: 0
        }
    }
}
</script>

<style>

</style>