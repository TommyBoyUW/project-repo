<template>
    <div class="row">
        <h4> {{ item.source.name }} </h4><br>
        <a :href="item.url"> {{ item.title }} </a>
        <p><img :src="item.urlToImage"></p>
        <p> {{ item.content }} </p>
        <p> {{ item.author }} </p>
    </div>
</template>



<script>
export default {
	props: {
		item: Object
	}
}
</script>



<style scoped>
img {
    width: 100%;
}
</style>
