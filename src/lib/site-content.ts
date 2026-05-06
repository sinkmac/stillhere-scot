export const footerLinks = [
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/scottish-heritage', label: 'Scottish heritage' },
  { href: '/faq', label: 'FAQ' },
  { href: '/privacy', label: 'Privacy' }
] as const;

export const primaryNavigationLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/how-it-works', label: 'How it works' },
  { href: '/scottish-heritage', label: 'Scottish heritage' },
  { href: '/faq', label: 'FAQ' }
] as const;

export const homepageContent = {
  headline:
    "A hundred years from now, your descendants won't find scratch marks on a screen. They'll find you.",
  subhead:
    'Still Here helps families record the testimonies that no document was ever built to keep — and build the archive that future generations will be grateful someone thought to make.',
  tagline: 'For families. For researchers. For everyone who knows the window is closing.',
  ctaLabel: 'Get started',
  ctaHref: '/interest'
} as const;

export const interestPage = {
  title: 'The Still Here vault is in development.',
  body: "Register your interest and we'll let you know when it's ready.",
  formAction: 'https://formspree.io/f/xkoqkkbw'
} as const;

export const aboutPage = {
  title: 'Still Here',
  paragraphs: [
    "My mother sent me to Register House in Edinburgh to look into the family history. I sat at a microfiche machine and found my ancestors — people who loved, worked, argued, grieved, raised children, built things, lost things — reduced to scratch marks on a screen. A name. A date. A parish. Nothing else.",
    'The people themselves were gone. Not just dead — gone. There was no way back to them.',
    'I sat with that for a long time. And then I started to think about what was different now.',
    "From this point forward, anyone who thinks to act will leave something entirely different behind. Not scratch marks. Speech. Photographs. Video. A grandmother talking about what the street smelled like, what she wore to her first job, what she thought about when she was frightened. A grandfather explaining what he believed, what he regretted, what he was proud of. Living history — not a record of a person, but the person themselves, still present for whoever comes looking a hundred years from now.",
    'That is what Still Here is for.',
    'We are a living memory and genealogy platform. We help families record the testimonies that no official document was ever designed to keep — and build the archive that future generations will be grateful someone thought to make.'
  ]
} as const;

export const howItWorksPage = {
  title: 'How it works',
  sections: [
    {
      heading: 'The conversation',
      body:
        'It starts with a conversation. We help you prepare for it — questions shaped around who you are interviewing, where they are from, what you already know, what you want to preserve. Questions that invite memory rather than demand it. Questions you can take into the room.'
    },
    {
      heading: 'Or start with yourself',
      body:
        'Not every testimony begins with someone else asking the questions. Some people come to Still Here because they have decided it is time to record their own story — in their own words, on their own terms, for the people who will want to know who they were. If that is you, our guide to recording your own story covers everything you need.'
    },
    {
      heading: 'The recording',
      body:
        'You record on whatever you have. A phone is enough. We guide you through the setup so the result is something worth keeping — good light, clear sound, the person comfortable and unhurried. The recording belongs to you and your family. It always will.'
    },
    {
      heading: 'The archive',
      body:
        'What you capture goes into your family vault — a private, secure archive accessible only to the people you choose. Not a social platform. Not a public gallery. A family record, held carefully, available when it matters. The vault is where the testimony lives beyond the conversation. Future generations will find it there — not scratch marks on a screen, but a voice, a face, a person still present.'
    },
    {
      heading: 'What Still Here is not',
      body:
        'It is not a genealogy database. It is not a DNA service. It is the part of the family record that no database was ever built to keep.'
    },
    {
      heading: 'Getting started',
      body: 'The first step is the conversation you keep meaning to have. Still Here helps you have it.'
    }
  ]
} as const;

export const scottishHeritagePage = {
  title: 'Scottish heritage',
  paragraphs: [
    "Scotland has one of the most documented genealogical records in the world and one of the most scattered populations. The combination is unusual — and it is why family history research with a Scottish thread tends to go deep.",
    'The Old Parish Registers stretch back to the sixteenth century. Statutory civil registration began in 1855, earlier than much of the English-speaking world. The census records are detailed. The testaments, sasines, and valuation rolls fill in what the church registers miss. Register House in Edinburgh holds the national collection, and ScotlandsPeople has made the majority of it searchable from anywhere on earth.',
    'The records exist. The challenge is what they cannot tell you.',
    'They tell you that someone was baptised in Kirriemuir in 1841. They tell you that she married in Dundee in 1863 and died in Glasgow in 1907. They do not tell you what the journey felt like. They do not tell you what she thought about the move, what she left behind, what she carried with her. They do not tell you what her voice sounded like or what she called her children at home.',
    'That is the gap Still Here exists to close.'
  ],
  diaspora: [
    "Scotland's history is also a history of departure. The Highland Clearances. The economic migrations of the industrial era. The waves of emigration to Canada, the United States, Australia, New Zealand, and beyond. An estimated forty to fifty million people worldwide claim Scottish descent — many of them actively searching for the connection their ancestors left behind.",
    'For the diaspora, the records are a starting point. What brings people back — to Register House, to the parish kirkyards, to the glens their great-grandparents left — is something the records cannot provide. It is the desire to understand not just that someone was here, but what it was like to be here.',
    'Still Here is for that moment. For the conversation that is still possible with the people who remember, before the window closes.'
  ],
  resources: [
    {
      name: 'ScotlandsPeople',
      body:
        'the official Scottish genealogy records portal, holding births, marriages, deaths, census records, and parish registers. Some records are free; others require a small fee per view.'
    },
    {
      name: 'Register House, Edinburgh',
      body: 'the National Records of Scotland, holding the physical archive. Open to the public for research visits.'
    },
    {
      name: 'Canmore',
      body: 'the national record of the built environment, useful for place history and estate records.'
    },
    {
      name: 'The Mitchell Library, Glasgow',
      body: 'one of the largest public reference libraries in Europe, with extensive local history and genealogy collections.'
    }
  ]
} as const;

