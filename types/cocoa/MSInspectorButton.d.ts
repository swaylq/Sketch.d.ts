/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorButton<T0 = void, T1 = void, T2 = void> extends NSButton {}
  namespace MSInspectorButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton {
      alloc<R = MSInspectorButton>(): R;
      new: <R = MSInspectorButton>() => R;
    }
  }
}

declare const MSInspectorButton: cocoa.MSInspectorButton.CLASS;
