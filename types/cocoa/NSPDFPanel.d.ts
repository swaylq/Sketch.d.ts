/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFPanel<T0 = void, T1 = void, T2 = void> extends NSObject {
    beginSheetWithPDFInfo_modalForWindow_completionHandler<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_beginSheetWithPDFInfo: P0, _modalForWindow: P1, _completionHandler: P2): R;
    _setOKButtonDisabled<R = void, P0 = boolean>(__setOKButtonDisabled: P0): R;
    _okButtonDisabled<R = boolean>(): R;
    _setPanel<R = void, P0 = unknown>(__setPanel: P0): R;
    _panel<R = unknown>(): R;
    _setPrintInfo<R = void, P0 = unknown>(__setPrintInfo: P0): R;
    _printInfo<R = unknown>(): R;
    dealloc<R = void>(): R;
    options<R = number>(): R;
    setOptions<R = void, P0 = number>(_v: P0): R;
    accessoryController<R = NSViewController>(): R;
    setAccessoryController<R = void, P0 = NSViewController>(_v: P0): R;
    defaultFileName<R = NSString>(): R;
    setDefaultFileName<R = void, P0 = NSString>(_v: P0): R;
  }
  namespace NSPDFPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPDFPanel>(): R;
      new: <R = NSPDFPanel>() => R;
      panel<R = unknown>(): R;
    }
  }
}

declare const NSPDFPanel: cocoa.NSPDFPanel.CLASS;
