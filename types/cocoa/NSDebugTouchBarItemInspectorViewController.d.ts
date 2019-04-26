/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarItemInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace NSDebugTouchBarItemInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSDebugTouchBarItemInspectorViewController>(): R;
      new: <R = NSDebugTouchBarItemInspectorViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarItemInspectorViewController: cocoa.NSDebugTouchBarItemInspectorViewController.CLASS;
