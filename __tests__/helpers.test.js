const {format_date, format_plural, format_url} = require('../utils/helpers');

test('format_date() returns a date string', () => {
    const date = new Date('2022-6-29 16:09:03');

    expect(format_date(date)).toBe('6/29/2022');
});

test('format_plural() correctly pluralizes words', () => {
    const word = 'Tiger';
    const amount = 2;

    const word1 = 'Lion';
    const amount1 = 1;

    expect(format_plural(word, amount)).toBe('Tigers')
    expect(format_plural(word1, amount1)).toBe('Lion');
});

test('format_url() returns a simplified url string', () => {
    const url1 = format_url('http://test.com/page/1');
    const url2 = format_url('https://www.coolstuff.com/abcdefg/');
    const url3 = format_url('https://www.google.com?q=hello');

    expect(url1).toBe('test.com');
    expect(url2).toBe('coolstuff.com');
    expect(url3).toBe('google.com');
});