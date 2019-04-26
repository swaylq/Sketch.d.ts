/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPersistentUIEncodedReference<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    description<R = unknown>(): R;
    hash<R = number>(): R;
    awakeAfterUsingCoder<R = unknown, P0 = unknown>(_awakeAfterUsingCoder: P0): R;
    initForPersistentIdentifier_windowID<R = unknown, P0 = unknown, P1 = number>(_initForPersistentIdentifier: P0, _windowID: P1): R;
    dealloc<R = void>(): R;
    windowID<R = number>(): R;
    setWindowID<R = void, P0 = number>(_v: P0): R;
    persistentIdentifier<R = NSString>(): R;
  }
  namespace NSPersistentUIEncodedReference {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSPersistentUIEncodedReference>(): R;
      new: <R = NSPersistentUIEncodedReference>() => R;
      encodedReferenceToResponderMap<R = unknown>(): R;
      setEncodedReferenceToResponderMap<R = void, P0 = unknown>(_setEncodedReferenceToResponderMap: P0): R;
    }
  }
}

declare const NSPersistentUIEncodedReference: cocoa.NSPersistentUIEncodedReference.CLASS;
