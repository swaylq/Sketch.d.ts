/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGUseWrapper<T = any> extends MSXMLElementWrapper {
    externalResourcesRequired<R = NSString>(): R;
    setExternalResourcesRequired<R = void, P0 = NSString>(_v: P0): R;
    height<R = NSString>(): R;
    setHeight<R = void, P0 = NSString>(_v: P0): R;
    href<R = NSString>(): R;
    setHref<R = void, P0 = NSString>(_v: P0): R;
    transform<R = NSString>(): R;
    setTransform<R = void, P0 = NSString>(_v: P0): R;
    width<R = NSString>(): R;
    setWidth<R = void, P0 = NSString>(_v: P0): R;
    x<R = NSString>(): R;
    setX<R = void, P0 = NSString>(_v: P0): R;
    y<R = NSString>(): R;
    setY<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace classes {
    export interface MSSVGUseWrapper<T = any> extends MSXMLElementWrapper {
      alloc<R = MSSVGUseWrapper>(): R;
      new: <R = MSSVGUseWrapper>() => R;
    }
  }
}

declare const MSSVGUseWrapper: cocoa.classes.MSSVGUseWrapper;