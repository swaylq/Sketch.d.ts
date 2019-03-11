/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintOperationPrintEventRetrofitInfo<T = any> extends cocoa.NSObject {
    dealloc<R = void>(): R;
    initWithSettings_showPrintPanel_sender_delegate_didPrintSelector_contextInfo<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = string, P5 = void>(_initWithSettings: P0, _showPrintPanel: P1, _sender: P2, _delegate: P3, _didPrintSelector: P4, _contextInfo: P5): R;
  }
  namespace classes {
    export interface NSPrintOperationPrintEventRetrofitInfo<T = any> extends cocoa.classes.NSObject {
      alloc<R = NSPrintOperationPrintEventRetrofitInfo>(): R;
      new: <R = NSPrintOperationPrintEventRetrofitInfo>() => R;
    }
  }
}

declare const NSPrintOperationPrintEventRetrofitInfo: cocoa.classes.NSPrintOperationPrintEventRetrofitInfo;
