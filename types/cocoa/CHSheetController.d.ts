/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CHSheetController<T0 = void, T1 = void, T2 = void> extends CHWindowController, NSTouchBarDelegateProtocol {
    cxx_destruct<R = void>(): R;
    sheetWillClose<R = void>(): R;
    _init<R = unknown>(): R;
    selectorForTouchbarItemIdentifier<R = string, P0 = unknown>(_selectorForTouchbarItemIdentifier: P0): R;
    touchBarItemIdentifiers<R = unknown>(): R;
    windowNibName<R = unknown>(): R;
    closeSheet<R = void>(): R;
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    confirm<R = void, P0 = unknown>(_confirm: P0): R;
    run<R = unknown>(): R;
    releaseSelf<R = void>(): R;
    retainSelf<R = void>(): R;
    selfReferences<R = NSCountedSet>(): R;
    setSelfReferences<R = void, P0 = NSCountedSet>(_v: P0): R;
    parentWindow<R = NSWindow>(): R;
    setParentWindow<R = void, P0 = NSWindow>(_v: P0): R;
    object<R = unknown>(): R;
    setObject<R = void, P0 = unknown>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace CHSheetController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends CHWindowController, NSTouchBarDelegateProtocol {
      alloc<R = CHSheetController>(): R;
      new: <R = CHSheetController>() => R;
      findSuitableWindowForSheet<R = unknown>(): R;
      runForWindow_withObject<R = unknown, P0 = unknown, P1 = unknown>(_runForWindow: P0, _withObject: P1): R;
      runForWindow<R = unknown, P0 = unknown>(_runForWindow: P0): R;
    }
  }
}

declare const CHSheetController: cocoa.CHSheetController.CLASS;
