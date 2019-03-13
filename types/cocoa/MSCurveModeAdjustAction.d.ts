/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeAdjustAction<T = any> extends MSDocumentAction {
    curveMode<R = number>(): R;
    isActive<R = boolean>(): R;
  }
  namespace classes {
    export interface MSCurveModeAdjustAction<T = any> extends MSDocumentAction {
      alloc<R = MSCurveModeAdjustAction>(): R;
      new: <R = MSCurveModeAdjustAction>() => R;
    }
  }
}

declare const MSCurveModeAdjustAction: cocoa.classes.MSCurveModeAdjustAction;