/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionProviderSourceProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    cancel<R = void>(): R;
    quickActions<R = NSSet>(): R;
  }
  namespace _NSQuickActionProviderSourceProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
