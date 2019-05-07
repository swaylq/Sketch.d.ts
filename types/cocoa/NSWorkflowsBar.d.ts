/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSWorkflowsBar<T0 = void, T1 = void, T2 = void> extends NSObject {
    _presentationModeConfigurationDidChange<R = void>(): R;
    _placementVisibilityDidChange<R = void>(): R;
    dealloc<R = void>(): R;
    enabled<R = boolean>(): R;
    visible<R = boolean>(): R;
    touchBar<R = NSTouchBar>(): R;
    setTouchBar<R = void, P0 = NSTouchBar>(_v: P0): R;
  }
  namespace NSWorkflowsBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSWorkflowsBar>(): R;
      new: <R = NSWorkflowsBar>() => R;
      automaticallyNotifiesObserversOfEnabled<R = boolean>(): R;
      automaticallyNotifiesObserversOfVisible<R = boolean>(): R;
      automaticallyNotifiesObserversOfTouchBar<R = boolean>(): R;
      accessInstanceVariablesDirectly<R = boolean>(): R;
      sharedWorkflowsBar<R = unknown>(): R;
    }
  }
}

declare const NSWorkflowsBar: cocoa.NSWorkflowsBar.CLASS;
