const formatAmount = (amount) => {
    if (amount === null || amount === undefined) {
        return "N/A";
    }

    const formattedAmount = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
        minimumFractionDigits: 0,
        maximumFractionDigits: 0,
    }).format(amount);

    return formattedAmount;
};

export default formatAmount;