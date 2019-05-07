/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSApplySharedLayerStyleAction<T0 = void, T1 = void, T2 = void> extends MSApplySharedStyleAction {
    applySharedLayerStyle<R = void, P0 = unknown>(_applySharedLayerStyle: P0): R;
  }
  namespace MSApplySharedLayerStyleAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSApplySharedStyleAction {
      alloc<R = MSApplySharedLayerStyleAction>(): R;
      new: <R = MSApplySharedLayerStyleAction>() => R;
    }
  }
}

declare const MSApplySharedLayerStyleAction: cocoa.MSApplySharedLayerStyleAction.CLASS;
