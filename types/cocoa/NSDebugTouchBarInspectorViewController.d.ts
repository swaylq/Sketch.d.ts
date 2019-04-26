/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDebugTouchBarInspectorViewController<T0 = void, T1 = void, T2 = void> extends NSViewController {
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
  }
  namespace NSDebugTouchBarInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController {
      alloc<R = NSDebugTouchBarInspectorViewController>(): R;
      new: <R = NSDebugTouchBarInspectorViewController>() => R;
    }
  }
}

declare const NSDebugTouchBarInspectorViewController: cocoa.NSDebugTouchBarInspectorViewController.CLASS;
