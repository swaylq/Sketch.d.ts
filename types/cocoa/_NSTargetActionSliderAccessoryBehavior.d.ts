/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTargetActionSliderAccessoryBehavior<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
    action<R = string>(): R;
  }
  namespace _NSTargetActionSliderAccessoryBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
      alloc<R = _NSTargetActionSliderAccessoryBehavior>(): R;
      new: <R = _NSTargetActionSliderAccessoryBehavior>() => R;
    }
  }
}
