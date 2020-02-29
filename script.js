/*
FUNCTIONALITY GOALS
2. include individual 'scramble' buttons.
4.  Shouldn't I be able to apply the shuffle func by traversing the dom/callin map on the dom rather than storing these in data and calling hof on that?

LONG TERM
1. collect combinations used in journal (INCLUDING TIMESTAMP OF WHEN PRACTICED), if exact one comes up again on scramble, re-scramble.
2. Slot machine type scrambling 
3. Load in a handlebars or under bar type library - would i need npm?
4. get a testing page for project
*/

const allData = [
    {
    name: 'fundamentals',
    data: ['A', 'Bb', 'C', 'C#/Db', 'D', 'D#/Eb', 'E', 'F', 'F#/Gb', 'G', 'G#/Ab'],
    sectionId: document.getElementById('key-section'),
    textDisplay: document.getElementById('key-display-text')
   }, 
   {
    name: 'modes',
    data: ['major', 'lydian', 'lydian aug', 'dom', 'lyd dom', 'alt', 'dim h/w', 'sus b9', 'sus b9 nat13', 'nat min', 'min 6', 'dorian', 'half dim', 'half dim nat 2'],
    sectionId: document.getElementById('mode-section'),
    textDisplay: document.getElementById('mode-display-text')
   }, 
   {
    name: 'triads',
    data: ['maj/maj', 'maj/min', 'min/min', 'min/maj', 'min/aug'],
    sectionId: document.getElementById('triad-pair-section'),
    textDisplay: document.getElementById('triad-display-text')
   }, 
   {
    name: 'melodies',
    data: ['^2/^2', '^2/v2', 'v2/v2', '^2/^3', '^2/v3', 'v2/v3', '^3/^3', '^3/v3', 'v3/v3', '^4/^3', '^4/v3', 'v4/v3', '^4/^4', '^4/v4', 'v4/v4', 'linear scale'],
    sectionId: document.getElementById('melodic-section'),
    textDisplay: document.getElementById('melodic-display-text')
   }, 
   {
    name: 'rhythm',
    data: ['2s', '3s', '5s', '7s'],
    sectionId: document.getElementById('rhythm-section'),
    textDisplay: document.getElementById('rhythm-display-text')
   }
 ];


 //!!shuffle func and shuffle mapped over allData
const shuffleFunc = bloc => {
    if(!bloc.sectionId.children[1].children[0].children[0].checked){
        bloc.textDisplay.innerHTML = bloc.data[Math.floor(Math.random() * bloc.data.length)];
        bloc.textDisplay.style.color =  '#ffed4c';
    }
};

allData.map(shuffleFunc);

//!!button functionality
const buttonBox = document.getElementById('scramble').querySelector('button');

buttonBox.onclick = () => {
    allData.map(shuffleFunc);
}
buttonBox.onmousedown = () => {
    buttonBox.style.backgroundColor = 'mediumslateblue';
};
buttonBox.onmouseup = () => {
    buttonBox.style.backgroundColor = '';
}





//OLD SECTION ONCLICK FUNCS
  
// keySectionBlock.onclick = () => {
    // keyTextDisplay.innerHTML = fundamentals[Math.floor(Math.random() * fundamentals.length)]; 
    // keyTextDisplay.style.color =  '#ffed4c';
// } 

// modeSectionBlock.onclick = () => {
//     modeTextDisplay.innerHTML = shades[Math.floor(Math.random() * shades.length)]; 
//     modeTextDisplay.style.color =  '#ffed4c';
// } 

// triadSectionBlock.onclick = () => {
//     triadTextDisplay.innerHTML = triadPairs[Math.floor(Math.random() * triadPairs.length)]; 
//     triadTextDisplay.style.color =  '#ffed4c';
// }

// melodicSectionBlock.onclick = () => {
//     melodicTextDisplay.innerHTML = melodicPatterns[Math.floor(Math.random() * melodicPatterns.length)]; 
//     melodicTextDisplay.style.color =  '#ffed4c';
// }

// rhythmSectionBlock.onclick = () => {
//     rhythmTextDisplay.innerHTML = rhythmPatterns[Math.floor(Math.random() * rhythmPatterns.length)]; 
//     rhythmTextDisplay.style.color =  '#ffed4c';
// }


 