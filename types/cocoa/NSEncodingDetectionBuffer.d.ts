/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEncodingDetectionBuffer<T0 = void, T1 = void, T2 = void> extends NSObject {
    stringWithLossySubsitutionString<R = unknown, P0 = unknown>(_stringWithLossySubsitutionString: P0): R;
    appendBytes_count<R = void, P0 = string, P1 = number>(_appendBytes: P0, _count: P1): R;
    appendPlaceholder<R = void>(): R;
    appendByte1_byte2_byte3_byte4<R = void, P0 = number, P1 = number, P2 = number, P3 = number>(_appendByte1: P0, _byte2: P1, _byte3: P2, _byte4: P3): R;
    appendUTF32Char<R = void, P0 = number>(_appendUTF32Char: P0): R;
    appendUTF16Char<R = void, P0 = number>(_appendUTF16Char: P0): R;
    appendByte1_byte2_byte3<R = void, P0 = number, P1 = number, P2 = number>(_appendByte1: P0, _byte2: P1, _byte3: P2): R;
    appendByte1_byte2<R = void, P0 = number, P1 = number>(_appendByte1: P0, _byte2: P1): R;
    appendByte<R = void, P0 = number>(_appendByte: P0): R;
    _growBufferIfNeededToAccomodateByteCount<R = boolean, P0 = number>(__growBufferIfNeededToAccomodateByteCount: P0): R;
    dealloc<R = void>(): R;
    initWithNSStringEncoding_CFStringEncoding_stackBuffer_bufferLength_placeholder<R = unknown, P0 = number, P1 = number, P2 = string, P3 = number, P4 = unknown>(_initWithNSStringEncoding: P0, _CFStringEncoding: P1, _stackBuffer: P2, _bufferLength: P3, _placeholder: P4): R;
  }
  namespace NSEncodingDetectionBuffer {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSEncodingDetectionBuffer>(): R;
      new: <R = NSEncodingDetectionBuffer>() => R;
    }
  }
}

declare const NSEncodingDetectionBuffer: cocoa.NSEncodingDetectionBuffer.CLASS;
