import React from 'react';
import { Container, Grid, Typography } from '@mui/material';

import PhonemeTables from './PhonemeTables';
import ArticleTable from './ArticleTable';
import PronounTable from './PronounTable';
import VerbTense from './VerbTense';

const VoiceOfStone = () => {
    return (
        <div>
            <Typography align='center' variant='h3'>Voice of Stone - a Guide on Proto-Tukren</Typography>
            <Container className='tukren-intro'>
                <Typography variant='h4'>Introduction</Typography>
                <Typography my={1} variant='body1'>Tukren, tongue of stone, is a fictional, naturalistic constructed language I designed for the Rohīren people of the planet Maalima. It is the first of my constructed languages, a fact that no doubt makes itself apparent in this documentation. As a proto-language, Tukren serves only as a basis for the dialects spoken in my novels. For instance, the Hĭbord dialect used in my first novel will be a derivation of a blend of proto-Tukren and the language of the neighboring Hanatu. This document details the phonology, syntax, and grammar of proto-Tukren, and explains how to write and speak the language for any seeking to learn.</Typography>
                <Typography variant='body1'>It serves as a root to all of the Tukren dialects, before the Rohīren colonies spread across the planet's surface. My goal in developing the language was to convey the generic culture of the Rohīren. They are a traditionally xenophobic and religious people, largely content to live out their days in the stone halls of their colonies, working as a collective to further their species. This is represented in the language in a number of ways:</Typography>
                <ul>
                    <li>Verb tensing is temporally precise as a result of their long histories and collectivist thinking.</li>
                    <li>Nouns are articulated to differentiate between colony members and outsiders, and between religious and secular ideas.</li>
                    <li>Syntax morphs around relgious titles and phrases; the importance of O'radren and Yirtal are topicalized any time the names are uttered.</li>
                    <li>Root words are heavily influenced by the stone environment they inhabit.</li>
                    <li>Orthography is likewise inspired by its stone origins, beginning as their history was etched into their halls with straight lines and sharp angles. Eventually, the mediums of ink and parchment would find use, but the straight-lined etchings of the orthography's origin would forever leave its mark on the writing style.</li>
                </ul>
            </Container>
            <hr />
            <Container className='tukren-phonology'>
                <Typography variant='h4'>Phonology</Typography>
                <Typography my={1} variant='body1'>Tukren contains 21 consonants, 6 vowels and long vowels, and 4 diphthongs.</Typography>
                <Typography variant='body1'>These phonemes are based on the International Phonetic Alphabet, a collection of all the sounds producable by human anatomy. If you would like to learn more about the IPA and how to pronounce these sounds, visit the <a href='https://www.ipachart.com/'>IPA Chart</a> for an excellent source on pronounciation.</Typography>
                <Typography my={1} variant='body1'>Some of these sounds have been latinized for the sake of a Western audience. Letters like ɮ are displayed with their latinized pronounciation first and their IPA symbol marked second (e.g. zl /ɮ/).</Typography>
                <Typography variant='h5'>Phonemes</Typography>
                <PhonemeTables />
                <Typography mt={2} mb={0} variant='h6'>Dipthongs</Typography>
                <ul style={{ marginTop: 0 }}>

                    <li>ei /ai/ (Pronounced like "I")</li>
                    <li>au (Pronounced like "aw")</li>
                    <li>ai /ie/(Pronounced like "A" )</li>
                </ul>
                <Typography variant='h5'>Phonotactics</Typography>
                <Typography variant='h6'>Syllable Shape</Typography>
                <Typography variant='body1'>(C)V(C)(C)</Typography>
                <Typography mt={1} variant='body1'><strong>Rules & Exception</strong></Typography>
                <ul style={{ marginTop: 0 }}>
                    <li>Phonemes -y, -h, -w will never occur in the syllable coda.</li>
                    <li>A syllable must have an onset if it has a coda.</li>
                </ul>
                <Typography variant='h6'>Phonemic Stress</Typography>
                <Typography variant='body1'>The last syllable is always stressed, except in the case of irregular words. One such cause of irregularity can be seen in words with a long vowel in their second to last syllable. The stress in such words is placed on the second-to-last syllable. For example: Hīren will be pronounced as /HEE/-/ren/ rather than /hee/-/REN/.</Typography>
            </Container>
            <hr />
            <Container className='tukren-syntax'>
                <Typography variant='h4'>Syntax</Typography>
                <Typography my={1} variant='h5'>Word Order</Typography>
                <Typography variant='body1'>Tukren has a default word order of S-O-V, or subject-object-verb. Tukren also allows for topicalized sentences, in which the word order is switched to place emphasis on the topic of the sentence instead of the subject. In such cases, the articulation of each nouns differentiates between a topic and subject. Additionally, Tukren is primarily Head-Final, meaning that the head of a noun or verb phrase follows its complements.</Typography>
                <Typography my={1} variant='body1'>When dealing with multiple objects, like in sentences with an indirect-object, the sentence order becomes S-IDO-DO-V.</Typography>
                <Typography variant='body1'>Interrogative word order becomes IV-S-O.</Typography>
                <Typography my={1} variant='body1'>Note that formal speech always places the Hīren God Radren as the topic of a statement so that his name is always spoken first. Breaking this rule is a social taboo in any colony.</Typography>
                <Typography variant='h6'>Examples</Typography>
                <Grid my={1} container>
                    <Grid item sm={4}>
                        <Typography variant='body1'><strong>Default Word Order</strong></Typography>
                        <Typography variant='body1'>The person eats the fish</Typography>
                        <Typography variant='body1'>Di'fam dai'ribik gorm</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant='body1'><strong>Topicalized Word Order</strong></Typography>
                        <Typography variant='body1'>The wise king upholds the Six Pillars.</Typography>
                        <Typography variant='body1'>Yust do'pamf muta di'barnakom sopec</Typography>
                    </Grid>
                    <Grid item sm={4}>
                        <Typography variant='body1'><strong>Interrogative Word Order</strong></Typography>
                        <Typography variant='body1'>Where is the river</Typography>
                        <Typography variant='body1'>His doc kul'maruz</Typography>
                    </Grid>
                </Grid>
                <Typography mt={1} variant='h5'>Adjectives</Typography>
                <Typography variant='body1'>Adjectives always precede the head of the noun phrase. They are derived from nouns.</Typography>
                <Typography my={1} variant='h6'>Example</Typography>

                <Typography variant='body1'>The hungry person eats the big fish</Typography>
                <Typography variant='body1'>Zagar di'fam tazk dai'ribik gorm</Typography>

                <Typography mt={1} variant='h5'>Adposition</Typography>
                <Typography variant='body1'>Tukren uses post-position/post-positional phrases. In the case of multiple postpositions, they are placed in the order of Time->Manner->Place.</Typography>
                <Typography variant='h6'>Examples</Typography>
                <Grid mb={1} container>
                    <Grid item sm={6}>
                        <Typography variant='body1'>The moon shines above the river.</Typography>
                        <Typography variant='body1'>Ku'kailrog qib sau'maruz sazl</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>The moon shines above the river at night.</Typography>
                        <Typography variant='body1'>Ku'kailrog wod con qib sau'maruz sazl</Typography>
                    </Grid>
                </Grid>
                <Typography mt={1} variant='h5'>Possession</Typography>
                <Typography variant='body1'>The possessor precedes the possessee when showing possession. The possessor is marked with its corrosponding gentitive article, while the possessee is either left without an article or marked with its normal case.</Typography>
                <Typography variant='h6'>Examples</Typography>
                <Grid mb={1} container>
                    <Grid item sm={6}>
                        <Typography variant='body1'>The King's hall</Typography>
                        <Typography variant='body1'>Mi'barnakim zlat</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>The path of the Temple</Typography>
                        <Typography variant='body1'>Dom'yirtal si'biwar</Typography>
                    </Grid>
                </Grid>
                <Typography mt={1} variant='h5'>Adverbs</Typography>
                <Typography variant='body1'>Adverbs can be positioned somewhat freely: before or after the subject or before the verb.</Typography>
                <Typography variant='h6'>Examples</Typography>
                <Grid mb={1} container>
                    <Grid item sm={6}>
                        <Typography variant='body1'>Bordekya is very large.</Typography>
                        <Typography variant='body1'>Bordekya tazk sit yen.</Typography>
                    </Grid>
                    <Grid item sm={6}>
                        <Typography variant='body1'>The river is very long.</Typography>
                        <Typography variant='body1'>Maruz sit zun yen.</Typography>
                    </Grid>
                </Grid>
                <Typography my={1} variant='h5'>Conjunctions</Typography>
                <Typography variant='body1'>Proto-Tukren has a small set of conjunctions, used to combine ideas and compare sentences.</Typography>
                <Typography mt={1} variant='body1'><strong>Coordinating Conjunctions</strong></Typography>
                <Typography variant='body1'>
                    'And' has two forms. <br />
                    Ta: marking the end item of a list. (e.g. Fire and stone: Kezl ta ren). <br />
                    Tam: combines two complete statements. (e.g. EXAMPLE HERE)
                </Typography>
                <Typography mt={2}>The word 'Kot' is used as Enlgish uses 'but' to contrast two ideas.</Typography>
            </Container>
            <hr />
            <Container className='tukren-morphology'>
                <Typography variant='h4'>Morphology</Typography>
                <Typography my={1} variant='h5'>Noun Morphology</Typography>
                <Typography variant='h6'>Articles</Typography>
                <Typography variant='body1'>Proto-Tukren does not differentiate between definite and indefinite articles. Instead articulation is broken down into six cases: nominative, accussative, genative, dative, locative, and instrumental. It is further divided into the genders of Neutral, Unfamiliar/Alien, Inanimate, and Formal/Religious.</Typography>
                <ul><strong>Case</strong>
                    <li>Nominative nouns are the subject of a sentence.</li>
                    <li>Accussative marks the direct object.</li>
                    <li>Genative marks a noun's origin or possessor.</li>
                    <li>Dative marks the indirect object.</li>
                    <li>Instrumental marks a noun used to achieve the verb.</li>
                </ul>
                <ul><strong>Gender</strong>
                    <li>Neutral nouns refer to most nouns referencing fellow colony members or herd animals owned by the colony.</li>
                    <li>Unfamiliar/Alien nouns typically refer to people or animals from outside the colony. To refer to a fellow colony member with this article would be considered an insult.</li>
                    <li>Inanimate nouns are any that are not considered sentient. While this obviously refers to tools and landmarks, it is important to note that stone is not considered inanimate in certain context and may be refered to with any of the other genders.</li>
                    <li>Formal/religious articles are used with nouns that refer to Radren, the Temple, any religious practices, and any contexts in which one must convey respect.</li>
                </ul>
                <Typography variant='body1'>Due to its complexity, much of the articulation system is neglected in informal speech. Formal speech and irregular sentences however, rely on articulation to convey correct meaning.</Typography>
                <ArticleTable />
                <Typography mt={2} variant='h6'>Pronouns</Typography>
                <Typography mb={1} variant='body1'>Pronouns are separated into five cases, and then further divided into eight points of view. Most of these cases are shared with those used in articulation. An important disctinction is the difference between a possessive pronoun and a genitive pronoun. A possessive pronoun is like 'my' in English. "My home" or "Yani dek". A genitive pronoun is like "mine". "That is mine" or "Birm fuyo yen".</Typography>
                <PronounTable />
                <Typography variant='h6'>Determiners</Typography>
                <Typography mb={1} variant='body1'>Determiners precede the noun that they describe.</Typography>
                <ul style={{ marginTop: 0 }}>
                    <li>This/these: bas/birm</li>
                    <li>Other: Fasin</li>
                    <li>Here/There: Biyirt/Hidem</li>
                </ul>
                <Typography variant='h6'>Interrogatives</Typography>
                <Typography mb={1} variant='body1'>The interrogative pronoun or adjective is first in a sentence. Interrogative sentences have the syntax I-V-O</Typography>
                <ul style={{ marginTop: 0 }}>
                    <li>
                        <Typography variant='body1'>Which - Hanguh</Typography>
                    </li>
                    <Typography variant='body1'>Which fish do you want?</Typography>
                    <Typography variant='body1'>Hanguh di'ribik hloros bos?</Typography>
                    <li>
                        <Typography variant='body1'>Who - Het</Typography>
                    </li>
                    <Typography variant='body1'>Who are you?</Typography>
                    <Typography variant='body1'>Het doc bos?</Typography>
                    <li>
                        <Typography variant='body1'>What - Was</Typography>
                    </li>
                    <Typography variant='body1'>What is your name?</Typography>
                    <Typography variant='body1'>Was doc boni sudor?</Typography>
                </ul>
                <Typography mt={2} variant='h6'>Affixes</Typography>
                <Typography variant='body1'>
                    <strong>Plurality</strong>
                    <br />
                    Plurality is marked by the ro- prefix. This is where the word Rohīren comes from: Ro means many, Hīren means a person of stone
                </Typography>
                <Typography variant='body1'>
                    <strong>Association</strong>
                    <br />
                    --A person associated with-- is marked by the na- prefix. In English this is done with the -er suffix, as in "hunter".
                </Typography>
                <Typography variant='body1'>
                    <strong>Negation</strong>
                    <br />
                    Nouns are negated with the ha- prefix.
                </Typography>
                <Typography variant='body1'>
                    <strong>Usage</strong>
                    <br />
                    Objects can be marked as tools of a craft with the sun- or suns- prefix. A fishing rod for instance, would be called sunsribec.
                </Typography>
                <Typography my={1} variant='h5'>Verb Morphology</Typography>
                <Typography variant='h6'>Verb Tense</Typography>
                <VerbTense />
            </Container>
        </div >
    );
};

export default VoiceOfStone;