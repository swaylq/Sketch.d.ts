/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplyOrientationAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    isActive<R = boolean>(): R;
    layerHasOurOrientation<R = boolean, P0 = unknown>(_layerHasOurOrientation: P0): R;
    comparisonResultToTest<R = number>(): R;
  }
  namespace MSApplyOrientationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSApplyOrientationAction>(): R;
      new: <R = MSApplyOrientationAction>() => R;
    }
  }
}

declare const MSApplyOrientationAction: cocoa.MSApplyOrientationAction.CLASS;
