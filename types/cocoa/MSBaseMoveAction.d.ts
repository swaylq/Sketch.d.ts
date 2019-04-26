/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseMoveAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    ignoreNextKeyDownEventUntilModifiersChange<R = void>(): R;
    optionKeyPressed<R = boolean>(): R;
    validate<R = boolean>(): R;
  }
  namespace MSBaseMoveAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseMoveAction>(): R;
      new: <R = MSBaseMoveAction>() => R;
    }
  }
}

declare const MSBaseMoveAction: cocoa.MSBaseMoveAction.CLASS;
