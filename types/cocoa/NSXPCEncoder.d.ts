/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCEncoder<T0 = void, T1 = void, T2 = void> extends NSXPCCoder {
    _encodeCString_length_forKey<R = void, P0 = string, P1 = number, P2 = unknown>(__encodeCString: P0, _length: P1, _forKey: P2): R;
    _encodeArrayOfObjects_forKey<R = void, P0 = unknown, P1 = unknown>(__encodeArrayOfObjects: P0, _forKey: P1): R;
    _encodeInvocationObjectArgumentsOnly_count_typeString_selector_isReply_into<R = void, P0 = unknown, P1 = number, P2 = string, P3 = string, P4 = boolean, P5 = unknown>(__encodeInvocationObjectArgumentsOnly: P0, _count: P1, _typeString: P2, _selector: P3, _isReply: P4, _into: P5): R;
    _encodeInvocation_isReply_into<R = void, P0 = unknown, P1 = boolean, P2 = unknown>(__encodeInvocation: P0, _isReply: P1, _into: P2): R;
    _newRootXPCObject<R = unknown>(): R;
    _startTopLevelDictionary<R = void>(): R;
    _encodeUnkeyedObject<R = void, P0 = unknown>(__encodeUnkeyedObject: P0): R;
    _encodeObject<R = void, P0 = unknown>(__encodeObject: P0): R;
    _checkObject<R = void, P0 = unknown>(__checkObject: P0): R;
    _replaceObject<R = unknown, P0 = unknown>(__replaceObject: P0): R;
    debugDescription<R = unknown>(): R;
    initWithStackSpace_size<R = unknown, P0 = string, P1 = number>(_initWithStackSpace: P0, _size: P1): R;
    connection<R = unknown>(): R;
    delegate<R = NSXPCEncoderDelegate>(): R;
    setDelegate<R = void, P0 = NSXPCEncoderDelegate>(_v: P0): R;
    _connection<R = NSXPCConnection>(): R;
    set_connection<R = void, P0 = NSXPCConnection>(_v: P0): R;
  }
  namespace NSXPCEncoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXPCCoder {
      alloc<R = NSXPCEncoder>(): R;
      new: <R = NSXPCEncoder>() => R;
    }
  }
}

declare const NSXPCEncoder: cocoa.NSXPCEncoder.CLASS;
