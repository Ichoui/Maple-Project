import { JumpModule } from './jump.module';

describe('JumpModule', () => {
  let jumpModule: JumpModule;

  beforeEach(() => {
    jumpModule = new JumpModule();
  });

  it('should create an instance', () => {
    expect(jumpModule).toBeTruthy();
  });
});
