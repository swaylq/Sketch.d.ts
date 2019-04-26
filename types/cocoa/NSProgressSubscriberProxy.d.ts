/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSProgressSubscriberProxy<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressSubscriberProtocol {
    isFromConnection<R = boolean, P0 = unknown>(_isFromConnection: P0): R;
    descriptionWithIndenting<R = unknown, P0 = unknown>(_descriptionWithIndenting: P0): R;
    appBundleID<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithForwarder_onConnection_subscriberID_appBundleID<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown>(_initWithForwarder: P0, _onConnection: P1, _subscriberID: P2, _appBundleID: P3): R;
    category<R = NSString>(): R;
    setCategory<R = void, P0 = NSString>(_v: P0): R;
    description<R = NSString>(): R;
    itemLocation<R = NSFileAccessNode>(): R;
    setItemLocation<R = void, P0 = NSFileAccessNode>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSProgressSubscriberProxy {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressSubscriberProtocol {
      alloc<R = NSProgressSubscriberProxy>(): R;
      new: <R = NSProgressSubscriberProxy>() => R;
    }
  }
}

declare const NSProgressSubscriberProxy: cocoa.NSProgressSubscriberProxy.CLASS;
