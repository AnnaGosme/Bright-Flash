const women = [
  {
    id: 1,
    name: "Toni Morrison",
    title: "Writer",
    contribution:
      "Toni Morrison's creative and critical effort aimed to highlight what was omitted in the history of American literature and culture. Her writing deals primarily with notion of blackness and womanhood, exposing the latent racism of the nation. Her most famous book, Beloved, gained international recognition and earned her the Nobel prize for literature in 1993.",
    years: "1931-2019",
    nationality: "American",
    image: "",
  },
  {
    id: 2,
    name: "Alexandria Ocasio-Cortez",
    title: "Politician",
    contribution:
      "Growing up in New York's Bronx, politician Alexandria Ocasio-Cortez has experienced from a young age the city's income inequality, which motivated her to organise her community. She run for office in 2019, becoming the youngest woman ever to be elected in the US Congress.",
    years: "1989",
    nationality: "American",
    image: "",
  },
  {
    id: 3,
    name: "Rita Levi Montalcini",
    title: "Neurobiologist",
    contribution:
      "Rita Levi Montalcini won the Nobel Prize in 1986 for the discovery of the nerve growth factor (NGF), a neuropeptide that is involved in the maintenance, proliferation and survival of neurons.",
    years: "1909-2012",
    nationality: "Italian",
    image: "",
  },
  {
    id: 4,
    name: "Tsai Ing-wen",
    title: "Politician",
    contribution:
      "Tsai Ing-wen is the first women to be elected president of Taiwan, Republic of China (2016). During her mandate she endorsed LGBT rights, making Taiwan the first country in Asia to legalise same-sex marriage in 2019.",
    years: "1956",
    nationality: "Taiwanese",
    image: "",
  },
  {
    id: 5,
    name: "Grace Hopper",
    title: "Computer Scientist",
    contribution:
      "Grace Hopper was one of the programmers of Harvard Mark I, a general purpose electromechanical computer used during World War II. A pioneer of computer programming, Grace Hopper was the first to devise the theory of machine-independent programming languages.",
    years: "1906-1992",
    nationality: "American",
    image: "",
  },
  {
    id: 6,
    name: "Simone de Beauvoir",
    title: "Writer",
    contribution:
      "Simone de Beauvoir's books had a significant influence on both feminist existentialism and feminist theory. The Second Sex, in particular, which deals with woman's oppression, is considered a foundational tract of contemporary feminism.",
    years: "1908-1986",
    nationality: "French",
    image: "",
  },
  {
    id: 7,
    name: "Maryam Mirzakhani",
    title: "Mathematician",
    contribution:
      "A mathematician and a professor of Mathematics at Stanford University, Maryam Mirzakhani's research topics included Teichmüller theory and ergodic theory. In 2014 Mirzakhani was awarded with the Fields Medal, the most prestigious awards in mathematics, becoming the first and only woman to be honored with the award.",
    years: "1977-2017",
    nationality: "Iranian",
    image: "",
  },
  {
    id: 8,
    name: "Kamala Harris",
    title: "Politician and attorney",
    contribution:
      "Besides being the first woman, Kamala Harris is also the first African American and first Asian American to be elected vice president of the United States in 2020.",
    years: "1964",
    nationality: "American",
    image: "",
  },
  {
    id: 9,
    name: "Margherita Hack",
    title: "Astrophysicist and scientific disseminator.",
    contribution:
      "Active also in the social and political field, Margherita Hack has been the first Italian woman to administrate the Trieste Astronomical Observatory from 1964 to 1987.",
    years: "1923-2013",
    nationality: "Italian",
    image: "",
  },
  {
    id: 10,
    name: "Samantha Cristoforetti",
    title: "Pilot, astronaut and engineer",
    contribution:
      "Samantha Cristoforetti is the first Italian women in space, participating to 2014's European Space Agency expedition. She is scheduled to return to the International Space Station in 2022.",
    years: "1977",
    nationality: "Italian",
    image: "",
  },
  {
    id: 11,
    name: "Katherine Johnson",
    title: "NASA research mathematician",
    contribution:
      "Katherine's calculations of orbital mechanics as a NASA employee were critical to the success of the first and subsequent U.S. crewed spaceflights. During her 33-year career at NASA and its predecessor, she earned a reputation for mastering complex manual calculations and helped pioneer the use of computers to perform the tasks. The space agency noted her 'historical role as one of the first African-American women to work as a NASA scientist.",
    years: "1918-2020",
    nationality: "American",
    image: "",
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
    image: "",
  },
  {
    id: 13,
    name: "Aletta Jacobs",
    title: "Physician and women's suffrage activist",
    contribution:
      "Aletta was one of the first female physicians in the Netherlands. In 1882, she founded the world's first birth control clinic and was a leader in both the Dutch and international women's movements. She led campaigns aimed at deregulating prostitution, improving women's working conditions, promoting peace and calling for women's right to vote.",
    years: "1854-1929",
    nationality: "Dutch",
    image: "",
  },
  {
    id: 14,
    name: "Dr. Hawa Abdi",
    title: "Somalia’s first gynaecologist",
    contribution:
      "Affectionately known as Mama Hawa, Dr. Hawa Abdi dedicated her life to providing high-quality healthcare, education, and shelter to vulnerable people, even in times of war and famine. She was Somalia’s first female obstetrician, as well as a lawyer and humanitarian. She created the Dr. Hawa Abdi Hope Village - a community for displaced Somalis with a 400-bed hospital, primary and secondary schools, and an innovative community justice system. Recognized as one of the world's great humanitarians, Dr. Hawa was nominated for the Nobel Peace Prize and earned numerous awards, including the Roosevelt Medal and honorary doctorates from Harvard University and the University of Pennsylvania.",
    years: "1947-2020",
    nationality: "Somali",
    image: "",
  },
  {
    id: 15,
    name: "Reshma Saujani",
    title: "Education activist",
    contribution:
      "Reshma Saujani is the author of 'Brave, Not Perfect' and founder of Girls Who Code, the international nonprofit organization working to close the gender gap in technology and change the image of what a computer programmer looks like and does.Reshma’s TED talk, “Teach girls, bravery not perfection,” has more than four million views and has sparked a worldwide conversation about how we’re raising our girls.",
    years: "1975",
    nationality: "American",
    image: "",
  },
  {
    id: 16,
    name: "Alice Catherine Evans",
    title: "The pioneer of safe milk",
    contribution:
      "Alice C. Evans became a researcher at the US Department of Agriculture. She investigated bacteriology in milk and cheese, demonstrating that Bacillus abortus causes the disease Brucellosis (undulant fever or Malta fever) in both cattle and humans. Her landmark discovery found acceptance despite resistance from those who were suspicious of a woman without a doctorate or medical degree.",
    years: "1881-1975",
    nationality: "American",
    image: "",
  },
  {
    id: 17,
    name: "Wangari Maathai",
    title: "Mama Trees",
    contribution:
      "'It’s the little things citizens do. That’s what will make the difference. My little thing is planting trees.' Founder of the Green Belt Movement, Wangari Maathai was called Mama Miti ,which means Mama Trees, by many people in Kenya Africa. She was the first African women to win a Nobel Peace Prize, in 2004 for her contribution to sustainable development, democracy, and peace. To this day the Green Belt Movement is planting trees and protects the 2nd largest tropical forest in the world.",
    years: "1940-2011",
    nationality: "Kenyan",
    image: "",
  },
  {
    id: 18,
    name: "Jane Goodall",
    title: "Internet Pioneer",
    contribution:
      "Jane Goodall is a primatologist most known for her long-term study of wild chimpanzees in Tanzania. The Gombe chimp observation, which Jane began in 1960, is the world’s longest running continuous wildlife research project.  Through her Jane Goodall Institute, she has become equally well known as a conservationist and a champion of human rights.",
    years: "1934",
    nationality: "British",
    image: "",
  },
  {
    id: 19,
    name: "Sylvia Earle",
    title: "Internet Pioneer",
    contribution:
      "Sylvia Earle was the first female chief scientist of the U.S. National Oceanic and Atmospheric Administration, and was named by Time Magazine as its first Hero for the Planet in 1998. She is also part of the group Ocean Elders, which is dedicated to protecting the ocean and its wildlife.",
    years: "1935",
    nationality: "American",
    image: "",
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
  },
  {
    id: 21,
    name: "Maya Angelou",
    title: "Afro American Human Rights activist",
    contribution:
      "Author of `I Know Why the Caged Bird Sings`. American poet, memoirist, and civil rights activist.",
    year: `1928 – 2014`,
    nationality: `American`,
    image: "",
  },
  {
    id: 22,
    name: "Ada Lovelace",
    title: "World’s first computer programmer.",
    contribution:
      "That brain of mine is something more than merely mortal, as time will show",
    year: "1815 – 1852",
    nationality: "English",
    image: "",
  },
  {
    id: 23,
    name: "Amelia Earhart",
    title: "First Woman aviator",
    contribution:
      "Women must try to do things as men have tried. When they fail, their failure must be but a challenge to others.",
    year: "1897 – 1939",
    nationality: "American",
    image: "",
  },
  {
    id: 24,
    name: "Rosalind Franklin",
    title: "Doctor",
    contribution:
      "Rosalind Franklin was a research associate at King’s College in London who became notable for her work on X-ray diffraction images of DNA which would eventually lead to the discovery of the DNA double helix.",
    year: "1928 – 2014",
    nationality: "English",
    image: "",
  },
  {
    id: 25,
    name: "Josephine Butler",
    title: "Human Rights activist",
    contribution:
      "Josephine Butler campaigned for women's suffrage, the right of women to better education, the end of coverture in British law, the abolition of child prostitution, and an end to human trafficking of young women and children into European prostitution.",
    year: "1828 – 1906",
    nationality: "English",
    image: "",
  },
  {
    id: 26,
    name: "Peg Hughes",
    title: "Actress",
    contribution:
      "Peg Hughes is often credited as the first professional actress on the English stage on 8 December 1660",
    year: "1645 – 1719",
    nationality: "English",
    image: "",
  },
  {
    id: 27,
    name: "Annie Londonderry",
    title: "Cyclist",
    contribution: "Annie Londonderry was first woman to cycle around the world",
    year: "1870 – 1947",
    nationality: "Latvian",
    image: "",
  },
  {
    id: 28,
    name: "Junko Tabei",
    title: "Climber",
    contribution:
      "Junko Tabei was the first woman to scale Mount Everest, on May 16, 1975. During 1990–91, Tabei reached the summit of Mt. Vinson, Antarctica's highest mountain.",
    year: "1939 – 2019",
    nationality: "Japanese",
    image: "",
  },
  {
    id: 29,
    name: "Billie Holiday",
    title: "Lady Day",
    contribution: "Jazz singer and performer",
    year: "1915 – 1959",
    nationality: "American",
    image: "",
  },
  {
    id: 30,
    name: "Jeanne Paquin",
    title: "Fashion designer",
    contribution:
      "Jeanne Paquin was a leading French fashion designer, known for her resolutely modern and innovative designs. She was the first major female couturier and one of the pioneers of the modern fashion business",
    year: "1869–1936",
    nationality: "French",
    image: "",
  },
  {
    id: 31,
    name: "Frida Kahlo",
    title: "Artist, Feminist and Activist",
    contribution:
      "Inspired by the country's popular culture, Frida Kahlo employed a naïve folk art style to explore questions of identity, postcolonialism, gender, class, and race in Mexican society.",
    nationality: "Mexican",
    image: "",
  },
  {
    id: 32,
    name: "Marie Curie",
    title: "Scientist",
    contribution:
      "Marie Curie was a pioneer Scientist in radioactivity. she was the first woman to win a Nobel Prize, the first and the only woman to win the Nobel Prize twice, and the only person to win the Nobel Prize in two scientific fields.",
    years: "1867-1934",
    nationality: "Polish",
    image: "",
  },
  {
    id: 33,
    name: "Virginia Woolf",
    title: "Writer",
    contribution:
      "Virginia Woolf was considered one of the most important modernist 20th-century authors and also a pioneer in the use of stream of consciousness as a narrative device.",
    years: "1982-1941",
    nationality: "English",
    image: "",
  },
  {
    id: 34,
    name: "Artemisia Gentileschi",
    title: "Painter",
    contribution:
      "In an era when women had few opportunities to pursue artistic training or work as professional artists, Gentileschi was the first woman to become a member of the Accademia di Arte del Disegno in Florence.",
    years: "1593-1656",
    nationality: "Italian",
    image: "",
  },
  {
    id: 35,
    name: "Chimamanda Ngozi Adichie",
    title: "Writer",
    contribution:
      "Chimamanda Ngozi Adichie has helped inspire new, cross-generational communication about the Biafran war. She seeks to instill dignity into the finest details of each character, whether poor, middle class or rich.",
    years: "1977",
    nationality: "Nigerian",
    image: "",
  },
  {
    id: 36,
    name: "Margaret Thatcher",
    title: "Prime Minister of the United Kingdom",
    contribution:
      "Margaret Thatcher was the longest-serving British prime minister of the 20th century and the first woman to hold that office.",
    years: "1920-2013",
    nationality: "English",
    image: "",
  },
  {
    id: 37,
    name: "Margaret Hamilton",
    title: "Computer Scientist and Systems Engineer",
    contribution:
      "Margaret Hamilton was director of the Software Engineering Division of the MIT Instrumentation Laboratory, which developed on-board flight software for NASA's Apollo program. She founded Higher Order Software in 1976 and Hamilton Technologies in 1986",
    years: "1936",
    nationality: "American",
    image: "",
  },
  {
    id: 38,
    name: "Maria Montessori",
    title: "Physician and Educator",
    contribution:
      "Best known for the philosophy of education that bears her name, and her writing on scientific pedagogy.Her educational method is in use today in many public and private schools globally.",
    years: "1870-1952",
    nationality: "Italian",
    image: "",
  },
  {
    id: 39,
    name: "Rosalind Franklin",
    title: "Chemist",
    contribution:
      "Rosalind Franklin work was central to the understanding of the molecular structures of DNA (deoxyribonucleic acid), RNA (ribonucleic acid), viruses, coal, and graphite.",
    years: "1920-1958",
    nationality: "English",
    image: "",
  },
  
  {
    id: 40,
    name: "Mae Jemison",
    title: "Astronaut",
    contribution:
      "In addition to being the first Black woman to travel into space aboard space shuttle Endeavour, Mae Jemison was the first Black woman to be admitted to the NASA astronaut training program. After her career with NASA, she founded a consulting firm she named The Jemison Group Inc., which focuses on sociocultural issues in the STEM field and now holds 10 honorary doctorates.",
    years: "1956",
    nationality: "American",
    image: "",
  },
  {
    id: 41,
    name: "Lise Meitner",
    title: "The Mother of Nuclear Power",
    contribution:
      "Lise Meitner is the Austrian Swedish physicist who co-discovered nuclear fission. Her partner, chemist Otto Hahn, was awarded a Nobel Prize for such findings and Meitner’s missed recognition is widely known as the “Nobel Mistake”. She also discovered the element protactinium and had an element named after her posthumously.",
    years: "1878-1968",
    nationality: "Austrian",
    image: "",
  },
  {
    id: 42,
    name: "Gloria Steinem",
    title: "Feminist Icon",
    contribution:
      "In 1969, Steinem published an article, 'After Black Power, Women's Liberation', which brought her to national fame as a feminist leader. In 1971, she co-founded the National Women's Political Caucus which provides training and support for women who seek elected and appointed offices in government. Also in 1971, she co-founded the Women's Action Alliance which, until 1997, provided support to a network of feminist activists and worked to advance feminist causes and legislation. In the 1990s, Steinem helped establish Take Our Daughters to Work Day, an occasion for young girls to learn about future career opportunities.",
    years: "1934",
    nationality: "American",
    image: "",
  },
  {
    id: 43,
    name: "Rachel Levine",
    title: "Feminist Icon",
    contribution:
      "Rachel Leland Levine is an American pediatrician who has been the United States assistant secretary for health since March 26, 2021. She is a professor of pediatrics and psychiatry at the Penn State College of Medicine, and previously served as the Pennsylvania physician general from 2015 to 2017. She is one of only a few openly transgender government officials in the United States, and is the first to hold an office that requires Senate confirmation.",
    years: "1957",
    nationality: "American",
    image: "",
  },
];
module.exports = women;
