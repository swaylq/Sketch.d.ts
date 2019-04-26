/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEncodingDetector<T0 = void, T1 = void, T2 = void> extends NSObject {
    recognizeString_withDataLength_intoBuffer<R = number, P0 = string, P1 = number, P2 = unknown>(_recognizeString: P0, _withDataLength: P1, _intoBuffer: P2): R;
    multiBytesRatio<R = number>(): R;
    confidenceWith2Chars<R = number>(): R;
    confidence<R = number>(): R;
    initWithNSStringEncoding_CFStringEncoding<R = unknown, P0 = number, P1 = number>(_initWithNSStringEncoding: P0, _CFStringEncoding: P1): R;
    maxSkipBytes<R = number>(): R;
    bytesRatio<R = number>(): R;
    softReset<R = void>(): R;
    reset<R = void>(): R;
    cfEncoding<R = number>(): R;
    nsEncoding<R = number>(): R;
  }
  namespace NSEncodingDetector {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSEncodingDetector>(): R;
      new: <R = NSEncodingDetector>() => R;
      detectorForCFStringEncoding_allowBackupDetectors<R = unknown, P0 = number, P1 = boolean>(_detectorForCFStringEncoding: P0, _allowBackupDetectors: P1): R;
      classForCFStringEncoding<R = unknown, P0 = number>(_classForCFStringEncoding: P0): R;
    }
  }
}

declare const NSEncodingDetector: cocoa.NSEncodingDetector.CLASS;
