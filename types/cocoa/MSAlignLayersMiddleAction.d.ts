/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersMiddleAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersMiddle<R = void, P0 = unknown>(_alignLayersMiddle: P0): R;
  }
  namespace MSAlignLayersMiddleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersMiddleAction>(): R;
      new: <R = MSAlignLayersMiddleAction>() => R;
    }
  }
}

declare const MSAlignLayersMiddleAction: cocoa.MSAlignLayersMiddleAction.CLASS;
