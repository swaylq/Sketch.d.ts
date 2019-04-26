/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteFileHandle<T0 = void, T1 = void, T2 = void> extends NSFileHandle {
    _locked_clearHandler_forSource<R = void, P0 = CDUnknownBlockType, P1 = unknown>(__locked_clearHandler: P0, _forSource: P1): R;
    _monitor<R = unknown, P0 = number>(__monitor: P0): R;
    waitForDataInBackgroundAndNotify<R = void>(): R;
    waitForDataInBackgroundAndNotifyForModes<R = void, P0 = unknown>(_waitForDataInBackgroundAndNotifyForModes: P0): R;
    acceptConnectionInBackgroundAndNotify<R = void>(): R;
    acceptConnectionInBackgroundAndNotifyForModes<R = void, P0 = unknown>(_acceptConnectionInBackgroundAndNotifyForModes: P0): R;
    readToEndOfFileInBackgroundAndNotify<R = void>(): R;
    readToEndOfFileInBackgroundAndNotifyForModes<R = void, P0 = unknown>(_readToEndOfFileInBackgroundAndNotifyForModes: P0): R;
    readInBackgroundAndNotify<R = void>(): R;
    readInBackgroundAndNotifyForModes<R = void, P0 = unknown>(_readInBackgroundAndNotifyForModes: P0): R;
    performActivity_modes<R = void, P0 = number, P1 = unknown>(_performActivity: P0, _modes: P1): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    dealloc<R = void>(): R;
    setPort<R = void, P0 = unknown>(_setPort: P0): R;
    port<R = unknown>(): R;
    _cancelDispatchSources<R = void>(): R;
    offsetInFile<R = number>(): R;
    readDataOfLength_buffer<R = number, P0 = number, P1 = string>(_readDataOfLength: P0, _buffer: P1): R;
    availableData<R = unknown>(): R;
  }
  namespace NSConcreteFileHandle {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSFileHandle {
      alloc<R = NSConcreteFileHandle>(): R;
      new: <R = NSConcreteFileHandle>() => R;
    }
  }
}

declare const NSConcreteFileHandle: cocoa.NSConcreteFileHandle.CLASS;
