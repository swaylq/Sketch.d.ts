/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersTopAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersTop<R = void, P0 = unknown>(_alignLayersTop: P0): R;
  }
  namespace MSAlignLayersTopAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersTopAction>(): R;
      new: <R = MSAlignLayersTopAction>() => R;
    }
  }
}

declare const MSAlignLayersTopAction: cocoa.MSAlignLayersTopAction.CLASS;
