/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSConcreteData<T0 = void, T1 = void, T2 = void> extends NSData {
    _providesConcreteBacking<R = boolean>(): R;
    _createDispatchData<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithBytes_length_copy_freeWhenDone_bytesAreVM<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean>(_initWithBytes: P0, _length: P1, _copy: P2, _freeWhenDone: P3, _bytesAreVM: P4): R;
    initWithBytes_length_copy_deallocator<R = unknown, P0 = void, P1 = number, P2 = boolean, P3 = CDUnknownBlockType>(_initWithBytes: P0, _length: P1, _copy: P2, _deallocator: P3): R;
    init<R = unknown>(): R;
    getBytes_range<R = void, P0 = void, P1 = _NSRange>(_getBytes: P0, _range: P1): R;
    getBytes_length<R = void, P0 = void, P1 = number>(_getBytes: P0, _length: P1): R;
    getBytes<R = void, P0 = void>(_getBytes: P0): R;
    _isCompact<R = boolean>(): R;
    copyWithZone<R = unknown, P0 = _NSZone>(_copyWithZone: P0): R;
    _copyWillRetain<R = boolean>(): R;
    bytes<R = void>(): R;
    length<R = number>(): R;
  }
  namespace NSConcreteData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSData {}
  }
}

declare const NSConcreteData: cocoa.NSConcreteData.CLASS;
