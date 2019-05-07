/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorSeparatorView<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {}
  namespace MSColorInspectorSeparatorView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSSectionBackgroundSeparatorView {
      alloc<R = MSColorInspectorSeparatorView>(): R;
      new: <R = MSColorInspectorSeparatorView>() => R;
    }
  }
}

declare const MSColorInspectorSeparatorView: cocoa.MSColorInspectorSeparatorView.CLASS;
