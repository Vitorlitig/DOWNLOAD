const companies = [
    { name: 'Samsung', marketValue: 50, CEO: 'Kim Hyun Suk', foundedOn: 1938 },
    { name: 'Microsoft', marketValue: 415, CEO: 'Satya Nadella', foundedOn: 1975 },
    { name: 'Intel', marketValue: 117, CEO: 'Brian Krzanich', foundedOn: 1968 },
    { name: 'Facebook', marketValue: 383, CEO: 'Mark Zuckerberg', foundedOn: 2004 },
    { name: 'Spotify', marketValuee: 845, CEO: 'Tim Cook', foundedOn: 1976 },

]
const addcompanies = companies.map(company => {
    company.marketValue = company.marketValue - (company.marketValue / 10)

    return company
}).filter(company => company.foundedOn > 1980).reduce( (acc, company) => acc + company.marketValue, 0)

console.log(`O valor das empresas encontradas foi de R$${addcompanies}M`)