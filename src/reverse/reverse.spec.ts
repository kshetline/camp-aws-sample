import { expect } from 'chai';
import { reverse } from './reverse';

describe('reverse', () => {
  it('should reverse strings', async () => {
    const event = { queryStringParameters: { s: 'abc' } };
    expect((await reverse(event)).body).equals('"cba"');
    event.queryStringParameters.s = '1';
    expect((await reverse(event)).body).equals('"1"');
    event.queryStringParameters.s = 'Hello';
    expect((await reverse(event)).body).equals('"olleH"');
  });
});
