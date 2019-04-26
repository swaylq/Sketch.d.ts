/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSharedObject<T0 = void, T1 = void, T2 = void> extends _MSSharedObject, BCSortableProtocol {
    parentGroup<R = unknown>(): R;
    type<R = number>(): R;
    isOutOfSyncWithInstance<R = boolean, P0 = MSModelObject>(_isOutOfSyncWithInstance: P0): R;
    initWithName_sharedObjectID_value<R = unknown, P0 = unknown, P1 = unknown, P2 = MSModelObject>(_initWithName: P0, _sharedObjectID: P1, _value: P2): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    name<R = NSString>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSharedObject {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _MSSharedObject, BCSortableProtocol {
      alloc<R = MSSharedObject>(): R;
      new: <R = MSSharedObject>() => R;
    }
  }
}

declare const MSSharedObject: cocoa.MSSharedObject.CLASS;
