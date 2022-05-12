<template>
   <div class="index">
   <div class="text-center">
      <h2 class="mt-3">Speech joke of the day</h2>
    <div v-if="myToggle === false">
        What fruit do people in Maine like to eat?
    </div>
    <div v-else>
        A Mango!
    </div><br>
        <b-button :pressed.sync="myToggle" variant="primary" size="lg">Answer</b-button>
    </div>


<hr class="my-4">

      <div class="jumbotron text-center" bg-variant="info">
        <div class="container" bg-variant="info">
        <b-jumbotron header="Speech, Language, and Literacy" lead="Creating Speech, Language, and Literacy Resources for the classroom, speech therapy and language therapy.">
          <div class="card text-center" bg-variant="info" id="homeFeature">
            <div class="card-body" bg-variant="info">
            <div v-if="show" bg-variant="info">
              <div class="container" v-if="items" text-center>
                <callAPI
                  v-for="item of items"
                  :key="item.author"
                  :item="item"
                 />
                <a href="NewsAPI.org" bg-variant="info">Powered by News API</a>
              </div>
            </div>
            <button v-else v-on:click="show = !show" class="btn btn-primary" data-toggle="tooltip" data-placement="right" bg-variant="info">Click for latest articles</button>
            </div>
            </div>
        </b-jumbotron>
      </div>
      </div>

<hr class="my-4">

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
      { id: 0, title: 'Speech', text: 'Speech is how we say sounds and words.', page: 'page2' },
      { id: 1, title: 'Language', text: 'Language refers to the words we use and how we use them to share ideas and get what we want.', page: 'page3'},
      { id: 2, title: 'Literacy', text: 'Literacy is your ability to read and write.', page: 'page4'}
     ],
    }
    },


    mounted() {
      console.log("")
      axios
        .get('https://newsapi.org/v2/everything?' +
        'q=speech+language+literacy&' +
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


    head () {
      return {
        title: this.title,
      }},


     computed: {
       btnStates() {
         return this.buttons.map(btn => btn.state)
       }}}

</script>
