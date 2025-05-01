# Final Project Documentation

For this documentation file, I will first go over all the different coded components, and then I will go over my performance.

## C Octave

This was the easiest part of this piece, and also the part that really makes this an interpretation of "In C". Terry Riley's original score states that someone, (namely a beautiful woman, but hopefully my MacBook does the trick) must play a C octave at consistent 8th notes in the upper register of the piano for the duration of the piece.

`
.D2.........
..:04C......
............
............
............
.D2.........
..:05C......`

The dots here are residual placeholders left over from my text editor.

The D operand generates a bang, in this case, once every 2 frames (that's what the 2 means next to the D). This was something that confused me at first, because bigger numbers usually indicate shorter durations in musical notation. However, these are frame rates, not fractions of beats. I left the spaces for velocity and duration blank, because they weren't super relevant to this. 

Below the 2 I put a ":", which means the rest of the information would be converted into MIDI information. The next number indicates MIDI Channel, which I set to 0, meaning it's in the FIRST MIDI channel (another bit that led to some confusion when trying to get this piece to make sound). The next indicated octave, which I set to 4 in one and 5 in the other, and then input the note C natural. 

## Sequences

The sequences I used are all based off of sequences that are notated in the original "In C" score. I'll describe my process for making just one sequence, as they all used the same code besides the notes and lengths of the sequences themselves. 

`
.2Cb...............
..6bTFEFEE.E.EFE...
....E..............
d1..J..............
h:03E..............`

In this case, C indicates a counter operand, rather than a note. This one counts from 0 to b (b means 12 because there's no 2 digit numbers in Orca. Note that as I said before, 0 actually means 1), generating a new number every 2 frames (see the 2 to the left of the C). At the time that I paused it at, the counter was at 6. Operators that return a value will have the value printed directly below the operand. 

Before we input a track ("T") that will store our sequence, we have to establish the length of the sequence. This one is 12 ("b") notes long. That's why I had the counter count from 0-12 - the counter is what contextualizes our sequence in time. To the right of "T", we put the notes in the sequence. In this case, the dots between letters indicate rests. (Note: if I wanted to put a note that would be played by a black key on the piano, we would make it a sharp (there are no flats). To do this, you make the letter lowercase.)

Below where the Track operator returns which note the counter has indicated it must return (in this case E), you'll see that I have put a J operand. This is a jumper, which just means it returns the same value in the square above it to the square below it. This just gives me more room to write the rest of my code without it getting all jumbled up. This happens way way more than you would think in Orca.

You'll recognize the rest of the code from the C octave code, except that it bangs every frame even though the counter only generates a value every two frames, and is using a lowercase d instead of an uppercase D. I used the lowercase d because I wanted the sequence to only play when it gets triggered by an Eastward moving operator, and the uppercase D plays the sequence always no matter what. It bangs every frame because this was the only way I could get the sequence to keep playing, which is kind of annoying, because it just plays the same note over and over again until the counter moves on instead of holding it out for the appropriate duration.

The "h" below the "d" is a halt for the Eastward moving operator. If this wasn't there, when the "E" would hit the ":", it would just play whatever note was stored below the "J" at the time, instead of triggering the actual sequence. The "E" must hit the "d" to trigger the sequence. So many letters.

## Eastward moving operator generator

An Eastward moving operator, or "E", just moves, well, Eastward, until it hits something. If it hits something like a ":", it generates a bang, just like "D", but it only does so once. Like I said before, I am using these to randomly trigger my sequences. Therefore, I needed a module that would generate "E"s randomly along the grid, which if on the same x-axis as one of the "d"s, would move Eastward until it triggered the sequence.

`
4Rz.....
.vCz....
..iXE...`

It doesn't look like much, but this was actually the hardest thing to figure out.

It's going to make the most sense here to move from the bottom of the module to the top.

"X" generates values along the X axis. The value to the right of "X" indicates what it's generating: in this case, "E"s. The value to the write indicates where on the X axis the value will be generated. The number 3 will generate an "E" 4 spaces below "X", etc. However, we need "E"s to be constantly generating, not just generate one time. Cue "C"s dramatic return. 

Once we get a C in there, and put a value like "z" to the right of it, we see a cascade of "E"s begin to move up and down the grid. This isn't very random though, and randomness is the core of this project. This is where "R" comes in. "R" randomly generates a value, in this case any value between 0 and z, every 4 frames (or it's supposed to generate every 4 frames - it kind of doesn't matter for this one for some reason). Why not generate the value to the right of the "C", you ask? Doesn't the left just indicate how how many frames it takes for the counter to generate a number? Better yet, why not skip the counter and just put the "R" next to the "X"? To this I say, this just simply works better. I don't know why, and I don't know how. 

Some difficulties: 

First, this random number generator mostly generates numbers in the middle, making the first sequence take a long time to activate. We need something like .exprand. SuperCollider reference!

Second, there's the graphical limitation. "In C" has 50 sequences, and I don't know if it would be possible to put them all in the same grid this way, especially seeing as the largest number is z, which is like 36 or something. Maybe if we did go the 50 sequences route, we'd just have to code more "E" generators too.

## Sound??? 

How is this thing making sound? This is all sending MIDI information, not generating actual sound. I had to make a file in Logic (Ableton wasn't working as an input) and set the Output of Orca to the Logic Virtual In. In Logic, I set the Input to Blackhole, which is a sound transferrance app I have. Because all the MIDI information is being sent to channel 1, I just made a track in MIDI channel 1 set to a basic electric piano sound. I could add more sounds if I wanted to, because I know how to change MIDI channels in Orca. 

## Performance

For the performance, in order to keep the spirit of the actual piece, I deleted all the "d"s and only played the "D"s (or first octaves) for a while. When I was ready for the piece to begin, I replaced the "d" for the first sequence only, and waited for an "E" to trigger it. After the first sequence was triggered, I would replace the "d" for the second sequence, and after a while, delete the "d" for the first sequence. This continues until all the sequences have played and been stopped. 

## Revisions

When I first presented this piece, I did not stop the sequences ever, and I did not wait for the "E"s to trigger them individually, meaning I had all the "d"s instated from the get go. This sounded like garbage and did not keep with the spirit of Riley's piece. 

I also only had one C octave module instead of the both that allowed it to be an actual octave, and it generated bangs at half the speed. This was also a result of not listening to the original piece enough.

In the future, I would figure out a way to code all 50 sequences and still have it be intuitive and playable, which would be difficult to do with such a visual coding language. I would also maybe make multiple modules for the same sequence, to really get that ensemble sound. 

I'd also like to figure out a way to make the sequences stop randomly, instead of me having to do it. 