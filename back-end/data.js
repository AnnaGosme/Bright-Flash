const women = [
  {
    id: 1,
    name: "Toni Morrison",
    title: "Free and rebellious author",
    contribution:
      "Toni Morrison's creative and critical effort aimed to highlight what was omitted in the history of American literature and culture. Her writing deals primarily with notion of blackness and womanhood, exposing the latent racism of the nation. Her most famous book, Beloved, gained international recognition and earned her the Nobel prize for literature in 1993.",
    years: "1931-2019",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408512/C1506EEE-5281-442D-9615-54151C70B1A6_1_201_a_lyt3y9.jpg",
    quote:
      "If there's a book that you want to read, but it hasn't been written yet, then you must write it.",
  },
  {
    id: 2,
    name: "Alexandria Ocasio-Cortez",
    title: "Politician - the prodigious child from the Bronx",
    contribution:
      "Growing up in New York's Bronx, politician Alexandria Ocasio-Cortez has experienced from a young age the city's income inequality, which motivated her to organise her community. She run for office in 2019, becoming the youngest woman ever to be elected in the US Congress.",
    years: "1989",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408512/853C7C4C-D2FF-4CEA-8DDF-94938A8EB947_1_201_a_lywnpd.jpg",
    quote:
      "The best thing we could do is work as hard as we can for what is right and what is good.",
  },
  {
    id: 3,
    name: "Rita Levi Montalcini",
    title: "Nobel prize-winning Neurobiologist",
    contribution:
      "Rita Levi Montalcini won the Nobel Prize in 1986 for the discovery of the nerve growth factor (NGF), a neuropeptide that is involved in the maintenance, proliferation and survival of neurons.",
    years: "1909-2012",
    nationality: "Italian",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408512/B67DF1FC-527F-4F21-BB17-F355C5F48690_4_5005_c_p7ircl.jpg",
    quote:
      "My experience in childhood and adolescence of the subordinate role played by the female in a society run entirely by men had convinced me that I was not cut out to be a wife.",
  },
  {
    id: 4,
    name: "Tsai Ing-wen",
    title: "Taiwan's First Femaile Leader",
    contribution:
      "Tsai Ing-wen is the first women to be elected president of Taiwan, Republic of China (2016). During her mandate she endorsed LGBT rights, making Taiwan the first country in Asia to legalise same-sex marriage in 2019.",
    years: "1956",
    nationality: "Taiwanese",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/3AEE3984-5AFC-4D84-8CD9-AE01E869B024_4_5005_c_qdkfkk.jpg",
    quote:
      "In the face of love, everyone is equal. Let everyone have the freedom to love and to pursue their happiness. I am Tsai Ing-wen, and I support marriage equality.",
  },
  {
    id: 5,
    name: "Grace Hopper",
    title: "A legacy of innovation in Computer Science",
    contribution:
      ", Known as 'Amazing Grace', Grace Hopper was one of the programmers of Harvard Mark I, a general purpose electromechanical computer used during World War II. A pioneer of computer programming, Grace Hopper was the first to devise the theory of machine-independent programming languages.",
    years: "1906-1992",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/E4C1CFF1-A843-4A0E-BA50-8E894428458F_vctws2.jpg",
    quote:
      "If it is a good idea, go ahead and do it. It is much easier to apologize than to get permission.",
  },
  {
    id: 6,
    name: "Simone de Beauvoir",
    title: "Pionneer of Feminist Theory",
    contribution:
      "Simone de Beauvoir's books had a significant influence on both feminist existentialism and feminist theory. The Second Sex, in particular, which deals with woman's oppression, is considered a foundational tract of contemporary feminism.",
    years: "1908-1986",
    nationality: "French",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/0E102899-6913-4DCB-9BC1-047CE45D1677_4_5005_c_vllegq.jpg",
    quote: "One is not born a woman, one becomes one.",
  },
  {
    id: 7,
    name: "Maryam Mirzakhani",
    title: "Pioneering Mathematician and Winner of the Fields Medal",
    contribution:
      "A mathematician and a professor of Mathematics at Stanford University, Maryam Mirzakhani's phD solved two unsolvable mathematical problems. In 2014 Mirzakhani was awarded with the Fields Medal, the most prestigious awards in mathematics, becoming the first and only woman to be honored with the award.",
    years: "1977-2017",
    nationality: "Iranian",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/732F3A41-1B9E-45D6-85CF-1D44DCB64365_4_5005_c_kbbzqt.jpg",
    quote:
      "I hope that this award will inspire lots more girls and young women, in this country and around the world, to believe in their own abilities and aim to be the fields medallists of the future.",
  },
  {
    id: 8,
    name: "Kamala Harris",
    title: "From Prosecutor to Politician",
    contribution:
      "Besides being the first woman, Kamala Harris is also the first African American and first Asian American to be elected vice president of the United States in 2020.",
    years: "1964",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/B27073E7-BFD8-42DB-800E-0CC72714E3AB_1_201_a_v04p1g.jpg",
    quote:
      "What I want young women and girls to know is: You are powerful and your voice matters.",
  },
  {
    id: 9,
    name: "Margherita Hack",
    title: "Astrophysicist and scientific disseminator",
    contribution:
      "Active also in the social and political field, Margherita Hack has been the first Italian woman to administrate the Trieste Astronomical Observatory from 1964 to 1987.",
    years: "1923-2013",
    nationality: "Italian",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408512/B67DF1FC-527F-4F21-BB17-F355C5F48690_4_5005_c_p7ircl.jpg",
    quote:
      "Eva’s only fault has been the one of wanting to know more, to experiment and search with her own sources the laws of the Universe, of her own body and to refuse the teachings from “above”. Eva, basically, represents the curiosity of science against the passive acceptance that belongs to faith.",
  },
  {
    id: 10,
    name: "Samantha Cristoforetti",
    title:
      "Record-holder for the longest uninterrupted spaceflight by a European astronaut",
    contribution:
      "Samantha Cristoforetti is the first Italian women in space, participating to 2014's European Space Agency expedition. She is scheduled to return to the International Space Station in 2022. She holds the record for the longest uninterrupted spaceflight by a European astronaut (199 days, 16 hours).",
    years: "1977",
    nationality: "Italian",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/5504938E-D694-4FF6-90E4-512E617D2CA9_1_201_a_c5x2zc.jpg",
    quote:
      "When you discover new things every minute and your mind is absorbing so many experiences, it feels like time expands.",
  },
  {
    id: 11,
    name: "Katherine Johnson",
    title: "A NASA heroine of the USA",
    contribution:
      "Katherine's calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks. The space agency noted her 'historical role as one of the first African-American women to work as a NASA scientist.",
    years: "1918-2020",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/1B931A0A-C04C-4EF5-933E-05DA1C07F333_eznz4i.jpg",
    quote:
      "Take all the courses in your curriculum. Do the research. Ask questions. Find someone doing what you are interested in! Be curious!",
  },
  {
    id: 12,
    name: "Radia Perlman",
    title: "Internet Pioneer",
    contribution: `Perlman invented the spanning tree algorithm and the Spanning Tree Protocol (STP), which are best explained in a poem she wrote:
        Algorhyme
        I think that I shall never see
        A graph more lovely than a tree.
        A tree whose crucial property
        Is loop-free connectivity.
        A tree which must be sure to span
        So packets can reach every LAN.
        First the root must be selected.
        By ID it is elected.
        Least cost paths from root are traced.
        In the tree these paths are placed.
        A mesh is made by folks like me
        Then bridges find a spanning tree.`,
    years: "1951",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408514/D3530914-D91B-481A-96C4-919516E39E66_1_201_a_sbuhut.jpg",
    quote: "",
  },
  {
    id: 13,
    name: "Aletta Jacobs",
    title: "Physician and women's suffrage activist",
    contribution:
      "Aletta was one of the first female physicians in the Netherlands. In 1882, she founded the world's first birth control clinic and was a leader in both the Dutch and international women's movements. She led campaigns aimed at deregulating prostitution, improving women's working conditions, promoting peace and calling for women's right to vote.",
    years: "1854-1929",
    nationality: "Dutch",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408514/E8E18506-5731-4E05-861F-2301684B9391_1_201_a_k1xbp5.jpg",
    quote: "",
  },
  {
    id: 14,
    name: "Dr. Hawa Abdi",
    title: "Somalia’s first gynaecologist",
    contribution:
      "Affectionately known as Mama Hawa, Dr. Hawa Abdi dedicated her life to providing high-quality healthcare, education, and shelter to vulnerable people, even in times of war and famine. She was Somalia’s first female obstetrician, as well as a lawyer and humanitarian. She created the Dr. Hawa Abdi Hope Village - a community for displaced Somalis with a 400-bed hospital, primary and secondary schools, and an innovative community justice system. Recognized as one of the world's great humanitarians, Dr. Hawa was nominated for the Nobel Peace Prize and earned numerous awards, including the Roosevelt Medal and honorary doctorates from Harvard University and the University of Pennsylvania.",
    years: "1947-2020",
    nationality: "Somali",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/76C32D74-1A86-4E30-9C91-696815C50AF8_1_201_a_m4uyja.jpg",
    quote: "Women can build stability. We can make peace.",
  },
  {
    id: 15,
    name: "Reshma Saujani",
    title: "Education activist",
    contribution:
      "Reshma Saujani is the author of 'Brave, Not Perfect' and founder of Girls Who Code, the international nonprofit organization working to close the gender gap in technology and change the image of what a computer programmer looks like and does.Reshma’s TED talk, “Teach girls, bravery not perfection,” has more than four million views and has sparked a worldwide conversation about how we’re raising our girls.",
    years: "1975",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/5AEFFB63-708A-4CD7-A535-7C1FD8F87B80_1_201_a_fcoihv.jpg",
    quote:
      " Teach one girl how to code, she'll teach four. The replication effect is so powerful.",
  },
  {
    id: 16,
    name: "Alice Catherine Evans",
    title: "The pioneer of safe milk",
    contribution:
      "Alice C. Evans became a researcher at the US Department of Agriculture. She investigated bacteriology in milk and cheese, demonstrating that Bacillus abortus causes the disease Brucellosis (undulant fever or Malta fever) in both cattle and humans. Her landmark discovery found acceptance despite resistance from those who were suspicious of a woman without a doctorate or medical degree.",
    years: "1881-1975",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/36C4CBD3-181E-4F32-81D3-045EC6D0A3C2_4_5005_c_s7acqo.jpg",
    quote: "",
  },
  {
    id: 17,
    name: "Wangari Maathai",
    title: "Mama Trees",
    contribution:
      "'It’s the little things citizens do. That’s what will make the difference. My little thing is planting trees.' Founder of the Green Belt Movement, Wangari Maathai was called Mama Miti ,which means Mama Trees, by many people in Kenya Africa. She was the first African women to win a Nobel Peace Prize, in 2004 for her contribution to sustainable development, democracy, and peace. To this day the Green Belt Movement is planting trees and protects the 2nd largest tropical forest in the world.",
    years: "1940-2011",
    nationality: "Kenyan",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408513/7D995237-1FAB-4A23-B0CE-C2B2A00BCC46_4_5005_c_c8hzzb.jpg",
    quote:
      "Human rights are not things that are put on the table for people to enjoy. These are things you fight for and then you protect.",
  },
  {
    id: 18,
    name: "Jane Goodall",
    title: "Life-long observer of chimpanzees",
    contribution:
      "Jane Goodall is a primatologist most known for her long-term study of wild chimpanzees in Tanzania. The Gombe chimp observation, which Jane began in 1960, is the world’s longest running continuous wildlife research project.  Through her Jane Goodall Institute, she has become equally well known as a conservationist and a champion of human rights.",
    years: "1934",
    nationality: "British",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408514/37C875ED-3BA8-448F-9F48-D07381257DFA_1_201_a_k1xpmc.heic",
    quote:
      "What you do makes a difference, and you have to decide what kind of difference you want to make.",
  },
  {
    id: 19,
    name: "Sylvia Earle",
    title: "Explorer of oceans",
    contribution:
      "Sylvia Earle was the first female chief scientist of the U.S. National Oceanic and Atmospheric Administration, and was named by Time Magazine as its first Hero for the Planet in 1998. She is also part of the group Ocean Elders, which is dedicated to protecting the ocean and its wildlife.",
    years: "1935",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408514/C2E00E3F-66CC-47A7-8B8C-E2E61122A170_4_5005_c_kgtvl0.jpg",
    quote:
      "I suggestesd to everyone: Look in the mirror. Ask yourself: Who are you? What are your talents? Use them and do what you love.",
  },
  {
    id: 20,
    name: "Adele Goldberg",
    title: "Co-creator of the Smalltalk System",
    contribution:
      "'Don’t ask whether you can do something, but how to do it.' This quote is from Adele Goldberg, one of the computer science pioneers from Xerox PARC. Along with Alan Kay, she developed Smalltalk. Smalltalk was used to prototype the WIMP (windows, icons, menus, pointers) interface at Xerox PARC, the cornerstone for today’s modern graphical user interfaces.",
    years: "1945",
    nationality: "American",
    image: "",
    quote: "Don't ask whether you can do something, but how to do it.",
  },
  {
    id: 21,
    name: "Maya Angelou",
    title: "Afro American Human Rights activist",
    contribution:
      "Author of 'I Know Why the Caged Bird Sings'. American poet, memoirist, and civil rights activist.",
    year: "1928 – 2014",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618408514/96C18D88-8105-469D-8DDF-C44975E87E28_4_5005_c_vgygo5.jpg",
    quote:
      "If you don't like something, change it. If you can't change it, change your attitude.",
  },
  {
    id: 22,
    name: "Ada Lovelace",
    title: "World’s first computer programmer",
    contribution:
      "That brain of mine is something more than merely mortal, as time will show",
    year: "1815 – 1852",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398850/id22_Lovelace_xejx8f.jpg",
    quote: "Your best and wisest refuge from all troubles is in your science.",
  },
  {
    id: 23,
    name: "Amelia Earhart",
    title: "First Woman aviator",
    contribution:
      "Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others.",
    year: "1897 – 1939",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618402561/id23_Earhart_hunndd.jpg",
    quote:
      "Women, like men, should try to do the impossible. And when they fail, their failure should be a challenge to others",
  },
  {
    id: 24,
    name: "Rosalind Franklin",
    title: "Forgotten Pionneer of DNA",
    contribution:
      "Rosalind Franklin was a research associate at King’s College in London who became notable for her work on X-ray diffraction images of DNA which would eventually lead to the discovery of the DNA double helix.",
    year: "1928 – 2014",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398850/id24_Franklin_qhr5lp.jpg",
    quote: "Science and everyday life cannot and should not be separated.",
  },
  {
    id: 25,
    name: "Josephine Butler",
    title:
      "Feminist activist and Reformer for the welfare of prostitutes and other vulnerable women",
    contribution:
      "Josephine Butler campaigned for women's suffrage, the right of women to better education, the end of coverture in British law, the abolition of child prostitution, and an end to human trafficking of young women and children into European prostitution.",
    year: "1828 – 1906",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398850/id25_Butler_hlduhk.jpg",
    quote:
      "It is a fact, that numbers even of moral and religious people have permitted themselves to accept and condone in man what is fiercely condemned in woman.",
  },
  {
    id: 26,
    name: "Peg Hughes",
    title: "First ever professional Actress in the western world",
    contribution:
      "Peg Hughes is often credited as the first professional actress on the English stage on 8 December 1660",
    year: "1645 – 1719",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398850/id26_Hughes_beotzn.jpg",
    quote:
      "I'm tough, I'm ambitious, and I know exactly what I want. If that makes me a bitch, okay.",
  },
  {
    id: 27,
    name: "Annie Londonderry",
    title: "Adventurer on a bicycle",
    contribution:
      "Annie Londonderry was first woman to cycle around the world.",
    year: "1870 – 1947",
    nationality: "Latvian",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398850/id27_Londonberry_kim8ga.jpg",
    quote:
      "I am a journalist and 'a new woman' if that term means that I believe I can do anything that any man can do.",
  },
  {
    id: 28,
    name: "Junko Tabei",
    title: "The first woman to conquer Mount Everest",
    contribution:
      "Junko Tabei was the first woman to scale Mount Everest, on May 16, 1975. During 1990–91, Tabei reached the summit of Mt. Vinson, Antarctica's highest mountain.",
    year: "1939 – 2019",
    nationality: "Japanese",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id28_Tabei_cjrb7w.jpg",
    quote:
      "Technique and ability alone do not get you to the top; it is the willpower that is most important.",
  },
  {
    id: 29,
    name: "Billie Holiday",
    title: "Lady Day",
    contribution: "Jazz singer and performer",
    year: "1915 – 1959",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id29_Holiday_1947_gd7cxz.jpg",
    quote:
      "If you copy, it means you're working without any real feeling. No two people on earth are alike.",
  },
  {
    id: 30,
    name: "Jeanne Paquin",
    title: "leading French Fashion designer",
    contribution:
      "Jeanne Paquin was a leading French fashion designer, known for her resolutely modern and innovative designs. She was the first major female couturier and one of the pioneers of the modern fashion business",
    year: "1869–1936",
    nationality: "French",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id30_Paquin_dypu4q.jpg",
    quote:
      "I get inspiration everywhere. When I am travelling or walking in the street, when I see a sunset with beautiful blendings of color, I often get an inspiration that helps me to evolve[...]",
  },
  {
    id: 31,
    name: "Frida Kahlo",
    title: "Rebel Artist, Mexican Legend",
    contribution:
      "Inspired by the country's popular culture, Frida Kahlo employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
    nationality: "Mexican",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id31_Kahlo_qiuqbj.jpg",
    quote:
      "I think that little by little I'll be able to solve my problems and survive.",
  },
  {
    id: 32,
    name: "Marie Curie",
    title: "A woman dedicated to science",
    contribution:
      "Marie Curie was a pioneer Scientist in radioactivity. she was the first woman to win a Nobel Prize, the first and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields.",
    years: "1867-1934",
    nationality: "Polish",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id32_Curie_a357fs.jpg",
    quote:
      "'Nothing in life is to be feared; it is only to be understood. '- Marie Curie",
  },
  {
    id: 33,
    name: "Virginia Woolf",
    title: "Writer, Savant, Philosopher",
    contribution:
      "Virginia Woolf was considered one of the most important modernist 20th-century authors and also a pioneer in the use of stream of consciousness as a narrative device.",
    years: "1982-1941",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398851/id33_Woolf_vxr9jp.jpg",
  },
  {
    id: 34,
    name: "Artemisia Gentileschi",
    title: "First Feminist Icon in Western history",
    contribution:
      "In an era when women had few opportunities to pursue artistic training or work as professional artists, Gentileschi was the first woman to become a member of the Accademia di Arte del Disegno in Florence.",
    years: "1593-1656",
    nationality: "Italian",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id34_Gentileschi_flzw61.jpg",
    quote:
      "'My mustrious lordship, i'll show you what a woman can do.'- Artemisia Gentileschi",
  },
  {
    id: 35,
    name: "Chimamanda Ngozi Adichie",
    title: "Writer and Feminist Icon",
    contribution:
      "Chimamanda Ngozi Adichie has helped inspire new, cross-generational communication about the Biafran war. She seeks to instill dignity into the finest details of each character, whether poor, middle class or rich.",
    years: "1977",
    nationality: "Nigerian",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id35_Adichie_rjbyan.jpg",
    quote:
      "You must never behave as if your life belongs to a man.[•••] “Your life belongs to you and you alone.",
  },
  {
    id: 36,
    name: "Margaret Thatcher",
    title:
      "First (and to-date only) Female Prime Minister of the United Kingdom",
    contribution:
      "Margaret Thatcher was the longest-serving British prime minister of the 20th century and the first woman to hold that office.",
    years: "1920-2013",
    nationality: "English",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618403528/id36_Thatcher_mvr5ka.jpg",
    quote:
      "What is success? I think it is a mixture of having a flair for the thing that you are doing; knowing that it is not enough, that you have got to have hard work and a certain sense of purpose.",
  },
  {
    id: 37,
    name: "Margaret Hamilton",
    title: "Computer Scientist and Systems Engineer",
    contribution:
      "Margaret Hamilton was director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA's Apollo program. She founded Higher Order Software in 1976 and Hamilton Technologies in 1986",
    years: "1936",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id37_Hamilton_fssetl.jpg",
    quote:
      "Looking back, we were the luckiest people in the world. There was no choice but to be pioneers; no time to be beginners.",
  },
  {
    id: 38,
    name: "Maria Montessori",
    title:
      "Creator of the Montessori Method and first Italian woman to ever receive a degree in medicine.",
    contribution:
      "Best known for the philosophy of education that bears her name, and her writing on scientific pedagogy.Her educational method is in use today in many public and private schools globally.",
    years: "1870-1952",
    nationality: "Italian",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id38_Montessori_lnnkju.jpg",
    quote:
      "The satisfaction which they find in their work has given them a grace and ease like that which comes from music.",
  },
  {
    id: 40,
    name: "Audre Lorde",
    title: "Author and creator of the 'theory of difference'",
    contribution:
      "Audre Lorde explored female identity and life as a Black lesbian and writing about issues that affected women across the country during the height Civil Rights movement. All of her work was based on her 'theory of difference', which we refer to as 'intersectionality' today.",
    years: "1934-1992",
    nationality: "American",
    image:
      "https://res.cloudinary.com/octavian2111/image/upload/v1618518120/id40_Lorde_nypi5a.jpg",
    quote:
      "It is not our differences that divide us. It is our inability to recognize, accept, and celebrate those differences.",
  },
  {
    id: 41,
    name: "Mae Jemison",
    title: "First Afro-American Astronaut in space",
    contribution:
      "In addition to being the first Black woman to travel into space aboard space shuttle Endeavour, Mae Jemison was the first Black woman to be admitted to the NASA astronaut training program. After her career with NASA, she founded a consulting firm she named The Jemison Group Inc., which focuses on sociocultural issues in the STEM field and now holds 10 honorary doctorates.",
    years: "1956",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id39_Jemison_nnwljp.jpg",
    quote:
      "Never limit yourself because of others' limited imagination; never limit others because of your own limited imagination.",
  },
  {
    id: 42,
    name: "Lise Meitner",
    title: "The Mother of Nuclear Power",
    contribution:
      "Lise Meitner is the Austrian Swedish physicist who co-discovered nuclear fission. Her partner, chemist Otto Hahn, was awarded a Nobel Prize for such findings and Meitner’s missed recognition is widely known as the “Nobel Mistake”. She also discovered the element protactinium and had an element named after her posthumously.",
    years: "1878-1968",
    nationality: "Austrian",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398853/id40_Meitner_pprv2w.jpg",
    quote: "Life need not be easy, provided only that it is not empty.",
  },
  {
    id: 43,
    name: "Gloria Steinem",
    title: "Feminist Icon",
    contribution:
      "In 1969, Steinem published an article, 'After Black Power, Women's Liberation', which brought her to national fame as a feminist leader. In 1971, she co-founded the National Women's Political Caucus which provides training and support for women who seek elected and appointed offices in government. Also in 1971, she co-founded the Women's Action Alliance which, until 1997, provided support to a network of feminist activists and worked to advance feminist causes and legislation. In the 1990s, Steinem helped establish Take Our Daughters to Work Day, an occasion for young girls to learn about future career opportunities.",
    years: "1934",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618398852/id41_Steinem_os6wyb.jpg",
    quote:
      "Don't think about making women fit the world‬—‪think about making the world fit women.",
  },
  {
    id: 44,
    name: "Rachel Levine",
    title: "First transgender woman to hold Senate-confirmed office",
    contribution:
      "Rachel Leland Levine is an American pediatrician who has been the United States assistant secretary for health since March 26, 2021. She is a professor of pediatrics and psychiatry at the Penn State College of Medicine, and previously served as the Pennsylvania physician general from 2015 to 2017. She is one of only a few openly transgender government officials in the United States, and is the first to hold an office that requires Senate confirmation.",
    years: "1957",
    nationality: "American",
    image:
      "https://res.cloudinary.com/dg5lakmem/image/upload/v1618401262/id42_Levine_shvbed.jpg",
    quote:
      "We have made so much progress, but we still have a long way to go in terms of true fairness and equality for sexual and gender minorities.",
  },
];

module.exports = women;
