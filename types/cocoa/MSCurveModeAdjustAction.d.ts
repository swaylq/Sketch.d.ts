/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeAdjustAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    curveMode<R = number>(): R;
    isActive<R = boolean>(): R;
  }
  namespace MSCurveModeAdjustAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSCurveModeAdjustAction>(): R;
      new: <R = MSCurveModeAdjustAction>() => R;
    }
  }
}

declare const MSCurveModeAdjustAction: cocoa.MSCurveModeAdjustAction.CLASS;
