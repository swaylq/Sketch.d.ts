/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSReversePathAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    reversePath<R = void, P0 = unknown>(_reversePath: P0): R;
  }
  namespace MSReversePathAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSReversePathAction>(): R;
      new: <R = MSReversePathAction>() => R;
    }
  }
}

declare const MSReversePathAction: cocoa.MSReversePathAction.CLASS;
