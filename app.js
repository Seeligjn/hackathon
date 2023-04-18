let $container = $('.container')

let noteArray = ['c' , 'c#' , 'd' , 'd#', 'e' , 'f' , 'f#', 'g', 'g#' , 'a' , 'a#', 'b' ,]
let sounds = [
    'sounds/C5.mp3', 
    'sounds/c sharp.mp3', 
    'sounds/d.mp3',  
    'sounds/d sharp.mp3', 
    'sounds/e.mp3', 
    'sounds/f.mp3',
    'sounds/f sharp.mp3', 
    'sounds/g.mp3', 
    'sounds/g sharp.mp3', 
    'sounds/a.mp3', 
    'sounds/a sharp.mp3', 
    'sounds/b.mp3'
]


for (let i = 0; i < noteArray.length; i ++) {
let $pianoKey = $('<div></div>').width('100px').height('100px').addClass('piano-keys').addClass(`key-${noteArray[i]}`).text(noteArray[i])
$pianoKey.on('click' , function () {
        var sound = new Howl({
        src: [sounds[i]]
      });
      
      sound.play();
})


$container.append($pianoKey);
}

