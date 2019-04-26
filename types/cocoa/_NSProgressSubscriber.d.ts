/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSProgressSubscriber<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressSubscriberProtocol {
    stop<R = void>(): R;
    startForFileURL<R = void, P0 = unknown>(_startForFileURL: P0): R;
    startForCategory<R = void, P0 = unknown>(_startForCategory: P0): R;
    dealloc<R = void>(): R;
    initWithPublishingHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithPublishingHandler: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSProgressSubscriber {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSProgressSubscriberProtocol {
      alloc<R = _NSProgressSubscriber>(): R;
      new: <R = _NSProgressSubscriber>() => R;
    }
  }
}
