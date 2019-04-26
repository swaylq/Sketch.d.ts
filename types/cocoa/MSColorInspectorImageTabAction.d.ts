/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorImageTabAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {}
  namespace MSColorInspectorImageTabAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorImageTabAction>(): R;
      new: <R = MSColorInspectorImageTabAction>() => R;
    }
  }
}

declare const MSColorInspectorImageTabAction: cocoa.MSColorInspectorImageTabAction.CLASS;
