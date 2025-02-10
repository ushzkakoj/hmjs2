// Створити змінні для зберігання температури за Цельсієм та Фаренгейтом.
// Перевести температуру з Цельсія у Фаренгейти за допомогою формули та вивести результат в консоль.
let celsius = 5;;
let fahrenheit = (celsius * 1.8) + 22;
console.log("Температура в Фаренгейтах: ", fahrenheit)

// Створити змінну для зберігання кількості днів у місяці.
// Обчислити кількість годин та хвилин у цьому місяці за допомогою оператора множення та вивести результат в консоль.
let daysInMonth = 30;
let hoursInMonth = daysInMonth * 24;
let minutesInMonth = hoursInMonth * 60;
console.log("Часов в месяце: ", hoursInMonth, "Минут в месяце: ", minutesInMonth)

// Створити змінні для зберігання рівня здоров'я та енергії гравця в грі.
// Зменшити рівень здоров'я та енергії гравця за допомогою операторів віднімання та вивести результат в консоль.
let health = 538;
let energy = 291; 
health -= 200;
energy -= 55;
console.log("Уровень Злоровья: ", health, "Уровень Энергии: ", energy)

// Створити змінну для зберігання суми покупки в магазині.
// Застосувати знижку в розмірі 10% до цієї суми за допомогою оператора множення та вивести результат в консоль.
let purchaseAmount = 6050;
let discount = purchaseAmount * 0.10;
let discountedAmount = purchaseAmount - discount
console.log("Сума после скидки: ", discountedAmount)

// Створити змінну для зберігання числа з плаваючою комою.
// Використати метод Math.floor() для округлення числа до меншого та вивести результат в консоль.
let floatNumber = 22.8;
let roundedDown = Math.floor(floatNumber)
console.log("Округленое число: ", roundedDown)

// Створити змінну для зберігання рядка, який містить числа з плаваючою комою.
// Використати метод parseFloat() для перетворення рядка у десяткове число та вивести результат в консоль.
let floatString = "14.33";
let parsedFloat = parseFloat(floatString)
console.log("Десятное число: ", parsedFloat)

// Створити змінну для зберігання рядка, який містить ціле число.
// Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
let intString = "52";
let parsedInt = parseInt(intString)
console.log("Ціле число: ", parsedInt)

// Створити змінну для зберігання числа.
// Використати метод Math.sqrt() для обчислення квадратного кореня числа та вивести результат в консоль.
let number = 144;
let sqrtNumber = Math.sqrt(number)
console.log("Квадратный корень числа 144 =", sqrtNumber)

// Створити змінні для зберігання цілочисельного значення та рядка з числом у вигляді рядка.
// Використати метод parseInt() для перетворення рядка у ціле число та вивести результат в консоль.
// Потім використати метод toString() для перетворення цілочисельного значення у рядок та вивести результат в консоль.
let integerNumber = 1000;
let stringNumber = "993";
let convertedToInt = parseInt(stringNumber)
let convertedToString = integerNumber.toString()
console.log("Преобразовано в число:", convertedToInt, "Преобразовано в строку:", convertedToString)