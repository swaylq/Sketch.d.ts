/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorColorTabAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {}
  namespace MSColorInspectorColorTabAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorColorTabAction>(): R;
      new: <R = MSColorInspectorColorTabAction>() => R;
    }
  }
}

declare const MSColorInspectorColorTabAction: cocoa.MSColorInspectorColorTabAction.CLASS;
