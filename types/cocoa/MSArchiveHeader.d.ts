/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArchiveHeader<T0 = void, T1 = void, T2 = void> extends NSObject, MSCodingProtocol {
    cxx_destruct<R = void>(): R;
    encodeAsJSON<R = void, P0 = unknown>(_encodeAsJSON: P0): R;
    root<R = unknown>(): R;
    setRoot<R = void, P0 = unknown>(_v: P0): R;
    metadata<R = NSDictionary>(): R;
    setMetadata<R = void, P0 = NSDictionary>(_v: P0): R;
    compatibilityVersion<R = number>(): R;
    setCompatibilityVersion<R = void, P0 = number>(_v: P0): R;
    version<R = number>(): R;
    setVersion<R = void, P0 = number>(_v: P0): R;
    archiveReferenceIdentifier_bc<R = NSString>(): R;
  }
  namespace MSArchiveHeader {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, MSCodingProtocol {
      alloc<R = MSArchiveHeader>(): R;
      new: <R = MSArchiveHeader>() => R;
      metadataForNewHeader<R = unknown>(): R;
    }
  }
}

declare const MSArchiveHeader: cocoa.MSArchiveHeader.CLASS;
