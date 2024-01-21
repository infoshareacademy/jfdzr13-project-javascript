# JavaScript - Basics

## Podstawowe operacje na typach prostych

### Zadanie 1.

1. Stwórz zmienną o nazwie userName i przypisz jej swoje imie.
2. Stwórz zmienną o nazwie age i przypisz jej dowolną wartość numeryczną
3. Stwórz zmienna o nazwie city i przypisz jej nazwę dowolnej miejscowości
4. Wydrukuj w konsoli taka informacje:
   `Our user's name is '' and the user is '' years old. The user lives in ''`

Luki w powyższym zdaniu wypełnij wartościami ze zmiennych.

### Zadanie 2.

1. Stwórz funkcję `sum` dodającą dwie liczby.
2. Przypisz wywołanie funkcji `sum(5, 5)` do zmiennej `ten`
3. Przypisz wywołanie funkcji `sum(2, 2)` do zmiennej `four`
4. Wykorzystaj funkcję `sum`, aby dodać wartości zmiennych `ten` i `four`.
5. Wynik przypisz do zmiennej `myAddedNumbers` i wydrukuj wartość tej zmiennej w konsoli.

### Zadanie 3.

Wydrukuj w konsoli taką informacje:
`Username: x have length: y.`

Gdzie `x` to wartość zmiennej userName, a `y` to długość tej wartości

## Instrukcje warunkowe

### Zadanie 4.

1. Stwórz dwie zmienna `firstUser` i `secondUser`. Przypisz im dowolne imiona.
2. Napisz instrukcje warunkową `if`, która sprawdzi czy imiona są takie same:
   1. Jesli Tak - wydrukuj w konsoli wiadomość: "Oh! The names are the same!"
   2. Jesli Nie - wydrukuj w konsoli wiadomość: "Unfortunately the names are different :/"

### Zadanie 5.

1. Stwórz zmienną o nazwie `age`. I przypisz jej dowolną wartość liczbową.
2. Napisz instrukcję warunkową, która sprawdzi czy wartość zmiennej `age` jest większa lub równa 18.
   1. Jeśli Tak - wydrukuj w konsoli wiadomość: "User is adult"
   2. W każdym innym przypadku - wydrukuj w konsoli wiadomość: "User is underaged"
3. Zapisz tę funkcję na dwa sposoby
   1. Za pomocą `if`
   2. Za pomocą ternary operatora (trójargumentowego)

### Zadanie 6.

Napisz funkcję `getBiggerNumber`, która z dwóch podanych liczb zwraca większą liczbę.

Przykład:

```js
getBiggerNumber(2, 4); // 4
getBiggerNumber(2, 10); // 10
getBiggerNumber(2000, 100); // 2000
```

### Zadanie 7.

Napisz funkcję `itemsInCart()`, która zwróci odpowiednią gramatycznie liczbę przedmiotów w koszyku (item vs items).

```js
itemsInCart(3); // You have 3 items in your cart.
itemsInCart(1); // You have 1 item in your cart.
```

### Zadanie 8.

Ćwiczenie na operatory logiczne.

Pobierz wiek użytkownika za pomocą `prompt()`.

1. Jeśli użytkownik wpisał powyżej 125 lat lub poniżej 0, wyświetl w konsoli `You provided incorrect age.`
2. Jeśli użytkownik wpisał wiek powyżej 35 lat, wyświetl w konsoli `You could be a president!`
3. Jeśli użytkownik wpisał wiek powyżej 18 lat, wyświetl w konsoli `At least you can have a beer.`
4. W innym wypadku wyświetl w konsoli `You cannot be a president and can't even drink beer :(`

Kolejność warunków ma znaczenie!

### Zadanie 9.

Ćwiczenie na operatory logiczne.

1. Napisz funkcję `shouldTakeUmbrella`, ktore odpowie na pytanie czy wziąć ze sobą parasol.
2. Funkcja ma przyjąc kilka argumentów, które będą oznaczały
   - isRaining: true/false
   - hasJacket: true/false
   - longTrip: true/false
   - isSummer: true/false
3. Ustal swoje własne warunki, od jakich funkcja powinna nakazać wzięcie parasolki, a kiedy nie.

### Zadanie 10.

Ćwiczenie na operatory logiczne.

1. Napisz funkcję `isEqual`, która sprawdza czy przekazane liczby są równe:

   - Dla wywołania isEqual(2, 2) zwraca true
   - Dla wywołania isEqual(2, 10) zwraca false
   - Dla wywołania isEqual(2000, 100) zwraca false
   - Dla wywołania isEqual(100, '100') zwraca false

### Zadanie 11.

1. Napisz funkcję `canRideRollerCoaster(age, height)`:
   - Jeśli ma więcej niż 18 lat oraz więcej niż 175 cm wzrostu wypisz w konsoli "Can ride!" i zwróć `true`
   - W przeciwnym razie wypisz "Sorry kiddo, no can do." i zwróć `false`
2. Napisz tę samą funkcję za pomocą `switch` statement

```js
canRideRollerCoaster(17, 180); // false
canRideRollerCoaster(19, 150); // false
canRideRollerCoaster(13, 150); // false
canRideRollerCoaster(19, 190); // true
```

## Metody na typach prostych

### Zadanie 12.

Napisz funkcję `alphabeticalOrder`, która ustawia litery w podanym wyrazie w kolejności alfabetycznej.

```js
alphabeticalOrder("javascript"); // 'aacijprstv'
```

### Zadanie 13.

Napisz funkcję `reverseText`, która odwraca kolejność liter w podanym wyrazie.

```js
reverseText("javascript"); // 'tpircsavaj'
```

### Zadanie 14.

Napisz funkcję `getInitials`, która zwróci inicjały z podanego imienia i nazwiska.

```js
getInitials("Harry Potter"); // 'H.P.'
```

### Zadanie 15.

Napisz funkcję `slugify`, która zwróci podany ciąg znaków w formie tzw. "slug'a" (czyli wszystkie wyrazy z małej litery, połączone myślnikiem `-`)

```js
slugify("Top 10 my favourite songs"); // top-10-my-favourite-songs
slugify("Name of my blog article"); // name-of-my-blog-article
```

### Zadanie 16.

Napisz funkcję `makeUpperCase()`, która zwróci każdy z wyrazów w tym ciągu znaków z powiększoną pierwszą literą.

```js
toUpperCase("top 10 my favourite songs"); // Top 10 My Favourite Songs
toUpperCase("Name of my Blog article"); // Name Of My Blog Article
```