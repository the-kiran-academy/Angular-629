import { PasswordMaskPipe } from './password-mask.pipe';

describe('PasswordMaskPipe', () => {
  it('create an instance', () => {
    const pipe = new PasswordMaskPipe();
    expect(pipe).toBeTruthy();
  });
});
