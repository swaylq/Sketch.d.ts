/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorControlView<T = any> extends NSView {}
  namespace classes {
    export interface MSInspectorControlView<T = any> extends NSView {
      alloc<R = MSInspectorControlView>(): R;
      new: <R = MSInspectorControlView>() => R;
    }
  }
}

declare const MSInspectorControlView: cocoa.classes.MSInspectorControlView;