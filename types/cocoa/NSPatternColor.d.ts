/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPatternColor<T0 = void, T1 = void, T2 = void> extends NSColor {
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    patternImage<R = unknown>(): R;
    description<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = CGColor>(): R;
    _createCGColorWithAlpha<R = CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    dealloc<R = void>(): R;
    _initWithCGPatternColor<R = unknown, P0 = CGColor>(__initWithCGPatternColor: P0): R;
    initWithImage<R = unknown, P0 = unknown>(_initWithImage: P0): R;
  }
  namespace NSPatternColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = NSPatternColor>(): R;
      new: <R = NSPatternColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = _NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSPatternColor: cocoa.NSPatternColor.CLASS;
