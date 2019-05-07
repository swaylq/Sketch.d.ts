/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerPersistentRestoration<T0 = void, T1 = void, T2 = void> extends NSObject {
    windowsDidFinishRestoring<R = void>(): R;
    loadedDocument_forAutoID<R = void, P0 = unknown, P1 = number>(_loadedDocument: P0, _forAutoID: P1): R;
    waitForDocumentWithAutoID_thenDo<R = boolean, P0 = number, P1 = CDUnknownBlockType>(_waitForDocumentWithAutoID: P0, _thenDo: P1): R;
    dealloc<R = void>(): R;
  }
  namespace NSDocumentControllerPersistentRestoration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentControllerPersistentRestoration>(): R;
      new: <R = NSDocumentControllerPersistentRestoration>() => R;
    }
  }
}

declare const NSDocumentControllerPersistentRestoration: cocoa.NSDocumentControllerPersistentRestoration.CLASS;
