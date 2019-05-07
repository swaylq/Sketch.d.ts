/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRemoveTextTransformAction<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
    label<R = unknown>(): R;
    removeTextTransform<R = void, P0 = unknown>(_removeTextTransform: P0): R;
  }
  namespace MSRemoveTextTransformAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSTextTransformAction {
      alloc<R = MSRemoveTextTransformAction>(): R;
      new: <R = MSRemoveTextTransformAction>() => R;
    }
  }
}

declare const MSRemoveTextTransformAction: cocoa.MSRemoveTextTransformAction.CLASS;
