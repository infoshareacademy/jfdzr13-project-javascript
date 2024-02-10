### Warm-up

0.  Stwórzcie plik HTML, a następnie stwórzcie pusty plik JS i dodajcie go do tego HTMLa. Skrypt dodajcie w znaczniku body. Upewnijcie się, że skrypt został poprawnie podpięty - dodajcie 'console.log('DOM API') i odpalcie plik HTML. Stosowny komunikat powinien się pojawić w konsoli.

Przykład dodania kodu JS do HTML:

```js
<body>
  <script src="script.js"></script>
</body>
```

---

1. Dodajcie w HTMLu za znacznikiem 'script' znacznik 'h1' z atrybutem ID o wartości 'header'. W pliku JS spróbujcie złapać dodany znacznik za pomocą funkcji 'document.getElementById' podając jako argument ID dodane do znacznika 'h1'. Zapiszcie go w stałej (const) o nazwie 'header' i wykonajcie 'console.log(header)'. Zerknijcie co się wydarzy w konsoli. Następnie również wykorzystując 'console.log' wyświetlcie aktualną zawartość tego elementu.

Spoiler: nie wydarzyło się nic (wyświetli się 'null') - ważna lekcja - taki kod nie zadziała z tego względu, że kod jest wykonywany od góry do dołu, dlatego najpierw wykona się zawartość skryptu a dopiero potem zostanie dodany znacznik 'h1' do drzewa DOM. Kolejność dodania skryptu do pliku HTML MA ZNACZENIE.

Jednym z rozwiązań (również najprostszym) jest przeniesienie skryptu na sam dół (ale nadal w body), pod wszelki kod HTML jaki powstanie (innym sposobem byłoby dodanie eventu "DOMContentLoaded" na obiekcie window).
Przenieście skrypt na sam dół i sprawdźcie, czy tym razem console.log(header) wskazał coś innego niż 'null'.

---

2. Gdy wszystko już mamy skonfigurowane poprawnie - dodajmy style dla naszego nagłówka. Dodajcie plik css (np. styles.css) i podepnijcie go do HTMLa. Skopiujcie zawartość pliku css dołączonego do tego zadania.
   W kodzie JS wykorzystując stworzony obiekt 'header' i jego właściwość 'classList' dodajcie zdefiniowamą wcześniej klasę 'header'.
   Sprawdzcie, czy Wasz nagłówek zmienił kolor.

---

3. Zmieńmy tekst zawarty w nagłówku, utrudnijmy trochę sprawę i wykorzystajmy do tego JS (no bo po co zmienić w HTMLu, byłoby to zbyt oczywiste). Za pomocą właściwości 'innerText' ustawmy 'I am a heading' jako aktualną treść naszego znacznika 'h1'.

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>

---

4. Dodajmy do HTMLa listę numerowaną z 4 elementami. Wykorzystajmy do tego JS. Aby dodać kod musimy znaleźć element 'bazowy' w którego środek 'wciśniemy' listę wraz z jej elementami - takim elementem bazowym może być 'body'.
   Stwórz tablicę 'listItems' składającą się z 4 elementów - kolejnych liter alfabetu zaczynająć od 'a'. Następnie korzystająć z funkcji 'createElement' stwórz listę 'ol'. Wykorzystując funkcję 'forEach' dodaj wszystkie cztery elementy z tablicy do listy 'ol' tworząc za każdym razem element 'li' i umieszczając w nim treść odpowiadającą zawartości tego elementu (czyli dla elementu o indeksie 0 będzie to 'a', potem 'b' itd...). Do dodania do listy elementów 'li' wykorzystaj funkcję 'append'. Pamiętaj o 'wciśnięciu' gotowej listy do drzewa DOM.

---

5. Wykorzystując querySelectorAll złapcie wszystkie elementy 'li' i korzystając z pętli forEach dodajcie elementom klasę 'listItem'

---

6. Podczas pracy z DOM możemy również usuwać zarówno atrybuty jak i całe elementy. Zacznijmy od usunięcia z elementu 'h1' klasy 'header', którą dodaliśmy w kroku drugim. Wykorzystajcie właściwość 'classList' (tak jak w kroku 2) ale tym razem z funkcją 'remove'.

---

7. Usuńmy teraz cały element - wystarczy odnieść się do stworzonego w kroku 1. const'a 'header' i jego funkcji `remove()`.

---

8. Dodajcie funkcję `toggleBackgroundColor` która będzie modyfikować tło elementu 'body'. Jeśli ten element nie ma ustawionego w stylach 'background-color' to doda mu 'background-color' o wartości '#123123' a jeśli ma - to usunie go. Dodajcie przycisk do DOM (w JS oczywiście) i dodajcie mu `eventListener` odpowiedzialny za kliknięcie. Niech przycisk ma treść 'Click me'.

---

#### <<< tutaj robimy commita aktualnych zmian i push na repozytorium zdalne >>>
