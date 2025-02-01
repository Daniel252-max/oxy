import { logEvent } from '../src/utils/logger';

test('logEvent should log messages with timestamps', () => {
    console.log = jest.fn();

    const eventType = 'INFO';
    const details = 'Test message';
    logEvent(eventType, details);

    expect(console.log).toHaveBeenCalledWith(
        expect.stringMatching(/\[\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}.\d{3}Z\] \[INFO\] Test message/)
    );
});
