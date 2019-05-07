/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInspectorOnStatePushButton<T0 = void, T1 = void, T2 = void> extends MSInspectorPushButton {
    buttonOnColorName<R = unknown>(): R;
  }
  namespace MSInspectorOnStatePushButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSInspectorPushButton {
      alloc<R = MSInspectorOnStatePushButton>(): R;
      new: <R = MSInspectorOnStatePushButton>() => R;
    }
  }
}

declare const MSInspectorOnStatePushButton: cocoa.MSInspectorOnStatePushButton.CLASS;
