function formatMoneyOutput(value: string | number) {
  const numberFormat = new Intl.NumberFormat("en-US", {
    style: "decimal",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });
  return numberFormat.format(typeof value === "string" ? Number(value) : value);
}

export default formatMoneyOutput;
