class PostIt {
  backgroundcolor: string;
  text: string;
  textColor: string;

  constructor(backgroundcolor,text,textColor) {
    this.backgroundcolor = backgroundcolor;
    this.text = text;
    this.textColor = textColor;
  }
}

let PostIt1: PostIt = new PostIt('orange','Idea 1','blue');
let PostIt2: PostIt = new PostIt('pink','Awesome','black');
let PostIt3: PostIt = new PostIt('yellow','Suberb!','green');

console.log(PostIt1);
console.log(PostIt2);
console.log(PostIt3);