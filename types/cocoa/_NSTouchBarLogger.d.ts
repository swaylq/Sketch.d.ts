/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSTouchBarLogger<T0 = void, T1 = void, T2 = void> extends NSObject {
    addLogInfo_type<R = void, P0 = unknown, P1 = unknown>(_addLogInfo: P0, _type: P1): R;
    connection<R = unknown>(): R;
    dealloc<R = void>(): R;
  }
  namespace _NSTouchBarLogger {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = _NSTouchBarLogger>(): R;
      new: <R = _NSTouchBarLogger>() => R;
      addLogMessage<R = void, P0 = unknown>(_addLogMessage: P0): R;
      sharedTouchBarLogger<R = unknown>(): R;
      listenForHotKey<R = void>(): R;
    }
  }
}
