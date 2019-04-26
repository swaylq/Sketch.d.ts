/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickAction<T0 = void, T1 = void, T2 = void> extends NSObject {
    _presentation<R = _NSQuickActionPresentation>(): R;
  }
  namespace _NSQuickAction {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickAction>(): R;
      new: <R = _NSQuickAction>() => R;
    }
  }
}
