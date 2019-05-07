/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSymbolMasterRendererCG<T0 = void, T1 = void, T2 = void> extends MSArtboardRendererCG {}
  namespace MSSymbolMasterRendererCG {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSArtboardRendererCG {
      alloc<R = MSSymbolMasterRendererCG>(): R;
      new: <R = MSSymbolMasterRendererCG>() => R;
    }
  }
}

declare const MSSymbolMasterRendererCG: cocoa.MSSymbolMasterRendererCG.CLASS;
