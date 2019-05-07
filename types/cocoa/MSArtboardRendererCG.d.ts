/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardRendererCG<T0 = void, T1 = void, T2 = void> extends MSGroupRendererCG {}
  namespace MSArtboardRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSGroupRendererCG {
      alloc<R = MSArtboardRendererCG>(): R;
      new: <R = MSArtboardRendererCG>() => R;
    }
  }
}

declare const MSArtboardRendererCG: cocoa.MSArtboardRendererCG.CLASS;
