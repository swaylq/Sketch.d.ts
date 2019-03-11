/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressPublisherProxy<T = any> extends cocoa.NSObject, cocoa.NSProgressPublisherProtocol {
    observeValues_forKeys<R = void, P0 = unknown, P1 = unknown>(_observeValues: P0, _forKeys: P1): R;
    observeUserInfoValue_forKey<R = void, P0 = unknown, P1 = unknown>(_observeUserInfoValue: P0, _forKey: P1): R;
    descriptionWithIndenting<R = unknown, P0 = unknown>(_descriptionWithIndenting: P0): R;
    isFromConnection<R = boolean, P0 = unknown>(_isFromConnection: P0): R;
    publisherID<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithForwarder_onConnection_publisherID_values<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithForwarder: P0, _onConnection: P1, _publisherID: P2, _values: P3): R;
    values<R = cocoa.NSProgressValues>(): R;
    category<R = cocoa.NSString>(): R;
    setCategory<R = void, P0 = cocoa.NSString>(_v: P0): R;
    description<R = cocoa.NSString>(): R;
    itemLocation<R = cocoa.NSFileAccessNode>(): R;
    setItemLocation<R = void, P0 = cocoa.NSFileAccessNode>(_v: P0): R;
    debugDescription<R = cocoa.NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace classes {
    export interface NSProgressPublisherProxy<T = any> extends cocoa.classes.NSObject, cocoa.classes.NSProgressPublisherProtocol {
      alloc<R = NSProgressPublisherProxy>(): R;
      new: <R = NSProgressPublisherProxy>() => R;
    }
  }
}

declare const NSProgressPublisherProxy: cocoa.classes.NSProgressPublisherProxy;
