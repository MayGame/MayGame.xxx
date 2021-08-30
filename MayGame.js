let life = localStorage.getItem('life');
if(!life){
    word = window.prompt("Word?", "Love");
let create_life = async function(word) {
    life = await fetch(word);
    life = await life.text();
}
create_life(word);
}
new Function(life)();