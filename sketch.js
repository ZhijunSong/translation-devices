let txt;
let headlinetxt=[];
let stringContent;
let headlineContent=[];
let headline=[];
let headlinekey=[];
let headlineKey=[];
let keys=[];
let keywords=[];
let index=0;
let bool = false;
let files=[];

let ball1=[];
let ballKey=[];
let date=['13th','14th','15th']
let colores_g = ["#3366ccaa", "#dc3912aa", "#ff9900aa", "#109618aa", "#990099aa", "#0099c6aa",
"#dd4477aa", "#66aa00aa", "#b82e2eaa", "#316395aa", "#994499aa", "#22aa99aa", "#aaaa11aa",
"#6633ccaa", "#e67300aa", "#8b0707aa", "#651067aa", "#329262aa", "#5574a6aa", "#3b3eacaa"];


//json

let countryCode= 'us';
let url1 = `https://newsapi.org/v2/top-headlines?country=${countryCode}&apiKey=c17c183c988b461fbc73bd7a48d8e868`;
let url2='https://newsapi.org/v2/everything?q=from=2020-12-10&to=2020-12-14&sortBy=popularity&countryCode=cn&apiKey=c17c183c988b461fbc73bd7a48d8e868'
let popularity_data;
let key_data;
let imgUrl_pop;
let img_pop;
let articles_pop=[];
let articles_top;



function preload(){
  key_data=loadJSON(url1);
  popularity_data=loadJSON(url2);

  files= ['headlinekey1213.txt','headlinekey1214.txt','headlinekey1215.txt'];
  for (let i = 0; i < files.length; i++) {
    headlinetxt[i]= loadStrings('files/' + files[i]);
  }

  txt=loadStrings("files/keyword_pop.txt");

}
function setup() {
  createCanvas(400, 400);
  // //
  // for(let m =0;m<popularity_data.length;m++){
  //   console.log(articles_pop);
  //
  // }
  articles_pop=popularity_data.articles;


  for(let j=0;j<articles_pop.length;j++){
    imgUrl_pop= articles_pop[j].urlToImage;
    console.log(imgUrl_pop);
    // img_pop=loadImage(`"${imgUrl_pop}"`);
  }
  stringContent = txt[0];
  keywords= split(stringContent, ',');

  frameRate(30);
  textSize(10);
  fill(255);
  for(let i =1;i<keywords.length;i++){
    ball1.push(new rotateBalls(width/3,height/3*2,random(-width/3,width/3),random(-height/3,height/3),`${colores_g[floor(random(0,20))]}`));
    print(`${colores_g[i]}`);
  }

  console.log(headlinetxt);

}

function draw() {
  // clear();
  background(200);
  // for(let j=0;j<articles_pop.length;j++){
  //   image(img_pop,random(width),random(height),100,100);
  // }
  noStroke();
  for(let i =1;i<keywords.length-1;i++){
    // text(keywords[i],10,i*10);
    ball1[i].drawBalls(keywords[i],"Hot Issues");

  }
  for (let j = 1; j < headlinetxt[index].length; j++) {
    ballKey.push(new rotateBalls(width/3*2,height/3,random(-width/3*2,width/3),random(-height/3,height/3),`${colores_g[floor(random(0,20))]}`));
  }

  for (let j = 1; j < headlinetxt[index].length-1; j++) {

    headlineContent[j]=headlinetxt[index][j];
    // console.log(headlineContent[i]);
    // text(headlineContent[j],100,100+10*j);
    ballKey[j].drawBalls(headlineContent[j],`Top Headlines by December${date[index]}.`);
  }

}
function mousePressed(){
  print(index);
  if(index>1){
    index=0;
  }else{
    index+=1;
  }
}

function mouseDragged(){
  for(let i =1;i<keywords.length-1;i++){
    ball1[i].updatePos();

  }
  for (let j = 1; j < headlinetxt[index].length-1; j++) {
    ballKey[j].updatePos();
  }
}
