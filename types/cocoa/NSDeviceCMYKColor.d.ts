/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDeviceCMYKColor<T0 = void, T1 = void, T2 = void> extends NSColor {
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    colorSpace<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = CGColor>(): R;
    _createCGColorWithAlpha<R = CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    numberOfComponents<R = number>(): R;
    alphaComponent<R = number>(): R;
    blackComponent<R = number>(): R;
    yellowComponent<R = number>(): R;
    magentaComponent<R = number>(): R;
    cyanComponent<R = number>(): R;
    dealloc<R = void>(): R;
    initWithCyan_magenta_yellow_black_alpha<R = unknown, P0 = number, P1 = number, P2 = number, P3 = number, P4 = number>(_initWithCyan: P0, _magenta: P1, _yellow: P2, _black: P3, _alpha: P4): R;
  }
  namespace NSDeviceCMYKColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = NSDeviceCMYKColor>(): R;
      new: <R = NSDeviceCMYKColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = _NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSDeviceCMYKColor: cocoa.NSDeviceCMYKColor.CLASS;
