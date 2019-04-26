/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseBooleanAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    historyMomentTitle<R = unknown>(): R;
    booleanOperation<R = number>(): R;
    hasShapePartsSelected<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSBaseBooleanAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseBooleanAction>(): R;
      new: <R = MSBaseBooleanAction>() => R;
    }
  }
}

declare const MSBaseBooleanAction: cocoa.MSBaseBooleanAction.CLASS;
