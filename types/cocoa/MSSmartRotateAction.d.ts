/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSmartRotateAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    tooltip<R = unknown>(): R;
    label<R = unknown>(): R;
    isSelectable<R = boolean>(): R;
    validate<R = boolean>(): R;
    smartRotate<R = void, P0 = unknown>(_smartRotate: P0): R;
  }
  namespace MSSmartRotateAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSSmartRotateAction>(): R;
      new: <R = MSSmartRotateAction>() => R;
    }
  }
}

declare const MSSmartRotateAction: cocoa.MSSmartRotateAction.CLASS;
