/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSStyleBorderOptions<T0 = void, T1 = void, T2 = void> extends _MSStyleBorderOptions {
    supportsAdvancedBorderSettings<R = boolean>(): R;
    hasDashPattern<R = boolean>(): R;
  }
  namespace MSStyleBorderOptions {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSStyleBorderOptions {
      alloc<R = MSStyleBorderOptions>(): R;
      new: <R = MSStyleBorderOptions>() => R;
    }
  }
}

declare const MSStyleBorderOptions: cocoa.MSStyleBorderOptions.CLASS;
