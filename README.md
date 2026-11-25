# Bullseye
Polski quiz otwarty: nie szukaj oczywistej odpowiedzi, celuj w niszę.

Projekt niezależny, inspirowany mechaniką Krillion i Celuj w niszę. Własna baza pytań, grafika i nazewnictwo. Tryb solo, bez konta i bez reklam.

## Uruchomienie
Node.js 22.12+ (zalecany 24 LTS).
```sh
npm install
npm run dev
npm test
npm run build
npm run preview
```
Można również uruchomić statyczne pliki przez dowolny serwer HTTP. Vite 8 buduje wersję produkcyjną do dist/.

## Zasady
7 pytań, 3 sekundy na przeczytanie; tryb Radar: 25 s i poziomy 10/15/30/60/85/100; tryb Nisza: 20 s i 10/30/55/85/100. Pierwsza rozpoznana odpowiedź kończy rundę. Niepoprawne próby można ponawiać do upływu czasu. Maksimum 700 pkt. W treningu zegar jest wyłączony.
Codzienne zestawy i archiwum liczone według Europe/Warsaw. Dzienna seria rośnie wyłącznie za ukończony zestaw dnia (nie za archiwum). Wyniki są przechowywane na urządzeniu.
Radar wyników: siedem kierunków, po jednym na pytanie; im bliżej środka, tym rzadsze trafienie. Tabele rozwiązań pokazują poziomy redakcyjne, a nie realne udziały innych osób.

## Zakres i ograniczenia
Baza startowa jest autorska i ograniczona; nie jest kopią katalogów konkurencji. Poziomy to ręcznie przypisane szacunki rzadkości, a nie dane zbiorcze. Nie ma synchronizacji kont, płatności, globalnych rankingów, wieloosobowości ani serwera moderacji. Zgłoszenia zapisują się lokalnie i można je wyeksportować. Daty zestawów są deterministyczne, nie stanowią historycznych zestawów konkurencji. Tryb solo nie jest zabezpieczony przed podglądem odpowiedzi w kodzie.

Inspiracje: https://krillion.to/pl/how-to-play oraz https://wnisze.pl/how-to-play.
