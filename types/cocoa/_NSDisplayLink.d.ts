/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSDisplayLink<T0 = void, T1 = void, T2 = void> extends NSDisplayLink {
    setPaused<R = void, P0 = boolean>(_setPaused: P0): R;
    isPaused<R = boolean>(): R;
    isValid<R = boolean>(): R;
    _schedule<R = void>(): R;
    _fire<R = void>(): R;
    dealloc<R = void>(): R;
    initWithDisplayTiming_handler<R = unknown, P0 = CDUnknownBlockType, P1 = CDUnknownBlockType>(_initWithDisplayTiming: P0, _handler: P1): R;
  }
  namespace _NSDisplayLink {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSDisplayLink {
      alloc<R = _NSDisplayLink>(): R;
      new: <R = _NSDisplayLink>() => R;
    }
  }
}
