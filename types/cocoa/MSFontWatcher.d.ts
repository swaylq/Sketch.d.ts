/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSFontWatcher<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    installedFontsChanged<R = void, P0 = unknown>(_installedFontsChanged: P0): R;
    dealloc<R = void>(): R;
    initWithDocumentController<R = unknown, P0 = unknown>(_initWithDocumentController: P0): R;
    documentController<R = NSDocumentController>(): R;
    setDocumentController<R = void, P0 = NSDocumentController>(_v: P0): R;
  }
  namespace MSFontWatcher {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSFontWatcher>(): R;
      new: <R = MSFontWatcher>() => R;
    }
  }
}

declare const MSFontWatcher: cocoa.MSFontWatcher.CLASS;
