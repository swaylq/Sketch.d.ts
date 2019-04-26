/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFlattenAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    canFlattenSelection<R = boolean>(): R;
    flatten<R = void, P0 = unknown>(_flatten: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSFlattenAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSFlattenAction>(): R;
      new: <R = MSFlattenAction>() => R;
    }
  }
}

declare const MSFlattenAction: cocoa.MSFlattenAction.CLASS;
