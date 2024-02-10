import people from "./data.js";

// 1. Napisz funkcję, która przyjmie jako argument tablicę people
// i zwróci ciąg znaków w konwencji:
/*
    There are A women in provided data source, their names are B, C, D and E
    and in total they have F years. There are G men in the data source,
    their names are H, I, J and K and in total they have L years.
*/
// gdzie A, F, G i L to liczby, a pozostałe zmienne to ciągi znaków

// 2. Napisz funkcję, która przyjmie jako argument tablicę people oraz indeks 
// elementu tablicy i zwróci tablicę w konwencji 
// ["Alice", "woman", 27, "New York", 168, "Software Engineer", "Toyota Corolla"] 
// decydując o tym, który zestaw danych zwrócić na podstawie otrzymanego indeksu

// 3. Napisz funkcję, która przyjmie jako argument wartość zwracaną przez funkcję 
// z zadania 2. i wydrukuje w konsoli ciąg znaków w następującej konwencji:
// "Bob, a 35 years old man, lives in San Francisco. He is 172 cm tall. Currently 
// he works as Marketing Manager and he drives Honda Civic"