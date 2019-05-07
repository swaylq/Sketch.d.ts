/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSStandardSliderAccessoryBehavior<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
    _hasStepBehaviorInContainer<R = boolean, P0 = unknown>(__hasStepBehaviorInContainer: P0): R;
    hash<R = number>(): R;
    initWithStandardBehavior<R = unknown, P0 = number>(_initWithStandardBehavior: P0): R;
    behavior<R = number>(): R;
  }
  namespace _NSStandardSliderAccessoryBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
      alloc<R = _NSStandardSliderAccessoryBehavior>(): R;
      new: <R = _NSStandardSliderAccessoryBehavior>() => R;
    }
  }
}
