/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAddAsLibraryAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    label<R = unknown>(): R;
    addAsLibrary<R = void>(): R;
    document_didSave_contextInfo<R = void, P0 = unknown, P1 = boolean, P2 = void>(_document: P0, _didSave: P1, _contextInfo: P2): R;
    saveAndAddLibrary<R = void>(): R;
    askToSaveModificationsAndAddLibrary<R = void>(): R;
    addAsLibraryAction<R = void, P0 = unknown>(_addAsLibraryAction: P0): R;
    validate<R = boolean>(): R;
  }
  namespace MSAddAsLibraryAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSAddAsLibraryAction>(): R;
      new: <R = MSAddAsLibraryAction>() => R;
    }
  }
}

declare const MSAddAsLibraryAction: cocoa.MSAddAsLibraryAction.CLASS;
