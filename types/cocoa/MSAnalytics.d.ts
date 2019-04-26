/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAnalytics<T0 = void, T1 = void, T2 = void> extends BCSingleton, MSActionObserverProtocol {
    cxx_destruct<R = void>(): R;
    trackEvent_withInterval_conditional<R = void, P0 = unknown, P1 = number, P2 = CDUnknownBlockType>(_trackEvent: P0, _withInterval: P1, _conditional: P2): R;
    trackEvent_withValue<R = void, P0 = unknown, P1 = unknown>(_trackEvent: P0, _withValue: P1): R;
    trackScreenWithName<R = void, P0 = unknown>(_trackScreenWithName: P0): R;
    stopTracking<R = void>(): R;
    sendAppInfo<R = void>(): R;
    startTracking<R = void>(): R;
    googleAnalytics<R = MSGoogleAnalyticsWrapper>(): R;
    setGoogleAnalytics<R = void, P0 = MSGoogleAnalyticsWrapper>(_v: P0): R;
    monthlyTimer<R = NSTimer>(): R;
    setMonthlyTimer<R = void, P0 = NSTimer>(_v: P0): R;
    weeklyTimer<R = NSTimer>(): R;
    setWeeklyTimer<R = void, P0 = NSTimer>(_v: P0): R;
    dailyTimer<R = NSTimer>(): R;
    setDailyTimer<R = void, P0 = NSTimer>(_v: P0): R;
    hourlyTimer<R = NSTimer>(): R;
    setHourlyTimer<R = void, P0 = NSTimer>(_v: P0): R;
    isEnabled<R = boolean>(): R;
    setIsEnabled<R = void, P0 = boolean>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAnalytics {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends BCSingleton, MSActionObserverProtocol {}
  }
}

declare const MSAnalytics: cocoa.MSAnalytics.CLASS;
