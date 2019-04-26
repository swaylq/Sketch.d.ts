/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPICTImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    bitsPerSample<R = number>(): R;
    setBitsPerSample<R = void, P0 = number>(_setBitsPerSample: P0): R;
    isOpaque<R = boolean>(): R;
    setOpaque<R = void, P0 = boolean>(_setOpaque: P0): R;
    hasAlpha<R = boolean>(): R;
    setAlpha<R = void, P0 = boolean>(_setAlpha: P0): R;
    initWithData<R = unknown, P0 = unknown>(_initWithData: P0): R;
    _common64BitInit<R = boolean>(): R;
    newBitmapImageRepForHeight_width_data<R = unknown, P0 = number, P1 = number, P2 = unknown>(_newBitmapImageRepForHeight: P0, _width: P1, _data: P2): R;
    bitmapImageRecordForPICTData<R = unknown, P0 = unknown>(_bitmapImageRecordForPICTData: P0): R;
    PICTRepresentation<R = NSData>(): R;
    boundingBox<R = CGRect>(): R;
  }
  namespace NSPICTImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSPICTImageRep>(): R;
      new: <R = NSPICTImageRep>() => R;
      _imageDataFromPICTData_toType<R = unknown, P0 = unknown, P1 = unknown>(__imageDataFromPICTData: P0, _toType: P1): R;
      _PICTDataFromImageData_ofType<R = unknown, P0 = unknown, P1 = unknown>(__PICTDataFromImageData: P0, _ofType: P1): R;
      _verifyDataIsPICT<R = boolean, P0 = unknown>(__verifyDataIsPICT: P0): R;
      imageRepWithData<R = unknown, P0 = unknown>(_imageRepWithData: P0): R;
    }
  }
}

declare const NSPICTImageRep: cocoa.NSPICTImageRep.CLASS;
