/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoment<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    initWithTitle_documentData<R = unknown, P0 = unknown, P1 = unknown>(_initWithTitle: P0, _documentData: P1): R;
    pageID<R = NSString>(): R;
    setPageID<R = void, P0 = NSString>(_v: P0): R;
    selectedLayerIDs<R = NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = NSSet>(_v: P0): R;
    adaptability<R = number>(): R;
    setAdaptability<R = void, P0 = number>(_v: P0): R;
    document<R = MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = MSImmutableDocumentData>(_v: P0): R;
    title<R = NSString>(): R;
    setTitle<R = void, P0 = NSString>(_v: P0): R;
    timestamp<R = number>(): R;
  }
  namespace MSMoment {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSMoment>(): R;
      new: <R = MSMoment>() => R;
    }
  }
}

declare const MSMoment: cocoa.MSMoment.CLASS;
