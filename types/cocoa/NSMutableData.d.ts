/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSMutableData<T0 = void, T1 = void, T2 = void> {
    // + NSMutableData(NSMutableData): 
    initWithLength<R = unknown, P0 = number>(_initWithLength: P0): R;
    initWithCapacity<R = unknown, P0 = number>(_initWithCapacity: P0): R;
    setData<R = void, P0 = unknown>(_setData: P0): R;
    resetBytesInRange<R = void, P0 = _NSRange>(_resetBytesInRange: P0): R;
    replaceBytesInRange_withBytes<R = void, P0 = _NSRange, P1 = void>(_replaceBytesInRange: P0, _withBytes: P1): R;
    increaseLengthBy<R = void, P0 = number>(_increaseLengthBy: P0): R;
    appendData<R = void, P0 = unknown>(_appendData: P0): R;
    appendBytes_length<R = void, P0 = void, P1 = number>(_appendBytes: P0, _length: P1): R;
    replaceBytesInRange_withBytes_length<R = void, P0 = _NSRange, P1 = void, P2 = number>(_replaceBytesInRange: P0, _withBytes: P1, _length: P2): R;
    _isCompact<R = boolean>(): R;
    classForCoder<R = unknown>(): R;
    setLength<R = void, P0 = number>(_setLength: P0): R;
    mutableBytes<R = void>(): R;
    // + NSMutableData(NSMutableDataObjcTypeSerialization): 
    serializeDataAt_ofObjCType_context<R = void, P0 = void, P1 = string, P2 = unknown>(_serializeDataAt: P0, _ofObjCType: P1, _context: P2): R;
    // + NSMutableData(NSSerialization): 
    serializeAlignedBytes_length<R = void, P0 = void, P1 = number>(_serializeAlignedBytes: P0, _length: P1): R;
    serializeAlignedBytesLength<R = void, P0 = number>(_serializeAlignedBytesLength: P0): R;
    serializeInts_count_atIndex<R = void, P0 = number, P1 = number, P2 = number>(_serializeInts: P0, _count: P1, _atIndex: P2): R;
    serializeInt_atIndex<R = void, P0 = number, P1 = number>(_serializeInt: P0, _atIndex: P1): R;
    serializeInts_count<R = void, P0 = number, P1 = number>(_serializeInts: P0, _count: P1): R;
    serializeInt<R = void, P0 = number>(_serializeInt: P0): R;
  }
  namespace NSMutableData {
    export interface CLASS<T0 = void, T1 = void, T2 = void> {
      // + NSMutableData(NSMutableData): 
      dataWithLength<R = unknown, P0 = number>(_dataWithLength: P0): R;
      dataWithCapacity<R = unknown, P0 = number>(_dataWithCapacity: P0): R;
      allocWithZone<R = unknown, P0 = _NSZone>(_allocWithZone: P0): R;
    }
  }
}

declare const NSMutableData: cocoa.NSMutableData.CLASS;
