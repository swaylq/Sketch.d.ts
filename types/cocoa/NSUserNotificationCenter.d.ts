/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSUserNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSObject {
    _setProgress_forNotificationWithIdentifier<R = void, P0 = number, P1 = unknown>(__setProgress: P0, _forNotificationWithIdentifier: P1): R;
    _invalidateAndUnregister<R = void>(): R;
    _unRegisterForRemotePushNotifications<R = void>(): R;
    _registerForRemotePushNotificationsWithEnvironment_types<R = void, P0 = unknown, P1 = number>(__registerForRemotePushNotificationsWithEnvironment: P0, _types: P1): R;
    _registerForRemotePushNotificationTypes<R = void, P0 = number>(__registerForRemotePushNotificationTypes: P0): R;
    _removeAllPresentedAlerts<R = void>(): R;
    _removePresentedAlert<R = void, P0 = unknown>(__removePresentedAlert: P0): R;
    _removeAllDisplayedNotifications<R = void>(): R;
    _removeDisplayedNotification<R = void, P0 = unknown>(__removeDisplayedNotification: P0): R;
    removeAllDeliveredNotifications<R = void>(): R;
    removeDeliveredNotification<R = void, P0 = unknown>(_removeDeliveredNotification: P0): R;
    _setDeliveredNotifications<R = void, P0 = unknown>(__setDeliveredNotifications: P0): R;
    deliverNotification<R = void, P0 = unknown>(_deliverNotification: P0): R;
    removeScheduledNotification<R = void, P0 = unknown>(_removeScheduledNotification: P0): R;
    scheduleNotification<R = void, P0 = unknown>(_scheduleNotification: P0): R;
    _setAppDelegate_connect<R = void, P0 = unknown, P1 = boolean>(__setAppDelegate: P0, _connect: P1): R;
    _appDelegate<R = _NSUserNotificationCenterDelegatePrivate>(): R;
    set_appDelegate<R = void, P0 = _NSUserNotificationCenterDelegatePrivate>(_v: P0): R;
    _displayedNotifications<R = NSArray>(): R;
    _maxPresentedNotifications<R = number>(): R;
    _notificationPreferences<R = number>(): R;
    _notificationsDisabled<R = boolean>(): R;
    _presentedAlerts<R = NSArray>(): R;
    _preventApplicationLaunching<R = boolean>(): R;
    set_preventApplicationLaunching<R = void, P0 = boolean>(_v: P0): R;
    _registeredPushToken<R = NSData>(): R;
    _reverseDeliveredNotifications<R = boolean>(): R;
    set_reverseDeliveredNotifications<R = void, P0 = boolean>(_v: P0): R;
    _todaySummaryNotifications<R = NSArray>(): R;
    set_todaySummaryNotifications<R = void, P0 = NSArray>(_v: P0): R;
    _tomorrowSummaryNotifications<R = NSArray>(): R;
    set_tomorrowSummaryNotifications<R = void, P0 = NSArray>(_v: P0): R;
    delegate<R = NSUserNotificationCenterDelegate>(): R;
    setDelegate<R = void, P0 = NSUserNotificationCenterDelegate>(_v: P0): R;
    deliveredNotifications<R = NSArray>(): R;
    scheduledNotifications<R = NSArray>(): R;
    setScheduledNotifications<R = void, P0 = NSArray>(_v: P0): R;
  }
  namespace NSUserNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSUserNotificationCenter>(): R;
      new: <R = NSUserNotificationCenter>() => R;
      _identifiersForCenterType<R = unknown, P0 = number>(__identifiersForCenterType: P0): R;
      _searchPathForCenterType<R = unknown, P0 = number>(__searchPathForCenterType: P0): R;
      _webNotificationIdentifiers<R = unknown>(): R;
      _webNotificationCenterSearchPath<R = unknown>(): R;
      _doNotDisturbEnabled<R = boolean>(): R;
      _registerConnectionCallback<R = void, P0 = CDUnknownBlockType>(__registerConnectionCallback: P0): R;
      _centerForBundleIdentifier<R = unknown, P0 = unknown>(__centerForBundleIdentifier: P0): R;
      _registerForOnDemandCallback<R = void, P0 = CDUnknownBlockType>(__registerForOnDemandCallback: P0): R;
      _centerForIdentifier_type<R = unknown, P0 = unknown, P1 = number>(__centerForIdentifier: P0, _type: P1): R;
      defaultUserNotificationCenter<R = unknown>(): R;
    }
  }
}

declare const NSUserNotificationCenter: cocoa.NSUserNotificationCenter.CLASS;
