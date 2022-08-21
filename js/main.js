'use strict';

(()=>{
  // 画像の読み込みを行う
  const images = [
    'img/anime00.png',
    'img/anime01.png',
    'img/anime02.png',
    'img/anime03.png',
    'img/anime04.png',
    'img/back.png',
    'img/ending.png',
    'img/garechan.png',
    'img/kip00.png',
    'img/mirror00.png',
    'img/mirror01.png',
    'img/mirror02.png',
    'img/mirror03.png',
    'img/mirror04.png',
    'img/mirror05.png',
    'img/mirror06.png',
    'img/sandWatch00.png',
    'img/sandWatch01.png',
    'img/giveUp.png',
    'img/garechan_blank.png',
    
  ];
  let currentIndex = 0 ;
  let n=0

  const preImage = document.getElementById('preImage');
  preImage.src = images[currentIndex];

  const loading = document.getElementById('loading')
  const text1 = document.getElementById('text1')
  const text2 = document.getElementById('text2')
  text2.textContent=`(${n}/19)`;

  const mirror00=document.querySelector('.mirror00');
  const mirror01=document.querySelector('.mirror01');
  const mirror02=document.querySelector('.mirror02');
  const mirror03=document.querySelector('.mirror03');
  const mirror04=document.querySelector('.mirror04');
  const mirror05=document.querySelector('.mirror05');
  const mirror06=document.querySelector('.mirror06'); 
  const main1 =document.querySelector('.main1');
  const main2 =document.querySelector('.main2');
  const flash = document.querySelector('.flash');
  const preSandWatch = document.querySelector('.preSandWatch');
  const sandWatch=document.querySelector('.sandWatch')
  const ready= document.querySelector('.ready');
  const go=document.querySelector('.go');
  const timer=document.querySelector('.timer');
  const endingBack = document.querySelector('.endingBack');
  const endPic=document.querySelector('.endPic');
  const retry= document.querySelector('.retry');
  const clearMessage=document.querySelector('.clearMessage');
  const gameOverMessage=document.querySelector('.gameOverMessage');
  const gameOverBack=document.querySelector('.gameOverBack');
  const gameOverPic=document.querySelector('.gameOverPic');
  const giveUp=document.querySelector('.giveUp');
  


  preImage.addEventListener('load',()=>{if(currentIndex< images.length-1){currentIndex++;
    n++;
    preImage.src = images[currentIndex];
    text2.textContent=`\n(${n}/19)`;
  }
  console.log(currentIndex);
  if(currentIndex===19){
    loading.classList.add('active');
    text1.classList.add('active');
    text2.classList.add('active');

    setTimeout(() => {mirror01.classList.add("active");
      }, 2000);
    setTimeout(() => {mirror02.classList.add("active");
      }, 4000);
    setTimeout(() => {mirror03.classList.add("active");
      }, 6000);
    setTimeout(() => {mirror04.classList.add("active");
      }, 8000);
    setTimeout(() => {mirror05.classList.add("active");
      }, 10000);
    setTimeout(() => {mirror06.classList.add("active");
      }, 12000);
    setTimeout(() => {mirror00.classList.add("active");
      }, 12000);
    setTimeout(() => {main1.classList.add("active");
      }, 15000);
    setTimeout(() => {main2.classList.add("active");
      }, 15000);
    setTimeout(() => {flash.classList.add("active");
      }, 18000);
    setTimeout(() => {canvas.classList.add("active");
      }, 18200);
    setTimeout(() => {preSandWatch.classList.add("active");
      }, 18600);
    setTimeout(() => {sandWatch.classList.add("active");
      }, 20600);
    setTimeout(() => {preSandWatch.classList.remove("active");
      }, 21600);
    setTimeout(() => {ready.classList.add("active");
                      flash.classList.remove('active');
      }, 19600);
    setTimeout(() => {go.classList.add("active");
                      flash.classList.add("active");
      }, 22100);
    setTimeout(()=>{      
      let count = 0;
      // ギブアップボタン
      giveUp.addEventListener('click',()=>{
        sandWatch.classList.remove("active2");
        setTimeout(()=>{sandWatch.classList.add("active2");},100);        
        count = count + 10;
      })
      // ここまでギブアップボタン

      // リトライボタン
      
      retry.addEventListener('click',()=>{
      sandWatch.src=images[0]
      endPic.classList.remove("active");
      gameOverPic.classList.remove("active");
      retry.classList.remove("active");
      clearMessage.classList.remove("active");
      gameOverMessage.classList.remove("active");
      endingBack.classList.remove("active");
      gameOverBack.classList.remove("active");
      flash.classList.remove("active");
      ready.classList.remove("active");
      go.classList.remove("active");
      canvas.classList.remove("active2");
      setTimeout(() => {flash.classList.add("active");
      }, 500);
      setTimeout(() => {new Puzzle(canvas,50);
      }, 1000);
      setTimeout(() => {ready.classList.add("active");
                      flash.classList.remove('active');
      }, 1500);
      setTimeout(() => {go.classList.add("active");
                      flash.classList.add("active");
      }, 4000);
      setTimeout(() => {let count=0
        giveUp.addEventListener('click',()=>{
          sandWatch.classList.remove("active2");
          setTimeout(()=>{sandWatch.classList.add("active2");},100);        
          count = count + 10;
        })
        const countUp = () =>{
          timer.textContent=`${count++}`;
          if(count===0){sandWatch.src =images[16]}
        else if(count<18){sandWatch.src=images[0]}
        else if(count<36){sandWatch.src=images[1]}
        else if(count<54){sandWatch.src=images[2]}
        else if(count<72){sandWatch.src=images[3]}
        else if(count<90){sandWatch.src=images[4]}
        else if(count === 90){sandWatch.src=images[17];}
        else if(count > 91){sandWatch.src=images[17];
          canvas.classList.add("active2");
          gameOverBack.classList.add("active");
          setTimeout(()=>{gameOverPic.classList.add("active")},1000);   
          setTimeout(()=>{gameOverMessage.classList.add("active")},2000);
          setTimeout(()=>{retry.classList.add("active")},4000);
          };
        }
         const intervalID =setInterval(()=>{
          countUp();
          if(count > 91 || canvas.classList.contains("active2") === true){clearInterval(intervalID);
          }},1000);
      }, 4000);
           
      
      })
      // ここまでリトライボタン


      // ここから砂時計のカウント開始
      const countUp = () =>{
        timer.textContent=`${count++}`;
        if(count===0){sandWatch.src =images[16]}
      else if(count<18){sandWatch.src=images[0]}
      else if(count<36){sandWatch.src=images[1]}
      else if(count<54){sandWatch.src=images[2]}
      else if(count<72){sandWatch.src=images[3]}
      else if(count<90){sandWatch.src=images[4]}
      else if(count === 90){sandWatch.src=images[17];}
      else if(count > 91){sandWatch.src=images[17];
        canvas.classList.add("active2");
        gameOverBack.classList.add("active");
        setTimeout(()=>{gameOverPic.classList.add("active")},1000);   
        setTimeout(()=>{gameOverMessage.classList.add("active")},2000);
        setTimeout(()=>{retry.classList.add("active")},4000);
        };
      }
       const intervalID =setInterval(()=>{
        countUp();
        if(count > 91 || canvas.classList.contains("active2") === true){clearInterval(intervalID);
        }},1000);
    // 砂時計のカウント終了
    },21500);
    setTimeout(() => {giveUp.classList.add("active");
      }, 18600);
    }
  })
  // ここまで、ロードが終わった後の自動処理



 
  

  



  class Puzzle{
      constructor(canvas, level){
      this.canvas = canvas;
      this.level = level;
      this.ctx = this.canvas.getContext('2d');
      this.tiles = [
        [0,1,2,3,4,],
        [5,6,7,8,9,],
        [10,11,12,13,14,],
        [15,16,17,18,19,],
        [20,21,22,23,24,25],
      ];
      this.UDLR = [
        [0,-1],//up
        [0,1],//down
        [-1,0],//left
        [1,0],//right
      ];

      //isCompletedとisCompleteの違いに注意
      this.isCompleted = false
      this.img = document.createElement('img');
      this.img.src = 'img/garechan.png';
      this.img.addEventListener('load',()=>{
      this.render();
      });
      this.canvas.addEventListener('click', e => {
        if(this.isCompleted === true ){
          return;
        }
        const rect = this.canvas.getBoundingClientRect();
        const col = Math.floor((e.clientX - rect.left) / 140);
        const row = Math.floor((e.clientY - rect.top) / 140);
        this.swapTiles(col,row);
        this.render();

        //もし、"isComplete"が"true"なら"renderGameClear"を実行する。
        if(this.isComplete() === true){
          this.isCompleted = true;
          this.renderGameClear();
        }
      });

      do {
        this.shuffle(this.level);
      }while(this.isComplete() === true);
    }

    shuffle(n){
      let blankCol = 4;
      let blankRow = 4;

      for(let i = 0; i < n; i++){
        let destCol;
        let destRow;
        do{
          // ０～３のランダムな整数値を生成
          const dir = Math.floor(Math.random()*4);
       
          destCol = blankCol + this.UDLR[dir][0];
          destRow = blankRow + this.UDLR[dir][1];
                    
        }while(this.isOutside(destCol,destRow) === true );

        [
          this.tiles[blankRow][blankCol],
          this.tiles[destRow][destCol],
        ] = [
          this.tiles[destRow][destCol],
          this.tiles[blankRow][blankCol],
        ];

        [blankCol,blankRow] = [destCol,destRow]
          
        

      }
    }

    swapTiles(col,row){
      if(this.tiles[row][col] === 24){
        return;
      }

      for(let i = 0;  i < 4; i++){
        const destCol = col+ this.UDLR[i][0];
        const destRow = row + this.UDLR[i][1];

        if(this.isOutside(destCol,destRow) === true) {
          continue;
        }

        if(this.tiles[destRow][destCol]===24){
          [
            this.tiles[row][col],
            this.tiles[destRow][destCol],
          ] = [
            this.tiles[destRow][destCol],
            this.tiles[row][col],
          ];
          break;
        }
      }
    }

    isOutside(destCol,destRow){
      return (
        destCol < 0 || destCol > 4 ||
        destRow < 0 || destRow > 4
      );
    }

    //ゲームクリアの条件
    isComplete(){
      let i = 0;
      for(let row = 0; row < 5; row++){
        for(let col =0; col < 5 ; col++){
          if (this.tiles[row][col] !== i++){
            return false;
          }
        }
      }
      return true;
    }

    //ゲームクリアの処理
    renderGameClear(){
      // this.ctx.fillStyle = 'rgba(0,0,0,0.4)'
      // this.ctx.fillRect (0,0,this.canvas.width,this.canvas.height);
      // this.ctx.font = '28px Arial';
      // this.ctx.fillStyle ='#fff';
      // this.ctx.fillText ('GAME CLEAR',40,150);
      
      canvas.classList.add("active2")
      endingBack.classList.add("active");
      setTimeout(() => {endPic.classList.add("active");
        }, 3000);
      setTimeout(() => {clearMessage.classList.add("active");
        }, 3500);
      setTimeout(() => {retry.classList.add("active");
        }, 4000);
      
    }

    //0列目から4列目まで、さらに0行目から4行目まで'renderTile'を実行せよ。
    render(){
    for(let row = 0; row < 5 ; row++){
      for(let col = 0; col < 5; col++){
        this.renderTile(this.tiles[row][col],col,row);
      }
      }
    }
 
    //renderTileは以下のように定義する。
    //renderTileはn,col,rowの引数を持つ。100×100のサイズで画像を切り出す。切り出す始点は計算式で求める。
    renderTile(n,col,row){
      if(n===24 && this.isComplete() === false){
        this.ctx.fillStyle ='#rgb(0, 0, 0)';
        this.ctx.fillRect(col*140,row*140, 140,140)
      } else {
        this.ctx.drawImage(
          this.img,
          (n % 5) *140, Math.floor(n/5)*140,140,140,
          col*140,row*140,140,140
        );
      } 
    }
  }

 const canvas = document.querySelector('canvas');
 if(typeof canvas.getContext === 'undefined'){
  return;
 }
 new Puzzle(canvas,50);

})();