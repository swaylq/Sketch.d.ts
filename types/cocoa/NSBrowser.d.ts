/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSBrowser<T0 = void, T1 = void, T2 = void> extends NSControl {}
  namespace NSBrowser {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSControl {
      alloc<R = NSBrowser>(): R;
      new: <R = NSBrowser>() => R;
      removeSavedColumnsWithAutosaveName<R = void, P0 = unknown>(_removeSavedColumnsWithAutosaveName: P0): R;
    }
  }
}

declare const NSBrowser: cocoa.NSBrowser.CLASS;
