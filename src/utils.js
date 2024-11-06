export const formatCurrency = (amount, locale = "en-US", currency = "NGN") => {
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currencyDisplay: "narrowSymbol",
    currency: currency,
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(amount);
};
