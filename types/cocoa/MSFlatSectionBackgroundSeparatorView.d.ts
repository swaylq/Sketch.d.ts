/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlatSectionBackgroundSeparatorView<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {}
  namespace MSFlatSectionBackgroundSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {
      alloc<R = MSFlatSectionBackgroundSeparatorView>(): R;
      new: <R = MSFlatSectionBackgroundSeparatorView>() => R;
    }
  }
}

declare const MSFlatSectionBackgroundSeparatorView: cocoa.MSFlatSectionBackgroundSeparatorView.CLASS;