export const articles = {
  recordCantTellYou: {
    slug: 'what-a-record-cant-tell-you',
    title: "What a record can't tell you",
    body: [
      'There is a moment every genealogist knows.',
      'You find the entry. The handwriting is clear, the date correct, the name unmistakable. Your ancestor, right there, in ink that has survived two hundred years. You write it down. You move it into the tree. And then you sit back and realise you know almost nothing more than you did before you started.',
      'A record proves presence. It does not explain a life.',
      'The historical record is a byproduct system. Parish registers existed to track baptisms, marriages, and burials for administrative purposes — not to preserve character, motive, or feeling. Census returns recorded occupation and address. Wills recorded the distribution of property. Passenger lists recorded names, ages, and nationalities, because someone needed to count the bodies on a ship.',
      'None of these documents were created to answer the questions you are actually asking.',
      'Why did they leave? What did they think about when they crossed? Were they afraid, or relieved, or both? What did they call their children at home — not the formal name in the register, but the name that stuck? What did they know that they never wrote down, because in their time, the things that mattered most were simply spoken?',
      'The archive answers the verifiable. It is silent on everything else.',
      'This is not a criticism of archives. It is a description of what they are.',
      'The people who maintained these records were doing something important and often difficult. Without them, we would have nothing. But a record is a transaction between a person and an institution. It captures what the institution needed to know. It was never designed to capture what the person needed to say.',
      'That gap is not an accident of poor record-keeping. It is structural. It is built into every document type that exists. The more official the record, the further it sits from the texture of a life.',
      'A death certificate tells you when and where and, if you are lucky, the cause. It does not tell you who was in the room. It does not tell you what the last conversation was. It does not tell you whether the person died knowing they were loved, or whether that was left unsaid, or whether it was said so many times it had become the air in the room.',
      'Genealogy at its most serious is not the accumulation of records. It is the interpretation of gaps.',
      'The skilled genealogist reads what is missing as carefully as what is present. An absent father in a census. A child recorded with the mother\'s surname. A sudden move from one county to another with no obvious reason. A will that skips a son. These are not failures of the archive — they are the archive telling you that something happened which it was not designed to record.',
      'The gap is the signal.',
      'And this is where the living person becomes irreplaceable in a way no database ever can be.',
      'There is a category of knowledge that exists only in people.',
      'Not in documents. Not in records that survive. Not in the institutional memory of any archive, however well-maintained. In people. In the recollection of someone who was there, or who heard it from someone who was, or who grew up in the shadow of something that happened before they were born but shaped everything around them.',
      'Family historians call this oral testimony. What they mean, simply, is: someone remembers.',
      'Someone remembers that great-grandmother never talked about her first husband. Someone remembers that the move from Dundee happened suddenly, in winter, and that the subject was never raised again at table. Someone remembers what the house smelled like, what was kept and what was thrown away, which stories were told every Christmas and which were sealed behind a look that meant do not ask.',
      'This knowledge has a lifespan. It does not outlive the people who carry it unless someone thinks to ask, and to listen, and to keep what they hear.',
      'The archive and the testimony are not competing methods. They are different kinds of evidence that answer different questions.',
      'The archive tells you that someone was here. The testimony tells you what it was like to be here.',
      'Both matter. Neither is sufficient alone. A family history built only on records is a skeleton — accurate, precise, and cold. A family history built only on memory is tissue without bones — warm, vivid, and structurally unreliable. The work is to hold both: the verified fact and the living account, each informing and correcting the other.',
      'That is what serious genealogy has always known. It is why the best family historians have always sought out the last people who remember — urgently, before the window closes.',
      'The window closes faster than people expect.',
      'Not in a crisis, usually. In a gradual narrowing — a slower walk, a slightly longer pause before an answer, an afternoon nap that becomes a habit. The knowledge does not announce its departure. It simply becomes unavailable, and then it is gone, and the questions that depended on it go unanswered from that point forward.',
      'Still Here exists for the moment before that. For the conversation that is still possible. For the account that can still be given, while the person who holds it is still here to give it.',
      'Not instead of the archive. Alongside it. As the part of the record that the archive was never built to keep.'
    ],
    footer:
      'Still Here is a living memory and genealogy platform. We help families record the testimonies that no document will ever contain — and build the archive that future generations will be grateful someone thought to make.'
  },
  storyIsntSimple: {
    slug: 'when-the-story-isnt-simple',
    title: "When the story isn't simple",
    body: [
      'Most families have one.',
      'A version of events that everyone knows not to question at the table. A name that produces a silence. A decade that gets skipped in the telling. A branch of the tree that nobody visits, or visits too often with too much emphasis, which amounts to the same thing.',
      'Family history is not a neutral archive. It is a living argument — contested, curated, and selective in ways that families rarely acknowledge out loud.',
      'If you are thinking about recording a testimony, this is worth knowing before you begin.',
      'Memory is not a recording device.',
      'Every time we recall an event, we rebuild it from fragments — the fragments most available, most emotionally weighted, most consistent with the story we have come to believe about ourselves and our lives.',
      'This means that a sincere, clearly-remembered account can still be partial. It can omit what was painful. It can rearrange the sequence of events into something more coherent than the original experience. It can absorb details heard second-hand and assign them to first-hand memory. It can, without any deliberate deception, produce a version of events that another person in the same room would not recognise.',
      'This is not lying. It is how memory works.',
      'And then there is the deliberate shaping.',
      'Some things in family history are kept quiet by choice. Shame — the original kind and the inherited kind — is a powerful editor. An illegitimate birth in an era when that mattered. A period of poverty that felt like failure. A departure that was not voluntary. A relationship that was never approved of, and so was never mentioned, and so was eventually forgotten.',
      'Some silences are protective. Some are self-protective. Some have been maintained for so long that the person keeping them no longer experiences them as silences — only as the shape of the story they have always told.',
      'You may encounter this when you ask someone to speak for the record.',
      'You may hear a version of events that you know — from your own memory, from other accounts, from documents — is incomplete, or softened, or wrong in particular ways that matter.',
      'What do you do with that?',
      'There is no single answer. But there are some principles that tend to hold.',
      'The testimony is a primary source, not a verdict. What someone remembers and chooses to say is itself historically significant — including its gaps and its distortions. The fact that great-grandfather never mentioned the first family, the one who died before the emigration, is part of the record. The silence is data. You do not have to resolve the contradiction to preserve it.',
      'You are not the examiner. A testimony is not a deposition. You are not there to establish a factual account against which the speaker will be measured. You are there to hear what this person holds, in the form they hold it. Cross-examination produces defensiveness and closure. Careful listening produces more.',
      'Multiple accounts can coexist. If you know that your mother\'s version of the family story differs from your aunt\'s, you do not have to choose one and discard the other. Both are evidence. Both are the product of lives lived in proximity to the same events, experienced differently, and carried differently through time. The disagreement itself tells you something about the events and about the family.',
      'Some things may not be yours to extract. There are things people have decided not to pass on. Sometimes this is protective. Sometimes it is harmful — knowledge of medical history, of inherited patterns, of things that matter for the living. You will have to make your own judgment about which is which. But the attempt to force disclosure rarely produces what you were looking for, and it can close a door that was otherwise open.',
      'None of this should make you hesitate to ask.',
      'The messiness of family memory is not a reason to leave it unrecorded. It is a reason to record it with care and with honesty about what you have. A partial testimony is more valuable than no testimony. A contested account is more valuable than a silence. An imperfect reconstruction of how someone understood their own life is more valuable than the two lines in a census that prove they existed.',
      'Future generations will know how to read what you have collected. They will bring their own research, their own questions, their own documents. They will compare your recording against what the archives say, and they will understand that the gaps and the contradictions are part of the story.',
      'What they cannot work with is nothing.',
      'The record and the testimony do not have to agree to be useful together.',
      'In fact, the places where they disagree are often the most historically interesting places of all. The document that says one thing and the living account that says another are not a problem to be resolved. They are an invitation to understand something about the distance between the official version of a life and the version that was actually lived.',
      'That distance is where most of the real history lives.'
    ],
    footer:
      'Still Here is a living memory and genealogy platform. We help families record the testimonies that no document will ever contain — including the complicated ones.'
  }
} as const;

