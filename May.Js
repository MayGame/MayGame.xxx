var M1631068218120default_context___={}
var c=M1631068218120default_context___;
c.F={};
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;
c.M1632015745577Scope_____________ = self.registration.scope;
self.addEventListener('fetch', function(M1631010512244fetch_event_______) {
    if(M1631010512244fetch_event_______.request.url==c.M1632015745577Scope_____________){
    M1631010512244fetch_event_______.respondWith(
        new Response(c.M1631015901555index_markup______,c.M1631015695037html_header_______ ));}
    else c.F.M1631244397674ProcessFetch______(M1631010512244fetch_event_______);});
c.M1631015695037html_header_______={headers: {'Content-Type': 'text/html'}};
c.M1631681961206JsHeader__________={headers: {'Content-Type': 'text/javascript'}};
c.M1636543275112Secs______________=`
<script>
c.F.M1631630231533cache_onclick_____=function(){
    let url = "${c.M1632015745577Scope_____________}"+M1631676113156cache_url_________.value;
    let ct = M1631675797504content_type_input.value;
    let o = {header:{headers: {'Content-Type': ct}}}
    if(ct.includes('text')||ct.includes('json'))
    o.body=c.M1631675707613fetchBodyBufferVar;
    else o.body=c.M1631678062206fetchBlobBuffer___;
    let text='c.F.M1631255085998UpdatePagesList___();'
    c.F.PagesWrite(url,o).onsuccess=()=>{
        navigator.serviceWorker.controller.postMessage(['God bless May Jess',text]);
        c.F.M1632214510785Clearrr___________();}}
c.F.M1631631671789fetchBtnOnclick___=async function(){
    let url = M1631630530238fetch_url_________.value;
    let r1 =await fetch(url,{mode:'cors'}).then(async response=>{
        let ct=response.headers.get('Content-Type');
        M1631675797504content_type_input.value=ct;
        if(ct.includes('text')||ct.includes('json'))
        c.M1631675707613fetchBodyBufferVar=await response.text();
        else c.M1631678062206fetchBlobBuffer___=await response.blob();});}
c.F.M1632228496305Toggle_Cache______ = function(){
if(M1631756949235launch_div________.style.visibility=='hidden')
{M1631692863388cache_page_div____.style.visibility='hidden';
    M1631756949235launch_div________.style.visibility='visible';}
    else {M1631692863388cache_page_div____.style.visibility='visible';
M1631756949235launch_div________.style.visibility='hidden';}}
c.M1631066770639id_innerHTML______ = new Proxy({},{get:function(_,k){return document.getElementById(k);},
set:function(_,k,v){document.getElementById(k).innerHTML=v;}})
c.F.M1632214510785Clearrr___________=function(){
    M1631632467797text_textarea_____.value='';
    c.M1631675707613fetchBodyBufferVar=undefined;
    c.M1631678062206fetchBlobBuffer___=undefined;
    M1631675797504content_type_input.value='';
    M1631630530238fetch_url_________.value='';
    M1631676113156cache_url_________.value='';}
c.F.M1632238378329Handle_Files______ = function(files) {
for (var i = 0; i < files.length; i++) {
  var file = files[i];
M1631675797504content_type_input.value=file.type;
var reader = new FileReader();
if(file.type.includes("text")){
reader.onload = function(e){
c.M1631675707613fetchBodyBufferVar=e.target.result;}
    reader.readAsText(file);}
else c.M1631678062206fetchBlobBuffer___= file;
M1631676113156cache_url_________.value=file.name;}}
</script></body></html>`;
c.M1632014867003Pre_init__________=`
var M1632016941337MemoiresEternelsDC = {};
var c = M1632016941337MemoiresEternelsDC;
var M16317901744200J8130106478776227 = {};
c.F=M16317901744200J8130106478776227;
const AsyncFunction = Object.getPrototypeOf(async function(){}).constructor;`
c.M1631348065828MemoiresEternels__=`
c.M1631331030326Book______________;
c.E=new Proxy({},{set:function(_,k,v){
    dispatchEvent(new CustomEvent(k,{detail:v}))
  },get:function(_,k){
    dispatchEvent(new CustomEvent(k));}})
c.F.M1631331052808BookOpen__________ = async function(){
    self.IDBTransaction = self.IDBTransaction || self.webkitIDBTransaction || self.msIDBTransaction || { READ_WRITE: "readwrite" };
    self.indexedDB = self.indexedDB || self.mozIndexedDB || self.webkitIndexedDB || self.msIndexedDB;
    self.IDBKeyRange = self.IDBKeyRange || self.webkitIDBKeyRange || self.msIDBKeyRange;
    let libRequest = indexedDB.open("Memoires_eternels",1);
    libRequest.onupgradeneeded=function(event){
        c.M1631331030326Book______________ = libRequest.result;
        c.E.M1631348412834BookOpenEvent_____;
        if (event.oldVersion < 1) {c.Pages = c.M1631331030326Book______________.createObjectStore("Pages");
            c.Pages = c.M1631331030326Book______________.createObjectStore("Words");}}
    libRequest.onsuccess = function(event) {
        c.M1631331030326Book______________ = libRequest.result;
    c.E.M1631348412834BookOpenEvent_____;}}
c.F.M1631331052808BookOpen__________();
c.F.PagesWrite = function (key,value){
let rq = c.M1631331030326Book______________.transaction("Pages","readwrite").objectStore("Pages").put(value,key); return rq;}
c.F.PagesRead = function(){ return c.M1631331030326Book______________.transaction("Pages","readonly").objectStore("Pages");}
c.F.WordsWrite = function (key,value){
let rq = c.M1631331030326Book______________.transaction("Words","readwrite").objectStore("Words").put(value,key); return rq;}
c.F.WordsRead = function(){ return c.M1631331030326Book______________.transaction("Words","readonly").objectStore("Words");}`;
c.M1636546090120BaseMarkup________=`
<!DOCTYPE html>
<html lang="fr"><head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0, user-scalable=no" />
    <script src="pin.Js"></script>
    <script src="meme.Js"></script>
    <style>
    input, textarea {background-color: pink;}
    textarea {overflow: auto;}
    button {background-color: deeppink;border-radius: 1em;}
    body {margin: 0;}
    .button{background-color: deeppink; border-radius: 1em; border-style: double;}
    div{display: block; position: relative;}
    </style></head><body>
<div id="M1631693015687root_div__________" style="height: 100vh; width: 100vw;
display: grid; grid-template-areas: 'bar' 'body'; grid-template-rows: 1fr 14fr;">
<div style="grid-area: bar; background-color: pink; width: 100%;">
<button onclick="c.F.M1632228496305Toggle_Cache______()" style="height: 100%; width: 100%; border-radius: 0%;"></button></div>
<div style="grid-area: body; background-color: greenyellow; height: 100%; width: 100%; " id="M1631693403689body0_div_________">
<div style="background-color: orchid; height: 100%; width: 100%; position: absolute; z-index: 1; visibility: hidden;" id="M1631692863388cache_page_div____">
    <h3>Cache resources</h3>
    <input type="file" id="M1632238282312File_Element______" style="display:none" onchange="c.F.M1632238378329Handle_Files______(this.files)">
    <label for="M1632238282312File_Element______" class="button">Select a file</label>
    <b>or</b>
    <input type="url" name="" id="M1631630530238fetch_url_________" placeholder="fetch from url"><button onclick="c.F.M1631631671789fetchBtnOnclick___();">Get it</button><br>
    <br><p>_____________________________________________</p>
   <input type="text" list="M1632233512518ContentTypeDataLis" id="M1631675797504content_type_input" placeholder="Content-Type">
    <datalist id="M1632233512518ContentTypeDataLis">
        <option value="text/css"></option>
        <option value="text/html"></option>
        <option value="text/javascript"></option>
        <option value="application/json"></option>
    </datalist><br>
    <textarea style="width: 100%;" id="M1631632467797text_textarea_____" cols="30" rows="10" placeholder="Text (when applicable)" onchange="c.M1631675707613fetchBodyBufferVar=this.value;"></textarea><br>
    <button style="width: 20%;" onclick="M1631632467797text_textarea_____.value=c.M1631675707613fetchBodyBufferVar">load text</button>
    <button style="width: 20%;" onclick="c.F.M1632214510785Clearrr___________();">Clear</button><br><br>
    <b>Cache as</b><input type="text" disabled value="${c.M1632015745577Scope_____________}"><input type="url" name="" id="M1631676113156cache_url_________"><br>
    <button onclick="c.F.M1631630231533cache_onclick_____()" style="width: 50%;">Cache!</button></div>
<div id="M1631756949235launch_div________" style="background-color: hotpink; height: 100%; width: 100%; position: absolute; z-index: 2;">
<button onclick=";(async ()=>{
    let res = c.F.WordsRead().get('F2P');
    res.onsuccess=function(){
    console.log(res.result);
    new AsyncFunction(res.result)();}})();"
style="height: 34%; width: 69%; font-size: xxx-large; background-color:  #BB00BB; left: 0%; opacity: 0.69; position: absolute; float: right; transform: translate(13%, 37%);">Tap to play </button>
</div></div></div>`
c.M1631015901555index_markup______=c.M1636546090120BaseMarkup________+'</body></html>'
c.M1631086115344passmot___________='God bless May Jess'
new AsyncFunction('c',c.M1631348065828MemoiresEternels__)(c);
addEventListener('M1631348412834BookOpenEvent_____',
() => {c.M1631248918499FetchProxy________[`${c.M1632015745577Scope_____________}meme.Js`]={body:c.M1631348065828MemoiresEternels__,header:c.M1631681961206JsHeader__________}
    c.M1631248918499FetchProxy________[`${c.M1632015745577Scope_____________}pin.Js`]={body:c.M1632014867003Pre_init__________,header:c.M1631681961206JsHeader__________}
    c.F.M1632327640527initScript________();})
