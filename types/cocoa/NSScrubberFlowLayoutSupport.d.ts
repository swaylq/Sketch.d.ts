/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSScrubberFlowLayoutSupport<T0 = void, T1 = void, T2 = void> extends NSObject {
    dynamicSizes<R = boolean>(): R;
    setDynamicSizes<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSScrubberFlowLayoutSupport {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSScrubberFlowLayoutSupport>(): R;
      new: <R = NSScrubberFlowLayoutSupport>() => R;
    }
  }
}

declare const NSScrubberFlowLayoutSupport: cocoa.NSScrubberFlowLayoutSupport.CLASS;
