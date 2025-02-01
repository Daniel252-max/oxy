import { recommendProducts } from '../src/ai/recommendationEngine';

test('recommendProducts should return recommended products', () => {
    const userPreferences = { categories: ['Electronics', 'Books'] };
    const productCatalog = [
        { id: 1, name: 'Laptop', category: 'Electronics' },
        { id: 2, name: 'Notebook', category: 'Books' },
        { id: 3, name: 'Shoes', category: 'Fashion' }
    ];
    const result = recommendProducts(userPreferences, productCatalog);
    expect(result).toEqual([
        { id: 1, name: 'Laptop', category: 'Electronics' },
        { id: 2, name: 'Notebook', category: 'Books' }
    ]);
});
