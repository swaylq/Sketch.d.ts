/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCatalogColor<T0 = void, T1 = void, T2 = void> extends NSColor {
    dealloc<R = void>(): R;
    hash<R = number>(): R;
    classForCoder<R = unknown>(): R;
    description<R = unknown>(): R;
    localizedColorNameComponent<R = unknown>(): R;
    localizedCatalogNameComponent<R = unknown>(): R;
    colorNameComponent<R = unknown>(): R;
    catalogNameComponent<R = unknown>(): R;
    type<R = number>(): R;
    alphaComponent<R = number>(): R;
    drawSwatchOfColor_inRect<R = void, P0 = unknown, P1 = CGRect>(_drawSwatchOfColor: P0, _inRect: P1): R;
    _createCGColorWithAlpha<R = CGColor, P0 = number>(__createCGColorWithAlpha: P0): R;
    CGColor<R = CGColor>(): R;
    initWithCatalogName_colorName_genericColor<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown>(_initWithCatalogName: P0, _colorName: P1, _genericColor: P2): R;
  }
  namespace NSCatalogColor {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSColor {
      alloc<R = NSCatalogColor>(): R;
      new: <R = NSCatalogColor>() => R;
      newWithCoder_zone<R = unknown, P0 = unknown, P1 = _NSZone>(_newWithCoder: P0, _zone: P1): R;
    }
  }
}

declare const NSCatalogColor: cocoa.NSCatalogColor.CLASS;
