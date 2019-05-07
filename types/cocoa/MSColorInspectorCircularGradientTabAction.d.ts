/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSColorInspectorCircularGradientTabAction<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {}
  namespace MSColorInspectorCircularGradientTabAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSColorInspectorModePickerAction {
      alloc<R = MSColorInspectorCircularGradientTabAction>(): R;
      new: <R = MSColorInspectorCircularGradientTabAction>() => R;
    }
  }
}

declare const MSColorInspectorCircularGradientTabAction: cocoa.MSColorInspectorCircularGradientTabAction.CLASS;
