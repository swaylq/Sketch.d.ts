/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModeBorderTouchBarGroupAction<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
    label<R = unknown>(): R;
  }
  namespace MSColorInspectorModeBorderTouchBarGroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSActionGroup {
      alloc<R = MSColorInspectorModeBorderTouchBarGroupAction>(): R;
      new: <R = MSColorInspectorModeBorderTouchBarGroupAction>() => R;
    }
  }
}

declare const MSColorInspectorModeBorderTouchBarGroupAction: cocoa.MSColorInspectorModeBorderTouchBarGroupAction.CLASS;
