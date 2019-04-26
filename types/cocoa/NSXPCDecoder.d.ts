/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSXPCDecoder<T0 = void, T1 = void, T2 = void> extends NSXPCCoder {
    _decodeCStringForKey<R = string, P0 = unknown>(__decodeCStringForKey: P0): R;
    _decodeArrayOfObjectsForKey<R = unknown, P0 = unknown>(__decodeArrayOfObjectsForKey: P0): R;
    __decodeXPCObject_allowingSimpleMessageSend_outInvocation_outArguments_outArgumentsMaxCount_outMethodSignature_outSelector_isReply_replySelector_interface<R = number, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = number, P5 = unknown, P6 = string, P7 = boolean, P8 = string, P9 = unknown>(___decodeXPCObject: P0, _allowingSimpleMessageSend: P1, _outInvocation: P2, _outArguments: P3, _outArgumentsMaxCount: P4, _outMethodSignature: P5, _outSelector: P6, _isReply: P7, _replySelector: P8, _interface: P9): R;
    _decodeReplyFromXPCObject_forSelector_interface<R = unknown, P0 = unknown, P1 = string, P2 = unknown>(__decodeReplyFromXPCObject: P0, _forSelector: P1, _interface: P2): R;
    _decodeMessageFromXPCObject_allowingSimpleMessageSend_outInvocation_outArguments_outArgumentsMaxCount_outMethodSignature_outSelector_interface<R = number, P0 = unknown, P1 = boolean, P2 = unknown, P3 = unknown, P4 = number, P5 = unknown, P6 = string, P7 = unknown>(__decodeMessageFromXPCObject: P0, _allowingSimpleMessageSend: P1, _outInvocation: P2, _outArguments: P3, _outArgumentsMaxCount: P4, _outMethodSignature: P5, _outSelector: P6, _interface: P7): R;
    _decodeObjectOfClasses_atObject<R = unknown, P0 = unknown, P1 = unknown>(__decodeObjectOfClasses: P0, _atObject: P1): R;
    debugDescription<R = unknown>(): R;
    _startReadingFromXPCObject<R = void, P0 = unknown>(__startReadingFromXPCObject: P0): R;
    connection<R = unknown>(): R;
    _connection<R = NSXPCConnection>(): R;
    set_connection<R = void, P0 = NSXPCConnection>(_v: P0): R;
  }
  namespace NSXPCDecoder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSXPCCoder {
      alloc<R = NSXPCDecoder>(): R;
      new: <R = NSXPCDecoder>() => R;
    }
  }
}

declare const NSXPCDecoder: cocoa.NSXPCDecoder.CLASS;
