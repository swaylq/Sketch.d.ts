/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGPatternWrapper<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
    height<R = NSString>(): R;
    setHeight<R = void, P0 = NSString>(_v: P0): R;
    href<R = NSString>(): R;
    setHref<R = void, P0 = NSString>(_v: P0): R;
    patternContentUnits<R = NSString>(): R;
    setPatternContentUnits<R = void, P0 = NSString>(_v: P0): R;
    patternTransform<R = NSString>(): R;
    setPatternTransform<R = void, P0 = NSString>(_v: P0): R;
    patternUnits<R = NSString>(): R;
    setPatternUnits<R = void, P0 = NSString>(_v: P0): R;
    preserveAspectRatio<R = NSString>(): R;
    setPreserveAspectRatio<R = void, P0 = NSString>(_v: P0): R;
    width<R = NSString>(): R;
    setWidth<R = void, P0 = NSString>(_v: P0): R;
    x<R = NSString>(): R;
    setX<R = void, P0 = NSString>(_v: P0): R;
    y<R = NSString>(): R;
    setY<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGPatternWrapper {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
      alloc<R = MSSVGPatternWrapper>(): R;
      new: <R = MSSVGPatternWrapper>() => R;
    }
  }
}

declare const MSSVGPatternWrapper: cocoa.MSSVGPatternWrapper.CLASS;
