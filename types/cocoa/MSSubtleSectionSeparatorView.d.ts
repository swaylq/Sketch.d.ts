/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSubtleSectionSeparatorView<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {
    isOpaque<R = boolean>(): R;
  }
  namespace MSSubtleSectionSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {
      alloc<R = MSSubtleSectionSeparatorView>(): R;
      new: <R = MSSubtleSectionSeparatorView>() => R;
    }
  }
}

declare const MSSubtleSectionSeparatorView: cocoa.MSSubtleSectionSeparatorView.CLASS;
