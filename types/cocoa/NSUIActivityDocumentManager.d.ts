/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUIActivityDocumentManager<T0 = void, T1 = void, T2 = void> extends NSObject {
    documentDidChangeFileType<R = void, P0 = unknown>(_documentDidChangeFileType: P0): R;
    documentDidChangeFileURL<R = void, P0 = unknown>(_documentDidChangeFileURL: P0): R;
    documentDidClose<R = void, P0 = unknown>(_documentDidClose: P0): R;
    documentDidOpen<R = void, P0 = unknown>(_documentDidOpen: P0): R;
    removeAutomaticUserActivityForDocument<R = void, P0 = unknown>(_removeAutomaticUserActivityForDocument: P0): R;
    updateAutomaticUserActivityForDocument<R = void, P0 = unknown>(_updateAutomaticUserActivityForDocument: P0): R;
    userActivityIsAutomaticForDocument<R = boolean, P0 = unknown>(_userActivityIsAutomaticForDocument: P0): R;
    userActivityTypeForDocument<R = unknown, P0 = unknown>(_userActivityTypeForDocument: P0): R;
    documentIsUbiquitous<R = boolean, P0 = unknown>(_documentIsUbiquitous: P0): R;
  }
  namespace NSUIActivityDocumentManager {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUIActivityDocumentManager>(): R;
      new: <R = NSUIActivityDocumentManager>() => R;
      sharedManager<R = unknown>(): R;
    }
  }
}

declare const NSUIActivityDocumentManager: cocoa.NSUIActivityDocumentManager.CLASS;
