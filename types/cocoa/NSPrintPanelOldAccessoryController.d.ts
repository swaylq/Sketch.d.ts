/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPrintPanelOldAccessoryController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSPrintPanelAccessorizingProtocol {}
  namespace NSPrintPanelOldAccessoryController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSPrintPanelAccessorizingProtocol {
      alloc<R = NSPrintPanelOldAccessoryController>(): R;
      new: <R = NSPrintPanelOldAccessoryController>() => R;
    }
  }
}

declare const NSPrintPanelOldAccessoryController: cocoa.NSPrintPanelOldAccessoryController.CLASS;
