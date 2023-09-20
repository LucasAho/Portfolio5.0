import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import AppBar from '../Components/AppBar/AppBar';
import Footer from '../Components/Footer/Footer';


const SneffelsTripReport = () => {
    return (
        <div>
            <AppBar currentPage='Trip Report' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <div>
                    <Container>
                        <Grid container maxWidth='xl' px='auto' mx='auto'>
                            <Grid item md={8}>
                                <Typography variant='h3'>Sneffels's North Buttress"</Typography>
                                <Typography variant='subtitle1'>My first attempt of Sneffels's North Buttress, my would-be 14er finisher.</Typography>
                                <Typography mr={3} align='left' variant='caption'>Climbed September 17th, 2023</Typography>
                            </Grid>
                            <Grid item md={4}>
                                <img src="https://i.imgur.com/AToGoMO.jpg" width={300} alt="Sneffels North Buttress" />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <Typography variant='h4' >Facing Defeat:</Typography>
                        <Typography variant='body'>
                            Rappelling down the N. Buttress, I found myself completely jaded with the art of climbing. Fatigue and frustration ruled my mind, and I swore I’d never do a climb like that again. Now, after a couple days of recovery, regaining my composure, I look back on the climb as an overall positive experience. I may not have reached the summit, but I pushed myself to my limit and survived. That is far from failure.
                            <br />
                            In some senses, the climb was doomed from the beginning. Almost every costly mistake was made before I even touched the trail. On the bright-side, that makes my areas to improve quite obvious, and I have a perfect opportunity to level up.
                            <Typography variant='h4' mt={2}>The North Buttress:</Typography>
                            <Typography variant='body'>
                                The North Buttress of Sneffels, first sent in 1933, is a classic climb in mountaineering circles. It is well regarded by Roach, and I long ago chose it as my crowning achievement to cap off the Colorado 14ers.
                                <br />
                                Beta on the climb is elusive - despite many ascents, there are few trip reports, all covering the same basic details: a 5.6 (YDS) crux for the first pitch, short 5.4 second pitch, and then 600' of 4th/low 5th class scrambling. Towards the top, it meets the Snake Couloir, with the final option of a 5.6 pitch or loose 4th class scramble.
                            </Typography>
                            <Typography variant='h4' mt={2}>The Long Day Ahead:</Typography>
                            <Typography variant='body'>
                                From beginning to end, it was a rough day. After a very poor night of sleep, Bryan and I set off down the trail at 2am. Almost immediately, we took a wrong turn, adding an extra 3 miles and a 40 minute delay to our trip. While this in itself did not cause us to miss the summit, it was a sign of things to come.
                                <br />
                                We arrived at the base of our route at 0730, an hour and a half later than I had estimated. Nevertheless, we began the climb in high spirits. I believed that we could finish the route in 3 hours - on track to meet our other team at the summit. This would quickly prove to be another unreasonable expectation.
                                <br /><br />
                                The climbing was intense from the first move - every hold was covered in ice and snow. We knew the first pitch to be the crux, but after all, it was only rated at 5.6! This would be the first sign of my poor preparation and hubris. I expected an obvious and easy system of ledges, where snow would cause no issues. As such, I failed to adapt to the reports of poor weather in the week prior.
                                <br />
                                The ice and snow made each move far more fatiguing than it ordinarily would've been. I had to repeat a cycle of clawing through the snow with my bare hands, seeking out holds, and then moving my feet up to stamp out a platform. Often, there would be no such place for my feet, and I would have to make quick sequences with my hands before my feet slipped off of icy nubs (If only there was some piece of equipment that could have prevented this!).
                                <br /><br />
                                It was with great relief that we topped out on the second pitch to see that the next several hundred feet of climbing was on dry rock with easy moves. However, given our error prone exhaustion, we agreed to simul-climb. This almost immediately proved dangerous. The rope kicked out a rock between us, out of my sight, and struck Bryan on the helmet, causing a mild concussion. Thankfully, he was on solid footing, and this did not lead to a more severe accident. After a rest, we continued our simul, making slow but steady timing. It was well past noon at this point, and we found a window of cell service to warn our other team of our delays. We assured them that we would summit though, and they planned to meet us at the Blue Lakes.
                                <br /><br />
                                After a couple hundred more feet, I came to the top of the col at 13,900', where my last shred of hope was crushed. From there, to summit, we would've needed to inch over an icy catwalk, and then climb another pitch of snow covered rock. It looked to be at least a 5.6, and neither of us were in condition to lead such a climb. However, I was determined not to turn back, and sought solid rock to build an anchor for the final push. Every stone was rotten - cracks crumbled and horns toppled at my touch. Peering over the edge of the col, I saw no sign of Snake Couloir's easy top out.
                                <br />
                                I looked at Bryan, devastated, and he had no comfort left to give. We were both drained to our core. It was 1300, and rain clouds crowded overhead. If disaster struck on the final pitch, and we needed SAR, they likely wouldn't come for hours. We had to turn back.
                            </Typography>
                            <Typography variant='h4' mt={2}>And the Long Way Down:</Typography>
                            <Typography variant='body'>
                                Given our fatigue, downclimbing was not an option. We would need to rappel the length of the climb. I found a strip of solid rock at the 13,900’ col, and sacrificed a piton and a cam to the first anchor, equalized with cordelette. $100, surrendered to the mountain. Thankfully, we had twin ropes, halving the number of stations we would need to make, and the next two rappel anchors could be made simply by wrapping cord around solid horns. The next anchor needed only a piton and a nut.
                                <br />
                                That got us to the ledge at the top of the second pitch, where we had a choice to make. Our first option was to rappel down the route we had ascended. We were more familiar with the terrain, but we were low on gear, it was icy, and the second descender could have easily wiped out the first with a fallen rock. Our other option was to descend into the couloir. It was steep (50°+), and only one of us had brought an ice axe. But I felt far more comfortable down climbing that than attempting an extra rappel, so I made the call.
                                <br />
                                Descending to the couloir, I had another nearly severe accident. In my fatigue, I had forgotten to take the cap off the ice axe, and could not get it to stick into the snow. I stepped out across the bergschrund, weighing the axe, when it popped, and I was flung into the wall, smashing my crampons into my ankles. Thankfully, I was only bruised. As Bryan rapped down to join me, I set to problem solving our descent from the couloir. With one axe, we would not be able to go down together. Fortunately, a rock at the edge of the bergschrund made for a perfect rappel horn. I anchored a single rope at the top to give Bryan a full 120m rappel, which got him just to the base of the couloir. Then, sending the rope down and using his axe, I Leroy Jenkinsed it down the couloir. It was 1730. After 10 hours on the wall, we were safe at last.
                                <br />    <br />
                                Knowing our team was likely back at the trailhead and worried about us, Bryan and I agreed: He would carry the gear, while I ran back to stop them from calling SAR. I would then send them in to help extricate Bryan and the gear. This was another mistake. In our fatigue, we failed to think through the consequences of one person hauling all 60lbs. While I made good time, even beating the other team to the trailhead, Bryan had nothing left to give. By the time we got him and the gear, it was 2230. We returned to cell signal, exhausted, hungry, and more than a little grumpy, to find that several of our worried friends had called SAR.
                                <br />
                                Nevertheless, we survived. We were not severely injured. And I tested every skill I had picked up over the last 3 years, just as I intended.
                            </Typography>
                            <Typography variant='h4' mt={2}>After Action Report:</Typography>
                            <Typography variant='body'>
                                While several mistakes were made on the route, it was no single one of those that caused us to miss the summit. Instead, it was in the decisions made before we started, along with the amalgamation of our mistakes, that led to such a brutal and unsuccessful day. But I am an alpinist - failure is part of the game. So what will I change next time for a better outcome?
                                <br />    <br />
                                Like many figures of Greek myth, hubris was my undoing in this venture, and Rhamnusia had come for me at last. I'd had a summer of risky successes, and this was my 58th unique summit in Colorado - an easy 5.6 wasn’t gonna stop me, right?
                                <br />
                                In my pride, I had forgotten that there is a big difference between a 5.6 at the local crag and a 5.6 alpine climb. It is easy to get off route on the climb like this, especially with snow and ice dictating the path of least resistance. And a pump at altitude doesn't just go away with a few shakes.
                                <br />
                                I also shouldn’t have tried to coordinate my summit with a group on another route (duh, right?). I wanted to celebrate this summit with my friends - people who have supported me through this entire journey. Yet the push to move quickly and link up with them, along with the guilt of knowing I had left them waiting, was incredibly mentally taxing.
                                <br />    <br />
                                I was also exhausted before I even started. The week before this climb, I had done the Chicago Basin group in a day and a half, and I was only half recovered by the time we hit the trail. This pre-existing exhaustion would come back to bite me, and it is the reason I wanted to remain roped up during the easier sections. It was as a result of this decision to rope up that Bryan was struck with a rock. It also slowed our ascent to a crawl, leading to weather concerns.
                                <br />    <br />
                                Going into the climb, I knew the conditions were far from ideal, but I was determined to force the climb. It had been raining and snowing for the entire week beforehand, and we were lucky to have a window to climb at all. I only actually considered the weather the day of, and I didn’t stop to fully process what that week of snow would do to the route. If I had, I would've thought to treat it as a mixed climb, and packed ice tools and appropriate crampons (I brought strap-ons, which are barely even suitable for couloirs, much less mixed climbing). This alone would've likely taken us to the summit. Much of our fatigue was brought on by the extra measures needed to climb in the snow, stamping out holds and clawing around for holds.
                                <br />    <br />
                                Finally, I should have written a detailed itinerary. Many of my friends had a loose understanding of where we'd be, but when they called SAR, they were unable to answer many questions. While we did not need rescuing, there would've been trouble if we had. In the future, I need to dedicate some time to writing a detailed itinerary and sharing it with my friends. It could save my life.

                            </Typography>
                            <Typography variant='h4' mt={2}> Ready to Return:</Typography>
                            <Typography variant='body'>
                                All in all, it was a relentless and embarrassing day. Never in my life have I pushed so hard, and I have many weeks of recovery ahead of me. Yet my mindset has entirely changed from the defeat I felt as we returned home. My ego needed a good kick - I will leave it where it fell while I use these mistakes to level up for good. I belong in the alpine, and I will return as soon as my body is ready, a stronger mountaineer than ever.
                            </Typography>
                        </Typography>
                    </Container>
                </div>
                {/* <Grid item md={3}>
                        <SideBar postId={postId} blog />
                    </Grid> */}

            </Container >
            <Footer />
        </div >
    );
};

export default SneffelsTripReport;