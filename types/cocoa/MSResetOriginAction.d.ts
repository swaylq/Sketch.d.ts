/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSResetOriginAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    resetRulerOrigin<R = void, P0 = unknown>(_resetRulerOrigin: P0): R;
  }
  namespace MSResetOriginAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSResetOriginAction>(): R;
      new: <R = MSResetOriginAction>() => R;
    }
  }
}

declare const MSResetOriginAction: cocoa.MSResetOriginAction.CLASS;
