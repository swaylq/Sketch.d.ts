/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSConcreteUserNotificationCenter<T0 = void, T1 = void, T2 = void> extends NSUserNotificationCenter {
    _preventApplicationLaunching<R = boolean>(): R;
    delegate<R = unknown>(): R;
    _connectToServerIfNecessary<R = void>(): R;
    _serverConnection<R = unknown>(): R;
    _server_did_come_alive<R = void, P0 = unknown>(__server_did_come_alive: P0): R;
    _send_connection_authentication<R = void>(): R;
    _shouldPresentNotification<R = void, P0 = unknown>(__shouldPresentNotification: P0): R;
    _sendNotificationPrefsChanged<R = void, P0 = unknown>(__sendNotificationPrefsChanged: P0): R;
    _sendNotificationsDisabledChanged<R = void, P0 = unknown>(__sendNotificationsDisabledChanged: P0): R;
    _sendSummaryStateChanged<R = void, P0 = unknown>(__sendSummaryStateChanged: P0): R;
    _responseChangedMessage<R = void, P0 = unknown>(__responseChangedMessage: P0): R;
    _scheduledNotificationsExpired<R = void, P0 = unknown>(__scheduledNotificationsExpired: P0): R;
    _deliveredMessagesRemoved<R = void, P0 = unknown>(__deliveredMessagesRemoved: P0): R;
    _remotePushResponse<R = void, P0 = unknown>(__remotePushResponse: P0): R;
    _alertSnoozed<R = void, P0 = unknown>(__alertSnoozed: P0): R;
    _alertDismissed<R = void, P0 = unknown>(__alertDismissed: P0): R;
    _notificationClickedMessage<R = void, P0 = unknown>(__notificationClickedMessage: P0): R;
    _notificationPresentedMessage<R = void, P0 = unknown>(__notificationPresentedMessage: P0): R;
    _sendDelegateMessage_sendToAppDelegate_withObject<R = void, P0 = string, P1 = boolean, P2 = unknown>(__sendDelegateMessage: P0, _sendToAppDelegate: P1, _withObject: P2): R;
    _sendDelegateMessage_sendToAppDelegate_withNotificationFromMessage<R = void, P0 = string, P1 = boolean, P2 = unknown>(__sendDelegateMessage: P0, _sendToAppDelegate: P1, _withNotificationFromMessage: P2): R;
    _setNotifications_forMessageType<R = void, P0 = unknown, P1 = number>(__setNotifications: P0, _forMessageType: P1): R;
    _removeNotification_withMessageType<R = void, P0 = unknown, P1 = number>(__removeNotification: P0, _withMessageType: P1): R;
    _addScheduledNotification_immediate<R = void, P0 = unknown, P1 = boolean>(__addScheduledNotification: P0, _immediate: P1): R;
    _sendAsyncMessage_withBlock<R = void, P0 = number, P1 = CDUnknownBlockType>(__sendAsyncMessage: P0, _withBlock: P1): R;
    _sendSyncMessage_result<R = unknown, P0 = number, P1 = CDUnknownBlockType>(__sendSyncMessage: P0, _result: P1): R;
    _retrieveServerArrayForMessageType_timedOut<R = unknown, P0 = number, P1 = string>(__retrieveServerArrayForMessageType: P0, _timedOut: P1): R;
    _clearCenterCache<R = void>(): R;
    _notificationPreferences<R = number>(): R;
    _notificationsDisabled<R = boolean>(): R;
    set_tomorrowSummaryNotifications<R = void, P0 = unknown>(_set_tomorrowSummaryNotifications: P0): R;
    _tomorrowSummaryNotifications<R = unknown>(): R;
    set_todaySummaryNotifications<R = void, P0 = unknown>(_set_todaySummaryNotifications: P0): R;
    _todaySummaryNotifications<R = unknown>(): R;
    _registeredPushToken<R = unknown>(): R;
    _setReverseDeliveredNotifications<R = void, P0 = boolean>(__setReverseDeliveredNotifications: P0): R;
    _reverseDeliveredNotifications<R = boolean>(): R;
    _setPreventApplicationLaunching<R = void, P0 = boolean>(__setPreventApplicationLaunching: P0): R;
    _maxPresentedNotifications<R = number>(): R;
    _presentedAlerts<R = unknown>(): R;
    _displayedNotifications<R = unknown>(): R;
    deliveredNotifications<R = unknown>(): R;
    setScheduledNotifications<R = void, P0 = unknown>(_setScheduledNotifications: P0): R;
    scheduledNotifications<R = unknown>(): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    dealloc<R = void>(): R;
    _initWithBundleIdentifier_type<R = unknown, P0 = unknown, P1 = number>(__initWithBundleIdentifier: P0, _type: P1): R;
    bundleIdentifier<R = NSString>(): R;
    _appDelegate<R = _NSUserNotificationCenterAppKitDelegatePrivate>(): R;
    set_appDelegate<R = void, P0 = _NSUserNotificationCenterAppKitDelegatePrivate>(_v: P0): R;
  }
  namespace _NSConcreteUserNotificationCenter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSUserNotificationCenter {
      alloc<R = _NSConcreteUserNotificationCenter>(): R;
      new: <R = _NSConcreteUserNotificationCenter>() => R;
    }
  }
}
