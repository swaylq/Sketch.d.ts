/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSInsertMenuAction<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
    addInsertMenuItemsFor_usingMenuBuilder_forMenu<R = void, P0 = unknown, P1 = unknown, P2 = unknown>(_addInsertMenuItemsFor: P0, _usingMenuBuilder: P1, _forMenu: P2): R;
    addInsertSharedTextToMenu<R = void, P0 = unknown>(_addInsertSharedTextToMenu: P0): R;
    addInsertSymbolsToMenu<R = void, P0 = unknown>(_addInsertSymbolsToMenu: P0): R;
    addHeaderToMenu_withTitle<R = void, P0 = unknown, P1 = unknown>(_addHeaderToMenu: P0, _withTitle: P1): R;
    isSelectable<R = boolean>(): R;
    label<R = unknown>(): R;
    tooltip<R = unknown>(): R;
    textStyleMenuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setTextStyleMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    symbolMenuBuilder<R = MSForeignObjectMenuBuilder>(): R;
    setSymbolMenuBuilder<R = void, P0 = MSForeignObjectMenuBuilder>(_v: P0): R;
    documentCloseObserver<R = NSObject>(): R;
    setDocumentCloseObserver<R = void, P0 = NSObject>(_v: P0): R;
  }
  namespace MSInsertMenuAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSDocumentAction {
      alloc<R = MSInsertMenuAction>(): R;
      new: <R = MSInsertMenuAction>() => R;
    }
  }
}

declare const MSInsertMenuAction: cocoa.MSInsertMenuAction.CLASS;
