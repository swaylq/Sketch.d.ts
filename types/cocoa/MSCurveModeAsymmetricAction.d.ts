/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeAsymmetricAction<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace MSCurveModeAsymmetricAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
      alloc<R = MSCurveModeAsymmetricAction>(): R;
      new: <R = MSCurveModeAsymmetricAction>() => R;
    }
  }
}

declare const MSCurveModeAsymmetricAction: cocoa.MSCurveModeAsymmetricAction.CLASS;
