let petNames = ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let withMarmaduke = petNames.push['Marmaduke']

console.log(petNames)

let removedItems = petNames.splice(5, 1)
console.log(petNames)
//action: Remove Vinny. Remaining Data: ['Darcy', 'Jack', 'Jerry', 'Marty', 'Vito', 'Riley', 'Saddie', 'Marge', 'Sam'] 

let removeMarty = petNames.splice(3, 1)
console.log(petNames)
//action: Remove Marty. Remaining Data: ['Darcy', 'Jack', 'Jerry', 'Vito', 'Riley', 'Saddie', 'Marge', 'Sam'] 

petNames.unshift('Nancy')
console.log(petNames)
//action: Add Nancy to front. Remaining Data: ['Nancy', 'Darcy', 'Jack', 'Jerry', 'Vito', 'Riley', 'Saddie', 'Marge', 'Sam'] 

petNames.push('Nancy')
console.log(petNames)
//action: Add Nancy to back. Remaining Data: ['Nancy', 'Darcy', 'Jack', 'Jerry', 'Vito', 'Riley', 'Saddie', 'Marge', 'Sam', 'Nancy'] 

let rileyNumber = petNames.indexOf('Riley')
console.log(rileyNumber)
//action: Show user the index of Riley. Remaining Data: [5]

let cindyNumber = petNames.indexOf('Cindy')
console.log(cindyNumber)
//action: Add Nancy to back. Remaining Data: [-1]

console.log(withMarmaduke)
//action: show data about withMarmaduke. Remaining Data: undefined
/*
petNames.shift()
console.log(petNames)
//action: Remove first name. Remaining Data: ['Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

petNames.unshift('Barney')
console.log(petNames)
//action: Add Barney to beginning. Remaining Data: ['Barney', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

let allPets = [petNames.push('Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed')]

console.log(allPets)
//Remaining Data: ['Barney', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam', 'Ted', 'Fred', 'Jed', 'Ned', 'Ed', 'Zed']

let stringPets = [Bob, Sam, Andy]

petNames.unshift('Agnes')
//action: Add Agnes to beginning. Remaining Data: ['Agnes', 'Barney', 'Jack', 'Jerry', 'Marty', 'Vito', 'Vinny', 'Riley', 'Saddie', 'Marge', 'Sam']

*/
