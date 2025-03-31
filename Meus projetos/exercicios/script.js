const cart = [
    { productName: 'Abóbora', pricePerKg: 5, kg: 1 },
    { productName: 'Pepino', pricePerKg: 3.55, kg: 1.3 },
    { productName: 'Limão', pricePerKg: 1.2, kg: 2},
    { productName: 'Abacate', pricePerKg: 5.4, kg: 1.67 },
    { productName: 'Morango', pricePerKg: 11.9, kg: 3},
]

const valueTotal = cart.reduce ( (acc, value ) => {
   const result = value.pricePerKg * value.kg
   return acc + result
}, 0)

console.log(`A sua compra ficou no valor de: R$${valueTotal.toFixed(2)}`)