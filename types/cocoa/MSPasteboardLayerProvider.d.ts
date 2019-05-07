/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPasteboardLayerProvider<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    pasteboard_provideDataForType<R = void, P0 = unknown, P1 = unknown>(_pasteboard: P0, _provideDataForType: P1): R;
    initWithDictionary<R = unknown, P0 = unknown>(_initWithDictionary: P0): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    queue<R = NSOperationQueue>(): R;
  }
  namespace MSPasteboardLayerProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPasteboardLayerProvider>(): R;
      new: <R = MSPasteboardLayerProvider>() => R;
      providerForDictionary<R = unknown, P0 = unknown>(_providerForDictionary: P0): R;
    }
  }
}

declare const MSPasteboardLayerProvider: cocoa.MSPasteboardLayerProvider.CLASS;