export const guidePages = {
  askWithoutMorbid: {
    slug: 'how-to-ask-without-sounding-morbid',
    title: 'How to ask — without sounding morbid',
    body: [
      'There is a conversation most families never have. Not because nobody wants to have it, but because nobody knows how to start it without sounding like they are preparing for a funeral.',
      'You want to hear your father\'s stories before they are gone. You want your children to know what their grandmother\'s life was actually like. You want to capture something before the window closes — and you know, somewhere, that the window is closing.',
      'But how do you say that out loud without making everyone in the room uncomfortable?',
      "The answer is that you probably don't say it out loud at all. Not like that.",
      'Start with curiosity, not urgency.',
      'The most natural way into this conversation is through genuine interest, not preservation anxiety. People respond to being found interesting. They do not respond well to being treated as a resource that needs archiving before it runs out.',
      'So start with a question you actually want answered. Not “I want to record your memories before you die” — which is true, but not a good opening — but “I\'ve always wanted to know what Paisley was like when you were young” or “I never knew much about your time at the mill — can you tell me about it?”',
      'Curiosity is an invitation. Urgency is a pressure. The conversation you want comes from the first, not the second.',
      'Choose the right moment.',
      'This is not a conversation to spring on someone. The best testimonies happen when the person feels comfortable, unhurried, and genuinely valued — not ambushed at the end of Sunday dinner.',
      'A relaxed afternoon. A quiet hour. A time when there is nowhere else to be and nothing else to do. Tell them in advance that you\'d like to sit down and hear some of their stories — not as a formal interview, just as a conversation you\'ve been meaning to have.',
      'Most people, when asked properly, are glad to be asked.',
      "It doesn't have to be recorded to start.",
      'If the idea of recording feels like too much of a step, start without it. Have the conversation first. Let it be what it is — two people talking. If it goes well, you can suggest recording another time. If it opens something up, you\'ll know the ground is ready.',
      'The recording matters. But the conversation matters more.',
      'What to say.',
      'If you want a simple way to open, this works:',
      '“I\'ve been thinking that I\'d love to hear more about your life — the places you lived, what things were like, the stories I\'ve never heard properly. Would you be up for a conversation sometime? I\'d love to keep it.”',
      'That is not morbid. It is the most natural thing in the world to want.'
    ]
  },
  whatIfTheyResist: {
    slug: 'what-if-they-resist',
    title: 'What if they resist',
    body: [
      'Not everyone wants to be interviewed. Not everyone is comfortable being recorded. Some people deflect. Some people say there is nothing worth telling. Some people mean it, and some people are waiting to be asked again.',
      'Understanding which is which matters.',
      '“There\'s nothing interesting about my life”',
      'This is the most common resistance, and it is almost never true.',
      'It usually means one of three things: genuine modesty, a habit of self-erasure that has become automatic over a lifetime, or a test — conscious or not — of whether you actually mean it when you say their story matters.',
      'The response is not to argue. It is to be specific.',
      '“I want to know what the mill was like.” “I want to hear about the move to Glasgow.” “I want to know what you thought about when you were my age.” Specific questions make it harder to claim there is nothing to say — because you are not asking for a life summary, you are asking about one thing.',
      'Specific interest is harder to deflect than general interest.',
      '“I don\'t want to be recorded”',
      'Respect this immediately and completely. Never push.',
      'Some people are uncomfortable with cameras. Some have complicated feelings about their own voice or appearance. Some have reasons they won\'t explain. None of these require your understanding before you accept them.',
      'If recording is refused, the conversation still matters. Notes are better than nothing. A written account based on what you remember afterwards is better than nothing. The memory preserved in your own head, passed on to your children, is better than nothing.',
      'The recording is the ideal. It is not the only path.',
      'You might also find that resistance to recording softens over time, once the person has experienced the conversation itself and seen that it was not threatening. Do not push in the moment. Leave the door open.',
      'Silence and deflection.',
      'Some people go quiet at certain questions. They change the subject. They give short answers and wait for you to move on.',
      'Follow their lead. The silence is information. The deflection is a boundary.',
      'This does not mean the territory is permanently closed. It means it is closed today, or closed with you, or closed in this format. Sometimes a question that produces silence in a direct conversation will open up later, approached differently, in a different context.',
      'Note what was deflected. Come back to it gently, another time, if the relationship allows.',
      'When there are things they have decided not to pass on.',
      'Some silences are protective. Some people have decided, consciously or otherwise, that certain things end with them. Shame that has been carried for decades. Pain that was never spoken about. A part of the story they do not want to become the family\'s story.',
      'You may sense this. You may even know what it is.',
      'Do not force it. The attempt to extract what someone has chosen to keep will close more doors than it opens, and it will change the quality of everything else they share.',
      'What people choose to keep is part of the record too. The silence tells you something, even if it doesn\'t tell you everything.',
      'The second ask.',
      'If the first approach is declined, wait. Do not interpret a no in one moment as a no forever. People change. Circumstances change. The person who deflects in their seventies may be more willing in their eighties, when the question of what gets left behind feels more immediate.',
      'The most important thing is that they know the offer is open. That someone cares enough to ask. That the door is there whenever they are ready to walk through it.',
      'Sometimes that knowledge alone is enough to change things.'
    ]
  },
  whenMemoryFragments: {
    slug: 'when-memory-fragments',
    title: 'When memory fragments',
    body: [
      'Memory does not keep clean records.',
      'It keeps feelings, impressions, fragments. It keeps the smell of a kitchen and the sound of a particular laugh. It keeps certain moments with strange precision and loses decades without explanation. It conflates, compresses, invents small details to fill the gaps, and presents the result with complete confidence.',
      'This is not a failure. It is how memory works. But it matters when you are trying to capture something true.',
      'What to do when the story keeps changing.',
      'Some people tell the same story differently every time. Dates shift. Names move between people. The sequence of events rearranges itself. What was one house becomes two. What happened in summer becomes winter.',
      'Do not correct in the moment. Correction interrupts the flow, introduces self-consciousness, and often produces less — not more — accurate recall. Let the story come as it comes.',
      'Note the variation afterwards. Keep your own record of what changed between tellings. The differences are often as revealing as the consistencies — they show you where memory is uncertain, where something may have been processed rather than simply remembered, where the story has been shaped by time and telling.',
      'When they can\'t remember.',
      '“I can\'t remember” is not the end of the line.',
      'It is worth staying with, gently. Not pressing — but not moving on too quickly either. Sometimes what cannot be retrieved directly can be approached from the side.',
      'Not “what year did you move to Glasgow?” but “what was the first thing you noticed about Glasgow when you arrived?” Not “when did your mother die?” but “what do you remember about the time around when you lost her?”',
      'Concrete sensory details often unlock what abstract questions cannot. Place, weather, objects, routines, other people present — these are the handles that memory holds onto when the larger facts have slipped.',
      'When the timeline doesn\'t add up.',
      'Sometimes the dates simply do not work. Someone claims to have been present at an event that happened before they were born, or remembers a place they could not have visited given what the records show.',
      'This is not lying. It is the way memory absorbs family stories, overheard conversations, and photographs into first-person experience. A child who grew up hearing their parents describe a house will sometimes remember that house as if they lived in it themselves.',
      'When the timeline doesn\'t add up, note it. Do not challenge it directly. Record what was said alongside what you know from documents. Let the discrepancy stand — it is part of the picture.',
      'When memory is painful.',
      'Some fragments surface with unexpected force. A question asked lightly lands somewhere deep. The person goes quiet, or emotional, or somewhere else entirely for a moment.',
      'Slow down. Do not rush past it. Do not fill the silence with another question.',
      'You can acknowledge it simply: “Take your time.” “We don\'t have to go there if you\'d rather not.” “I\'m glad you told me that.”',
      'What comes after a difficult moment is often the most important thing said in the whole conversation. Give it room.',
      'The incomplete record is still a record.',
      'A testimony with gaps, contradictions, and uncertain dates is not a failed testimony. It is an honest one.',
      'Future generations will bring their own research to what you have gathered. They will have documents you do not have. They will find records that clarify what was uncertain. They will read your testimony alongside everything else they know and understand it in context.',
      'What they cannot work with is nothing.',
      'The fragmented, imperfect, sometimes contradictory account of a life as it was actually remembered is worth infinitely more than the silence that comes from waiting for the memory to be cleaner than it will ever be.',
      'Record what is there. Note what is uncertain. Leave the gaps visible.',
      'That is honest work.'
    ]
  },
  questionsForGrandparents: {
    slug: 'questions-to-ask-your-grandparents',
    title: 'Questions to ask your grandparents',
    body: [
      'The hardest part is usually starting. Once a conversation like this is underway, it tends to find its own momentum — one memory leads to another, a question you didn\'t plan turns out to be the one that opens everything up. But you need somewhere to begin.',
      'These questions are not a script. They are starting points. Use the ones that feel right, leave the ones that don\'t, and follow wherever the answers lead.',
      'Childhood and place',
      'What do you remember first about where you grew up — a street, a smell, a particular view?',
      'What was the house like? Who else lived there?',
      'What did you do after school? Where did you go, who did you go with?',
      'What was the neighbourhood like — the people, the atmosphere, the things that happened there?',
      'Was there a place that felt particularly yours when you were young?',
      'What did the seasons feel like where you grew up?',
      'Family',
      'Who were the most important people in your early life, apart from your parents?',
      'What do you remember about your grandparents?',
      'Were there family stories that got told and retold — things that happened before you were born that everyone knew about?',
      'What was the atmosphere in the house like — was it quiet, busy, loud, serious, warm?',
      'Was there anyone in the family who was talked about but not talked about, if you know what I mean?',
      'Work and daily life',
      'What was your first job? How did you get it?',
      'What was the work like — the hours, the people, the physical reality of it?',
      'What did a normal day look like in your twenties?',
      'What did people do for enjoyment? What did you do?',
      'What did money feel like — was there enough, was it tight, did it shape the choices you made?',
      'Hard times',
      'Were there periods that were particularly difficult — times when things felt uncertain or frightening?',
      'How did people around you manage hardship? Was it talked about or carried quietly?',
      'Was there something that happened that changed the direction of your life?',
      'Objects and photographs',
      'Is there an object you still have from your childhood or early life?',
      'If you could keep one thing from that time, what would it be?',
      'Are there photographs you could tell me about — people or places I wouldn\'t recognise?',
      'Is there something that belonged to someone you lost that you\'ve kept?',
      'Looking back',
      'What do you think was the best decision you ever made?',
      'Is there something you wish you had done differently?',
      'What do you want the people who come after you to know about your life?',
      'What do you think shaped you most — a person, a place, an experience?',
      'What are you most proud of?',
      'A few things to keep in mind',
      'Let silence sit. Not every pause needs filling. Some of the best answers come after a moment of quiet.',
      'Follow the detail. If they mention a name, a place, an incident in passing, ask about it. The things mentioned lightly are often the things that matter most.',
      'You don\'t need to cover everything. One good hour of honest conversation is worth more than an exhaustive questionnaire answered in a hurry.'
    ]
  },
  recordHomeTestimony: {
    slug: 'how-to-record-a-home-testimony',
    title: 'How to record a home testimony',
    body: [
      'You do not need professional equipment. You do not need a studio, a crew, or anything more than what most people already have in their pocket.',
      'What you need is a charged phone, a quiet room, good light, and enough time to let the conversation breathe.',
      'The phone is enough.',
      'Modern smartphones record video at a quality that would have required expensive equipment ten years ago. The camera in your phone is capable of producing something genuinely worth keeping.',
      'What matters is not the device. It is how you use it.',
      'Light.',
      'This is the single most important factor in whether a recording looks good.',
      'Natural light is best. Sit the person facing a window — not with the window behind them, which will make them a silhouette, but facing it, so the light falls on their face. Overcast daylight is ideal. Direct harsh sunlight can be unflattering but is still better than a dark room.',
      'If you are recording in the evening or in a room without good natural light, position a lamp in front of the person rather than behind them. A simple bedside lamp moved to the right position makes an enormous difference.',
      'Avoid recording with a bright window or light source directly behind the subject. The camera will expose for the background and the person will be dark.',
      'Sound.',
      'Sound is more important than picture quality. A slightly soft image is forgivable. Audio that is hard to hear or full of background noise makes a recording difficult to watch and almost impossible to transcribe.',
      'Close doors and windows to reduce outside noise. Turn off televisions, radios, and anything that hums — refrigerators, fans, air conditioning if possible. Ask anyone else in the house to stay quiet for the duration.',
      'Sit close enough that the phone\'s microphone can pick up a natural speaking voice clearly. If the person speaks quietly, you may need to sit closer than feels natural at first.',
      'Test the sound before you start properly. Record thirty seconds, play it back, check that the voice is clear and the background is quiet.',
      'Framing.',
      'Position the phone at roughly eye level with the person — propped on books, a stack of something stable, or a simple phone stand if you have one. A camera looking up at someone is unflattering. A camera looking down is worse.',
      'Frame the shot so the person\'s face and upper body are visible — a mid-shot rather than a close-up or a wide shot of the whole room. You want to see their face clearly, including their expressions.',
      'Leave a little space above their head. Not much — just enough that they are not pressed against the top of the frame.',
      'The room.',
      'Choose somewhere the person is comfortable. Their own home, their own chair. Not somewhere they feel formal or on display.',
      'A simple background is better than a cluttered one — a plain wall, a bookshelf, a window with soft light. You are not trying to create a film set. You are trying to make the person feel at ease so they speak naturally.',
      'Battery and storage.',
      'Check that the phone is charged before you start. Check that there is enough storage for a long recording. A one-hour conversation in high-quality video can take up significant space — clear space if needed, or drop the video quality one setting if storage is tight.',
      'Starting the recording.',
      'Start recording before the conversation properly begins — while you are still settling, while the person is still relaxed and not performing for a camera. Some of the most natural moments happen in the first few minutes before anyone has fully registered that the recording is underway.',
      'Tell the person the recording is running. There should be no ambiguity about that. But you do not need to make a ceremony of it.',
      'During the recording.',
      'Keep your own voice calm and unhurried. The pace of the interviewer shapes the pace of the conversation.',
      'Look at the person, not the phone. You are having a conversation, not monitoring a camera.',
      'Do not rush past silences. Do not fill pauses with reassurances or prompts. Let the person find their way to what they want to say.',
      'If something interesting comes up unexpectedly, follow it. The questions you planned are a guide, not a contract.',
      'After.',
      'Back the recording up as soon as possible — to a computer, to cloud storage, to a second device. Do not leave the only copy on a phone that could be lost, broken, or wiped.',
      'Label the file with the person\'s name and the date. Something simple: Margaret McLay, 12 May 2026. Future generations will be grateful for the specificity.'
    ]
  },
  recordOwnStory: {
    slug: 'recording-your-own-story',
    title: 'Recording your own story',
    body: [
      'You do not need someone to ask you the questions.',
      'Some of the most important testimonies are made by people who decided, for their own reasons, that it was time to speak. Not because someone prompted them. Not because a family member organised it. Because they understood something that most people take too long to understand — that the account of a life, told in the person\'s own words, is one of the most valuable things they can leave behind.',
      'If you are reading this because you want to record your own story, this guide is for you.',
      'Why now.',
      'People come to this decision from different places.',
      'Some arrive here after a diagnosis — a moment that clarifies, among other things, that certain things should not be left unsaid. Some arrive here after losing someone and feeling the weight of what was never captured. Some arrive here simply because they have reached an age where the question of what gets left behind has become real rather than abstract.',
      'Whatever brought you here, the instinct is the right one. The window is not unlimited. The account you could give today — the detail, the texture, the things only you know — is worth giving.',
      'What to cover.',
      'The difficulty with recording your own story is knowing where to start and what to include. Without someone asking questions, it is easy to either say too much in no particular order or to freeze in front of a camera and say nothing useful at all.',
      'A structure helps. Not a script — a structure. Something to move through rather than improvise around.',
      'These are the areas worth covering:',
      'Where you began. The place you grew up. What it was like. The people who shaped your early life. What you remember first and what has stayed with you.',
      'How you lived. The work you did. The places you lived. The choices that shaped the direction of your life — the ones you made deliberately and the ones that happened to you.',
      'The people. Who mattered most. What they were like. What you learned from them. Who you lost and what that was like.',
      'The hard parts. The times when things were difficult. How you managed. What got you through. What you would tell someone younger facing something similar.',
      'What you made. Not just professionally — what you built, grew, created, contributed. What you are proud of. What surprised you about yourself.',
      'What you believe. Not necessarily religiously — what you think matters. What you have learned about how to live. What you would do differently. What you would not change.',
      'What you want them to know. This is the part most people leave out and most people most need to hear. A direct address to the people who will watch this — your children, your grandchildren, people not yet born who will one day want to know who you were. What do you want to say to them?',
      'Talking to yourself on camera.',
      'It is strange, at first, to speak to a camera with nobody else in the room. Most people find the first few minutes awkward and then forget about the camera entirely once they are properly into a subject that matters to them.',
      'A few things that help:',
      'Place the camera at eye level and speak to it as if it is a person — specifically, as if it is the person you most want to reach. Your grandchild. Someone who loves you and wants to understand your life. That shift in imagined audience often changes the quality of what comes out.',
      'Do not try to do it all in one sitting. Record in sections — one area at a time, on different days if that feels better. There is no requirement that a testimony be recorded in a single session.',
      'Do not try to be impressive. The most moving testimonies are not the polished ones. They are the honest ones — the ones where someone speaks plainly about what their life was actually like, including the parts that were hard or ordinary or uncertain.',
      'The practical setup.',
      'Everything in our guide to recording a home testimony applies here — light, sound, framing, battery, storage. Read that alongside this one.',
      'One addition specific to self-recording: use a stand or prop for the phone rather than holding it. A held camera shows the effort of holding it. A stable camera lets you forget it is there.',
      'What if you find it difficult.',
      'Some parts of a life are harder to speak about than others. You may find that certain areas bring up more than you expected. You may find yourself stopping.',
      'That is not a reason to stop recording. It is a reason to take a break and come back.',
      'You do not have to include everything. You do not have to speak about anything you have decided to keep private. But the things that are difficult to say are often the things that matter most to hear. Take your time with them.',
      'Who will hold this.',
      'Still Here provides the vault where your testimony will live — private, secure, accessible only to the people you choose. It will be there for your family whenever they are ready for it. Whenever they need it.',
      'You will not be there to explain yourself. This is your chance to do that while you can.'
    ]
  },
  familyArchive: {
    slug: 'what-to-do-with-a-family-archive',
    title: 'What to do with a family archive',
    body: [
      'Most family archives are not archives. They are boxes. A shoebox under a bed, a biscuit tin on a high shelf, a carrier bag that has moved house three times without anyone looking inside it properly. Photographs with no names on the back. Letters in handwriting nobody can read. Documents that might be important and might be nothing.',
      'If you have inherited one of these, or are looking at one and wondering where to start, this is for you.',
      'Start with triage, not organisation.',
      'The instinct is to sort everything immediately — to create a system, label folders, build order from chaos. Resist this for now.',
      'Before you organise, you need to understand what you have. Go through everything once, loosely, and sort into broad categories:',
      'Photographs. Documents — certificates, letters, official papers. Objects — things that are not paper. Unknowns — anything you cannot immediately identify.',
      'Do not throw anything away in this first pass. What looks like nothing often turns out to be something once you have more context. A receipt, a ticket stub, an envelope with an address — these can place someone in a time and location that no other record confirms.',
      'Photographs first.',
      'Photographs are usually the most emotionally significant items and the most vulnerable to loss. They fade, they stick together, they are irreplaceable.',
      'Before anything else, scan or photograph every photograph you have. Do not wait until you know who is in them. Scan them now, at the highest resolution your equipment allows, and store the digital copies somewhere safe — a hard drive, cloud storage, ideally both.',
      'Label what you can. Write on the back of physical photographs in soft pencil — never pen, which can bleed through — or create a naming system for the digital files. Even partial information is better than none: approximate decade, place if known, any names you are certain of.',
      'For the photographs where you do not know who is in them, note any details you can see — clothing, setting, studio marks on the back, approximate era. These details can help identify the image later, either through your own research or through someone in the family who recognises a face.',
      'Documents.',
      'Work through paper documents carefully. Look for: birth, marriage, and death certificates; census returns or extracts; letters and postcards; military service records; employment records; school reports; passports and travel documents; wills and legal papers; newspaper cuttings.',
      'Each of these is potentially significant for family history research. Scan or photograph everything before handling it too much — old paper is fragile and handling accelerates deterioration.',
      'For letters in old or difficult handwriting, do not attempt a full transcription immediately. Note that they exist, who they appear to be from and to if you can tell, and the approximate date. The transcription can happen later — the important thing first is to know what you have.',
      'The question of who knows.',
      'Before you go too far alone, think about who in the family might be able to identify what you are looking at.',
      'An older relative who recognises a face in a photograph. Someone who remembers the person who wrote the letters. A cousin who has been researching the same branch for years and has already answered questions you are just beginning to ask.',
      'The archive and the living memory work together. A photograph that means nothing to you may be immediately identifiable to someone else. Ask before you assume you are working alone.',
      'Storing what you have.',
      'Physical items deteriorate over time, especially in poor conditions. If you are keeping original documents and photographs:',
      'Store them flat, not folded, in acid-free folders or sleeves if possible. Keep them away from damp, heat, and direct light. Do not store them in attics or garages where temperature and humidity fluctuate.',
      'For items of particular significance — an original birth certificate, a wartime letter, a formal photograph — consider whether a local archive or library would be interested in taking a copy, or whether a professional conservation service is worth consulting.',
      'What to do with what you cannot identify.',
      'Some things will remain unknown. A face nobody recognises. A document in a language nobody in the family reads. A photograph with nothing on the back and no context you can find.',
      'Do not discard these. Keep them with a note of where they came from and what you do not know about them. Future research may provide the context that makes them legible. A DNA test by a distant relative, a digitised archive that was not online when you looked, a conversation with a branch of the family you have not yet found — any of these can turn an unknown item into something meaningful.',
      'The unknown items are part of the archive too.',
      'The most important thing.',
      'The most important thing is to start. Not to wait until you have a proper system, the right equipment, or enough time to do it thoroughly. The box under the bed is not getting better with age.',
      'Spend an hour. Look at what is there. Scan a handful of photographs. Write down what you know about one face you recognise.',
      'That is enough for now. The rest follows from starting.'
    ]
  }
} as const;

