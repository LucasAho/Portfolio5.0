import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import AppBar from '../Components/AppBar/AppBar';
import Footer from '../Components/Footer/Footer';


const SplitTripReport = () => {
    return (
        <div>
            <AppBar currentPage='Trip Report' />
            <Container maxWidth='xl' mt={1} style={{ marginTop: '1rem', marginBottom: '1rem' }}>
                <div>
                    <Container>
                        <Grid container maxWidth='xl' px='auto' mx='auto'>
                            <Grid item md={4} sm={12}>
                                <Typography variant='h3'>Split Couloir</Typography>
                                <Typography variant='subtitle1'>Attempting a classic</Typography>
                                <Typography mr={3} align='left' variant='caption'>Climbed November 25th, 2023</Typography>
                            </Grid>
                            <Grid item md={6} sm={12}>
                                <img src="https://i.imgur.com/Jah7m7V.jpg" max-width={400} alt="Split's East Face" />
                            </Grid>
                        </Grid>
                    </Container>
                    <Container>
                        <br />
                        <Typography variant='h4' >If you ain't bailin', you ain't tryin':</Typography>
                        <Typography variant='body'>
                            Our ascent of Split Couloir began as a joke. We had recently crushed Notch Couloir on Longs Peak, and we were looking to challenge ourselves over the Thanksgiving weekend. Ellen shared a FB trip report with me, a 1,600' ice line on Split Mountain, which was only in because of a record breaking winter in the Sierra Nevada range.
                            Realizing that it may never be in this shape again during our lifetimes, I jokingly suggested that we should just fly out and climb it! Having never flown out for a weekend route before, I said this in complete jest, but the next thing I knew, we were buying plane tickets, obsessing over forecasts, and packing our bags.
                            <br />
                            I knew from the onset that our chances of a summit were slim. We had less than 12 hours of daylight this time of year, and so we would need to cover over 100' per hour to get out of the couloir before dark. To make matters worse, a winter storm had hit the Sierras the week before, and we expected up to a foot of fresh snow slowing us down.  But we agreed that not summiting was no reason not to try. As Ellen put it, "If you ain't bailin', you ain't tryin'".
                            <br />
                            To further armor myself against feelings of failure, another of my alpine partners, Matt, reminded me of the three rules for success on an alpine climb. They are, in decreasing priority:
                            <ol>
                                <li>Make it back to the car</li>
                                <li>Make it back as friends</li>
                                <li>Make it to the summit</li>
                            </ol>
                            With this mindset in place, the focus of this climb was to push the limit, and I went in well equipped to handle turning back.
                            <Typography variant='h4' mt={2}>Split Couloir:</Typography>
                            <Typography variant='body'>
                                There isn't a ton of information about Split Couloir. It was only recently uploaded to Mountain Project, and is most well known as one of Chris Davenport's fifty classic ski descents of North America. Despite its obscurity, it is as picturesque as a line gets, running between the twin summits that give Split Mountain its namesake.
                                <br />
                                In a normal year, only the first two pitches of ice come in, with the rest as a snow climb. At the beginning of November though, reports began rolling in: after a record breaking snow year and its subsequent melt off, the entire couloir goes.
                                <br />
                                <br />
                                The first two pitches are the crux. The first is 30m of WI3 and a stretch of easy snow.
                                <br />
                                The second forks off into three options: an ice chimney, a WI4 smear, or a 5.easy mixed line.
                                <br />
                                The remainder of the couloir is a continuous WI2, ending in a 3rd/4th class scramble to the summit at 14,064.
                                <br />
                                <br />
                                Despite the low grades, the objective hazard of the couloir is undeniable. The bowl at the top is a hot spot for avalanches, and has claimed the lives of many skilled skiers. The couloir also acts as a chute for rockfall coming off the two summits, and time spent in the couloir needed to be kept to a minimum.
                                <br />
                                Thankfully, these objective hazards were as low as they could get. Our forecast promised clear and cloudless days for all 3 days. Despite the recent storm, I expected little to no avalanche danger. It would be cold, with a high of 15°, but this was actually good news, as it greatly reduced the chances of melting snow shoving rocks down the chute.
                            </Typography>
                            <Typography variant='h4' mt={2}>The Big Approach:</Typography>
                            <Typography variant='body'>
                                Ellen, master of spreadsheets and planning, built the itinerary. We would fly into LAX early Friday morning, and rent a car to arrive at the Red Lake trailhead by midday. A 4,000' approach would put us at basecamp, and another 4,000' would get us to the summit. We would sleep at the lake for two nights and get back in time to fly out Sunday night.
                                <br />
                                (I cannot express enough how important Ellen's planning skills are. She had time tables, gear lists, and contingency plans all laid out on spreadsheets. When so much of mountaineering is behind the scenes with logistics, organizational skills are invaluable.)
                            </Typography>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item md={6} sm={12} mt={1} mr={2}>
                                        <Typography variant='body'>
                                            Friday immediately started off rough. I set my alarm for the wrong time, and only woke up (30 minutes late) after Ellen knocked on my car window. We even had to double back when I realized I forgot my wallet (and my gloves, headlamp, and water).
                                            At DIA parking, as we stood out in the freezing cold and blowing snow awaiting the shuttle, we shared a look of realization. We were going to be this uncomfortable for the next three days. One of my friends had gone to Vegas this weekend - was I doing it wrong? (Absolutely not, embrace the suck)
                                            <br />
                                            Regardless, by 05:30, our woes were forgotten, and we were soaring over the clouds.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={5} sm={12}>
                                        <img src="https://i.imgur.com/4eFHDmi.jpg" height={300} alt="Flying to LAX" />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item md={5} sm={12}>
                                        <img src="https://i.imgur.com/AwV4kC6.jpg" width={400} alt="Approach Hike" />
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Typography variant='body'>And nine hours later, we were starting from the trailhead at 6,600', at the edge of the desert.
                                            <br />
                                            The trail wove over the bush, up running creeks, and through tangles of trees, but we made good time. Even 6 months prior, such an approach in heavy packs would have done me in, but I felt fresh by the time we reached our basecamp at 10,200'. A gratifying sign that my Denali training was paying off.
                                            <br />
                                            As the cold settled in and we went to sleep, I thought back on our wild approach, feeling as though three days had passed since Ellen's knock on my car window. We had flown from 5,400' to sea level, driven back up to 6,600', and hiked to 10,200'. Technology is pretty neat, eh?
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>

                            <Typography variant='h4' mt={2}>Day of the Climb:</Typography>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item md={6} sm={12} mt={1} mr={2}>
                                        <Typography variant='body'>
                                            We awoke at 02:30, but, moving slow in the cold, only shouldered on the heavy packs and moved out at 03:30. As the sun peaked out above Death Valley, we donned our crampons at 11,400', beneath a glacier-like mass of snow and ice. This went at AI1, up to the base of our route at 12,200'.
                                            <br />
                                            Immediately, we saw that we'd be off to a rough start. The pitch started at WI3, with several moves of vertical, rotted out WI4 at the top. Needless to say, I was greatly relieved when Ellen offered to lead it.
                                            <br />
                                            We anchored up on the side, and she set off, wielding a Petzl Gully in one hand and a BD Fuel in the other.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={5} sm={12}>
                                        <img src="https://i.imgur.com/Bx9pO6b.jpg" height={300} alt="Split Glacier" />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item mt={1} md={5} sm={12}>
                                        <img src="https://i.imgur.com/Vq2biuD.jpg" width={400} alt="Ellen Beneath P1" />
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Typography variant='body'>

                                            Beneath WI4 section, Ellen hung out a bit, evaluating whether she could make the lead. I offered to carry her bag up, if she left it on her last screw, and through a few hair raising moments, she crushed it and disappeared into the couloir.
                                            <br />
                                            Here, our first hint of trouble cropped up. The moment she disappeared out of eyesight, we were likewise unable to hear each other. Any attempts to communicate fractured into echoes on the labyrinthian peak, and I had no idea whether she had me on belay. I inched up towards the climb, and the rope tightened, so I decided to just go for it.
                                            <br />
                                            The ice was surprisingly picked out, so most of my placements were just passive uses of already existing holes, with several zones ringing hollow. Upon reaching her bag, still unsure of whether I had a belay, I clipped into the screw and donned both bags. As I raised my arms above my head to start moving again, I immediately pumped out. The second bag was digging into my armpits and cutting off my circulation. But unable to safely hang and fix it, I could only bear through. I stripped off my gloves in an attempt to get some feeling back, and one dropped down the route, sliding hundreds of feet out of view within seconds.                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                            <Typography variant='body'>
                                In desperation, I charged through the route, and the remaining moves passed in a blur.
                                I topped out to see that I was not on belay. Ellen had been forced to simul up another 40m to build a station, since there were no placements in the walls of the couloir.
                                <br />
                                Frankly, we were lucky that neither of us were injured in this situation. Of all the mistakes we made, this was the deadliest, yet it was shockingly insidious - I didn't fully realize its consequences until days after the climb. I hesitate to include it in this trip report, but it is important to remember that not every point of failure is a scary move or falling rock. Decision making plays a huge factor in mountaineering, and danger exists even in mundane moments.
                                <br /><br />
                                After crawling my way up to Ellen (I would not have gone graceful into that good night), and returning her bag, we considered our options, finding ourselves at the aforementioned fork in the road.
                            </Typography>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item mt={1} sm={12} md={6}>
                                        <img src="https://i.imgur.com/bNN4Re7.jpg" width={500} alt="Fork in the Road" />
                                    </Grid>
                                    <Grid item md={6} sm={12}>
                                        <Typography variant='body'>
                                            First on the left was an ice chimney, which immediately appealed to me. However, previous trip reports stated they weren't able to place any protection, and neither of us were keen on getting stuck halfway up with no way to lower.
                                            <br />
                                            In the middle was that smear of WI4 and mixed ice. It appeared to be equally unprotectable, and I certainly wouldn't be leading it.
                                            <br />
                                            The final option, as suggested by the previous trip report, was that 5.easy/M0 route up the right side. However, we did not realize that the previous party had gone up further back, at the arete. Having missed their turn, we instead found ourselves beneath an obvious splitter crack that rose straight out of the couloir.
                                            <br /><br />
                                            As I was still pumped out from the first pitch, Ellen offered to take this lead and feel out the WI4 smear. In the meantime, I fixated on the splitter crack, picking out beta and deciding whether I could do it. Eventually, we agreed that it was the better option, and she returned to the anchor, giving us a perfect opportunity to sit for a couple minutes, regain our composure, and deeply consider our options.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                            <br />
                            <Typography variant='body'>
                                Instead, I immediately hopped onto the mixed line, having tunnel visioned into a sequence that would get me past the first bulge and to the base of the crack. I would soon learn that the line looked a lot easier from the ground. The crack had an awkward outward flare that made it almost impossible to place gear. To make matters worse, a steady bead of choss climbed the right side of the crack, making placements even more insecure.
                                <br />
                                Using a sequence of placing and torquing my tools over to the right, and then raising my feet off to the left as though climbing lay-back, I sewed up the crack with mediocre pieces. At the top, a short traverse promised to spit me onto the arete, where I hoped the climbing would get easier.
                                <br />
                                I equalized between two sub-bomber pieces and attempted the move, taking a small fall. Pumped and uncertain, I hung on the two pieces for a bit, discussing my options with Ellen. She encouraged me to lower off if I wasn't sure of the send., The alpine is not the place for big whips and pushing your grade.
                            </Typography>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item mt={1} md={5} sm={12}>
                                        <img src="https://i.imgur.com/xrhtqa7.jpg" width={350} alt="Ellen on Mixed" />
                                    </Grid>
                                    <Grid item md={7}>
                                        <Typography variant='body'>
                                            Still slightly less than sure, I shouted my war cry ("F*** it, we ball!" (inspiring final words right?)), and sent the sequence, landing myself into a comfortable ledge on the arete. Much to my dismay, the climbing appeared to ease up only slightly, and the rock was still almost impossible to protect. Some 10m later, I found a single cam placement beneath an awkward bulge. Uncertain if my hand hold would remain in the wall, but with no other options, I pushed through the move. In doing so, my feet slipped out, and all of my weight went into the possibly loose block. Scrambling to regain my feet, I kicked out the only cam that I had placed - a fall would almost certainly be a deck.
                                            <br />
                                            After some (extremely dignified) shouts of terror, I squeezed through the move, and found a decent enough feature to build a two piece anchor. However, looking ahead, I knew our ascent was at an end. We needed at least one more pitch of chossy mixed climbing and a possible rappel to rejoin the couloir, and it was 12:30 - only had 4 hours of daylight left.
                                            <br />
                                            Regardless, I wanted Ellen to experience the pitch and give her own opinion, so I belayed her up to our anchor at 12,700'
                                            <br />
                                            After feeling out the next pitch, Ellen ultimately agreed that it was time to call it quits. Even if we pushed through this section or returned to attempt the chimney, we were well beyond our time allotment, and had no chance of summitting before dark.
                                        </Typography>
                                    </Grid>
                                </Grid>
                            </Container>
                            <br />
                            <Typography variant='body'>
                                We rapped off of a single pin, with a two piece back-up for the first to descend. Unsure of whether a 30m rappel would return us to the couloir, we planned on lowering to a stuck pin halfway up the pitch.
                            </Typography>
                            <Container style={{ marginTop: "1rem", padding: 0 }}>
                                <Grid container maxWidth='xl' px='auto' mx='auto'>
                                    <Grid item mr={4} md={6} sm={12}>
                                        <Typography variant='body'>
                                            When I reached the pin though, I realized two things. First, it was far from bomber. Ellen had been unable to remove it, but it was only halfway buried in the seam, and I was not keen on both of us rapping off it with no back-up. Second, the pin was tucked into a dihedral, with barely enough space for one of us. There was no way we could both hang off it and set up a new rappel.
                                            <br /><br />
                                            Lacking the energy to re-ascend the rope, I lodged my ice tool into the crack, and equalized the two pieces. As Ellen extended the rappel on cordellette, I hung in the dihedral, questioning my life choices. Although I was probably only hanging there for 10 minutes, it felt an eternity.
                                            <br />
                                            They say that the greatest alpinists have the shortest memories, and this is a moment that I would do well to expunge from my mind. As I hung there, I wondered if my two pieces would pop out, and I'd be sent cartwheeling to my death. I wondered if Ellen's rappel would pop, and I'd watch her tumble past me, leaving me to freeze to death on the side of a cliff. That kind of thinking is actively detrimental to my chances of survival, but at that point, fatigue had reduced me to a cold meat bag of anxiety, and I had nothing to do but wait. Only by further exposure to those situations can I harden myself against such a mindset.
                                        </Typography>
                                    </Grid>
                                    <Grid item md={5} sm={12}>
                                        <img src="https://i.imgur.com/jKrWKOD.jpg" width={300} alt="Sketchy Pieces" />
                                    </Grid>
                                </Grid>
                            </Container>
                            <Typography variant='body'>
                                Despite my misgivings, we found ourselves back in the couloir shortly after. A down lead, two v-threads, and another pin returned us to the base of the route at 14:30, 7 hours after we had started.
                                <br />
                                Having prepared myself not to summit, and thankful to have survived pushing my limits to such an extent, I returned to camp in high spirits. There was not to do but relax and prepare for the journey home.
                            </Typography>
                            <Typography variant='h4' mt={2}>After Action Report:</Typography>
                            <Typography variant='body'>
                                Unlike previous climbs, I missed this summit for relatively mundane reasons. At the end of the day, we ran out of time, and the only solution is to get stronger and faster. To keep training and pushing my limits. However, there were a few mistakes made that are easily remedied for the next route.
                                <br /><br />
                                First, I need to prioritize those opportunities to breath and think, instead of jumping into each action. This is a common mistake of mine, but was especially prevalent when we reached that fork in the road. My first instinct was to climb the ice chimney, and with the benefit of hindsight, I know that this would have been the right choice. Instead, I fixated on the mixed line which ate up so much of our time. Given another chance, I would sit at the fork and refresh myself. Eat some food, drink some water, and deeply contemplate each option. To be honest, I have a silly reason for not doing so: I was cold. For whatever (poorly thought out) reason, I did not bring my belay jacket, and any time spent holding still quickly reduced me to shivers.
                                <br /><br />
                                Another of our mistakes was in poor communication, especially on the first pitch. We were used to having radios on our climbs, which facilitate long pitches and time spent of sight and earshot. We had left the radios behind, but out of habit, we treated the situation as identical. In hindsight, I see that we should have used short pitches, with more emphasis on communication. This mistake led directly to our dangerous simul.
                                <br /><br />
                                Finally, in future climbs, I need to be strongly biased against leaving the couloir. This is not a hard and fast rule, and there are situations where it is necessary. However, the importance of such a decision cannot be overstated. I have, many times over, gotten myself into dangerous situations by ascending the walls of the couloir. The lines are always deceptive, appearing far easier from the ground. Plus, it can often be impossible to back down at a crux, given the rotten rock and strange features that almost always line the gully.
                            </Typography>
                            <Typography variant='h4' mt={2}> Ready to Return:</Typography>
                            <Typography variant='body'>
                                I am by no means disappointed that I missed the summit here. I gave my absolute best, and my mistakes provide more data points to learn from. I am a stronger climber for having made the attempt.
                                <br />
                                While it is unfortunate that I may never get another shot at this route with these conditions, that is the nature of ice climbs - they are ephemeral beasts. Because we were willing and able to, with little leeway, cross the country in the hunt of a big objective, we got a shot at one of the coolest lines in the country. If I continue to hone this spontaneity, while absorbing Ellen's planning skills, I will have set myself up for success in the world of ice climbing. This was only a stepping stone in a greater story.
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

export default SplitTripReport;