/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSQuickActionPresentation<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSQuickActionPresentation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSQuickActionPresentation>(): R;
      new: <R = _NSQuickActionPresentation>() => R;
      presentationForMode<R = unknown, P0 = unknown>(_presentationForMode: P0): R;
    }
  }
}
