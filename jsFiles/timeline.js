

var exp = (function() {

    var p = {};

   /*
    *
    *  INSTRUCTIONS
    *
    */
        
    p.inst = {}

    // instruction pages
    var endMessage = `<div class='instructions' style='text-align:center'>
    <p>Thanks for playing! If you'd like to continue, simply refresh your browser.</p></div>`; 

    // combine pages into blocks
    p.inst.block1 = {
        type: "instructions",
        pages: [endMessage],
        show_clickable_nav: false,
    };

   /*
    *
    *  TASKS
    *
    */

    p.tasks = {};

    // parameterize "Target Practice"
    p.tasks.slingshotGame = {
        type: 'slingshot-game',
        stimulus: slingshot.run,
        total_shots: 1000,  
        canvas_size: [475, 900],
        ball_color: 'white',
        ball_size: 10,
        ball_xPos: .13,
        ball_yPos: .5,
        target_color: 'red',
        target_color_hit: 'green',
        target_size: 10,
        game_type: 0,
        target_xPos: .9,
        target_yPos: [.2, .4, .5, .6, .8],
        friction: .02,
        tension: .03,
        prompt: `<div class='instructions'>

        <p><strong>Target Practice</strong>. The goal of Target Practice is to shoot the ball
        as close to the target as possible. After each shot, you'll see how close the 
        ball came to the target. Try your best to get as close to the target as possible! 
        Follow the instructions in the game area, then play Target Practice.</p></div>`,
    };

    return p;
}());
  
var timeline = [
    exp.tasks.slingshotGame,
    exp.inst.block1,
];

jsPsych.init({
    timeline: timeline,
});
