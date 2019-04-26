/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarClient<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionProviderObserverProtocol, _NSQuickActionValidatorObserverProtocol, _NSQuickActionTouchBarClientProtocolProtocol {
    cxx_destruct<R = void>(): R;
    dealloc<R = void>(): R;
    deactivate<R = void>(): R;
    activate<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSQuickActionTouchBarClient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionProviderObserverProtocol, _NSQuickActionValidatorObserverProtocol, _NSQuickActionTouchBarClientProtocolProtocol {
      alloc<R = _NSQuickActionTouchBarClient>(): R;
      new: <R = _NSQuickActionTouchBarClient>() => R;
    }
  }
}
