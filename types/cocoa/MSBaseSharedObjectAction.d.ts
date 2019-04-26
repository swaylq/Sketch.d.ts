/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseSharedObjectAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    performSharedObjectAction<R = void>(): R;
    validationStatus<R = number>(): R;
    hasDynamicTitle<R = boolean>(): R;
    needsRenameAfterAction<R = boolean>(): R;
    updater<R = MSShareableObjectUpdater>(): R;
  }
  namespace MSBaseSharedObjectAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSBaseSharedObjectAction>(): R;
      new: <R = MSBaseSharedObjectAction>() => R;
    }
  }
}

declare const MSBaseSharedObjectAction: cocoa.MSBaseSharedObjectAction.CLASS;
