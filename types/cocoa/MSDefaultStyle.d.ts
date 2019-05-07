/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDefaultStyle<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {}
  namespace MSDefaultStyle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDefaultArchive {
      saveStyleAndPatterns<R = void>(): R;
      loadStyleAndPatterns<R = void>(): R;
      setDefaultStyle<R = void, P0 = unknown>(_setDefaultStyle: P0): R;
      defaultStyle<R = unknown>(): R;
      resetCachedStyleForTesting<R = void>(): R;
    }
  }
}

declare const MSDefaultStyle: cocoa.MSDefaultStyle.CLASS;
