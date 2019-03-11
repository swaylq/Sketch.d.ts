/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDocumentSerializationObject<T = any> extends cocoa.NSObject {
    grant<R = void>(): R;
    addBreadcrumb<R = void, P0 = unknown>(_addBreadcrumb: P0): R;
    dealloc<R = void>(): R;
    breadcrumbs<R = cocoa.NSArray>(): R;
    allowingEventsForUnblocker<R = boolean>(): R;
    setAllowingEventsForUnblocker<R = void, P0 = boolean>(_v: P0): R;
    finished<R = boolean>(): R;
    setFinished<R = void, P0 = boolean>(_v: P0): R;
    accessGranted<R = boolean>(): R;
    setAccessGranted<R = void, P0 = boolean>(_v: P0): R;
    workBlock<R = cocoa.CDUnknownBlockType>(): R;
    setWorkBlock<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    grantHandler<R = cocoa.CDUnknownBlockType>(): R;
    setGrantHandler<R = void, P0 = cocoa.CDUnknownBlockType>(_v: P0): R;
    synchronous<R = boolean>(): R;
    setSynchronous<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSDocumentSerializationObject<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSDocumentSerializationObject>(): R;
      new: <R = _NSDocumentSerializationObject>() => R;
    }
  }
}
