/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionTouchBarClientProtocolProtocol<T0 = void, T1 = void, T2 = void> {
    invokeQuickActionWithIdentifier<R = void, P0 = NSString>(_invokeQuickActionWithIdentifier: P0): R;
    quickActionTouchBarDidHide<R = void>(): R;
    quickActionTouchBarWillShow<R = void>(): R;
  }
  namespace _NSQuickActionTouchBarClientProtocolProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {}
  }
}
