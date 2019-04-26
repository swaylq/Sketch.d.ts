/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSRevealInLayerListAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    revealInLayerList<R = void, P0 = unknown>(_revealInLayerList: P0): R;
  }
  namespace MSRevealInLayerListAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSRevealInLayerListAction>(): R;
      new: <R = MSRevealInLayerListAction>() => R;
    }
  }
}

declare const MSRevealInLayerListAction: cocoa.MSRevealInLayerListAction.CLASS;
