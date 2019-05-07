/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSliderAccessoryBehavior<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
    repeatsOnLongPressForAccessory<R = boolean, P0 = unknown>(_repeatsOnLongPressForAccessory: P0): R;
    handleAction<R = void, P0 = unknown>(_handleAction: P0): R;
  }
  namespace NSSliderAccessoryBehavior {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol, NSCopyingProtocol {
      alloc<R = NSSliderAccessoryBehavior>(): R;
      new: <R = NSSliderAccessoryBehavior>() => R;
      behaviorWithTarget_action<R = unknown, P0 = unknown, P1 = string>(_behaviorWithTarget: P0, _action: P1): R;
      behaviorWithHandler<R = unknown, P0 = CDUnknownBlockType>(_behaviorWithHandler: P0): R;
      valueResetBehavior<R = unknown>(): R;
      valueStepBehavior<R = unknown>(): R;
      automaticBehavior<R = unknown>(): R;
    }
  }
}

declare const NSSliderAccessoryBehavior: cocoa.NSSliderAccessoryBehavior.CLASS;
