import { DoublePipe } from './double.pipe';

describe('DoublePipe', () => {
  it('create an instance', () => {
    const pipe = new DoublePipe();
    expect(pipe).toBeTruthy();
  });
  
  it('should return 4 for input 2',() => {
    const pipe = new DoublePipe();
    expect(pipe.transform(2)).toEqual(4);
  });
});