c.M1631248835172FetchFromHere_____={}
c.F.M1631255085998UpdatePagesList___ = async function(){
let ks = c.F.PagesRead().getAllKeys();
ks.onsuccess=function(){
    for(const k of ks.result){
        let v = c.F.PagesRead().get(k);
        v.onsuccess=function(){
    c.M1631248835172FetchFromHere_____[k]=v.result;}}}}
c.M1631248918499FetchProxy________=new Proxy(c.M1631248835172FetchFromHere_____,{
    get: function(_,k){return c.M1631248835172FetchFromHere_____[k];},
    set:function(_,k,v){c.F.PagesWrite(k,v).onsuccess=c.F.M1631255085998UpdatePagesList___();}});
c.F.M1631244397674ProcessFetch______=function(event){
    let url = event.request.url;
    let rest = url.slice(location.origin.length+1);
    const rex = new RegExp(/M\d{13}/, 'g');
    let tst = rex.test(rest)
    if(tst)event.respondWith(
    new Response(c.M1631015901555index_markup______,c.M1631015695037html_header_______ ));
    let o = c.M1631248918499FetchProxy________[url];
    if(o){let body=o.body;
    let header=o.header??c.M1631015695037html_header_______;
    let response=new Response(body,header);
    event.respondWith(response);}}
