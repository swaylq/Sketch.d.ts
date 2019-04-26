/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLegacyServiceQuickAction<T0 = void, T1 = void, T2 = void> extends _NSQuickAction {}
  namespace _NSLegacyServiceQuickAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends _NSQuickAction {
      alloc<R = _NSLegacyServiceQuickAction>(): R;
      new: <R = _NSLegacyServiceQuickAction>() => R;
      quickActionForPresentation_serviceAction<R = unknown, P0 = unknown, P1 = unknown>(_quickActionForPresentation: P0, _serviceAction: P1): R;
    }
  }
}
