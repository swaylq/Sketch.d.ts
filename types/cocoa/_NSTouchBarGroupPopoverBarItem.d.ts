/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarGroupPopoverBarItem<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {}
  namespace _NSTouchBarGroupPopoverBarItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPopoverTouchBarItem {
      alloc<R = _NSTouchBarGroupPopoverBarItem>(): R;
      new: <R = _NSTouchBarGroupPopoverBarItem>() => R;
      keyPathsForValuesAffectingValueForKey<R = unknown, P0 = unknown>(_keyPathsForValuesAffectingValueForKey: P0): R;
    }
  }
}
