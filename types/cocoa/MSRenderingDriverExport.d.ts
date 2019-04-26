/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverExport<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {}
  namespace MSRenderingDriverExport {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingDriverCG {
      alloc<R = MSRenderingDriverExport>(): R;
      new: <R = MSRenderingDriverExport>() => R;
    }
  }
}

declare const MSRenderingDriverExport: cocoa.MSRenderingDriverExport.CLASS;
