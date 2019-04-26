/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSForeignObject<T0 = void, T1 = void, T2 = void> extends _MSForeignObject {
    masterFromDocument<R = unknown, P0 = unknown>(_masterFromDocument: P0): R;
    collectionInDocument<R = unknown, P0 = unknown>(_collectionInDocument: P0): R;
    unlinkFromRemote<R = unknown>(): R;
    setLocalShareID<R = void, P0 = unknown>(_setLocalShareID: P0): R;
    localShareID<R = unknown>(): R;
    setOriginalObject<R = void, P0 = unknown>(_setOriginalObject: P0): R;
    originalObject<R = unknown>(): R;
    masterFromLibrary<R = unknown, P0 = unknown>(_masterFromLibrary: P0): R;
    isLocalToDocument<R = boolean, P0 = unknown>(_isLocalToDocument: P0): R;
    matchingForeignObjectInDocument<R = unknown, P0 = unknown>(_matchingForeignObjectInDocument: P0): R;
    syncWithRemote<R = void, P0 = unknown>(_syncWithRemote: P0): R;
    isOutOfDateWithLibrary<R = boolean, P0 = unknown>(_isOutOfDateWithLibrary: P0): R;
    initWithOriginalObject_inLibrary<R = unknown, P0 = unknown, P1 = unknown>(_initWithOriginalObject: P0, _inLibrary: P1): R;
    remoteShareID<R = NSString>(): R;
    localObject<R = MSModelObject>(): R;
    setLocalObject<R = void, P0 = MSModelObject>(_v: P0): R;
  }
  namespace MSForeignObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSForeignObject {
      alloc<R = MSForeignObject>(): R;
      new: <R = MSForeignObject>() => R;
    }
  }
}

declare const MSForeignObject: cocoa.MSForeignObject.CLASS;
