/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSKeyedArchiver<T0 = void, T1 = void, T2 = void> extends NSCoder {
    _encodePropertyList_forKey<R = void, P0 = unknown, P1 = unknown>(__encodePropertyList: P0, _forKey: P1): R;
    _encodeArrayOfObjects_forKey<R = void, P0 = unknown, P1 = unknown>(__encodeArrayOfObjects: P0, _forKey: P1): R;
    replaceObject_withObject<R = void, P0 = unknown, P1 = unknown>(_replaceObject: P0, _withObject: P1): R;
    finishEncoding<R = void>(): R;
    classNameForClass<R = unknown, P0 = unknown>(_classNameForClass: P0): R;
    setClassName_forClass<R = void, P0 = unknown, P1 = unknown>(_setClassName: P0, _forClass: P1): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initForWritingWithMutableData<R = unknown, P0 = unknown>(_initForWritingWithMutableData: P0): R;
    _initWithOutput<R = unknown, P0 = unknown>(__initWithOutput: P0): R;
    initRequiringSecureCoding<R = unknown, P0 = boolean>(_initRequiringSecureCoding: P0): R;
    _blobForCurrentObject<R = unknown>(): R;
    _setBlobForCurrentObject<R = void, P0 = unknown>(__setBlobForCurrentObject: P0): R;
    requiresSecureCoding<R = boolean>(): R;
    setRequiresSecureCoding<R = void, P0 = boolean>(_v: P0): R;
    encodedData<R = NSData>(): R;
    outputFormat<R = number>(): R;
    setOutputFormat<R = void, P0 = number>(_v: P0): R;
    delegate<R = NSKeyedArchiverDelegate>(): R;
    setDelegate<R = void, P0 = NSKeyedArchiverDelegate>(_v: P0): R;
  }
  namespace NSKeyedArchiver {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCoder {
      alloc<R = NSKeyedArchiver>(): R;
      new: <R = NSKeyedArchiver>() => R;
      archiveRootObject_toFile<R = boolean, P0 = unknown, P1 = unknown>(_archiveRootObject: P0, _toFile: P1): R;
      archivedDataWithRootObject<R = unknown, P0 = unknown>(_archivedDataWithRootObject: P0): R;
      archivedDataWithRootObject_requiringSecureCoding_error<R = unknown, P0 = unknown, P1 = boolean, P2 = unknown>(_archivedDataWithRootObject: P0, _requiringSecureCoding: P1, _error: P2): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSKeyedArchiver: cocoa.NSKeyedArchiver.CLASS;
