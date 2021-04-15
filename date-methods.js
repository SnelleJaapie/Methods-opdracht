/* Opdracht 0: voorbeeld */
// Maak een nieuw date-object aan voor dit huidige moment en log dit in de terminal
// ---- Verwachte uitkomst: 2021-04-06T14:54:34.062Z (afhankelijk van het moment)

const currentDay = new Date();
console.log(currentDay);


/* Opdracht 1 */
// 1a. Maak een nieuw date-object aan voor dit huidige moment en log het aantal uren in de terminal
// 1b. Log daarna het aantal minuten in de terminal
// ---- Verwachte uitkomsten:
// Uren: 16 (als er een vier in de klok zit op het moment van aanroepen)
// Minuten: 36 (als het 16:36 is op het moment van aanroepen)
const currentDay2 = new Date();
const currentdayHours = currentDay2.getHours()
const currendayMinutes = currentDay2.getMinutes()
console.log("Hours: ", currentdayHours)
console.log("Minutes: ", currendayMinutes)


/* Opdracht 2 */
// Format het date-object dat je bij de vorige vraag hebt gemaakt naar een leesbare datum
// ---- Verwachte uitkomst: Tue Apr 06 2021 (afhankelijk van het moment)
const longOptions = {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
};

const englishDate = currentDay2.toDateString();
console.log(englishDate)

const dutchDate = currentDay2.toLocaleDateString("nl-NL", longOptions)

console.log(dutchDate)