export const faqPage = {
  title: 'Frequently asked questions',
  items: [
    {
      question: 'What is Still Here?',
      answer:
        'Still Here is a living memory and genealogy platform. We help families record video testimonies — proper accounts of people\'s lives, in their own words — and build a private archive that future generations can access. The idea came from standing at a microfiche machine in Register House in Edinburgh and realising that everyone who came before had been reduced to a name and a date. Digital technology means that from now on, anyone who thinks to act can leave something entirely different behind.'
    },
    {
      question: 'Who is Still Here for?',
      answer:
        'Anyone who has someone in their life whose story matters and whose time to tell it is not unlimited. That includes families wanting to record an elderly relative before it is too late, genealogy researchers who understand that living memory is a primary source, and members of the Scottish diaspora who want to connect the family history they are researching to the people who still remember it.'
    },
    {
      question: 'What do I need to record a testimony?',
      answer:
        "A phone is enough. Still Here guides you through the setup — light, sound, framing — so the result is something worth keeping. You do not need professional equipment, a studio, or any technical knowledge beyond knowing how to use your phone's camera."
    },
    {
      question: 'Can I record my own story, without being interviewed by someone else?',
      answer:
        'Yes — and many people do. Still Here is not only for families recording an elderly relative. It is also for people who have decided, for their own reasons, that it is time to speak for themselves. A diagnosis. A milestone. A simple recognition that the account of a life should not be left to chance. We have a dedicated guide for this: Recording your own story. It covers what to include, how to structure it, and how to speak to a camera when there is nobody else in the room. The vault where your testimony is stored is private and controlled by you. You decide who can access it and when.'
    },
    {
      question: 'Where does the recording go?',
      answer:
        'Recordings are stored in your private family vault — accessible only to the people you choose to share it with. It is not a social platform and not a public archive. The recording belongs to your family.'
    },
    {
      question: 'Is the vault available now?',
      answer:
        'The testimony recording feature and family vault are in development. Still Here launched on St Andrew\'s Day 2026 with our full editorial and guidance layer. The recording and vault features follow. If you want to be notified when they are live, you can register your interest on the homepage.'
    },
    {
      question: 'Can I use Still Here for genealogy research?',
      answer:
        'Still Here sits at the intersection of living memory and family history research. Our editorial content covers genealogy methodology, Scottish records, and the relationship between archival evidence and oral testimony.'
    },
    {
      question: 'Is Still Here only for Scottish families?',
      answer:
        'Still Here was founded in Scotland and launched with a particular connection to Scottish heritage and the Scottish diaspora. But the problem it exists to solve — the gap between what records preserve and what living people remember — is universal. The platform is open to anyone. The Scottish thread runs through our editorial identity, not through a restriction on who can use it.'
    },
    {
      question: 'How much does it cost?',
      answer:
        'The editorial content, guides, and tools on Still Here are free. The testimony recording and vault features will be offered on a straightforward pricing model when they launch. We will be transparent about what costs what and why.'
    },
    {
      question: 'What about privacy?',
      answer:
        'A family testimony is one of the most personal things a person can record. We take that seriously. Your recordings and family archive are private by default. You control who can access them. We do not use your content for training, advertising, or any purpose other than storing and delivering it to the people you choose. Full details are in our privacy policy.'
    },
    {
      question: "I found something in an old archive I can't identify. Can Still Here help?",
      answer:
        'Our editorial content covers how to interpret old records, what different document types mean, and where to search for Scottish and Irish family history. If you have a specific research question, the genealogy communities we recommend in our guides are often the best place to find expert help quickly.'
    },
    {
      question: 'How do I get started?',
      answer:
        'Read the guides. Look at the questions we suggest for a conversation with an elderly relative. Think about who in your family you most need to talk to, and when. The first step is the conversation you keep meaning to have.'
    }
  ]
} as const;

