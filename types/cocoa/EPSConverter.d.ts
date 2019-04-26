/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface EPSConverter<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    converterReleased<R = void>(): R;
    converterMessage<R = void, P0 = unknown>(_converterMessage: P0): R;
    converterProgress<R = void>(): R;
    endPageNumber_info<R = void, P0 = number, P1 = unknown>(_endPageNumber: P0, _info: P1): R;
    beginPageNumber_info<R = void, P0 = number, P1 = unknown>(_beginPageNumber: P0, _info: P1): R;
    endDocumentSucceeded<R = void, P0 = boolean>(_endDocumentSucceeded: P0): R;
    beginDocument<R = void>(): R;
    convertEPSWithProvider_consumer<R = boolean, P0 = CGDataProvider, P1 = CGDataConsumer>(_convertEPSWithProvider: P0, _consumer: P1): R;
    convertEPSAtURL_progressBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_convertEPSAtURL: P0, _progressBlock: P1): R;
    convertEPSData_progressBlock<R = unknown, P0 = unknown, P1 = CDUnknownBlockType>(_convertEPSData: P0, _progressBlock: P1): R;
    convertEPSAtURL_toURL_progressBlock<R = void, P0 = unknown, P1 = unknown, P2 = CDUnknownBlockType>(_convertEPSAtURL: P0, _toURL: P1, _progressBlock: P2): R;
    progressBlock<R = CDUnknownBlockType>(): R;
    setProgressBlock<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace EPSConverter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = EPSConverter>(): R;
      new: <R = EPSConverter>() => R;
    }
  }
}

declare const EPSConverter: cocoa.EPSConverter.CLASS;
