/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSShapeRendererCG<T0 = void, T1 = void, T2 = void> extends MSGroupRendererCG {}
  namespace MSShapeRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGroupRendererCG {
      alloc<R = MSShapeRendererCG>(): R;
      new: <R = MSShapeRendererCG>() => R;
    }
  }
}

declare const MSShapeRendererCG: cocoa.MSShapeRendererCG.CLASS;
