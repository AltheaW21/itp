# Midterm
## P5 Project Link

The final draft of my midterm can be found [here.](https://editor.p5js.org/AltheaW21/full/J3LAHZ7j0)
## Description

For this assignment, I wanted to pick three samples that didn't necessitate lining up rhythmically, so I chose a guitar that I put through a granulator, ("Granulator"), an ambient train noise created on an FM synthesizer ("Train"), and a tom sound that was in a 707 drum machine emulator in Ableton Live ("Tom 707"). I uploaded all of these into p5, and then had to decide which keys I wanted to assign these sounds to. I chose the a, w, and d keys because those are commonly used keys in computer games, and they're pretty ergonomically placed in relation to each other.

The original code along that I based my midterm off of reads as follows:

`let myFirstSound;`

`function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('00_ann.wav', soundLoaded);
}`

`function setup() {
  createCanvas(400, 200);
  textSize(20);
  textAlign(CENTER, CENTER);
  text("Move your cursor to the 'Preview' section\nPress 'P' to play sound", width / 2, height / 2);
}`

`function soundLoaded() {
  console.log("Sound successfully loaded!");
}`

`function keyPressed() {
  console.log("Key pressed:", key);
  if (key.toLowerCase() === 'p') {
    playCustomSound();
  }
}`

`function playCustomSound() {
  if (myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Sound played.");
  } else {
    console.log("Sound not loaded yet.");
  }
}`

In order to load my three sounds, I declared two additional variables in the first block of code, and made those variables equal to my previously discussed wav files in the second block of code:

`let myFirstSound;
let mySecondSound;
let myThirdSound;`

`function preload() {
  soundFormats('wav', 'mp3');  
  myFirstSound = loadSound('VCVRecordingIII-003.wav', soundLoaded);
  mySecondSound = loadSound('Tom 707 Low.wav', soundLoaded);
  myThirdSound = loadSound('BART.wav', soundLoaded);
}`

The third block of code I didn't change much except to change the wording to reflect the keys I wanted to assign sounds to.

Here's where things started getting a little tricky, because the && and || functions were not working in the way I wanted or expected them to. 

My fourth block of code looked like this before my final draft:

`function soundLoaded() {
  if (myFirstSound.isLoaded && mySecondSound.isLoaded && myThirdSound.isLoaded) {
  console.log("Sound loaded!");
  }
  else {
    console.log("Error loading one or multiple sounds.");
  }
}`

The weird thing that I noticed with this is that when all the sounds are loaded, it prints "Sound loaded!" three times. My understanding is that the computer has to check whether all three statements are true before running the console.log portion of the if statement. Instead, it only seems to check if one of these statements is true, and then runs the code the number of times it is true for, which I would think would be the function of a || adjacent statement. When I attempted to simulate a scenario where one of the sounds didn't load by putting blank quotation marks in place of my file name and still calling the function soundLoaded, the else statement didn't run. There was no scenario in which I could get the else code to run, even when none of the three sounds were loaded, which is very confusing to me. In the end, I ditched the else statement, because it didn't do anything. 

I had an even more severe version of this issue when it came to my sixth block of code. (My fifth block I kept the same, except that I added the three keys I wanted to have function, and put || statements between them.)

What I thought to do was add two additional if statements to the code along, and make the if statements dependent on both which key was pressed and whether or not the sound was loaded. I also had different statements print based on which sound was played.

`function playCustomSound() {
  if (key.toLowerCase() === 'a' && myFirstSound.isLoaded()) {
    myFirstSound.play();
    console.log("Granulator played.");
  }
  if (key.toLowerCase() === 'w' && mySecondSound.isLoaded()) {
    mySecondSound.play();
    console.log("Tom 707 played.");
  }
   if (key.toLowerCase() === 'd' && myThirdSound.isLoaded()) {
    myThirdSound.play();
    console.log("Train sound played.");
   } else {
	   console.log("Sound not loaded yet.")}
}`

The problem now was that no matter what key I pressed, the else statement would also print. Even if the key had a sound loaded onto it, it would play the sound successfully, but the console would read, for example:

"Granulator played.
Sound not loaded yet.""

Not incredibly helpful.

To remedy this, I opted also to just ditch the else statement.

My final problem was that my second two samples were way louder than my first sample. I googled how to do volume control, and ended up on [this p5 help guide](https://p5js.org/reference/p5.MediaElement/volume/) which was honestly kind of misleading, because what I didn't realize was that it shows how to create a parameter for constantly changing volume, and not how to set a sample's playback to a stagnant value. After getting frustrated with various amalgamations of trying to use this guide, I found [this YouTube tutorial,](https://www.youtube.com/watch?v=Pn1g1wjxl_0) which was a lot more helpful. I added a myXSound.setVolume(); statement after each play statement that I wanted to alter the volume of.

Final thoughts: it also occurs to me that I could resolve some of my else statement woes by creating separate keyPressed and playCustomSound functions for each key that I assign sounds to. This seems tedious and I have opted not to do so, which I apologize for. 