/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPressureConfiguration<T0 = void, T1 = void, T2 = void> extends NSObject {
    _mtConfiguration<R = unknown>(): R;
    _mtBehaviorID<R = number>(): R;
    set<R = void>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    description<R = unknown>(): R;
    initWithPressureBehavior<R = unknown, P0 = number>(_initWithPressureBehavior: P0): R;
    pressureBehavior<R = number>(): R;
  }
  namespace NSPressureConfiguration {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSPressureConfiguration>(): R;
      new: <R = NSPressureConfiguration>() => R;
      _mtConfigurationForGestureBehaviors<R = unknown, P0 = unknown>(__mtConfigurationForGestureBehaviors: P0): R;
      _mtBehaviorIDForPressureBehavior<R = number, P0 = number>(__mtBehaviorIDForPressureBehavior: P0): R;
    }
  }
}

declare const NSPressureConfiguration: cocoa.NSPressureConfiguration.CLASS;
