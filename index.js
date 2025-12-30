// TownPay Helper Bot (Demo)
// Built for Towns Season One Bot Competition
// Theme: Bots that move money

function handleMessage(message) {
  if (message === "/help") {
    return `
Welcome to TownPay Helper 🤝

Available commands:
/pay - Send a payment
/request - Request a payment
/help - Show this menu
`;
  }

  if (message === "/pay") {
    return `
💸 Payment Flow Started

Please enter:
Recipient address
Amount

You will be asked to confirm before sending.
`;
  }

  if (message === "/request") {
    return `
📩 Payment Request Started

Please enter:
Requester name
Amount

A request notification will be sent.
`;
  }

  return "❓ Unknown command. Type /help to see available options.";
}

// Demo simulation
console.log(handleMessage("/help"));
console.log(handleMessage("/pay"));
console.log(handleMessage("/request"));
