/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorPushButton<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
    cxx_destruct<R = void>(): R;
    buttonOnColorName<R = NSString>(): R;
    setButtonOnColorName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace MSInspectorPushButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorButton {
      alloc<R = MSInspectorPushButton>(): R;
      new: <R = MSInspectorPushButton>() => R;
    }
  }
}

declare const MSInspectorPushButton: cocoa.MSInspectorPushButton.CLASS;
