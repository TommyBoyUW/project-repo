<template>
  <div class="page3">
     <HeaderNav />


<div class="jumbotron text-center" bg-variant="info">
  <div class="container" bg-variant="info">
  <b-jumbotron header="What is Language?" >
<br>
  <p class="lead text-left">Language includes what we say (expressive language) and what we understand (receptive language). Language is comprised of five different components:</p>
<br>


<p class="display-4">Semantics</p>
<p class="lead text-left">This refers to the meaning of words.  An SLP may work on expanding vocabulary, synonyms, antonyms, figurative language, and/or multiple meaning words. </p>

<p class="display-4">Morphology</p>
<p class="lead text-left">Morphology is the system of rules that govern changes in meaning at the word level.  This includes prefixes, suffixes, plural forms, and verb tense markers.</p>

<p class="display-4">Syntax</p>
<p class="lead text-left">Syntax (or grammar) is how we put words together in order to form phrases and sentences.  For example, in English we would say, “I went to a new school.” instead of “I school new went to.”<br>

<p class="display-4">Pragmatics</p>
<p class="lead text-left">Pragmatics are the social skills we use and understand when communicating with others.  This includes gestures, body language, facial expressions, prosody or inflection, tone of voice, topic maintenance, and more. </p><br>

<p class="display-4">Phonology</p>
<p class="lead text-left">Phonology is the study of the sounds or phonemes in a language and the rules about how those sounds can combined.  Phonemes are the smallest units of sound that make up a language.  For example, the word “dig” contains three phonemes /d/ /ĭ/ /g/.<br>

Source:  www.asha.org

</p>

  </b-jumbotron>
</div>
</div>






    <div class="row text-center">
      <div class="container " v-if="lessons">
      <lessonProfile v-for="lesson in lessons" :lesson="lesson" :key="lesson.id"/>
      </div>
    </div>
  </div>
</div>
</template>


  <script>
  import lessonProfile from './lessonProfile.vue';

  export default {
  name: 'Page3',
    components: {
      lessonProfile
    },
    data () {
      return {
        lessons: [
          { id: 0, picture: require('../static/spring-vocab.jpg'), title: 'Firefly and Jar Prepositions', alt: 'Prepositions', description: 'Target spatial concepts using 14 prepositions (positional words) with these firefly (lightning bug) and jar themed prepositional or positional phrase task cards, clip cards, puzzles, and sentence. ' },
          { id: 1, picture: require('../static/rainyday.jpg'), title: 'Summer Digital Activity', alt: 'Activities, Homework, Printables',  description: 'Save time and have fun with this free digital Would You Rather: Summer Edition resource. Students will have fun deciding which summer activity, food, and place they prefer and why' },
          { id: 2, picture: require('../static/shark.jpg'), title: 'Summer Pairs', alt: 'PreK, Homeschool, Kindergarten',  description: 'Target relational vocabulary, word associations, describing vocabulary, sorting items into categories, and inference clues while playing bingo with these summer themed language activities ' },
          { id: 3, picture: require('../static/pirate.jpg'), title: 'There Was an Old Lady', alt: 'English Language Arts, Speech Therapy,',  description: 'This Mini Book Companion Bundle will take you through the whole school year' },
          { id: 4, picture: require('../static/beehive.jpg'), title: 'Visual Supports for Describing', alt: 'Task Cards, Google Apps, PowerPoint',  description: 'This head-turner is great in a mixed bouquet for a vibrant pop of color.' },
          { id: 5, picture: require('../static/fly.jpg'), title: 'Articulation Open Ended', alt: 'Writing, Speech Therapy, Spring',  description: 'This elegent and clean variety can brighten up any room or corner of your garden.' },
          { id: 6, picture: require('../static/crayon.jpg'), title: 'Prepositions', alt: 'Printables, PowerPoint',  description: 'This will help target vocabulary skills.' },
          { id: 7, picture: require('../static/spring-vocb.jpg'), title: 'Popcorn CVC Words', alt: 'PreK, Homeschool', description: 'Target 12 prepositions (positional words) and solve inference clues' },
          { id: 8, picture: require('../static/spring-articulation.jpg'), title: 'Digital Words', alt: 'Homeschool', description: 'Solve inference clues Companion Bundle and target vocabulary skills' }
        ],
        title: 'lessons'
      }
    },
    head () {
      return {
    }}}
  </script>


  <style scoped>
  .container {
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    align-content: space-around;
    justify-content: center;
  }
  </style>
