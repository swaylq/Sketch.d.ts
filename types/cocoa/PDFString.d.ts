/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface PDFString<T0 = void, T1 = void, T2 = void> extends NSObject {
    stringWithMap<R = unknown, P0 = unknown>(_stringWithMap: P0): R;
    data<R = unknown>(): R;
    string<R = unknown>(): R;
    initWithStringRef<R = unknown, P0 = CGPDFString>(_initWithStringRef: P0): R;
    ref<R = CGPDFString>(): R;
    setRef<R = void, P0 = CGPDFString>(_v: P0): R;
  }
  namespace PDFString {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = PDFString>(): R;
      new: <R = PDFString>() => R;
    }
  }
}

declare const PDFString: cocoa.PDFString.CLASS;
