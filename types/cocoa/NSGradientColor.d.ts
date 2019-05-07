/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGradientColor<T0 = void, T1 = void, T2 = void> extends NSColor {
    CGColor<R = CGColor>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    type<R = number>(): R;
    _updatePattern<R = void>(): R;
    _updatePatternImage<R = void>(): R;
    dealloc<R = void>(): R;
    initWithGradient<R = unknown, P0 = unknown>(_initWithGradient: P0): R;
  }
  namespace NSGradientColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = NSGradientColor>(): R;
      new: <R = NSGradientColor>() => R;
    }
  }
}

declare const NSGradientColor: cocoa.NSGradientColor.CLASS;
