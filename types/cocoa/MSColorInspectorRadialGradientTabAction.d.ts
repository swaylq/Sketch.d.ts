/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorRadialGradientTabAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {}
  namespace MSColorInspectorRadialGradientTabAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorRadialGradientTabAction>(): R;
      new: <R = MSColorInspectorRadialGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorRadialGradientTabAction: cocoa.MSColorInspectorRadialGradientTabAction.CLASS;
