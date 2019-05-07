/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMultipleInnerShadowInspectorViewController<T0 = void, T1 = void, T2 = void> extends MSMultipleShadowInspectorViewController {
    nibName<R = unknown>(): R;
  }
  namespace MSMultipleInnerShadowInspectorViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSMultipleShadowInspectorViewController {
      alloc<R = MSMultipleInnerShadowInspectorViewController>(): R;
      new: <R = MSMultipleInnerShadowInspectorViewController>() => R;
    }
  }
}

declare const MSMultipleInnerShadowInspectorViewController: cocoa.MSMultipleInnerShadowInspectorViewController.CLASS;
