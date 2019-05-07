/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSpellingPanel<T0 = void, T1 = void, T2 = void> extends NSPanel {
    worksWhenModal<R = boolean>(): R;
  }
  namespace NSSpellingPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel {
      alloc<R = NSSpellingPanel>(): R;
      new: <R = NSSpellingPanel>() => R;
    }
  }
}

declare const NSSpellingPanel: cocoa.NSSpellingPanel.CLASS;
