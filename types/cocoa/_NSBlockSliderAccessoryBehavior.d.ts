/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBlockSliderAccessoryBehavior<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
    dealloc<R = void>(): R;
    initWithHandler<R = unknown, P0 = CDUnknownBlockType>(_initWithHandler: P0): R;
    handler<R = CDUnknownBlockType>(): R;
  }
  namespace _NSBlockSliderAccessoryBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSSliderAccessoryBehavior {
      alloc<R = _NSBlockSliderAccessoryBehavior>(): R;
      new: <R = _NSBlockSliderAccessoryBehavior>() => R;
    }
  }
}
