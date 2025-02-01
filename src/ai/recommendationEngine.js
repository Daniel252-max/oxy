export const recommendProducts = (userPreferences, productCatalog) => {
    if (!userPreferences || !productCatalog) {
        console.error('User preferences or product catalog is missing');
        return [];
    }
    return productCatalog.filter(product => 
        userPreferences.categories.includes(product.category)
    );
};