c.F.M1631334682176OnMessage_________=async function(msg){
if(msg.data[0]==c.M1631086115344passmot___________)
new AsyncFunction('c',msg.data[1])(c);}
onmessage=(msg)=>{c.F.M1631334682176OnMessage_________(msg);};
c.F.M1632327640527initScript________=async function(){
    let res = c.F.WordsRead().get('initword');
    res.onsuccess=function(){
        if(!res.result)c.F.M1632327609356initScript________();
    else {console.log("Init word:", res.result);
    let res2 = c.F.WordsRead().get(res.result);
    res2.onsuccess=function(){
        new AsyncFunction(res2.result)();
    }}}}
c.F.SecsOn = function (){c.M1631015901555index_markup______=c.M1636546090120BaseMarkup________+c.M1636543275112Secs______________;}
c.F.M1632327609356initScript________=async function(){
    let word = await fetch('May.Js');
    let life = await word.text();
    c.M1631248918499FetchProxy________[`${c.M1632015745577Scope_____________}May.Js`]={body:life,header:c.M1631681961206JsHeader__________}
    c.F.WordsWrite('M1622519980405clairdlwlrMayJesCA',true);
    c.F.WordsWrite('initword','Kissya');
    c.F.WordsWrite('F2P','alert("Have fun!");');
    c.F.WordsWrite('Kissya','c.F.SecsOn()');}