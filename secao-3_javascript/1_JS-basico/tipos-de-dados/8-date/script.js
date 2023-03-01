console.log(Date())
//inicializa com a data e hora atual do computador
console.log(new Date(2023, 2, 16))
//inicializa com valores pré definidos
console.log(new Date(2023, 2, 16, 15, 49, 20))

const bornDate = new Date(1993, 8, 24, 21, 0, 0)
const today = new Date()

console.log(bornDate)
console.log(bornDate.toISOString())

console.log("dia", bornDate.getDate())
console.log("mês", bornDate.getMonth() + 1)
console.log("ano", bornDate.getFullYear())

console.log("idade:", today.getFullYear() - bornDate.getFullYear())

/* # Principais métodos

- `getDay()` e `setDay()` - Retorna / define o dia da semana (0-6).
- `getDate()` e `setDate()` - Retorna / define o dia do mês (1-31).
- `getMonth()` e `setMonth()` - Retorna / define o mês (0-11).
- `getFullYear()` e `setFullYear()` - Retorna / define o ano.
- `getHours()` e `setHours()` - Retorna / define a hora (0-23).
- `getMinutes()` e `setMinutes()` - Retorna / define os minutos (0-59).
- `getSeconds()` e `setSeconds()` - Retorna / define os segundos (0-59).
- `parse()` - Recupera uma data a partir de uma string.
- `toString()` - Retorna uma data como string.
- `toISOString()` - Retorna uma data como string no padrão ISO.
- `toTimeString()` - Retorna a hora apenas. */
