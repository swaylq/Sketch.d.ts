/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFStream<T0 = void, T1 = void, T2 = void> extends NSObject {
    cxx_destruct<R = void>(): R;
    description<R = unknown>(): R;
    getDataAndFormat<R = void>(): R;
    initWithStream<R = unknown, P0 = CGPDFStream>(_initWithStream: P0): R;
    data<R = NSData>(): R;
    setData<R = void, P0 = NSData>(_v: P0): R;
    format<R = number>(): R;
    setFormat<R = void, P0 = number>(_v: P0): R;
    dictionary<R = NSDictionary>(): R;
    setDictionary<R = void, P0 = NSDictionary>(_v: P0): R;
    stream<R = CGPDFStream>(): R;
    setStream<R = void, P0 = CGPDFStream>(_v: P0): R;
  }
  namespace PDFStream {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = PDFStream>(): R;
      new: <R = PDFStream>() => R;
    }
  }
}

declare const PDFStream: cocoa.PDFStream.CLASS;
