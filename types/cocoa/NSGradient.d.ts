/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSGradient<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
    _isValidDecodedColorArray_error<R = boolean, P0 = unknown, P1 = unknown>(__isValidDecodedColorArray: P0, _error: P1): R;
    encodeWithCoder<R = void, P0 = unknown>(_encodeWithCoder: P0): R;
    initWithCoder<R = unknown, P0 = unknown>(_initWithCoder: P0): R;
    copy<R = unknown>(): R;
    interpolatedColorAtLocation<R = unknown, P0 = number>(_interpolatedColorAtLocation: P0): R;
    getColor_location_atIndex<R = void, P0 = unknown, P1 = number, P2 = number>(_getColor: P0, _location: P1, _atIndex: P2): R;
    drawInBezierPath_relativeCenterPosition<R = void, P0 = unknown, P1 = CGPoint>(_drawInBezierPath: P0, _relativeCenterPosition: P1): R;
    drawInRect_relativeCenterPosition<R = void, P0 = CGRect, P1 = CGPoint>(_drawInRect: P0, _relativeCenterPosition: P1): R;
    drawFromCenter_radius_toCenter_radius_options<R = void, P0 = CGPoint, P1 = number, P2 = CGPoint, P3 = number, P4 = number>(_drawFromCenter: P0, _radius: P1, _toCenter: P2, _radius1: P3, _options: P4): R;
    drawInBezierPath_angle<R = void, P0 = unknown, P1 = number>(_drawInBezierPath: P0, _angle: P1): R;
    drawInRect_angle<R = void, P0 = CGRect, P1 = number>(_drawInRect: P0, _angle: P1): R;
    drawFromPoint_toPoint_options<R = void, P0 = CGPoint, P1 = CGPoint, P2 = number>(_drawFromPoint: P0, _toPoint: P1, _options: P2): R;
    dealloc<R = void>(): R;
    initWithColors_atLocations_colorSpace<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithColors: P0, _atLocations: P1, _colorSpace: P2): R;
    initWithColorsAndLocations<R = unknown, P0 = unknown>(_initWithColorsAndLocations: P0): R;
    initWithColors<R = unknown, P0 = unknown>(_initWithColors: P0): R;
    initWithStartingColor_endingColor<R = unknown, P0 = unknown, P1 = unknown>(_initWithStartingColor: P0, _endingColor: P1): R;
    _initWithColorSpace_callbacks_data<R = unknown, P0 = unknown, P1 = CGFunctionCallbacks, P2 = void>(__initWithColorSpace: P0, _callbacks: P1, _data: P2): R;
    _commonInitWithColorArray_colorSpace_padStart_padEnd<R = void, P0 = unknown, P1 = unknown, P2 = boolean, P3 = boolean>(__commonInitWithColorArray: P0, _colorSpace: P1, _padStart: P2, _padEnd: P3): R;
    _interpolationFunctionRefWithCallbacks<R = CGFunction, P0 = CGFunctionCallbacks>(__interpolationFunctionRefWithCallbacks: P0): R;
    _colorSpaceForColorArray<R = unknown, P0 = unknown>(__colorSpaceForColorArray: P0): R;
    numberOfColorStops<R = number>(): R;
    colorSpace<R = NSColorSpace>(): R;
    // + NSGradient(SketchModel): 
    interpolatedGradientWithExtraStops_function<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_interpolatedGradientWithExtraStops: P0, _function: P1): R;
  }
  namespace NSGradient {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSCopyingProtocol, NSSecureCodingProtocol {
      alloc<R = NSGradient>(): R;
      new: <R = NSGradient>() => R;
      initialize<R = void>(): R;
      _windowBorderGradientFromGrayValue_toGrayValue_colorSpace<R = unknown, P0 = number, P1 = number, P2 = unknown>(__windowBorderGradientFromGrayValue: P0, _toGrayValue: P1, _colorSpace: P2): R;
  
  }
  }
}

declare const NSGradient: cocoa.NSGradient.CLASS;
