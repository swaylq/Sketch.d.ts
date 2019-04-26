/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTableOptionsPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    worksWhenModal<R = boolean>(): R;
  }
  namespace NSTableOptionsPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSTableOptionsPanel>(): R;
      new: <R = NSTableOptionsPanel>() => R;
    }
  }
}

declare const NSTableOptionsPanel: cocoa.NSTableOptionsPanel.CLASS;
