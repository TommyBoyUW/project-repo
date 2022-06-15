<template>

        <div class="card text-center col-12 col-lg-3" >
          <a :href='lesson.link'>
          <img :src="lesson.picture" :alt="lesson.alt" id="border" class="frame card-img-top img-fluid rounded">
          <h4 class="text"> {{ lesson.title }} </h4>
          </a>
          <div class="description"> {{ lesson.description }} </div>
        </div>
      
</template>



<script>
export default {
    name: 'lessonProfile',
    props: {
        lesson: Object,
            default: function () {
                return { reactive: true}
}}}
</script>


<style scoped>
.card {
  margin: 2.5%;
}
</style>
