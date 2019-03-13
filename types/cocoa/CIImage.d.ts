/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface CIImage<T = any> {
    // + CIImage(NSAppKitAdditions,CHCIImageAdditions):
    drawAtPoint_fromRect_operation_fraction<R = void, P0 = CGPoint, P1 = CGRect, P2 = number, P3 = number>(_drawAtPoint: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    drawInRect_fromRect_operation_fraction<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3): R;
    drawInRect_fromRect_operation_fraction_respectFlipped<R = void, P0 = CGRect, P1 = CGRect, P2 = number, P3 = number, P4 = boolean>(_drawInRect: P0, _fromRect: P1, _operation: P2, _fraction: P3, _respectFlipped: P4): R;
    initWithBitmapImageRep<R = unknown, P0 = unknown>(_initWithBitmapImageRep: P0): R;
    imageByFlippingVertically<R = unknown>(): R;
    PNGRepresentationWithInterlaced<R = unknown, P0 = boolean>(_PNGRepresentationWithInterlaced: P0): R;
  }
  namespace classes {
    export interface CIImage<T = any> {
      // + CIImage(NSAppKitAdditions,CHCIImageAdditions):
      
    }
  }
}

declare const CIImage: cocoa.classes.CIImage;
