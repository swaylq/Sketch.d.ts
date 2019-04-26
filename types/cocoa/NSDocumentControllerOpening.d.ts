/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentControllerOpening<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    error<R = NSError>(): R;
    setError<R = void, P0 = NSError>(_v: P0): R;
    recentDocumentRecordsKey<R = NSString>(): R;
    setRecentDocumentRecordsKey<R = void, P0 = NSString>(_v: P0): R;
    documentWasAlreadyOpen<R = boolean>(): R;
    setDocumentWasAlreadyOpen<R = void, P0 = boolean>(_v: P0): R;
    document<R = NSDocument>(): R;
    setDocument<R = void, P0 = NSDocument>(_v: P0): R;
    seamlessOpener<R = QLSeamlessDocumentOpener>(): R;
    setSeamlessOpener<R = void, P0 = QLSeamlessDocumentOpener>(_v: P0): R;
    url<R = NSURL>(): R;
    setUrl<R = void, P0 = NSURL>(_v: P0): R;
  }
  namespace NSDocumentControllerOpening {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSDocumentControllerOpening>(): R;
      new: <R = NSDocumentControllerOpening>() => R;
    }
  }
}

declare const NSDocumentControllerOpening: cocoa.NSDocumentControllerOpening.CLASS;