export const privacyPage = {
  title: 'Privacy Policy',
  lastUpdated: 'Last updated: May 2026',
  sections: [
    {
      heading: 'What we collect',
      body:
        'Still Here currently provides editorial content, guides, and an interest registration page. If you use the interest form, the information you choose to provide is sent to Formspree so we can notify you when the vault is ready. We do not offer accounts or live testimony storage yet.'
    },
    {
      heading: 'How the interest form works',
      body:
        'The homepage CTA currently routes to a simple interest registration form. That form is powered by Formspree and is used only to collect contact details from people who want to hear when the Still Here vault is ready. We do not use those details for unrelated marketing.'
    },
    {
      heading: 'Cookies and analytics',
      body:
        'This site may use cookies for anonymous analytics and advertising purposes. You can disable cookies in your browser settings at any time.'
    },
    {
      heading: 'Third-party services',
      body:
        'This site is hosted on Netlify. The interest form is handled by Formspree. We may in future display advertisements served by Google AdSense. The privacy policies of those providers apply to any data collected through their services.'
    },
    {
      heading: 'Future vault privacy',
      body:
        'When the testimony recording and family vault features launch, recordings and archive material will be private by default and controlled by the family using the service. We do not intend to use family content for training, advertising, or any unrelated purpose.'
    },
    {
      heading: 'Contact',
      body: 'If you have any questions about this privacy policy, contact us at hello@stillhere.scot.'
    }
  ]
} as const;
