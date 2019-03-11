/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSMoment<T = any> extends cocoa.NSObject {
    cxx_destruct<R = void>(): R;
    initWithTitle_documentData<R = unknown, P0 = unknown, P1 = unknown>(_initWithTitle: P0, _documentData: P1): R;
    pageID<R = cocoa.NSString>(): R;
    setPageID<R = void, P0 = cocoa.NSString>(_v: P0): R;
    selectedLayerIDs<R = cocoa.NSSet>(): R;
    setSelectedLayerIDs<R = void, P0 = cocoa.NSSet>(_v: P0): R;
    adaptability<R = number>(): R;
    setAdaptability<R = void, P0 = number>(_v: P0): R;
    document<R = cocoa.MSImmutableDocumentData>(): R;
    setDocument<R = void, P0 = cocoa.MSImmutableDocumentData>(_v: P0): R;
    title<R = cocoa.NSString>(): R;
    setTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    timestamp<R = number>(): R;
  }
  namespace classes {
    export interface MSMoment<T = any> extends cocoa.classes.NSObject {
      alloc<R = MSMoment>(): R;
      new: <R = MSMoment>() => R;
    }
  }
}

declare const MSMoment: cocoa.classes.MSMoment;
