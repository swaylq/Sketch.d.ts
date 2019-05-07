/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSEPSImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    prepareGState<R = void>(): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    EPSRepresentation<R = NSData>(): R;
    boundingBox<R = CGRect>(): R;
    // + NSEPSImageRep(Alpha): 
    repSupportsAlpha<R = boolean>(): R;
    // + NSEPSImageRep(MSSmallerArchiving): 
    dataForArchiving<R = unknown>(): R;
    hasEPSRepresentation<R = boolean>(): R;
    // + NSEPSImageRep(PDFData): 
    PDFRepresentation_ms<R = unknown>(): R;
  }
  namespace NSEPSImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSEPSImageRep>(): R;
      new: <R = NSEPSImageRep>() => R;
      _imagesFromIcon_inApp_zone<R = unknown, P0 = unknown, P1 = unknown, P2 = _NSZone>(__imagesFromIcon: P0, _inApp: P1, _zone: P2): R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
  
  }
  }
}

declare const NSEPSImageRep: cocoa.NSEPSImageRep.CLASS;
