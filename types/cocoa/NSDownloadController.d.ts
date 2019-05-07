/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDownloadController<T0 = void, T1 = void, T2 = void> extends NSObject {
    window<R = unknown>(): R;
    informativeText<R = unknown>(): R;
    setInformativeText<R = void, P0 = unknown>(_setInformativeText: P0): R;
    messageText<R = unknown>(): R;
    setMessageText<R = void, P0 = unknown>(_setMessageText: P0): R;
    alertDidEnd_returnCode_contextInfo<R = void, P0 = unknown, P1 = number, P2 = void>(_alertDidEnd: P0, _returnCode: P1, _contextInfo: P2): R;
    beginSheetModalForWindow_modalDelegate_didEndSelector_contextInfo<R = void, P0 = unknown, P1 = unknown, P2 = string, P3 = void>(_beginSheetModalForWindow: P0, _modalDelegate: P1, _didEndSelector: P2, _contextInfo: P3): R;
    runModalWindow<R = number>(): R;
    _createAlert<R = unknown>(): R;
    downloadInformation<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    _setMessageAndInformativeText<R = void>(): R;
  }
  namespace NSDownloadController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDownloadController>(): R;
      new: <R = NSDownloadController>() => R;
    }
  }
}

declare const NSDownloadController: cocoa.NSDownloadController.CLASS;
