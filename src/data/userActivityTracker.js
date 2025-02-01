const userActivityLog = [];

export function logProductView(userId, productId) {
    const timestamp = new Date().toISOString();
    userActivityLog.push({ userId, event: 'view', productId, timestamp });
}

export function logProductPurchase(userId, productId) {
    const timestamp = new Date().toISOString();
    userActivityLog.push({ userId, event: 'purchase', productId, timestamp });
}

export function logSearch(userId, query) {
    const timestamp = new Date().toISOString();
    userActivityLog.push({ userId, event: 'search', query, timestamp });
}

export function getUserHistory(userId) {
    if (!userId) {
        console.error('User ID is required to fetch history.');
        return [];
    }
    return userActivityLog.filter(entry => entry.userId === userId);
}
