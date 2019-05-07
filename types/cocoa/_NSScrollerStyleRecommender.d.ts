/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScrollerStyleRecommender<T0 = void, T1 = void, T2 = void> extends NSObject, NSMachPortDelegateProtocol {
    dealloc<R = void>(): R;
    _cleanup<R = void>(): R;
    pointingDeviceGestureScrollSettingChanged<R = void, P0 = unknown>(_pointingDeviceGestureScrollSettingChanged: P0): R;
    showScrollBarsSettingChanged<R = void, P0 = unknown>(_showScrollBarsSettingChanged: P0): R;
    noteSessionDevicesChanged<R = void>(): R;
    scheduleScrollerStyleRecommendationUpdate<R = void, P0 = number>(_scheduleScrollerStyleRecommendationUpdate: P0): R;
    cancelScrollerStyleRecommendationUpdate<R = void>(): R;
    scrollerStyleRecommendationUpdateTimerFired<R = void, P0 = unknown>(_scrollerStyleRecommendationUpdateTimerFired: P0): R;
    setRecommendedScrollerStyleAndNotify<R = void, P0 = number>(_setRecommendedScrollerStyleAndNotify: P0): R;
    recommendedScrollerStyle<R = number>(): R;
    stopListeningForUserPreferenceNotifications<R = void>(): R;
    startListeningForUserPreferenceNotifications<R = void>(): R;
    stopListeningForPointingDeviceConnectAndDisconnect<R = void>(): R;
    startListeningForPointingDeviceConnectAndDisconnect<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSScrollerStyleRecommender {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMachPortDelegateProtocol {
      alloc<R = _NSScrollerStyleRecommender>(): R;
      new: <R = _NSScrollerStyleRecommender>() => R;
      sharedScrollerStyleRecommender<R = unknown>(): R;
    }
  }
}
