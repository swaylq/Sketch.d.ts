/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorLinearGradientTabAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {}
  namespace MSColorInspectorLinearGradientTabAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorLinearGradientTabAction>(): R;
      new: <R = MSColorInspectorLinearGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorLinearGradientTabAction: cocoa.MSColorInspectorLinearGradientTabAction.CLASS;
