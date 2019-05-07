/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersRightAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersRight<R = void, P0 = unknown>(_alignLayersRight: P0): R;
  }
  namespace MSAlignLayersRightAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersRightAction>(): R;
      new: <R = MSAlignLayersRightAction>() => R;
    }
  }
}

declare const MSAlignLayersRightAction: cocoa.MSAlignLayersRightAction.CLASS;
