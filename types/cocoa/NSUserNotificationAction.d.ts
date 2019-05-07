/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserNotificationAction<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    identifier<R = NSString>(): R;
    title<R = NSString>(): R;
  }
  namespace NSUserNotificationAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol {
      alloc<R = NSUserNotificationAction>(): R;
      new: <R = NSUserNotificationAction>() => R;
      supportsSecureCoding<R = boolean>(): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      alloc<R = unknown>(): R;
      actionWithIdentifier_title<R = unknown, P0 = unknown, P1 = unknown>(_actionWithIdentifier: P0, _title: P1): R;
    }
  }
}

declare const NSUserNotificationAction: cocoa.NSUserNotificationAction.CLASS;
