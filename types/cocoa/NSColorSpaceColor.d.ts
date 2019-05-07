/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSColorSpaceColor<T0 = void, T1 = void, T2 = void> extends NSColor {
    whiteComponent<R = number>(): R;
    blackComponent<R = number>(): R;
    yellowComponent<R = number>(): R;
    magentaComponent<R = number>(): R;
    cyanComponent<R = number>(): R;
    brightnessComponent<R = number>(): R;
    saturationComponent<R = number>(): R;
    hueComponent<R = number>(): R;
    blueComponent<R = number>(): R;
    greenComponent<R = number>(): R;
    redComponent<R = number>(): R;
    classForCoder<R = unknown>(): R;
    hash<R = number>(): R;
    description<R = unknown>(): R;
    type<R = number>(): R;
    CGColor<R = CGColor>(): R;
    _createCGColorWithAlpha<R = CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    alphaComponent<R = number>(): R;
    numberOfComponents<R = number>(): R;
    colorSpace<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithColorSpace_components_count<R = unknown, P0 = unknown, P1 = number, P2 = number>(_initWithColorSpace: P0, _components: P1, _count: P2): R;
    _release<R = void>(): R;
  }
  namespace NSColorSpaceColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = NSColorSpaceColor>(): R;
      new: <R = NSColorSpaceColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = _NSZone>(_newWithCoder: P0, _zone: P1): R;
      newWithColorSpace_components_count<R = unknown, P0 = unknown, P1 = number, P2 = number>(_newWithColorSpace: P0, _components: P1, _count: P2): R;
      load<R = void>(): R;
    }
  }
}

declare const NSColorSpaceColor: cocoa.NSColorSpaceColor.CLASS;
