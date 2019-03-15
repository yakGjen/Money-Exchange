module.exports = function makeExchange(currency) {
  if (currency <= 0) {
		return {};
	}
	if (currency > 10000) {
		return {
			error: "You are rich, my friend! We don't have so much coins for exchange"
		};
	}
	
	let remainder = 0;
	
	const money = {
		H: 0,
		Q: 0,
		D: 0,
		N: 0,
		P: 0
	};
	
	const result = {};
	
	money.H = Math.floor(currency / 50);
	
	if (money.H === 0) {
		money.Q = Math.floor(currency / 25);
		remainder = currency % 25;
	} else {
		remainder = currency % 50;
		money.Q = Math.floor(remainder / 25);
		remainder = remainder % 25;
	}
	
	
	if (money.H === 0 && money.Q === 0) {
		money.D = Math.floor(currency / 10);
		remainder = currency % 10;
	} else {
		money.D = Math.floor(remainder / 10);
		remainder = remainder % 10;
	}
	
	
	if (money.H === 0 && money.Q === 0 && money.D === 0) {
		money.N = Math.floor(currency / 5);
		remainder = currency % 5;
	} else {
		money.N = Math.floor(remainder / 5);
		remainder = remainder % 5;
	}
	
	
	if (money.H === 0 && money.Q === 0 && money.D === 0 && money.N === 0) {
		money.P = currency;
	} else {
		money.P = remainder;
	}
	
	
	for (let item in money) {
		if (money[item] != 0) {
			result[item] = money[item];
		}
	}
	
	return result;
}
