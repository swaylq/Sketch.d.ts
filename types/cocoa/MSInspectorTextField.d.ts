/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorTextField<T0 = void, T1 = void, T2 = void> extends NSTextField {}
  namespace MSInspectorTextField {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTextField {
      alloc<R = MSInspectorTextField>(): R;
      new: <R = MSInspectorTextField>() => R;
    }
  }
}

declare const MSInspectorTextField: cocoa.MSInspectorTextField.CLASS;
