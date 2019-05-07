/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSCurveModeDisconnectedAction<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
    label<R = unknown>(): R;
  }
  namespace MSCurveModeDisconnectedAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSCurveModeAdjustAction {
      alloc<R = MSCurveModeDisconnectedAction>(): R;
      new: <R = MSCurveModeDisconnectedAction>() => R;
    }
  }
}

declare const MSCurveModeDisconnectedAction: cocoa.MSCurveModeDisconnectedAction.CLASS;
