// exercises.js
const EXERCISE_DB = {

  // ==========================================
  // 1. TENSES
  // ==========================================
  "present-tenses": {
    title: "Present Tenses (Simple vs. Progressive)",
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
      { type: "gap", instruction: "Fill in the Simple Present.", sentence: "The museum ___ (open) at 10 AM every weekday.", answer: "opens", hint: "Fixed timetable -> Simple Present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Every morning he drink a cup of tea before leaving.", errorIndex: 3, correction: "drinks", hint: "Third person singular requires -s in Simple Present." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I can't come to the phone right now — I ___ a bath.", options: ["have", "am having", "have had", "had"], correct: 1, hint: "An action in progress right now -> Present Progressive. 'Have a bath' is active, not stative." },
      { type: "gap", instruction: "Fill in the Simple Present.", sentence: "The Earth ___ (orbit) the Sun once every 365 days.", answer: "orbits", hint: "Permanent scientific fact -> Simple Present." },
      { type: "drag", instruction: "Fill in the correct present tense forms.", sentence: "She _1_ a teacher. She _2_ maths. Right now, she _3_ a test.", blanks: { "_1_": "is", "_2_": "teaches", "_3_": "is marking" }, bank: ["is", "teaches", "is marking", "teach", "marks", "are marking"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Why ___ you ___ that heavy coat? It is 30 degrees outside!", options: ["do / wear", "are / wearing", "have / worn", "did / wear"], correct: 1, hint: "Current, visible action -> Present Progressive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Scientists believe the universe is expand at an accelerating rate.", errorIndex: 5, correction: "expanding", hint: "Present Progressive requires 'is' + verb-ing." }
    ]
  },

  "past-tenses": {
    title: "Past Tenses (Simple vs. Progressive)",
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "The industrial revolution ___ (change) society fundamentally.", answer: "changed", hint: "Completed action in the past." },
      { type: "mc", instruction: "Simple Past or Past Progressive?", sentence: "While the politicians ___ the treaty, protesters ___ outside the building.", options: ["discussed / gathered", "were discussing / gathered", "were discussing / were gathering", "discussed / were gathering"], correct: 2, hint: "Two parallel actions happening at the same time in the past." },
      { type: "gap", instruction: "Fill in the Past Progressive.", sentence: "At 8 PM last night, I ___ (prepare) my presentation for history class.", answer: "was preparing", hint: "Action in progress at a specific time in the past." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She readed the entire novel in just two days.", errorIndex: 1, correction: "read", hint: "'Read' is an irregular verb (read - read - read)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The electricity went out while we ___ a documentary.", options: ["watched", "have watched", "were watching", "had watched"], correct: 2, hint: "A continuous past action interrupted by a sudden event." },
      { type: "drag", instruction: "Complete the text.", sentence: "I _1_ down the street when I suddenly _2_ a loud noise. I _3_ around but _4_ nothing.", blanks: { "_1_": "was walking", "_2_": "heard", "_3_": "looked", "_4_": "saw" }, bank: ["was walking", "heard", "looked", "saw", "walked", "was hearing"] },
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "Last night, she ___ (watch) a documentary about the rainforest.", answer: "watched", hint: "Completed action at a specific past time -> Simple Past." },
      { type: "error", instruction: "Find and correct the error.", sentence: "We was stuck in traffic for two hours yesterday.", errorIndex: 1, correction: "were", hint: "Plural subject 'We' requires 'were', not 'was'." },
      { type: "gap", instruction: "Fill in the Simple Past.", sentence: "The ancient Romans ___ (build) roads across Europe.", answer: "built", hint: "'Build' is irregular: build - built - built." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "He ___ his phone while he ___ football in the park.", options: ["dropped / played", "was dropping / was playing", "dropped / was playing", "was dropping / played"], correct: 2, hint: "A short completed action (drop) interrupts a longer ongoing one (play)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She buyed a new laptop last week.", errorIndex: 1, correction: "bought", hint: "'Buy' is irregular: buy - bought - bought." },
      { type: "gap", instruction: "Fill in the Past Progressive.", sentence: "At this time yesterday, scientists ___ (monitor) the storm from satellites.", answer: "were monitoring", hint: "Action in progress at a specific past time -> Past Progressive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I ___ to school by bus when I was a child.", options: ["went", "was going", "have gone", "had gone"], correct: 0, hint: "Habitual or repeated past action -> Simple Past." },
      { type: "drag", instruction: "Complete the narrative.", sentence: "She _1_ to music while she _2_ dinner. Suddenly the phone _3_.", blanks: { "_1_": "was listening", "_2_": "was cooking", "_3_": "rang" }, bank: ["was listening", "was cooking", "rang", "listened", "cooked", "was ringing"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "When I arrived at the station, the train had already went.", errorIndex: 10, correction: "gone", hint: "'Go' is irregular: go - went - gone. Past Perfect uses the past participle." }
    ]
  },

  "perfect-tenses": {
    title: "Perfect Tenses (Present & Past)",
    group: "Tenses",
    exercises: [
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "Society ___ (become) much more digital over the last decade.", answer: "has become", hint: "Action starting in the past and continuing/having an effect up to the present." },
      { type: "mc", instruction: "Simple Past or Present Perfect?", sentence: "Shakespeare ___ many famous plays in the 16th century.", options: ["has written", "writes", "wrote", "had written"], correct: 2, hint: "Finished time period in the past (16th century) -> Simple Past." },
      { type: "gap", instruction: "Fill in the Past Perfect.", sentence: "By the time the police arrived, the thieves ___ (already/escape).", answer: "had already escaped", hint: "An action completed *before* another action in the past." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I have visited London three years ago.", errorIndex: 1, correction: "-", hint: "Remove 'have' entirely. 'Three years ago' requires Simple Past: I visited London." },
      { type: "drag", instruction: "Present Perfect Simple vs. Progressive.", sentence: "I _1_ all day, but I _2_ only three pages so far.", blanks: { "_1_": "have been studying", "_2_": "have written" }, bank: ["have been studying", "have written", "have studied", "have been writing"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "She was exhausted because she ___ for the marathon for months.", options: ["was training", "has trained", "trained", "had been training"], correct: 3, hint: "Action happening over a period of time up to a point in the past -> Past Perfect Progressive." },
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "We ___ (not/receive) any updates regarding the exam yet.", answer: "have not received", alt: ["haven't received"], hint: "'Yet' signals Present Perfect." },
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "I ___ (never/see) such a breathtaking view in my life.", answer: "have never seen", hint: "Life experience with 'never' -> Present Perfect." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "How long ___ you ___ English?", options: ["did / learn", "have / been learning", "are / learning", "were / learning"], correct: 1, hint: "Duration up to now ('how long') with ongoing effort -> Present Perfect Progressive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She has went to the gym every day this week.", errorIndex: 2, correction: "gone", hint: "'Go' is irregular: go - went - gone. Present Perfect uses the past participle." },
      { type: "gap", instruction: "Fill in the Past Perfect.", sentence: "By the time we arrived at the cinema, the film ___ (already/begin).", answer: "had already begun", hint: "Completed before another past action -> Past Perfect." },
      { type: "drag", instruction: "Choose the correct perfect form.", sentence: "I _1_ this city before. I _2_ it for two years before I left. I _3_ it ever since my teens.", blanks: { "_1_": "have visited", "_2_": "had known", "_3_": "have loved" }, bank: ["have visited", "had known", "have loved", "visited", "knew", "loved"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "She ___ in London for five years before she moved to Paris.", options: ["has lived", "lived", "had lived", "was living"], correct: 2, hint: "Completed period before another past event -> Past Perfect." },
      { type: "gap", instruction: "Fill in the Present Perfect.", sentence: "The researchers ___ (just/publish) their findings in a major journal.", answer: "have just published", hint: "'Just' with a result visible now -> Present Perfect." },
      { type: "error", instruction: "Find and correct the error.", sentence: "They have been waited for the bus for over an hour.", errorIndex: 3, correction: "waiting", hint: "Present Perfect Progressive = have/has been + verb-ing." }
    ]
  },

  "future-tenses": {
    title: "Future Tenses (will, going to & Present forms)",
    group: "Tenses",
    exercises: [
      { type: "mc", instruction: "Spontaneous decision or prior plan?", sentence: "A: We have no milk. B: Don't worry, I ___ get some from the shop.", options: ["am going to", "will", "am about to", "am getting"], correct: 1, hint: "A decision made at the moment of speaking -> will." },
      { type: "gap", instruction: "Fill in the correct future form.", sentence: "Look at those dark clouds! It ___ (rain) any minute now.", answer: "is going to rain", hint: "Prediction based on visible present evidence -> going to." },
      { type: "gap", instruction: "Fill in the correct future form.", sentence: "They ___ (get married) next June — they booked the venue last month.", answer: "are getting married", hint: "Fixed future arrangement -> Present Progressive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "By this time next year, I ___ my degree.", options: ["will finish", "will have finished", "am finishing", "finish"], correct: 1, hint: "Action completed before a specific future point -> Future Perfect." },
      { type: "gap", instruction: "Promise or plan? Fill in the correct form.", sentence: "I ___ (help) you move the furniture on Saturday — I promised.", answer: "will help", alt: ["am going to help"], hint: "Promise -> will. Prior plan with evidence -> going to." },
      { type: "drag", instruction: "Match each sentence to the correct future use.", sentence: "_1_ you carry this? (spontaneous offer). She _2_ the project. (firm intention). The train _3_ at 18:00. (timetable).", blanks: { "_1_": "Will", "_2_": "is going to lead", "_3_": "leaves" }, bank: ["Will", "is going to lead", "leaves", "Is going to", "leads", "will leave"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "According to the schedule, the prime minister will meets the delegates at noon.", errorIndex: 8, correction: "meet", hint: "After a modal verb (will), use the bare infinitive — no -s ending." },
      { type: "gap", instruction: "Fill in the Future Progressive.", sentence: "This time tomorrow, I ___ (fly) over the Atlantic.", answer: "will be flying", hint: "Action in progress at a specific future moment -> Future Progressive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "A: Why have you bought all those ingredients? B: I ___ a big dinner for everyone.", options: ["am going to make", "will make", "make", "am making"], correct: 0, hint: "Prior plan/intention with visible evidence -> going to." },
      { type: "gap", instruction: "Fill in the Future Perfect.", sentence: "By the end of this century, the global temperature ___ (rise) by at least two degrees.", answer: "will have risen", hint: "Completed state at a future point in time -> Future Perfect." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I am going to visited my grandparents next weekend.", errorIndex: 4, correction: "visit", hint: "'Going to' is followed by the bare infinitive, not the past participle." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The concert ___ at 8 PM sharp according to the programme.", options: ["will start", "is going to start", "starts", "is starting"], correct: 2, hint: "Events on a fixed official timetable or programme -> Present Simple." }
    ]
  },

  // ==========================================
  // 2. CONDITIONALS
  // ==========================================
  "conditionals-mix": {
    title: "Conditionals (Type I, II, III & Mixed)",
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
      { type: "gap", instruction: "Type I: Fill in the correct forms.", sentence: "If you ___ (study) consistently, you ___ (pass) the exam easily.", answer: "study ... will pass", hint: "Real, likely condition -> Type I: If + Present, will + Infinitive." },
      { type: "mc", instruction: "Choose the correct Type II form.", sentence: "If I ___ more time, I ___ learn a new language.", options: ["have / will", "had / would", "have had / would have", "had had / would have"], correct: 1, hint: "Hypothetical present situation -> Type II: If + Past Simple, would + infinitive." },
      { type: "error", instruction: "Find and correct the error.", sentence: "If I was the president, I would change many things.", errorIndex: 2, correction: "were", hint: "In Type II conditionals, formal English uses 'were' for all persons, not 'was'." },
      { type: "gap", instruction: "Type III: Fill in the result clause.", sentence: "If the scientist had published her results earlier, other researchers ___ (be able) to build on them sooner.", answer: "would have been able", hint: "Unreal past condition -> would have + past participle." },
      { type: "mc", instruction: "Mixed Conditional: past condition, present result.", sentence: "If she had taken the job in Tokyo, she ___ fluent in Japanese by now.", options: ["would be", "would have been", "was", "had been"], correct: 0, hint: "The result is a present state -> would be (not would have been)." },
      { type: "drag", instruction: "Match the conditional types to the verb forms.", sentence: "Type I: If he _1_, he _2_. Type II: If he _3_, he _4_.", blanks: { "_1_": "works hard", "_2_": "will succeed", "_3_": "worked hard", "_4_": "would succeed" }, bank: ["works hard", "will succeed", "worked hard", "would succeed", "has worked hard", "would have succeeded"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "If it rains tomorrow, I will stayed at home.", errorIndex: 6, correction: "stay", hint: "After 'will', use the bare infinitive — no -ed ending." }
    ]
  },

  // ==========================================
  // 3. MODALS & VERB PATTERNS
  // ==========================================
  "modal-verbs": {
    title: "Modal Verbs (Obligation, Ability & Deduction)",
    group: "Modals & Verb Patterns",
    exercises: [
      { type: "mc", instruction: "Obligation: internal or external?", sentence: "I ___ wear a suit at work — it's company policy.", options: ["must", "have to", "should", "ought to"], correct: 1, hint: "'Have to' expresses external obligation (rules, policy). 'Must' is a personal, internal obligation." },
      { type: "gap", instruction: "Fill in the correct modal.", sentence: "You ___ (not/park) here — there's a fine of €50.", answer: "must not", alt: ["mustn't"], hint: "'Must not' expresses prohibition — it is forbidden." },
      { type: "mc", instruction: "Recommendation or logical deduction?", sentence: "She has been working for 12 hours. She ___ be exhausted.", options: ["should", "must", "can", "would"], correct: 1, hint: "Logical deduction based on evidence -> must (near certainty)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She could solved the puzzle in just two minutes.", errorIndex: 2, correction: "solve", hint: "After a modal verb (could), always use the bare infinitive." },
      { type: "gap", instruction: "Fill in the correct past modal.", sentence: "He ___ (should/prepare) better for the interview — he failed completely.", answer: "should have prepared", hint: "Criticism or regret about a past action -> should have + past participle." },
      { type: "mc", instruction: "Choose the correct deduction.", sentence: "She ___ be at home — her car is gone and the lights are off.", options: ["must not", "can't", "shouldn't", "needn't"], correct: 1, hint: "Certain negative deduction about the present -> can't (= it's impossible)." },
      { type: "drag", instruction: "Match the modal to its function.", sentence: "It _1_ be true — I saw it myself. You _2_ hand it in today — tomorrow is fine. She _3_ swim before she was five.", blanks: { "_1_": "must", "_2_": "needn't", "_3_": "could" }, bank: ["must", "needn't", "could", "should", "mustn't", "would"] },
      { type: "gap", instruction: "Fill in the correct past modal.", sentence: "They ___ (can/not/find) the documents — they had been misfiled.", answer: "could not find", alt: ["couldn't find"], hint: "Ability in the past (negative) -> could not + bare infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "You ___ have told me about the change — I came all the way for nothing.", options: ["could", "must", "should", "would"], correct: 2, hint: "Reproach about something not done in the past -> should have." },
      { type: "error", instruction: "Find and correct the error.", sentence: "You must have being very relieved when it was over.", errorIndex: 3, correction: "been", hint: "Past modal deduction = must have + past participle (been, not being)." },
      { type: "gap", instruction: "Fill in the correct modal.", sentence: "When I was young, I ___ (can) run very fast, but I cannot anymore.", answer: "could", hint: "General ability in the past -> could." },
      { type: "mc", instruction: "Permission or possibility?", sentence: "___ I borrow your dictionary for a moment?", options: ["Must", "Should", "May", "Would"], correct: 2, hint: "Polite request for permission -> May I...? (formal)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She can't have knew about the accident beforehand.", errorIndex: 3, correction: "known", hint: "Past modal = can't have + past participle. 'Know' -> 'known'." },
      { type: "gap", instruction: "Fill in the correct modal.", sentence: "The results ___ (might/announce) at any time — stay close to your phone.", answer: "might be announced", hint: "Possibility in the passive -> might be + past participle." }
    ]
  },

  // ==========================================
  // 4. PASSIVE VOICE & REPORTED SPEECH
  // ==========================================
  "passive-voice": {
    title: "Passive Voice in Different Tenses",
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Present Simple Passive.", sentence: "Millions of emails ___ (send) every single minute.", answer: "are sent", hint: "Subject is plural -> are + past participle." },
      { type: "gap", instruction: "Simple Past Passive.", sentence: "The novel '1984' ___ (write) by George Orwell.", answer: "was written", hint: "Singular subject in the past -> was + past participle." },
      { type: "mc", instruction: "Present Perfect Passive.", sentence: "A new approach to cancer treatment ___ recently.", options: ["has discovered", "has been discovered", "was being discovered", "is discovered"], correct: 1, hint: "Action completed recently with impact on present." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The new laws will implement next year.", errorIndex: 4, correction: "be implemented", hint: "The laws don't implement themselves -> future passive (will be + pp)." },
      { type: "drag", instruction: "Passive constructions.", sentence: "The building _1_ right now. It _2_ by next year. It _3_ by a famous architect.", blanks: { "_1_": "is being built", "_2_": "will be finished", "_3_": "was designed" }, bank: ["is being built", "will be finished", "was designed", "is building", "will finish"] },
      { type: "gap", instruction: "Modal Passive.", sentence: "This issue ___ (must / address) immediately.", answer: "must be addressed", hint: "Modal + be + past participle." },
      { type: "mc", instruction: "Choose the correct active/passive form.", sentence: "The teacher ___ the students that their tests ___.", options: ["informed / had been graded", "was informed / graded", "informed / graded", "was informing / have graded"], correct: 0, hint: "Active main clause, passive dependent clause." },
      { type: "gap", instruction: "Past Progressive Passive.", sentence: "A new highway ___ (build) when the protests started.", answer: "was being built", hint: "Ongoing passive action in the past -> was being + past participle." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The project is been managed by a team of experts.", errorIndex: 3, correction: "being", hint: "Present Progressive Passive = is/are being + past participle, not 'been'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "It ___ that social media negatively affects concentration.", options: ["is argued", "argues", "has argued", "was arguing"], correct: 0, hint: "Impersonal passive with reporting verb: It is argued/believed/claimed that..." },
      { type: "gap", instruction: "Future Perfect Passive.", sentence: "By 2030, millions of jobs ___ (replace) by artificial intelligence.", answer: "will have been replaced", hint: "Future Perfect Passive = will have been + past participle." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The results will be announce tomorrow morning.", errorIndex: 4, correction: "announced", hint: "Passive requires the past participle after 'be' (announced, not announce)." },
      { type: "drag", instruction: "Active to passive: match the correct passive forms.", sentence: "They grow coffee here. -> Coffee _1_ here. They have closed the road. -> The road _2_. They will repair the bridge. -> The bridge _3_.", blanks: { "_1_": "is grown", "_2_": "has been closed", "_3_": "will be repaired" }, bank: ["is grown", "has been closed", "will be repaired", "grows", "has closed", "will repair"] },
      { type: "gap", instruction: "Modal Perfect Passive.", sentence: "The error ___ (could / detect) earlier if the software had been tested properly.", answer: "could have been detected", hint: "Modal Perfect Passive = modal + have been + past participle." }
    ]
  },

  "reported-speech": {
    title: "Reported Speech & Backshifting",
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Backshift: Present to Past.", sentence: "She said: 'I love this book.' -> She said that she ___ (love) that book.", answer: "loved", hint: "Simple Present shifts to Simple Past." },
      { type: "mc", instruction: "Reported Questions.", sentence: "He asked me: 'Where do you live?' -> He asked me where ___.", options: ["do I live", "did I live", "I lived", "I live"], correct: 2, hint: "Reported questions use normal sentence structure (Subject + Verb), no 'do/did'." },
      { type: "gap", instruction: "Time marker shift.", sentence: "He said: 'I will do it tomorrow.' -> He said he would do it the ___.", answer: "next day", alt: ["following day"], hint: "'Tomorrow' changes in reported speech." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She told to me that she was leaving.", errorIndex: 2, correction: "-", hint: "'Tell' takes a direct object without 'to' (She told me)." },
      { type: "drag", instruction: "Match the backshifts.", sentence: "'I am going' -> she said she _1_. 'I went' -> he said he _2_. 'I will go' -> they said they _3_.", blanks: { "_1_": "was going", "_2_": "had gone", "_3_": "would go" }, bank: ["was going", "had gone", "would go", "am going", "went"] },
      { type: "mc", instruction: "Reporting Verbs.", sentence: "'Don't touch the wire!' -> He ___ me not to touch the wire.", options: ["said", "explained", "warned", "suggested"], correct: 2, hint: "Choose the reporting verb that fits the tone of a command/danger." },
      { type: "gap", instruction: "Backshift the modal.", sentence: "'I can help you.' -> She said she ___ help me.", answer: "could", hint: "'Can' shifts to 'could' in reported speech." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She explained that she will be late for the meeting.", errorIndex: 4, correction: "would", hint: "'Will' shifts to 'would' in reported speech." },
      { type: "mc", instruction: "Choose the correct reported form.", sentence: "He said: 'I have finished the report.' -> He said that he ___.", options: ["has finished", "finished", "had finished", "would finish"], correct: 2, hint: "Present Perfect shifts to Past Perfect in reported speech." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He told that the meeting had been cancelled.", errorIndex: 1, correction: "said", hint: "'Tell' requires a direct object (tell someone). Without one, use 'said'." },
      { type: "gap", instruction: "Report the question.", sentence: "She asked: 'Have you ever been to Japan?' -> She asked me if I ___ (ever/be) to Japan.", answer: "had ever been", hint: "Yes/no questions in reported speech use 'if/whether' + backshifted verb." },
      { type: "drag", instruction: "Match the time markers in reported speech.", sentence: "'now' becomes _1_. 'yesterday' becomes _2_. 'next week' becomes _3_.", blanks: { "_1_": "then", "_2_": "the day before", "_3_": "the following week" }, bank: ["then", "the day before", "the following week", "now", "tomorrow", "last week"] },
      { type: "mc", instruction: "Choose the correct reporting verb.", sentence: "'Why don't we go to the cinema?' -> She ___ going to the cinema.", options: ["advised", "suggested", "recommended", "proposed"], correct: 1, hint: "'Suggest + verb-ing' is the standard pattern for this reporting function." },
      { type: "gap", instruction: "Report the command.", sentence: "'Please sit down,' the teacher said. -> The teacher ___ (ask) us to sit down.", answer: "asked", hint: "Polite commands are reported with 'ask/tell + object + to-infinitive'." }
    ]
  },

  // ==========================================
  // 5. GERUND VS INFINITIVE
  // ==========================================
  "gerund-infinitive": {
    title: "Gerund vs. Infinitive (Advanced)",
    group: "Modals & Verb Patterns",
    exercises: [
      { type: "mc", instruction: "Choose the correct meaning.", sentence: "I forgot ___ the door, so it was open all night.", options: ["to lock", "locking"], correct: 0, hint: "Forget + to do = you didn't do the action. Forget + doing = you did it, but have no memory of it." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "She is looking forward to ___ (start) university.", answer: "starting", hint: "'Look forward to' is a prepositional phrase requiring a gerund." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He suggested to implement a new policy.", errorIndex: 2, correction: "implementing", hint: "'Suggest' is followed by a gerund, not an infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "They managed ___ the summit despite the storm.", options: ["reaching", "to reach", "reach"], correct: 1, hint: "'Manage' is followed by the to-infinitive." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "We regret ___ (inform) you that your flight has been cancelled.", answer: "to inform", hint: "'Regret to do' is used when giving bad news." },
      { type: "drag", instruction: "Match the patterns.", sentence: "I avoid _1_ in rush hour. I expect _2_ by 5 PM. I let him _3_ early.", blanks: { "_1_": "driving", "_2_": "to arrive", "_3_": "leave" }, bank: ["driving", "to arrive", "leave", "to drive", "arriving", "to leave"] },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is used to wake up at 5 AM every day.", errorIndex: 4, correction: "waking", hint: "'Be used to' (= accustomed to) requires the gerund." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "Please remember ___ (buy) milk on your way home.", answer: "to buy", hint: "Remember + to-infinitive = remembering an obligation before doing it." },
      { type: "mc", instruction: "Stop + gerund or infinitive?", sentence: "He stopped ___ his phone so he could concentrate on the lecture.", options: ["checking", "to check"], correct: 0, hint: "Stop + gerund = quit the habit. Stop + infinitive = pause in order to do something." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "The government needs ___ (invest) more in public transport.", answer: "to invest", hint: "'Need' + to-infinitive expresses necessity." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He admitted to took the money from the register.", errorIndex: 3, correction: "taking", hint: "'Admit to' is followed by the gerund (verb-ing)." },
      { type: "mc", instruction: "Try + gerund or infinitive?", sentence: "I tried ___ the window, but it was still too hot in the room.", options: ["opening", "to open"], correct: 0, hint: "Try + gerund = experiment with an action to see if it helps. Try + infinitive = make an effort." },
      { type: "gap", instruction: "Gerund or infinitive?", sentence: "I can't stand ___ (wait) in long queues — it drives me mad.", answer: "waiting", hint: "'Can't stand' is followed by the gerund." },
      { type: "drag", instruction: "Match verb + pattern.", sentence: "She decided _1_ a degree. He kept _2_ mistakes. They made her _3_ the form again.", blanks: { "_1_": "to pursue", "_2_": "making", "_3_": "fill in" }, bank: ["to pursue", "making", "fill in", "pursuing", "to make", "to fill in"] }
    ]
  },

  // ==========================================
  // 6. SENTENCE STRUCTURE
  // ==========================================
  "participle-constructions": {
    title: "Participle Constructions",
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Present participle.", sentence: "___ (realize) that he was late, he started to run.", answer: "Realizing", hint: "Replaces: 'Because he realized...'" },
      { type: "mc", instruction: "Choose the correct participle.", sentence: "___ in Germany, the car is known for its quality.", options: ["Manufacturing", "Manufactured", "Having manufactured", "To manufacture"], correct: 1, hint: "Passive meaning requires a Past Participle." },
      { type: "gap", instruction: "Perfect participle.", sentence: "___ (finish) her homework, she turned on the TV.", answer: "Having finished", hint: "Action completed before the main clause action." },
      { type: "mc", instruction: "The sentence has a dangling participle. Choose the correct rewrite.", sentence: "Walking down the street, the trees were beautiful.", options: ["Walking down the street, the trees looked beautiful to me.", "I was walking down the street, the trees were beautiful.", "Walking down the street, I noticed the trees were beautiful.", "While beautiful, the trees were walking down the street."], correct: 2, hint: "Dangling participle: the subject of the main clause must be the one doing the walking." },
      { type: "drag", instruction: "Match the participles.", sentence: "_1_ by the loud noise, he woke up. _2_ the noise, he called the police.", blanks: { "_1_": "Frightened", "_2_": "Hearing" }, bank: ["Frightened", "Hearing", "Frightening", "Heard"] },
      { type: "mc", instruction: "Participle replacing a relative clause.", sentence: "The students ___ the exam looked relieved.", options: ["taking", "taken", "took", "were taking"], correct: 0, hint: "Active meaning -> Present Participle." },
      { type: "gap", instruction: "Past participle as adjective.", sentence: "___ (exhaust) after the long hike, they sat down by the river.", answer: "Exhausted", hint: "Describes the state of the subject — passive meaning -> past participle." },
      { type: "mc", instruction: "Choose the correct participle construction.", sentence: "___ the data, the scientists noticed a significant anomaly.", options: ["Having analysed", "Being analysed", "Analysing", "Analysed"], correct: 0, hint: "The analysis was completed before the noticing -> perfect participle (Having + pp)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Being finished with the report, it was sent to the editor.", errorIndex: 1, correction: "Having", hint: "The report didn't finish itself — this is a dangling participle. Use 'Having finished' with a logical subject." },
      { type: "gap", instruction: "Reduce the relative clause to a participle.", sentence: "The man ___ (sit) in the corner is my professor.", answer: "sitting", hint: "Active, ongoing action -> Present Participle replaces 'who is sitting'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The letter ___ last week contained important instructions.", options: ["sending", "sent", "having sent", "to send"], correct: 1, hint: "Passive meaning (the letter was sent) -> Past Participle." },
      { type: "drag", instruction: "Match the participle to its function.", sentence: "_1_ his keys, he couldn't get in. _2_ in 1887, the building is now a museum. _3_ the meeting, she took careful notes.", blanks: { "_1_": "Having lost", "_2_": "Built", "_3_": "Attending" }, bank: ["Having lost", "Built", "Attending", "Losing", "Building", "Having attended"] }
    ]
  },

  "relative-clauses": {
    title: "Relative Clauses (Defining & Non-Defining)",
    group: "Sentence Structure",
    exercises: [
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "The politician ___ speech went viral is giving an interview.", answer: "whose", hint: "Shows possession (the speech belongs to the politician)." },
      { type: "mc", instruction: "Which sentence is correct?", options: ["My brother who lives in NY is a doctor.", "My brother, who lives in NY, is a doctor.", "My brother that lives in NY is a doctor."], correct: 1, hint: "Assuming you have only one brother, it's extra information (non-defining) -> needs commas." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The car, that I bought yesterday, is already broken.", errorIndex: 2, correction: "which", hint: "You cannot use 'that' in non-defining relative clauses (clauses with commas)." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "London is the city ___ I met my best friend.", answer: "where", alt: ["in which"], hint: "Refers to a place." },
      { type: "drag", instruction: "Match the pronouns.", sentence: "The man _1_ called you. The book _2_ you read. The reason _3_ she left.", blanks: { "_1_": "who", "_2_": "which", "_3_": "why" }, bank: ["who", "which", "why", "where", "whom"] },
      { type: "mc", instruction: "Can the relative pronoun be omitted?", sentence: "The jacket (which) I bought is too small.", options: ["Yes, it can be omitted.", "No, it must stay."], correct: 0, hint: "It is the object of the relative clause (I bought IT), so it can be omitted." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "Do you know the person ___ bag was left on the bus?", answer: "whose", hint: "'Whose' shows possession — the bag belongs to the person." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The woman which I spoke to was very helpful.", errorIndex: 2, correction: "who", hint: "Use 'who' or 'whom' for people, not 'which'." },
      { type: "mc", instruction: "Define or non-defining?", sentence: "The report, ___ took three months to complete, was finally published.", options: ["that", "which", "who", "whose"], correct: 1, hint: "Non-defining relative clause (commas) -> use 'which', never 'that'." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "2009 was the year ___ the financial crisis really hit hard.", answer: "when", hint: "Refers to a time -> 'when' (= in which)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The reason for that she left is still unclear.", errorIndex: 3, correction: "which", hint: "After prepositions, use 'which' not 'that': the reason for which..." },
      { type: "drag", instruction: "Match the relative clause to its type.", sentence: "Students _1_ revise regularly tend to do better. (defining). My sister, _2_ lives in Berlin, is a teacher. (non-defining).", blanks: { "_1_": "who", "_2_": "who" }, bank: ["who", "which", "that", "whose"] },
      { type: "mc", instruction: "Omission: which sentence is correct?", sentence: "The film (that) we watched last night was brilliant.", options: ["'that' can be omitted — it is the object pronoun.", "'that' cannot be omitted — it is the subject pronoun.", "You should replace 'that' with 'which'.", "You should replace 'that' with 'who'."], correct: 0, hint: "Object relative pronouns (we watched IT) can always be omitted." },
      { type: "gap", instruction: "Fill in the correct pronoun.", sentence: "She is the scientist ___ work on climate models won a Nobel Prize.", answer: "whose", hint: "'Whose' for possession — the work belongs to the scientist." }
    ]
  },

  // ==========================================
  // 7. ABITUR SKILLS: WRITING
  // ==========================================
  "linking-words": {
    title: "Linking Words & Connectives",
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
      { type: "mc", instruction: "Choose the correct connector.", sentence: "He is very talented. ___, he tends to be unreliable.", options: ["Furthermore", "However", "Therefore", "In addition"], correct: 1, hint: "Contrast between two independent clauses -> 'However'." },
      { type: "gap", instruction: "Cause.", sentence: "The project was cancelled ___ (because of) a lack of funding.", answer: "due to", alt: ["owing to", "because of"], hint: "Followed by a noun phrase, not a clause." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Despite of the criticism, she continued her research.", errorIndex: 1, correction: "-", hint: "'Despite' is never followed by 'of'. Delete it: 'Despite the criticism...'." },
      { type: "drag", instruction: "Fill in the correct connective.", sentence: "Social media can be beneficial; _1_, it can also cause harm. _2_, studies show usage is rising.", blanks: { "_1_": "however", "_2_": "Nevertheless" }, bank: ["however", "Nevertheless", "therefore", "Furthermore"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "___ she had studied hard, she failed the exam.", options: ["Despite", "Even though", "In spite of", "Because of"], correct: 1, hint: "'Even though' + full clause. 'Despite/In spite of' + noun phrase." },
      { type: "gap", instruction: "Purpose.", sentence: "The government launched a campaign ___ (in order to) raise awareness of mental health.", answer: "in order to", alt: ["to", "so as to"], hint: "Purpose -> 'in order to' + infinitive (formal)." }
    ]
  },

  "comparison": {
    title: "Comparison (Comparatives & Superlatives)",
    group: "Abitur Skills: Writing",
    exercises: [
      { type: "gap", instruction: "Fill in the comparative.", sentence: "This essay is ___ (good) than anything you have written before.", answer: "better", hint: "Irregular comparative: good -> better." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The ___ you practise, the ___ you will become.", options: ["more / better", "most / best", "much / well", "more / best"], correct: 0, hint: "Double comparative structure: 'The + comparative, the + comparative'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is more taller than her sister.", errorIndex: 2, correction: "-", hint: "Never use 'more' with a short adjective that already has -er (taller, not more taller)." },
      { type: "gap", instruction: "Fill in the superlative.", sentence: "This is the ___ (complex) issue we have faced so far.", answer: "most complex", hint: "Multi-syllable adjective -> the most + adjective." },
      { type: "mc", instruction: "Choose the correct comparison.", sentence: "Social media is not ___ harmful ___ television was in the 1980s.", options: ["so / as", "as / as", "more / than", "such / as"], correct: 0, hint: "'Not so...as' or 'not as...as' both express that two things are unequal." },
      { type: "gap", instruction: "Fill in the correct comparative form.", sentence: "The problem is ___ (serious) than the government admits.", answer: "more serious", hint: "Three-syllable adjective -> more + adjective." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He is the most best student in the entire school.", errorIndex: 3, correction: "-", hint: "'Best' is already the superlative. Remove 'most'." },
      { type: "drag", instruction: "Match the comparison structure.", sentence: "She runs _1_ fast _2_ a cheetah. He is _3_ experienced _4_ she is.", blanks: { "_1_": "as", "_2_": "as", "_3_": "more", "_4_": "than" }, bank: ["as", "as", "more", "than", "so", "that"] },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The unemployment rate is getting ___ every month.", options: ["more higher", "higher and higher", "the highest", "more and more high"], correct: 1, hint: "Repeated comparative ('worse and worse', 'higher and higher') shows ongoing change." },
      { type: "gap", instruction: "Fill in the superlative.", sentence: "China is one of ___ (fast) growing economies in the world.", answer: "the fastest", hint: "Superlative with 'one of the...' -> the + superlative + plural noun." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Her second novel was ___ impressive ___ her first.", options: ["far more / than", "much more / that", "a lot as / as", "far most / than"], correct: 0, hint: "'Far/much/a lot' can intensify comparatives. Comparatives use 'than', not 'that'." },
      { type: "gap", instruction: "Fill in the correct form.", sentence: "The ___ (little) time you waste, the ___ (much) you will achieve.", answer: "less ... more", hint: "Double comparative structure: the less... the more..." }
    ]
  },

  "question-formation": {
    title: "Question Formation (Direct, Indirect & Tags)",
    group: "Abitur Skills: Writing",
    exercises: [
      { type: "gap", instruction: "Form a direct question.", sentence: "___ did she move to Berlin? (in 2019)", answer: "When", hint: "Ask about time -> When." },
      { type: "mc", instruction: "Subject or object question?", sentence: "___ broke the window?", options: ["Who did", "Who", "Whom did", "Which did"], correct: 1, hint: "Subject question: the question word IS the subject — no auxiliary needed." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Can you tell me where does she work?", errorIndex: 5, correction: "she", hint: "Indirect questions use normal word order (Subject + Verb), not inversion." },
      { type: "gap", instruction: "Form the correct tag question.", sentence: "She has been to Japan before, ___ she?", answer: "hasn't", hint: "Positive statement -> negative tag. Has she? -> hasn't she?" },
      { type: "mc", instruction: "Choose the correct indirect question.", sentence: "I wonder ___.", options: ["where is she going", "where she is going", "where does she go", "where she goes to"], correct: 1, hint: "Indirect questions: Subject + Verb (no inversion, no do/does)." },
      { type: "gap", instruction: "Form the correct tag question.", sentence: "Nobody called while I was out, ___ they?", answer: "did", hint: "Negative subject (nobody) -> positive tag." },
      { type: "error", instruction: "Find and correct the error.", sentence: "I would like to know what time does the train leave.", errorIndex: 8, correction: "the", hint: "Indirect question after 'I would like to know' uses normal order: what time the train leaves." },
      { type: "drag", instruction: "Match the question type.", sentence: "_1_ is responsible for this? (subject Q). _2_ did you meet at the party? (object Q). _3_ does she live? (place).", blanks: { "_1_": "Who", "_2_": "Who", "_3_": "Where" }, bank: ["Who", "Who", "Where", "Whom", "Which", "How"] },
      { type: "mc", instruction: "Choose the correct tag.", sentence: "Let's take a break, ___ we?", options: ["shall", "will", "do", "don't"], correct: 0, hint: "Suggestions with 'Let's' always use '...shall we?' as the tag." },
      { type: "gap", instruction: "Form the indirect question.", sentence: "Do you know ___ the conference will start?", answer: "when", hint: "Indirect question with time reference -> 'when'." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She asked me what did I think about the proposal.", errorIndex: 4, correction: "I", hint: "Reported/indirect questions use normal word order: 'what I thought', not 'what did I think'." },
      { type: "mc", instruction: "Choose the correct question.", sentence: "The politician resigned. ___ did he resign?", options: ["What", "Who", "Why", "Whom"], correct: 2, hint: "We're asking for the reason -> Why." }
    ]
  },

  // ==========================================
  // 8. VOCABULARY & WORD BUILDING
  // ==========================================
  "articles": {
    title: "Articles (a/an, the, zero article)",
    group: "Vocabulary & Word Building",
    exercises: [
      { type: "gap", instruction: "Fill in the correct article (use - for zero article).", sentence: "___ Amazon is the longest river in South America.", answer: "The", hint: "Unique geographical features (rivers, mountain ranges, oceans) take 'the'." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "She wants to become ___ engineer when she finishes university.", options: ["a", "an", "the", "-"], correct: 0, hint: "'Engineer' starts with a consonant sound -> 'a', not 'an'." },
      { type: "gap", instruction: "Fill in the correct article (use - for zero article).", sentence: "I love ___ music, especially jazz.", answer: "-", hint: "General statements about uncountable nouns or plural nouns use zero article." },
      { type: "error", instruction: "Find and correct the error.", sentence: "He lives in the Germany near the Rhine.", errorIndex: 3, correction: "-", hint: "Country names do not take 'the' (except for 'the USA', 'the Netherlands', 'the UK')." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "Can you pass me ___ salt, please?", options: ["a", "an", "the", "-"], correct: 2, hint: "A specific item present in the situation (the salt on the table) -> 'the'." },
      { type: "gap", instruction: "Fill in the correct article.", sentence: "They went to ___ prison to visit an inmate.", answer: "-", hint: "Institutions (prison, school, university, hospital) take zero article when visited for their primary purpose." },
      { type: "error", instruction: "Find and correct the error.", sentence: "She is an honest person with a unique sense of style.", errorIndex: 2, correction: "a", hint: "'Unique' starts with a /j/ sound (you-nique) -> use 'a', not 'an'." },
      { type: "drag", instruction: "Fill in a, an, the, or - (zero article).", sentence: "I saw _1_ film last night. _2_ film was about _3_ artificial intelligence.", blanks: { "_1_": "a", "_2_": "The", "_3_": "-" }, bank: ["a", "The", "-", "an", "the", "A"] },
      { type: "mc", instruction: "Choose the correct article.", sentence: "___ French were among the first to develop high-speed rail.", options: ["A", "An", "The", "-"], correct: 2, hint: "Nationality adjectives used as a group noun take 'the' (the French, the British)." },
      { type: "gap", instruction: "Fill in the correct article.", sentence: "She plays ___ piano beautifully.", answer: "the", hint: "Musical instruments take 'the' when referring to playing them." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The poverty is one of the biggest challenges of our time.", errorIndex: 1, correction: "-", hint: "Abstract nouns used in a general sense (poverty, love, freedom) take zero article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "I read ___ interesting article about climate change this morning.", options: ["a", "an", "the", "-"], correct: 1, hint: "'Interesting' begins with a vowel sound -> 'an'." }
    ]
  },

  "word-formation": {
    title: "Word Formation (Prefixes & Suffixes)",
    group: "Vocabulary & Word Building",
    exercises: [
      { type: "gap", instruction: "Form the correct word.", sentence: "The discovery of penicillin was truly ___ (revolution).", answer: "revolutionary", hint: "revolution + -ary = adjective meaning 'causing great change'." },
      { type: "mc", instruction: "Choose the correct word form.", sentence: "The government's ___ to act quickly was widely criticised.", options: ["fail", "failure", "failing", "failed"], correct: 1, hint: "Noun form needed here: fail -> failure (-ure suffix)." },
      { type: "gap", instruction: "Add the correct prefix.", sentence: "The data was ___ (correct interpretation) by the analysts.", answer: "misinterpreted", hint: "mis- = wrongly; misinterpret means to interpret incorrectly." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Her speech was full of informative and helpless advice.", errorIndex: 7, correction: "helpful", hint: "-less means 'without' (helpless = without help). The intended meaning is -ful (helpful = full of help)." },
      { type: "gap", instruction: "Form the correct noun.", sentence: "The ___ (responsible) for the accident lies with the manufacturer.", answer: "responsibility", hint: "responsible -> responsibility (-ibility suffix)." },
      { type: "mc", instruction: "Choose the correct word form.", sentence: "The results were completely ___. No one had predicted this outcome.", options: ["expect", "expectation", "unexpected", "expectedly"], correct: 2, hint: "un- (negative prefix) + expected (past participle used as adjective)." },
      { type: "gap", instruction: "Form the correct adjective.", sentence: "Climate change is an ___ (environment) issue that affects everyone.", answer: "environmental", hint: "environment + -al = adjective." },
      { type: "drag", instruction: "Match the word to its correct form.", sentence: "She showed great _1_ (patient). His behaviour was _2_ (accept). They worked very _3_ (efficient).", blanks: { "_1_": "patience", "_2_": "unacceptable", "_3_": "efficiently" }, bank: ["patience", "unacceptable", "efficiently", "patient", "acceptable", "efficient"] },
      { type: "mc", instruction: "Choose the correct word form.", sentence: "The new policy led to a significant ___ in unemployment.", options: ["reduce", "reduction", "reduced", "reductive"], correct: 1, hint: "Noun needed as object of 'a': reduce -> reduction (-tion suffix)." },
      { type: "gap", instruction: "Add the correct prefix.", sentence: "The project was ___ (estimate — too low) from the start, which caused budget problems.", answer: "underestimated", hint: "under- = too little; underestimate = to estimate below the true value." },
      { type: "error", instruction: "Find and correct the error.", sentence: "The politician's respond to the crisis was widely criticised.", errorIndex: 2, correction: "response", hint: "'Respond' is a verb. The noun form is 'response' (not 'respond')." },
      { type: "gap", instruction: "Form the correct adverb.", sentence: "She argued her case ___ (passion) and convinced the entire committee.", answer: "passionately", hint: "passionate + -ly = adverb. (Drop the -e before adding -ly: passionately)." }
    ]
  },

  // ==========================================
  // 9. ABITUR SKILLS: TEXT ANALYSIS
  // ==========================================
  "stylistic-devices": {
    title: "Stylistic Devices",
    group: "Abitur Skills: Text Analysis",
    exercises: [
      { type: "mc", instruction: "Identify the device.", sentence: "'The camera loves her.'", options: ["Simile", "Metaphor", "Personification", "Alliteration"], correct: 2, hint: "Giving a human emotion (love) to an object (camera)." },
      { type: "gap", instruction: "Name the device.", sentence: "'Time is money' is an example of a ___.", answer: "metaphor", hint: "A direct comparison without 'like' or 'as'." },
      { type: "mc", instruction: "Identify the device.", sentence: "'I've told you a million times!'", options: ["Understatement", "Hyperbole", "Irony", "Anaphora"], correct: 1, hint: "An obvious exaggeration." },
      { type: "drag", instruction: "Match definition to device.", sentence: "Repetition of sounds: _1_. Comparison using 'like': _2_. Opposites in one phrase (e.g. bittersweet): _3_.", blanks: { "_1_": "Alliteration", "_2_": "Simile", "_3_": "Oxymoron" }, bank: ["Alliteration", "Simile", "Oxymoron", "Metaphor", "Hyperbole"] },
      { type: "gap", instruction: "Name the device.", sentence: "'We shall fight on the beaches, we shall fight on the landing grounds...' uses ___.", answer: "anaphora", hint: "Repetition of a word or phrase at the beginning of successive clauses." },
      { type: "mc", instruction: "Identify the device.", sentence: "A fire station burning down is an example of...", options: ["Irony", "Metaphor", "Personification", "Simile"], correct: 0, hint: "When the opposite of what is expected happens (Situational Irony)." },
      { type: "error", instruction: "Find and correct the error.", sentence: "Comparing two things using 'like' is called a metaphor.", errorIndex: 8, correction: "simile", hint: "Metaphors are direct (is), similes use 'like' or 'as'." },
      { type: "gap", instruction: "Name the device.", sentence: "Asking a question where no answer is expected is a ___ question.", answer: "rhetorical", hint: "Used to make a point, not to get information." },
      { type: "mc", instruction: "Identify the device.", sentence: "'It was the best of times, it was the worst of times.' (Dickens)", options: ["Oxymoron", "Anaphora", "Alliteration", "Hyperbole"], correct: 1, hint: "The same phrase ('It was the...') is repeated at the start of successive clauses." },
      { type: "gap", instruction: "Name the device.", sentence: "The phrase 'the pen is mightier than the sword' is an example of a ___.", answer: "metaphor", hint: "A direct, implied comparison — the pen is not literally called a sword." },
      { type: "mc", instruction: "Identify the device.", sentence: "'She sells seashells by the seashore.'", options: ["Assonance", "Alliteration", "Rhyme", "Anaphora"], correct: 1, hint: "Repetition of the same consonant sound at the beginning of words." },
      { type: "gap", instruction: "Name the device.", sentence: "Saying 'not bad' when something is actually very good is an example of ___.", answer: "understatement", alt: ["litotes"], hint: "Deliberately describing something as less significant than it really is." },
      { type: "mc", instruction: "Identify the device.", sentence: "'The wind whispered through the trees.'", options: ["Metaphor", "Alliteration", "Personification", "Simile"], correct: 2, hint: "Whispering is a human action — it is being attributed to the wind." },
      { type: "drag", instruction: "Match the device to the example.", sentence: "'Happy as a clam' is a _1_. 'The world is a stage' is a _2_. 'Peter Piper picked peppers' is _3_.", blanks: { "_1_": "simile", "_2_": "metaphor", "_3_": "alliteration" }, bank: ["simile", "metaphor", "alliteration", "personification", "hyperbole", "anaphora"] },
      { type: "gap", instruction: "Name the device.", sentence: "Referring to death as 'passing away' or 'kicking the bucket' is called a ___.", answer: "euphemism", hint: "A mild or indirect expression used in place of a blunt or unpleasant one." }
    ]
  }

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
