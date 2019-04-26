/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorControlView<T0 = void, T1 = void, T2 = void> extends NSView {}
  namespace MSInspectorControlView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = MSInspectorControlView>(): R;
      new: <R = MSInspectorControlView>() => R;
    }
  }
}

declare const MSInspectorControlView: cocoa.MSInspectorControlView.CLASS;
