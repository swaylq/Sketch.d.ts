/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteMutableData<T0 = void, T1 = void, T2 = void> extends NSMutableData {
    _providesConcreteBacking<R = boolean>(): R;
    dealloc<R = void>(): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    initWithLength<R = unknown, P0 = number>(_initWithLength: P0): R;
    init<R = unknown>(): R;
    resetBytesInRange<R = void, P0 = _NSRange>(_resetBytesInRange: P0): R;
    replaceBytesInRange_withBytes<R = void, P0 = _NSRange, P1 = void>(_replaceBytesInRange: P0, _withBytes: P1): R;
    increaseLengthBy<R = void, P0 = number>(_increaseLengthBy: P0): R;
    appendData<R = void, P0 = unknown>(_appendData: P0): R;
    appendBytes_length<R = void, P0 = void, P1 = number>(_appendBytes: P0, _length: P1): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    _freeBytes<R = void>(): R;
    mutableBytes<R = void>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace NSConcreteMutableData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSMutableData {}
  }
}

declare const NSConcreteMutableData: cocoa.NSConcreteMutableData.CLASS;
