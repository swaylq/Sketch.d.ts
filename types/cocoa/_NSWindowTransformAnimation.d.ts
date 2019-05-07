/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSWindowTransformAnimation<T0 = void, T1 = void, T2 = void> extends NSAnimation {
    dealloc<R = void>(): R;
    _duplicateAnimationStopped<R = void>(): R;
    _stopAnimation_withDisplayLink<R = void, P0 = number, P1 = unknown>(__stopAnimation: P0, _withDisplayLink: P1): R;
    _cleanUpAnimation<R = void>(): R;
    setCurrentProgress<R = void, P0 = number>(_setCurrentProgress: P0): R;
    startAnimation<R = void>(): R;
    finishConfiguration<R = void>(): R;
    _configureAnimationBlock<R = CDUnknownBlockType>(): R;
    _windowBaseAlphas<R = unknown>(): R;
    _windowTransformAnchors<R = unknown>(): R;
    _gatherChildWindowAnchors_forWindow_anchorPoint<R = void, P0 = unknown, P1 = unknown, P2 = CGPoint>(__gatherChildWindowAnchors: P0, _forWindow: P1, _anchorPoint: P2): R;
    _stringForAnimationType<R = unknown>(): R;
    setWindowSendDocmentUpTranslationProgress<R = void, P0 = number>(_setWindowSendDocmentUpTranslationProgress: P0): R;
    setWindowShakeProgress<R = void, P0 = number>(_setWindowShakeProgress: P0): R;
    setAnimationAlphaValue<R = void, P0 = number>(_setAnimationAlphaValue: P0): R;
    isOrderOutAnimation<R = boolean>(): R;
    isOrderFrontAnimation<R = boolean>(): R;
    setCompletionBlock<R = void, P0 = CDUnknownBlockType>(_setCompletionBlock: P0): R;
    initWithWindow_type_interruptingAnimation<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_initWithWindow: P0, _type: P1, _interruptingAnimation: P2): R;
    _screen<R = unknown>(): R;
    normalizedAnchorPoint<R = CGPoint>(): R;
    setNormalizedAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    startPoint<R = CGPoint>(): R;
    setStartPoint<R = void, P0 = CGPoint>(_v: P0): R;
    currentAnimationAlpha<R = number>(): R;
    window<R = NSWindow>(): R;
    _animatesAlpha<R = boolean>(): R;
    set_animatesAlpha<R = void, P0 = boolean>(_v: P0): R;
    anchorPoint<R = CGPoint>(): R;
    setAnchorPoint<R = void, P0 = CGPoint>(_v: P0): R;
    _scaleAmount<R = number>(): R;
    set_scaleAmount<R = void, P0 = number>(_v: P0): R;
  }
  namespace _NSWindowTransformAnimation {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSAnimation {
      alloc<R = _NSWindowTransformAnimation>(): R;
      new: <R = _NSWindowTransformAnimation>() => R;
      windowTransformAnimationWithWindow_type_interruptingAnimation<R = unknown, P0 = unknown, P1 = number, P2 = unknown>(_windowTransformAnimationWithWindow: P0, _type: P1, _interruptingAnimation: P2): R;
      waitForAnimationToCompleteOnWindows_forFullScreen<R = void, P0 = unknown, P1 = boolean>(_waitForAnimationToCompleteOnWindows: P0, _forFullScreen: P1): R;
      _originalDocumentWindowForWindow<R = unknown, P0 = unknown>(__originalDocumentWindowForWindow: P0): R;
      endDocumentWindowDuplication<R = void>(): R;
      beginDocumentWindowDuplicationForOriginalDocument<R = void, P0 = unknown>(_beginDocumentWindowDuplicationForOriginalDocument: P0): R;
      isRestoringPersistentWindows<R = boolean>(): R;
      endPersistentUIWindowRestoring<R = void>(): R;
      beginPersistentUIWindowRestoring<R = void>(): R;
      isDuplicatingADocumentWindow<R = boolean>(): R;
      endNewDocumentWindowCreation<R = void>(): R;
      beginNewDocumentWindowCreation<R = void>(): R;
    }
  }
}
