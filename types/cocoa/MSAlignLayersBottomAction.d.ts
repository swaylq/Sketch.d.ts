/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersBottomAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersBottom<R = void, P0 = unknown>(_alignLayersBottom: P0): R;
  }
  namespace MSAlignLayersBottomAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersBottomAction>(): R;
      new: <R = MSAlignLayersBottomAction>() => R;
    }
  }
}

declare const MSAlignLayersBottomAction: cocoa.MSAlignLayersBottomAction.CLASS;
