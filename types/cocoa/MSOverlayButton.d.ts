/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOverlayButton<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {}
  namespace MSOverlayButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
      alloc<R = MSOverlayButton>(): R;
      new: <R = MSOverlayButton>() => R;
    }
  }
}

declare const MSOverlayButton: cocoa.MSOverlayButton.CLASS;
