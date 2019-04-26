/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSVBSavePanel<T0 = void, T1 = void, T2 = void> extends NSPanel, NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol {}
  namespace NSVBSavePanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel, NSOpenAndSavePanelRemoteViewExportedToServiceProtocolProtocol {
      alloc<R = NSVBSavePanel>(): R;
      new: <R = NSVBSavePanel>() => R;
      savePanel<R = unknown>(): R;
    }
  }
}

declare const NSVBSavePanel: cocoa.NSVBSavePanel.CLASS;
