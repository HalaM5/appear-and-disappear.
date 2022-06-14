// TODO: creat function for animation on different screen width
/** use anime.js (javascript library) for animation */
function inview(){
    if(innerWidth < innerHeight){
        anime({
            targets: '#move',
            translateX: 250,
            rotate: '4turn', //rotation number around itself at begin; if 1.5 it will be updown;complete round give right up position for words
           // backgroundColor: '#FFF',
            duration: 8000,
            keyframes: [
                {translateY: 40}, //down 40
                {translateX: 100}, //right 300
                {translateY: 300}, //down
                {translateX: -100}, //left
                {translateY: 300}, //down
                {translateY: 0}, //above at topest
                {translateX: 0}, //center(right)


              ],
          });
        }
          else{ // on screen-width>600px
            anime({
                targets: '#move',
                translateX: 250,
                rotate: '1turn',
                //backgroundColor: '#FFF',
                duration: 10000,
                keyframes: [
                    {translateY: 40}, //down
                    {translateX: 250}, //right
                    {translateY: 100}, //down
                    {translateX: 300}, //right
                    {translateY: 300}, //down
                    {translateX: -300},  //left
                    {translateY: 0}, //topest up
                    {translateX: 0}, //center right

                  ],

              });


          }

    };
    // TODO: call function
    inview();

  setTimeout(inview,4000);



/** use jQuery library for disappear and appear elements */
  var hiddenRed = $( ".purple" );
  var hiddenGreen = $( ".light" );

  var hiddenResult = $( "#result" );

  $( ".entercont" ).on( "click", function( event ) {
    $( "p.click" ).html( " " ); // TOD:  disappear click me sentence
  hiddenRed.show(); //TODO: appear input element
  hiddenGreen.show(); //TODO: appear button
  hiddenResult.show(); //TODO: appear feel word



});
/** use jQuery for disappear feel word by replacing it by blank */
$( "button" ).on( "click", function( event ) {
    $( "p.para" ).html("");




});
/** add event to button for appearing user's data */
var d = document.querySelector('#b').addEventListener("click", function(){
    var inputt = document.querySelector('#btn').value.toLowerCase()
    document.querySelector('#feel').innerHTML=inputt
/** if user write positive this message will appear for him and there is certain style for data of user different from any  other words he will enter them */
    if(inputt=='positive' || inputt == 'very positive'){
        document.querySelector('#advice').innerHTML=`"It is wonderful positive word , Tell yourself always I am Good and Thanks The God"`
        document.querySelector('#feel').style.cssText='color: #2cc72ced; font-size: 25px; font-style: italic'

    }
    else {/** if user did not write positive this message will appear */
        document.querySelector('#advice').innerHTML=`"Please enter positive and Say Thanks The God "`

    }

})
