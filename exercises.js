// exercises.js
const EXERCISE_DB = {

  "present-tenses": {
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Fill in the Simple Present.", sentence: "The climate conference ___ (take) place in Paris this year.", answer: "takes", hint: "Scheduled events or facts use Simple Present." },
      { type: "gap", instruction: "Fill in the Present Progressive.", sentence: "Currently, the government ___ (invest) heavily in renewable energy.", answer: "is investing", hint: "Signal word 'currently' -> action happening around now." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I ___ what you mean, but I ___ with you.", options: ["am seeing / am not agreeing", "see / do not agree", "see / am not agreeing", "am seeing / do not agree"], correct: 1, hint: "Stative verbs (see, agree) are generally not used in the progressive form." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The global population is grows at an alarming rate.", errorIndex: 4, correction: "growing", hint: "Present Progressive requires 'is' + verb-ing." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Why ___ you ___ the soup? Does it need more salt?", options: ["do / taste", "are / tasting", "have / tasted", "will / taste"], correct: 1, hint: "Active action of testing something right now -> Progressive." },
      { type: "gap", instruction: "Fill in the correct form.", sentence: "Water ___ (consist) of hydrogen and oxygen.", answer: "consists", hint: "General scientific fact -> Simple Present." },
      { type: "drag", instruction: "Match the verbs to the gaps.", sentence: "Usually, she _1_ in the office, but this week she _2_ from home because her car _3_ broken.", blanks: { "_1_": "works", "_2_": "is working", "_3_": "is" }, bank: ["works", "is working", "is", "work", "are working", "be"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "He don't understand the complexity of the issue.", errorIndex: 1, correction: "doesn't", hint: "Third person singular negation is 'doesn't'." },
      { type: "gap", instruction: "Fill in the correct Present Progressive form.", sentence: "Scientists ___ (warn) that biodiversity is declining at a rapid pace.", answer: "are warning", hint: "An ongoing situation happening around the present time." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "This article ___ that social media ___ young people's mental health.", options: ["argues / affects", "is arguing / is affecting", "argues / is affecting", "is arguing / affects"], correct: 0, hint: "Permanent stance of the article = Simple Present; a general fact = Simple Present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is believing that technology will save the planet.", errorIndex: 2, correction: "believes", hint: "'Believe' is a stative verb and does not normally take the progressive form." },
      { type: "gap", instruction: "Fill in the Simple Present.", sentence: "The train to Berlin ___ (depart) at 07:42 every morning.", answer: "departs", hint: "Fixed timetables use the Simple Present." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "___ you ___ this smell? Something is burning.", options: ["Are you smelling", "Do you smell", "Have you smelled", "Did you smell"], correct: 1, hint: "'Smell' used as a perception verb (not an action) takes the Simple Present." },
      { type: "drag", instruction: "Choose the correct verb form for each gap.", sentence: "Social media _1_ how we communicate. Right now, millions of people _2_ their news online. The trend _3_ to grow.", blanks: { "_1_": "shapes", "_2_": "are reading", "_3_": "continues" }, bank: ["shapes", "are reading", "continues", "is shaping", "reads", "is continuing"] },
      { type: "gap", instruction: "Fill in the correct form.", sentence: "Every year, the Amazon rainforest ___ (lose) thousands of square kilometres to deforestation.", answer: "loses", hint: "Recurring fact or habitual action -> Simple Present." },
    ]
  },

  "past-tenses": {
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "The industrial revolution ___ (change) society fundamentally.", answer: "changed", hint: "Completed action in the past." },
      { type: "mc", instruction: "Simple Past or Past Progressive?", sentence: "While the politicians ___ the treaty, protesters ___ outside the building.", options: ["discussed / gathered", "were discussing / gathered", "were discussing / were gathering", "discussed / were gathering"], correct: 2, hint: "Two parallel actions happening at the same time in the past." },
      { type: "gap", instruction: "Fill in the Past Progressive.", sentence: "At 8 PM last night, I ___ (prepare) my presentation for history class.", answer: "was preparing", hint: "Action in progress at a specific time in the past." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She readed the entire novel in just two days.", errorIndex: 1, correction: "read", hint: "'Read' is an irregular verb (read - read - read)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The electricity went out while we ___ a documentary.", options: ["watched", "have watched", "were watching", "had watched"], correct: 2, hint: "A continuous past action interrupted by a sudden event." },
      { type: "drag", instruction: "Complete the text.", sentence: "I _1_ down the street when I suddenly _2_ a loud noise. I _3_ around but _4_ nothing.", blanks: { "_1_": "was walking", "_2_": "heard", "_3_": "looked", "_4_": "saw" }, bank: ["was walking", "heard", "looked", "saw", "walked", "was hearing"] },
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "In 1969, Neil Armstrong ___ (become) the first human to walk on the moon.", answer: "became", hint: "A specific completed event in a defined past period." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The children was playing in the garden all afternoon.", errorIndex: 2, correction: "were", hint: "Plural subject 'the children' requires 'were', not 'was'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I ___ my keys, so I ___ through the window.", options: ["lost / climbed", "was losing / climbed", "lost / was climbing", "was losing / was climbing"], correct: 0, hint: "Both are completed sequential actions in the past." },
      { type: "gap", instruction: "Fill in the Past Progressive.", sentence: "The students ___ (revise) for their exams when the fire alarm ___ (go) off.", answer: "were revising ... went", hint: "Ongoing past action interrupted by a sudden event." },
      { type: "error", instruction: "Find and correct the error.", sentence: "When I arrived, they have already left.", errorIndex: 4, correction: "had", hint: "An action completed before another past event requires the Past Perfect: 'had already left', not 'have already left'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The reporter ___ that the president ___ the bill the previous day.", options: ["said / signed", "said / had signed", "had said / signed", "was saying / was signing"], correct: 1, hint: "The signing happened before the reporting -> Past Perfect." },
      { type: "drag", instruction: "Simple Past or Past Progressive? Fill in the gaps.", sentence: "It _1_ heavily when we _2_ the stadium. Most fans _3_ home before the game ended.", blanks: { "_1_": "was raining", "_2_": "reached", "_3_": "left" }, bank: ["was raining", "reached", "left", "rained", "were reaching", "were leaving"] },
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "The Berlin Wall ___ (fall) on 9 November 1989.", answer: "fell", hint: "Irregular verb: fall -> fell." },
      { type: "mc", instruction: "Choose the correct narrative tense sequence.", sentence: "By the time the ambulance ___, the bystanders ___ first aid for several minutes.", options: ["arrived / gave", "arrived / had been giving", "had arrived / were giving", "was arriving / had given"], correct: 1, hint: "Action continuing up to a point in the past -> Past Perfect Progressive." },
    ]
  },

  "perfect-tenses": {
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "Society ___ (become) much more digital over the last decade.", answer: "has become", hint: "Action starting in the past and continuing/having an effect up to the present." },
      { type: "mc", instruction: "Simple Past or Present Perfect?", sentence: "Shakespeare ___ many famous plays in the 16th century.", options: ["has written", "writes", "wrote", "had written"], correct: 2, hint: "Finished time period in the past (16th century) -> Simple Past." },
      { type: "gap", instruction: "Fill in the Past Perfect.", sentence: "By the time the police arrived, the thieves ___ (already/escape).", answer: "had already escaped", hint: "An action completed *before* another action in the past." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I have visited London three years ago.", errorIndex: 1, correction: "-", hint: "Remove 'have' entirely. 'Three years ago' requires Simple Past: I visited London." },
      { type: "drag", instruction: "Present Perfect Simple vs. Progressive.", sentence: "I _1_ all day, but I _2_ only three pages so far.", blanks: { "_1_": "have been studying", "_2_": "have written" }, bank: ["have been studying", "have written", "have studied", "have been writing"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "She was exhausted because she ___ for the marathon for months.", options: ["was training", "has trained", "trained", "had been training"], correct: 3, hint: "Action happening over a period of time up to a point in the past -> Past Perfect Progressive." },
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "We ___ (not/receive) any updates regarding the exam yet.", answer: "have not received", alt: ["haven't received"], hint: "'Yet' signals Present Perfect." },
      { type: "gap", instruction: "Fill in the Present Perfect Progressive.", sentence: "The scientists ___ (study) the effects of microplastics for over a decade.", answer: "have been studying", hint: "Emphasises the ongoing duration of an activity up to the present." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "This is the most convincing argument I ___ in years.", options: ["hear", "heard", "have heard", "had heard"], correct: 2, hint: "Superlative + ever/in years often triggers Present Perfect." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She has lived in Berlin since five years.", errorIndex: 5, correction: "for", hint: "Use 'for' with a period of time (five years). 'Since' is used with a point in time (since 2019)." },
      { type: "gap", instruction: "Fill in the Past Perfect.", sentence: "The journalist reported that the government ___ (cut) funding to education without consultation.", answer: "had cut", hint: "The cutting happened before the reporting -> Past Perfect." },
      { type: "mc", instruction: "Present Perfect Simple or Progressive?", sentence: "I ___ this book. You can borrow it now.", options: ["have been reading", "had read", "have read", "was reading"], correct: 2, hint: "The emphasis is on the completed result, not the ongoing process." },
      { type: "drag", instruction: "Complete with the correct perfect tense.", sentence: "By 2030, scientists _1_ a cure. They _2_ on this problem for decades. Progress _3_ remarkable.", blanks: { "_1_": "will have found", "_2_": "will have been working", "_3_": "has been" }, bank: ["will have found", "will have been working", "has been", "have found", "will find", "had been"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "He has went to the conference twice this month.", errorIndex: 2, correction: "gone", hint: "The past participle of 'go' is 'gone', not 'went'." },
      { type: "gap", instruction: "Fill in the correct form.", sentence: "I ___ (already/see) that film, so let's choose a different one.", answer: "have already seen", hint: "'Already' is a typical Present Perfect signal word." },
    ]
  },

  "future-tenses": {
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Spontaneous decision — use 'will'.", sentence: "The phone is ringing. I ___ (get) it!", answer: "will get", alt: ["'ll get"], hint: "A decision made at the moment of speaking -> will." },
      { type: "mc", instruction: "Choose the correct future form.", sentence: "Look at those clouds! It ___ rain.", options: ["will", "is going to", "is raining", "shall"], correct: 1, hint: "Visible evidence of something about to happen -> going to." },
      { type: "gap", instruction: "Fixed future arrangement — use Present Progressive.", sentence: "I ___ (meet) my tutor tomorrow afternoon at 3 PM.", answer: "am meeting", hint: "A fixed personal arrangement in the near future." },
      { type: "mc", instruction: "Which form is correct for a timetable fact?", sentence: "The next train to Munich ___ at 14:15.", options: ["is going to leave", "will leave", "leaves", "is leaving"], correct: 2, hint: "Official timetables and scheduled facts -> Simple Present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "By 2050, the sea level will have rose by at least half a metre.", errorIndex: 7, correction: "risen", hint: "Future Perfect = will + have + past participle. 'Rise' is irregular: rise – rose – risen." },
      { type: "gap", instruction: "Future Perfect — complete the sentence.", sentence: "By the time you finish reading this report, I ___ (already/land) in Tokyo.", answer: "will have already landed", hint: "An action that will be completed before a future point -> Future Perfect." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I promise I ___ my homework before the weekend.", options: ["will finish", "am finishing", "am going to finish", "finish"], correct: 0, hint: "A promise or commitment -> will." },
      { type: "drag", instruction: "Match the future form to its use.", sentence: "She _1_ a party next Saturday (arrangement). Scientists believe it _2_ harder to grow food (prediction with evidence). I _3_ you with your bags (offer).", blanks: { "_1_": "is having", "_2_": "is going to become", "_3_": "will help" }, bank: ["is having", "is going to become", "will help", "will be having", "becomes", "is helping"] },
      { type: "gap", instruction: "Use 'going to' for an intention.", sentence: "The government ___ (introduce) stricter environmental regulations next year.", answer: "is going to introduce", hint: "A pre-planned intention or decision already made." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "This time next week, we ___ on the beach.", options: ["will sit", "are sitting", "will be sitting", "are going to sit"], correct: 2, hint: "An action in progress at a specific future time -> Future Progressive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I am going to will call you when I arrive.", errorIndex: 4, correction: "call", hint: "'Going to' and 'will' cannot both be used together — remove 'will'." },
      { type: "gap", instruction: "Future Perfect Progressive — complete the sentence.", sentence: "By June, I ___ (study) English for twelve years.", answer: "will have been studying", hint: "Emphasises the duration of an activity up to a future point." },
    ]
  },

  "conditionals-mix": {
    group: "Conditionals",
    exercises: [
      { type: "gap", instruction: "Type I: Real condition.", sentence: "If greenhouse gas emissions ___ (continue) to rise, global temperatures ___ (increase).", answer: "continue ... will increase", hint: "If + Present, Will + Infinitive." },
      { type: "gap", instruction: "Type II: Hypothetical present.", sentence: "If I ___ (be) the Prime Minister, I ___ (reform) the education system.", answer: "were ... would reform", hint: "If + Simple Past, Would + Infinitive." },
      { type: "mc", instruction: "Type III: Unreal past.", sentence: "If the company ___ its strategy, it ___ bankrupt.", options: ["changed / wouldn't go", "had changed / wouldn't have gone", "would change / hadn't gone", "has changed / won't go"], correct: 1, hint: "If + Past Perfect, Would have + Past Participle." },
      { type: "mc", instruction: "Mixed Conditional.", sentence: "If he had paid attention in class last week, he ___ the answer now.", options: ["knew", "would know", "would have known", "had known"], correct: 1, hint: "Past condition (Type 3) with a present result (Type 2)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "If she would study harder, she would pass the Abitur.", errorIndex: 2, correction: "studied", hint: "Never use 'would' in the if-clause of a Type II conditional." },
      { type: "drag", instruction: "Match the halves.", sentence: "If it rains, _1_. If it rained, _2_. If it had rained, _3_.", blanks: { "_1_": "I will stay home", "_2_": "I would stay home", "_3_": "I would have stayed home" }, bank: ["I will stay home", "I would stay home", "I would have stayed home"] },
      { type: "gap", instruction: "Fill in the correct mixed conditional.", sentence: "If I ___ (not/miss) my flight yesterday, I ___ (be) in New York right now.", answer: "had not missed ... would be", alt: ["hadn't missed ... would be"], hint: "Past action affecting the present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Unless you don't apologize, I will not forgive you.", errorIndex: 2, correction: "apologize", hint: "'Unless' already means 'if not', so don't use a negative verb after it." },
      { type: "mc", instruction: "Choose the correct conditional type.", sentence: "If I ___ harder at school, I ___ a better job now.", options: ["work / have", "had worked / would have", "had worked / would have had", "worked / would have"], correct: 2, hint: "Past action (Type 3 if-clause) leading to a past result (Type 3 main clause)." },
      { type: "gap", instruction: "Type I conditional: Fill in the gaps.", sentence: "If you ___ (not/recycle), the problem of plastic pollution ___ (get) even worse.", answer: "do not recycle ... will get", alt: ["don't recycle ... will get"], hint: "Real, possible future situation -> Type I." },
      { type: "error", instruction: "Find and correct the error.", sentence: "If I had have known, I would have helped.", errorIndex: 3, correction: "-", hint: "In Type III conditionals the if-clause takes 'had' + past participle. Remove the extra 'have': 'If I had known'." },
      { type: "mc", instruction: "Choose the inverted conditional form.", sentence: "___ she to apply now, she would stand a good chance.", options: ["Should", "Were", "Had", "If"], correct: 1, hint: "Inversion of Type II: Were + subject replaces 'If + subject + were'." },
      { type: "gap", instruction: "Fill in the Type III conditional.", sentence: "If the treaty ___ (be) signed earlier, thousands of lives ___ (save).", answer: "had been signed ... would have been saved", hint: "Passive Type III: had + been + pp / would + have + been + pp." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Provided that everyone ___ the rules, the system ___ efficiently.", options: ["follows / will work", "followed / would have worked", "will follow / works", "had followed / worked"], correct: 0, hint: "'Provided that' introduces a real condition -> Type I." },
      { type: "drag", instruction: "Complete the mixed conditional sentences.", sentence: "If he _1_ a better diet, he _2_ feeling so tired now. If she _3_ her passport, we _4_ on holiday already.", blanks: { "_1_": "had followed", "_2_": "wouldn't be", "_3_": "hadn't forgotten", "_4_": "would be" }, bank: ["had followed", "wouldn't be", "hadn't forgotten", "would be", "followed", "wasn't", "forgot", "will be"] },
    ]
  },

  "modal-verbs": {
    group: "Modals & Verb Patterns",
    exercises: [
      { type: "mc", instruction: "Choose the correct modal for obligation.", sentence: "All passengers ___ fasten their seatbelts before take-off.", options: ["should", "might", "must", "could"], correct: 2, hint: "'Must' expresses a strong obligation or rule." },
      { type: "gap", instruction: "Fill in the correct past modal for deduction.", sentence: "He ___ (must/arrive) late — his coffee is still hot.", answer: "must have arrived", hint: "Logical deduction about a past event -> must have + past participle." },
      { type: "error", instruction: "Find and correct the error.", sentence: "You must not to use your phone during the exam.", errorIndex: 3, correction: "-", hint: "Modal verbs (must) are followed by the bare infinitive, not 'to + infinitive'. Remove 'to'." },
      { type: "mc", instruction: "Choose the correct modal for past ability.", sentence: "Before the accident, she ___ run a marathon in under four hours.", options: ["could", "was able to", "can", "might"], correct: 0, hint: "'Could' expresses a general ability in the past." },
      { type: "gap", instruction: "Fill in the correct modal for advice.", sentence: "You really ___ (ought) get more sleep — you look exhausted.", answer: "ought to", hint: "'Ought to' expresses advice or moral obligation." },
      { type: "mc", instruction: "Necessity vs. lack of necessity.", sentence: "The meeting is optional. You ___ attend if you are busy.", options: ["mustn't", "can't", "needn't", "shouldn't"], correct: 2, hint: "'Needn't' = it is not necessary. 'Mustn't' = it is forbidden." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She should have study for the test instead of going out.", errorIndex: 3, correction: "studied", hint: "After modal + have, use the past participle." },
      { type: "gap", instruction: "Fill in the correct modal.", sentence: "The experiment ___ (may/conduct) without proper safety equipment.", answer: "may not be conducted", hint: "Modal passive for prohibition/permission -> may not be + past participle." },
      { type: "mc", instruction: "Choose the correct modal for possibility.", sentence: "I'm not sure where Tom is. He ___ gone to the library.", options: ["must have", "can't have", "might have", "should have"], correct: 2, hint: "'Might have' expresses an uncertain possibility in the past." },
      { type: "drag", instruction: "Match the modals to their meanings.", sentence: "You _1_ smoke here (prohibition). You _2_ bring a dictionary (permission). You _3_ study more (advice). You _4_ register by Friday (obligation).", blanks: { "_1_": "mustn't", "_2_": "may", "_3_": "should", "_4_": "have to" }, bank: ["mustn't", "may", "should", "have to", "needn't", "might", "can't"] },
      { type: "mc", instruction: "Choose the correct deduction.", sentence: "She answered every question correctly. She ___ prepared very well.", options: ["can't have", "might not have", "must have", "should have"], correct: 2, hint: "Near certainty about a past event -> must have + past participle." },
      { type: "gap", instruction: "Fill in the correct modal for a polite request.", sentence: "___ you possibly send me the report by Thursday?", answer: "Could", hint: "'Could' is used for polite requests." },
      { type: "error", instruction: "Find and correct the error.", sentence: "You should to check your work before submitting it.", errorIndex: 2, correction: "-", hint: "Modal verbs are followed by the bare infinitive, not 'to' + infinitive. Remove 'to'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "You ___ have told me about the change in plans — I waited for an hour!", options: ["must", "should", "could", "might"], correct: 1, hint: "'Should have' expresses criticism or regret about a past action that did not happen." },
      { type: "gap", instruction: "Fill in the correct modal.", sentence: "In the past, women ___ (be able to) vote in most countries.", answer: "were not able to", alt: ["couldn't"], hint: "General inability in the past; 'couldn't' or 'were not able to' both work." },
    ]
  },

  "passive-voice": {
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Present Simple Passive.", sentence: "Millions of emails ___ (send) every single minute.", answer: "are sent", hint: "Subject is plural -> are + past participle." },
      { type: "gap", instruction: "Simple Past Passive.", sentence: "The novel '1984' ___ (write) by George Orwell.", answer: "was written", hint: "Singular subject in the past -> was + past participle." },
      { type: "mc", instruction: "Present Perfect Passive.", sentence: "A new approach to cancer treatment ___ recently.", options: ["has discovered", "has been discovered", "was being discovered", "is discovered"], correct: 1, hint: "Action completed recently with impact on present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The new laws will implement next year.", errorIndex: 4, correction: "be implemented", hint: "The laws don't implement themselves -> future passive (will be + pp)." },
      { type: "drag", instruction: "Passive constructions.", sentence: "The building _1_ right now. It _2_ by next year. It _3_ by a famous architect.", blanks: { "_1_": "is being built", "_2_": "will be finished", "_3_": "was designed" }, bank: ["is being built", "will be finished", "was designed", "is building", "will finish"] },
      { type: "gap", instruction: "Modal Passive.", sentence: "This issue ___ (must / address) immediately.", answer: "must be addressed", hint: "Modal + be + past participle." },
      { type: "mc", instruction: "Choose the correct active/passive form.", sentence: "The teacher ___ the students that their tests ___.", options: ["informed / had been graded", "was informed / graded", "informed / graded", "was informing / have graded"], correct: 0, hint: "Active main clause, passive dependent clause." },
      { type: "gap", instruction: "Past Progressive Passive.", sentence: "The suspect ___ (question) when new evidence came to light.", answer: "was being questioned", hint: "Ongoing passive action in the past -> was being + past participle." },
      { type: "error", instruction: "Find and correct the error.", sentence: "A decision was making by the committee yesterday.", errorIndex: 3, correction: "made", hint: "Past Simple Passive = was/were + past participle, not present participle." },
      { type: "mc", instruction: "Choose the correct passive structure.", sentence: "It is believed that the ancient city ___ over 3,000 years ago.", options: ["founded", "was founded", "has founded", "is founded"], correct: 1, hint: "The action happened at a specific past time -> Simple Past Passive." },
      { type: "drag", instruction: "Rewrite using the passive.", sentence: "People _1_ that AI _2_ many jobs in the near future. New regulations _3_ to address this.", blanks: { "_1_": "believe", "_2_": "will replace", "_3_": "are being developed" }, bank: ["believe", "will replace", "are being developed", "are believed", "replaces", "developed"] },
      { type: "gap", instruction: "Present Perfect Passive.", sentence: "Thousands of species ___ (already/push) to extinction due to habitat loss.", answer: "have already been pushed", hint: "Present Perfect Passive: have/has + been + past participle." },
      { type: "mc", instruction: "Choose the correct form with a reporting verb.", sentence: "The suspects ___ to have left the country.", options: ["are reported", "reported", "have reported", "were reporting"], correct: 0, hint: "Passive of a reporting verb in the present -> are + past participle + to-infinitive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The refugees were given food, shelter, and were provided medical care.", errorIndex: 7, correction: "-", hint: "The second 'were' is redundant and breaks the parallel passive structure. Remove it: '...and provided medical care'." },
    ]
  },

  "reported-speech": {
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Backshift: Present to Past.", sentence: "She said: 'I love this book.' -> She said that she ___ (love) that book.", answer: "loved", hint: "Simple Present shifts to Simple Past." },
      { type: "mc", instruction: "Reported Questions.", sentence: "He asked me: 'Where do you live?' -> He asked me where ___.", options: ["do I live", "did I live", "I lived", "I live"], correct: 2, hint: "Reported questions use normal sentence structure (Subject + Verb), no 'do/did'." },
      { type: "gap", instruction: "Time marker shift.", sentence: "He said: 'I will do it tomorrow.' -> He said he would do it the ___.", answer: "next day", alt: ["following day"], hint: "'Tomorrow' changes in reported speech." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She told to me that she was leaving.", errorIndex: 2, correction: "-", hint: "'Tell' takes a direct object without 'to' (She told me)." },
      { type: "drag", instruction: "Match the backshifts.", sentence: "'I am going' -> she said she _1_. 'I went' -> he said he _2_. 'I will go' -> they said they _3_.", blanks: { "_1_": "was going", "_2_": "had gone", "_3_": "would go" }, bank: ["was going", "had gone", "would go", "am going", "went"] },
      { type: "mc", instruction: "Reporting Verbs.", sentence: "'Don't touch the wire!' -> He ___ me not to touch the wire.", options: ["said", "explained", "warned", "suggested"], correct: 2, hint: "Choose the reporting verb that fits the tone of a command/danger." },
      { type: "gap", instruction: "Report the question.", sentence: "The journalist asked the politician: 'Have you ever taken a bribe?' -> The journalist asked whether the politician ___ ever ___ a bribe.", answer: "had ... taken", hint: "Yes/No question in reported speech uses 'whether/if'; Present Perfect shifts to Past Perfect." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He asked me where did I study.", errorIndex: 4, correction: "-", hint: "In reported questions, use statement word order: 'where I studied', not 'where did I study'. Remove 'did'." },
      { type: "mc", instruction: "Choose the correct reporting structure.", sentence: "'You should apply for the scholarship.' -> She ___ me to apply for the scholarship.", options: ["said", "told", "advised", "warned"], correct: 2, hint: "'Advise' + object + to-infinitive is the correct structure for recommendations." },
      { type: "drag", instruction: "Match the time expression shifts.", sentence: "'now' becomes _1_, 'yesterday' becomes _2_, 'last week' becomes _3_, 'here' becomes _4_.", blanks: { "_1_": "then", "_2_": "the day before", "_3_": "the week before", "_4_": "there" }, bank: ["then", "the day before", "the week before", "there", "today", "ago", "here"] },
      { type: "gap", instruction: "Reporting an order.", sentence: "The teacher said: 'Open your books.' -> The teacher told the students ___ their books.", answer: "to open", hint: "Reported commands use 'tell/order/ask + object + to-infinitive'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She suggested that we should to go to the cinema.", errorIndex: 5, correction: "-", hint: "After 'should', use the bare infinitive, not 'to' + infinitive. Remove the extra 'to'." },
      { type: "mc", instruction: "Choose the correct backshift.", sentence: "'I have never seen such a beautiful painting.' -> She said she ___ such a beautiful painting.", options: ["has never seen", "had never seen", "never saw", "would never see"], correct: 1, hint: "Present Perfect backshifts to Past Perfect in reported speech." },
      { type: "gap", instruction: "Report the statement with backshift.", sentence: "He said: 'We are working on a solution.' -> He said that they ___ on a solution.", answer: "were working", hint: "Present Progressive backshifts to Past Progressive." },
    ]
  },

  "gerund-infinitive": {
    group: "Modals & Verb Patterns",
    exercises: [
      { type: "mc", instruction: "Choose the correct meaning.", sentence: "I forgot ___ the door, so it was open all night.", options: ["to lock", "locking"], correct: 0, hint: "Forget + to do = you didn't do the action. Forget + doing = you did it, but have no memory of it." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "She is looking forward to ___ (start) university.", answer: "starting", hint: "'Look forward to' is a prepositional phrase requiring a gerund." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He suggested to implement a new policy.", errorIndex: 2, correction: "implementing", hint: "'Suggest' is followed by a gerund, not an infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "They managed ___ the summit despite the storm.", options: ["reaching", "to reach", "reach"], correct: 1, hint: "'Manage' is followed by the to-infinitive." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "We regret ___ (inform) you that your flight has been cancelled.", answer: "to inform", hint: "'Regret to do' is used when giving bad news." },
      { type: "drag", instruction: "Match the patterns.", sentence: "I avoid _1_ in rush hour. I expect _2_ by 5 PM. I let him _3_ early.", blanks: { "_1_": "driving", "_2_": "to arrive", "_3_": "leave" }, bank: ["driving", "to arrive", "leave", "to drive", "arriving", "to leave"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is used to wake up at 5 AM every day.", errorIndex: 4, correction: "waking", hint: "'Be used to' (gewohnt sein an) requires the gerund." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "Please remember ___ (buy) milk on your way home.", answer: "to buy", hint: "Remember + to-infinitive = remembering an obligation." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I can't help ___ when I read his letters.", options: ["to laugh", "laugh", "laughing"], correct: 2, hint: "'Can't help' expresses an uncontrollable action and is followed by a gerund." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "The government promised ___ (reduce) carbon emissions by 50% by 2035.", answer: "to reduce", hint: "'Promise' is followed by the to-infinitive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "They postponed to make a decision until more data was available.", errorIndex: 2, correction: "making", hint: "'Postpone' is followed by a gerund, not an infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Stop ___ and listen to what I'm saying!", options: ["to talk", "talk", "talking"], correct: 2, hint: "Stop + gerund = cease an activity. Stop + infinitive = stop in order to do something else." },
      { type: "drag", instruction: "Verb + gerund or infinitive?", sentence: "I decided _1_ abroad. I enjoy _2_ new cultures. It's worth _3_ different perspectives.", blanks: { "_1_": "to study", "_2_": "exploring", "_3_": "considering" }, bank: ["to study", "exploring", "considering", "studying", "to explore", "to consider"] },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "The politician denied ___ (receive) illegal payments.", answer: "receiving", hint: "'Deny' is followed by a gerund." },
    ]
  },

  "participle-constructions": {
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Present participle.", sentence: "___ (realize) that he was late, he started to run.", answer: "Realizing", hint: "Replaces: 'Because he realized...'" },
      { type: "mc", instruction: "Choose the correct participle.", sentence: "___ in Germany, the car is known for its quality.", options: ["Manufacturing", "Manufactured", "Having manufactured", "To manufacture"], correct: 1, hint: "Passive meaning requires a Past Participle." },
      { type: "gap", instruction: "Perfect participle.", sentence: "___ (finish) her homework, she turned on the TV.", answer: "Having finished", hint: "Action completed before the main clause action." },
      { type: "mc", instruction: "The sentence has a dangling participle. Choose the correct rewrite.", sentence: "Walking down the street, the trees were beautiful.", options: ["Walking down the street, the trees looked beautiful to me.", "I was walking down the street, the trees were beautiful.", "Walking down the street, I noticed the trees were beautiful.", "While beautiful, the trees were walking down the street."], correct: 2, hint: "Dangling participle: the subject of the main clause must be the one doing the walking." },
      { type: "drag", instruction: "Match the participles.", sentence: "_1_ by the loud noise, he woke up. _2_ the noise, he called the police.", blanks: { "_1_": "Frightened", "_2_": "Hearing" }, bank: ["Frightened", "Hearing", "Frightening", "Heard"] },
      { type: "mc", instruction: "Participle replacing a relative clause.", sentence: "The students ___ the exam looked relieved.", options: ["taking", "taken", "took", "were taking"], correct: 0, hint: "Active meaning -> Present Participle." },
      { type: "gap", instruction: "Replace the adverbial clause with a participle construction.", sentence: "___ (not/know) the answer, she remained silent.", answer: "Not knowing", hint: "Negative participle constructions use 'Not + -ing'." },
      { type: "mc", instruction: "Choose the correct participle.", sentence: "The documents ___ by the minister proved controversial.", options: ["signed", "signing", "having signed", "sign"], correct: 0, hint: "Passive relationship: documents were signed -> Past Participle." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Having been finishing the report, she sent it to her manager.", errorIndex: 2, correction: "finished", hint: "Perfect passive participle = Having been + past participle, not present participle." },
      { type: "gap", instruction: "Present participle for simultaneous actions.", sentence: "___ (listen) to music, she worked through the night.", answer: "Listening", hint: "Two simultaneous actions -> Present Participle for the background action." },
      { type: "mc", instruction: "Choose the construction that best replaces the underlined clause.", sentence: "Because she had studied abroad, she spoke three languages fluently.", options: ["Studying abroad, she spoke three languages fluently.", "Having studied abroad, she spoke three languages fluently.", "Studied abroad, she spoke three languages fluently.", "Being studied abroad, she spoke three languages fluently."], correct: 1, hint: "Action completed before the main clause -> Perfect Participle: Having + past participle." },
      { type: "drag", instruction: "Match the participle construction to the clause it replaces.", sentence: "_1_ by the result, the team celebrated. _2_ all the evidence, the jury reached a verdict. _3_ the main points, she concluded her speech.", blanks: { "_1_": "Surprised", "_2_": "Having considered", "_3_": "Having summarised" }, bank: ["Surprised", "Having considered", "Having summarised", "Surprising", "Considering", "Summarising"] },
    ]
  },

  "relative-clauses": {
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "The politician ___ speech went viral is giving an interview.", answer: "whose", hint: "Shows possession (the speech belongs to the politician)." },
      { type: "mc", instruction: "Which sentence is correct?", options: ["My brother who lives in NY is a doctor.", "My brother, who lives in NY, is a doctor.", "My brother that lives in NY is a doctor."], correct: 1, hint: "Assuming you have only one brother, it's extra information (non-defining) -> needs commas." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The car, that I bought yesterday, is already broken.", errorIndex: 2, correction: "which", hint: "You cannot use 'that' in non-defining relative clauses (clauses with commas)." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "London is the city ___ I met my best friend.", answer: "where", alt: ["in which"], hint: "Refers to a place." },
      { type: "drag", instruction: "Match the pronouns.", sentence: "The man _1_ called you. The book _2_ you read. The reason _3_ she left.", blanks: { "_1_": "who", "_2_": "which", "_3_": "why" }, bank: ["who", "which", "why", "where", "whom"] },
      { type: "mc", instruction: "Can the relative pronoun be omitted?", sentence: "The jacket (which) I bought is too small.", options: ["Yes, it can be omitted.", "No, it must stay."], correct: 0, hint: "It is the object of the relative clause (I bought IT), so it can be omitted." },
      { type: "gap", instruction: "Fill in the correct relative pronoun.", sentence: "That was the moment ___ I realised I had made a mistake.", answer: "when", hint: "Refers to a time -> 'when'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The scientist which discovered penicillin was Alexander Fleming.", errorIndex: 2, correction: "who", hint: "Use 'who' (not 'which') for people." },
      { type: "mc", instruction: "Choose the correct defining relative clause.", sentence: "The report ___ we read last night contained alarming statistics.", options: ["who", "whose", "which", "where"], correct: 2, hint: "Referring to a thing (the report) -> 'which' or 'that'." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "She is the author ___ latest novel has been translated into 30 languages.", answer: "whose", hint: "Possessive relation -> 'whose'." },
      { type: "mc", instruction: "Choose the correct sentence.", options: ["This is the school where I studied at.", "This is the school where I studied.", "This is the school which I studied.", "This is the school that I studied at where."], correct: 1, hint: "'Where' already includes the preposition 'at', so don't add 'at' again." },
      { type: "drag", instruction: "Match defining or non-defining.", sentence: "The city _1_ I grew up has changed a lot (defining). My hometown, _2_ is in Bavaria, has a famous Christmas market (non-defining). The year _3_ the wall fell was 1989 (defining).", blanks: { "_1_": "where", "_2_": "which", "_3_": "when" }, bank: ["where", "which", "when", "who", "that", "whose"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "She told me about a conference where she presented her research at.", errorIndex: 11, correction: "-", hint: "'Where' already encodes the preposition 'at'. Remove the redundant 'at' at the end." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The politician ___ I told you about is giving a press conference today.", options: ["who", "whom", "whose", "which"], correct: 1, hint: "The pronoun is the object of the preposition 'about' -> 'whom' (formal)." },
    ]
  },

  "linking-words": {
    group: "Abitur Skills: Writing",
    exercises: [
      { type: "mc", instruction: "Contrast.", sentence: "___ the bad weather, the festival was a huge success.", options: ["Although", "Despite", "However", "Even though"], correct: 1, hint: "'Despite' is followed by a noun phrase, not a full clause." },
      { type: "gap", instruction: "Addition.", sentence: "The plan is environmentally friendly. ___, it will create new jobs.", answer: "Furthermore", alt: ["Moreover", "Additionally", "In addition"], hint: "Looking for a formal adverb of addition starting a new sentence." },
      { type: "mc", instruction: "Cause and Effect.", sentence: "The company failed to innovate. ___, it lost its market dominance.", options: ["Therefore", "Nevertheless", "Whereas", "In spite of this"], correct: 0, hint: "Shows a logical consequence." },
      { type: "drag", instruction: "Match the function.", sentence: "To add a point: _1_. To show a result: _2_. To show contrast: _3_.", blanks: { "_1_": "Moreover", "_2_": "Consequently", "_3_": "Nevertheless" }, bank: ["Moreover", "Consequently", "Nevertheless", "Due to", "Whereas"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "On the one hand it is cheap, but on the other side it breaks easily.", errorIndex: 11, correction: "hand", hint: "The set phrase is 'On the one hand... on the other hand'." },
      { type: "gap", instruction: "Concession.", sentence: "___ though it was raining, we went for a walk.", answer: "Even", hint: "Completes the phrase '___ though'." },
      { type: "mc", instruction: "Choose the correct linking word.", sentence: "___ his lack of experience, he performed exceptionally well.", options: ["Although", "Because of", "Due to", "In spite of"], correct: 3, hint: "Shows contrast followed by a noun phrase." },
      { type: "gap", instruction: "Result.", sentence: "The bridge collapsed, ___ (with the result that) causing massive traffic jams.", answer: "thus", alt: ["thereby"], hint: "Formal word meaning 'as a result of this'." },
      { type: "mc", instruction: "Choose the correct connector.", sentence: "Many students enjoy online learning. ___, some find it isolating.", options: ["Furthermore", "Therefore", "However", "As a result"], correct: 2, hint: "Contrasting two ideas in consecutive sentences -> 'However'." },
      { type: "gap", instruction: "Reason.", sentence: "___ the high cost of living, many young people are unable to buy property.", answer: "Due to", alt: ["Because of", "Owing to"], hint: "Followed by a noun phrase expressing a cause -> 'Due to'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Although the evidence is clear, but many politicians still deny climate change.", errorIndex: 5, correction: "-", hint: "'Although' and 'but' cannot both introduce the same contrast. Remove 'but'." },
      { type: "mc", instruction: "Choose the word that expresses purpose.", sentence: "The government launched the campaign ___ raise awareness about recycling.", options: ["so that", "in order to", "as a result of", "despite"], correct: 1, hint: "'In order to' expresses purpose and is followed by the infinitive." },
      { type: "drag", instruction: "Match the connector to its grammatical category.", sentence: "_1_ (followed by clause), _2_ (followed by noun phrase), _3_ (starts new sentence), _4_ (coordinating).", blanks: { "_1_": "Although", "_2_": "Despite", "_3_": "Nevertheless", "_4_": "yet" }, bank: ["Although", "Despite", "Nevertheless", "yet", "Due to", "However"] },
      { type: "gap", instruction: "Introduce an example.", sentence: "Many countries face demographic challenges. ___, Germany has one of the oldest populations in Europe.", answer: "For instance", alt: ["For example", "To illustrate"], hint: "Introduces a concrete example -> 'For instance/example'." },
    ]
  },

  "comparison": {
    group: "Abitur Skills: Writing",
    exercises: [
      { type: "gap", instruction: "Fill in the comparative form.", sentence: "Renewable energy is becoming ___ (cheap) than fossil fuels.", answer: "cheaper", hint: "One-syllable adjectives form comparatives with -er." },
      { type: "mc", instruction: "Choose the correct superlative.", sentence: "That was ___ speech I have ever heard.", options: ["the most inspiring", "the more inspiring", "most inspiring", "the inspiringest"], correct: 0, hint: "Multi-syllable adjectives form superlatives with 'the most'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is more smarter than her sister.", errorIndex: 2, correction: "-", hint: "Never use both 'more' and '-er'. With short adjectives, use '-er' alone: 'smarter'." },
      { type: "gap", instruction: "Fill in the as...as structure.", sentence: "The situation is ___ serious ___ the experts initially thought.", answer: "as ... as", hint: "Equal comparison uses 'as + adjective + as'." },
      { type: "mc", instruction: "Double comparative — choose the correct form.", sentence: "___ you practise, ___ you will become.", options: ["The more / the better", "More / more better", "The most / the best", "More / better"], correct: 0, hint: "The double comparative 'the more... the better' expresses proportional change." },
      { type: "gap", instruction: "Fill in with 'much' or 'far' + comparative.", sentence: "Electric cars are ___ efficient than they were ten years ago.", answer: "far more", alt: ["much more"], hint: "'Much' or 'far' intensify a comparative." },
      { type: "error", instruction: "Find and correct the error.", sentence: "This is by far the most cheapest product on the market.", errorIndex: 5, correction: "-", hint: "'Most' and '-est' cannot both be used together. Remove 'most'; 'cheapest' alone is correct." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Of all the candidates, she is ___ qualified.", options: ["more", "the most", "most", "as most"], correct: 1, hint: "Superlative for comparison among three or more -> 'the most'." },
      { type: "gap", instruction: "Comparative of a two-syllable adjective.", sentence: "The new policy is ___ (effective) than the previous one.", answer: "more effective", hint: "Most two-syllable adjectives (ending in -ive, -ful, -less, -ous) use 'more'." },
      { type: "drag", instruction: "Match the comparison structure to the example.", sentence: "_1_ (equal): He runs as fast as a cheetah. _2_ (double comparative): ___ hotter it gets, ___ worse the drought becomes. _3_ (intensified): The results were ___ better than expected.", blanks: { "_1_": "as...as", "_2_": "The...the", "_3_": "far" }, bank: ["as...as", "The...the", "far", "more...more", "most"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The less sleep you get, ___ your concentration becomes.", options: ["the worst", "worse", "the worse", "most worse"], correct: 2, hint: "Double comparative: 'the less... the worse'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Her essay was good, but his was gooder.", errorIndex: 7, correction: "better", hint: "'Good' has an irregular comparative form: better." },
    ]
  },

  "question-formation": {
    group: "Abitur Skills: Writing",
    exercises: [
      { type: "mc", instruction: "Choose the correct question form.", sentence: "Who ___ the Berlin Wall?", options: ["did build", "built", "has build", "building"], correct: 1, hint: "Subject question: the question word IS the subject, so no auxiliary 'did' is needed." },
      { type: "gap", instruction: "Form an indirect question.", sentence: "I wonder ___ the train arrives.", answer: "when", hint: "Indirect questions use statement word order (no inversion) and do not take a question mark." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Can you tell me where do they work?", errorIndex: 5, correction: "-", hint: "Indirect questions use statement word order (no auxiliary inversion). Remove 'do': 'where they work'." },
      { type: "mc", instruction: "Choose the correct tag question.", sentence: "She has already submitted her essay, ___?", options: ["hasn't she", "isn't she", "doesn't she", "didn't she"], correct: 0, hint: "Positive statement with 'has' -> negative tag using 'hasn't'." },
      { type: "gap", instruction: "Form the correct Wh-question.", sentence: "___ did the committee decide to do?", answer: "What", hint: "Asking about the action/decision -> 'What'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "What does she wants from us?", errorIndex: 3, correction: "want", hint: "After the auxiliary 'does', use the bare infinitive." },
      { type: "mc", instruction: "Choose the correct indirect question.", sentence: "Could you explain ___ the policy works?", options: ["how does", "how", "that how", "what how"], correct: 1, hint: "Indirect question: 'how + subject + verb' with no auxiliary inversion." },
      { type: "drag", instruction: "Match the question type to the example.", sentence: "Subject question: _1_. Object question: _2_. Indirect question: _3_. Tag question: _4_.", blanks: { "_1_": "Who invented the internet?", "_2_": "What did she invent?", "_3_": "I don't know who invented it.", "_4_": "She invented it, didn't she?" }, bank: ["Who invented the internet?", "What did she invent?", "I don't know who invented it.", "She invented it, didn't she?", "Did she invent it?"] },
      { type: "gap", instruction: "Add the correct tag question.", sentence: "You haven't read the article yet, ___ you?", answer: "have", hint: "Negative statement -> positive tag. 'Haven't' -> 'have'." },
      { type: "mc", instruction: "Choose the correct question.", sentence: "___ of the two candidates do you prefer?", options: ["Who", "Which", "What", "Whose"], correct: 1, hint: "'Which' is used when choosing from a limited set of options." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She asked me what did I think about climate change.", errorIndex: 4, correction: "-", hint: "Indirect questions use statement word order. Remove 'did': 'what I thought about climate change'." },
      { type: "gap", instruction: "Form the correct question.", sentence: "___ long have scientists been studying climate change?", answer: "How", hint: "'How long' asks about the duration of an action." },
    ]
  },

  "articles": {
    group: "Vocabulary & Word Building",
    exercises: [
      { type: "gap", instruction: "Fill in the correct article (a, an, the, or — for zero article).", sentence: "She plays ___ piano beautifully.", answer: "the", hint: "Musical instruments take 'the'." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "___ unemployment is a complex social issue.", options: ["A", "An", "The", "—"], correct: 3, hint: "Abstract nouns used as generalisations take the zero article." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He is the better student in the class.", errorIndex: 3, correction: "best", hint: "When comparing more than two people, use the superlative 'best', not the comparative 'better'." },
      { type: "gap", instruction: "Fill in the correct article.", sentence: "___ Nile is the longest river in Africa.", answer: "The", hint: "Rivers take the definite article 'the'." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "She has ___ MBA from Harvard Business School.", options: ["a", "an", "the", "—"], correct: 1, hint: "'MBA' starts with a vowel sound (/em/) -> 'an'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I had the breakfast at seven o'clock this morning.", errorIndex: 2, correction: "-", hint: "Meals (breakfast, lunch, dinner) take the zero article when used generally. Remove 'the'." },
      { type: "gap", instruction: "Fill in the correct article.", sentence: "They spoke ___ French during the entire meeting.", answer: "—", hint: "Languages take the zero article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "___ book you recommended was absolutely fascinating.", options: ["A", "An", "The", "—"], correct: 2, hint: "The specific book that was recommended -> definite article 'the'." },
      { type: "drag", instruction: "Match the noun to the correct article use.", sentence: "_1_ (zero article) is essential for health. _2_ (definite) Amazon is under threat. _3_ (indefinite) child was found safe.", blanks: { "_1_": "Exercise", "_2_": "The", "_3_": "A" }, bank: ["Exercise", "The", "A", "An", "—", "Water"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "The life is full of unexpected challenges.", errorIndex: 1, correction: "life", hint: "'Life' as a general abstract concept does not take 'the'." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "She was elected ___ President of the United States.", options: ["a", "an", "the", "—"], correct: 3, hint: "Unique titles before a name or used in apposition take the zero article." },
      { type: "gap", instruction: "Fill in the correct article.", sentence: "He spent ___ hour at the gym before going to work.", answer: "an", hint: "'Hour' begins with a vowel sound -> 'an'." },
    ]
  },

  "word-formation": {
    group: "Vocabulary & Word Building",
    exercises: [
      { type: "gap", instruction: "Form the correct noun from the verb.", sentence: "The ___ (govern) announced new austerity measures.", answer: "government", hint: "govern + -ment = government." },
      { type: "mc", instruction: "Choose the correct word form.", sentence: "The scientist made a remarkable ___ that changed our understanding of genetics.", options: ["discover", "discoverer", "discovery", "discoverable"], correct: 2, hint: "A noun is needed here; discover + -y = discovery." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Her performance was truely outstanding.", errorIndex: 3, correction: "truly", hint: "The adverb form of 'true' drops the 'e': truly." },
      { type: "gap", instruction: "Add the correct prefix.", sentence: "Many people ___ (mis) interpret statistical data when reading news articles.", answer: "misinterpret", hint: "The prefix 'mis-' means incorrectly or wrongly." },
      { type: "mc", instruction: "Choose the correct adjective form.", sentence: "The documentary presents a very ___ argument for renewable energy.", options: ["persuade", "persuasion", "persuasively", "persuasive"], correct: 3, hint: "An adjective is needed to modify the noun 'argument'." },
      { type: "gap", instruction: "Form the correct adjective.", sentence: "The charity's work has been ___ (remark) in transforming local communities.", answer: "remarkable", hint: "remark + -able = remarkable." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The new regulation was highly controversially among politicians.", errorIndex: 5, correction: "controversial", hint: "An adjective (not an adverb) is needed after the linking verb 'was'." },
      { type: "mc", instruction: "Choose the correct negative prefix.", sentence: "His behaviour was completely ___ acceptable.", options: ["un-", "dis-", "mis-", "in-"], correct: 0, hint: "'Unacceptable' is the correct negative form." },
      { type: "drag", instruction: "Match the suffix to the word class it creates.", sentence: "-tion creates _1_, -ful creates _2_, -ise creates _3_, -ly creates _4_.", blanks: { "_1_": "a noun", "_2_": "an adjective", "_3_": "a verb", "_4_": "an adverb" }, bank: ["a noun", "an adjective", "a verb", "an adverb", "a pronoun"] },
      { type: "gap", instruction: "Form the correct word using a suffix.", sentence: "The company's ___ (responsible) to its shareholders is outlined in the annual report.", answer: "responsibility", hint: "responsible -> responsibility (drop -le, add -ility)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Scientists are working to ___ the effects of climate change.", options: ["minimal", "minimise", "minimum", "minimally"], correct: 1, hint: "A verb is needed here; minimal + -ise = minimise." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The company's decision was complete irresponsible.", errorIndex: 4, correction: "completely", hint: "An adverb (not an adjective) modifies the adjective 'irresponsible'." },
    ]
  },

  "stylistic-devices": {
    group: "Abitur Skills: Text Analysis",
    exercises: [
      { type: "mc", instruction: "Identify the device.", sentence: "'The camera loves her.'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correct: 2, hint: "Giving a human emotion (love) to an object (camera)." },
      { type: "gap", instruction: "Name the device.", sentence: "'Time is money' is an example of a ___.", answer: "metaphor", hint: "A direct comparison without 'like' or 'as'." },
      { type: "mc", instruction: "Identify the device.", sentence: "'I've told you a million times!'", options: ["Understatement", "Hyperbole", "Irony", "Anaphora"], correct: 1, hint: "An obvious exaggeration." },
      { type: "drag", instruction: "Match definition to device.", sentence: "Repetition of sounds: _1_. Comparison using 'like': _2_. Opposites in one phrase (e.g. bittersweet): _3_.", blanks: { "_1_": "Alliteration", "_2_": "Simile", "_3_": "Oxymoron" }, bank: ["Alliteration", "Simile", "Oxymoron", "Metaphor", "Hyperbole"] },
      { type: "gap", instruction: "Name the device.", sentence: "'We shall fight on the beaches, we shall fight on the landing grounds...' uses ___.", answer: "anaphora", hint: "Repetition of a word or phrase at the beginning of successive clauses." },
      { type: "mc", instruction: "Identify the device.", sentence: "A fire station burning down is an example of...", options: ["Irony", "Metaphor", "Personification", "Simile"], correct: 0, hint: "When the opposite of what is expected happens (Situational)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Comparing two things using 'like' is called a metaphor.", errorIndex: 8, correction: "simile", hint: "Metaphors are direct (is), similes use 'like' or 'as'." },
      { type: "gap", instruction: "Name the device.", sentence: "Asking a question where no answer is expected is a ___ question.", answer: "rhetorical", hint: "Used to make a point, not to get information." },
      { type: "mc", instruction: "Identify the device.", sentence: "'The wind whispered through the trees.'", options: ["Hyperbole", "Alliteration", "Personification", "Oxymoron"], correct: 2, hint: "Giving a human action (whisper) to a non-human thing (wind)." },
      { type: "gap", instruction: "Name the device.", sentence: "'Peter Piper picked a peck of pickled peppers' uses ___.", answer: "alliteration", hint: "Repetition of the same initial consonant sound." },
      { type: "mc", instruction: "Identify the device.", sentence: "'It was the best of times, it was the worst of times.' (Dickens)", options: ["Anaphora", "Oxymoron", "Antithesis", "Hyperbole"], correct: 2, hint: "Placing contrasting ideas in parallel structure to highlight the contrast." },
      { type: "drag", instruction: "Match the example to the device.", sentence: "'She is as brave as a lion': _1_. 'The silence spoke volumes': _2_. 'I'm so hungry I could eat a horse': _3_. 'To err is human': _4_.", blanks: { "_1_": "Simile", "_2_": "Personification", "_3_": "Hyperbole", "_4_": "Aphorism" }, bank: ["Simile", "Personification", "Hyperbole", "Aphorism", "Metaphor", "Irony"] },
      { type: "gap", instruction: "Name the device.", sentence: "The use of 'the' before each item in a list to add weight is called ___.", answer: "polysyndeton", alt: ["anaphora"], hint: "Repetition of conjunctions or articles before each item in a list." },
      { type: "mc", instruction: "Identify the effect of the device.", sentence: "'The cruel, cold-hearted, calculating CEO cut costs again.' — What is the PRIMARY effect of the alliteration?", options: ["It creates rhyme.", "It slows the reader down and emphasises the harshness of the CEO's character.", "It makes the text humorous.", "It makes the text easier to understand."], correct: 1, hint: "Hard consonant sounds (c/k) reinforce a negative, harsh impression." },
      { type: "gap", instruction: "Name the device.", sentence: "'You're telling me my soufflé is a little flat?' said the chef whose restaurant had just flooded — this is an example of ___.", answer: "understatement", alt: ["litotes"], hint: "Deliberately describing something as less significant than it is." },
    ]
  },

};
// Auto-generates titles from the keys (e.g. "present-tenses" -> "Present Tenses")
for (const [key, topic] of Object.entries(EXERCISE_DB)) {
  if (!topic.title) {
    topic.title = key
      .split('-')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  }
}
