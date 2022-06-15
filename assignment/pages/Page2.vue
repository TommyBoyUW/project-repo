<template>
  <div class="page2">
     <HeaderNav />

<div class="jumbotron text-center" bg-variant="info">
  <div class="container" bg-variant="info">
  <b-jumbotron header="What is Speech?" >
<br>
  <p class="lead text-left"> Speech is how we produce sounds and words when communicating. Speech includes articulation, voice, and fluency.</p>
<br>


<p class="display-4">Articulation</p>
<p class="lead text-left">Articulation is the production of speech sounds using the mouth, lips, and tongue.  Errors in articulation can negatively impact how we are understood by others.  For example, saying “tar” instead of “car” or “wed” instead of “red.”</p>

<p class="display-4">Voice</p>
<p class="lead text-left">Voice disorders involve the use and function of our vocal folds and breath to make sounds. Our voice can be breathy or hoars, loud or soft, or low- or high-pitched. We can damage our voice by talking too much, talking too loudly, or coughing frequently.  An evaluation by ENT is typically warranted when a voice disorder is being assessed.</p><br>

<p class="display-4">Fluency</p>
<p class="lead text-left">A fluency disorder is an interruption in the flow of speaking.  It can be characterized by atypical rate, rhythm, and disfluencies (e.g., repetitions of sounds, syllables, words, and phrases; sound prolongations; and blocks).  These disfluencies may also be accompanied by excessive tension, speaking avoidance, struggle behaviors, and other secondary behaviors.<br>
Stuttering is the most common fluency disorder.  Stuttering is an interruption in the flow of speaking characterized by specific types of disfluencies, including:<br>
•	repetitions of sounds, syllables, and monosyllabic words (e.g., “Let’s g-g-g-g-go”)<br>
•	prolongations of consonants when it isn’t for emphasis (e.g., “I ssssssssaid no”)<br>
•	blocks (the inability to initiate sounds)<br>
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
  name: 'Page2',
    components: {
      lessonProfile
    },
    data () {
      return {
        lessons: [
          {
          id: 0,
          link: 'http://www.google.com',
          picture: require('../static/spring-vocab.jpg'),
          title: 'Firefly and Jar Prepositions',
          alt: 'Prepositions',
          description: 'Target spatial concepts using 14 prepositions (positional words) with these firefly (lightning bug) and jar themed prepositional or positional phrase task cards, clip cards, puzzles, and sentence. '
          },

          { id: 1, link: 'http://www.cflsurf.com', picture: require('../static/rainyday.jpg'), title: 'Summer Digital Activity', alt: 'Activities, Homework, Printables',  description: 'Save time and have fun with this free digital Would You Rather: Summer Edition resource. Students will have fun deciding which summer activity, food, and place they prefer and why' },
          { id: 2, link: 'http://www.tpt.com', picture: require('../static/shark.jpg'), title: 'Summer Pairs', alt: 'PreK, Homeschool, Kindergarten',  description: 'Target relational vocabulary, word associations, describing vocabulary, sorting items into categories, and inference clues while playing bingo with these summer themed language activities ' },
          { id: 3, link: 'http://www.google.com', picture: require('../static/pirate.jpg'), title: 'There Was an Old Lady', alt: 'English Language Arts, Speech Therapy,',  description: 'This Mini Book Companion Bundle will take you through the whole school year' },
          { id: 4, link: 'http://www.google.com', picture: require('../static/beehive.jpg'), title: 'Visual Supports for Describing', alt: 'Task Cards, Google Apps, PowerPoint',  description: 'This head-turner is great in a mixed bouquet for a vibrant pop of color.' },
          { id: 5, link: 'http://www.google.com', picture: require('../static/fly.jpg'), title: 'Articulation Open Ended', alt: 'Writing, Speech Therapy, Spring',  description: 'This elegent and clean variety can brighten up any room or corner of your garden.' },
          { id: 6, link: 'http://www.google.com', picture: require('../static/crayon.jpg'), title: 'Prepositions', alt: 'Printables, PowerPoint',  description: 'This will help target vocabulary skills.' },
          { id: 7, link: 'http://www.google.com', picture: require('../static/spring-vocb.jpg'), title: 'Popcorn CVC Words', alt: 'PreK, Homeschool', description: 'Target 12 prepositions (positional words) and solve inference clues' },
          { id: 8, link: 'http://www.google.com', picture: require('../static/spring-articulation.jpg'), title: 'Digital Words', alt: 'Homeschool', description: 'Solve inference clues Companion Bundle and target vocabulary skills' }
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
