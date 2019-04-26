/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSOffsetPathAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    validate<R = boolean>(): R;
    offsetPath<R = void, P0 = unknown>(_offsetPath: P0): R;
  }
  namespace MSOffsetPathAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSOffsetPathAction>(): R;
      new: <R = MSOffsetPathAction>() => R;
    }
  }
}

declare const MSOffsetPathAction: cocoa.MSOffsetPathAction.CLASS;
