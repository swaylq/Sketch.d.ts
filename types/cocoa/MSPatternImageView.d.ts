/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPatternImageView<T0 = void, T1 = void, T2 = void> extends MSImageView {
    setupAfterInit<R = void>(): R;
  }
  namespace MSPatternImageView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSImageView {
      alloc<R = MSPatternImageView>(): R;
      new: <R = MSPatternImageView>() => R;
    }
  }
}

declare const MSPatternImageView: cocoa.MSPatternImageView.CLASS;
