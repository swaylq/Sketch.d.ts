/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersLeftAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersLeft<R = void, P0 = unknown>(_alignLayersLeft: P0): R;
  }
  namespace MSAlignLayersLeftAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersLeftAction>(): R;
      new: <R = MSAlignLayersLeftAction>() => R;
    }
  }
}

declare const MSAlignLayersLeftAction: cocoa.MSAlignLayersLeftAction.CLASS;
