/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarService<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionTouchBarControllerDelegateProtocol, _NSQuickActionTouchBarServiceProtocolProtocol {
    cxx_destruct<R = void>(): R;
    handleShowPopoverNotification<R = void>(): R;
    unregisterClientForApp<R = void, P0 = unknown>(_unregisterClientForApp: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    dealloc<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSQuickActionTouchBarService {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSQuickActionTouchBarControllerDelegateProtocol, _NSQuickActionTouchBarServiceProtocolProtocol {
      alloc<R = _NSQuickActionTouchBarService>(): R;
      new: <R = _NSQuickActionTouchBarService>() => R;
    }
  }
}
