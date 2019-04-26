/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSNavNewFolderController<T0 = void, T1 = void, T2 = void> extends NSWindowController {
    cancel<R = void, P0 = unknown>(_cancel: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    runModalForSavePanel<R = unknown, P0 = unknown>(_runModalForSavePanel: P0): R;
    isRunning<R = boolean>(): R;
    _defaultNewFolderName<R = unknown>(): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    _updateOkButtonEnabledStateAndErrorMessage<R = void>(): R;
    _folderPath<R = unknown>(): R;
  }
  namespace NSNavNewFolderController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSWindowController {
      alloc<R = NSNavNewFolderController>(): R;
      new: <R = NSNavNewFolderController>() => R;
    }
  }
}

declare const NSNavNewFolderController: cocoa.NSNavNewFolderController.CLASS;
