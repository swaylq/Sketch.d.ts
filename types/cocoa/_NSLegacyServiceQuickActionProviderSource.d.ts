/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickActionProviderSource<T0 = void, T1 = void, T2 = void> extends NSObject, NSServicesMonitorObserverProtocol, _NSQuickActionProviderSourceProtocol {}
  namespace _NSLegacyServiceQuickActionProviderSource {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSServicesMonitorObserverProtocol, _NSQuickActionProviderSourceProtocol {
      alloc<R = _NSLegacyServiceQuickActionProviderSource>(): R;
      new: <R = _NSLegacyServiceQuickActionProviderSource>() => R;
      automaticallyNotifiesObserversOfQuickActions<R = boolean>(): R;
    }
  }
}
