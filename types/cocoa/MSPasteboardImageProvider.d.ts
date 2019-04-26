/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardImageProvider<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    request<R = MSExportRequest>(): R;
    setRequest<R = void, P0 = MSExportRequest>(_v: P0): R;
    queue<R = NSOperationQueue>(): R;
  }
  namespace MSPasteboardImageProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardImageProvider>(): R;
      new: <R = MSPasteboardImageProvider>() => R;
      preparePasteboard_withExportRequest<R = void, P0 = unknown, P1 = unknown>(_preparePasteboard: P0, _withExportRequest: P1): R;
    }
  }
}

declare const MSPasteboardImageProvider: cocoa.MSPasteboardImageProvider.CLASS;
