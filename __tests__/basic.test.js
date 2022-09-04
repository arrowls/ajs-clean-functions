import checkHealth from '../src';

test.each([
    [{ name: 'test', health: 51 }, 'healthy'],
    [{ name: 'test', health: 50 }, 'wounded'],
    [{ name: 'test', health: 0 }, 'critical'],
    [{ name: 'test', health: 15 }, 'wounded'],
    [{ name: 'test', health: 16 }, 'wounded'],
])('should work correctly with valid values', (dataObject, expected) => {
    const result = checkHealth(dataObject);
    expect(result).toBe(expected);
});

test.each([
    [{ name: 'test', }, null],
    [{ name: 'test', health: -1 }, null],
    [{ name: 'test', health: 12345 }, null],
    [{ name: 'test', health: 'some invalid value' }, null],
])('should work correctly with invalid values', (dataObject, expected) => {
    const result = checkHealth(dataObject);
    expect(result).toBe(expected);
});