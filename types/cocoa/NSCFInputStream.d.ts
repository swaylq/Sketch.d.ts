/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCFInputStream<T0 = void, T1 = void, T2 = void> extends NSInputStream {
    _unscheduleFromCFRunLoop_forMode<R = void, P0 = __CFRunLoop, P1 = __CFString>(__unscheduleFromCFRunLoop: P0, _forMode: P1): R;
    _scheduleInCFRunLoop_forMode<R = void, P0 = __CFRunLoop, P1 = __CFString>(__scheduleInCFRunLoop: P0, _forMode: P1): R;
    _setCFClientFlags_callback_context<R = boolean, P0 = number, P1 = CDUnknownFunctionPointerType, P2 = unknown>(__setCFClientFlags: P0, _callback: P1, _context: P2): R;
    hasBytesAvailable<R = boolean>(): R;
    getBuffer_length<R = boolean, P0 = string, P1 = number>(_getBuffer: P0, _length: P1): R;
    read_maxLength<R = number, P0 = string, P1 = number>(_read: P0, _maxLength: P1): R;
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
    initWithURL<R = unknown, P0 = unknown>(_initWithURL: P0): R;
    initWithFileAtPath<R = unknown, P0 = unknown>(_initWithFileAtPath: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    retainCount<R = number>(): R;
    retainWeakReference<R = boolean>(): R;
    allowsWeakReference<R = boolean>(): R;
    release<R = void>(): R;
    retain<R = unknown>(): R;
    hash<R = number>(): R;
    isEqual<R = boolean, P0 = unknown>(_isEqual: P0): R;
  }
  namespace NSCFInputStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSInputStream {
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
      automaticallyNotifiesObserversForKey<R = boolean, P0 = unknown>(_automaticallyNotifiesObserversForKey: P0): R;
    }
  }
}

declare const NSCFInputStream: cocoa.NSCFInputStream.CLASS;
