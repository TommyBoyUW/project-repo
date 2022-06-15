<template>
   <div class="index">
   <HeaderNav />


      <div class="jumbotron text-center" bg-variant="info">
        <div class="container" bg-variant="info">
        <b-jumbotron header="What is an SLP?" >
<br>
        <p class="lead text-left"> Speech-Language Pathologists (SLPs) work to prevent, evaluate, diagnose, and treat speech, language, social communication, cognitive-communication, and swallowing disorders in both children and adults. In addition, SLPs provide training and education to families, caregivers, and other professionals. SLPs work collaboratively with professionals from many other disciplines including Occupational Therapy and Physical Therapy."</p>
<br><br>
<p class="lead text-left">SLPs work in a variety of settings including:<br>
•	Early Intervention<br>
•	Preschools<br>
•	K-12 Schools<br>
•	Hospitals<br>
•	Private Clinics<br>
•	Outpatient Clinics<br>
•	Residential Health Care Facilities<br>
Source:  www.asha.org
</p>

        </b-jumbotron>
      </div>
      </div>



    <div class="container text-center">
        <div class="row">
        <div class="col-md-4"  v-for="(intro, a) in jumbo" :key="intro.id">
          <h2>{{intro.title}}</h2>
          <p>{{intro.text}}</p>
          <b-button variant="outline-primary" :to=intro.page >Learn more &raquo;</b-button>
        </div>
        </div>
        <hr class="my-4">
    </div> <!-- /container -->
  </div>
</div>
</template>


<style scoped lang="scss">
.jumbotron {
    background-color: !important;
}

.btn.btn-secondary {
padding: 2.5%;
}

b-button {
padding:5%;
}
</style>



<script>
import axios from 'axios';
import callAPI from './callAPI.vue'


export default {
name: 'IndexPage',
components: {
  callAPI
},


  data() {
    return {
    showing: true,
    myToggle: false,
    show: false,
    loading: true,
    items: null,
    errorMessage: false,
    title: 'Assignment 9',


    jumbo: [
      { id: 0, title: 'Speech', text: 'Speech is how we produce sounds and words when communicating.  Speech includes articulation, voice, and fluency.', page: 'page2' },
      { id: 1, title: 'Language', text: 'Language includes what we say (expressive language) and what we understand (receptive language).', page: 'page3'},
      { id: 2, title: 'Literacy', text: 'Literacy is the ability to read and write.  Phonemic awareness, phonics, fluency, vocabulary, and comprehension skills are essential to literacy development.', page: 'page4'}
     ],
    }
    },


    mounted() {
      console.log("")
      axios
        .get('https://newsapi.org/v2/everything?' +
        'q=speech+language+pathology&' +
        'sortBy=relevancy&' +
        'pageSize=5&' +
        'apiKey=d1fccf2b122847bc8641ef6a7ee8972a',
        { params: { limit:10, size:"full" } } )
        .then(response => {
          console.log('Respond', response)
          this.items = response.data.articles
        })
        .then ()
        .catch(err => {
          console.error('Console Error', response)
          this.errorMessage = "Error"
        })},


        head() {
             return {
               title: this.title,
               meta: [
                 // hid is used as unique identifier. Do not use `vmid` for it as it will not work
                 {
                   hid: 'description',
                   name: 'speech lessons homepage',
                   content: 'Target spatial concepts using 14 prepositions (positional words) with these firefly (lightning bug) and jar themed prepositional or positional phrase task cards, clip cards, puzzles, and sentence strip activity. '
                 }
               ]
             }},


     computed: {
       btnStates() {
         return this.buttons.map(btn => btn.state)
       }}}

</script>
