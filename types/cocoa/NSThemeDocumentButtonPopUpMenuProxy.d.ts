/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSThemeDocumentButtonPopUpMenuProxy<T0 = void, T1 = void, T2 = void> extends NSProxy {
    createRealObjectIfNeeded<R = void>(): R;
    initWithDocumentButton<R = unknown, P0 = unknown>(_initWithDocumentButton: P0): R;
  }
  namespace NSThemeDocumentButtonPopUpMenuProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSProxy {}
  }
}

declare const NSThemeDocumentButtonPopUpMenuProxy: cocoa.NSThemeDocumentButtonPopUpMenuProxy.CLASS;
