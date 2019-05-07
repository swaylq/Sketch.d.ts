/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorModeFillTouchBarGroupAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModeBorderTouchBarGroupAction {}
  namespace MSColorInspectorModeFillTouchBarGroupAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModeBorderTouchBarGroupAction {
      alloc<R = MSColorInspectorModeFillTouchBarGroupAction>(): R;
      new: <R = MSColorInspectorModeFillTouchBarGroupAction>() => R;
    }
  }
}

declare const MSColorInspectorModeFillTouchBarGroupAction: cocoa.MSColorInspectorModeFillTouchBarGroupAction.CLASS;
