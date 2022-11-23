import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

<div id="title"></div>
<ul>
    <li class="alternative"></li>
    <li class="alternative"></li>
    <li class="alternative"></li>
    <li class="alternative"></li>
</ul>
<script src="script.js"></script>

// existing code
let question = {
  title: 'gato',
  alternatives: ['dog', 'cat', 'bird', 'fish'],
  correctAnswer: 1
};
// existing code
function showQuestion(q) {
  // existing code
  let titleDiv = document.getElementById("title");
  titleDiv.textContent = q.title;
  
  // existing code
  let alts = document.querySelectorAll('.alternative');
  
  // modified code
  alts.forEach(function(element, index){
    // existing code
    element.textContent = q.alternatives[index];
    // new code
    element.addEventListener('click', function(){
      if (q.correctAnswer == index) {
        console.log('Correct Answer!');
      } else {
        console.log('Wrong Answer!');
      }
    });
  });
}
showQuestion(question);
