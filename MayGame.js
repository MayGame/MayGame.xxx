let life = localStorage.getItem('life');
if(!life){
    word = window.prompt("Word?", "Love");
let create_life = async function(word) {
    life = await fetch(word);
    life = await life.text();
    new Function(life)();
}
create_life(word);
}
else new Function(life)();