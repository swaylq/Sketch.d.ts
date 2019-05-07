/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSPSMatrix<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
    CGAffineTransform<R = CGAffineTransform>(): R;
    _computeInv<R = unknown>(): R;
    invTransformRect<R = unknown, P0 = CGRect>(_invTransformRect: P0): R;
    transformRect<R = unknown, P0 = CGRect>(_transformRect: P0): R;
    rotated<R = boolean>(): R;
    identity<R = boolean>(): R;
    makeIdentity<R = unknown>(): R;
    invTransform<R = unknown, P0 = CGPoint>(_invTransform: P0): R;
    transform<R = unknown, P0 = CGPoint>(_transform: P0): R;
    sendInv<R = unknown>(): R;
    send<R = unknown>(): R;
    concat<R = unknown, P0 = unknown>(_concat: P0): R;
    setFrameRotation<R = void, P0 = number>(_setFrameRotation: P0): R;
    translateTo<R = unknown, P0 = number>(_translateTo: P0): R;
    scaleTo<R = unknown, P0 = number>(_scaleTo: P0): R;
    rotateByAngle<R = void, P0 = number>(_rotateByAngle: P0): R;
    translateOriginToPoint<R = void, P0 = CGPoint>(_translateOriginToPoint: P0): R;
    scaleUnitSquareToSize<R = void, P0 = CGSize>(_scaleUnitSquareToSize: P0): R;
    getRotationAngle<R = number>(): R;
    _doRotationOnly<R = unknown>(): R;
  }
  namespace NSPSMatrix {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCodingProtocol {
      alloc<R = NSPSMatrix>(): R;
      new: <R = NSPSMatrix>() => R;
      matrixWithCGAffineTransform<R = unknown, P0 = CGAffineTransform>(_matrixWithCGAffineTransform: P0): R;
      initialize<R = void>(): R;
    }
  }
}

declare const NSPSMatrix: cocoa.NSPSMatrix.CLASS;
