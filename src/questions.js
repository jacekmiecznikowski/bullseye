// Original editorial estimates, NOT observed player frequencies.
export const questions = [
["Podaj stolicę państwa w Europie","Geografia","Paryż|Berlin|Londyn|Rzym;Warszawa|Madryt|Praga|Wiedeń|Lizbona;Oslo|Helsinki|Sztokholm|Kopenhaga|Ateny|Dublin|Bruksela|Amsterdam|Budapeszt|Bratysława;Zagrzeb|Lublana|Ryga|Tallinn|Wilno|Bukareszt|Sofia|Belgrad|Kijów|Mińsk|Moskwa|Berno;Tirana|Skopje|Sarajewo|Podgorica|Reykjavík=Reykjavik|Kiszyniów|Valletta|Andora|Vaduz|Monako|San Marino|Watykan|Luksemburg|Prisztina"],
["Podaj pierwiastek chemiczny","Nauka","wodór=H|tlen=O|węgiel=C;azot=N|żelazo=Fe|złoto=Au|srebro=Ag|hel=He|sód=Na|chlor=Cl|miedź=Cu;wapń=Ca|potas=K|magnez=Mg|cynk=Zn|ołów=Pb|uran=U|krzem=Si|siarka=S|fosfor=P;neon=Ne|argon=Ar|lit=Li|bor=B|fluor=F|brom=Br|jod=I|nikiel=Ni|cyna=Sn|rtęć=Hg|platyna=Pt;osm=Os|iryd=Ir|ren=Re|hafn=Hf|lutet=Lu|terb=Tb|erb=Er|ksenon=Xe|rad=Ra|polon=Po|wolfram=W|molibden=Mo"],
["Podaj państwo Ameryki Południowej","Geografia","Brazylia|Argentyna;Chile|Peru;Kolumbia|Wenezuela|Boliwia;Ekwador|Urugwaj|Paragwaj;Gujana|Surinam"],
["Podaj miesiąc po polsku","Rozgrzewka","styczeń|grudzień;lipiec|sierpień;maj|czerwiec|luty;marzec|kwiecień|wrzesień;październik|listopad"],
["Podaj znak zodiaku","Kultura","baran|lew;rak|skorpion;bliźnięta|panna|ryby;waga|byk|strzelec;koziorożec|wodnik"],
["Podaj państwo graniczące z Polską","Geografia","Niemcy;Ukraina;Czechy|Słowacja;Białoruś|Rosja;Litwa"],
["Podaj planetę Układu Słonecznego","Nauka","Ziemia|Mars;Jowisz;Saturn|Wenus;Merkury;Uran|Neptun"],
["Podaj polskie województwo","Polska","mazowieckie|śląskie;małopolskie|wielkopolskie|pomorskie;dolnośląskie|łódzkie|lubelskie;podkarpackie|podlaskie|zachodniopomorskie|kujawsko-pomorskie;lubuskie|opolskie|świętokrzyskie|warmińsko-mazurskie"],
["Podaj państwo należące do G7","Świat","USA=Stany Zjednoczone;Niemcy;Francja|Wielka Brytania=Zjednoczone Królestwo;Japonia|Włochy;Kanada"],
["Podaj kolor tęczy","Nauka","czerwony;niebieski|zielony;żółty;pomarańczowy;indygo|fioletowy"],
["Podaj państwo bałtyckie (jedno z trzech)","Geografia","Litwa;;Łotwa;;Estonia"],
["Podaj oficjalny język ONZ","Świat","angielski;francuski;hiszpański;rosyjski;arabski|chiński"],
["Podaj jedną z pięciu wielkich amerykańskich jezior","Geografia","Michigan;Ontario;Erie;Huron;Górne=Superior"],
["Podaj miasto wojewódzkie w Polsce","Polska","Warszawa|Kraków;Wrocław|Poznań|Gdańsk;Łódź|Katowice|Lublin|Szczecin;Bydgoszcz|Białystok|Rzeszów|Toruń;Kielce|Opole|Olsztyn|Gorzów Wielkopolski|Zielona Góra"],
["Podaj państwo skandynawskie w ścisłym znaczeniu","Geografia","Szwecja;;Norwegia;;Dania"],
["Podaj jedną z czterech powieści cyklu Chłopi (tom)","Literatura","Jesień;;Zima;Wiosna;Lato"],
["Podaj figurę szachową (bez pionka)","Sport","król;hetman=królowa;wieża;skoczek=koń;goniec"],
["Podaj dyscyplinę pięcioboju nowoczesnego w formacie olimpijskim 2028","Sport","pływanie;bieganie=bieg;szermierka;strzelanie;tor przeszkód=przeszkody"],
["Podaj państwo Beneluksu","Geografia","Holandia=Niderlandy;;Belgia;;Luksemburg"],
["Podaj ocean","Geografia","Spokojny=Pacyfik;Atlantycki=Atlantyk;Indyjski;Arktyczny=Lodowaty Północny;Południowy"],
["Podaj kontynent w modelu siedmiu kontynentów","Geografia","Europa|Azja;Afryka;Ameryka Północna|Ameryka Południowa;Australia;Antarktyda"]
].map(([prompt,category,raw],id)=>({id,prompt,category,answers:raw.split(";").flatMap((group,tier)=>group?group.split("|").map(s=>({names:s.split("="),tier})):[])}));
