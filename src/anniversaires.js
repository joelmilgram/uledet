const anniversaires = [
    ["Alphandary Rosa (Ilia/Sumbul Mondolfo)", "12/4/1889", "11 Nisan 5649"],
    ["Décès Berthe Rose Assa", "12/11/1911", "21 Cheshvan 5672"],
    ["Naissance Albert EINSTEIN", "14/3/1879", "19 Adar 5639"],
    ["Berthe Zelda Milgram; Tante assassinée à AUSCHWITZ", "10/2/1909", "19 Sh'vat 5669"],
    ["Berthe Brandla Brouhia Billy", "1/9/1917", "14 Elul 5677"],
    ["Albert Abram", "26/12/1908", "2 Tevet 5669"],
    ["Mariage Yachoua/Rosa Assa", "11/8/1910", "6 Av 5670"],
    ["Violette Solange Assa/Mendilevitch", "19/10/1916", "22 Tishrei 5677"],
    ["Berthe Rose Assa", "19/10/1911", "27 Tishrei 5672"],
    ["Michel Henri Mihael Mendel", "19/9/1913", "17 Elul 5673"],
    ["Mariage Berthe/Michel", "28/11/1937", "24 Kislev 5698"],
    ["Marcelle Minkowski Née Kiselman/ Malka", "21/3/1921", "11 Adar II 5681"],
    ["Yvette Havah", "12/9/1926", "4 Tishrei 5687"],
    ["Joseph Jo Maadeva", "3/7/1916", "2 Tamuz 5676"],
    ["Samuel Frère de Papa assassiné à AUSCHWITZ", "1/3/1902", "22 Adar I 5662"],
    ["Francis Noe Assa", "21/2/1914", "25 Sh'vat 5674"],
    ["Naissance Abram Mendilevitch/Fischman", "26/12/1908", "2 Tevet 5669"],
    ["Yachoua Assa (Menachem/Bea)", "12/1/1888", "28 Tevet 5648"],
    ["Naissance Primo Levi", "31/1/1919", "30 Sh'vat 5679"],
    ["Mariage Albert/Violette (mairie)", "7/4/1938", "6 Nisan 5698"],
    ["Raph Feigelson (Raphael et non Israël)", "17/2/1926", "3 Adar 5686"],
    ["Maurice Mendilievici", "10/12/1912", "30 Kislev 5673"],
    ["Violette Simone Assa", "19/10/1916", "22 Tishrei 5677"],
    ["Houmalè Grossberg/Milgram", "16/8/1880", "9 Elul 5640"],
    ["René Daniel Lévy", "13/2/1942", "26 Sh'vat 5702"],
    ["Mariage Albert Violette (synagogue SALZER)", "10/4/1938", "9 Nisan 5698"],
    ["Ety Esther", "29/9/1918", "23 Tishrei 5679"],
    ["Bella Mendilevici", "28/12/1920", "17 Tevet 5681"],
    ["Tenoïm Berthe/Michel", "10/5/1936", "18 Iyyar 5696"],
    ["Leon Eliahou Minkowski", "9/9/1935", "11 Elul 5695"],
    ["Berthe Victoire Assa/Gregoire", "4/6/1919", "6 Sivan 5679"],
    ["Henri Willy S,", "2/6/1912", "17 Sivan 5672"],
    ["Henri Michel Majerowicz", "6/8/1918", "28 Av 5678"],
    ["Lysiane Rose Alizëlè", "4/9/1939", "20 Elul 5699"],
    ["Suzy Sarah Minkowska/Chiche/Vadbled", "8/1/1925", "12 Tevet 5685"],
    ["Maurice Moché Minkowski", "8/1/1925", "12 Tevet 5685"],
    ["Hélène Minkowski Cerignano", "23/7/1933", "29 Tamuz 5693"],
    ["Mariem Minkowska (Przytyk)", "26/3/1899", "15 Nisan 5659"],
    ["Louis, Claude Layëbo Ariéh", "21/12/1939", "9 Tevet 5700"],
    ["Laurent, Yves Yitshak", "20/7/1962", "18 Tamuz 5722"],
    ["Hélène Jeanne Claude Bourg", "18/9/1957", "22 Elul 5717"],
    ["Daniel David Mien Nanou", "17/4/1942", "30 Nisan 5702"],
    ["Jacqueline Kessalis/Tchenio", "12/11/1941", "22 Cheshvan 5702"],
    ["Mariage Ety/Henri", "15/12/1946", "22 Kislev 5707"],
    ["Alain I Claude Majerowicz", "22/3/1948", "11 Adar II 5708"],
    ["Max Majerowicz", "4/12/1942", "25 Kislev 5703"],
    ["Renaud David (un Shabbèss)", "13/2/1965", "11 Adar I 5725"],
    ["Décès Albert Einstein", "18/4/1955", "26 Nisan 5715"],
    ["Loully Mendilevici Vainstein", "24/7/1956", "16 Av 5716"],
    ["Paul Sussman", "11/7/1943", "8 Tamuz 5703"],
    ["Jean Claude Cherki JCC", "27/9/1943", "27 Elul 5703"],
    ["Éliane Chiche", "11/3/1947", "19 Adar 5707"],
    ["Monique Rosette", "31/5/1951", "25 Iyyar 5711"],
    ["Ginette Guitalè Lyliane D¨ji¨nëd¨jinë Layaïlè", "29/1/1946", "27 Sh'vat 5706"],
    ["Patrick Pinhas Feigelson", "17/1/1949", "16 Tevet 5709"],
    ["Maryse Kessalis", "20/9/1948", "16 Elul 5708"],
    ["Leïla", "19/3/1953", "3 Nisan 5713"],
    ["Naissance État ISRAEL", "15/5/1948", "6 Iyyar 5708"],
    ["Sylvia Spira Majerowicz", "5/6/1951", "1 Sivan 5711"],
    ["Pierrette", "27/9/1942", "16 Tishrei 5703"],
    ["Éve(lyne) Mendilevitch-Levy", "13/9/1944", "25 Elul 5704"],
    ["Arlette Chiche", "16/6/1951", "12 Sivan 5711"],
    ["Jeannette", "27/9/1942", "16 Tishrei 5703"],
    ["Alain II Minkowski", "17/3/1956", "5 Nisan 5716"],
    ["Nicole Kessalis", "1/1/1955", "7 Tevet 5715"],
    ["Évelyne Laurence Martin", "5/5/1944", "12 Iyyar 5704"],
    ["Annie Minkowski/Neuhof", "29/2/1952", "3 Adar 5712"],
    ["Jimmy C,", "23/9/1957", "27 Elul 5717"],
    ["Décès Houmalè", "4/5/1960", "7 Iyyar 5720"],
    ["Laurence Annik Layalè Feigelson", "27/1/1953", "11 Sh'vat 5713"],
    ["Décès Assa Yachoua", "23/12/1952", "5 Tevet 5713"],
    ["Mariage Lysiane/Claude", "10/10/1961", "30 Tishrei 5722"],
    ["Jacqueline Sarah Daisy Lalou-Milgram", "26/2/1961", "10 Adar 5721"],
    ["Josette Berthe Milgram", "30/3/1954", "25 Adar II 5714"],
    ["Danièle Fahri", "10/5/1959", "2 Iyyar 5719"],
    ["Sylvie Miinkowski", "3/5/1955", "11 Iyyar 5715"],
    ["Décès Alphandary/Assa Rosa", "16/4/1960", "19 Nisan 5720"],
    ["Serge Cerignano", "2/3/1956", "19 Adar 5716"],
    ["Frederic David M", "2/12/1963", "16 Kislev 5724"],
    ["Daniel/Jeannette Mariage/Synagogue", "8/9/1968", "15 Elul 5728"],
    ["Anne Sophie Penica/Milgram", "26/12/1969", "17 Tevet 5730"],
    ["Cyrille Elie Paul", "1/11/1969", "20 Cheshvan 5730"],
    ["Joël Marc Marcou", "14/8/1967", "8 Av 5727"],
    ["Renaud David (un Shabbèss)", "13/2/1965", "11 Adar I 5725"],
    ["Jacques Tchénio", "31/1/1967", "20 Sh'vat 5727"],
    ["Guerre des 6 Jours", "6/6/1967", "27 Iyyar 5727"],
    ["Viviane Lipskier", "5/6/1971", "12 Sivan 5731"],
    ["David Azulay", "9/7/1971", "16 Tamuz 5731"],
    ["Daniel Nounou Tchenio", "27/10/1970", "27 Tishrei 5731"],
    ["Varda Ninon", "13/10/1975", "8 Cheshvan 5736"],
    ["Jérémie Majérowicz", "9/11/1973", "14 Cheshvan 5734"],
    ["Yann Majerowicz", "12/1/1976", "10 Sh'vat 5736"],
    ["Thomas Benjamin", "3/8/1971", "12 Av 5731"],
    ["Johanna Azulay", "5/6/1974", "15 Sivan 5734"],
    ["Sarah Hélène Tchénio/Korsia", "10/11/1973", "15 Cheshvan 5734"],
    ["Éva", "6/11/1976", "13 Cheshvan 5737"],
    ["Elsa Illana Albaric", "15/9/1971", "25 Elul 5731"],
    ["Nathalie Azulay", "10/5/1976", "10 Iyyar 5736"],
    ["Elsa Seignol", "14/12/1986", "12 Kislev 5747"],
    ["Décès Violette Mamy", "1/12/1982", "15 Kislev 5743"],
    ["Houpah Laurent/Jacqueline", "9/9/1984", "12 Elul 5744"],
    ["Rahel Simhah", "21/10/1989", "22 Tishrei 5750"],
    ["Yehouda Milgram/Milgrom MICHPATIMË", "27/2/1987", "28 Sh'vat 5747"],
    ["Mathieu Minkowski/ Fils Dalain Et Sylvie", "7/3/1979", "8 Adar 5739"],
    ["Avidan Yosseph", "26/10/1985", "11 Cheshvan 5746"],
    ["Bastien Jean Joseph Bourg", "20/4/1986", "11 Nisan 5746"],
    ["Elsa Sussman, Fille De Paul", "14/2/1990", "19 Sh'vat 5750"],
    ["Maud Minkowski", "16/5/1981", "12 Iyyar 5741"],
    ["Sarah Milgram", "26/10/1979", "5 Cheshvan 5740"],
    ["Rudy Minkowski", "12/4/1980", "26 Nisan 5740"],
    ["Clement Pierre Paul Bourg", "14/12/1988", "6 Tevet 5749"],
    ["Aharon David", "31/5/1988", "15 Sivan 5748"],
    ["Suicide Primo Levi", "11/4/1987", "12 Nisan 5747"],
    ["Lucie Fille De Josette M", "9/6/1983", "28 Sivan 5743"],
    ["Johan Fils De Josette Berthe Milgram", "15/2/1985", "24 Sh'vat 5745"],
    ["Mathias Majerowicz", "3/1/1979", "4 Tevet 5739"],
    ["Décès Mariem Minkowska", "30/11/1976", "8 Kislev 5737"],
    ["SZY Samuel Zénon Yoda Milgram", "27/1/1983", "13 Sh'vat 5743"],
    ["Yohanânë Meïr", "7/12/1990", "20 Kislev 5751"],
    ["Clara Eden", "19/12/1997", "20 Kislev 5758"],
    ["Ilana Golda Violette", "1/3/2000", "24 Adar I 5760"],
    ["Adinah Myriam", "9/5/1997", "2 Iyyar 5757"],
    ["Ephraïm", "27/7/1992", "26 Tamuz 5752"],
    ["Jules Milgram", "12/12/2001", "27 Kislev 5762"],
    ["Assassinat Yitzhakh Rabin", "4/11/1995", "11 Cheshvan 5756"],
    ["Décès Yvette", "20/9/2000", "20 Elul 5760"],
    ["Gabriel", "6/9/1995", "11 Elul 5755"],
    ["Yonathânë", "30/5/1996", "12 Sivan 5756"],
    ["Illel Zwi//PESSAH TAL 1°jour", "4/4/1996", "15 Nisan 5756"],
    ["Luca Yèhècrkel", "8/4/2002", "26 Nisan 5762"],
    ["Lea Guila", "2/10/1999", "22 Tishrei 5760"],
    ["Batia Tova", "20/5/1998", "24 Iyyar 5758"],
    ["Décès Albert Kessalis", "30/6/1994", "21 Tamuz 5754"],
    ["Ethan Korsia", "14/2/2002", "2 Adar 5762"],
    ["Décès Henri Majerowicz", "6/6/1992", "5 Sivan 5752"],
    ["Hannah Nitzah", "13/12/1993", "29 Kislev 5754"],
    ["Hugo Giovanni Daniel", "1/5/2000", "26 Nisan 5760"],
    ["Décès Petit Charles (Bénita)", "7/5/1992", "4 Iyyar 5752"],
    ["Décès Maurice Meïr Mendilevici", "18/4/1998", "22 Nisan 5758"],
    ["Balthazar Isaac Alfred", "11/3/1999", "23 Adar 5759"],
    ["Décès/Leïla", "2/7/2007", "16 Tamuz 5767"],
    ["Esther Brouhiah", "10/5/2001", "17 Iyyar 5761"],
    ["Décès Jo", "7/11/2005", "5 Cheshvan 5766"],
    ["Keren", "8/10/2004", "23 Tishrei 5765"],
    ["Décès Berthe BBB", "24/9/2000", "24 Elul 5760"],
    ["Chïmeonë Yaakov", "12/4/2003", "10 Nisan 5763"],
    ["Golda Majerowicz", "16/12/2006", "25 Kislev 5767"],
    ["Elias Joyeux", "25/10/2006", "3 Cheshvan 5767"],
    ["Wort Avidan/Noah", "4/11/2006", "13 Cheshvan 5767"],
    ["Ruben Almir Tanguy A,", "20/7/2001", "29 Tamuz 5761"],
    ["Ulysse Simon Abraham Sistonako", "3/8/2006", "9 Av 5766"],
    ["Tenoïm Aharon/Odeïya", "25/3/2008", "18 Adar II 5768"],
    ["Tenoïm Avidan/Noah", "7/11/2006", "16 Cheshvan 5767"],
    ["Décès Michel Mendel", "27/12/2005", "26 Kislev 5766"],
    ["Décès Maurice Minkowski", "13/12/2020", "28 Kislev 5781"],
    ["austerlltz/moravie", "2/12/1805", ""],
    ["Joseph Staline", "18/12/1878", ""],
    ["décès de Joseph Staline", "5/3/1953", ""],
    ["Vladimir Ilitch Oulianov, dit Lénine", "22/4/1870", ""],
    ["décès de Vladimir Ilitch Oulianov, dit Lénine", "21/1/1924", ""],
    ["Léon Trotski", "26/10/1879", ""],
    ["décès de Léon Trotski, assassiné à Mexico", "21/8/1940", ""],
    ["Karl Marx", "5/5/1818", ""],
    ["décès de Karl Marx", "14/3/1883", ""],
    ["décret napoléonien indigne", "17/3/1808", ""],
    ["aurore/j'accuse/emile zola", "13/1/1898", ""],
    ["association à bût non lucratif", "1/7/1901", ""],
    ["insurrection ghetto varsovie", "19/4/1943", ""],
    ["débarquement en normandie", "6/6/1944", ""],
    ["naissance REPUBLIQUE INDIENNE/PAKISTAN", "15/5/1948", ""],
    ["décret relatif aux travaux de génie civil BTP", "8/1/1964", ""],
    ["Phare de l'Etang GLDF 612", "8/2/1970", ""],
    ["schabbèss d'acquisition de BETéÏNOU/Dr GRENIER", "21/2/1970", ""],
    ["paix égypte/israël/ carter-el saadate-begin", "26/3/1979", ""],
    ["tchernobyl réacteur 4 (ukraine)", "26/4/1986", ""],
    ["washington/taba/clinton/rabin/arafat", "13/9/1993", ""],
    ["fin état guerre jordanie/israel", "26/7/1994", ""],
    ["Taba suite/new york/arafat/rabin", "28/9/1995", ""],
    ["Entrée Solaris/Vega", "29/1/2008", ""],
    ["GUZ gaétano ubaldo zanardi", "16/2/1920", ""],
    ["josée zanardi née", "28/1/1921", ""],
    ["berthe olivier kittler", "6/6/1924", ""],
    ["pierre cerignano", "13/10/1932", ""],
    ["jacqueline I varada", "16/12/1932", ""],
    ["robert sivilia", "19/4/1941", ""],
    ["jean beau-père de boris/josette", "27/8/1942", ""],
    ["gérard sinden", "18/7/1945", ""],
    ["alain sitri un de mes trois avocats", "27/1/1947", ""],
    ["boris de josette h,m,", "1/4/1951", ""],
    ["anne chabrol gardienne/compagnie de maman", "19/2/1953", ""],
    ["françois pierre claude bourg", "22/4/1953", ""],
    ["philippe albaric", "25/1/1963", ""],
    ["daniel/jeannette mariage/mairie", "5/9/1968", ""],
    ["Yossef (Aaron/Odaya)", "11/2/2017", "15 Sh'vat 5777"],
    ["Odel Lea (Aaron/Odaya)", "13/2/2012", "20 Sh'vat 5772"],
    ["Akiva Dov (Rah’el/Simh'a)", "7/8/2012", "19 Av 5772"],
    ["Yaakov Yossef (Rah’el/Simh'a)", "10/4/2018", "25 Nisan 5778"],
    ["Itamar (Avidan/Noah)", "29/10/2015", "16 Cheshvan 5776"],
    ["Décés de Jimmy Ceregniano", "29/6/1979", "4 Tamuz 5739"],
    ["Yonathan (Yéhouda/Braha)", "2/10/2013", "28 Tishrei 5774"],
    ["Batia (Yéhouda/Braha)", "28/6/2016", "22 Sivan 5776"],
    ["Nathan Haim (Aaron/Odaya)", "7/8/2009", "17 Av 5769"],
    ["Odaya (Yéhouda/Braha)", "15/11/2014", "22 Cheshvan 5775"],
    ["Ayala Rah’el (Avidan/Noah)", "23/8/2018", "12 Elul 5778"],
    ["Israel Mazel Tov (Yéhouda/Braha)", "20/1/2020", "23 Tevet 5780"],
    ["Naomi (Avidan/Noah)", "29/10/2015", "16 Cheshvan 5776"],
    ["Mariage Adina et Raphael Yehouda Elkaïm", "11/9/2019", "11 Elul 5779"],
    ["Yeoudit Nazma (Adina/Raphaël)", "22/8/2020", "2 Elul 5780"],
    ["Tael (Illel/Chira)", "15/8/2018", "4 Elul 5778"],
    ["Décés de Jacob David 'Douvet' Milgram", "9/2/1940", "30 Sh'vat 5700"],
    ["Chmouel (Yéhouda/Braha)", "31/5/2012", "10 Sivan 5772"],
    ["Nahman Israel (Aaron/Odaya)", "27/10/2014", "3 Cheshvan 5775"],
    ["Michal (Yoh’anan/Shulamit)", "22/12/2018", "14 Tevet 5779"],
    ["Elisheva (Yéhouda/Braha)", "5/10/2018", "26 Tishrei 5779"],
    ["Odel (Illel/Chira)", "2/8/2017", "10 Av 5777"],
    ["Elisheva (Efraïm/Léa)", "2/8/2019", "1 Av 5779"],
    ["Aaron Zvi (Rah’el/Simh'a)", "3/5/2016", "25 Nisan 5776"],
    ["Yska (Hanna/Yossef)", "25/11/2017", "7 Kislev 5778"],
    ["Yehonathan (Avidan/Noah)", "1/4/2009", "7 Nisan 5769"],
    ["Ayéleth BatZion (Hanna/Yossef)", "22/8/2019", "21 Av 5779"],
    ["Ruth (Efraïm/Léa)", "16/9/2020", "27 Elul 5780"],
    ["Ouria (Avidan/Noah)", "23/11/2013", "20 Kislev 5774"],
    ["Benyamin (Rah’el/Simh'a)", "29/3/2014", "27 Adar II 5774"],
    ["Hanania (Efraïm/Léa)", "2/6/2018", "19 Sivan 5778"],
    ["Tamar (Efraïm/Léa)", "20/6/2017", "26 Sivan 5777"],
    ["Jacob David 'Douvet' Milgram", "4/1/1878", "29 Tevet 5638"],
    ["Yedidia (Avidan/Noah)", "24/10/2010", "16 Cheshvan 5771"]
];
export default anniversaires;