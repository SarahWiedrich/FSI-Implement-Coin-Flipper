// TODO: Declare any global variables we need
let headCount = 0
let tailsCount = 0

//TODO: refactor to use functions


document.addEventListener('DOMContentLoaded', function () {
   
    document.querySelector('#flip').addEventListener('click', function(e){
        if (Math.random () > 0.5){
            console.log('Heads')
            let pennyFace = document.querySelector('#pennyFace')
            pennyFace.src = 'assets/images/penny-heads.jpg'
            pennyFace.alt = 'Penny Head Side'

            document.querySelector('#message').textContent = 'You Flipped Heads!'

            headCount++

            document.querySelector('#heads').textContent = headCount
            document.querySelector('#heads-percent').textContent = Math.round(headCount/(headCount+tailsCount)*100) + '%'
            document.querySelector('#tails-percent').textContent = Math.round(tailsCount/(headCount+tailsCount)*100) + '%'

        } else {
            console.log('tails')
        }
        let randomNum = Math.random()
    })
    // 0.5 is 50/50 
    //console.log(Math.ceil(Math.random() * 100))

   document.querySelector('#clear').addEventListener('click', function(e){
       console.log(Math.random())
   })
    // TODO: Add event listener and handler for flip and clear buttons

    // Flip Button Click Handler
        // TODO: Determine flip outcome
        // TODO: Update image and status message in the DOM

        // Update the scorboard
        // TODO: Calculate the total number of rolls/flips
        // Make variables to track the percentages of heads and tails
        // TODO: Use the calculated total to calculate the percentages
        // HINT: Make sure not to divide by 0! (if total is 0, percent will be 0 as well)
        // TODO: Update the display of each table cell


    // Clear Button Click Handler
        // TODO: Reset global variables to 0
        // TODO: Update the scoreboard (same logic as in flip button click handler)

})