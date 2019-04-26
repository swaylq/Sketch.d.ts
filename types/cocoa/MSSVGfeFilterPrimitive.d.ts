/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSVGfeFilterPrimitive<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
    result<R = NSString>(): R;
    setResult<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSSVGfeFilterPrimitive {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSXMLElementWrapper {
      alloc<R = MSSVGfeFilterPrimitive>(): R;
      new: <R = MSSVGfeFilterPrimitive>() => R;
      filter<R = unknown>(): R;
    }
  }
}

declare const MSSVGfeFilterPrimitive: cocoa.MSSVGfeFilterPrimitive.CLASS;
