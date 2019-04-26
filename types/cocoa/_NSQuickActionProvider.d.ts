/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionProvider<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSQuickActionProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionProvider>(): R;
      new: <R = _NSQuickActionProvider>() => R;
      providerWithObserver_presentationMode<R = unknown, P0 = unknown, P1 = unknown>(_providerWithObserver: P0, _presentationMode: P1): R;
    }
  }
}
