/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCloudSharingServiceDelegate<T0 = void, T1 = void, T2 = void> extends NSObject, NSCloudSharingServiceDelegateProtocol {
    dealloc<R = void>(): R;
    initWithService_parentWindowProvider_completionHandler<R = unknown, P0 = unknown, P1 = CDUnknownBlockType, P2 = CDUnknownBlockType>(_initWithService: P0, _parentWindowProvider: P1, _completionHandler: P2): R;
    preShareFailureMeansStopSharing<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSCloudSharingServiceDelegate {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCloudSharingServiceDelegateProtocol {
      alloc<R = _NSCloudSharingServiceDelegate>(): R;
      new: <R = _NSCloudSharingServiceDelegate>() => R;
    }
  }
}
