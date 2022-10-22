import { TestBed } from '@angular/core/testing';

import { MorseCodeTranslatorService } from './morse-code-translator.service';

describe('MorseCodeTranslatorService', () => {
  let service: MorseCodeTranslatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MorseCodeTranslatorService);
  });

  it('should encode ""', () => {
    expect(service.encode('')).toBe('');
  });

  it('should encode "HELLO"', () => {
    expect(service.encode('HELLO')).toBe('.... . .-.. .-.. ---');
  });

  it('should encode "HELLO WORLD"', () => {
    expect(service.encode('HELLO WORLD')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  });

  it('should encode "  HELLO      WORLD "', () => {
    expect(service.encode('  HELLO      WORLD ')).toBe('.... . .-.. .-.. --- / .-- --- .-. .-.. -..');
  });

  it('should not encode "Hello World"', () => {
    expect(() => service.encode('Hello World')).toThrow();
  });

  it('should decode to ""', () => {
    expect(service.decode('')).toBe('');
  });

  it('should decode to "HELLO"', () => {
    expect(service.decode('.... . .-.. .-.. ---')).toBe('HELLO');
  });

  it('should decode to "HELLO WORLD"', () => {
    expect(service.decode('.... . .-.. .-.. --- / .-- --- .-. .-.. -..')).toBe('HELLO WORLD');
  });
});
