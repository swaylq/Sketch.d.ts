/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSSubrangeData<T0 = void, T1 = void, T2 = void> extends NSData {
    dealloc<R = void>(): R;
    initWithData_range<R = unknown, P0 = unknown, P1 = _NSRange>(_initWithData: P0, _range: P1): R;
    init<R = unknown>(): R;
    getBytes_range<R = void, P0 = void, P1 = _NSRange>(_getBytes: P0, _range: P1): R;
    getBytes_length<R = void, P0 = void, P1 = number>(_getBytes: P0, _length: P1): R;
    getBytes<R = void, P0 = void>(_getBytes: P0): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    _isCompact<R = boolean>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace NSSubrangeData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {}
  }
}

declare const NSSubrangeData: cocoa.NSSubrangeData.CLASS;
