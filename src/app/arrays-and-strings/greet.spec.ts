import { greet } from './greet'

describe('greet', () => {

  it('should include the name in the message', () => {
    const result = greet('Sajed');
    expect(result).toContain('Sajed');
  });

});