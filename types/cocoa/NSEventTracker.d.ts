/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEventTracker<T0 = void, T1 = void, T2 = void> extends NSObject {
    trackEvent_usingHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_trackEvent: P0, _usingHandler: P1): R;
    dealloc<R = void>(): R;
    modifierFlags<R = number>(): R;
    setModifierFlags<R = void, P0 = number>(_v: P0): R;
    phase<R = number>(): R;
    setPhase<R = void, P0 = number>(_v: P0): R;
    deviceID<R = number>(): R;
    setDeviceID<R = void, P0 = number>(_v: P0): R;
    currentEvent<R = NSEvent>(): R;
    setCurrentEvent<R = void, P0 = NSEvent>(_v: P0): R;
    wantsKeyboardEvents<R = boolean>(): R;
    setWantsKeyboardEvents<R = void, P0 = boolean>(_v: P0): R;
    wantsPeriodicCallbacks<R = boolean>(): R;
    setWantsPeriodicCallbacks<R = void, P0 = boolean>(_v: P0): R;
    wantsEventCoalescing<R = boolean>(): R;
    setWantsEventCoalescing<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace NSEventTracker {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSEventTracker>(): R;
      new: <R = NSEventTracker>() => R;
    }
  }
}

declare const NSEventTracker: cocoa.NSEventTracker.CLASS;
