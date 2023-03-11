/**
 * if ticket number is less than 100, per ticket price 1000tk
 * if ticket number is more than 100, but less then 200, first 100 ticket will be 1000 tk per ticket,,, rest tickets will be 900 taka per ticket.
 *
 * if you purches more than 200 ticket
 * 1. 0 - 100 = 1000tk
 * 1. 101 - 200 = 900tk
 * 3. 200+ ticket = 700tk
 */
function ticketPrice(ticketQuantity) {
  const first100TicketRate = 1000;
  const second100TicketRate = 900;
  const restTicketRate = 700;
  if (ticketQuantity <= 100) {
    const price = ticketQuantity * first100TicketRate;
    return price;
  } else if (ticketQuantity <= 200) {
    const first100Price = 100 * first100TicketRate;
    const restTicketQuantity = ticketQuantity - 100;
    const restTicketPrice = restTicketQuantity * second100TicketRate;
    const totalPrice = first100Price + restTicketPrice;
    return totalPrice;
  } else {
    const first100Price = 100 * first100TicketRate;
    const second100Price = 100 * second100TicketRate;
    const restTicketQuantity = ticketQuantity - 200;
    const restTicketPrice = restTicketQuantity * restTicketRate;
    const totalCost = first100Price + second100Price + restTicketPrice;
    return totalCost;
  }
}
const price = ticketPrice(220);
console.log(price);
