export const analyzeTrends = (purchaseData) => {
    return purchaseData.filter(product => product.isTrending);
};
