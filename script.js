const currentDay = document.querySelector('.current-day')
const funFact = document.querySelector('.fun-fact')

const facts = [
	'Krokodyl nie potrafi wystawić języka.',
	'Każdy człowiek spędził około pół godziny jako pojedyncza komórka.',
	'Dźwięk przemieszcza się 15 razy szybciej przez stal niż przez powietrze.',
	'Leniwce potrzebują dwóch tygodni na strawienie jedzenia.',
	'Goryle śpią nawet czternaście godzin dziennie.',
	'Język kameleona jest dwukrotnie dłuższy od jego ciała.',
	'Chińczycy w ciągu roku zużywają około 80 miliardów pałeczek.',
	'Świnie nie mogą fizycznie spojrzeć w niebo.',
	'Jeśli kichasz zbyt mocno, możesz złamać żebro.',
	'Szczury i konie nie mogą wymiotować.',
	'Średnio psy mają lepszy wzrok niż ludzie, choć nie widzą tak kolorowo.',
	'Możesz określić płeć konia patrząc za jego zęby.',
	'Ketchup został sprzedany w latach 30. XIX wieku jako lek.',
	'W kasynach hazardowych w Las Vegas nie ma zegarów.',
	'Serce krewetki jest w głowie.',
]

const day = new Date()
currentDay.textContent = day.toLocaleString("default", { weekday: "long" })

const showRandomFact = () => {
    const number = Math.floor(Math.random() * (facts.length - 1))
    // console.log(number)

    funFact.textContent = facts[number]
}

showRandomFact()
