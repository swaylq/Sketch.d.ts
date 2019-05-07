/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSBaseArchiver<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    encodeSize_forKey<R = void, P0 = CGSize, P1 = unknown>(_encodeSize: P0, _forKey: P1): R;
    encodeInteger_forKey<R = void, P0 = number, P1 = unknown>(_encodeInteger: P0, _forKey: P1): R;
    encodePoint_forKey<R = void, P0 = CGPoint, P1 = unknown>(_encodePoint: P0, _forKey: P1): R;
    encodeRect_forKey<R = void, P0 = CGRect, P1 = unknown>(_encodeRect: P0, _forKey: P1): R;
    encodeBool_forKey<R = void, P0 = boolean, P1 = unknown>(_encodeBool: P0, _forKey: P1): R;
    encodeDouble_forKey<R = void, P0 = number, P1 = unknown>(_encodeDouble: P0, _forKey: P1): R;
    encodeObject_forKey<R = void, P0 = unknown, P1 = unknown>(_encodeObject: P0, _forKey: P1): R;
    referenceObjectForObject<R = unknown, P0 = unknown>(_referenceObjectForObject: P0): R;
    shouldEncodeAsReference<R = boolean, P0 = unknown>(_shouldEncodeAsReference: P0): R;
    archiveRootObject<R = void, P0 = unknown>(_archiveRootObject: P0): R;
    archivedDataWithRootObject_error<R = unknown, P0 = unknown, P1 = unknown>(_archivedDataWithRootObject: P0, _error: P1): R;
    references<R = NSMutableDictionary>(): R;
    setReferences<R = void, P0 = NSMutableDictionary>(_v: P0): R;
    archiveObjectIDs<R = boolean>(): R;
    setArchiveObjectIDs<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace MSBaseArchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSBaseArchiver>(): R;
      new: <R = MSBaseArchiver>() => R;
      archivedDataWithHeaderAndRootObject<R = unknown, P0 = unknown>(_archivedDataWithHeaderAndRootObject: P0): R;
    }
  }
}

declare const MSBaseArchiver: cocoa.MSBaseArchiver.CLASS;
