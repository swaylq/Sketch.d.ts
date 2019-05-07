/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFOutputStream<T0 = void, T1 = void, T2 = void> extends NSOutputStream {
    _unscheduleFromCFRunLoop_forMode<R = void, P0 = __CFRunLoop, P1 = __CFString>(__unscheduleFromCFRunLoop: P0, _forMode: P1): R;
    _scheduleInCFRunLoop_forMode<R = void, P0 = __CFRunLoop, P1 = __CFString>(__scheduleInCFRunLoop: P0, _forMode: P1): R;
    _setCFClientFlags_callback_context<R = boolean, P0 = number, P1 = CDUnknownFunctionPointerType, P2 = unknown>(__setCFClientFlags: P0, _callback: P1, _context: P2): R;
    hasSpaceAvailable<R = boolean>(): R;
    write_maxLength<R = number, P0 = string, P1 = number>(_write: P0, _maxLength: P1): R;
    streamError<R = unknown>(): R;
    streamStatus<R = number>(): R;
    removeFromRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_removeFromRunLoop: P0, _forMode: P1): R;
    scheduleInRunLoop_forMode<R = void, P0 = unknown, P1 = unknown>(_scheduleInRunLoop: P0, _forMode: P1): R;
    setProperty_forKey<R = boolean, P0 = unknown, P1 = unknown>(_setProperty: P0, _forKey: P1): R;
    propertyForKey<R = unknown, P0 = unknown>(_propertyForKey: P0): R;
    setDelegate<R = void, P0 = unknown>(_setDelegate: P0): R;
    delegate<R = unknown>(): R;
    close<R = void>(): R;
    open<R = void>(): R;
    initWithURL_append<R = unknown, P0 = unknown, P1 = boolean>(_initWithURL: P0, _append: P1): R;
    initToFileAtPath_append<R = unknown, P0 = unknown, P1 = boolean>(_initToFileAtPath: P0, _append: P1): R;
    initToBuffer_capacity<R = unknown, P0 = string, P1 = number>(_initToBuffer: P0, _capacity: P1): R;
    initToMemory<R = unknown>(): R;
    retainCount<R = number>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
  }
  namespace NSCFOutputStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSOutputStream {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFOutputStream: cocoa.NSCFOutputStream.CLASS;
