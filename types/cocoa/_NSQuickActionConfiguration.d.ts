/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionConfiguration<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    save<R = void>(): R;
    setActive_forQuickAction<R = void, P0 = boolean, P1 = unknown>(_setActive: P0, _forQuickAction: P1): R;
    setOrderedQuickActions<R = void, P0 = unknown>(_setOrderedQuickActions: P0): R;
    initWithPresentation<R = unknown, P0 = unknown>(_initWithPresentation: P0): R;
  }
  namespace _NSQuickActionConfiguration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionConfiguration>(): R;
      new: <R = _NSQuickActionConfiguration>() => R;
    }
  }
}
