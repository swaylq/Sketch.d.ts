/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSOpenAndSavePanelContentView<T0 = void, T1 = void, T2 = void> extends NSView {
    handleClientSideWindowDragEvents<R = boolean>(): R;
    setHandleClientSideWindowDragEvents<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSOpenAndSavePanelContentView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = NSOpenAndSavePanelContentView>(): R;
      new: <R = NSOpenAndSavePanelContentView>() => R;
    }
  }
}

declare const NSOpenAndSavePanelContentView: cocoa.NSOpenAndSavePanelContentView.CLASS;
