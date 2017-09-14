import { LogicaModule } from './logica.module';

describe('LogicaModule', () => {
  let logicaModule: LogicaModule;

  beforeEach(() => {
    logicaModule = new LogicaModule();
  });

  it('should create an instance', () => {
    expect(logicaModule).toBeTruthy();
  });
});
