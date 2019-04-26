/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPDFImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    pageCount<R = number>(): R;
    currentPage<R = number>(): R;
    setCurrentPage<R = void, P0 = number>(_v: P0): R;
    bounds<R = CGRect>(): R;
    PDFRepresentation<R = NSData>(): R;
    // + NSPDFImageRep(Alpha): 
    repSupportsAlpha<R = boolean>(): R;
    // + NSPDFImageRep(MSSmallerArchiving): 
    dataForArchiving<R = unknown>(): R;
    hasPDFRepresentation<R = boolean>(): R;
  }
  namespace NSPDFImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSPDFImageRep>(): R;
      new: <R = NSPDFImageRep>() => R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
  
  }
  }
}

declare const NSPDFImageRep: cocoa.NSPDFImageRep.CLASS;
