/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRenderingDriverCG<T0 = void, T1 = void, T2 = void> extends MSRenderingDriver {
    addSimpleRenderersToMap<R = void, P0 = unknown>(_addSimpleRenderersToMap: P0): R;
  }
  namespace MSRenderingDriverCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSRenderingDriver {
      alloc<R = MSRenderingDriverCG>(): R;
      new: <R = MSRenderingDriverCG>() => R;
    }
  }
}

declare const MSRenderingDriverCG: cocoa.MSRenderingDriverCG.CLASS;
