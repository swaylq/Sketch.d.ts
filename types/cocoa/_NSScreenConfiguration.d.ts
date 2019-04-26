/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSScreenConfiguration<T0 = void, T1 = void, T2 = void> extends NSObject {}
  namespace _NSScreenConfiguration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSScreenConfiguration>(): R;
      new: <R = _NSScreenConfiguration>() => R;
      latestGreatestBackingScaleFactor<R = number>(): R;
      latestZeroScreenIsNew<R = boolean>(): R;
      latestZeroScreenHeight<R = number>(): R;
      latestScreens<R = unknown>(): R;
      invalidateConfigurationIfNeededForReason<R = boolean, P0 = number>(_invalidateConfigurationIfNeededForReason: P0): R;
      invalidateConfigurationForReason<R = void, P0 = number>(_invalidateConfigurationForReason: P0): R;
      prepare<R = void>(): R;
    }
  }
}
