const EXERCISE_DB = {
  present_tenses: {
    group: "1. The Tenses",
    title: "Present Tenses (Simple vs. Continuous)",
    rules: {
      summary: "The choice between Present Simple and Present Continuous is rarely about 'now' vs 'always' — it's about **states vs actions**, **permanent vs temporary**, and a handful of special future and narrative uses.",
      points: [
        { heading: "Stative vs Dynamic Verbs", body: "Verbs describing a state (opinions, senses, possession, emotions) are **stative** and normally stay in the Simple form even when something is happening right now: *understand, believe, know, think (opinion), want, need, love, hate, belong, own, seem, appear, have (possession)*. The same verb can be dynamic with a different meaning: *think* (consider), *have* (an experience: 'having dinner'), *see* (meet), *taste/smell/look* (actively perform the action)." },
        { heading: "Permanent vs Temporary", body: "Present Simple describes routines, facts and permanent states ('He works from home'). Present Continuous describes a temporary situation around now, even if it isn't happening at this exact second ('This week he is working in the office')." },
        { heading: "Annoying Habits & Changing Trends", body: "'Always/forever/constantly' + Present Continuous expresses irritation at a repeated habit ('She is always losing her keys'). Present Continuous also describes a gradual change or trend over time ('The climate is changing')." },
        { heading: "Present Tenses for the Future", body: "Present Simple is used for fixed schedules and timetables (trains, flights, cinema times, calendars). Present Continuous is used for personal arrangements that have already been organized (a fixed time and place agreed with someone)." },
        { heading: "Performative Verbs & Narrative", body: "Verbs that perform the act just by being said (*promise, suggest, apologize, advise, swear*) are Present Simple. In jokes, summaries and sports commentary, the main storyline uses Present Simple while background/simultaneous actions use Present Continuous." }
      ],
      examples: [
        { en: "This cake **tastes** incredibly sweet. / I **am tasting** the sauce to check the seasoning.", note: "Stative (quality) vs dynamic (active testing)" },
        { en: "He normally **works** from home, but this week he **is working** in the office.", note: "Permanent routine vs temporary exception" },
        { en: "My brother **is always losing** his keys.", note: "Annoying repeated habit" },
        { en: "The flight **leaves** at 19:45. / I **am flying** to Madrid tomorrow.", note: "Timetable vs personal arrangement" }
      ],
      exceptions: [
        "Stative verbs almost never take -ing, even to talk about right now: 'I understand', not 'I am understanding'.",
        "'Are being' + adjective is a special case: it describes temporary behaviour ('You are being very quiet today'), not a permanent trait."
      ]
    },
    exercises: [
      // --- STATIVE VS DYNAMIC (1-15) ---
      { type: "gap", instruction: "Fill in the correct present tense: (taste)", sentence: "I ___ the sauce to see if it needs more garlic.", answer: "am tasting", alt: ["'m tasting"], hint: "Active testing is dynamic." },
      { type: "gap", instruction: "Fill in the correct present tense: (taste)", sentence: "This cake ___ incredibly sweet.", answer: "tastes", alt: [], hint: "Describing a quality is stative." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I ________ why you are so upset about this.", options: ["am not understanding", "don't understand", "not understand", "doesn't understand"], correct: 1, hint: "Understand is a stative verb." },
      { type: "drag", instruction: "Drag the verbs into the blanks.", sentence: "He _1_ to be quite wealthy, but I _2_ he is actually in debt.", bank: ["appears", "is appearing", "suspect", "am suspecting"], blanks: { "_1_": "appears", "_2_": "suspect" }, hint: "Both 'appear' (seem) and 'suspect' are stative here." },
      { type: "error", instruction: "Find the error.", sentence: "Are you believing in ghosts?", errorIndex: [0, 1, 2], correction: ["Do", "you", "believe"], hint: "Believe is stative." },
      { type: "gap", instruction: "Fill in the correct present tense: (think)", sentence: "I ___ about moving to Canada next year.", answer: "am thinking", alt: ["'m thinking"], hint: "The active process of considering is dynamic." },
      { type: "gap", instruction: "Fill in the correct present tense: (think)", sentence: "I ___ that Canada is a beautiful country.", answer: "think", alt: [], hint: "Holding an opinion is stative." },
      { type: "mc", instruction: "Select the most natural phrasing.", sentence: "Why ________ the roses?", options: ["do you smell", "are you smelling", "you smell", "smell you"], correct: 1, hint: "The deliberate action of sniffing is dynamic." },
      { type: "error", instruction: "Find the error.", sentence: "This book is belonging to the school library.", errorIndex: [2, 3], correction: ["-", "belongs"], hint: "Belong shows possession and is stative." },
      { type: "drag", instruction: "Drag the verbs into the blanks.", sentence: "The chef _1_ the meat; he says it _2_ exactly 2 kilos.", bank: ["is weighing", "weighs", "weigh", "are weighing"], blanks: { "_1_": "is weighing", "_2_": "weighs" }, hint: "Action vs. state of measurement." },
      { type: "gap", instruction: "Fill in the correct present tense: (have)", sentence: "We ___ dinner right now, can I call you back?", answer: "are having", alt: ["'re having"], hint: "Idiomatic expressions with 'have' (dinner, shower, trouble) are dynamic." },
      { type: "gap", instruction: "Fill in the correct present tense: (have)", sentence: "She ___ three older brothers.", answer: "has", alt: [], hint: "Possession/relationships are stative." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I ________ the manager at 2 PM today to discuss my promotion.", options: ["see", "am seeing", "sees", "seen"], correct: 1, hint: "Seeing someone (meeting them) is dynamic." },
      { type: "error", instruction: "Find the error.", sentence: "I am needing some help with this heavy box.", errorIndex: [1, 2], correction: ["-", "need"], hint: "Need is stative." },
      { type: "gap", instruction: "Fill in the correct present tense: (prefer)", sentence: "Honestly, I ___ tea over coffee.", answer: "prefer", alt: [], hint: "Preferences are stative." },

      // --- TEMPORARY VS PERMANENT (16-25) ---
      { type: "mc", instruction: "Select the correct tenses.", sentence: "She usually ________ a uniform, but today she ________ regular clothes.", options: ["wears / wears", "is wearing / wears", "wears / is wearing", "is wearing / is wearing"], correct: 2, hint: "Routine vs. Temporary." },
      { type: "gap", instruction: "Fill in the correct present tense: (live)", sentence: "My flat is being renovated, so I ___ with my parents this month.", answer: "am living", alt: ["'m living"], hint: "Temporary living situation." },
      { type: "gap", instruction: "Fill in the correct present tense: (live)", sentence: "Elephants ___ in herds.", answer: "live", alt: [], hint: "General fact/permanent state." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Water _1_ at 100 degrees, but look, this water _2_ right now!", bank: ["boils", "is boiling", "boil", "are boiling"], blanks: { "_1_": "boils", "_2_": "is boiling" }, hint: "Scientific fact vs. action happening at the moment of speaking." },
      { type: "error", instruction: "Find the error.", sentence: "The River Nile is flowing into the Mediterranean Sea.", errorIndex: [3, 4], correction: ["-", "flows"], hint: "Geographical facts are permanent." },
      { type: "mc", instruction: "Select the correct form of 'to be'.", sentence: "You ________ incredibly quiet today. Is everything okay?", options: ["are being", "are", "be", "is"], correct: 0, hint: "'Are being' + adjective describes temporary behavior out of character." },
      { type: "gap", instruction: "Fill in the correct present tense: (work)", sentence: "He's a freelancer, so he normally ___ from home.", answer: "works", alt: [], hint: "Permanent routine." },
      { type: "gap", instruction: "Fill in the correct present tense: (work)", sentence: "He normally works from home, but this week he ___ in the office.", answer: "is working", alt: ["'s working"], hint: "Temporary break from routine." },
      { type: "error", instruction: "Find the error.", sentence: "I am usually going to the gym on Mondays.", errorIndex: [1, 3], correction: ["-", "go"], hint: "Habits with 'usually' take the Present Simple." },
      { type: "drag", instruction: "Drag the correct adverbs and verbs.", sentence: "He _1_ _2_ French at evening classes this semester.", bank: ["is", "learning", "learns", "learn"], blanks: { "_1_": "is", "_2_": "learning" }, hint: "A temporary course of study." },

      // --- ANNOYING HABITS & TRENDS (26-35) ---
      { type: "mc", instruction: "Express an annoying habit.", sentence: "He ________ my things without asking!", options: ["always borrows", "is always borrowing", "borrows always", "always is borrowing"], correct: 1, hint: "Always + continuous = annoying habit." },
      { type: "gap", instruction: "Fill in the correct present tense: (constantly / complain)", sentence: "I can't work with her; she ___ about the management.", answer: "is constantly complaining", alt: ["'s constantly complaining"], hint: "Annoying habit." },
      { type: "error", instruction: "Find the error.", sentence: "You forever are interrupting me when I speak!", errorIndex: [1, 2], correction: ["are", "forever"], hint: "The adverb goes between the auxiliary and the -ing verb: are forever interrupting." },
      { type: "gap", instruction: "Fill in the correct present tense: (get)", sentence: "House prices in the city ___ more and more expensive.", answer: "are getting", alt: ["'re getting"], hint: "Gradual changes and trends." },
      { type: "gap", instruction: "Fill in the correct present tense: (improve)", sentence: "Your English ___ rapidly since you moved to London.", answer: "is improving", alt: ["'s improving"], hint: "Developing situations take the continuous." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The ozone layer ________ thinner every year due to pollution.", options: ["becomes", "is becoming", "become", "becoming"], correct: 1, hint: "A changing state or trend over time." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "Because of inflation, the cost of living _1_ _2_ steadily.", bank: ["is", "rising", "rises", "rise"], blanks: { "_1_": "is", "_2_": "rising" }, hint: "Economic trends." },
      { type: "gap", instruction: "Fill in the correct present tense: (always / lose)", sentence: "My brother ___ his keys; it drives us crazy.", answer: "is always losing", alt: ["'s always losing"], hint: "Annoying habit." },
      { type: "error", instruction: "Find the error.", sentence: "The global population increases at an alarming rate.", errorIndex: [3], correction: ["is increasing"], hint: "A continuing trend happening right now." },
      { type: "mc", instruction: "Express an annoying habit.", sentence: "They ________ their music too loud late at night.", options: ["play always", "are forever playing", "play forever", "forever play"], correct: 1, hint: "Forever + continuous." },

      // --- FUTURE MEANINGS (36-45) ---
      { type: "gap", instruction: "Fill in the correct present tense: (leave)", sentence: "Hurry up! The flight to Madrid ___ at 19:45.", answer: "leaves", alt: [], hint: "Timetables and schedules are Present Simple." },
      { type: "gap", instruction: "Fill in the correct present tense: (fly)", sentence: "I can't meet you tomorrow. I ___ to Madrid.", answer: "am flying", alt: ["'m flying"], hint: "Personal future arrangements (already organized) are Present Continuous." },
      { type: "mc", instruction: "Select the correct future form.", sentence: "What time ________ this evening?", options: ["does the film start", "is the film starting", "starts the film", "does start the film"], correct: 0, hint: "Schedules (cinema, TV, transport) are Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "I _1_ the dentist at 3 PM, and then my train _2_ at 5 PM.", bank: ["am seeing", "see", "leaves", "is leaving"], blanks: { "_1_": "am seeing", "_2_": "leaves" }, hint: "Arrangement vs Timetable." },
      { type: "error", instruction: "Find the error.", sentence: "The new semester is beginning on September 1st.", errorIndex: [3, 4], correction: ["-", "begins"], hint: "Official calendars/schedules are Simple." },
      { type: "gap", instruction: "Fill in the correct present tense: (have)", sentence: "We ___ a party next Saturday. You should come!", answer: "are having", alt: ["'re having"], hint: "A planned social arrangement." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The bus ________ in ten minutes.", options: ["arrive", "is arriving", "arrives", "arriving"], correct: 2, hint: "Public transport schedules are Simple." },
      { type: "gap", instruction: "Fill in the correct present tense: (meet)", sentence: "He ___ the investors for lunch tomorrow.", answer: "is meeting", alt: ["'s meeting"], hint: "A fixed appointment in a diary." },
      { type: "error", instruction: "Find the error.", sentence: "What time are you finishing work on Fridays?", errorIndex: [2, 3, 4], correction: ["do", "you", "finish"], hint: "A regular weekly schedule is Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Tomorrow, the museum _1_ at 10 AM, so we _2_ outside at 9:50.", bank: ["opens", "is opening", "are meeting", "meet"], blanks: { "_1_": "opens", "_2_": "are meeting" }, hint: "Schedule vs Arrangement." },

      // --- PERFORMATIVE VERBS & NARRATIVE (46-50) ---
      { type: "gap", instruction: "Fill in the correct present tense: (promise)", sentence: "I ___ I won't tell anyone your secret.", answer: "promise", alt: [], hint: "Performative verbs (you do it by saying it) are Simple." },
      { type: "gap", instruction: "Fill in the correct present tense: (apologize)", sentence: "We ___ for the delay in processing your order.", answer: "apologize", alt: [], hint: "Performative verb." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I ________ that we postpone the meeting until next week.", options: ["am suggesting", "suggest", "suggests", "am suggest"], correct: 1, hint: "Performative verbs (suggest, advise, swear) are Simple." },
      { type: "error", instruction: "Find the error in this plot summary.", sentence: "The hero is entering the dark cave and discovers the hidden treasure.", errorIndex: [2, 3], correction: ["-", "enters"], hint: "In summaries or telling jokes, the main actions are Present Simple." },
      { type: "drag", instruction: "Drag the verbs for narrative style.", sentence: "In Chapter 1, the protagonist _1_ a mysterious letter while she _2_ tea.", bank: ["receives", "is receiving", "is drinking", "drinks"], blanks: { "_1_": "receives", "_2_": "is drinking" }, hint: "Main action (Simple) vs Background action (Continuous)." }
    ]
  },

  perfect_tenses: {
    group: "1. The Tenses",
    title: "Perfect Tenses (Present Perf. vs Past Simple & Continuous)",
    rules: {
      summary: "Present Perfect connects the past to now; Past Simple cuts it off in a finished period. Once you can tell the two apart, Present Perfect Simple vs Continuous is just about **result** vs **activity**.",
      points: [
        { heading: "Past Simple vs Present Perfect", body: "Use Past Simple for a finished time period, a specific date, or when the person/thing is no longer available (Shakespeare wrote 39 plays — he's dead, the period is closed). Use Present Perfect for life experience up to now with no specific time given, or an action whose result matters right now. A specific time word ('yesterday', 'in 2021', 'ago') always forces Past Simple, even if the result is still visible." },
        { heading: "Present Perfect Simple vs Continuous", body: "Simple focuses on the **result** or a **completed quantity** ('I have painted the living room' / 'I have read three chapters'). Continuous focuses on the **activity itself** and its duration, and often explains present evidence ('Your hands are covered in paint — what have you been doing?'). Stative verbs (know, have, be, want, believe, belong) never take the continuous form, even with 'since/for'." },
        { heading: "Been vs Gone", body: "'Has been to' = went and already returned. 'Has gone to' = went and hasn't come back yet." },
        { heading: "Superlatives & 'First Time'", body: "Superlatives ('the most beautiful', 'the best') and phrases like 'It's the first/second/third time...' are strong triggers for the Present Perfect." },
        { heading: "Already / Yet / Still / Just", body: "'Already' and 'just' go between the auxiliary and the main verb (I have already eaten). 'Yet' goes at the end of questions and negatives. 'Still' goes before the negative auxiliary (I still haven't decided), never after it." },
        { heading: "For vs Since", body: "'For' + a duration (for ten years). 'Since' + a starting point in time (since 2015, since I was a child)." }
      ],
      examples: [
        { en: "He **went** to Paris last year. / He **has been** to Paris three times.", note: "Specific past date vs life experience" },
        { en: "I **have painted** the living room. / I **have been painting** all day.", note: "Result vs ongoing activity" },
        { en: "She has **gone** to the shops. / She has **been** to the shops (she's back now).", note: "Still away vs returned" },
        { en: "This is the best film I **have ever seen**.", note: "Superlative trigger" }
      ],
      exceptions: [
        "Stative verbs cannot be continuous even to emphasise duration: 'I have known him for years', not 'have been knowing'.",
        "'Ago' is always Past Simple: 'I saw him two minutes ago', never 'have seen'.",
        "Short, sudden actions (break, cut, lose) rarely appear in the continuous form: 'I've broken my leg', not 'have been breaking'."
      ]
    },
    exercises: [
      // --- PAST SIMPLE VS PRESENT PERFECT (1-20) ---
      { type: "mc", instruction: "Choose the correct tense.", sentence: "I ________ my keys yesterday, and I still ________ them.", options: ["lost / didn't find", "have lost / haven't found", "lost / haven't found", "have lost / didn't find"], correct: 2, hint: "Past Simple for finished time (yesterday). Present Perfect for an action with a connection to the present." },
      { type: "gap", instruction: "Fill in the correct tense: (go)", sentence: "He ___ to Paris last year for a business conference.", answer: "went", alt: [], hint: "Specific past time (last year) requires the Past Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (go)", sentence: "He ___ to Paris three times in his life.", answer: "has gone", alt: ["has been"], hint: "Life experience up to now (unfinished time) requires Present Perfect." },
      { type: "error", instruction: "Find the error.", sentence: "I have graduated from university in 2021.", errorIndex: [1, 2], correction: ["-", "graduated"], hint: "Specific dates (in 2021) anchor the action in the past. Use Past Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "I _1_ Shakespeare when I _2_ at school, but I haven't read any since.", bank: ["read", "have read", "was", "have been"], blanks: { "_1_": "read", "_2_": "was" }, hint: "Being at school is a finished period of time in the speaker's life." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Did you know that Shakespeare ________ 39 plays?", options: ["wrote", "has written", "had written", "writes"], correct: 0, hint: "Shakespeare is dead; his life is a finished period of time. Use Past Simple." },
      { type: "error", instruction: "Find the error.", sentence: "My grandfather has worked in that factory for 40 years before he retired.", errorIndex: [2], correction: ["worked"], hint: "Since he has already retired, the 40 years are a finished period in the past." },
      { type: "gap", instruction: "Fill in the correct tense: (work)", sentence: "My father ___ in that factory for 40 years, and he still loves it.", answer: "has worked", alt: ["has been working"], hint: "The action started in the past and continues into the present." },
      { type: "mc", instruction: "Which sentence implies the author is still alive?", options: ["He wrote many successful novels.", "He has written many successful novels.", "He had written many successful novels.", "He writes many successful novels."], correct: 1, hint: "Present Perfect implies the period of writing is not over yet." },
      { type: "drag", instruction: "Complete the dialogue.", sentence: "A: _1_ you ever _2_ sushi? \nB: Yes, I _3_ some last night.", bank: ["Have", "Did", "eaten", "eat", "ate", "have eaten"], blanks: { "_1_": "Have", "_2_": "eaten", "_3_": "ate" }, hint: "General experience (Pres. Perf.) vs. Specific time (Past Simple)." },
      { type: "error", instruction: "Find the error.", sentence: "Did you ever see a ghost?", errorIndex: [0, 2], correction: ["Have", "seen"], hint: "When asking about life experiences without a specific time frame, use Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (just / finish)", sentence: "Don't touch the walls! I ___ painting them.", answer: "have just finished", alt: ["'ve just finished"], hint: "'Just' is a strong trigger for the Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (buy)", sentence: "Look at my new car! I ___ it yesterday.", answer: "bought", alt: [], hint: "Even though the result is visible now, the specific time 'yesterday' forces the Past Simple." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I ________ my leg, so I can't play in the match tonight.", options: ["broke", "have broken", "was breaking", "break"], correct: 1, hint: "A past action with a direct, relevant result in the present." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Ouch! I _1_ my finger. It _2_ bleeding.", bank: ["cut", "have cut", "is", "was"], blanks: { "_1_": "have cut", "_2_": "is" }, hint: "Recent action + present visible result = Present Perfect." },
      { type: "error", instruction: "Find the error.", sentence: "I've seen him two minutes ago.", errorIndex: [0, 1], correction: ["I", "saw"], hint: "'Ago' is always used with the Past Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (live)", sentence: "Albert Einstein ___ in Switzerland for many years.", answer: "lived", alt: [], hint: "Einstein is dead, so the time period is finished." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Ouch! A bee ________ me!", options: ["stung", "has stung", "was stinging", "stings"], correct: 1, hint: "It just happened and the result is relevant right now." },
      { type: "error", instruction: "Find the error.", sentence: "When have you arrived in London?", errorIndex: [1], correction: ["did"], hint: "Questions starting with 'When' ask for a specific point in time, requiring Past Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (be)", sentence: "It ___ very cold recently.", answer: "has been", alt: ["'s been"], hint: "'Recently' connects the past to the present." },

      // --- PRESENT PERFECT SIMPLE VS CONTINUOUS (Result vs Activity) (21-40) ---
      { type: "mc", instruction: "Choose the correct form.", sentence: "Your hands are covered in paint! What ________?", options: ["have you done", "have you been doing", "did you do", "were you doing"], correct: 1, hint: "Present Perfect Continuous focuses on the activity that caused the present visible evidence." },
      { type: "gap", instruction: "Fill in the correct tense: (paint)", sentence: "I ___ the living room. It looks much brighter now!", answer: "have painted", alt: ["'ve painted"], hint: "The focus is on the finished result, so use the Simple form." },
      { type: "drag", instruction: "Drag the verbs to match the focus.", sentence: "I _1_ this book all day, but I only _2_ three chapters.", bank: ["have been reading", "have read", "read", "was reading"], blanks: { "_1_": "have been reading", "_2_": "have read" }, hint: "Continuous for the duration/activity. Simple for the completed amount/quantity." },
      { type: "error", instruction: "Find the error.", sentence: "I have been writing five emails this morning.", errorIndex: [1, 2, 3], correction: ["have", "written"], hint: "When stating a specific quantity completed (five emails), use Present Perfect Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (run)", sentence: "You look exhausted! ___ you ___?", answer: "Have ... been running", alt: [], hint: "Visible exhaustion is evidence of a recent continuous activity." },
      { type: "mc", instruction: "Select the correct meaning.", sentence: "I have been fixing the car.", options: ["The car is definitely fixed now.", "I spent time working on the car, but it might not be finished yet.", "I fixed it a long time ago."], correct: 1, hint: "Continuous focuses on the process, not necessarily the completion." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Someone _1_ my chocolates! The box is completely empty. Who _2_ them?", bank: ["has been eating", "has eaten", "ate", "was eating"], blanks: { "_1_": "has eaten", "_2_": "ate" }, hint: "Focus on completion (the box is empty)." },
      { type: "gap", instruction: "Fill in the correct tense: (play)", sentence: "They ___ tennis for hours and they are completely exhausted.", answer: "have been playing", alt: ["'ve been playing"], hint: "Focus on duration (for hours)." },
      { type: "error", instruction: "Find the error.", sentence: "How long have you been knowing your best friend?", errorIndex: [3, 4], correction: ["have", "known"], hint: "'Know' is a stative verb. It cannot take the continuous form, even for duration." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I ________ to call you all morning! Why didn't you answer?", options: ["have tried", "have been trying", "tried", "was trying"], correct: 1, hint: "Repeated, ongoing activity up to now." },
      { type: "gap", instruction: "Fill in the correct tense: (wait)", sentence: "I ___ here for two hours! Where have you been?", answer: "have been waiting", alt: ["'ve been waiting"], hint: "Continuous action extending up to the present moment." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "She _1_ a lot of weight recently because she _2_ to the gym every day.", bank: ["has lost", "has been losing", "has been going", "has gone"], blanks: { "_1_": "has lost", "_2_": "has been going" }, hint: "Lost = result (Simple). Going = repeated activity over time (Continuous)." },
      { type: "error", instruction: "Find the error.", sentence: "I have been having this car since 2015.", errorIndex: [1, 2, 3], correction: ["have", "had"], hint: "'Have' (meaning possession) is stative and cannot be continuous." },
      { type: "gap", instruction: "Fill in the correct tense: (believe)", sentence: "I ___ in ghosts since I was a little child.", answer: "have believed", alt: ["'ve believed"], hint: "Stative verb (believe) takes the Simple form, even with 'since'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "He ________ my messages. I think he's angry with me.", options: ["has ignored", "has been ignoring", "ignored", "ignores"], correct: 1, hint: "A temporary, ongoing behavior recently." },
      { type: "gap", instruction: "Fill in the correct tense: (drink)", sentence: "How much coffee ___ you ___ today?", answer: "have ... drunk", alt: [], hint: "Asking about quantity/amount completed requires Present Perfect Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "He _1_ French for five years, but he still _2_ the grammar.", bank: ["has learned", "has been learning", "hasn't mastered", "hasn't been mastering"], blanks: { "_1_": "has been learning", "_2_": "hasn't mastered" }, hint: "Activity (Continuous) vs Achievement/State (Simple)." },
      { type: "error", instruction: "Find the error.", sentence: "They have been being married for fifty years.", errorIndex: [1, 2, 3], correction: ["have", "been"], hint: "The verb 'to be' is stative. Use Present Perfect Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (work)", sentence: "I ___ all day, so I'm going to take a break now.", answer: "have been working", alt: ["'ve been working"], hint: "Activity that just stopped and explains a present feeling." },
      { type: "mc", instruction: "Select the correct phrasing.", sentence: "Sorry for the mess, we ________ the kitchen.", options: ["have decorated", "have been decorating", "decorated", "decorate"], correct: 1, hint: "The mess is evidence of the activity, which may or may not be finished." },

      // --- STATIVE, BEEN VS GONE, SUPERLATIVES, FIRST TIME (41-60) ---
      { type: "gap", instruction: "Fill in the correct form (been or gone):", sentence: "Where is Sarah? She has ___ to the supermarket.", answer: "gone", alt: [], hint: "One of these two words implies she is still away; the other implies she's already back." },
      { type: "gap", instruction: "Fill in the correct form (been or gone):", sentence: "You look tanned! Have you ___ on holiday?", answer: "been", alt: [], hint: "Since you're here to be seen looking tanned, has the trip finished or not?" },
      { type: "drag", instruction: "Drag the correct words.", sentence: "My parents have _1_ to Rome, so they can recommend a good hotel. My sister has _2_ to Rome, she'll be back next week.", bank: ["been", "gone", "went", "visited"], blanks: { "_1_": "been", "_2_": "gone" }, hint: "Returned (been) vs. Still there (gone)." },
      { type: "error", instruction: "Find the error.", sentence: "This is the most beautiful sunset I ever saw.", errorIndex: [8], correction: ["have ever seen"], hint: "Superlatives (the most, the best) trigger the Present Perfect." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "It's the first time I ________ snails.", options: ["eat", "ate", "am eating", "have eaten"], correct: 3, hint: "The structure 'It is the first time...' always takes Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (drive)", sentence: "This is the worst car I ___ ever ___.", answer: "have ... driven", alt: ["'ve ... driven"], hint: "Superlative trigger." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "It's the _1_ time she _2_ late for work.", bank: ["first", "one", "has been", "was"], blanks: { "_1_": "first", "_2_": "has been" }, hint: "'First time' + Present Perfect." },
      { type: "error", instruction: "Find the error.", sentence: "I have always been liking classical music.", errorIndex: [3, 4], correction: ["have", "always liked"], hint: "'Like' is a stative verb." },
      { type: "gap", instruction: "Fill in the correct tense: (belong)", sentence: "That antique watch ___ to my family for generations.", answer: "has belonged", alt: [], hint: "'Belong' is stative, so it must be Simple, not Continuous." },
      { type: "mc", instruction: "Select the correct form.", sentence: "He is the smartest person I ________.", options: ["met", "meet", "have ever met", "had ever met"], correct: 2, hint: "Superlative + Present Perfect." },
      { type: "error", instruction: "Find the error.", sentence: "Is this the first time you are visiting London?", errorIndex: [6, 7], correction: ["have", "visited"], hint: "'Is this the first time...' requires Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (want)", sentence: "I ___ to be an astronaut since I was a kid.", answer: "have wanted", alt: ["'ve wanted"], hint: "'Want' is stative." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "They have _1_ to the shops, but they've _2_ their wallets here!", bank: ["gone", "been", "left", "forgotten"], blanks: { "_1_": "gone", "_2_": "left" }, hint: "Gone = not returned. Left = result in the present." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "We ________ each other since we were in primary school.", options: ["have known", "have been knowing", "know", "knew"], correct: 0, hint: "Stative verb 'know'." },
      { type: "error", instruction: "Find the error.", sentence: "That's the third time you forgot your homework this week.", errorIndex: [4], correction: ["have forgotten"], hint: "Phrases like 'the third time' trigger Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (need)", sentence: "We ___ a new roof for years, but we can't afford it.", answer: "have needed", alt: ["'ve needed"], hint: "'Need' is stative." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I _1_ to India twice, but I have never _2_ to Japan.", bank: ["have been", "went", "been", "gone"], blanks: { "_1_": "have been", "_2_": "been" }, hint: "Life experiences (returning)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "He ________ unwell for the past few days.", options: ["is", "was", "has been", "has been being"], correct: 2, hint: "'To be' is stative." },
      { type: "error", instruction: "Find the error.", sentence: "This is the best movie I was ever seeing.", errorIndex: [6, 7, 8], correction: ["have", "ever", "seen"], hint: "Superlative + Present Perfect." },
      { type: "gap", instruction: "Fill in the correct tense: (seem)", sentence: "He ___ very stressed lately.", answer: "has seemed", alt: [], hint: "'Seem' is stative." },

      // --- ADVANCED MARKERS, MIXED B2/C1 CONTEXT (61-80) ---
      { type: "gap", instruction: "Fill in the correct word (already, yet, still, just):", sentence: "Have you finished your essay ___?", answer: "yet", alt: [], hint: "This word belongs in questions and negatives, usually right at the end of the sentence." },
      { type: "gap", instruction: "Fill in the correct word (already, yet, still, just):", sentence: "I have ___ eaten, so I'm not hungry.", answer: "already", alt: ["just"], hint: "This word emphasizes that something happened sooner than expected." },
      { type: "mc", instruction: "Choose the correct position.", sentence: "I ________ haven't finished my homework.", options: ["yet", "still", "already", "just"], correct: 1, hint: "'Still' goes before the negative auxiliary." },
      { type: "drag", instruction: "Drag the adverbs.", sentence: "He _1_ hasn't replied to my email, and I sent it three days ago! Has he replied to yours _2_?", bank: ["still", "yet", "already", "just"], blanks: { "_1_": "still", "_2_": "yet" }, hint: "Still + negative auxiliary. Yet at the end of a question." },
      { type: "error", instruction: "Find the error.", sentence: "I haven't still decided which university to attend.", errorIndex: [1, 2], correction: ["still", "haven't"], hint: "'Still' must come before 'haven't'." },
      { type: "gap", instruction: "Fill in the correct tense: (not / arrive)", sentence: "The train ___ yet.", answer: "has not arrived", alt: ["hasn't arrived"], hint: "'Yet' triggers Present Perfect." },
      { type: "mc", instruction: "Select the correct form.", sentence: "We ________ the project, but we need to proofread it now.", options: ["have just finished", "just finished", "have been finishing", "finish just"], correct: 0, hint: "A very recent action with present relevance." },
      { type: "error", instruction: "Find the error.", sentence: "Did you already finish the exam? That was fast!", errorIndex: [0, 2], correction: ["Have", "finished"], hint: "'Already' asking about a recently completed action takes Present Perfect." },
      { type: "drag", instruction: "Drag the prepositions.", sentence: "I've lived here _1_ ten years, ever _2_ I was a child.", bank: ["for", "since", "during", "while"], blanks: { "_1_": "for", "_2_": "since" }, hint: "For + duration. Since + starting point." },
      { type: "gap", instruction: "Fill in (for / since):", sentence: "She has been working here ___ she graduated.", answer: "since", alt: [], hint: "A specific starting point in the past." },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "They haven't seen each other ________ ages.", options: ["for", "since", "in", "during"], correct: 0, hint: "'Ages' represents a duration." },
      { type: "error", instruction: "Find the error.", sentence: "I have known him since five years.", errorIndex: [4], correction: ["for"], hint: "Five years is a duration, so use 'for'." },
      { type: "gap", instruction: "Fill in the correct tense: (you / ever / be)", sentence: "___ to New York?", answer: "Have you ever been", alt: [], hint: "Asking about life experience." },
      { type: "mc", instruction: "Select the correct form.", sentence: "How long ________ waiting for me?", options: ["have you been", "are you", "do you", "did you"], correct: 0, hint: "Action started in the past and continuing to now." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I _1_ to reach you all day. Where _2_?", bank: ["have been trying", "tried", "have you been", "were you"], blanks: { "_1_": "have been trying", "_2_": "have you been" }, hint: "Continuous activity + Present Perfect state." },
      { type: "error", instruction: "Find the error.", sentence: "I've been breaking my leg, so I can't walk.", errorIndex: [1, 2], correction: ["have", "broken"], hint: "Breaking a leg is a short, sudden action. It cannot be continuous." },
      { type: "gap", instruction: "Fill in the correct tense: (read)", sentence: "I ___ this book all week, and I'm still only on page 50.", answer: "have been reading", alt: ["'ve been reading"], hint: "Focus on the ongoing activity." },
      { type: "mc", instruction: "Choose the correct meaning.", sentence: "I've cut my finger.", options: ["I cut it recently and it's probably still bleeding or bandaged.", "I cut it a long time ago and there's a scar.", "I was cutting it for a long time."], correct: 0, hint: "Present Perfect implies a strong present connection." },
      { type: "error", instruction: "Find the error.", sentence: "She has gone to the bank. Oh, look, here she is! She just walked in.", errorIndex: [2], correction: ["been"], hint: "She has already returned, so this needs the form used for a completed round trip." },
      { type: "gap", instruction: "Fill in the correct tense: (not / see)", sentence: "I ___ him since we left university.", answer: "have not seen", alt: ["haven't seen"], hint: "'Since' + starting point triggers Present Perfect." }
    ]
  },

  future_tenses: {
    group: "1. The Tenses",
    title: "Future Tenses (Will, Going to, Continuous, Perfect)",
    rules: {
      summary: "English has no single future tense — the form you choose signals *how* you know the future: evidence, plan, schedule, or a point of view looking back from a future moment.",
      points: [
        { heading: "Will vs Going To", body: "'Going to' is for predictions based on present evidence ('Look at those clouds — it's going to rain') and for decisions/plans already made. 'Will' is for predictions based on opinion/belief ('I think it will rain'), and for spontaneous decisions and offers made at the moment of speaking ('The phone's ringing — I'll get it')." },
        { heading: "Present Tenses for the Future", body: "Present Simple = fixed timetables and schedules (trains, flights, cinema showings, official calendars). Present Continuous = personal arrangements already fixed with someone else (I'm seeing the dentist at 3)." },
        { heading: "Future Continuous", body: "will + be + -ing describes an action that will be in progress at a specific future time ('This time tomorrow, I'll be lying on a beach'), and is also a polite way to ask about someone's plans ('Will you be using the car later?')." },
        { heading: "Future Perfect (Simple & Continuous)", body: "will have + V3 = an action completed **before** a future deadline ('By the end of the month, I will have finished my exams'). will have been + -ing = the **duration** of an action up to that future point ('By December, I'll have been working here for ten years'). Stative verbs only take the Simple form, never the Continuous, even for duration." },
        { heading: "Future Time Clauses", body: "Never use 'will' after time conjunctions — when, as soon as, before, after, until, once, by the time. Use Present Simple (or Present Perfect for emphasis on completion) instead: 'I'll call you as soon as I arrive', not 'as soon as I will arrive'." }
      ],
      examples: [
        { en: "Watch out! You **are going to drop** those glasses!", note: "Prediction from visible evidence" },
        { en: "The bags look heavy — don't worry, I **will help** you.", note: "Spontaneous offer" },
        { en: "The bus **leaves** in ten minutes. / I **am seeing** the dentist at 3 PM.", note: "Timetable vs personal arrangement" },
        { en: "By 2050, scientists **will have found** a cure.", note: "Completed before a future point" },
        { en: "I'll let you know as soon as I **have finished** the report.", note: "No 'will' in the time clause" }
      ],
      exceptions: [
        "'Will' has no place in a clause starting with when/as soon as/before/after/until/once/by the time — use Present Simple or Present Perfect there instead.",
        "Stative verbs in the Future Perfect stay Simple even with 'for': 'By June we will have been married for 20 years' uses 'be', which is stative, so no continuous form exists for it."
      ]
    },
    exercises: [
      // --- WILL VS GOING TO: PREDICTIONS & DECISIONS (1-15) ---
      { type: "gap", instruction: "Fill in the correct future form (will or going to):", sentence: "Look at those completely black clouds! It ___ rain heavily.", answer: "is going to", alt: ["'s going to"], hint: "When there is physical evidence right now (black clouds), we use 'going to' for predictions." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I personally believe that electric cars ________ completely replace petrol cars by 2040.", options: ["are going to", "will", "are replacing", "replace"], correct: 1, hint: "Predictions based on personal opinion or belief (I think, I believe) usually take 'will'." },
      { type: "drag", instruction: "Drag the verbs to show Spontaneous vs Planned decisions.", sentence: "A: We are out of milk.\nB: Oh, really? I _1_ to the shop and get some.\nA: No need, I _2_ buy some later, it's on my list.", bank: ["will go", "am going to", "go", "will be going"], blanks: { "_1_": "will go", "_2_": "am going to" }, hint: "Spontaneous decision (Oh really?) = will. Pre-planned intention (on my list) = going to." },
      { type: "error", instruction: "Find the error.", sentence: "Watch out! You will drop those glasses!", errorIndex: [3], correction: ["are going to"], hint: "When something is about to happen based on immediate evidence (Watch out!), use 'going to'." },
      { type: "gap", instruction: "Fill in the correct future form: (help)", sentence: "These bags are so heavy! - Don't worry, I ___ you carry them.", answer: "will help", alt: ["'ll help"], hint: "Offers and spontaneous decisions made at the moment of speaking take 'will'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Have you decided what to do with the prize money? - Yes, I ________ buy a new house.", options: ["will", "am going to", "buy", "will be buying"], correct: 1, hint: "A decision that has already been made (an intention) requires 'going to'." },
      { type: "gap", instruction: "Fill in the correct form: (be)", sentence: "I'm sure she ___ a great doctor one day.", answer: "will be", alt: ["'ll be"], hint: "Predictions based on intuition or opinion ('I'm sure') take 'will'." },
      { type: "error", instruction: "Find the error.", sentence: "My sister will have a baby in December; we saw the ultrasound yesterday.", errorIndex: [2, 3], correction: ["is", "going to have"], hint: "Pregnancy is physical evidence of a future event. Use 'going to'." },
      { type: "drag", instruction: "Complete the dialogue.", sentence: "A: The phone is ringing! \nB: I _1_ get it. \nA: Actually, don't worry. Sarah _2_ answer it, she told me earlier.", bank: ["will", "is going to", "goes to", "will be"], blanks: { "_1_": "will", "_2_": "is going to" }, hint: "Spontaneous reaction vs Prior intention." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I expect that the government ________ raise taxes again next year.", options: ["is going to", "will", "is raising", "raises"], correct: 1, hint: "Verbs like expect, assume, and think are usually followed by 'will'." },
      { type: "gap", instruction: "Fill in the correct form: (crash)", sentence: "He is driving way too fast towards that sharp corner! He ___!", answer: "is going to crash", alt: ["'s going to crash"], hint: "Inevitable event based on present evidence." },
      { type: "error", instruction: "Find the error.", sentence: "What are your plans for the weekend? I will visit my grandparents.", errorIndex: [8, 9], correction: ["am", "going to visit"], hint: "When answering a question about 'plans', use 'going to' or Present Continuous." },
      { type: "gap", instruction: "Fill in the correct form: (open)", sentence: "It's freezing in here! - I ___ the window for you.", answer: "will open", alt: ["'ll open"], hint: "A spontaneous offer of help." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Look at the traffic! We ________ miss our flight.", options: ["will", "are going to", "miss", "will be missing"], correct: 1, hint: "Evidence (traffic) leading to a conclusion." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I _1_ probably order pizza tonight. Actually, I've already decided, I _2_ order pizza.", bank: ["will", "am going to", "order", "going to"], blanks: { "_1_": "will", "_2_": "am going to" }, hint: "Uncertainty (probably) takes will. A firm decision takes going to." },

      // --- PRESENT CONTINUOUS vs PRESENT SIMPLE FOR FUTURE (16-30) ---
      { type: "gap", instruction: "Fill in the correct tense: (leave)", sentence: "The international conference ___ at 9:00 AM sharp tomorrow.", answer: "leaves", alt: ["starts", "begins"], hint: "Official schedules and timetables use the Present Simple." }, // Adjusted sentence to fit 'leave/start' logic smoothly
      { type: "error", instruction: "Find the error.", sentence: "We will fly to Rome on Friday; I've already bought the tickets.", errorIndex: [1, 2], correction: ["are", "flying"], hint: "For fixed personal arrangements where preparations are made, use Present Continuous." },
      { type: "mc", instruction: "Select the correct future form.", sentence: "What time ________ this evening?", options: ["does the film start", "is the film starting", "starts the film", "will the film be starting"], correct: 0, hint: "Schedules (cinema, TV, transport) are Present Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Tomorrow, the museum _1_ at 10 AM, so we _2_ outside at 9:50.", bank: ["opens", "is opening", "are meeting", "will meet"], blanks: { "_1_": "opens", "_2_": "are meeting" }, hint: "Schedule (Simple) vs Arrangement (Continuous)." },
      { type: "gap", instruction: "Fill in the correct tense: (have)", sentence: "We ___ a barbecue next Saturday. Do you want to come?", answer: "are having", alt: ["'re having"], hint: "Planned social events use the Present Continuous." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Hurry up! The train ________ in five minutes.", options: ["will leave", "is leaving", "leaves", "is going to leave"], correct: 2, hint: "Public transport timetables are Present Simple." },
      { type: "error", instruction: "Find the error.", sentence: "I am meeting the dentist at 3 PM tomorrow.", errorIndex: [1, 2], correction: ["am", "seeing"], hint: "You 'see' a dentist/doctor for an appointment, you don't 'meet' them. (Grammatically, 'am meeting' is correct for Future Cont, but colloquially 'am seeing' is required for doctors)." },
      { type: "drag", instruction: "Establish the difference.", sentence: "The term _1_ on September 1st, and I _2_ into my dorm on August 30th.", bank: ["begins", "is beginning", "am moving", "move"], blanks: { "_1_": "begins", "_2_": "am moving" }, hint: "Academic calendar (Simple) vs Personal plan (Continuous)." },
      { type: "gap", instruction: "Fill in the correct tense: (you / do)", sentence: "What ___ tonight? Let's go to the cinema.", answer: "are you doing", alt: [], hint: "Asking about someone's fixed arrangements." },
      { type: "error", instruction: "Find the error.", sentence: "The concert is finishing at 11 PM.", errorIndex: [2, 3], correction: ["-", "finishes"], hint: "Event schedules are Present Simple." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I can't see you tomorrow. I ________ tennis with John.", options: ["play", "will play", "am playing", "playing"], correct: 2, hint: "A fixed arrangement with another person." },
      { type: "gap", instruction: "Fill in the correct tense: (take)", sentence: "I ___ my driving test next Tuesday at 10 AM.", answer: "am taking", alt: ["'m taking"], hint: "An organized appointment." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "My flight _1_ at 6 AM, so I _2_ the house at 3 AM.", bank: ["departs", "is departing", "am leaving", "leave"], blanks: { "_1_": "departs", "_2_": "am leaving" }, hint: "Flight schedule vs Personal arrangement." },
      { type: "error", instruction: "Find the error.", sentence: "Are you free tonight? No, I will study with Sarah.", errorIndex: [5, 6], correction: ["am", "studying"], hint: "An arrangement with someone else requires Present Continuous." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Our plane ________ at gate 4 in twenty minutes.", options: ["lands", "is landing", "will land", "going to land"], correct: 0, hint: "Airport schedules are Present Simple." },

      // --- FUTURE CONTINUOUS (Action in progress) (31-45) ---
      { type: "gap", instruction: "Fill in the Future Continuous: (lie)", sentence: "This time next week, I ___ on a beach in Spain.", answer: "will be lying", alt: ["'ll be lying"], hint: "An action that will be in progress at a specific time in the future." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Please don't call me between 8 and 10 tonight. I ________ for my exams.", options: ["will study", "will be studying", "study", "am going to study"], correct: 1, hint: "Action in progress during a specific future period." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "At 8 PM tonight, I _1_ dinner, so call me later when I _2_.", bank: ["will be eating", "will eat", "have finished", "will finish"], blanks: { "_1_": "will be eating", "_2_": "have finished" }, hint: "Action in progress vs Time clause." },
      { type: "error", instruction: "Find the error.", sentence: "Tomorrow morning at 10, we will fly over the Atlantic.", errorIndex: [5, 6], correction: ["will", "be flying"], hint: "At a specific time tomorrow, the action will be ongoing." },
      { type: "gap", instruction: "Fill in the Future Continuous: (work)", sentence: "I can't meet you tomorrow afternoon. I ___.", answer: "will be working", alt: ["'ll be working"], hint: "Routine future action that will be in progress." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Good luck with the interview! I ________ of you.", options: ["will think", "will be thinking", "think", "am thinking"], correct: 1, hint: "Ongoing action parallel to a future event." },
      { type: "error", instruction: "Find the error.", sentence: "Don't knock on his door at midnight. He will sleep.", errorIndex: [7, 8], correction: ["will", "be sleeping"], hint: "Action in progress at midnight." },
      { type: "drag", instruction: "Select the correct forms.", sentence: "Next year, she _1_ at university, and she _2_ in a dorm.", bank: ["will be studying", "will study", "will be living", "will live"], blanks: { "_1_": "will be studying", "_2_": "will be living" }, hint: "Describing a continuous state/situation in the future." },
      { type: "gap", instruction: "Fill in the Future Continuous: (use)", sentence: "___ you ___ your car this evening? Could I borrow it?", answer: "Will ... be using", alt: [], hint: "Polite way to ask about someone's future plans." },
      { type: "mc", instruction: "Select the most polite request.", sentence: "________ to the post office later?", options: ["Will you go", "Are you going to go", "Will you be going", "Do you go"], correct: 2, hint: "Future Continuous is often used to ask politely about plans to see if they can do a favor." },
      { type: "error", instruction: "Find the error.", sentence: "When you arrive, the band will play their first song.", errorIndex: [5, 6], correction: ["will", "be playing"], hint: "The playing will already be in progress when the arrival happens." },
      { type: "gap", instruction: "Fill in the Future Continuous: (wait)", sentence: "When your train arrives, I ___ for you on the platform.", answer: "will be waiting", alt: ["'ll be waiting"], hint: "Action in progress when another future event occurs." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "If you come before 7, we _1_ dinner. If you come after 8, we _2_.", bank: ["will be eating", "will eat", "will have finished", "will finish"], blanks: { "_1_": "will be eating", "_2_": "will have finished" }, hint: "In progress (Future Cont.) vs Completed (Future Perf.)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "In ten years' time, people ________ even more dependent on technology.", options: ["will become", "will be becoming", "are becoming", "become"], correct: 1, hint: "A continuous trend happening at a point in the future." },
      { type: "gap", instruction: "Fill in the Future Continuous: (sit)", sentence: "I can't believe it. This time tomorrow, we ___ on a plane to Tokyo!", answer: "will be sitting", alt: ["'ll be sitting"], hint: "Imagining an ongoing action at a specific future time." },

      // --- FUTURE PERFECT SIMPLE (Completed before a future time) (46-55) ---
      { type: "gap", instruction: "Fill in the Future Perfect: (finish)", sentence: "By the end of this month, I ___ all my exams.", answer: "will have finished", alt: ["'ll have finished"], hint: "'By' + a future time is a strong trigger for the Future Perfect." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Please call me at 8 PM. We ________ dinner by then.", options: ["will eat", "will be eating", "will have eaten", "are going to eat"], correct: 2, hint: "The action will be 100% complete *before* 8 PM." },
      { type: "error", instruction: "Find the error.", sentence: "By the time we arrive, the movie will start.", errorIndex: [6, 7], correction: ["will", "have started"], hint: "The starting will happen before the arrival." },
      { type: "drag", instruction: "Drag the correct verb forms.", sentence: "By 2050, scientists _1_ a cure for many diseases, and global poverty _2_ significantly.", bank: ["will have found", "will find", "will have decreased", "will decrease"], blanks: { "_1_": "will have found", "_2_": "will have decreased" }, hint: "Looking back from a future point (2050) at completed actions." },
      { type: "gap", instruction: "Fill in the Future Perfect: (save)", sentence: "If I keep saving $100 a week, by Christmas I ___ $1,200.", answer: "will have saved", alt: ["'ll have saved"], hint: "Calculated achievement completed before a future date." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "I can't meet you at 4 PM. I ________ my essay yet.", options: ["won't finish", "won't be finishing", "won't have finished", "haven't finished"], correct: 2, hint: "Negative Future Perfect: Not completed by a future time." },
      { type: "error", instruction: "Find the error.", sentence: "By the time you wake up tomorrow, I will leave for work.", errorIndex: [8, 9], correction: ["will", "have left"], hint: "The leaving happens before the waking up." },
      { type: "gap", instruction: "Fill in the Future Perfect: (read)", sentence: "I am reading a 500-page book. By tonight, I ___ half of it.", answer: "will have read", alt: ["'ll have read"], hint: "Portion completed before a future deadline." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "They _1_ the bridge by next year. It _2_ open to traffic in July.", bank: ["will have built", "will build", "will be", "is being"], blanks: { "_1_": "will have built", "_2_": "will be" }, hint: "Completed action by a deadline + future state." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Do you think you ________ the report by Friday?", options: ["will write", "will be writing", "will have written", "write"], correct: 2, hint: "Asking about completion before a deadline." },

      // --- FUTURE PERFECT CONTINUOUS (Duration up to a future time) (56-65) ---
      { type: "gap", instruction: "Fill in the Future Perfect Continuous: (work)", sentence: "By December, I ___ at this company for exactly ten years.", answer: "will have been working", alt: ["'ll have been working"], hint: "Emphasizes the duration of an ongoing action up to a future point." },
      { type: "mc", instruction: "Select the correct form.", sentence: "When he retires next month, he ________ for 45 years.", options: ["will work", "will have worked", "will have been working", "has been working"], correct: 2, hint: "Duration leading up to a future event." },
      { type: "error", instruction: "Find the error.", sentence: "By 8 PM, I will be studying for five hours straight.", errorIndex: [4, 5, 6], correction: ["will", "have been", "studying"], hint: "When 'for + duration' is combined with a future deadline, use Future Perfect Continuous." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "By the time the marathon ends, she _1_ for four hours. She _2_ completely exhausted.", bank: ["will have been running", "will have run", "will be", "will have been"], blanks: { "_1_": "will have been running", "_2_": "will be" }, hint: "Continuous duration + Future state." },
      { type: "gap", instruction: "Fill in the Future Perfect Continuous: (wait)", sentence: "If he doesn't arrive in the next ten minutes, we ___ for two whole hours!", answer: "will have been waiting", alt: ["'ll have been waiting"], hint: "Duration calculated at a future point." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "By next year, they ________ the new stadium for over three years.", options: ["will have been building", "will have built", "will build", "are building"], correct: 0, hint: "The building process is ongoing and its duration is measured at a future date." },
      { type: "error", instruction: "Find the error.", sentence: "By the time she finishes her PhD, she will have been knowing her professor for ten years.", errorIndex: [8, 9, 10, 11], correction: ["will", "have", "known", "her"], hint: "Stative verbs (know, have, be) CANNOT be continuous, even for duration!" },
      { type: "gap", instruction: "Fill in the correct tense: (be)", sentence: "By next month, we ___ married for twenty years.", answer: "will have been", alt: ["'ll have been"], hint: "Stative verb (be) requires Future Perfect Simple, not continuous." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "By 6 PM, I _1_ on this code for eight hours, but I still _2_ the bug.", bank: ["will have been working", "will have worked", "won't have fixed", "won't be fixing"], blanks: { "_1_": "will have been working", "_2_": "won't have fixed" }, hint: "Duration (Continuous) vs Completion (Simple)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "By midnight, it ________ for 12 hours straight.", options: ["will rain", "will be raining", "will have been raining", "rains"], correct: 2, hint: "Duration up to a future deadline." },

      // --- FUTURE TIME CLAUSES (NO WILL AFTER WHEN/AS SOON AS/UNTIL) (66-80) ---
      { type: "error", instruction: "Find the error (C1 Golden Rule).", sentence: "I will call you as soon as I will arrive at the hotel.", errorIndex: [8, 9], correction: ["-", "arrive"], hint: "NEVER use 'will' in the time clause (after when, as soon as, before, until, etc.). Use Present Simple." },
      { type: "gap", instruction: "Fill in the correct tense: (finish)", sentence: "We can't leave until you ___ your dinner.", answer: "finish", alt: ["have finished"], hint: "After 'until', use the Present Simple (or Present Perfect) to refer to the future." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I will give him the message when I ________ him.", options: ["will see", "am going to see", "see", "saw"], correct: 2, hint: "Time clauses use the Present Simple to express future meaning." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "As soon as the rain _1_, we _2_ for a walk.", bank: ["stops", "will stop", "will go", "go"], blanks: { "_1_": "stops", "_2_": "will go" }, hint: "Time clause (Present) + Main clause (Future)." },
      { type: "error", instruction: "Find the error.", sentence: "Before you will leave, make sure to lock the door.", errorIndex: [2, 3], correction: ["-", "leave"], hint: "No 'will' after 'before'." },
      { type: "gap", instruction: "Fill in the correct tense: (graduate)", sentence: "After she ___, she is going to travel the world.", answer: "graduates", alt: ["has graduated"], hint: "After 'after', use Present Simple or Present Perfect." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I'll wait here until you ________ ready.", options: ["will be", "are", "are going to be", "were"], correct: 1, hint: "No 'will' after 'until'." },
      { type: "drag", instruction: "Drag the correct forms to show completion.", sentence: "I will let you know as soon as I _1_ the report.", bank: ["have finished", "will finish", "will have finished", "finished"], blanks: { "_1_": "have finished" }, hint: "You can use the Present Perfect in a time clause to emphasize completion before the next step." },
      { type: "error", instruction: "Find the error.", sentence: "When you will reach the station, give me a call.", errorIndex: [2, 3], correction: ["-", "reach"], hint: "No 'will' after 'when'." },
      { type: "gap", instruction: "Fill in the correct tense: (get)", sentence: "By the time we ___ to the cinema, the film will have started.", answer: "get", alt: [], hint: "No 'will' after 'by the time'." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I'm not going to buy a new car until I ________ enough money.", options: ["will save", "saved", "have saved", "will have saved"], correct: 2, hint: "Present Perfect after 'until' shows the condition that must be completed first." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "If it _1_ tomorrow, we _2_ the picnic.", bank: ["rains", "will rain", "will cancel", "cancel"], blanks: { "_1_": "rains", "_2_": "will cancel" }, hint: "First Conditional: If + Present Simple, Main + Will." },
      { type: "error", instruction: "Find the error.", sentence: "Once the storm will pass, we can assess the damage.", errorIndex: [3, 4], correction: ["-", "passes"], hint: "No 'will' after 'once'." },
      { type: "gap", instruction: "Fill in the correct tense: (read)", sentence: "Can I borrow that book when you ___ it?", answer: "finish", alt: ["have finished"], hint: "Time clause requires present tenses." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "I will not speak to him until he ________ to me.", options: ["will apologize", "apologized", "apologizes", "is apologizing"], correct: 2, hint: "Time clause condition." }
    ]
  },

  conditionals: {
    group: "2. Complex Structures",
    rules: {
      summary: "Each conditional matches a different relationship to reality: general truths, real future possibilities, unreal present/future, unreal past, and the mixed forms that combine two different time frames.",
      points: [
        { heading: "Zero & First Conditional", body: "Zero: If + Present Simple, Present Simple — general truths and scientific facts ('If you heat ice, it melts'). First: If + Present Simple, will + base verb — real future possibility ('If it rains, I will stay home'). Never put 'will' inside the if-clause or after time words like 'as soon as'." },
        { heading: "Alternatives to 'If'", body: "Unless = 'if not' (never combine it with another negative). As long as, provided that, supposing, in case all take a present tense with no 'will', just like a normal if-clause." },
        { heading: "Second Conditional", body: "If + Past Simple, would + base verb — an unreal or unlikely situation in the present/future ('If I were rich, I would travel the world'). In formal or careful English, use 'were' for all persons, not 'was' ('If I were you...'). Formal inversion drops 'if': 'Were I the manager, I would...'." },
        { heading: "Third Conditional", body: "If + Past Perfect, would have + V3 — an unreal situation in the past that can no longer be changed ('If I had studied harder, I would have passed'). Formal inversion: 'Had I known...'. Fixed phrases 'Had it not been for...' / 'But for...' mean 'if it hadn't been for...'." },
        { heading: "Mixed Conditionals", body: "Past condition → present result: If + Past Perfect, would + base verb ('If I had won the lottery last week, I would be rich now'). Present/general condition → past result: If + Past Simple, would have + V3 ('If you really loved me, you would have remembered my birthday')." }
      ],
      examples: [
        { en: "If you **heat** ice, it **melts**.", note: "Zero conditional — general truth" },
        { en: "You can't enter the club **unless** you **are** 18.", note: "Unless = if not" },
        { en: "If I **were** you, I **wouldn't accept** that offer.", note: "Second conditional, formal 'were'" },
        { en: "**Had it not been for** his quick thinking, we would have crashed.", note: "Fixed inversion phrase" },
        { en: "If I had won the lottery last week, I **would be** rich now.", note: "Mixed: past condition, present result" }
      ],
      exceptions: [
        "Never put 'would' or 'would have' inside the if-clause itself — it always belongs in the result clause.",
        "'Unless you don't...' is a double negative error — 'unless' already means 'if not'."
      ]
    },
    title: "Conditionals (Zero, 1st, 2nd, 3rd, Mixed)",
    exercises: [
      // --- ZERO & FIRST CONDITIONAL (1-20) ---
      { type: "gap", instruction: "Fill in the correct tense: (melt)", sentence: "If you heat ice, it ___.", answer: "melts", alt: [], hint: "Zero conditional for scientific facts (If + Present, Present)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I will call you as soon as I ________ at the station.", options: ["will arrive", "arrive", "arrived", "am arriving"], correct: 1, hint: "First conditional: no 'will' in the if/time clause." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "If it _1_ tomorrow, we _2_ the match.", bank: ["rains", "will rain", "will cancel", "cancel"], blanks: { "_1_": "rains", "_2_": "will cancel" }, hint: "First conditional (If + Present, Will + Base verb)." },
      { type: "error", instruction: "Find the error.", sentence: "Unless you won't study, you will fail the exam.", errorIndex: [2], correction: ["study"], hint: "'Unless' already means 'if not', so do not use a negative verb after it." },
      { type: "gap", instruction: "Fill in the correct word (if / unless):", sentence: "You can't enter the club ___ you are 18.", answer: "unless", alt: [], hint: "Meaning: 'except if'." },
      { type: "mc", instruction: "Choose the correct alternative to 'if'.", sentence: "You can borrow my car ________ you bring it back by midnight.", options: ["unless", "as long as", "supposing", "in case"], correct: 1, hint: "'As long as' means 'on the condition that'." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "I _1_ an umbrella with me in case it _2_ later.", bank: ["will take", "take", "rains", "will rain"], blanks: { "_1_": "will take", "_2_": "rains" }, hint: "'In case' takes the present tense, just like 'if'." },
      { type: "error", instruction: "Find the error.", sentence: "We will go to the beach tomorrow provided that it will be sunny.", errorIndex: [10, 11], correction: ["-", "is"], hint: "'Provided that' acts like 'if' – no 'will' in its clause." },
      { type: "gap", instruction: "Fill in the correct tense: (happen)", sentence: "What ___ if you press this red button?", answer: "happens", alt: ["will happen"], hint: "Can be zero (general rule) or first conditional (specific future)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "If you ________ any problems, let me know.", options: ["will have", "have", "had", "are having"], correct: 1, hint: "First conditional with imperative in the main clause." },
      { type: "error", instruction: "Find the error.", sentence: "I'll give him the message if I will see him.", errorIndex: [8], correction: ["see"], hint: "No 'will' after 'if'." },
      { type: "gap", instruction: "Fill in the correct tense: (need)", sentence: "Take my number in case you ___ help.", answer: "need", alt: [], hint: "'In case' + Present Simple." },
      { type: "mc", instruction: "Choose the correct phrase.", sentence: "________ you were a millionaire, what would you buy first?", options: ["Unless", "Provided", "Supposing", "As long as"], correct: 2, hint: "'Supposing' means 'Imagine if'." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "I won't go _1_ you _2_ with me.", bank: ["if", "unless", "come", "don't come"], blanks: { "_1_": "unless", "_2_": "come" }, hint: "'Unless' = 'If you don't'." },
      { type: "error", instruction: "Find the error.", sentence: "If the temperature drops below zero, water will freeze.", errorIndex: [8], correction: ["freezes"], hint: "Scientific facts take the Zero Conditional (Present + Present)." },
      { type: "gap", instruction: "Fill in the correct tense: (not / finish)", sentence: "If you ___ your vegetables, you won't get dessert.", answer: "don't finish", alt: ["do not finish"], hint: "First conditional negative." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I ________ a taxi if it rains.", options: ["take", "will take", "took", "am taking"], correct: 1, hint: "Prediction/Decision based on a real condition." },
      { type: "error", instruction: "Find the error.", sentence: "Unless he apologizes, I will never speak to him again.", errorIndex: [], correction: [], hint: "This sentence is grammatically flawless." },
      { type: "error", instruction: "Find the error.", sentence: "Unless he doesn't apologize, I will never speak to him.", errorIndex: [2], correction: ["apologizes"], hint: "Double negative: 'unless' already contains 'not'." },
      { type: "gap", instruction: "Fill in the correct tense: (call)", sentence: "If she arrives early, ___ me immediately.", answer: "call", alt: [], hint: "Imperative in the main clause." },

      // --- SECOND CONDITIONAL (21-40) ---
      { type: "mc", instruction: "Choose the correct tense.", sentence: "If I ________ rich, I would travel the world.", options: ["am", "was", "were", "had been"], correct: 2, hint: "Second conditional (unreal present). 'Were' is preferred for all persons." },
      { type: "gap", instruction: "Fill in the correct tense: (know)", sentence: "If I ___ his number, I would call him.", answer: "knew", alt: [], hint: "Second conditional: If + Past Simple." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "If he _1_ harder, he _2_ better grades, but he is lazy.", bank: ["studied", "studies", "would get", "will get"], blanks: { "_1_": "studied", "_2_": "would get" }, hint: "Unreal/hypothetical situation in the present." },
      { type: "error", instruction: "Find the error.", sentence: "If I would have more time, I would learn a new language.", errorIndex: [2], correction: ["had"], hint: "Never put 'would' in the 'if' clause!" },
      { type: "gap", instruction: "Fill in the correct tense: (be)", sentence: "If I ___ you, I wouldn't accept that job offer.", answer: "were", alt: ["was"], hint: "Advice structure: If I were you..." },
      { type: "mc", instruction: "Select the correct form.", sentence: "What ________ if you saw a bear in the woods?", options: ["will you do", "would you do", "do you do", "did you do"], correct: 1, hint: "Hypothetical situation (Past Simple -> would + verb)." },
      { type: "error", instruction: "Find the error.", sentence: "She would buy a new car if she earns more money.", errorIndex: [8], correction: ["earned"], hint: "Mixed up halves: 'would buy' requires 'earned' (Second Cond)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "If animals _1_ talk, what do you think they _2_?", bank: ["can", "could", "would say", "will say"], blanks: { "_1_": "could", "_2_": "would say" }, hint: "'Could' acts as the past of 'can' in conditionals." },
      { type: "gap", instruction: "Fill in the correct tense: (not / be)", sentence: "I would go to the party if I ___ so tired.", answer: "weren't", alt: ["were not", "wasn't"], hint: "Hypothetical present state." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "If we ________ near the beach, we would go surfing every day.", options: ["live", "lived", "had lived", "would live"], correct: 1, hint: "If + Past Simple." },
      { type: "error", instruction: "Find the error.", sentence: "If he would stop smoking, he would feel much healthier.", errorIndex: [2], correction: ["stopped"], hint: "No 'would' in the 'if' clause." },
      { type: "gap", instruction: "Fill in the correct tense: (win)", sentence: "What would you do if you ___ the lottery?", answer: "won", alt: [], hint: "Classic unreal future hypothetical." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I _1_ her if I _2_ her name, but I can't remember it.", bank: ["would ask", "will ask", "knew", "know"], blanks: { "_1_": "would ask", "_2_": "knew" }, hint: "Unreal present." },
      { type: "mc", instruction: "Select the correct phrasing.", sentence: "________ I the manager, I would change the policy immediately.", options: ["Was", "Were", "If", "Had"], correct: 1, hint: "Formal inversion of 'If I were' is 'Were I'." },
      { type: "error", instruction: "Find the error.", sentence: "Were he to apologize, I will forgive him.", errorIndex: [5], correction: ["would"], hint: "'Were he to...' is a formal 2nd conditional. The main clause must use 'would'." },
      { type: "gap", instruction: "Fill in the correct word (Formal inversion):", sentence: "___ I to fail the exam, I would retake it in autumn.", answer: "Were", alt: [], hint: "Inversion for 'If I were to fail'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I would help you if I ________.", options: ["could", "can", "am able", "will be able"], correct: 0, hint: "Past form of 'can' for the hypothetical." },
      { type: "error", instruction: "Find the error.", sentence: "If she knew the truth, she will be furious.", errorIndex: [6], correction: ["would"], hint: "Mismatch: 'knew' requires 'would'." },
      { type: "gap", instruction: "Fill in the correct tense: (have)", sentence: "They would buy a house if they ___ enough money.", answer: "had", alt: [], hint: "If + Past Simple." },
      { type: "drag", instruction: "Complete the conditional.", sentence: "Even if it _1_ free, I _2_ take it.", bank: ["was", "were", "wouldn't", "won't"], blanks: { "_1_": "were", "_2_": "wouldn't" }, hint: "Second conditional." },

      // --- THIRD CONDITIONAL (41-60) ---
      { type: "mc", instruction: "Choose the correct tense.", sentence: "If I had studied harder, I ________ the exam.", options: ["would pass", "passed", "would have passed", "had passed"], correct: 2, hint: "Third conditional (unreal past): If + Past Perfect, would have + V3." },
      { type: "gap", instruction: "Fill in the correct tense: (know)", sentence: "If I ___ you were coming, I would have baked a cake.", answer: "had known", alt: ["'d known"], hint: "If + Past Perfect." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "If we _1_ a map, we _2_ lost.", bank: ["had brought", "brought", "wouldn't have got", "wouldn't get"], blanks: { "_1_": "had brought", "_2_": "wouldn't have got" }, hint: "Action and result both in the past." },
      { type: "error", instruction: "Find the error.", sentence: "If I would have seen him, I would have told him the news.", errorIndex: [2, 3], correction: ["had"], hint: "Never put 'would have' in the 'if' clause!" },
      { type: "gap", instruction: "Fill in the correct tense: (not / be)", sentence: "We would have enjoyed the picnic if the weather ___ so awful.", answer: "hadn't been", alt: ["had not been"], hint: "Unreal past condition." },
      { type: "mc", instruction: "Select the correct formal inversion.", sentence: "________ about the traffic, we would have left earlier.", options: ["If we knew", "Had we known", "If we had know", "Did we know"], correct: 1, hint: "Inversion of 'If we had known' is 'Had we known'." },
      { type: "error", instruction: "Find the error.", sentence: "Had I realized the danger, I wouldn't go there.", errorIndex: [6, 7], correction: ["wouldn't", "have gone"], hint: "'Had I realized' is 3rd conditional, requiring 'would have + V3'." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I _1_ you to the airport if you _2_ me you needed a ride.", bank: ["would have driven", "would drive", "had told", "told"], blanks: { "_1_": "would have driven", "_2_": "had told" }, hint: "Past hypothetical." },
      { type: "gap", instruction: "Fill in the formal inversion:", sentence: "___ she asked me, I would have helped her.", answer: "Had", alt: [], hint: "Inverts 'If she had asked'." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "________ for his quick thinking, we would have crashed.", options: ["If it wasn't", "Had it not been", "Were it not", "If not"], correct: 1, hint: "Fixed phrase: 'Had it not been for...' (If it hadn't been for...)." },
      { type: "error", instruction: "Find the error.", sentence: "She would have won the race if she didn't fall at the end.", errorIndex: [8, 9], correction: ["hadn't", "fallen"], hint: "Requires Past Perfect in the 'if' clause." },
      { type: "gap", instruction: "Fill in the correct tense: (miss)", sentence: "If he had woken up on time, he wouldn't ___ his flight.", answer: "have missed", alt: [], hint: "wouldn't have + V3." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "If they _1_ the warning, the disaster _2_.", bank: ["had heeded", "heeded", "could have been avoided", "could be avoided"], blanks: { "_1_": "had heeded", "_2_": "could have been avoided" }, hint: "Passive 3rd conditional." },
      { type: "mc", instruction: "Select the correct form.", sentence: "What ________ if you had missed the train?", options: ["would you do", "did you do", "would you have done", "had you done"], correct: 2, hint: "Asking about an alternative past." },
      { type: "error", instruction: "Find the error.", sentence: "But for your help, I wouldn't pass the exam yesterday.", errorIndex: [5], correction: ["wouldn't have passed"], hint: "'But for' means 'if it hadn't been for'. It requires 3rd conditional." },
      { type: "gap", instruction: "Fill in the correct word:", sentence: "___ for the seatbelt, he would have been killed in the crash.", answer: "But", alt: [], hint: "'But for' is an advanced conditional phrase." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "He might ________ if you had spoken to him more politely.", options: ["listen", "listened", "have listened", "had listened"], correct: 2, hint: "Modal perfect (might have + V3)." },
      { type: "error", instruction: "Find the error.", sentence: "If you had checked the map, we wouldn't have been gotten lost.", errorIndex: [8], correction: ["got"], hint: "Grammar slip: 'wouldn't have got/gotten'. 'Been gotten' is incorrect." },
      { type: "gap", instruction: "Fill in the correct tense: (take)", sentence: "I would have been completely soaked if I ___ an umbrella.", answer: "hadn't taken", alt: ["had not taken"], hint: "Negative Past Perfect." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "They _1_ the house if the bank _2_ them the mortgage.", bank: ["wouldn't have bought", "wouldn't buy", "hadn't given", "didn't give"], blanks: { "_1_": "wouldn't have bought", "_2_": "hadn't given" }, hint: "Double negative 3rd conditional." },

      // --- MIXED CONDITIONALS & ADVANCED TRAPS (61-80) ---
      { type: "mc", instruction: "Choose the correct mixed conditional.", sentence: "If I had won the lottery last week, I ________ rich now.", options: ["would have been", "would be", "am", "will be"], correct: 1, hint: "Past condition (If I had won) -> Present result (I would be rich now)." },
      { type: "gap", instruction: "Fill in the correct tense: (be)", sentence: "If he had taken his doctor's advice, he ___ alive today.", answer: "would be", alt: [], hint: "Past action -> Present consequence." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "If I _1_ a better memory, I _2_ my keys yesterday.", bank: ["had", "had had", "wouldn't have forgotten", "wouldn't forget"], blanks: { "_1_": "had", "_2_": "wouldn't have forgotten" }, hint: "Present state (I don't have a good memory) -> Past consequence (I forgot)." },
      { type: "error", instruction: "Find the error.", sentence: "If I wasn't so afraid of heights, I would have gone skydiving with you last week.", errorIndex: [1, 2], correction: ["weren't"], hint: "General truth/state (If I weren't) -> Past hypothetical action." },
      { type: "gap", instruction: "Fill in the correct tense: (not / eat)", sentence: "I wouldn't feel so sick right now if I ___ all that chocolate.", answer: "hadn't eaten", alt: ["had not eaten"], hint: "Past action -> Present result." },
      { type: "mc", instruction: "Select the correct form.", sentence: "If she ________ a native speaker, she would have understood the joke.", options: ["is", "was", "were", "had been"], correct: 2, hint: "Permanent state (Were) -> Past event (would have understood)." },
      { type: "drag", instruction: "Complete the mixed conditional.", sentence: "We _1_ lost right now if you _2_ to bring the map.", bank: ["wouldn't be", "won't be", "hadn't forgotten", "didn't forget"], blanks: { "_1_": "wouldn't be", "_2_": "hadn't forgotten" }, hint: "Present result of a past mistake." },
      { type: "error", instruction: "Find the error.", sentence: "If he had been born in the US, he will have an American passport now.", errorIndex: [9, 10], correction: ["would", "have"], hint: "Past event -> Present result requires 'would'." },
      { type: "gap", instruction: "Fill in the correct tense: (have)", sentence: "If you ___ to work tomorrow, we could go out tonight.", answer: "didn't have", alt: ["did not have"], hint: "Future plan acting as a present condition -> Present result." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "________ the weather so bad, we would be sitting in the garden now.", options: ["If wasn't", "Were it not for", "Had it not been for", "Unless"], correct: 2, hint: "Past state extending to present (Had it not been for / If it hadn't been for)." },
      { type: "error", instruction: "Find the error.", sentence: "If you really loved me, you would have remembered my birthday yesterday.", errorIndex: [], correction: [], hint: "Present state (love) -> Past action (remembered). This is a perfectly correct mixed conditional!" },
      { type: "error", instruction: "Find the error.", sentence: "If you really loved me, you will have remembered my birthday.", errorIndex: [6], correction: ["would"], hint: "Mixed conditional requires 'would have'." },
      { type: "gap", instruction: "Fill in the correct tense: (speak)", sentence: "If I ___ French, I would have applied for that job in Paris.", answer: "spoke", alt: [], hint: "General present ability -> Missed past opportunity." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "If they _1_ their flight, they _2_ here with us right now.", bank: ["hadn't missed", "didn't miss", "would be", "would have been"], blanks: { "_1_": "hadn't missed", "_2_": "would be" }, hint: "Past mistake -> Present consequence." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I would be a qualified doctor by now if I ________ my studies.", options: ["didn't quit", "haven't quit", "hadn't quit", "wouldn't quit"], correct: 2, hint: "Present result -> Past action." },
      { type: "error", instruction: "Find the error.", sentence: "If you had listened to me, you wouldn't have been in this mess right now.", errorIndex: [7, 8], correction: ["wouldn't", "be"], hint: "The mess is 'right now', so it must be 'wouldn't be'." },
      { type: "gap", instruction: "Fill in the correct tense: (not / help)", sentence: "I would still be living with my parents if you ___ me pay the deposit last year.", answer: "hadn't helped", alt: ["had not helped"], hint: "Present state -> Past condition." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "If she _1_ so stubborn, she _2_ to apologize yesterday.", bank: ["weren't", "hadn't been", "would have tried", "would try"], blanks: { "_1_": "weren't", "_2_": "would have tried" }, hint: "Personality trait (present) -> Past action." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "We ________ on a beach in Hawaii right now if we hadn't spent all our money.", options: ["would have been relaxing", "would be relaxing", "are relaxing", "will relax"], correct: 1, hint: "Continuous present result of a past mistake." },
      { type: "gap", instruction: "Fill in the correct formal phrase:", sentence: "___ it not for his financial support, the project would have failed.", answer: "Had", alt: [], hint: "Inversion for 'If it had not been for'." }
    ]
  },

  passive_voice: {
    group: "2. Complex Structures",
    title: "Passive Voice & Causative Forms",
    rules: {
      summary: "The passive (be + V3) shifts focus from who does an action to what happens to something. Every active tense has a passive equivalent — the challenge is building the right auxiliary chain and knowing the special structures (causative, impersonal passive, passive gerunds).",
      points: [
        { heading: "Building the Passive", body: "Passive = a form of 'be' + past participle (V3), matching the tense of the active sentence: is cleaned (Present Simple), was painted (Past Simple), is being cleaned (Present Continuous — 'being'), has been repaired (Present Perfect — 'been'). 'Being' and 'been' are a classic confusion pair: being = in progress, been = completed." },
        { heading: "Modals in the Passive", body: "modal + be + V3 for present/future ('A helmet must be worn'). modal + have been + V3 for past deduction/criticism ('He ought to have been fired')." },
        { heading: "Impersonal Passive (Reporting)", body: "'It is said/believed/expected that...' or 'Subject + is said/believed + to-infinitive' ('He is said to be a spy'). For an earlier action, use the perfect infinitive: 'He is thought to have stolen the painting'." },
        { heading: "Verbs with Two Objects", body: "Verbs like give, offer, tell, send can passivize with the indirect object as subject: 'He was given a reward.' Verbs like explain and describe cannot — you must restructure: 'The rules were explained to us', not 'We were explained the rules'." },
        { heading: "Causative: have/get something done", body: "have/get + object + V3 (no 'to') describes arranging for someone else to do something ('I had my car fixed' / 'I got my hair cut'), and can also describe something happening to you, often negatively ('He had his wallet stolen')." },
        { heading: "Passive Gerunds & Infinitives", body: "being + V3 = passive gerund ('I don't like being told what to do'). to be + V3 = passive infinitive ('She hopes to be chosen'). 'Need + -ing' has a passive meaning: 'The grass needs cutting' = needs to be cut." }
      ],
      examples: [
        { en: "The office **is cleaned** every day. / It **was being cleaned** when I arrived.", note: "Simple vs continuous passive" },
        { en: "A helmet **must be worn**. / He **ought to have been fired**.", note: "Present vs past modal passive" },
        { en: "He **is said to be** a spy.", note: "Impersonal reporting passive" },
        { en: "I **had my car fixed** last week.", note: "Causative — arranging a service" },
        { en: "The grass needs **cutting**.", note: "Passive meaning of need + -ing" }
      ],
      exceptions: [
        "'Translated' takes the preposition 'into' a language, not 'in'.",
        "Causative 'have/get something done' never takes 'to' before the participle: 'had it fixed', not 'had it to be fixed'."
      ]
    },
    exercises: [
      // --- PRESENT & PAST SIMPLE PASSIVE (1-15) ---
      { type: "gap", instruction: "Convert to Passive (Present Simple):", sentence: "They clean the office every day. -> The office ___ every day.", answer: "is cleaned", alt: [], hint: "am/is/are + Past Participle (V3)." },
      { type: "mc", instruction: "Select the correct passive form.", sentence: "The Mona Lisa ________ by Leonardo da Vinci in the 16th century.", options: ["was painted", "is painted", "has been painted", "was painting"], correct: 0, hint: "Past Simple Passive for a finished past action." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Millions of emails _1_ every day, but this specific email _2_ yesterday.", bank: ["are sent", "were sent", "was sent", "is sent"], blanks: { "_1_": "are sent", "_2_": "was sent" }, hint: "Routine (Present) vs Specific past event." },
      { type: "error", instruction: "Find the error.", sentence: "My car was steal from the parking lot last night.", errorIndex: [3], correction: ["stolen"], hint: "The passive requires the Past Participle (V3) form: steal - stole - stolen." },
      { type: "gap", instruction: "Convert to Passive (Past Simple):", sentence: "Shakespeare wrote Hamlet. -> Hamlet ___ by Shakespeare.", answer: "was written", alt: [], hint: "was/were + V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Paper ________ from wood.", options: ["is making", "is made", "made", "makes"], correct: 1, hint: "General fact: Present Simple Passive." },
      { type: "error", instruction: "Find the error.", sentence: "This house is built in 1920 by my grandfather.", errorIndex: [2], correction: ["was"], hint: "The date puts the action in the past." },
      { type: "drag", instruction: "Complete the passive sentences.", sentence: "Coffee _1_ in Brazil, while these specific beans _2_ in Colombia last year.", bank: ["is grown", "are grown", "was grown", "were grown"], blanks: { "_1_": "is grown", "_2_": "were grown" }, hint: "Uncountable vs Plural, Present vs Past." },
      { type: "gap", instruction: "Convert to Passive:", sentence: "Did they invite you to the party? -> ___ you ___ to the party?", answer: "Were ... invited", alt: [], hint: "Past Simple question in the passive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The students ________ to leave the room until the bell rings.", options: ["are not allowing", "don't allow", "are not allowed", "didn't allow"], correct: 2, hint: "They receive the action (the rule), they don't perform it." },
      { type: "error", instruction: "Find the error.", sentence: "The novel was translated in over fifty languages.", errorIndex: [3], correction: ["into"], hint: "Preposition rule: translated *into* a language." },
      { type: "gap", instruction: "Fill in the correct passive form: (speak)", sentence: "English ___ all over the world.", answer: "is spoken", alt: [], hint: "Present fact." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The thieves _1_ by the police, and the stolen money _2_.", bank: ["were caught", "was caught", "were recovered", "was recovered"], blanks: { "_1_": "were caught", "_2_": "was recovered" }, hint: "Plural (thieves) vs Uncountable (money)." },
      { type: "error", instruction: "Find the error.", sentence: "How much money was spending on the new stadium?", errorIndex: [3], correction: ["spent"], hint: "Passive requires V3 (spent), not V-ing (spending)." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "When ________?", options: ["was the telephone invented", "did the telephone invent", "was invented the telephone", "is the telephone invented"], correct: 0, hint: "Question Word + Auxiliary + Subject + V3." },

      // --- CONTINUOUS & PERFECT PASSIVES (16-30) ---
      { type: "gap", instruction: "Convert to Passive (Present Continuous):", sentence: "They are painting my house. -> My house ___.", answer: "is being painted", alt: [], hint: "am/is/are + being + V3." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I couldn't use my hotel room because it ________ at the time.", options: ["was cleaned", "was being cleaned", "has been cleaned", "is being cleaned"], correct: 1, hint: "Action in progress in the past: Past Continuous Passive." },
      { type: "error", instruction: "Find the error.", sentence: "The bridge has being repaired for three months.", errorIndex: [2], correction: ["been"], hint: "Present Perfect Passive uses 'has been + V3'. 'Being' is for continuous tenses." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "The results _1_ yet, but they _2_ at this very moment.", bank: ["haven't been published", "aren't published", "are being evaluated", "are evaluated"], blanks: { "_1_": "haven't been published", "_2_": "are being evaluated" }, hint: "Present Perfect vs Present Continuous." },
      { type: "gap", instruction: "Convert to Passive (Past Perfect):", sentence: "Someone had eaten my sandwich. -> My sandwich ___.", answer: "had been eaten", alt: [], hint: "had + been + V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "By the time we arrived, the tickets ________ completely sold out.", options: ["were being", "had been", "have been", "are"], correct: 1, hint: "Action completed before a past event: Past Perfect Passive." },
      { type: "error", instruction: "Find the error.", sentence: "A new shopping mall is build in the city center right now.", errorIndex: [3], correction: ["being built"], hint: "'Right now' indicates continuous action: is being + V3." },
      { type: "gap", instruction: "Convert to Passive (Present Perfect):", sentence: "They have stolen my bike! -> My bike ___!", answer: "has been stolen", alt: [], hint: "has/have + been + V3." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I felt like I _1_, so I turned around, but no one _2_ there.", bank: ["was being watched", "was watched", "was", "has been"], blanks: { "_1_": "was being watched", "_2_": "was" }, hint: "Action in progress happening to the subject." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Your application ________ and you will receive an answer shortly.", options: ["is processing", "is being processed", "has processed", "processes"], correct: 1, hint: "Action currently happening to the application." },
      { type: "error", instruction: "Find the error.", sentence: "Have the documents sent to the lawyers yet?", errorIndex: [0, 1], correction: ["Have", "been sent"], hint: "The documents receive the action, they don't perform it." },
      { type: "gap", instruction: "Fill in the correct passive form: (not / wash)", sentence: "These dishes ___ yet. Can you do them?", answer: "haven't been washed", alt: ["have not been washed"], hint: "Present Perfect Negative." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "When I walked in, a meeting _1_, so the room couldn't _2_.", bank: ["was being held", "was held", "be used", "been used"], blanks: { "_1_": "was being held", "_2_": "be used" }, hint: "Past Continuous Passive + Modal Passive." },
      { type: "error", instruction: "Find the error.", sentence: "The package had being delivered to the wrong address.", errorIndex: [2], correction: ["been"], hint: "Past Perfect is 'had been', not 'had being'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Several new hospitals ________ in the region since 2020.", options: ["are built", "were being built", "have been built", "had been built"], correct: 2, hint: "'Since' triggers Present Perfect." },

      // --- MODALS IN PASSIVE (31-45) ---
      { type: "gap", instruction: "Convert to Passive:", sentence: "You must wear a helmet. -> A helmet ___.", answer: "must be worn", alt: [], hint: "Modal + be + V3." },
      { type: "mc", instruction: "Select the correct form.", sentence: "This medicine ________ with food.", options: ["should take", "should be taken", "should been taken", "should taking"], correct: 1, hint: "Modal + be + V3." },
      { type: "error", instruction: "Find the error.", sentence: "The assignment must handed in by Friday.", errorIndex: [2], correction: ["must be"], hint: "Missing the 'be' auxiliary for the modal passive." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The rules _1_, and exceptions cannot _2_.", bank: ["must be followed", "must follow", "be made", "make"], blanks: { "_1_": "must be followed", "_2_": "be made" }, hint: "Passive modals." },
      { type: "gap", instruction: "Convert to Past Modal Passive:", sentence: "They should have told me! -> I ___!", answer: "should have been told", alt: [], hint: "Modal + have been + V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The mistake was terrible. He ________ fired immediately.", options: ["should be", "must be", "ought to have been", "should have"], correct: 2, hint: "Criticism of a past event: Modal + have been + V3." },
      { type: "error", instruction: "Find the error.", sentence: "The problem could have solve if we had acted sooner.", errorIndex: [3], correction: ["been solved"], hint: "Past modal passive requires 'been' + V3." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "Bicycles can _1_ here, but cars must _2_ in the garage.", bank: ["be parked", "park", "be left", "leave"], blanks: { "_1_": "be parked", "_2_": "be left" }, hint: "Simple modal passives." },
      { type: "gap", instruction: "Fill in the correct passive form: (might / delay)", sentence: "Due to the storm, flights ___.", answer: "might be delayed", alt: ["may be delayed"], hint: "Possibility in the passive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The secret ________ to anyone!", options: ["mustn't be revealed", "doesn't have to be revealed", "mustn't reveal", "needn't be revealed"], correct: 0, hint: "Prohibition in the passive." },
      { type: "error", instruction: "Find the error.", sentence: "You might be ask to show your ID at the entrance.", errorIndex: [2], correction: ["asked"], hint: "V3 is required." },
      { type: "gap", instruction: "Convert to Passive:", sentence: "No one can fix this broken vase. -> This broken vase ___.", answer: "cannot be fixed", alt: ["can't be fixed"], hint: "Negative modal passive." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The documents _1_ by the boss before they can _2_.", bank: ["have to be signed", "has to be signed", "be sent", "been sent"], blanks: { "_1_": "have to be signed", "_2_": "be sent" }, hint: "Semi-modal 'have to' behaves like a modal here." },
      { type: "error", instruction: "Find the error.", sentence: "The meeting is going to be cancel tomorrow.", errorIndex: [4], correction: ["canceled", "cancelled"], hint: "'Going to' future passive requires V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Such a tragic accident ________.", options: ["could avoid", "could be avoiding", "could have been avoided", "could had been avoided"], correct: 2, hint: "Past possibility in the passive." },

      // --- IMPERSONAL PASSIVES & DOUBLE OBJECTS (46-60) ---
      { type: "gap", instruction: "Rewrite using Impersonal Passive:", sentence: "People say that he is a spy. -> He ___ a spy.", answer: "is said to be", alt: [], hint: "Subject + is said + to-infinitive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "________ that the CEO is going to resign.", options: ["It is believed", "He is believed", "It believes", "People are believed"], correct: 0, hint: "Introductory 'It' + passive reporting verb." },
      { type: "drag", instruction: "Drag the phrases.", sentence: "They expect that the economy will grow. -> _1_ that the economy will grow. / The economy _2_ to grow.", bank: ["It is expected", "Is expected", "is expected", "expects"], blanks: { "_1_": "It is expected", "_2_": "is expected" }, hint: "Two ways to form reporting passives." },
      { type: "error", instruction: "Find the error.", sentence: "He is known to had been a great athlete in his youth.", errorIndex: [3, 4], correction: ["have", "been"], hint: "Perfect infinitive is 'to have + V3'." },
      { type: "gap", instruction: "Rewrite:", sentence: "People think she stole the money. -> She is thought ___ the money.", answer: "to have stolen", alt: [], hint: "When the action happened before the reporting verb, use 'to have + V3'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Stonehenge ________ built around 2500 BC.", options: ["is believed to be", "is believed to have been", "believes to be", "was believed to be"], correct: 1, hint: "Present belief about a past event." },
      { type: "error", instruction: "Find the error.", sentence: "It is say that eating an apple a day is good for you.", errorIndex: [2], correction: ["said"], hint: "Passive requires V3." },
      { type: "drag", instruction: "Convert the double object verb.", sentence: "They gave him a reward yesterday, but they rarely give bonuses like that. -> He _1_ a reward yesterday, but bonuses like that _2_ rarely.", bank: ["was given", "are given", "is given", "were given"], blanks: { "_1_": "was given", "_2_": "are given" }, hint: "Match each verb to its own time reference: yesterday vs a general habit." },
      { type: "gap", instruction: "Convert to Passive (focus on the person):", sentence: "They offered me a job. -> I ___ a job.", answer: "was offered", alt: [], hint: "Make 'I' the subject." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I ________ a lot of difficult questions during the interview.", options: ["asked", "was asked", "have asked", "was asking"], correct: 1, hint: "I received the action (the questions)." },
      { type: "error", instruction: "Find the error.", sentence: "A new laptop was bought me for my birthday.", errorIndex: [4], correction: ["for me"], hint: "When the object (laptop) is the subject, use 'bought FOR me' or 'given TO me'." },
      { type: "gap", instruction: "Rewrite:", sentence: "People reported that the criminal had escaped. -> The criminal was reported ___.", answer: "to have escaped", alt: [], hint: "Perfect infinitive for an earlier past action." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The Vikings _1_ to _2_ America before Columbus.", bank: ["are known", "were known", "have reached", "reach"], blanks: { "_1_": "are known", "_2_": "have reached" }, hint: "Present knowledge about a past achievement." },
      { type: "error", instruction: "Find the error.", sentence: "We were explained the new rules by the teacher.", errorIndex: [1, 2], correction: ["were", "told"], hint: "You cannot say 'I was explained something'. You must say 'The rules were explained to us' or 'We were told'." },
      { type: "mc", instruction: "Choose the correct passive.", sentence: "She doesn't like ________ what to do.", options: ["telling", "being told", "to tell", "to be telling"], correct: 1, hint: "Passive gerund: being + V3." },

      // --- CAUSATIVE (HAVE/GET SOMETHING DONE) (61-70) ---
      { type: "gap", instruction: "Rewrite using Causative:", sentence: "The mechanic fixed my car. -> I ___ my car ___.", answer: "had ... fixed", alt: ["got ... fixed"], hint: "have + object + V3." },
      { type: "mc", instruction: "Select the correct meaning.", sentence: "I had my house painted.", options: ["I painted it myself.", "I asked/paid someone else to paint it.", "I forced someone to paint it."], correct: 1, hint: "Causative structure implies arranging for someone else to do a service." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "I can't see properly. I need to _1_ my eyes _2_.", bank: ["have", "make", "tested", "test"], blanks: { "_1_": "have", "_2_": "tested" }, hint: "have + object + V3." },
      { type: "error", instruction: "Find the error.", sentence: "She is going to the hairdresser to get her hair to cut.", errorIndex: [8, 9], correction: ["-", "cut"], hint: "No 'to' before the past participle in causative structures." },
      { type: "gap", instruction: "Rewrite using Causative:", sentence: "Someone stole his wallet on the train. -> He ___ his wallet ___ on the train.", answer: "had ... stolen", alt: ["got ... stolen"], hint: "Causative can also describe a negative experience happening to someone." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "You should ________ before you buy that old house.", options: ["have the roof checked", "check the roof", "have checked the roof", "get the roof checking"], correct: 0, hint: "Arrange for a professional to do it." },
      { type: "error", instruction: "Find the error.", sentence: "We are having a new kitchen install next week.", errorIndex: [5], correction: ["installed"], hint: "Requires the V3 (past participle)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I finally _1_ my computer _2_ yesterday.", bank: ["got", "have", "fixed", "fixing"], blanks: { "_1_": "got", "_2_": "fixed" }, hint: "'Got' is commonly used instead of 'had' in informal English." },
      { type: "gap", instruction: "Rewrite using Causative:", sentence: "The dentist is going to pull out my tooth. -> I am going to ___ my tooth ___.", answer: "have ... pulled out", alt: ["get ... pulled out"], hint: "Present Continuous causative." },
      { type: "mc", instruction: "Select the correct form.", sentence: "How often do you ________?", options: ["have serviced your car", "service your car have", "have your car serviced", "have your car service"], correct: 2, hint: "have + object + V3." },

      // --- ADVANCED PASSIVES (INFINITIVES, GERUNDS, NEED DOING) (71-80) ---
      { type: "gap", instruction: "Rewrite with 'need':", sentence: "The grass needs to be cut. -> The grass needs ___.", answer: "cutting", alt: [], hint: "need + V-ing has a passive meaning." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I remember ________ to the zoo when I was a child.", options: ["taking", "to take", "being taken", "to be taken"], correct: 2, hint: "Passive gerund after 'remember'." },
      { type: "error", instruction: "Find the error.", sentence: "This room needs paint immediately.", errorIndex: [2], correction: ["painting", "to be painted"], hint: "need + V-ing or need + to be V3." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "She hopes _1_ for the job, but she hates _2_ interviewed.", bank: ["to be chosen", "to choose", "being", "been"], blanks: { "_1_": "to be chosen", "_2_": "being" }, hint: "Passive infinitive vs Passive gerund." },
      { type: "gap", instruction: "Fill in the passive infinitive: (invite)", sentence: "I was thrilled ___ to the royal wedding.", answer: "to be invited", alt: ["to have been invited"], hint: "to + be + V3." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The criminal managed to escape without ________.", options: ["seeing", "being seen", "to be seen", "having seen"], correct: 1, hint: "Prepositions (without) are followed by a gerund." },
      { type: "error", instruction: "Find the error.", sentence: "There is nothing more to doing here.", errorIndex: [4], correction: ["done"], hint: "Passive infinitive: to be done (or 'to do' in active meaning, but 'to doing' is completely wrong)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I'd love _1_ to the party, but my car needs _2_.", bank: ["to have been invited", "to be invited", "repairing", "to repair"], blanks: { "_1_": "to have been invited", "_2_": "repairing" }, hint: "Perfect passive infinitive + passive gerund." },
      { type: "gap", instruction: "Fill in the passive gerund: (tell)", sentence: "He is tired of ___ what to do all the time.", answer: "being told", alt: [], hint: "being + V3." },
      { type: "mc", instruction: "Choose the most advanced phrasing.", sentence: "________ by the critics, the film was a box office flop.", options: ["Destroying", "Having destroyed", "Having been destroyed", "To be destroyed"], correct: 2, hint: "Perfect passive participle clause: Having been + V3." }
    ]
  },

  gerunds_infinitives: {
    group: "2. Complex Structures",
    title: "Gerunds & Infinitives (Verb Patterns)",
    rules: {
      summary: "Whether a verb, preposition or adjective is followed by an -ing form (gerund) or a to-infinitive is mostly fixed by the word before it — but a handful of verbs change meaning depending on which one you pick.",
      points: [
        { heading: "Verbs + Gerund", body: "avoid, mind, suggest, admit (to), postpone, imagine, miss, keep, deny, risk + -ing. A gerund can also be the subject of a sentence ('Smoking is strictly forbidden')." },
        { heading: "Prepositions + Gerund", body: "Any preposition is followed by -ing, including 'to' when it's acting as a preposition rather than part of an infinitive: look forward to, be/get used to, object to, accustomed to + -ing. Fixed idioms also take -ing: can't help, it's no use, there's no point in, instead of, without." },
        { heading: "Verbs + To-Infinitive", body: "afford, refuse, promise, manage, seem, pretend, threaten, tend, prepare, agree, hesitate, plan, hope + to-infinitive. Some take an object first: want/advise/warn someone (not) to do something." },
        { heading: "The C1 Meaning-Change Traps", body: "stop + -ing (quit a habit) vs stop + to-infinitive (pause in order to do something); remember/forget + -ing (memory of a past action) vs + to-infinitive (a task still to do); regret + -ing (a past action) vs + to-infinitive (formal bad news); try + to-infinitive (a difficult effort) vs try + -ing (an experiment/alternative method); go on + to-infinitive (move to the next stage) vs + -ing (continue the same activity)." },
        { heading: "Bare Infinitive & Perception Verbs", body: "make, let, had better, would rather + bare infinitive (no 'to'). Verbs of perception (see, hear, watch) + object + bare infinitive describe a completed action ('I saw him cross the road'); + object + -ing describes an action in progress ('I saw him crossing when the accident happened')." }
      ],
      examples: [
        { en: "I am really looking forward **to seeing** you next week.", note: "'to' as a preposition + gerund" },
        { en: "After his heart attack, he had to **stop smoking**. / We stopped **to smoke** a cigarette.", note: "Quit a habit vs pause for a purpose" },
        { en: "I remember **going** to the beach as a kid. Did you remember **to bring** the tickets?", note: "Memory vs task" },
        { en: "I saw the blind man **cross** the road. / I saw him **crossing** when the accident happened.", note: "Completed action vs in-progress action" }
      ],
      exceptions: [
        "'Look forward to' and similar phrases are one of the most common C1 traps: the 'to' is a preposition, so 'looking forward to see you' is wrong.",
        "make and let drop 'to' in the active voice ('let him go') but keep it in the passive ('He was made to apologize')."
      ]
    },
    exercises: [
      // --- CORE GERUNDS (1-20) ---
      { type: "gap", instruction: "Fill in the correct form (Gerund or Infinitive): (make)", sentence: "Try to avoid ___ stupid mistakes in the exam.", answer: "making", alt: [], hint: "The verb 'avoid' is always followed by the gerund (-ing)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Would you mind ________ the window? It's freezing.", options: ["to close", "close", "closing", "closed"], correct: 2, hint: "'Mind' is always followed by the gerund." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I suggested _1_ to the beach, but she insisted on _2_ home.", bank: ["going", "to go", "staying", "to stay"], blanks: { "_1_": "going", "_2_": "staying" }, hint: "'Suggest' and prepositions (on) are followed by the gerund." },
      { type: "error", instruction: "Find the error (Classic Abitur Trap!).", sentence: "I am really looking forward to see you next week.", errorIndex: [6], correction: ["seeing"], hint: "In 'look forward to', the 'to' is a preposition. Prepositions are ALWAYS followed by the gerund (-ing)." },
      { type: "gap", instruction: "Fill in the correct form: (learn)", sentence: "She has always been interested in ___ foreign languages.", answer: "learning", alt: [], hint: "After a preposition (in), use the gerund." },
      { type: "gap", instruction: "Fill in the correct form: (solve)", sentence: "He is very good at ___ complex mathematical problems.", answer: "solving", alt: [], hint: "Adjective + preposition (good at) takes the gerund." },
      { type: "error", instruction: "Find the error.", sentence: "My doctor told me to give up to smoke immediately.", errorIndex: [6, 7], correction: ["smoking"], hint: "Phrasal verbs ending in prepositions (give up, keep on) take the gerund." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The movie was so funny that I couldn't help ________.", options: ["to laugh", "laughing", "laugh", "laughed"], correct: 1, hint: "The idiom 'can't help' (can't stop myself) takes the gerund." },
      { type: "gap", instruction: "Fill in the correct form: (go)", sentence: "I don't feel like ___ out tonight; let's stay in.", answer: "going", alt: [], hint: "'Feel like' takes the gerund." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "If you don't wear a helmet, you risk _1_ your head, and no one can deny _2_ that.", bank: ["injuring", "to injure", "knowing", "to know"], blanks: { "_1_": "injuring", "_2_": "knowing" }, hint: "Both 'risk' and 'deny' take the gerund." },
      { type: "error", instruction: "Find the error.", sentence: "The thief finally admitted to steal the diamond.", errorIndex: [4, 5], correction: ["to", "stealing"], hint: "Admit to + gerund (the 'to' is a preposition here)." },
      { type: "mc", instruction: "Select the correct phrase.", sentence: "It's no use ________ over spilled milk.", options: ["to cry", "cry", "crying", "cried"], correct: 2, hint: "The phrase 'It's no use' is followed by the gerund." },
      { type: "gap", instruction: "Fill in the correct form: (smoke)", sentence: "___ is strictly forbidden in this building.", answer: "Smoking", alt: [], hint: "When a verb acts as the subject of a sentence, use the gerund." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I am not used to _1_ up so early, but I will get used to _2_ it.", bank: ["waking", "to wake", "doing", "to do"], blanks: { "_1_": "waking", "_2_": "doing" }, hint: "In 'be used to' and 'get used to', the 'to' is a preposition -> gerund." },
      { type: "gap", instruction: "Fill in the correct form: (be)", sentence: "He apologized for ___ so rude yesterday.", answer: "being", alt: [], hint: "Preposition (for) -> gerund." },
      { type: "error", instruction: "Find the error.", sentence: "We should postpone to make a decision until tomorrow.", errorIndex: [2, 3], correction: ["making"], hint: "'Postpone' (delay, put off) takes the gerund." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Can you imagine ________ in a mansion like that?", options: ["living", "to live", "live", "lived"], correct: 0, hint: "'Imagine' takes the gerund." },
      { type: "gap", instruction: "Fill in the correct form: (play)", sentence: "I really miss ___ football with my friends from school.", answer: "playing", alt: [], hint: "'Miss' takes the gerund." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He kept _1_ me, even though I asked him to stop _2_ it.", bank: ["interrupting", "to interrupt", "doing", "to do"], blanks: { "_1_": "interrupting", "_2_": "doing" }, hint: "'Keep' (continue) takes the gerund." },
      { type: "error", instruction: "Find the error.", sentence: "She spends all her free time to read novels.", errorIndex: [5, 6], correction: ["reading"], hint: "'Spend time/money' is followed by the gerund." },

      // --- CORE INFINITIVES (21-40) ---
      { type: "gap", instruction: "Fill in the correct form: (buy)", sentence: "I can't afford ___ a new car this year.", answer: "to buy", alt: [], hint: "'Afford' takes the to-infinitive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The suspect refused ________ any questions without his lawyer.", options: ["answering", "to answer", "answer", "answered"], correct: 1, hint: "'Refuse' takes the to-infinitive." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "She promised _1_ me, but she managed _2_ everything up.", bank: ["to help", "helping", "to mess", "messing"], blanks: { "_1_": "to help", "_2_": "to mess" }, hint: "'Promise' and 'manage' take the to-infinitive." },
      { type: "error", instruction: "Find the error.", sentence: "He seems being very upset about the news.", errorIndex: [2], correction: ["to be"], hint: "'Seem' takes the to-infinitive." },
      { type: "gap", instruction: "Fill in the correct form: (sleep)", sentence: "When the teacher looked at him, he pretended ___.", answer: "to be sleeping", alt: ["to sleep"], hint: "'Pretend' takes the to-infinitive (or continuous infinitive)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The boss threatened ________ him if he was late again.", options: ["firing", "to fire", "fire", "fired"], correct: 1, hint: "'Threaten' takes the to-infinitive." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "People tend _1_ more careful when they are preparing _2_ a test.", bank: ["to be", "being", "to take", "taking"], blanks: { "_1_": "to be", "_2_": "to take" }, hint: "'Tend' and 'prepare' take the to-infinitive." },
      { type: "gap", instruction: "Fill in the correct form: (finish)", sentence: "I want you ___ this report by 5 PM.", answer: "to finish", alt: [], hint: "Object + to-infinitive (want someone TO DO something)." },
      { type: "error", instruction: "Find the error.", sentence: "The doctor advised me resting for a few days.", errorIndex: [3], correction: ["to rest"], hint: "Advise someone TO DO something." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I was extremely surprised ________ the exam.", options: ["passing", "to pass", "pass", "passed"], correct: 1, hint: "Adjective + to-infinitive (happy to see you, surprised to pass)." },
      { type: "gap", instruction: "Fill in the correct form: (walk)", sentence: "It was too far ___ to the station, so we took a taxi.", answer: "to walk", alt: [], hint: "too + adjective + to-infinitive." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "He isn't tall enough _1_ the shelf, but he offered _2_ a ladder.", bank: ["to reach", "reaching", "to fetch", "fetching"], blanks: { "_1_": "to reach", "_2_": "to fetch" }, hint: "adjective + enough + to-infinitive." },
      { type: "error", instruction: "Find the error.", sentence: "I rushed to the station only for finding that the train had left.", errorIndex: [5, 6], correction: ["to", "find"], hint: "'Only to find' is a fixed infinitive phrase showing a disappointing result." },
      { type: "gap", instruction: "Fill in the correct form: (pay)", sentence: "They agreed ___ for the damages.", answer: "to pay", alt: [], hint: "'Agree' takes the to-infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Don't hesitate ________ me if you have any questions.", options: ["calling", "to call", "call", "called"], correct: 1, hint: "'Hesitate' takes the to-infinitive." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "We are planning _1_ a business, and we hope _2_ successful.", bank: ["to start", "starting", "to be", "being"], blanks: { "_1_": "to start", "_2_": "to be" }, hint: "'Plan' and 'hope' take the to-infinitive." },
      { type: "error", instruction: "Find the error.", sentence: "I warned him not touching the hot stove.", errorIndex: [3, 4], correction: ["not", "to touch"], hint: "Warn someone NOT TO DO something." },
      { type: "gap", instruction: "Fill in the correct form: (drive)", sentence: "She is learning how ___ a manual car.", answer: "to drive", alt: [], hint: "Learn / know / understand + HOW + to-infinitive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I would like ________ a table for two, please.", options: ["booking", "to book", "book", "booked"], correct: 1, hint: "'Would like / would love / would prefer' always take the to-infinitive." },
      { type: "gap", instruction: "Fill in the correct form: (invite)", sentence: "He didn't know whether ___ her or not.", answer: "to invite", alt: [], hint: "Question word (whether, what, where) + to-infinitive." },

      // --- CHANGE IN MEANING (The C1 Traps) (41-60) ---
      { type: "gap", instruction: "Meaning: Quit a habit. Fill in the form: (smoke)", sentence: "After his heart attack, he had to stop ___.", answer: "smoking", alt: [], hint: "Stop + ing = to quit an activity." },
      { type: "gap", instruction: "Meaning: Pause to do something else. Fill in the form: (smoke)", sentence: "We were driving for hours, so we stopped ___ a cigarette.", answer: "to smoke", alt: [], hint: "Stop + to-infinitive = to pause in order to do a new action (purpose)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Please remember ________ the door when you leave.", options: ["locking", "to lock", "lock", "locked"], correct: 1, hint: "Remember + to-inf = a task you must not forget to do in the future." },
      { type: "drag", instruction: "Drag the verbs based on meaning.", sentence: "I remember _1_ to the beach as a kid. Did you remember _2_ the tickets for today?", bank: ["going", "to go", "bringing", "to bring"], blanks: { "_1_": "going", "_2_": "to bring" }, hint: "Remember + ing = a memory of the past. Remember + to = a task." },
      { type: "error", instruction: "Find the error.", sentence: "I will never forget to meet the President; it was amazing.", errorIndex: [3, 4], correction: ["meeting"], hint: "Forget + ing = losing a memory of a past event. Forget + to = forgetting a task." },
      { type: "gap", instruction: "Meaning: Forgot to do a task. (lock)", sentence: "Oh no! I forgot ___ the back door!", answer: "to lock", alt: [], hint: "Forget + to-inf = fail to do a required task." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "We regret ________ you that your application has been rejected.", options: ["informing", "to inform", "inform", "informed"], correct: 1, hint: "Regret + to-inf = formal way of giving bad news." },
      { type: "gap", instruction: "Meaning: Wishing a past action hadn't happened. (say)", sentence: "I really regret ___ those terrible things to her.", answer: "saying", alt: [], hint: "Regret + ing = being sorry for a past action." },
      { type: "drag", instruction: "Drag based on effort vs experiment.", sentence: "I tried _1_ the heavy box, but I couldn't. Then I tried _2_ it across the floor.", bank: ["to lift", "lifting", "to push", "pushing"], blanks: { "_1_": "to lift", "_2_": "pushing" }, hint: "Try + to = difficult effort. Try + ing = an experiment/alternative method." },
      { type: "error", instruction: "Find the error.", sentence: "I have a headache. Have you tried to take an aspirin?", errorIndex: [6, 7], correction: ["taking"], hint: "Taking an aspirin isn't physically difficult; it's an experiment to see if it cures the headache. Try + ing." },
      { type: "gap", instruction: "Meaning: Next stage of a sequence. (become)", sentence: "After writing books, she went on ___ a successful movie director.", answer: "to become", alt: [], hint: "Go on + to-inf = move to the next stage or a new activity." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Despite the noise, the professor went on ________ for another hour.", options: ["to talk", "talking", "talk", "talked"], correct: 1, hint: "Go on + ing = continue doing the SAME activity." },
      { type: "drag", instruction: "Drag the verbs based on meaning.", sentence: "I didn't mean _1_ you. But taking this job will mean _2_ to a new city.", bank: ["to hurt", "hurting", "to move", "moving"], blanks: { "_1_": "to hurt", "_2_": "moving" }, hint: "Mean + to = intend. Mean + ing = involve / have as a consequence." },
      { type: "error", instruction: "Find the error.", sentence: "If we want to catch the train, it means to leave right now.", errorIndex: [7, 8], correction: ["leaving"], hint: "It involves leaving -> Mean + ing." },
      { type: "gap", instruction: "Fill in the correct form: (stop / buy)", sentence: "On my way home, I stopped ___ some bread.", answer: "to buy", alt: [], hint: "Paused my journey in order to buy bread." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I clearly remember ________ my keys on the table, but they are gone!", options: ["to leave", "leaving", "leave", "left"], correct: 1, hint: "A memory of a completed past action." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He tried _1_ the window, but it was stuck. So he tried _2_ the glass.", bank: ["to open", "opening", "to break", "breaking"], blanks: { "_1_": "to open", "_2_": "breaking" }, hint: "Effort (stuck window) vs Experiment (alternative method)." },
      { type: "error", instruction: "Find the error.", sentence: "I regret to spend all my money on that stupid game last week.", errorIndex: [1, 2], correction: ["regret", "spending"], hint: "Regretting a past action requires the gerund." },
      { type: "gap", instruction: "Fill in the correct form: (forget / bring)", sentence: "I'll never ___ my dog home for the first time.", answer: "forget bringing", alt: [], hint: "A memory of a past event." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The Prime Minister went on ________ the importance of the new law.", options: ["explaining", "to explain", "explain", "explained"], correct: 1, hint: "Moved to the next topic in his speech -> to-infinitive." },

      // --- ADVANCED MIXED & BARE INFINITIVES (61-80) ---
      { type: "gap", instruction: "Fill in the correct form: (cry)", sentence: "That sad movie always makes me ___.", answer: "cry", alt: [], hint: "Make someone DO something (Bare Infinitive - no 'to')." },
      { type: "error", instruction: "Find the error.", sentence: "My parents didn't let me to go to the party.", errorIndex: [4, 5], correction: ["me", "go"], hint: "Let someone DO something (Bare Infinitive)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I would rather ________ at home tonight than go out.", options: ["staying", "to stay", "stay", "stayed"], correct: 2, hint: "'Would rather' takes the bare infinitive." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "You had better _1_ now, or you'll be late. I'd rather _2_ the next train.", bank: ["leave", "to leave", "catch", "to catch"], blanks: { "_1_": "leave", "_2_": "catch" }, hint: "'Had better' and 'Would rather' take the bare infinitive." },
      { type: "gap", instruction: "Meaning: I saw the whole action from start to finish. (cross)", sentence: "I saw the blind man ___ the road.", answer: "cross", alt: [], hint: "Verbs of perception + object + bare infinitive = completed action." },
      { type: "gap", instruction: "Meaning: I saw it in progress, but not the end. (cross)", sentence: "I saw him ___ the road when the accident happened.", answer: "crossing", alt: [], hint: "Verbs of perception + object + gerund = action in progress." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I don't like ________ what to do.", options: ["telling", "to tell", "being told", "to be telling"], correct: 2, hint: "Passive gerund (being + V3)." },
      { type: "error", instruction: "Find the error.", sentence: "The criminal managed to escape without to be seen.", errorIndex: [6, 7, 8], correction: ["being", "seen"], hint: "Preposition (without) + passive gerund." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He was very proud of _1_ the marathon, and he hoped _2_ for the national team.", bank: ["having finished", "finishing", "to be chosen", "being chosen"], blanks: { "_1_": "having finished", "_2_": "to be chosen" }, hint: "Perfect gerund (having + V3) and Passive infinitive (to be + V3)." },
      { type: "gap", instruction: "Fill in the perfect infinitive: (leave)", sentence: "The thieves are believed ___ the country.", answer: "to have left", alt: [], hint: "to + have + V3 (action happened before the belief)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I strongly object ________ treated like a child.", options: ["to be", "being", "to being", "be"], correct: 2, hint: "Object TO + gerund (passive in this case)." },
      { type: "error", instruction: "Find the error.", sentence: "The politician finally confessed to steal the public funds.", errorIndex: [4, 5], correction: ["to", "stealing"], hint: "Confess TO + gerund." },
      { type: "gap", instruction: "Fill in the correct form: (complain)", sentence: "There is no point in ___ about the weather.", answer: "complaining", alt: [], hint: "There's no point in + gerund." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "I am accustomed to _1_ spicy food, so I don't mind _2_ this.", bank: ["eating", "to eat", "trying", "to try"], blanks: { "_1_": "eating", "_2_": "trying" }, hint: "Accustomed TO + gerund. Mind + gerund." },
      { type: "gap", instruction: "Fill in the correct form: (help)", sentence: "Instead of ___ me, you just sat there!", answer: "helping", alt: [], hint: "Instead of + gerund." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "She left the room without ________ a word.", options: ["say", "to say", "saying", "having said"], correct: 2, hint: "Without + gerund." },
      { type: "error", instruction: "Find the error.", sentence: "I prefer to read books to watching TV.", errorIndex: [2, 3], correction: ["reading"], hint: "Prefer DOING to DOING." },
      { type: "gap", instruction: "Fill in the correct form: (take)", sentence: "Why not ___ a break? You've been studying for hours.", answer: "take", alt: [], hint: "'Why not' is followed by the bare infinitive." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "During the holidays, he did nothing but _1_ video games. He didn't even try _2_.", bank: ["play", "to play", "to study", "studying"], blanks: { "_1_": "play", "_2_": "to study" }, hint: "'Do nothing but' + bare infinitive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I would prefer ________ tea rather than coffee.", options: ["drinking", "drink", "to drink", "drank"], correct: 2, hint: "Would prefer TO DO rather than DO." }
    ]
  },

  modal_verbs: {
    group: "2. Complex Structures",
    title: "Modal Verbs (Present, Past & Deduction)",
    rules: {
      summary: "Modals express obligation, necessity, ability and — most tricky for learners — how certain you are about something (deduction), both in the present and looking back at the past.",
      points: [
        { heading: "Obligation & Necessity", body: "must / have to = obligation (must often personal/internal, have to often external rules) — both work for present rules. mustn't = prohibition, but don't have to / needn't = no obligation, it's optional. This opposite-meaning pair is the classic trap. 'Must' has no past form — use 'had to' instead." },
        { heading: "Had Better & Ought To", body: "had better + bare infinitive is a strong warning ('You'd better hurry'), negative 'had better not'. 'Ought to' needs 'to' (unlike other modals) and behaves like 'should': 'You ought to apologize'." },
        { heading: "Present/Future Deduction", body: "must = I'm almost certain it's true ('You must be exhausted'). can't = I'm almost certain it's false ('That can't be John — he's in Australia'). might/may/could = it's possible (~50%). Never use 'mustn't' for deduction — that's a completely different, much rarer meaning." },
        { heading: "Past Deduction", body: "must have + V3 = certain about the past ('It must have rained last night'). can't have / couldn't have + V3 = certain it's impossible ('He can't have seen me'). might/may/could have + V3 = possible. The modal is always followed by 'have', never 'had'." },
        { heading: "Regret & Criticism (Past)", body: "should have + V3 = regret about something you didn't do ('I should have studied more'). shouldn't have + V3 = criticism of something that was done. could have + V3 = a missed opportunity. needn't have + V3 = you did something that turned out to be unnecessary (contrast with 'didn't need to', which means it was known to be unnecessary beforehand, so it wasn't done)." }
      ],
      examples: [
        { en: "You **mustn't** park here. / You **don't have to** finish today.", note: "Prohibition vs no obligation" },
        { en: "You've been travelling all day — you **must** be exhausted!", note: "Present deduction, high certainty" },
        { en: "The street is wet. It **must have rained** last night.", note: "Past deduction" },
        { en: "I failed the exam. I **should have studied** more.", note: "Regret about an omission" },
        { en: "I **needn't have bought** a gift — but thank you!", note: "Unnecessary action that was still done" }
      ],
      exceptions: [
        "'Mustn't' is never used for logical deduction — use can't/couldn't instead.",
        "Past modals always take 'have', not 'had': 'must have gone', never 'must had gone'."
      ]
    },
    exercises: [
      // --- OBLIGATION, PROHIBITION & LACK OF NECESSITY (1-20) ---
      { type: "mc", instruction: "Choose the correct modal.", sentence: "You ________ wear a seatbelt in the car; it's the law.", options: ["must", "have to", "should", "both A and B are correct"], correct: 3, hint: "For strong obligations or rules, both 'must' and 'have to' can be used in the present." },
      { type: "gap", instruction: "Fill in the modal (must vs have to):", sentence: "I ___ go to the dentist tomorrow because I have a terrible toothache.", answer: "must", alt: ["have to"], hint: "Internal obligation (speaker feels it's necessary)." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "At my school, we _1_ wear a uniform, but on the last day of term we _2_.", bank: ["have to", "don't have to", "must", "mustn't"], blanks: { "_1_": "have to", "_2_": "don't have to" }, hint: "Contrast an external obligation with its absence." },
      { type: "error", instruction: "Find the error.", sentence: "You mustn't to park here; it is a restricted zone.", errorIndex: [1, 2], correction: ["mustn't"], hint: "Modals are followed by the bare infinitive (no 'to')." },
      { type: "mc", instruction: "Select the correct meaning.", sentence: "You don't have to finish the report today.", options: ["You are forbidden from finishing it.", "It is a bad idea to finish it.", "It is not necessary to finish it today.", "You cannot finish it."], correct: 2, hint: "'Don't have to' means there is no obligation. You can if you want, but you don't need to." },
      { type: "gap", instruction: "Fill in the correct modal: (mustn't / don't have to)", sentence: "You ___ touch that wire; it's extremely dangerous!", answer: "mustn't", alt: ["must not"], hint: "Prohibition (it is not allowed / it is dangerous)." },
      { type: "drag", instruction: "Drag the modals.", sentence: "You _1_ pay for the tickets; they are free. But you _2_ lose them!", bank: ["don't have to", "mustn't", "shouldn't", "needn't"], blanks: { "_1_": "don't have to", "_2_": "mustn't" }, hint: "Lack of necessity vs Prohibition." },
      { type: "error", instruction: "Find the error.", sentence: "We haven't to wake up early tomorrow because it's Sunday.", errorIndex: [1, 2], correction: ["don't", "have to"], hint: "The negative of 'have to' requires the auxiliary 'do' (don't/doesn't have to)." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "We ________ rush. The train doesn't leave for another hour.", options: ["mustn't", "can't", "needn't", "shouldn't"], correct: 2, hint: "'Needn't' is a formal alternative to 'don't have to'." },
      { type: "gap", instruction: "Fill in the past form of 'must':", sentence: "I ___ work late yesterday to finish the project.", answer: "had to", alt: [], hint: "'Must' has no past tense form — you need a different expression of obligation." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "In the past, people _1_ work on Saturdays, but now they _2_.", bank: ["had to", "must", "don't have to", "mustn't"], blanks: { "_1_": "had to", "_2_": "don't have to" }, hint: "Past obligation vs Present lack of necessity." },
      { type: "error", instruction: "Find the error.", sentence: "He doesn't needs to bring anything to the party.", errorIndex: [1, 2], correction: ["doesn't", "need"], hint: "After 'doesn't', the main verb must be the bare infinitive (no 's')." },
      { type: "gap", instruction: "Fill in the correct modal: (mustn't / needn't)", sentence: "You ___ apologize; it wasn't your fault at all.", answer: "needn't", alt: ["don't have to", "don't need to"], hint: "Lack of necessity." },
      { type: "mc", instruction: "Select the correct form.", sentence: "You ________ better leave now, or you'll miss the bus.", options: ["had", "would", "should", "ought"], correct: 0, hint: "'Had better' is a strong recommendation or warning." },
      { type: "error", instruction: "Find the error.", sentence: "You had better to study for the test.", errorIndex: [2, 3], correction: ["better", "study"], hint: "'Had better' is followed by the bare infinitive." },
      { type: "gap", instruction: "Fill in the negative of 'had better':", sentence: "You had ___ tell him the truth, or he will be furious.", answer: "better", alt: [], hint: "Warning/strong advice." },
      { type: "drag", instruction: "Drag the modals.", sentence: "You _1_ to see a doctor about that cough. You really _2_ ignore it.", bank: ["ought", "should", "shouldn't", "mustn't"], blanks: { "_1_": "ought", "_2_": "shouldn't" }, hint: "'Ought' is followed by 'to'. 'Shouldn't' takes the bare infinitive." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Do you think I ________ apply for the job?", options: ["ought", "must", "should", "had better"], correct: 2, hint: "Asking for advice usually uses 'should'." },
      { type: "error", instruction: "Find the error.", sentence: "Students are not allowed use their phones during the exam.", errorIndex: [3, 4], correction: ["allowed", "to use"], hint: "'Be allowed' must be followed by the to-infinitive." },
      { type: "gap", instruction: "Fill in the past form of 'can' (ability):", sentence: "When I was younger, I ___ run five miles without stopping.", answer: "could", alt: ["was able to"], hint: "General past ability." },

      // --- PRESENT/FUTURE DEDUCTION (21-40) ---
      { type: "mc", instruction: "Select the correct modal of deduction.", sentence: "You've been travelling all day. You ________ be exhausted!", options: ["can", "must", "should", "ought to"], correct: 1, hint: "99% certainty that something is true (logical deduction)." },
      { type: "gap", instruction: "Fill in the correct modal: (must / can't)", sentence: "That ___ be John at the door. He is currently in Australia!", answer: "can't", alt: ["cannot"], hint: "99% certainty that something is FALSE." },
      { type: "drag", instruction: "Drag the modals of deduction.", sentence: "It _1_ be true! He _2_ be joking.", bank: ["can't", "mustn't", "must", "should"], blanks: { "_1_": "can't", "_2_": "must" }, hint: "Impossibility vs Certainty. (We don't use 'mustn't' for logical deductions)." },
      { type: "error", instruction: "Find the error.", sentence: "He has three massive houses. He mustn't be poor.", errorIndex: [4], correction: ["can't"], hint: "To say 'I am certain he is NOT poor', we use 'can't', never 'mustn't'." },
      { type: "gap", instruction: "Fill in the correct modal: (must / might)", sentence: "I'm not sure where she is. She ___ be in the library.", answer: "might", alt: ["may", "could"], hint: "50% possibility." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "Don't call him now. He ________ be sleeping.", options: ["must", "might", "can't", "might be sleeping"], correct: 3, hint: "Action possibly in progress right now (Modal + be + V-ing)." },
      { type: "drag", instruction: "Complete the continuous deduction.", sentence: "They haven't eaten all day. They _1_ _2_ starving.", bank: ["must", "can't", "be", "being"], blanks: { "_1_": "must", "_2_": "be" }, hint: "Logical deduction of a current state." },
      { type: "error", instruction: "Find the error.", sentence: "It is snowing heavily. It can be very cold outside.", errorIndex: [3], correction: ["must"], hint: "'Can' is generally not used for specific logical deductions. Use 'must' (certainty) or 'could' (possibility)." },
      { type: "gap", instruction: "Fill in the correct modal: (must / can't)", sentence: "You just ate a huge pizza! You ___ be hungry again.", answer: "can't", alt: ["cannot"], hint: "Logical impossibility." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Who is that man? - I don't know, it ________ be the new manager.", options: ["must", "can't", "could", "should"], correct: 2, hint: "Possibility (50% sure)." },
      { type: "drag", instruction: "Drag the modals.", sentence: "The lights are off. They _1_ be out. They _2_ be at home.", bank: ["must", "can't", "could", "might"], blanks: { "_1_": "must", "_2_": "can't" }, hint: "Certainty (true) vs Certainty (false)." },
      { type: "error", instruction: "Find the error.", sentence: "She hasn't slept for 24 hours. She ought be tired.", errorIndex: [4, 5], correction: ["ought", "to be"], hint: "'Ought' must be followed by 'to'." },
      { type: "gap", instruction: "Fill in the correct modal: (may / must)", sentence: "Take an umbrella. It ___ rain later.", answer: "may", alt: ["might", "could"], hint: "Future possibility." },
      { type: "mc", instruction: "Choose the correct phrasing.", sentence: "I can't find my keys. I ________ them at the office.", options: ["must leave", "must be leaving", "must have left", "have to leave"], correct: 2, hint: "Wait, this is a past deduction! Modal + have + V3." },
      { type: "gap", instruction: "Fill in the continuous deduction:", sentence: "He isn't answering his phone. He might ___ driving.", answer: "be", alt: [], hint: "modal + be + -ing." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She speaks perfect French. She _1_ from France, or she _2_ have lived there.", bank: ["must be", "can't be", "might", "should"], blanks: { "_1_": "must be", "_2_": "might" }, hint: "Certain deduction vs Possibility." },
      { type: "error", instruction: "Find the error.", sentence: "You must to be joking!", errorIndex: [1, 2], correction: ["must"], hint: "Modals take the bare infinitive." },
      { type: "mc", instruction: "Select the correct form.", sentence: "He ________ be a doctor; he doesn't know anything about medicine!", options: ["mustn't", "can't", "might not", "shouldn't"], correct: 1, hint: "Logical impossibility." },
      { type: "gap", instruction: "Fill in the modal: (could / must)", sentence: "Don't eat that! It ___ be poisonous.", answer: "could", alt: ["might", "may"], hint: "Possibility/Warning." },
      { type: "drag", instruction: "Drag the modals.", sentence: "That _1_ be her car. Hers is blue, and this one is red. It _2_ belong to someone else.", bank: ["can't", "mustn't", "must", "might"], blanks: { "_1_": "can't", "_2_": "must" }, hint: "Impossibility vs Certainty." },

      // --- PAST MODALS OF DEDUCTION (Certainty, Possibility, Impossibility) (41-60) ---
      { type: "mc", instruction: "Choose the correct past deduction.", sentence: "The street is completely wet. It ________ last night.", options: ["must rain", "must have rained", "should rain", "had to rain"], correct: 1, hint: "99% certainty about a PAST event (Must + have + V3)." },
      { type: "gap", instruction: "Fill in the past deduction (Certainty):", sentence: "You got 100% on the test! You ___ have studied very hard.", answer: "must", alt: [], hint: "Certainty in the past." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "He ignored my wave. He _1_ _2_ seen me.", bank: ["can't", "mustn't", "have", "had"], blanks: { "_1_": "can't", "_2_": "have" }, hint: "99% certainty it did NOT happen in the past (Can't/Couldn't + have + V3)." },
      { type: "error", instruction: "Find the error.", sentence: "He mustn't have committed the crime because he was in jail at the time.", errorIndex: [1], correction: ["can't", "couldn't"], hint: "We NEVER use 'mustn't have' for logical deduction. Use 'can't have' or 'couldn't have'." },
      { type: "gap", instruction: "Fill in the past deduction (Impossibility):", sentence: "She ___ have stolen the money. She was with me all day.", answer: "can't", alt: ["couldn't"], hint: "Impossibility in the past." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Where is my umbrella? - I don't know, you ________ it on the train.", options: ["might leave", "must have left", "might have left", "could leave"], correct: 2, hint: "50% possibility about a past event (Might/May/Could + have + V3)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The window is broken. A bird _1_ _2_ flown into it.", bank: ["must", "might", "have", "had"], blanks: { "_1_": "might", "_2_": "have" }, hint: "Past possibility." },
      { type: "error", instruction: "Find the error.", sentence: "He could had been delayed by the traffic.", errorIndex: [1, 2], correction: ["could", "have"], hint: "Modals are ALWAYS followed by 'have' (never 'had'), even for past deductions." },
      { type: "gap", instruction: "Fill in the past deduction (Possibility):", sentence: "I can't find my passport. I ___ have dropped it in the taxi.", answer: "may", alt: ["might", "could"], hint: "Past possibility." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "It ________ been a ghost. Ghosts don't exist!", options: ["mustn't have", "can't have", "shouldn't have", "might not have"], correct: 1, hint: "Impossibility in the past." },
      { type: "drag", instruction: "Drag the modals.", sentence: "He _1_ have forgotten our meeting, or he _2_ have gotten lost.", bank: ["might", "can't", "could", "must"], blanks: { "_1_": "might", "_2_": "could" }, hint: "Two past possibilities." },
      { type: "error", instruction: "Find the error.", sentence: "The ancient Egyptians must have build the pyramids with great skill.", errorIndex: [3], correction: ["built"], hint: "Modal + have + Past Participle (V3)." },
      { type: "gap", instruction: "Fill in the correct verb form:", sentence: "She must have ___ asleep because she didn't hear the phone ring.", answer: "fallen", alt: ["been"], hint: "V3 of fall (or be)." },
      { type: "mc", instruction: "Select the correct deduction.", sentence: "There's no pizza left. The kids ________ it all.", options: ["must have eaten", "can't have eaten", "should have eaten", "had to eat"], correct: 0, hint: "Logical conclusion about the past." },
      { type: "error", instruction: "Find the error.", sentence: "I might have leave my laptop at the coffee shop.", errorIndex: [2], correction: ["left"], hint: "V3 required: left." },
      { type: "gap", instruction: "Fill in the continuous past deduction:", sentence: "He looked exhausted. He must have been ___ hard all day.", answer: "working", alt: ["studying"], hint: "Modal + have been + V-ing." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She _1_ have been happy when she heard the news, because she was smiling for days. He, on the other hand, _2_ have been pleased, because he stormed out of the room.", bank: ["must", "can't", "might", "should"], blanks: { "_1_": "must", "_2_": "can't" }, hint: "Positive evidence supports one deduction; contradictory evidence rules it out." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "They ________ the museum. It was closed all day yesterday.", options: ["couldn't visit", "can't have visited", "must not have visited", "didn't have to visit"], correct: 1, hint: "Logical impossibility." },
      { type: "error", instruction: "Find the error.", sentence: "He may has forgotten his password.", errorIndex: [1, 2], correction: ["may", "have"], hint: "Modals are followed by the bare infinitive 'have', never 'has'." },
      { type: "gap", instruction: "Fill in the past deduction (Negative possibility):", sentence: "She is very late. She ___ not have caught the 8:00 bus.", answer: "might", alt: ["may"], hint: "It is possible she didn't catch it." },

      // --- PAST MODALS OF REGRET, CRITICISM & NECESSITY (61-80) ---
      { type: "mc", instruction: "Choose the correct form.", sentence: "I failed the exam. I ________ more.", options: ["must have studied", "should have studied", "could have studied", "had to study"], correct: 1, hint: "Regret about a past action (Should + have + V3)." },
      { type: "gap", instruction: "Fill in the modal of regret/criticism:", sentence: "You ___ have told me you were going to be late!", answer: "should", alt: ["ought to"], hint: "Criticizing a past failure to act." },
      { type: "drag", instruction: "Drag the verbs.", sentence: "He _1_ have driven so fast. It was extremely dangerous.", bank: ["shouldn't", "mustn't", "couldn't", "can't"], blanks: { "_1_": "shouldn't" }, hint: "Criticism of an action that DID happen." },
      { type: "error", instruction: "Find the error.", sentence: "I ought to have listen to my parents' advice.", errorIndex: [3], correction: ["listened"], hint: "Ought to have + V3." },
      { type: "gap", instruction: "Fill in the correct modal: (should / shouldn't)", sentence: "I ___ have eaten that third slice of cake. I feel sick now.", answer: "shouldn't", alt: ["should not"], hint: "Regret about doing something." },
      { type: "mc", instruction: "Select the correct form.", sentence: "You ________ yelled at her. That was very rude.", options: ["shouldn't have", "mustn't have", "can't have", "didn't have to"], correct: 0, hint: "Criticism of a past action." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I _1_ have gone to the party, but I decided to stay home instead.", bank: ["could", "should", "must", "can"], blanks: { "_1_": "could" }, hint: "Past opportunity that was not taken (Could + have + V3)." },
      { type: "error", instruction: "Find the error.", sentence: "We didn't needed to buy a ticket because entry was free.", errorIndex: [1, 2], correction: ["didn't", "need"], hint: "After 'didn't', use the bare infinitive." },
      { type: "gap", instruction: "Fill in the correct form: (need)", sentence: "You ___ have bought a gift! It wasn't necessary, but thank you.", answer: "needn't", alt: ["need not"], hint: "An action was performed, but it was unnecessary (Needn't have + V3)." },
      { type: "mc", instruction: "Choose the correct meaning.", sentence: "I didn't need to wake up early.", options: ["I woke up early, but it was a waste of time.", "It wasn't necessary, so I didn't do it.", "I wasn't allowed to wake up early."], correct: 1, hint: "'Didn't need to' usually implies the action didn't happen because it wasn't necessary." },
      { type: "drag", instruction: "Drag based on meaning.", sentence: "I _1_ an umbrella, because it didn't rain at all. (But I carried it all day!).", bank: ["needn't have brought", "didn't need to bring", "mustn't have brought", "shouldn't bring"], blanks: { "_1_": "needn't have brought" }, hint: "Action performed, but unnecessary = needn't have + V3." },
      { type: "error", instruction: "Find the error.", sentence: "You ought not have said that to him.", errorIndex: [2, 3], correction: ["not", "to have"], hint: "The negative is 'ought not to have'." },
      { type: "gap", instruction: "Fill in the correct form:", sentence: "She could ___ won the race if she hadn't twisted her ankle.", answer: "have", alt: [], hint: "Past possibility / missed opportunity." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Why are you completely wet? You ________ an umbrella!", options: ["must have taken", "should have taken", "could have taken", "had to take"], correct: 1, hint: "Criticism for not doing something." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "We _1_ the train, but we decided it would be cheaper to take the bus.", bank: ["could have taken", "must have taken", "should have taken", "would take"], blanks: { "_1_": "could have taken" }, hint: "An option that existed in the past." },
      { type: "error", instruction: "Find the error.", sentence: "He should has apologized for his mistake.", errorIndex: [1, 2], correction: ["should", "have"], hint: "Modals take the bare infinitive 'have'." },
      { type: "gap", instruction: "Fill in the correct modal: (needn't / didn't)", sentence: "I ___ have cooked dinner; they brought pizza!", answer: "needn't", alt: ["need not"], hint: "Cooked unnecessarily." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The concert was cancelled, so we ________ go after all.", options: ["needn't have", "didn't have to", "shouldn't have", "mustn't"], correct: 1, hint: "Lack of past necessity (we didn't do it)." },
      { type: "error", instruction: "Find the error.", sentence: "You must had been terrified during the earthquake.", errorIndex: [1, 2], correction: ["must", "have"], hint: "Past deduction requires 'have'." },
      { type: "gap", instruction: "Fill in the correct modal:", sentence: "I ___ have studied medicine, but I chose to study law instead.", answer: "could", alt: ["might", "would"], hint: "Unfulfilled past possibility." }
    ]
  },

  relative_participle_clauses: {
    group: "2. Complex Structures",
    title: "Relative Clauses & Participles",
    rules: {
      summary: "Relative clauses add information about a noun using who/which/that/whose/whom. Whether you can drop the pronoun, use a comma, or reduce the whole clause to a participle depends on a few precise rules.",
      points: [
        { heading: "Core Pronouns", body: "who/whom = people, which = things, whose = possession, why = with 'reason', when = with a time noun (not 'where', which is for places). After a preposition, formal style requires 'whom' or 'which': 'the manager to whom I spoke'. After indefinite pronouns (everything, nothing, all, something), always use 'that', never 'which'." },
        { heading: "Defining vs Non-Defining", body: "A defining clause identifies which one and has no commas ('The man who stole the car was arrested'). A non-defining clause just adds extra information and needs commas ('My brother, who lives in New York, is a doctor'). 'That' is banned in non-defining clauses — you must use who/which. Non-defining 'which' can also refer back to a whole previous idea: 'He passed the exam, which surprised everyone.'" },
        { heading: "Contact Clauses & Prepositions", body: "You can only omit the relative pronoun when it is the object of the clause, never the subject, and never in a non-defining (comma) clause. A stranded preposition can stay at the end informally ('the song you were listening to') or move to the front formally with whom/which ('the song to which you were listening'). 'That' can never follow a preposition directly." },
        { heading: "Present Participle Clauses (-ing)", body: "An active relative clause can be reduced to -ing: 'the man who is standing there' → 'the man standing there'. -ing clauses can also replace 'because/as/since': 'Not knowing his number, I couldn't call him.' The subject of the participle must match the subject of the main clause, or you get a dangling participle error." },
        { heading: "Past & Perfect Participle Clauses", body: "A passive relative clause reduces to V3: 'the book which was written by Tolkien' → 'the book written by Tolkien'. 'Having + V3' shows an action completed before the main clause ('Having finished the test, he left'); 'Having been + V3' is its passive form." }
      ],
      examples: [
        { en: "The manager to **whom** I spoke was very helpful.", note: "Formal preposition + whom" },
        { en: "Everything **that** he said was a lie.", note: "'that' after an indefinite pronoun" },
        { en: "He passed the exam, **which** surprised everyone.", note: "Non-defining 'which' referring to the whole clause" },
        { en: "The man **standing** there is my uncle.", note: "Reduced active participle clause" },
        { en: "**Having finished** the test, he left.", note: "Perfect participle — completed before the main clause" }
      ],
      exceptions: [
        "'That' can never appear directly after a comma or directly after a preposition.",
        "Dangling participles are a classic exam trap: 'Walking down the street, a dog bit me' wrongly implies the dog was walking."
      ]
    },
    exercises: [
      // --- CORE RELATIVE PRONOUNS (who, which, that, whose, whom) (1-15) ---
      { type: "gap", instruction: "Fill in the correct relative pronoun: (who / which)", sentence: "The man ___ stole the car was arrested yesterday.", answer: "who", alt: ["that"], hint: "The man is a person, not a thing — pick the pronoun used for people." },
      { type: "mc", instruction: "Select the correct pronoun.", sentence: "I lost the book ________ I borrowed from the library.", options: ["who", "whose", "which", "whom"], correct: 2, hint: "Use 'which' or 'that' for things." },
      { type: "drag", instruction: "Drag the correct pronouns.", sentence: "The girl _1_ dog bit me is the one _2_ lives next door.", bank: ["whose", "who", "whom", "which"], blanks: { "_1_": "whose", "_2_": "who" }, hint: "'Whose' shows possession (the dog of the girl)." },
      { type: "error", instruction: "Find the error.", sentence: "The laptop who I bought yesterday is already broken.", errorIndex: [2], correction: ["which", "that"], hint: "A laptop is a thing, not a person." },
      { type: "gap", instruction: "Fill in the correct relative pronoun: (who / whose / whom)", sentence: "The woman ___ car was stolen called the police.", answer: "whose", alt: [], hint: "Possession: the car belongs to the woman." },
      { type: "mc", instruction: "Choose the correct formal pronoun.", sentence: "The manager to ________ I spoke was very helpful.", options: ["who", "which", "whom", "whose"], correct: 2, hint: "After a preposition (to, for, with), you must use 'whom' for people in formal English." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The reason _1_ I moved was that I found a job in the city _2_ I now live.", bank: ["why", "where", "which", "that"], blanks: { "_1_": "why", "_2_": "where" }, hint: "One clause explains a cause, the other names a location." },
      { type: "error", instruction: "Find the error.", sentence: "Summer is the season where I feel happiest.", errorIndex: [4], correction: ["when"], hint: "Summer is a time, so use 'when', not 'where'." },
      { type: "gap", instruction: "Fill in the correct pronoun:", sentence: "Do you know the reason ___ she is crying?", answer: "why", alt: [], hint: "The word 'reason' is followed by a specific relative adverb, not 'which' or 'that'." },
      { type: "mc", instruction: "Select the correct phrase.", sentence: "I met two brothers, ________ were doctors.", options: ["both of who", "both of whom", "both of which", "both of them"], correct: 1, hint: "Quantifiers (some of, both of, neither of) + whom for people." },
      { type: "error", instruction: "Find the error.", sentence: "I bought three books, none of who I have read yet.", errorIndex: [6], correction: ["which"], hint: "Books are things, so use 'none of which'." },
      { type: "drag", instruction: "Drag the correct pronouns.", sentence: "He is the teacher _1_ everyone respects, and _2_ classes are always full.", bank: ["whom", "who", "whose", "which"], blanks: { "_1_": "whom", "_2_": "whose" }, hint: "'Whom' is the object of 'respects'. 'Whose' shows possession of 'classes'." },
      { type: "gap", instruction: "Fill in the formal pronoun:", sentence: "The people with ___ I was travelling were very friendly.", answer: "whom", alt: [], hint: "Preposition + whom (for people)." },
      { type: "mc", instruction: "Choose the C1 rule.", sentence: "Everything ________ he said was a lie.", options: ["which", "what", "that", "who"], correct: 2, hint: "After indefinite pronouns (everything, nothing, all, something), we strongly prefer 'that', never 'which'." },
      { type: "error", instruction: "Find the error.", sentence: "All which glitters is not gold.", errorIndex: [1], correction: ["that"], hint: "After 'All', use 'that'." },

      // --- DEFINING VS NON-DEFINING (Commas and 'That') (16-30) ---
      { type: "mc", instruction: "Are commas needed here?", sentence: "My brother ________ lives in New York is a doctor. (I have three brothers).", options: ["My brother, who lives in New York, is a doctor.", "My brother who lives in New York is a doctor."], correct: 1, hint: "Defining: No commas. It tells us WHICH brother you mean out of the three." },
      { type: "mc", instruction: "Are commas needed here?", sentence: "My mother ________ lives in New York is a doctor. (I have only one mother).", options: ["My mother, who lives in New York, is a doctor.", "My mother who lives in New York is a doctor."], correct: 0, hint: "Non-Defining: Commas needed. We already know who your mother is; the clause is just extra information." },
      { type: "error", instruction: "Find the error. (Classic Abitur Trap)", sentence: "Paris, that is the capital of France, is beautiful.", errorIndex: [1], correction: ["which"], hint: "You CANNOT use 'that' in a non-defining relative clause (after a comma)." },
      { type: "gap", instruction: "Fill in the correct pronoun (who / which / that):", sentence: "My new car, ___ I bought last week, broke down yesterday.", answer: "which", alt: [], hint: "Non-defining clause (extra info). Cannot use 'that' after a comma." },
      { type: "drag", instruction: "Drag the punctuation.", sentence: "The Eiffel Tower _1_ which was built in 1889 _2_ is in Paris.", bank: [",", ".", "!", "?"], blanks: { "_1_": ",", "_2_": "," }, hint: "The Eiffel Tower is unique. The relative clause is extra info, so it needs commas." },
      { type: "mc", instruction: "Select the correct form.", sentence: "The shoes ________ are completely ruined.", options: [", which I wore yesterday,", ", that I wore yesterday,", "which I wore yesterday", "that I wore yesterday,"], correct: 2, hint: "Defining clause: tells us exactly WHICH shoes. No commas." },
      { type: "error", instruction: "Find the error.", sentence: "My grandfather, who he is 90 years old, still runs marathons.", errorIndex: [3], correction: ["-", "is"], hint: "The relative pronoun 'who' is the subject. Do not repeat the subject pronoun 'he'." },
      { type: "gap", instruction: "Fill in the correct pronoun:", sentence: "Stephen King, ___ books have sold millions of copies, is a master of horror.", answer: "whose", alt: [], hint: "Possession in a non-defining clause." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The sun _1_ _2_ is 150 million km away _3_ provides us with light.", bank: [",", "which", "that", "who"], blanks: { "_1_": ",", "_2_": "which", "_3_": "," }, hint: "Unique noun -> Non-defining -> Commas -> 'which' (not 'that')." },
      { type: "error", instruction: "Find the error.", sentence: "The Titanic that sank in 1912 was a luxury liner.", errorIndex: [2], correction: ["which"], hint: "The Titanic is unique. It requires commas and 'which'." },
      { type: "mc", instruction: "What does 'which' refer to here?", sentence: "He passed the exam, which surprised everyone.", options: ["The exam", "Everyone", "The whole fact that he passed"], correct: 2, hint: "When 'which' follows a comma at the end of a clause, it can refer to the entire previous sentence." },
      { type: "gap", instruction: "Fill in the correct pronoun (referring to the whole sentence):", sentence: "She offered to help me, ___ was very kind of her.", answer: "which", alt: [], hint: "This pronoun can refer back to an entire preceding clause, not just a single noun." },
      { type: "drag", instruction: "Drag the correct pronouns.", sentence: "The car _1_ he was driving, _2_ belonged to his dad, was completely destroyed.", bank: ["that", "which", "who", "whose"], blanks: { "_1_": "that", "_2_": "which" }, hint: "First clause is defining (no comma -> that/which). Second is non-defining (comma -> which)." },
      { type: "error", instruction: "Find the error.", sentence: "He didn't get the job, what made him very sad.", errorIndex: [5], correction: ["which"], hint: "Use ', which' to refer to a whole previous clause. Never use ', what'." },
      { type: "mc", instruction: "Select the correct punctuation.", sentence: "Students ________ will fail the course.", options: ["who do not study", ", who do not study, "], correct: 0, hint: "Defining: Only the specific students who don't study will fail. If you use commas, it means ALL students won't study and ALL will fail." },

      // --- CONTACT CLAUSES & PREPOSITIONS (31-45) ---
      { type: "mc", instruction: "Can we omit the relative pronoun here?", sentence: "The man WHO stole the car was arrested.", options: ["Yes, omit it.", "No, keep it."], correct: 1, hint: "You can only omit the pronoun if it is the OBJECT. Here, 'who' is the SUBJECT (doing the stealing)." },
      { type: "mc", instruction: "Can we omit the relative pronoun here?", sentence: "The book WHICH I read yesterday was great.", options: ["Yes, omit it.", "No, keep it."], correct: 0, hint: "'Which' is the OBJECT. 'I' is the subject. We can say 'The book I read yesterday...'" },
      { type: "gap", instruction: "Rewrite omitting the pronoun: \"The woman who I met...\"", sentence: "The woman ___ ___ was very nice.", answer: "I met", alt: [], hint: "Drop 'who' because 'I' is the subject." },
      { type: "drag", instruction: "Drag the correct words to form a contact clause.", sentence: "Is this the song _1_ _2_ _3_ _4_?", bank: ["you", "were", "listening", "to", "which", "that"], blanks: { "_1_": "you", "_2_": "were", "_3_": "listening", "_4_": "to" }, hint: "Omit the pronoun, keep the preposition at the end." },
      { type: "error", instruction: "Find the error.", sentence: "The people which we invited to the party didn't show up.", errorIndex: [2], correction: ["-", "who", "whom", "that"], hint: "You can omit it entirely ('The people we invited'), or use 'who/whom/that' for people. Never 'which'." },
      { type: "gap", instruction: "Rewrite using a formal preposition structure:", sentence: "The man who I spoke to... -> The man ___ ___ I spoke...", answer: "to whom", alt: [], hint: "Move the preposition before the pronoun, and use 'whom' for people." },
      { type: "mc", instruction: "Choose the most formal structure.", sentence: "The project ________ is very important.", options: ["which I am working on", "that I am working on", "on which I am working", "I am working on"], correct: 2, hint: "Preposition + which/whom is the most formal style." },
      { type: "drag", instruction: "Drag the correct forms for formal style.", sentence: "The company _1_ _2_ I work is going bankrupt.", bank: ["for", "which", "that", "where"], blanks: { "_1_": "for", "_2_": "which" }, hint: "Preposition + which." },
      { type: "error", instruction: "Find the error.", sentence: "The house in that I live is very old.", errorIndex: [2], correction: ["which"], hint: "You CANNOT use 'that' after a preposition in a relative clause." },
      { type: "gap", instruction: "Rewrite using a formal preposition structure:", sentence: "The knife that I cut the bread with... -> The knife ___ ___ I cut the bread...", answer: "with which", alt: [], hint: "Prep + which." },
      { type: "mc", instruction: "Select the grammatically correct sentence.", options: ["The person who I gave the book to.", "The person to who I gave the book.", "The person to whom I gave the book.", "Both A and C are correct."], correct: 3, hint: "A is informal, C is formal. B is wrong because 'who' cannot follow a preposition." },
      { type: "drag", instruction: "Complete the contact clause.", sentence: "I lost the watch _1_ _2_ _3_ me.", bank: ["my", "father", "gave", "which", "that"], blanks: { "_1_": "my", "_2_": "father", "_3_": "gave" }, hint: "Omit the pronoun entirely." },
      { type: "error", instruction: "Find the error.", sentence: "The bed on which I slept in was uncomfortable.", errorIndex: [5], correction: ["-"], hint: "Double preposition! You already put 'on' before 'which', don't leave 'in/on' at the end." },
      { type: "gap", instruction: "Fill in the missing words (formal):", sentence: "The evidence ___ ___ he relied was false.", answer: "on which", alt: ["upon which"], hint: "rely + on." },
      { type: "mc", instruction: "Can we omit the pronoun here?", sentence: "My mother, who I love very much, is a doctor.", options: ["Yes", "No"], correct: 1, hint: "You CANNOT omit relative pronouns in non-defining (comma) relative clauses, even if they are objects." },

      // --- PRESENT PARTICIPLE CLAUSES (-ing) (46-60) ---
      { type: "gap", instruction: "Reduce to a participle clause: \"The man who is standing there...\"", sentence: "The man ___ there is my uncle.", answer: "standing", alt: [], hint: "Active relative clauses can be reduced to an -ing participle." },
      { type: "mc", instruction: "Select the correct participle clause.", sentence: "People ________ late will not be allowed in.", options: ["who arriving", "arrived", "arriving", "to arrive"], correct: 2, hint: "Replaces 'who arrive'." },
      { type: "drag", instruction: "Drag the correct forms to reduce the clause.", sentence: "Any student _1_ to leave early must sign this paper. -> Any student _2_ to leave early...", bank: ["who wants", "wanting", "wanted", "wants"], blanks: { "_1_": "who wants", "_2_": "wanting" }, hint: "Active verb -> -ing participle." },
      { type: "error", instruction: "Find the error.", sentence: "The train arriving at platform 3 is come from London.", errorIndex: [6], correction: ["coming"], hint: "Grammar clash in the main clause." },
      { type: "gap", instruction: "Reduce: \"Because he felt sick, he went to bed.\"", sentence: "___ sick, he went to bed.", answer: "Feeling", alt: [], hint: "Participle clauses can replace 'because/as/since' clauses." },
      { type: "mc", instruction: "Choose the correct meaning.", sentence: "Walking down the street, I saw a friend.", options: ["I was walking down the street when I saw a friend.", "My friend was walking down the street when I saw him.", "Because I walked down the street, I saw a friend."], correct: 0, hint: "Simultaneous action. The subject of the participle (walking) must be the subject of the main clause (I)." },
      { type: "error", instruction: "Find the dangling participle error.", sentence: "Walking down the street, a dog bit me.", errorIndex: [0, 1, 2, 3], correction: ["While", "I", "was", "walking"], hint: "Dangling participle! The sentence literally means the dog was walking down the street. The subjects must match." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "_1_ the door, he walked into the room. _2_ around, he saw the mess.", bank: ["Opening", "Opened", "Looking", "Looked"], blanks: { "_1_": "Opening", "_2_": "Looking" }, hint: "Two active simultaneous/immediate actions." },
      { type: "gap", instruction: "Reduce: \"As I didn't know his number, I couldn't call him.\"", sentence: "___ ___ his number, I couldn't call him.", answer: "Not knowing", alt: [], hint: "Negative participle clause." },
      { type: "mc", instruction: "Select the correct form.", sentence: "________ blindly, he fell over a chair.", options: ["Ran", "Running", "To run", "Run"], correct: 1, hint: "Active action accompanying the main verb." },
      { type: "error", instruction: "Find the error.", sentence: "Not wanted to wake her, he tiptoed out of the room.", errorIndex: [1], correction: ["wanting"], hint: "Active reason -> -ing." },
      { type: "drag", instruction: "Reduce the relative clause.", sentence: "The road _1_ the two villages is very narrow. (= The road that connects...)", bank: ["connecting", "connected", "connects", "connection"], blanks: { "_1_": "connecting" }, hint: "Active verb -> -ing." },
      { type: "gap", instruction: "Reduce: \"The boy who is wearing the red shirt...\"", sentence: "The boy ___ the red shirt...", answer: "wearing", alt: [], hint: "Active state." },
      { type: "mc", instruction: "Choose the correct phrase.", sentence: "The girl ________ next to me in class is very smart.", options: ["who sitting", "sit", "sitting", "sits"], correct: 2, hint: "Reduces 'who sits / who is sitting'." },
      { type: "error", instruction: "Find the error.", sentence: "Being extremely tired, the bed felt amazing.", errorIndex: [0, 1, 2], correction: ["Because", "I", "was"], hint: "Dangling participle! The bed wasn't tired. The subject of 'being' must be 'I'." },

      // --- PAST & PERFECT PARTICIPLE CLAUSES (-ed / V3 / Having done) (61-80) ---
      { type: "gap", instruction: "Reduce the passive clause: \"The book which was written by Tolkien...\"", sentence: "The book ___ by Tolkien...", answer: "written", alt: [], hint: "Passive relative clauses reduce to the Past Participle (V3)." },
      { type: "mc", instruction: "Select the correct participle clause.", sentence: "The cars ________ in Germany are very reliable.", options: ["making", "which made", "made", "make"], correct: 2, hint: "Reduces 'which are made' (passive)." },
      { type: "drag", instruction: "Drag the correct forms to reduce the clause.", sentence: "The man _1_ by the police was released. (= The man who was arrested...)", bank: ["arresting", "arrested", "arrests", "who arresting"], blanks: { "_1_": "arrested" }, hint: "Passive verb -> -ed/V3 participle." },
      { type: "error", instruction: "Find the error.", sentence: "The money stealing from the bank was never found.", errorIndex: [2], correction: ["stolen"], hint: "The money was stolen (passive), it didn't steal anything (active)." },
      { type: "gap", instruction: "Reduce: \"Because he was exhausted by the journey, he slept for 12 hours.\"", sentence: "___ by the journey, he slept for 12 hours.", answer: "Exhausted", alt: [], hint: "Passive reason clause -> V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "________ by his boss, he decided to quit his job.", options: ["Angering", "To anger", "Angered", "Angers"], correct: 2, hint: "Passive: Because he was angered..." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "_1_ in 1920, the house needed a lot of repairs. _2_ in the country, it was very quiet.", bank: ["Built", "Building", "Located", "Locating"], blanks: { "_1_": "Built", "_2_": "Located" }, hint: "Two passive states (was built, is located)." },
      { type: "gap", instruction: "Show a completed earlier action: \"After he had finished the test, he left.\"", sentence: "___ ___ the test, he left.", answer: "Having finished", alt: [], hint: "Perfect Participle: Having + V3 shows an action happened BEFORE the main clause." },
      { type: "error", instruction: "Find the error.", sentence: "Having finish his homework, he played video games.", errorIndex: [1], correction: ["finished"], hint: "Having + Past Participle (V3)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "________ all his money, he had to walk home.", options: ["Losing", "Having lost", "Lost", "To lose"], correct: 1, hint: "The losing was completely finished before the walking started." },
      { type: "drag", instruction: "Drag the correct sequence.", sentence: "_1_ the book twice, I didn't want to see the movie.", bank: ["Having read", "Reading", "Read", "Have read"], blanks: { "_1_": "Having read" }, hint: "Because I had read it earlier -> Having read." },
      { type: "gap", instruction: "Show a passive earlier action: \"After he had been fired, he felt depressed.\"", sentence: "___ ___ ___ fired, he felt depressed.", answer: "Having been", alt: [], hint: "Perfect Passive Participle: Having + been + V3." },
      { type: "error", instruction: "Find the error.", sentence: "Not having be told about the meeting, I didn't attend.", errorIndex: [2], correction: ["been"], hint: "Having + been + V3." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "________ out of university, Steve Jobs went on to found Apple.", options: ["Dropped", "Having dropped", "Drop", "To drop"], correct: 1, hint: "Sequence of events: First he dropped out, then he founded Apple." },
      { type: "drag", instruction: "Compare the meaning.", sentence: "_1_ the car, he listened to the radio. _2_ the car, he went inside.", bank: ["Washing", "Having washed", "Washed", "To wash"], blanks: { "_1_": "Washing", "_2_": "Having washed" }, hint: "Simultaneous (-ing) vs Completed before (Having + V3)." },
      { type: "gap", instruction: "Reduce the negative perfect clause: \"Because she hadn't studied...\"", sentence: "___ ___ studied, she failed the exam.", answer: "Not having", alt: [], hint: "Put 'not' before 'having'." },
      { type: "error", instruction: "Find the error.", sentence: "Having been biting by a dog, he was afraid of them.", errorIndex: [2], correction: ["bitten"], hint: "Having been + Past Participle (V3)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "________ the instructions, she didn't know what to do.", options: ["Not read", "Not reading", "Not having read", "Haven't read"], correct: 2, hint: "Because she hadn't read them earlier." },
      { type: "gap", instruction: "Reduce: \"Anyone who was caught cheating was expelled.\"", sentence: "Anyone ___ cheating was expelled.", answer: "caught", alt: [], hint: "Passive relative clause -> V3." },
      { type: "mc", instruction: "Identify the Dangling Participle (Grammar Error).", options: ["Having read the book, the movie was disappointing.", "Having read the book, I found the movie disappointing."], correct: 0, hint: "In option A, 'the movie' is the subject, which implies the movie read the book! Subjects must match." }
    ]
  },

  irregular_verbs: {
    group: "3. Vocabulary & Forms",
    title: "Irregular Verbs Master Drill",
    rules: {
      summary: "Irregular verbs don't follow the regular -ed rule for the past and participle. There's no single trick, but most of them fall into a small number of recognisable patterns — learning the pattern is faster than learning 93 verbs one by one.",
      points: [
        { heading: "All Three Forms Identical", body: "base = past = participle: cut-cut-cut, hit-hit-hit, put-put-put, cost-cost-cost, hurt-hurt-hurt, let-let-let, set-set-set, shut-shut-shut, read-read-read (spelling identical, but the past/participle is pronounced 'red')." },
        { heading: "Past = Participle, Different From Base", body: "The largest group: an -t or -d ending shared by past and participle, e.g. bring-brought-brought, buy-bought-bought, catch-caught-caught, feel-felt-felt, keep-kept-kept, leave-left-left, lose-lost-lost, make-made-made, say-said-said, sell-sold-sold, teach-taught-taught, think-thought-thought." },
        { heading: "Three Distinct Forms (Ablaut: i-a-u)", body: "A vowel-change pattern where base, past and participle all differ, often following i→a→u: begin-began-begun, drink-drank-drunk, ring-rang-rung, sing-sang-sung, sink-sank-sunk, swim-swam-swum." },
        { heading: "Three Distinct Forms (Participle in -en)", body: "Many common irregular verbs form the participle by adding -en/-n to a changed stem: break-broke-broken, choose-chose-chosen, drive-drove-driven, eat-ate-eaten, fall-fell-fallen, give-gave-given, know-knew-known, speak-spoke-spoken, steal-stole-stolen, take-took-taken, wake-woke-woken, write-wrote-written." },
        { heading: "Base = Participle, Past Differs", body: "A smaller group where the participle returns to the base form: become-became-become, come-came-come, run-ran-run." },
        { heading: "Irregular One-Offs", body: "Some of the most common verbs in English don't fit any pattern and just have to be memorised: be-was/were-been, go-went-gone, do-did-done, have-had-had, get-got-got (US: gotten)." }
      ],
      examples: [
        { en: "cut – cut – cut", note: "All three forms identical" },
        { en: "buy – bought – bought", note: "Past = participle, both end in -t" },
        { en: "sing – sang – sung", note: "Ablaut pattern i-a-u" },
        { en: "write – wrote – written", note: "Participle ends in -en" },
        { en: "be – was/were – been", note: "Irregular one-off" }
      ],
      exceptions: [
        "British spellings are used throughout this drill (burnt, dreamt, leant, learnt, smelt, spelt, spilt, spoilt) rather than the American -ed forms (burned, dreamed, learned, spelled, spilled, spoiled) — both are correct English.",
        "'Get' has two accepted participles: 'got' (standard British English) and 'gotten' (American English)."
      ]
    },
    exercises: [
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **arise** -> Past: ___ | Participle: ___", answer: "arose ... arisen", hint: "arise - arose - arisen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **awake** -> Past: ___ | Participle: ___", answer: "awoke ... awoken", hint: "awake - awoke - awoken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **be** (use 'was/were' for past) -> Past: ___ | Participle: ___", answer: "was/were ... been", hint: "be - was/were - been" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bear** -> Past: ___ | Participle: ___", answer: "bore ... borne", hint: "bear - bore - borne" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **beat** -> Past: ___ | Participle: ___", answer: "beat ... beaten", hint: "beat - beat - beaten" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **become** -> Past: ___ | Participle: ___", answer: "became ... become", hint: "become - became - become" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **begin** -> Past: ___ | Participle: ___", answer: "began ... begun", hint: "begin - began - begun" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bend** -> Past: ___ | Participle: ___", answer: "bent ... bent", hint: "bend - bent - bent" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bet** -> Past: ___ | Participle: ___", answer: "bet ... bet", hint: "bet - bet - bet" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bind** -> Past: ___ | Participle: ___", answer: "bound ... bound", hint: "bind - bound - bound" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bite** -> Past: ___ | Participle: ___", answer: "bit ... bitten", hint: "bite - bit - bitten" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bleed** -> Past: ___ | Participle: ___", answer: "bled ... bled", hint: "bleed - bled - bled" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **blow** -> Past: ___ | Participle: ___", answer: "blew ... blown", hint: "blow - blew - blown" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **break** -> Past: ___ | Participle: ___", answer: "broke ... broken", hint: "break - broke - broken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **bring** -> Past: ___ | Participle: ___", answer: "brought ... brought", hint: "bring - brought - brought" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **broadcast** -> Past: ___ | Participle: ___", answer: "broadcast ... broadcast", hint: "broadcast - broadcast - broadcast" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **build** -> Past: ___ | Participle: ___", answer: "built ... built", hint: "build - built - built" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **burn** -> Past: ___ | Participle: ___", answer: "burnt ... burnt", hint: "burn - burnt - burnt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **burst** -> Past: ___ | Participle: ___", answer: "burst ... burst", hint: "burst - burst - burst" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **buy** -> Past: ___ | Participle: ___", answer: "bought ... bought", hint: "buy - bought - bought" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **catch** -> Past: ___ | Participle: ___", answer: "caught ... caught", hint: "catch - caught - caught" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **choose** -> Past: ___ | Participle: ___", answer: "chose ... chosen", hint: "choose - chose - chosen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **cling** -> Past: ___ | Participle: ___", answer: "clung ... clung", hint: "cling - clung - clung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **come** -> Past: ___ | Participle: ___", answer: "came ... come", hint: "come - came - come" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **cost** -> Past: ___ | Participle: ___", answer: "cost ... cost", hint: "cost - cost - cost" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **creep** -> Past: ___ | Participle: ___", answer: "crept ... crept", hint: "creep - crept - crept" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **cut** -> Past: ___ | Participle: ___", answer: "cut ... cut", hint: "cut - cut - cut" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **deal** -> Past: ___ | Participle: ___", answer: "dealt ... dealt", hint: "deal - dealt - dealt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **dig** -> Past: ___ | Participle: ___", answer: "dug ... dug", hint: "dig - dug - dug" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **do** -> Past: ___ | Participle: ___", answer: "did ... done", hint: "do - did - done" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **draw** -> Past: ___ | Participle: ___", answer: "drew ... drawn", hint: "draw - drew - drawn" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **dream** -> Past: ___ | Participle: ___", answer: "dreamt ... dreamt", hint: "dream - dreamt - dreamt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **drink** -> Past: ___ | Participle: ___", answer: "drank ... drunk", hint: "drink - drank - drunk" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **drive** -> Past: ___ | Participle: ___", answer: "drove ... driven", hint: "drive - drove - driven" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **eat** -> Past: ___ | Participle: ___", answer: "ate ... eaten", hint: "eat - ate - eaten" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **fall** -> Past: ___ | Participle: ___", answer: "fell ... fallen", hint: "fall - fell - fallen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **feed** -> Past: ___ | Participle: ___", answer: "fed ... fed", hint: "feed - fed - fed" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **feel** -> Past: ___ | Participle: ___", answer: "felt ... felt", hint: "feel - felt - felt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **fight** -> Past: ___ | Participle: ___", answer: "fought ... fought", hint: "fight - fought - fought" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **find** -> Past: ___ | Participle: ___", answer: "found ... found", hint: "find - found - found" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **flee** -> Past: ___ | Participle: ___", answer: "fled ... fled", hint: "flee - fled - fled" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **fly** -> Past: ___ | Participle: ___", answer: "flew ... flown", hint: "fly - flew - flown" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **forbid** -> Past: ___ | Participle: ___", answer: "forbade ... forbidden", hint: "forbid - forbade - forbidden" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **forget** -> Past: ___ | Participle: ___", answer: "forgot ... forgotten", hint: "forget - forgot - forgotten" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **forgive** -> Past: ___ | Participle: ___", answer: "forgave ... forgiven", hint: "forgive - forgave - forgiven" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **freeze** -> Past: ___ | Participle: ___", answer: "froze ... frozen", hint: "freeze - froze - frozen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **get** -> Past: ___ | Participle: ___", answer: "got ... got", hint: "get - got - got (US: gotten)" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **give** -> Past: ___ | Participle: ___", answer: "gave ... given", hint: "give - gave - given" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **go** -> Past: ___ | Participle: ___", answer: "went ... gone", hint: "go - went - gone" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **grind** -> Past: ___ | Participle: ___", answer: "ground ... ground", hint: "grind - ground - ground" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **grow** -> Past: ___ | Participle: ___", answer: "grew ... grown", hint: "grow - grew - grown" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hang** -> Past: ___ | Participle: ___", answer: "hung ... hung", hint: "hang - hung - hung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **have** -> Past: ___ | Participle: ___", answer: "had ... had", hint: "have - had - had" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hear** -> Past: ___ | Participle: ___", answer: "heard ... heard", hint: "hear - heard - heard" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hide** -> Past: ___ | Participle: ___", answer: "hid ... hidden", hint: "hide - hid - hidden" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hit** -> Past: ___ | Participle: ___", answer: "hit ... hit", hint: "hit - hit - hit" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hold** -> Past: ___ | Participle: ___", answer: "held ... held", hint: "hold - held - held" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **hurt** -> Past: ___ | Participle: ___", answer: "hurt ... hurt", hint: "hurt - hurt - hurt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **keep** -> Past: ___ | Participle: ___", answer: "kept ... kept", hint: "keep - kept - kept" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **kneel** -> Past: ___ | Participle: ___", answer: "knelt ... knelt", hint: "kneel - knelt - knelt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **know** -> Past: ___ | Participle: ___", answer: "knew ... known", hint: "know - knew - known" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lay** -> Past: ___ | Participle: ___", answer: "laid ... laid", hint: "lay - laid - laid" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lead** -> Past: ___ | Participle: ___", answer: "led ... led", hint: "lead - led - led" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lean** -> Past: ___ | Participle: ___", answer: "leant ... leant", hint: "lean - leant - leant" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **leap** -> Past: ___ | Participle: ___", answer: "leapt ... leapt", hint: "leap - leapt - leapt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **learn** -> Past: ___ | Participle: ___", answer: "learnt ... learnt", hint: "learn - learnt - learnt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **leave** -> Past: ___ | Participle: ___", answer: "left ... left", hint: "leave - left - left" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lend** -> Past: ___ | Participle: ___", answer: "lent ... lent", hint: "lend - lent - lent" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **let** -> Past: ___ | Participle: ___", answer: "let ... let", hint: "let - let - let" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lie** (to rest) -> Past: ___ | Participle: ___", answer: "lay ... lain", hint: "lie - lay - lain" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **light** -> Past: ___ | Participle: ___", answer: "lit ... lit", hint: "light - lit - lit" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **lose** -> Past: ___ | Participle: ___", answer: "lost ... lost", hint: "lose - lost - lost" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **make** -> Past: ___ | Participle: ___", answer: "made ... made", hint: "make - made - made" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **mean** -> Past: ___ | Participle: ___", answer: "meant ... meant", hint: "mean - meant - meant" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **meet** -> Past: ___ | Participle: ___", answer: "met ... met", hint: "meet - met - met" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **pay** -> Past: ___ | Participle: ___", answer: "paid ... paid", hint: "pay - paid - paid" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **put** -> Past: ___ | Participle: ___", answer: "put ... put", hint: "put - put - put" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **quit** -> Past: ___ | Participle: ___", answer: "quit ... quit", hint: "quit - quit - quit" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **read** -> Past: ___ | Participle: ___", answer: "read ... read", hint: "read - read - read (pronounced red, red)" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **ride** -> Past: ___ | Participle: ___", answer: "rode ... ridden", hint: "ride - rode - ridden" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **ring** -> Past: ___ | Participle: ___", answer: "rang ... rung", hint: "ring - rang - rung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **rise** -> Past: ___ | Participle: ___", answer: "rose ... risen", hint: "rise - rose - risen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **run** -> Past: ___ | Participle: ___", answer: "ran ... run", hint: "run - ran - run" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **say** -> Past: ___ | Participle: ___", answer: "said ... said", hint: "say - said - said" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **see** -> Past: ___ | Participle: ___", answer: "saw ... seen", hint: "see - saw - seen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **seek** -> Past: ___ | Participle: ___", answer: "sought ... sought", hint: "seek - sought - sought" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sell** -> Past: ___ | Participle: ___", answer: "sold ... sold", hint: "sell - sold - sold" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **send** -> Past: ___ | Participle: ___", answer: "sent ... sent", hint: "send - sent - sent" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **set** -> Past: ___ | Participle: ___", answer: "set ... set", hint: "set - set - set" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sew** -> Past: ___ | Participle: ___", answer: "sewed ... sewn", hint: "sew - sewed - sewn" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **shake** -> Past: ___ | Participle: ___", answer: "shook ... shaken", hint: "shake - shook - shaken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **shine** -> Past: ___ | Participle: ___", answer: "shone ... shone", hint: "shine - shone - shone" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **shoot** -> Past: ___ | Participle: ___", answer: "shot ... shot", hint: "shoot - shot - shot" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **show** -> Past: ___ | Participle: ___", answer: "showed ... shown", hint: "show - showed - shown" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **shrink** -> Past: ___ | Participle: ___", answer: "shrank ... shrunk", hint: "shrink - shrank - shrunk" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **shut** -> Past: ___ | Participle: ___", answer: "shut ... shut", hint: "shut - shut - shut" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sing** -> Past: ___ | Participle: ___", answer: "sang ... sung", hint: "sing - sang - sung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sink** -> Past: ___ | Participle: ___", answer: "sank ... sunk", hint: "sink - sank - sunk" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sit** -> Past: ___ | Participle: ___", answer: "sat ... sat", hint: "sit - sat - sat" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sleep** -> Past: ___ | Participle: ___", answer: "slept ... slept", hint: "sleep - slept - slept" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **slide** -> Past: ___ | Participle: ___", answer: "slid ... slid", hint: "slide - slid - slid" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **smell** -> Past: ___ | Participle: ___", answer: "smelt ... smelt", hint: "smell - smelt - smelt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **speak** -> Past: ___ | Participle: ___", answer: "spoke ... spoken", hint: "speak - spoke - spoken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spell** -> Past: ___ | Participle: ___", answer: "spelt ... spelt", hint: "spell - spelt - spelt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spend** -> Past: ___ | Participle: ___", answer: "spent ... spent", hint: "spend - spent - spent" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spill** -> Past: ___ | Participle: ___", answer: "spilt ... spilt", hint: "spill - spilt - spilt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spin** -> Past: ___ | Participle: ___", answer: "spun ... spun", hint: "spin - spun - spun" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spit** -> Past: ___ | Participle: ___", answer: "spat ... spat", hint: "spit - spat - spat" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **split** -> Past: ___ | Participle: ___", answer: "split ... split", hint: "split - split - split" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spoil** -> Past: ___ | Participle: ___", answer: "spoilt ... spoilt", hint: "spoil - spoilt - spoilt" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spread** -> Past: ___ | Participle: ___", answer: "spread ... spread", hint: "spread - spread - spread" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **spring** -> Past: ___ | Participle: ___", answer: "sprang ... sprung", hint: "spring - sprang - sprung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **stand** -> Past: ___ | Participle: ___", answer: "stood ... stood", hint: "stand - stood - stood" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **steal** -> Past: ___ | Participle: ___", answer: "stole ... stolen", hint: "steal - stole - stolen" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **stick** -> Past: ___ | Participle: ___", answer: "stuck ... stuck", hint: "stick - stuck - stuck" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sting** -> Past: ___ | Participle: ___", answer: "stung ... stung", hint: "sting - stung - stung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **stink** -> Past: ___ | Participle: ___", answer: "stank ... stunk", hint: "stink - stank - stunk" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **strike** -> Past: ___ | Participle: ___", answer: "struck ... struck", hint: "strike - struck - struck" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **swear** -> Past: ___ | Participle: ___", answer: "swore ... sworn", hint: "swear - swore - sworn" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **sweep** -> Past: ___ | Participle: ___", answer: "swept ... swept", hint: "sweep - swept - swept" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **swim** -> Past: ___ | Participle: ___", answer: "swam ... swum", hint: "swim - swam - swum" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **swing** -> Past: ___ | Participle: ___", answer: "swung ... swung", hint: "swing - swung - swung" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **take** -> Past: ___ | Participle: ___", answer: "took ... taken", hint: "take - took - taken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **teach** -> Past: ___ | Participle: ___", answer: "taught ... taught", hint: "teach - taught - taught" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **tear** -> Past: ___ | Participle: ___", answer: "tore ... torn", hint: "tear - tore - torn" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **tell** -> Past: ___ | Participle: ___", answer: "told ... told", hint: "tell - told - told" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **think** -> Past: ___ | Participle: ___", answer: "thought ... thought", hint: "think - thought - thought" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **throw** -> Past: ___ | Participle: ___", answer: "threw ... thrown", hint: "throw - threw - thrown" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **understand** -> Past: ___ | Participle: ___", answer: "understood ... understood", hint: "understand - understood - understood" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **upset** -> Past: ___ | Participle: ___", answer: "upset ... upset", hint: "upset - upset - upset" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **wake** -> Past: ___ | Participle: ___", answer: "woke ... woken", hint: "wake - woke - woken" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **wear** -> Past: ___ | Participle: ___", answer: "wore ... worn", hint: "wear - wore - worn" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **weep** -> Past: ___ | Participle: ___", answer: "wept ... wept", hint: "weep - wept - wept" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **win** -> Past: ___ | Participle: ___", answer: "won ... won", hint: "win - won - won" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **wind** -> Past: ___ | Participle: ___", answer: "wound ... wound", hint: "wind - wound - wound" },
      { type: "gap", instruction: "Type the Past Simple and Past Participle.", sentence: "Base: **write** -> Past: ___ | Participle: ___", answer: "wrote ... written", hint: "write - wrote - written" }
    ]
  },

  linking_words: {
    group: "3. Vocabulary & Forms",
    title: "Linking Words & Connectors",
    rules: {
      summary: "Linking words fall into families by function (contrast, cause, purpose, addition, result, condition) — and within each family, some connectors take a noun/gerund while others take a full clause. Mixing them up is the most common C1 error.",
      points: [
        { heading: "Contrast & Concession", body: "Despite / In spite of + noun or gerund (no 'of' after despite: 'Despite the rain'). Although / Even though / Though / While + a full clause. 'However' is a sentence adverb (needs its own sentence + comma) and cannot connect two clauses the way 'although' does. Whereas contrasts two clauses directly within one sentence. Nevertheless, Nonetheless (formal 'despite this'), Albeit and Much as are more formal alternatives." },
        { heading: "Cause, Reason & Purpose", body: "due to / owing to / because of / on account of + noun. because / since / as + clause. Purpose: so that / in order to / so as not to / in order not to. 'For to' is always wrong — just use 'to' or 'in order to'." },
        { heading: "Addition, Result & Effect", body: "Furthermore, Moreover, In addition (to), Besides add a point. 'Not only... but also' requires inversion after the sentence-initial 'Not only' ('Not only is he a musician, but he is also a painter'). Consequently, Therefore, Thus, Hence, As a result (of) show a result — 'as a result of' only needs 'of' when directly followed by a noun." },
        { heading: "Condition", body: "otherwise = if not, with a negative consequence. provided that / as long as = on condition that. in case = as a precaution (not the same as 'if'). unless = if not — never combine with another negative ('unless you don't...' is wrong, since 'unless' already means 'if not')." }
      ],
      examples: [
        { en: "**Despite** the heavy rain, we decided to go for a hike.", note: "Despite + noun, no 'of'" },
        { en: "She is extremely wealthy. **However**, she is very unhappy.", note: "However starts a new sentence" },
        { en: "He hid the money **for fear that** anyone would steal it.", note: "Formal negative purpose" },
        { en: "**Not only is** he a great musician, but he is also a talented painter.", note: "Inversion after 'Not only'" },
        { en: "He couldn't even afford the rent, **let alone** buy a new car.", note: "Emphasises the second point is even less likely" }
      ],
      exceptions: [
        "'In contrary to' is wrong — the fixed phrase is 'Contrary to' or 'On the contrary'.",
        "'Beside' (next to) and 'Besides' (in addition to) look similar but mean different things.",
        "'Despite' never takes 'of', while 'because of' always does — the two are easy to cross-contaminate."
      ]
    },
    exercises: [
      // --- CONTRAST & CONCESSION (1-25) ---
      { type: "mc", instruction: "Choose the correct connector.", sentence: "________ the heavy rain, we decided to go for a hike.", options: ["Although", "Despite", "However", "Even though"], correct: 1, hint: "'Despite' is a preposition followed by a noun phrase. 'Although' requires a full clause (subject + verb)." },
      { type: "gap", instruction: "Fill in the connector:", sentence: "___ it was raining heavily, we decided to go for a hike.", answer: "Although", alt: ["Even though", "Though"], hint: "Requires a conjunction followed by a full clause (subject + verb)." },
      { type: "error", instruction: "Find the error.", sentence: "In spite of he was tired, he kept working on his essay.", errorIndex: [0, 1, 2], correction: ["Although", "Even though"], hint: "'In spite of' must be followed by a noun or gerund, not a full clause." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "She is extremely wealthy. _1_, she is very unhappy. _2_ being rich, she feels lonely.", bank: ["However", "Although", "Despite", "In spite"], blanks: { "_1_": "However", "_2_": "Despite" }, hint: "Notice the punctuation (comma after However) and the gerund (Despite being)." },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "Despite ___ fact that it was late, we continued the meeting.", answer: "the", alt: [], hint: "Fixed phrase: 'Despite the fact that' allows you to use a full clause after 'despite'." },
      { type: "mc", instruction: "Select the correct punctuation.", sentence: "I wanted to buy the car. ________, I didn't have enough money.", options: ["Although", "Therefore", "However", "Despite"], correct: 2, hint: "'However' is an adverb used to start a new sentence showing contrast, followed by a comma." },
      { type: "error", instruction: "Find the error.", sentence: "Despite of the bad weather, the festival was a huge success.", errorIndex: [0, 1], correction: ["Despite", "In spite of"], hint: "There is no 'of' after 'despite'. It is either 'despite' OR 'in spite of'." },
      { type: "drag", instruction: "Choose the correct connectors.", sentence: "_1_ my brother loves playing sports, I prefer reading. _2_, we both enjoy watching the Olympics.", bank: ["Whereas", "However", "Despite", "Nevertheless"], blanks: { "_1_": "Whereas", "_2_": "However" }, hint: "'Whereas' is used to contrast two facts in the same sentence." },
      { type: "gap", instruction: "Fill in the connector (meaning: despite this):", sentence: "The economy is in a recession. ___, our company's profits are up.", answer: "Nevertheless", alt: ["Nonetheless", "However"], hint: "A formal C1 alternative to 'However'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "I couldn't sleep ________ the noise from the party downstairs.", options: ["because", "due to", "since", "as"], correct: 1, hint: "'Due to' is a preposition followed by a noun phrase. The others require a full clause." },
      { type: "error", instruction: "Find the error.", sentence: "However it was very cold, we went swimming in the lake.", errorIndex: [0], correction: ["Although", "Even though"], hint: "'However' cannot connect two clauses in this way. Use 'Although'." },
      { type: "gap", instruction: "Fill in the formal connector (meaning: even though):", sentence: "___ the project was a success, it cost twice as much as planned.", answer: "Although", alt: ["While", "Even though"], hint: "This full-clause connector means 'despite the fact that' — a time-word can also be stretched to mean this formally." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "He passed the exam _1_ studying very little. _2_ he didn't study, he still passed.", bank: ["in spite of", "even though", "despite of", "however"], blanks: { "_1_": "in spite of", "_2_": "even though" }, hint: "Preposition + gerund vs Conjunction + clause." },
      { type: "mc", instruction: "Select the best C1 connector.", sentence: "The book is heavily criticized for its historical inaccuracies. ________, it remains a bestseller.", options: ["Furthermore", "Consequently", "Nonetheless", "Therefore"], correct: 2, hint: "'Nonetheless' shows a surprising contrast (meaning 'despite what was just said')." },
      { type: "error", instruction: "Find the error.", sentence: "In contrary to popular belief, bats are not blind.", errorIndex: [0, 1], correction: ["Contrary"], hint: "The fixed expression is 'Contrary to', not 'In contrary to'." },
      { type: "gap", instruction: "Fill in the connector (meaning: on the other hand):", sentence: "Nuclear power is clean. ___, it produces dangerous radioactive waste.", answer: "However", alt: ["Conversely", "Nevertheless"], hint: "Contrasting two sides of an argument." },
      { type: "drag", instruction: "Complete the C1 structure.", sentence: "_1_ as I respect him, I cannot agree with his decision. _2_ his experience, he is wrong here.", bank: ["Much", "Even", "Despite", "Although"], blanks: { "_1_": "Much", "_2_": "Despite" }, hint: "'Much as' is a formal C1 structure meaning 'Even though'." },
      { type: "mc", instruction: "Choose the correct phrase.", sentence: "Some people believe technology isolates us. ________, it actually connects us globally.", options: ["On the other hand", "On the contrary", "Whereas", "In addition"], correct: 1, hint: "'On the contrary' is used to contradict a previous statement entirely." },
      { type: "error", instruction: "Find the error.", sentence: "While I understand your point, but I cannot support your proposal.", errorIndex: [5], correction: ["-"], hint: "You cannot use 'but' in the main clause if the dependent clause already starts with 'while' or 'although'." },
      { type: "gap", instruction: "Fill in the formal connector:", sentence: "___ being exhausted, the firefighters continued working through the night.", answer: "Despite", alt: ["In spite of"], hint: "Followed by a gerund (-ing)." },
      { type: "mc", instruction: "Choose the correct formal connector.", sentence: "The plan was brilliant, ________ a bit risky.", options: ["albeit", "despite", "however", "whereas"], correct: 0, hint: "'Albeit' is a formal C1 word meaning 'although it was'." },
      { type: "drag", instruction: "Drag the connectors.", sentence: "The UK is an island, _1_ France is attached to the mainland. _2_, both share a long history.", bank: ["whereas", "however", "despite", "although"], blanks: { "_1_": "whereas", "_2_": "However" }, hint: "Direct comparison vs New contrasting sentence." },
      { type: "gap", instruction: "Fill in the connector (meaning: even so):", sentence: "He is a difficult person to work with. ___, he is brilliant at his job.", answer: "Nevertheless", alt: ["Nonetheless", "Still", "However"], hint: "Contrasting with the previous negative statement." },
      { type: "error", instruction: "Find the error.", sentence: "Despite of the fact that it rained, we enjoyed the concert.", errorIndex: [0, 1], correction: ["Despite", "In spite of"], hint: "No 'of' after 'despite'." },
      { type: "mc", instruction: "Select the correct connector.", sentence: "________ I agree with the theory, its practical application is flawed.", options: ["While", "However", "Despite", "Nevertheless"], correct: 0, hint: "'While' can mean 'Although' at the start of a sentence." },

      // --- CAUSE, REASON & PURPOSE (26-40) ---
      { type: "gap", instruction: "Fill in the connector (meaning: because of):", sentence: "The flight was cancelled ___ to the severe thunderstorm.", answer: "due", alt: [], hint: "Fixed phrase: 'due to'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "________ it was a public holiday, all the shops were closed.", options: ["Because of", "Since", "Due to", "Owing to"], correct: 1, hint: "'Since' acts exactly like 'because' to introduce a clause." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "We stayed indoors _1_ the heat. _2_ it was so hot, we couldn't go out.", bank: ["because of", "because", "due", "since of"], blanks: { "_1_": "because of", "_2_": "Because" }, hint: "Prep + noun vs Conjunction + clause." },
      { type: "error", instruction: "Find the error.", sentence: "Owing to it was raining, the match was postponed.", errorIndex: [0, 1], correction: ["Because", "Since", "As"], hint: "'Owing to' must be followed by a noun/gerund, not a full clause." },
      { type: "gap", instruction: "Fill in the correct connector (meaning: because):", sentence: "___ we have some free time, let's grab a coffee.", answer: "As", alt: ["Since", "Because"], hint: "A short, common synonym for 'because'." },
      { type: "mc", instruction: "Choose the correct phrase for purpose.", sentence: "I set my alarm for 5 AM ________ I wouldn't miss my flight.", options: ["in order to", "so as not to", "so that", "because"], correct: 2, hint: "'So that' is followed by a full clause (subject + would/could)." },
      { type: "drag", instruction: "Drag the correct words to form the purpose clause.", sentence: "He spoke very quietly _1_ _2_ _3_ _4_ wake the baby.", bank: ["so", "as", "not", "to", "that", "in"], blanks: { "_1_": "so", "_2_": "as", "_3_": "not", "_4_": "to" }, hint: "Negative purpose: 'so as not to' or 'in order not to'." },
      { type: "error", instruction: "Find the error.", sentence: "I went to the library for to study for my exams.", errorIndex: [5, 6], correction: ["to"], hint: "Never use 'for to'. Use 'to' or 'in order to' for purpose." },
      { type: "gap", instruction: "Fill in the missing word:", sentence: "She studied hard in ___ to pass the Abitur with top marks.", answer: "order", alt: [], hint: "'in order to'." },
      { type: "mc", instruction: "Select the correct C1 connector.", sentence: "The stadium was closed ________ safety concerns.", options: ["on account of", "due to the fact", "because", "since"], correct: 0, hint: "'On account of' is a formal preposition meaning 'because of'." },
      { type: "error", instruction: "Find the error.", sentence: "Because of I was sick, I couldn't attend the meeting.", errorIndex: [0, 1], correction: ["Because", "Since", "As"], hint: "Drop the 'of' before a subject + verb." },
      { type: "gap", instruction: "Fill in the connector (formal C1):", sentence: "Many social problems are ___ about by poverty.", answer: "brought", alt: [], hint: "'Brought about by' means 'caused by'." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He hid the money _1_ _2_ _3_ anyone would steal it.", bank: ["for", "fear", "that", "so", "as", "to"], blanks: { "_1_": "for", "_2_": "fear", "_3_": "that" }, hint: "'For fear that' (or 'lest') is an advanced connector of negative purpose." },
      { type: "mc", instruction: "Choose the correct phrase.", sentence: "The project failed ________ a lack of funding.", options: ["stemming from", "owing to", "because", "since"], correct: 1, hint: "'Owing to' is a formal alternative to 'because of'." },
      { type: "gap", instruction: "Fill in the missing word (purpose):", sentence: "I am writing to you ___ reference to your recent email.", answer: "with", alt: ["in"], hint: "Formal letter phrasing: 'with reference to'." },

      // --- ADDITION & EFFECT/RESULT (41-50) ---
      { type: "mc", instruction: "Choose the correct connector of addition.", sentence: "The car is very reliable. ________, it is quite cheap to run.", options: ["Therefore", "Furthermore", "However", "Consequently"], correct: 1, hint: "Adding a positive point to another positive point." },
      { type: "gap", instruction: "Fill in the connector:", sentence: "Smoking causes cancer. ___, it is terrible for your heart.", answer: "Moreover", alt: ["Furthermore", "In addition", "Besides"], hint: "Formal connector adding information." },
      { type: "error", instruction: "Find the error.", sentence: "Not only he is a great musician, but he is also a talented painter.", errorIndex: [2, 3], correction: ["is", "he"], hint: "'Not only' at the beginning of a sentence requires an inversion (verb + subject)." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "_1_ to speaking French, she _2_ speaks German fluently.", bank: ["In addition", "Besides", "also", "too"], blanks: { "_1_": "In addition", "_2_": "also" }, hint: "Prep: In addition to + noun/gerund." },
      { type: "gap", instruction: "Fill in the connector (meaning: as a result):", sentence: "The company went bankrupt. ___, hundreds of people lost their jobs.", answer: "Consequently", alt: ["Therefore", "Thus", "Hence", "As a result"], hint: "Formal word for 'as a consequence'." },
      { type: "mc", instruction: "Select the correct connector.", sentence: "It rained heavily all night; ________, the streets were flooded the next morning.", options: ["furthermore", "thus", "however", "moreover"], correct: 1, hint: "'Thus' shows logical consequence." },
      { type: "error", instruction: "Find the error.", sentence: "He worked hard all year. As a result of, he got a promotion.", errorIndex: [3, 4, 5], correction: ["As", "a", "result"], hint: "Do not use 'of' unless a noun immediately follows (e.g., As a result of his hard work)." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "The software is fast, secure, and _1_ it is completely free, not to _2_ easy to use.", bank: ["moreover", "therefore", "mention", "say"], blanks: { "_1_": "moreover", "_2_": "mention" }, hint: "'Not to mention' adds an extra, impressive point." },
      { type: "gap", instruction: "Fill in the missing word:", sentence: "The demand for housing has risen sharply; ___, prices have skyrocketed.", answer: "hence", alt: ["therefore", "thus", "consequently"], hint: "A formal alternative to 'therefore'." },
      { type: "mc", instruction: "Choose the correct connector.", sentence: "He was ________ exhausted that he fell asleep at his desk.", options: ["so", "such", "too", "very"], correct: 0, hint: "so + adjective + that." },

      // --- CONDITION & MIXED C1 CHALLENGES (51-60) ---
      { type: "gap", instruction: "Fill in the connector (meaning: if not):", sentence: "You must leave right now; ___, you will miss the train.", answer: "otherwise", alt: [], hint: "Shows the negative consequence of not doing something." },
      { type: "mc", instruction: "Select the correct connector of condition.", sentence: "You can borrow my laptop ________ you promise to be careful with it.", options: ["unless", "provided that", "in case", "whether"], correct: 1, hint: "'Provided that' or 'As long as' means 'on the condition that'." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I will take my umbrella _1_ it rains, but I won't open it _2_ it actually starts pouring.", bank: ["in case", "unless", "if", "provided"], blanks: { "_1_": "in case", "_2_": "unless" }, hint: "'In case' = preparation. 'Unless' = if not." },
      { type: "error", instruction: "Find the error.", sentence: "Unless you don't study, you will fail the Abitur.", errorIndex: [1, 2], correction: ["you", "study"], hint: "'Unless' already means 'if not'. Do not use a double negative." },
      { type: "gap", instruction: "Fill in the missing word:", sentence: "We can hold the party outdoors, as ___ as it doesn't rain.", answer: "long", alt: [], hint: "'as long as'." },
      { type: "mc", instruction: "Choose the correct formal connector.", sentence: "________ we receive the funding by Friday, the project will proceed as planned.", options: ["Assuming", "Unless", "In case", "Otherwise"], correct: 0, hint: "'Assuming (that)' means 'If it is true that'." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The film was terrible. _1_, I'm glad I went, _2_ only to see the special effects.", bank: ["Nevertheless", "Furthermore", "if", "unless"], blanks: { "_1_": "Nevertheless", "_2_": "if" }, hint: "Contrast + specific C1 condition ('if only to...')." },
      { type: "error", instruction: "Find the error.", sentence: "Beside being a talented actor, he is also a great singer.", errorIndex: [0], correction: ["Besides"], hint: "'Beside' means 'next to'. 'Besides' means 'in addition to'." },
      { type: "gap", instruction: "Fill in the connector:", sentence: "The government has cut taxes, ___ increasing its popularity before the election.", answer: "thereby", alt: ["thus"], hint: "'thereby + -ing' shows the result of an action." },
      { type: "mc", instruction: "Select the correct advanced connector.", sentence: "He couldn't even afford to pay his rent, ________ buy a new car.", options: ["moreover", "furthermore", "let alone", "nevertheless"], correct: 2, hint: "'Let alone' emphasizes that because the first thing is impossible, the second is even more impossible." }
    ]
  },

  prepositions: {
    group: "3. Vocabulary & Forms",
    title: "Prepositions (Dependent & Fixed)",
    rules: {
      summary: "Many adjectives, verbs and nouns are permanently 'married' to a specific preposition. There's no shortcut — these have to be learned as fixed pairs, ideally grouped by word type.",
      points: [
        { heading: "Adjective + Preposition", body: "capable of, accustomed to, famous for, obsessed with, typical of, aware of, responsible for, skilled at, fond of, guilty of, fed up with, tired of, involved in, compatible with, dependent on/upon." },
        { heading: "Verb + Preposition", body: "succeed in, object to, congratulate on / praise for, prevent...from, translate into, rely on, apologize to (a person) + for (a thing), consist of, suffer from, insist on, accuse of, apply to (an institution) / apply for (a job), complain to (someone) + about (something), participate in, concentrate on." },
        { heading: "Noun + Preposition", body: "increase/decrease in, intention of, advantage of, access to, demand for, experience in/with, reason for (but cause of), lack of, threat to, solution to, insight into, objection to, connection between, respect for, damage to, belief in." },
        { heading: "Verbs With No Preposition", body: "Some verbs are transitive in English even though their German equivalent needs a preposition, so no preposition is used at all: discuss (not 'discuss about'), enter (not 'enter into' a room), marry (not 'marry with')." }
      ],
      examples: [
        { en: "She is fully **capable of** passing the exam if she studies.", note: "Adjective + of" },
        { en: "Did you **succeed in** convincing him to join us?", note: "Verb + in + gerund" },
        { en: "We must **prevent** the virus **from** spreading further.", note: "prevent...from + gerund" },
        { en: "There has been a sudden **increase in** the price of oil.", note: "Noun + in" },
        { en: "We **discussed** the problem for hours.", note: "No preposition after 'discuss'" }
      ],
      exceptions: [
        "'We discussed about the problem' is a very common error — 'discuss' is directly transitive, with no preposition at all.",
        "'Connection between the two events' is already correct as written — not every prepositional phrase in this unit is broken; some items test whether you can recognise a correct sentence."
      ]
    },
    exercises: [
      // --- ADJECTIVE + PREPOSITION (1-15) ---
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "She is fully capable ___ passing the exam if she studies.", answer: "of", alt: [], hint: "capable + of" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "I am not accustomed ________ waking up this early.", options: ["with", "to", "at", "for"], correct: 1, hint: "accustomed + to (+ gerund/noun)" },
      { type: "drag", instruction: "Drag the prepositions.", sentence: "He is famous _1_ his paintings, but he is obsessed _2_ perfection.", bank: ["for", "with", "about", "of"], blanks: { "_1_": "for", "_2_": "with" }, hint: "famous for / obsessed with" },
      { type: "error", instruction: "Find the error.", sentence: "It is very typical from him to arrive late.", errorIndex: [4], correction: ["of"], hint: "typical + of" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "Are you aware ___ the risks involved in this project?", answer: "of", alt: [], hint: "aware + of" },
      { type: "mc", instruction: "Select the correct form.", sentence: "He is entirely responsible ________ the marketing department.", options: ["of", "about", "for", "with"], correct: 2, hint: "responsible + for" },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She is highly skilled _1_ coding, but has little experience _2_ public speaking.", bank: ["at", "in", "with", "about"], blanks: { "_1_": "at", "_2_": "in" }, hint: "skilled at / experience in" },
      { type: "error", instruction: "Find the error.", sentence: "I am very fond about classic literature.", errorIndex: [4], correction: ["of"], hint: "fond + of" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The city was completely destroyed and reduced ___ rubble.", answer: "to", alt: [], hint: "reduced + to" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "He was found guilty ________ theft and sentenced to prison.", options: ["for", "of", "about", "with"], correct: 1, hint: "guilty + of" },
      { type: "drag", instruction: "Drag the prepositions.", sentence: "I am fed up _1_ this weather, and tired _2_ complaining about it.", bank: ["with", "of", "about", "from"], blanks: { "_1_": "with", "_2_": "of" }, hint: "fed up + with / tired + of" },
      { type: "error", instruction: "Find the error.", sentence: "She is deeply involved into the charity project.", errorIndex: [4], correction: ["in"], hint: "involved + in" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "This software is compatible ___ both Windows and Mac.", answer: "with", alt: [], hint: "compatible + with" },
      { type: "mc", instruction: "Select the correct preposition.", sentence: "His behaviour is completely contrary ________ our company policy.", options: ["with", "against", "to", "at"], correct: 2, hint: "contrary + to" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The country is heavily dependent ___ foreign imports.", answer: "on", alt: ["upon"], hint: "dependent + on" },

      // --- VERB + PREPOSITION (16-35) ---
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "Did you succeed ___ convincing him to join us?", answer: "in", alt: [], hint: "succeed + in (+ gerund)" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "I strongly object ________ being treated this way.", options: ["against", "to", "with", "about"], correct: 1, hint: "object + to (+ gerund)" },
      { type: "drag", instruction: "Drag the correct prepositions.", sentence: "They congratulated her _1_ winning the award and praised her _2_ her hard work.", bank: ["on", "for", "about", "with"], blanks: { "_1_": "on", "_2_": "for" }, hint: "congratulate + on / praise + for" },
      { type: "error", instruction: "Find the error.", sentence: "We must prevent the virus of spreading further.", errorIndex: [4], correction: ["from"], hint: "prevent someone/something + from (+ gerund)" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "Please translate this document ___ German.", answer: "into", alt: [], hint: "translate + into" },
      { type: "mc", instruction: "Select the correct preposition.", sentence: "You can always rely ________ me for help.", options: ["in", "on", "with", "for"], correct: 1, hint: "rely + on" },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He apologized _1_ the manager _2_ arriving late.", bank: ["to", "for", "with", "about"], blanks: { "_1_": "to", "_2_": "for" }, hint: "apologize + to (someone) + for (something)" },
      { type: "error", instruction: "Find the error.", sentence: "I completely agree to you on this issue.", errorIndex: [3], correction: ["with"], hint: "agree + with (a person)" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The committee consists ___ five members.", answer: "of", alt: [], hint: "consist + of" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "She suffers ________ terrible migraines.", options: ["of", "from", "with", "about"], correct: 1, hint: "suffer + from" },
      { type: "drag", instruction: "Drag the prepositions.", sentence: "Don't laugh _1_ him! You should care _2_ his feelings.", bank: ["at", "about", "with", "for"], blanks: { "_1_": "at", "_2_": "about" }, hint: "laugh + at / care + about" },
      { type: "error", instruction: "Find the error.", sentence: "He insisted to paying the bill for everyone.", errorIndex: [2], correction: ["on"], hint: "insist + on (+ gerund)" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "They accused him ___ stealing the confidential data.", answer: "of", alt: [], hint: "accuse + of" },
      { type: "mc", instruction: "Select the correct form.", sentence: "I applied ________ the university, but I haven't heard back yet.", options: ["at", "to", "for", "with"], correct: 1, hint: "apply + to (an institution) / apply + for (a job)" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The police are currently investigating the cause ___ the fire.", answer: "of", alt: [], hint: "investigate = no prep / cause + of" },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She complained _1_ the waiter _2_ the cold soup.", bank: ["to", "about", "with", "for"], blanks: { "_1_": "to", "_2_": "about" }, hint: "complain + to (someone) + about (something)" },
      { type: "error", instruction: "Find the error.", sentence: "We discussed about the problem for hours.", errorIndex: [2], correction: ["-"], hint: "discuss is a transitive verb; it takes NO preposition. You just 'discuss the problem'." },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "I am going to participate ___ the London marathon next year.", answer: "in", alt: [], hint: "participate + in" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "He blames his lack of success ________ his teachers.", options: ["on", "for", "to", "about"], correct: 0, hint: "blame something + on + someone" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "I really need to concentrate ___ my studies right now.", answer: "on", alt: [], hint: "concentrate + on" },

      // --- NOUN + PREPOSITION & MIXED (36-50) ---
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "There has been a sudden increase ___ the price of oil.", answer: "in", alt: [], hint: "increase/decrease + in" },
      { type: "mc", instruction: "Select the correct preposition.", sentence: "I have no intention ________ quitting my job.", options: ["for", "of", "to", "about"], correct: 1, hint: "intention + of (+ gerund)" },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "The advantage _1_ living here is the access _2_ the beach.", bank: ["of", "to", "for", "in"], blanks: { "_1_": "of", "_2_": "to" }, hint: "advantage + of / access + to" },
      { type: "error", instruction: "Find the error.", sentence: "There is a great demand of new engineers in the tech industry.", errorIndex: [5], correction: ["for"], hint: "demand + for" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "She has a lot of experience ___ dealing with difficult clients.", answer: "in", alt: ["with"], hint: "experience + in/with" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "I can see no reason ________ such drastic measures.", options: ["of", "for", "about", "to"], correct: 1, hint: "reason + for (but cause + of)" },
      { type: "drag", instruction: "Complete the sentence.", sentence: "His lack _1_ confidence is a threat _2_ his career.", bank: ["of", "to", "for", "in"], blanks: { "_1_": "of", "_2_": "to" }, hint: "lack + of / threat + to" },
      { type: "error", instruction: "Find the error.", sentence: "We need a solution of this massive problem.", errorIndex: [4], correction: ["to"], hint: "solution + to" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The book provides an interesting insight ___ ancient Roman culture.", answer: "into", alt: [], hint: "insight + into" },
      { type: "mc", instruction: "Select the correct preposition.", sentence: "He took great pride ________ his son's achievements.", options: ["of", "in", "about", "for"], correct: 1, hint: "take pride + in" },
      { type: "drag", instruction: "Drag the prepositions.", sentence: "I have no objection _1_ your plan, but I have doubts _2_ its execution.", bank: ["to", "about", "of", "for"], blanks: { "_1_": "to", "_2_": "about" }, hint: "objection + to / doubt + about" },
      { type: "error", instruction: "Find the error.", sentence: "There is a deep connection between the two events.", errorIndex: [], correction: [], hint: "Connection + between is perfectly correct!" },
      { type: "error", instruction: "Find the error.", sentence: "I have a lot of respect to my grandfather.", errorIndex: [6], correction: ["for"], hint: "respect + for" },
      { type: "gap", instruction: "Fill in the correct preposition:", sentence: "The damage ___ the car was estimated at £2000.", answer: "to", alt: [], hint: "damage + to" },
      { type: "mc", instruction: "Choose the correct preposition.", sentence: "He has a strong belief ________ life after death.", options: ["on", "about", "in", "for"], correct: 2, hint: "belief + in" }
    ]
  },

  articles: {
    group: "3. Vocabulary & Forms",
    title: "Articles (Definite, Indefinite, Zero)",
    rules: {
      summary: "German uses articles more freely than English. The default in English is often the zero article (no 'the' or 'a') for general statements — 'the' is reserved for specific, known, or unique things.",
      points: [
        { heading: "Zero Article for General Statements", body: "Abstract nouns and uncountable nouns used generally take no article: 'Life was harder 200 years ago', 'Music brings people together'. Academic subjects also take zero article: 'She studies history'. Compare 'most people' (general, no article) with 'most of the people in this room' (a specific group, needs 'the')." },
        { heading: "Institutions: Purpose vs Visit", body: "Zero article when someone goes to an institution for its primary purpose (prison, hospital, school, bed, church, university): 'He was sent to prison.' Add 'the' when referring to the building for a different reason: 'His wife went to the prison to visit him.'" },
        { heading: "Geography", body: "Mountain ranges, oceans, rivers, and plural/political country names take 'the': the Alps, the Atlantic, the River Thames, the Netherlands, the UK. Individual mountains, lakes, and most single country names take zero article: Mount Everest, Lake Victoria, Portugal, Germany." },
        { heading: "Titles & a/an", body: "A title used with a name takes zero article ('Queen Elizabeth'), but the role alone takes 'the' ('the President'). Choose a/an by sound, not spelling: 'an honest man' (silent h), 'a university' ('yoo' sound), 'an hour', 'a European country'." },
        { heading: "Other Fixed Uses", body: "Superlatives take 'the' ('the best film'). An adjective can stand for a whole group of people with 'the': 'the rich', 'the poor'. Musical instruments take 'the' ('the piano'), but sports and games take zero article ('tennis'). Parts of the day take 'in the' (in the morning) — except 'at night'." }
      ],
      examples: [
        { en: "**Society** must protect its most vulnerable members.", note: "Zero article — general abstract noun" },
        { en: "The robber was sent to **prison**. / His mother went to **the prison** to visit him.", note: "Primary purpose vs a visit" },
        { en: "We spent our holiday hiking in **the Alps**, but decided not to visit **Portugal**.", note: "Mountain range vs single country" },
        { en: "She studies at **a university** in London. It takes **an hour** to get there.", note: "a/an by sound, not spelling" },
        { en: "Only **the rich** can afford to live in this neighbourhood.", note: "Adjective standing for a group" }
      ],
      exceptions: [
        "'At night' is the odd one out among time-of-day phrases — all the others use 'in the' (in the morning/afternoon/evening).",
        "'The love' as an abstract general concept is wrong — 'Love is more important than money' needs zero article."
      ]
    },
    exercises: [
      // --- ZERO ARTICLE: ABSTRACT NOUNS & GENERALIZATIONS (1-15) ---
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "___ society must protect its most vulnerable members.", answer: "-", alt: [], hint: "Abstract nouns speaking in general take the zero article." },
      { type: "mc", instruction: "Select the correct article.", sentence: "________ life was much harder 200 years ago.", options: ["The", "A", "An", "- (zero article)"], correct: 3, hint: "Generalization about life. No article." },
      { type: "drag", instruction: "Drag the correct articles (use '-' for none).", sentence: "_1_ life of Napoleon was filled with _2_ war and conflict.", bank: ["The", "-", "A"], blanks: { "_1_": "The", "_2_": "-" }, hint: "Specific life (of Napoleon) takes 'The'. General concept (war) takes zero." },
      { type: "error", instruction: "Find the error.", sentence: "The love is more important than money.", errorIndex: [0], correction: ["Love"], hint: "Abstract concepts in general take zero article." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "She is studying ___ European history at university.", answer: "-", alt: [], hint: "Academic subjects take the zero article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "I love listening to ________ music when I work.", options: ["the", "a", "- (zero article)"], correct: 2, hint: "Uncountable noun in a general sense." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I love _1_ music they are playing right now. Normally, I don't like _2_ jazz.", bank: ["the", "-"], blanks: { "_1_": "the", "_2_": "-" }, hint: "Specific music vs General music genre." },
      { type: "error", instruction: "Find the error.", sentence: "The information you gave me was very helpful.", errorIndex: [], correction: [], hint: "'Information' is specific here, so 'the' is correct." },
      { type: "error", instruction: "Find the error.", sentence: "I need to look for a new information on this topic.", errorIndex: [5], correction: ["-", "some"], hint: "'Information' is uncountable. You cannot use 'a/an'." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "___ most people agree that the climate is changing.", answer: "-", alt: [], hint: "'Most' meaning 'the majority of' takes no article." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Most of ________ people in this room are from Germany.", options: ["the", "-", "a"], correct: 0, hint: "When 'most' is followed by 'of', it refers to a specific group and needs 'the'." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "_1_ violence in this city is getting worse. We need to stop _2_ violence.", bank: ["The", "-"], blanks: { "_1_": "The", "_2_": "-" }, hint: "Specific violence (in this city) vs General violence." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "We travel by ___ train because it is faster than driving.", answer: "-", alt: [], hint: "Means of transport (by car, by train, by bus) take the zero article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "Have you ever been to ________ space?", options: ["the", "-", "a"], correct: 1, hint: "The universe/cosmos is called 'space' without an article." },
      { type: "error", instruction: "Find the error.", sentence: "The nature is truly beautiful in spring.", errorIndex: [0], correction: ["Nature"], hint: "The natural world is referred to as 'Nature' (zero article)." },

      // --- INSTITUTIONS (Prison, Hospital, School, Bed) (16-25) ---
      { type: "mc", instruction: "Select the correct article.", sentence: "The robber was caught and sent to ________ prison for 10 years.", options: ["the", "a", "- (zero article)"], correct: 2, hint: "Institutions (prison, school, hospital) take zero article when used for their PRIMARY PURPOSE (being an inmate)." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "My mother went to ___ prison to visit my brother yesterday.", answer: "the", alt: [], hint: "She's a visitor to the building, not an inmate confined there — that changes the article." },
      { type: "drag", instruction: "Drag the correct articles.", sentence: "After the accident, he was taken to _1_ hospital. His wife went to _2_ hospital to bring him clothes.", bank: ["-", "the"], blanks: { "_1_": "-", "_2_": "the" }, hint: "Patient = zero article. Visitor = the." },
      { type: "error", instruction: "Find the error.", sentence: "Children in the UK usually start the school at age 4.", errorIndex: [6], correction: ["school"], hint: "Primary purpose (learning) = zero article." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "I am exhausted. I'm going straight to ___ bed.", answer: "-", alt: [], hint: "Going to bed (to sleep) takes zero article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "We went to ________ church to admire the stained glass windows.", options: ["the", "-", "a"], correct: 0, hint: "Visiting for architecture, not for worship (primary purpose)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He studies physics at _1_ university. His graduation ceremony will be held at _2_ university next week.", bank: ["-", "the"], blanks: { "_1_": "-", "_2_": "the" }, hint: "Primary purpose (studying) vs A specific building/event." },
      { type: "error", instruction: "Find the error.", sentence: "He is in the prison for armed robbery.", errorIndex: [3], correction: ["prison"], hint: "Inmate = zero article." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "The plumber went to ___ hospital to fix a broken pipe.", answer: "the", alt: [], hint: "He is not a patient." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Every Sunday, my grandmother goes to ________ church.", options: ["the", "-", "a"], correct: 1, hint: "Primary purpose (worship) = zero article." },

      // --- GEOGRAPHY & UNIQUE ENTITIES (26-40) ---
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "We spent our holiday hiking in ___ Alps.", answer: "the", alt: [], hint: "This is a range of mountains treated as one defined group, not a single peak like 'Everest'." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "Climbing ________ Mount Everest is incredibly dangerous.", options: ["the", "-", "a"], correct: 1, hint: "Individual mountains take the zero article." },
      { type: "drag", instruction: "Drag the articles.", sentence: "We flew over _1_ Atlantic Ocean, but decided not to visit _2_ Portugal on this trip.", bank: ["the", "-"], blanks: { "_1_": "the", "_2_": "-" }, hint: "Oceans take 'the'. Most individual country names take zero article." },
      { type: "error", instruction: "Find the error.", sentence: "We visited the Lake Victoria during our trip to Africa.", errorIndex: [2], correction: ["Lake"], hint: "Individual lakes take the zero article." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "___ River Thames flows through the centre of London.", answer: "The", alt: [], hint: "Rivers are treated as unique, specific geographical features." },
      { type: "mc", instruction: "Select the correct article.", sentence: "I have always wanted to visit ________ Japan.", options: ["the", "-", "a"], correct: 1, hint: "Singular countries take the zero article." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He lives in _1_ Netherlands, but he used to live in _2_ Germany.", bank: ["the", "-"], blanks: { "_1_": "the", "_2_": "-" }, hint: "Plural countries (Netherlands, Philippines) take 'the'." },
      { type: "error", instruction: "Find the error.", sentence: "The capital of the Republic of Ireland is Dublin.", errorIndex: [], correction: [], hint: "Countries containing words like Republic, Kingdom, or States take 'the'." },
      { type: "error", instruction: "Find the error.", sentence: "They went on a safari in the South Africa.", errorIndex: [6], correction: ["South"], hint: "Singular countries take zero article." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "She is from ___ UK, but currently lives in Paris.", answer: "the", alt: [], hint: "Country names that are really abbreviations or plural/political unions need an article." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "Look up at ________ sky! The stars are beautiful tonight.", options: ["the", "-", "a"], correct: 0, hint: "Unique entities (the sky, the sun, the moon) take 'the'." },
      { type: "drag", instruction: "Drag the articles.", sentence: "In the solar system, _1_ Earth revolves around _2_ sun.", bank: ["-", "the"], blanks: { "_1_": "-", "_2_": "the" }, hint: "'Earth', like 'Mars' or 'Venus', is a proper noun with zero article. The sun is a unique object that takes 'the'." },
      { type: "error", instruction: "Find the error.", sentence: "We crossed Sahara desert on camels.", errorIndex: [1], correction: ["crossed", "the"], hint: "Deserts take 'the'." },
      { type: "gap", instruction: "Fill in the article (use '-' for zero article):", sentence: "___ President will give a speech at 8 PM.", answer: "The", alt: [], hint: "A title used alone, without a name attached, refers to a specific known role (compare with 'President Lincoln', which takes zero)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "________ Queen Elizabeth reigned for over 70 years.", options: ["The", "-", "A"], correct: 1, hint: "Title + Name = zero article." },

      // --- INDEFINITE & DEFINITE TRAPS (41-50) ---
      { type: "gap", instruction: "Fill in the article (a/an/the/-):", sentence: "He is ___ honest man.", answer: "an", alt: [], hint: "Listen to the sound at the start of the next word, not the letter — the 'h' here is silent." },
      { type: "mc", instruction: "Choose the correct article.", sentence: "She studies at ________ university in London.", options: ["a", "an", "the", "-"], correct: 0, hint: "'University' starts with a consonant SOUND ('yoo'), so use 'a'." },
      { type: "drag", instruction: "Drag the correct articles.", sentence: "It takes _1_ hour to drive to _2_ European country from here.", bank: ["an", "a"], blanks: { "_1_": "an", "_2_": "a" }, hint: "Hour = silent H. European = 'yoo' sound." },
      { type: "error", instruction: "Find the error.", sentence: "He bought a umbrella because it was raining.", errorIndex: [2], correction: ["an"], hint: "Umbrella starts with a vowel sound." },
      { type: "gap", instruction: "Fill in the article (a/an/the/-):", sentence: "This is ___ best movie I have ever seen.", answer: "the", alt: [], hint: "A superlative describes something unique of its kind, so it needs a specific article." },
      { type: "mc", instruction: "Select the correct form.", sentence: "Only ________ rich can afford to live in this neighbourhood.", options: ["a", "the", "-"], correct: 1, hint: "Adjective used as a noun representing a whole group (the rich, the poor, the elderly) takes 'the'." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She plays _1_ piano beautifully, but she is terrible at _2_ tennis.", bank: ["the", "-"], blanks: { "_1_": "the", "_2_": "-" }, hint: "Musical instruments take 'the'. Sports take zero article." },
      { type: "error", instruction: "Find the error.", sentence: "I want to be a doctor, just like my father.", errorIndex: [], correction: [], alt: ["Correct!"], hint: "Professions take 'a/an' in English." },
      { type: "error", instruction: "Find the error.", sentence: "He works as engineer for a tech company.", errorIndex: [2], correction: ["as", "an"], hint: "Professions require an article." },
      { type: "gap", instruction: "Fill in the article (a/an/the/-):", sentence: "We have breakfast early in ___ morning.", answer: "the", alt: [], hint: "Parts of the day treated this way need a specific article — but note 'at night' is the odd one out." }
    ]
  },

  adjectives_adverbs: {
    group: "4. Miscellaneous",
    title: "Adjectives vs. Adverbs (The -ly traps)",
    rules: {
      summary: "Adjectives describe nouns; adverbs describe verbs, adjectives or other adverbs. The trap is that some common words look like an adverb but aren't, or change meaning entirely with -ly.",
      points: [
        { heading: "Sense/Linking Verbs + Adjective", body: "smell, taste, feel, look, sound + adjective, not adverb, because they link back to describe the subject: 'This soup smells delicious', not 'deliciously'. But when the same verb describes an action being performed, it needs an adverb: 'He looked at her angrily'." },
        { heading: "Good vs Well", body: "'Good' is an adjective ('The plan sounds good'). 'Well' is normally the adverb of manner ('She speaks English very well') — but 'well' can also be an adjective meaning 'in good health' ('I don't feel well')." },
        { heading: "Hard vs Hardly / Late vs Lately", body: "'Hard' is both the adjective and the adverb of effort ('She works hard'). 'Hardly' does NOT mean 'in a hard way' — it means 'barely, almost not' ('I could hardly hear him'). Similarly 'late' is the adverb of time/punctuality ('The train arrived late'), while 'lately' means 'recently', a different meaning entirely." },
        { heading: "Fast — Same Form", body: "'Fast' is identical as adjective and adverb ('a fast car' / 'he runs fast'). There is no word 'fastly'." },
        { heading: "Regular Formation", body: "Most adverbs are formed by adding -ly to the adjective: terrible→terribly, careful→carefully, easy→easily (y→ily), safe→safely, gentle→gently. Adjectives ending in -ic add -ally: automatic→automatically." }
      ],
      examples: [
        { en: "This soup smells **delicious**. / He looked at her **angrily**.", note: "Linking verb + adjective vs action verb + adverb" },
        { en: "She speaks English very **well**.", note: "Well = adverb of manner" },
        { en: "I could **hardly** hear him over the traffic.", note: "Hardly = barely, not 'in a hard way'" },
        { en: "Have you seen any good films **lately**?", note: "Lately = recently" },
        { en: "The doors open **automatically**.", note: "-ic adjective takes -ally" }
      ],
      exceptions: [
        "'Working hardly all week' is a common error — it accidentally means 'doing almost no work', the opposite of the intended meaning.",
        "'Fastly' does not exist in English; 'fast' covers both jobs."
      ]
    },
    exercises: [
      // --- SENSE VERBS & GOOD/WELL (1-15) ---
      { type: "mc", instruction: "Choose the correct form.", sentence: "This soup smells absolutely ________.", options: ["delicious", "deliciously"], correct: 0, hint: "Verbs of the senses (smell, taste, feel, look, sound) are followed by an adjective, not an adverb." },
      { type: "gap", instruction: "Fill in the correct form (good / well):", sentence: "She speaks English very ___.", answer: "well", alt: [], hint: "You need the adverb describing how she speaks, not the adjective form." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "The plan sounds _1_, but we need to execute it _2_.", bank: ["good", "well"], blanks: { "_1_": "good", "_2_": "well" }, hint: "Sound + adjective. Execute + adverb." },
      { type: "error", instruction: "Find the error.", sentence: "I feel terribly about what happened yesterday.", errorIndex: [2], correction: ["terrible"], hint: "Feel + adjective (describing your state of being)." },
      { type: "gap", instruction: "Fill in the correct form (good / well):", sentence: "This new perfume smells really ___.", answer: "good", alt: [], hint: "Smell + adjective." },
      { type: "mc", instruction: "Select the correct form.", sentence: "He looked at me ________ when I suggested the idea.", options: ["angry", "angrily"], correct: 1, hint: "Here, 'look at' is an action verb describing how he did the looking, so it needs an adverb." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "The silk sheets feel very _1_, and she slept _2_ all night.", bank: ["soft", "softly", "peaceful", "peacefully"], blanks: { "_1_": "soft", "_2_": "peacefully" }, hint: "Feel + adjective. Sleep + adverb." },
      { type: "error", instruction: "Find the error.", sentence: "He played the piano incredibly good.", errorIndex: [5], correction: ["well"], hint: "Adverb for 'good' is 'well'." },
      { type: "gap", instruction: "Fill in the correct form (happy / happily):", sentence: "They lived ___ ever after.", answer: "happily", alt: [], hint: "Adverb describing how they lived." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The steak tasted ________, but the service was terrible.", options: ["awful", "awfully"], correct: 0, hint: "Taste + adjective." },

      // --- HARD/HARDLY & LATE/LATELY (16-30) ---
      { type: "gap", instruction: "Fill in the correct form (hard / hardly):", sentence: "She works very ___ to support her family.", answer: "hard", alt: [], hint: "One form doubles as both adjective and adverb here; the '-ly' version means something completely different (barely/almost not)." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I could ________ hear him over the noise of the traffic.", options: ["hard", "hardly"], correct: 1, hint: "'Hardly' means barely or almost not at all." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "He hit the ball so _1_ that it flew over the fence. I _2_ saw it go!", bank: ["hard", "hardly"], blanks: { "_1_": "hard", "_2_": "hardly" }, hint: "Hard = with force. Hardly = barely." },
      { type: "error", instruction: "Find the error.", sentence: "We have been working hardly all week to meet the deadline.", errorIndex: [4], correction: ["hard"], hint: "'Working hardly' means you are doing almost no work!" },
      { type: "gap", instruction: "Fill in the correct form (late / lately):", sentence: "Have you seen any good movies ___?", answer: "lately", alt: [], hint: "You need the word meaning 'recently', not the one meaning 'not on time'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The train arrived 20 minutes ________.", options: ["late", "lately"], correct: 0, hint: "'Late' is both the adjective and the adverb." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "He has been coming to work _1_ a lot _2_.", bank: ["late", "lately"], blanks: { "_1_": "late", "_2_": "lately" }, hint: "Late = not on time. Lately = recently." },
      { type: "error", instruction: "Find the error.", sentence: "It was raining so heavily that I could hard see the road.", errorIndex: [8], correction: ["hardly"], hint: "Barely = hardly." },
      { type: "gap", instruction: "Fill in the correct form (fast / fastly):", sentence: "Don't drive so ___!", answer: "fast", alt: [], hint: "One of these two options isn't actually a real English word." },
      { type: "mc", instruction: "Select the correct form.", sentence: "I've been feeling quite tired ________.", options: ["late", "lately"], correct: 1, hint: "Recently." },

      // --- GENERAL ADVERB TRAPS (31-40) ---
      { type: "gap", instruction: "Fill in the adverb form of 'terrible':", sentence: "I am ___ sorry for the delay.", answer: "terribly", alt: [], hint: "Drop the 'e' and add 'y'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "She handled the situation very ________.", options: ["careful", "carefully"], correct: 1, hint: "Describes the verb (handled)." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "It was a _1_ accident. He was _2_ injured.", bank: ["serious", "seriously"], blanks: { "_1_": "serious", "_2_": "seriously" }, hint: "Adjective describes noun (accident). Adverb describes verb (injured)." },
      { type: "error", instruction: "Find the error.", sentence: "They solved the problem very easy.", errorIndex: [5], correction: ["easily"], hint: "Describes the verb." },
      { type: "gap", instruction: "Fill in the adverb form of 'safe':", sentence: "Please drive ___.", answer: "safely", alt: [], hint: "Keep the 'e' and add 'ly'." },
      { type: "mc", instruction: "Select the correct form.", sentence: "He is a ________ driver.", options: ["dangerous", "dangerously"], correct: 0, hint: "Describes the noun (driver)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "She gave a _1_ smile and spoke _2_ to the child.", bank: ["gentle", "gently"], blanks: { "_1_": "gentle", "_2_": "gently" }, hint: "Adjective for smile, adverb for spoke." },
      { type: "error", instruction: "Find the error.", sentence: "The dog barked loud at the postman.", errorIndex: [3], correction: ["loudly"], hint: "Describes the verb (barked)." },
      { type: "gap", instruction: "Fill in the adverb form of 'automatic':", sentence: "The doors open ___.", answer: "automatically", alt: [], hint: "Adjectives ending in 'ic' usually add 'ally'." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The exam was ________ difficult.", options: ["extreme", "extremely"], correct: 1, hint: "Adverb modifying an adjective." }
    ]
  },

  word_order: {
    group: "4. Miscellaneous",
    title: "Word Order (SVOMPT)",
    rules: {
      summary: "German allows much more flexible word order than English. English sentences follow a strict backbone — Subject, Verb, Object, Manner, Place, Time (SVOMPT) — and adverbs of frequency/certainty have their own fixed slot.",
      points: [
        { heading: "The SVOMPT Backbone", body: "Subject → Verb → Object → Manner (how) → Place (where) → Time (when): 'I will meet you outside the cinema at 8 PM.' The object can never be separated from its verb by another element." },
        { heading: "Place Before Time", body: "When both appear, place always comes before time: 'I went to London yesterday', not 'yesterday to London'." },
        { heading: "Time Goes at the End", body: "Time expressions belong at the very end of the sentence, never in the middle: 'We played tennis last night', not 'played last night tennis'. Never insert a time expression between the verb and its object: 'I bought a new computer yesterday', not 'I bought yesterday a new computer'." },
        { heading: "Adverbs of Frequency", body: "always, never, often, usually, rarely, sometimes go BEFORE the main verb, but AFTER the verb 'to be' or an auxiliary: 'I always drink coffee', 'He is never late', 'He has always been a good friend' (not 'He always has been')." },
        { heading: "Adverbs of Certainty", body: "definitely, probably sit between the auxiliary and the main verb, or before a negative auxiliary: 'We will definitely go' / 'He probably won't come'." }
      ],
      examples: [
        { en: "I will meet **you outside the cinema at 8 PM**.", note: "Object → Manner → Place → Time" },
        { en: "We played tennis **last night**.", note: "Time expression goes at the very end" },
        { en: "He **is never** late for work.", note: "Frequency adverb after 'to be'" },
        { en: "He **has always been** a good friend.", note: "Frequency adverb between auxiliary and main verb" },
        { en: "He probably **won't come**.", note: "Certainty adverb before a negative auxiliary" }
      ],
      exceptions: [
        "'We played last night tennis' and 'I bought yesterday a new computer' are both classic German-influenced word-order errors — time never interrupts the verb-object pair.",
        "Frequency adverbs shift position depending on whether the sentence already has an auxiliary/'to be' — check for one before placing the adverb."
      ]
    },
    exercises: [
      // --- PLACE BEFORE TIME & SVOMPT (1-20) ---
      { type: "mc", instruction: "Select the correct word order.", sentence: "I went ________.", options: ["yesterday to London", "to London yesterday"], correct: 1, hint: "Rule: Place before Time." },
      { type: "gap", instruction: "Type the words in the correct order: (home / early / went)", sentence: "He ___.", answer: "went home early", alt: [], hint: "Verb -> Place -> Time." },
      { type: "drag", instruction: "Drag the phrases into the correct SVOMPT order.", sentence: "I will meet _1_ _2_ _3_.", bank: ["you", "outside the cinema", "at 8 PM"], blanks: { "_1_": "you", "_2_": "outside the cinema", "_3_": "at 8 PM" }, hint: "Object -> Place -> Time." },
      { type: "error", instruction: "Find the error.", sentence: "We played last night tennis.", errorIndex: [2, 3], correction: ["tennis", "last night"], hint: "Time expressions usually go at the END of the sentence." },
      { type: "mc", instruction: "Choose the correct sentence.", options: ["She read quietly the book in her room.", "She read the book quietly in her room.", "She read the book in her room quietly."], correct: 1, hint: "Subject + Verb + Object + Manner + Place + Time." },
      { type: "gap", instruction: "Type in order: (beautifully / sings / she)", sentence: "___.", answer: "She sings beautifully", alt: [], hint: "Subject + Verb + Manner." },
      { type: "drag", instruction: "Drag into order.", sentence: "He walked _1_ _2_ _3_.", bank: ["slowly", "to the park", "this morning"], blanks: { "_1_": "slowly", "_2_": "to the park", "_3_": "this morning" }, hint: "Manner -> Place -> Time." },
      { type: "error", instruction: "Find the error.", sentence: "I bought yesterday a new computer.", errorIndex: [2], correction: ["-"], hint: "Never put Time between the Verb and the Object." },
      { type: "mc", instruction: "Select the correct word order.", options: ["They did quickly their homework.", "They quickly did their homework.", "They did their homework quickly."], correct: 2, hint: "Manner usually goes after the Object." },
      { type: "gap", instruction: "Type in order: (the letter / carefully / read)", sentence: "He ___.", answer: "read the letter carefully", alt: [], hint: "Verb -> Object -> Manner." },

      // --- ADVERBS OF FREQUENCY (21-40) ---
      { type: "mc", instruction: "Where does 'always' go?", sentence: "I ________ drink coffee in the morning.", options: ["always", "(at the end of the sentence)"], correct: 0, hint: "Adverbs of frequency go BEFORE the main verb." },
      { type: "gap", instruction: "Insert 'never':", sentence: "He ___ late for work.", answer: "is never", alt: [], hint: "Adverbs of frequency go AFTER the verb 'to be'." },
      { type: "drag", instruction: "Drag the adverbs.", sentence: "I _1_ eat meat because I am _2_ hungry for it.", bank: ["rarely", "always", "never"], blanks: { "_1_": "rarely", "_2_": "never" }, hint: "Before main verb, after 'be'." },
      { type: "error", instruction: "Find the error.", sentence: "She plays often tennis on Sundays.", errorIndex: [2], correction: ["often plays"], hint: "Frequency before main verb." },
      { type: "mc", instruction: "Choose the correct sentence.", options: ["He has always been a good friend.", "He always has been a good friend.", "He has been always a good friend."], correct: 0, hint: "Between the auxiliary and the main verb." },
      { type: "gap", instruction: "Insert something to show it happens most of the time:", sentence: "They ___ don't agree with me.", answer: "usually", alt: [], hint: "Before the negative auxiliary." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I _1_ go to the gym on weekends, but I am _2_ too busy on weekdays.", bank: ["sometimes", "always", "never", "rarely"], blanks: { "_1_": "sometimes", "_2_": "always" }, hint: "Frequency adverbs go before the main verb, but after 'am/is/are'." },
      { type: "error", instruction: "Find the error.", sentence: "We will go definitely to the party.", errorIndex: [3], correction: ["will definitely go"], hint: "Adverbs of certainty go between the auxiliary and main verb." },
      { type: "mc", instruction: "Where does 'probably' go?", sentence: "He ________ won't come.", options: ["probably", "(after won't)"], correct: 0, hint: "Before the negative auxiliary." },
      { type: "gap", instruction: "Order: (have / easily / won / we)", sentence: "___ the match.", answer: "We have easily won", alt: [], hint: "Auxiliary + Adverb + Main Verb." }
    ]
  },

  quantifiers_pronouns: {
    group: "4. Miscellaneous",
    title: "Quantifiers (Much/Many, Few/Little)",
    rules: {
      summary: "Which quantifier you use depends entirely on whether the noun is countable (many, few) or uncountable (much, little) — and English treats several nouns as uncountable that German treats as countable.",
      points: [
        { heading: "Much vs Many", body: "many + countable plural nouns (many friends, many people). much + uncountable nouns (much information, much time, much money)." },
        { heading: "Nouns That Are Uncountable in English", body: "Several nouns that have a plural in German are always singular/uncountable in English and never take -s: homework, furniture, advice, baggage/luggage, information, news. 'News' takes a singular verb despite looking plural ('The news is bad'), while 'police' is always plural ('The police are looking for the suspect')." },
        { heading: "Few vs A Few / Little vs A Little", body: "few (countable) and little (uncountable) have a negative meaning — 'not enough/almost none': 'He has few friends, so he is lonely.' a few / a little have a positive meaning — 'some, and that's fine': 'I have a little money saved, so I can afford a coffee.' 'Very' commonly intensifies 'little' (very little money)." },
        { heading: "Each vs Every", body: "'Each' focuses on individual items, often in a small or specific set ('a ring on each finger'). 'Every' treats the group as a whole." }
      ],
      examples: [
        { en: "How **much** information did they give you? She has **many** friends but not **much** money.", note: "Countable vs uncountable" },
        { en: "The teacher gave us too **much homework**.", note: "'Homework' is always uncountable — never 'homeworks'" },
        { en: "The news **is** very bad today. The police **are** looking for the suspect.", note: "News = singular verb, police = always plural" },
        { en: "He has **few** friends, so he is very lonely. / Fortunately, **a few** people survived.", note: "Negative vs positive meaning" },
        { en: "I have **a little** money saved up.", note: "A little = some, positive" }
      ],
      exceptions: [
        "Homework, furniture, advice, luggage/baggage, information, and news are uncountable in English even though their German equivalents are often plural — never add -s to them.",
        "'Few' and 'a few' look almost identical but mean nearly opposite things — always check for the article."
      ]
    },
    exercises: [
      // --- MUCH / MANY & COUNTABLE TRAPS (1-20) ---
      { type: "mc", instruction: "Choose the correct quantifier.", sentence: "How ________ information did they give you?", options: ["much", "many"], correct: 0, hint: "'Information' is uncountable in English." },
      { type: "gap", instruction: "Fill in the correct form (much / many):", sentence: "I don't have ___ time left.", answer: "much", alt: [], hint: "Time is uncountable." },
      { type: "drag", instruction: "Drag the quantifiers.", sentence: "She has _1_ friends, but she doesn't have _2_ money.", bank: ["many", "much"], blanks: { "_1_": "many", "_2_": "much" }, hint: "Friends = countable. Money = uncountable." },
      { type: "error", instruction: "Find the error.", sentence: "The teacher gave us too many homeworks.", errorIndex: [5, 6], correction: ["much", "homework"], hint: "'Homework' is always uncountable in English." },
      { type: "mc", instruction: "Select the correct form.", sentence: "We need to buy new ________ for the office.", options: ["furnitures", "pieces of furniture", "furniture"], correct: 2, hint: "'Furniture' is uncountable." },
      { type: "gap", instruction: "Fill in the correct form (much / many):", sentence: "How ___ people were at the party?", answer: "many", alt: [], hint: "People is plural countable." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I need some _1_ on how to solve this. I also need to buy a new piece of _2_ for my office.", bank: ["advice", "advices", "furniture", "furnitures"], blanks: { "_1_": "advice", "_2_": "furniture" }, hint: "Both 'advice' and 'furniture' are uncountable — they never take an '-s'." },
      { type: "error", instruction: "Find the error.", sentence: "He carried three heavy baggages to the train.", errorIndex: [3, 4], correction: ["bags", "pieces of baggage"], hint: "'Baggage/Luggage' is uncountable." },
      { type: "mc", instruction: "Choose the correct form.", sentence: "The news ________ very bad today.", options: ["is", "are"], correct: 0, hint: "'News' is uncountable and takes a singular verb." },
      { type: "gap", instruction: "Fill in the correct form (is / are):", sentence: "The police ___ looking for the suspect.", answer: "are", alt: [], hint: "'Police' is always a plural noun in English." },

      // --- FEW / A FEW / LITTLE / A LITTLE (21-40) ---
      { type: "mc", instruction: "Positive vs Negative meaning.", sentence: "He has ________ friends, so he is very lonely.", options: ["a few", "few", "a little", "little"], correct: 1, hint: "'Few' means 'not enough' (negative). 'A few' means 'some' (positive)." },
      { type: "gap", instruction: "Fill in (little / a little):", sentence: "I have ___ money saved up, so I can afford a coffee.", answer: "a little", alt: [], hint: "You can afford something, so this needs the positive version meaning 'some', not the negative one implying 'hardly any'." },
      { type: "drag", instruction: "Drag the correct forms.", sentence: "I have _1_ time, so I can't help you. But John has _2_ time, so ask him.", bank: ["little", "a little"], blanks: { "_1_": "little", "_2_": "a little" }, hint: "Little = negative. A little = positive." },
      { type: "error", instruction: "Find the error.", sentence: "Fortunately, few people survived the terrible crash.", errorIndex: [1], correction: ["a few"], hint: "If it's 'fortunately', you want the positive meaning ('a few')." },
      { type: "mc", instruction: "Select the correct form.", sentence: "There is very ________ hope left.", options: ["few", "little", "a few", "a little"], correct: 1, hint: "Hope is uncountable, and 'very' is used with 'little'." },
      { type: "gap", instruction: "Fill in (few / a few):", sentence: "___ politicians are truly honest these days.", answer: "Few", alt: [], hint: "Negative meaning (not many)." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "I speak _1_ French, so I could order food. He speaks _2_ French, so he couldn't understand anything.", bank: ["a little", "little"], blanks: { "_1_": "a little", "_2_": "little" }, hint: "A little = enough to function. Little = almost none." },
      { type: "error", instruction: "Find the error.", sentence: "I have a little questions to ask you.", errorIndex: [2, 3], correction: ["a few"], hint: "Questions are countable, so use 'few/a few'." },
      { type: "mc", instruction: "Choose the correct phrase.", sentence: "I only need ________ minutes to finish this.", options: ["few", "a few", "little", "a little"], correct: 1, hint: "Countable + positive meaning ('only a few')." },
      { type: "gap", instruction: "Fill in (each / every):", sentence: "I have a ring on ___ finger of my left hand.", answer: "each", alt: [], hint: "A hand has a small, countable number of fingers — pick the word that emphasizes individual items rather than the group as a whole." }
    ]
  },

  false_friends: {
    group: "4. Miscellaneous",
    title: "False Friends (Lexical Traps)",
    rules: {
      summary: "False friends are words that look or sound like a German word but mean something different in English. These are memorised pair by pair, not derived from a rule.",
      points: [
        { heading: "aktuell vs actual", body: "German 'aktuell' means English 'current' or 'currently' — not 'actual'. English 'actual' means real/genuine, which is German 'tatsächlich'." },
        { heading: "bekommen vs become", body: "German 'bekommen' means English 'get' or 'receive' — not 'become'. English 'become' means German 'werden' (a change of state)." },
        { heading: "sensibel vs sensible", body: "German 'sensibel' means English 'sensitive' — not 'sensible'. English 'sensible' means practical/reasonable, which is German 'vernünftig'." },
        { heading: "sympathisch vs sympathetic", body: "German 'sympathisch' means English 'nice', 'likeable' or 'friendly' — not 'sympathetic'. English 'sympathetic' means showing compassion/pity for someone's problem, which is German 'mitfühlend'." },
        { heading: "eventuell vs eventually", body: "German 'eventuell' means English 'possibly', 'maybe' or 'perhaps' — not 'eventually'. English 'eventually' means 'in the end, after some time', which is German 'schließlich' or 'irgendwann'." },
        { heading: "Chef & Handy", body: "German 'Chef' means English 'boss' or 'manager' — English 'chef' means a professional cook (German 'Koch'). German 'Handy' means an English 'mobile phone' or 'cell phone' — English 'handy' is an adjective meaning 'useful/practical' (German 'praktisch')." }
      ],
      examples: [
        { en: "What is your **current** address? / His **actual** words were very serious.", note: "aktuell → current, tatsächlich → actual" },
        { en: "I **got** a nice gift for my birthday. He wants to **become** a doctor.", note: "bekommen → get, werden → become" },
        { en: "My skin is very **sensitive** to the sun. Bringing an umbrella was a **sensible** decision.", note: "sensibel → sensitive, vernünftig → sensible" },
        { en: "He is a very **nice** guy; everybody likes him. When my dog died, my boss was very **sympathetic**.", note: "sympathisch → nice, mitfühlend → sympathetic" },
        { en: "**Possibly** it will rain later. It took a long time, but **eventually** he found a job.", note: "eventuell → possibly, eventually → schließlich" },
        { en: "The **boss** of the company gave a speech. Please turn off your **mobile phone**.", note: "Chef → boss, Handy → mobile phone" }
      ],
      exceptions: [
        "'Got' and 'became' are both accepted for a change of state with an adjective ('He got/became angry') — 'got' is more common in spoken English.",
        "These six pairs are the most common German-English false friends at B2/C1 level, but the trap is the same for all of them: the German-looking word is (almost) never the right English translation."
      ]
    },
    exercises: [
      // --- ACTUAL/CURRENT & BECOME/GET (1-20) ---
      { type: "mc", instruction: "Translate 'aktuell':", sentence: "What is your ________ address?", options: ["actual", "current"], correct: 1, hint: "'Actual' means 'tatsächlich'. 'Current' means 'aktuell'." },
      { type: "gap", instruction: "Translate 'bekommen':", sentence: "I ___ a nice gift for my birthday.", answer: "got", alt: ["received"], hint: "'Become' means 'werden'." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "He wants to _1_ a doctor. He hopes to _2_ a scholarship.", bank: ["become", "get"], blanks: { "_1_": "become", "_2_": "get" }, hint: "Become = werden. Get = bekommen." },
      { type: "error", instruction: "Find the error.", sentence: "The actual situation in the country is very tense.", errorIndex: [1], correction: ["current", "present"], hint: "Aktuell = current." },
      { type: "mc", instruction: "Translate 'tatsächlich':", sentence: "I thought he was joking, but his ________ words were very serious.", options: ["current", "actual"], correct: 1, hint: "Actual = tatsächlich." },
      { type: "gap", instruction: "Translate 'werden':", sentence: "The weather is going to ___ worse tomorrow.", answer: "get", alt: ["become"], hint: "Before an adjective describing a change of state, English often prefers a shorter, more casual verb than the obvious cognate." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "This is a _1_ problem right now. What was the _2_ cause of the fire?", bank: ["current", "actual"], blanks: { "_1_": "current", "_2_": "actual" }, hint: "Current = now. Actual = real." },
      { type: "error", instruction: "Find the error.", sentence: "I become a new car yesterday.", errorIndex: [1], correction: ["got", "bought", "received"], hint: "Become = werden." },
      { type: "mc", instruction: "Choose the correct word.", sentence: "He ________ angry when I told him the news.", options: ["got", "became", "both are correct"], correct: 2, hint: "Both mean 'werden' with adjectives, though 'got' is more common in spoken English." },
      { type: "gap", instruction: "Translate 'aktuell':", sentence: "I am ___ reading a book about history.", answer: "currently", alt: [], hint: "Currently = zurzeit/aktuell." },

      // --- SENSIBLE/SENSITIVE & SYMPATHETIC/NICE (21-40) ---
      { type: "mc", instruction: "Translate 'sensibel':", sentence: "Don't shout at her, she is very ________.", options: ["sensible", "sensitive"], correct: 1, hint: "'Sensible' means 'vernünftig'. 'Sensitive' means 'sensibel'." },
      { type: "gap", instruction: "Translate 'vernünftig':", sentence: "Bringing an umbrella was a very ___ decision.", answer: "sensible", alt: [], hint: "Sensible = acting with good sense/logic." },
      { type: "drag", instruction: "Drag the correct words.", sentence: "My skin is very _1_ to the sun. You should be _2_ and wear sunscreen.", bank: ["sensitive", "sensible"], blanks: { "_1_": "sensitive", "_2_": "sensible" }, hint: "Sensitive = easily affected. Sensible = logical." },
      { type: "error", instruction: "Find the error.", sentence: "He is a very sympathetic guy; everybody likes him.", errorIndex: [4], correction: ["nice", "likeable", "friendly"], hint: "'Sympathetic' means 'mitfühlend' (showing pity). 'Sympathisch' is 'nice' or 'likeable'." },
      { type: "mc", instruction: "Translate 'mitfühlend':", sentence: "When my dog died, my boss was very ________.", options: ["sympathetic", "nice", "likeable"], correct: 0, hint: "Sympathetic = showing understanding for someone's sadness." },
      { type: "gap", instruction: "Translate 'eventuell':", sentence: "___ it will rain later, so bring a jacket.", answer: "Possibly", alt: ["Maybe", "Perhaps"], hint: "'Eventually' means 'schließlich/irgendwann'. 'Eventuell' is 'possibly/maybe'." },
      { type: "drag", instruction: "Complete the sentence.", sentence: "It took a long time, but _1_ he found a job. _2_ he will be promoted soon.", bank: ["eventually", "possibly"], blanks: { "_1_": "eventually", "_2_": "Possibly" }, hint: "Eventually = in the end. Possibly = maybe." },
      { type: "error", instruction: "Find the error.", sentence: "She gave me a sensible look when I told her my sad story.", errorIndex: [4], correction: ["sympathetic"], hint: "A look of pity is sympathetic." },
      { type: "mc", instruction: "Translate 'Chef':", sentence: "The ________ of the company gave a speech.", options: ["chef", "boss", "manager"], correct: 1, hint: "'Chef' means 'Koch'. 'Chef' in German is 'boss/manager'." },
      { type: "gap", instruction: "Translate 'Handy':", sentence: "Please turn off your ___ during the exam.", answer: "mobile phone", alt: ["cell phone", "phone"], hint: "'Handy' in English is an adjective meaning 'praktisch'." }
    ]
  },

};
