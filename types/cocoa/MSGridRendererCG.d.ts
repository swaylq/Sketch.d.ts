/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSGridRendererCG<T0 = void, T1 = void, T2 = void> extends NSObject, MSGridRendererProtocol {
    dealloc<R = void>(): R;
    initWithLightColor_darkColor<R = unknown, P0 = CGColor, P1 = CGColor>(_initWithLightColor: P0, _darkColor: P1): R;
    darkColor<R = CGColor>(): R;
    lightColor<R = CGColor>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSGridRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSGridRendererProtocol {
      alloc<R = MSGridRendererCG>(): R;
      new: <R = MSGridRendererCG>() => R;
    }
  }
}

declare const MSGridRendererCG: cocoa.MSGridRendererCG.CLASS;
