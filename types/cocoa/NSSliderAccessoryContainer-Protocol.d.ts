/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderAccessoryContainerProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    _incrementValue<R = void, P0 = boolean>(__incrementValue: P0): R;
    sendAction<R = void>(): R;
    _hasStepBehaviorContext<R = boolean>(): R;
    maximumValueAccessory<R = NSSliderAccessory>(): R;
    minimumValueAccessory<R = NSSliderAccessory>(): R;
    incrementValue<R = number>(): R;
    setIncrementValue<R = void, P0 = number>(_v: P0): R;
    maximumValue<R = number>(): R;
    setMaximumValue<R = void, P0 = number>(_v: P0): R;
    minimumValue<R = number>(): R;
    setMinimumValue<R = void, P0 = number>(_v: P0): R;
    value<R = number>(): R;
    setValue<R = void, P0 = number>(_v: P0): R;
  }
  namespace NSSliderAccessoryContainerProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
