/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSConstraintResetAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    resetConstraintAction<R = void, P0 = unknown>(_resetConstraintAction: P0): R;
  }
  namespace MSConstraintResetAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSConstraintResetAction>(): R;
      new: <R = MSConstraintResetAction>() => R;
    }
  }
}

declare const MSConstraintResetAction: cocoa.MSConstraintResetAction.CLASS;
