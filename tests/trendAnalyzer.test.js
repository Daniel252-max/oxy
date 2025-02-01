import { analyzeTrends } from '../src/ai/trendAnalyzer';

const mockData = [
    { id: 1, name: 'Product A', isTrending: true },
    { id: 2, name: 'Product B', isTrending: false },
    { id: 3, name: 'Product C', isTrending: true }
];

test('analyzeTrends should filter trending products', () => {
    const result = analyzeTrends(mockData);
    expect(result).toEqual([
        { id: 1, name: 'Product A', isTrending: true },
        { id: 3, name: 'Product C', isTrending: true }
    ]);
});
