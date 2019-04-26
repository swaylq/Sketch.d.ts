/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSDocumentRevisionsWindowTransformAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    _didStopAnimation<R = void, P0 = boolean>(__didStopAnimation: P0): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    startAnimation<R = void>(): R;
    _willStartAnimation<R = void>(): R;
    _resizesWindow<R = boolean>(): R;
    alphaValueForProgress<R = number, P0 = number>(_alphaValueForProgress: P0): R;
    frameForProgress<R = CGRect, P0 = number>(_frameForProgress: P0): R;
    sizeForProgress<R = CGSize, P0 = number>(_sizeForProgress: P0): R;
    scaleForProgress<R = CGSize, P0 = number>(_scaleForProgress: P0): R;
    translationForProgress<R = CGPoint, P0 = number>(_translationForProgress: P0): R;
    valueForKey_animation_progress<R = unknown, P0 = unknown, P1 = unknown, P2 = number>(_valueForKey: P0, _animation: P1, _progress: P2): R;
    anchorPoint<R = CGPoint>(): R;
    setAnimationCurve<R = void, P0 = number>(_setAnimationCurve: P0): R;
    setPrefersWindowTransform<R = void, P0 = boolean>(_setPrefersWindowTransform: P0): R;
    setStartFadeOutAtProgress<R = void, P0 = number>(_setStartFadeOutAtProgress: P0): R;
    window<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithWindow_startFrame_targetFrame<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect>(_initWithWindow: P0, _startFrame: P1, _targetFrame: P2): R;
    initWithWindow_startFrame_targetFrame_hop<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect, P3 = boolean>(_initWithWindow: P0, _startFrame: P1, _targetFrame: P2, _hop: P3): R;
    initWithWindow_startFrame_targetFrame_startSize_targetSize_hop<R = unknown, P0 = unknown, P1 = CGRect, P2 = CGRect, P3 = CGSize, P4 = CGSize, P5 = boolean>(_initWithWindow: P0, _startFrame: P1, _targetFrame: P2, _startSize: P3, _targetSize: P4, _hop: P5): R;
    _buildWindowTransformAnimations<R = void>(): R;
    _setTimingFunctionsForAnimationCurve<R = void, P0 = number>(__setTimingFunctionsForAnimationCurve: P0): R;
    keyFramesForAnimationWithSteps_evaluator<R = unknown, P0 = number, P1 = CDUnknownBlockType>(_keyFramesForAnimationWithSteps: P0, _evaluator: P1): R;
    _createScaleFunctionForStartScale_endScale_peakScale<R = CDUnknownBlockType, P0 = number, P1 = number, P2 = number>(__createScaleFunctionForStartScale: P0, _endScale: P1, _peakScale: P2): R;
    _screen<R = unknown>(): R;
    completionHandler<R = CDUnknownBlockType>(): R;
    setCompletionHandler<R = void, P0 = CDUnknownBlockType>(_v: P0): R;
  }
  namespace NSDocumentRevisionsWindowTransformAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = NSDocumentRevisionsWindowTransformAnimation>(): R;
      new: <R = NSDocumentRevisionsWindowTransformAnimation>() => R;
      resetTransformForWindow<R = void, P0 = unknown>(_resetTransformForWindow: P0): R;
    }
  }
}

declare const NSDocumentRevisionsWindowTransformAnimation: cocoa.NSDocumentRevisionsWindowTransformAnimation.CLASS;
