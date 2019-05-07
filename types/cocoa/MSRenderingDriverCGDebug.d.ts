/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCGDebug<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {}
  namespace MSRenderingDriverCGDebug {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverCGDebug>(): R;
      new: <R = MSRenderingDriverCGDebug>() => R;
    }
  }
}

declare const MSRenderingDriverCGDebug: cocoa.MSRenderingDriverCGDebug.CLASS;
