/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorBackgroundView<T0 = void, T1 = void, T2 = void> extends MSThemedColorView {}
  namespace MSInspectorBackgroundView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSThemedColorView {
      alloc<R = MSInspectorBackgroundView>(): R;
      new: <R = MSInspectorBackgroundView>() => R;
    }
  }
}

declare const MSInspectorBackgroundView: cocoa.MSInspectorBackgroundView.CLASS;
