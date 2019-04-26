/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAffineTransform<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    debugDescription<R = unknown>(): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    transformSize<R = CGSize, P0 = CGSize>(_transformSize: P0): R;
    transformPoint<R = CGPoint, P0 = CGPoint>(_transformPoint: P0): R;
    prependTransform<R = void, P0 = unknown>(_prependTransform: P0): R;
    appendTransform<R = void, P0 = unknown>(_appendTransform: P0): R;
    invert<R = void>(): R;
    scaleXBy_yBy<R = void, P0 = number, P1 = number>(_scaleXBy: P0, _yBy: P1): R;
    scaleBy<R = void, P0 = number>(_scaleBy: P0): R;
    rotateByRadians<R = void, P0 = number>(_rotateByRadians: P0): R;
    rotateByDegrees<R = void, P0 = number>(_rotateByDegrees: P0): R;
    translateXBy_yBy<R = void, P0 = number, P1 = number>(_translateXBy: P0, _yBy: P1): R;
    hash<R = number>(): R;
    initWithTransform<R = unknown, P0 = unknown>(_initWithTransform: P0): R;
    transformStruct<R = unknown>(): R;
    setTransformStruct<R = void, P0 = unknown>(_v: P0): R;
    // + NSAffineTransform(NSAppKitAdditions): 
    concat<R = void>(): R;
    set<R = void>(): R;
    transformBezierPath<R = unknown, P0 = unknown>(_transformBezierPath: P0): R;
    // + NSAffineTransform(CHAffineTransform_Additions): 
    CGAffineTransform_ms<R = CGAffineTransform>(): R;
    invertedTransform<R = unknown>(): R;
    transactionWithBlock<R = void, P0 = CDUnknownBlockType>(_transactionWithBlock: P0): R;
    rotateWithDegrees_aroundPoint<R = void, P0 = number, P1 = CGPoint>(_rotateWithDegrees: P0, _aroundPoint: P1): R;
    translateByOffset<R = void, P0 = CGPoint>(_translateByOffset: P0): R;
    // + NSAffineTransform(NSAppKitAdditionsPrivate):
    CGAffineTransform<R = CGAffineTransform>(): R;
    setCGAffineTransform<R = void, P0 = CGAffineTransform>(_v: P0): R;
    // + NSAffineTransform(CHAffineTransform_Additions):
    includesFlip<R = boolean>(): R;
    determinant<R = number>(): R;
  }
  namespace NSAffineTransform {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSAffineTransform>(): R;
      new: <R = NSAffineTransform>() => R;
      transform<R = unknown>(): R;
      // + NSAffineTransform(NSAppKitAdditionsPrivate): 
      transformWithCGAffineTransform<R = unknown, P0 = CGAffineTransform>(_transformWithCGAffineTransform: P0): R;
      // + NSAffineTransform(CHAffineTransform_Additions): 
      transformWithCGAffineTransform_ms<R = unknown, P0 = CGAffineTransform>(_transformWithCGAffineTransform_ms: P0): R;
      transformFromStruct_aroundPoint_inPlace<R = unknown, P0 = _CHTransformStruct, P1 = CGPoint, P2 = boolean>(_transformFromStruct: P0, _aroundPoint: P1, _inPlace: P2): R;
      transformFromStruct_aroundPoint<R = unknown, P0 = _CHTransformStruct, P1 = CGPoint>(_transformFromStruct: P0, _aroundPoint: P1): R;
      rotationTransformWithDegrees_aroundPoint<R = unknown, P0 = number, P1 = CGPoint>(_rotationTransformWithDegrees: P0, _aroundPoint: P1): R;
      transformWithOffset<R = unknown, P0 = CGPoint>(_transformWithOffset: P0): R;
      transformByScaling<R = unknown, P0 = number>(_transformByScaling: P0): R;
      transformByTranslatingXBy_yBy<R = unknown, P0 = number, P1 = number>(_transformByTranslatingXBy: P0, _yBy: P1): R;
    }
  }
}

declare const NSAffineTransform: cocoa.NSAffineTransform.CLASS;
