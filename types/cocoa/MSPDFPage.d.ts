/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPDFPage<T0 = void, T1 = void, T2 = void> extends NSObject {
    dealloc<R = void>(): R;
    initWithPDFData<R = unknown, P0 = unknown>(_initWithPDFData: P0): R;
    size<R = CGSize>(): R;
    pageRef<R = CGPDFPage>(): R;
  }
  namespace MSPDFPage {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = MSPDFPage>(): R;
      new: <R = MSPDFPage>() => R;
    }
  }
}

declare const MSPDFPage: cocoa.MSPDFPage.CLASS;
