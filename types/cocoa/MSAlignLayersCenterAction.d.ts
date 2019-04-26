/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAlignLayersCenterAction<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
    historyMomentTitle<R = unknown>(): R;
    alignLayersCenter<R = void, P0 = unknown>(_alignLayersCenter: P0): R;
  }
  namespace MSAlignLayersCenterAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSBaseAlignLayersAction {
      alloc<R = MSAlignLayersCenterAction>(): R;
      new: <R = MSAlignLayersCenterAction>() => R;
    }
  }
}

declare const MSAlignLayersCenterAction: cocoa.MSAlignLayersCenterAction.CLASS;
