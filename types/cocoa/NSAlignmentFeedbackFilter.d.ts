/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSAlignmentFeedbackFilter<T0 = void, T1 = void, T2 = void> extends NSObject {
    performFeedback_performanceTime<R = void, P0 = unknown, P1 = number>(_performFeedback: P0, _performanceTime: P1): R;
    alignmentFeedbackTokenForVerticalMovementInView_previousY_alignedY_defaultY<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_alignmentFeedbackTokenForVerticalMovementInView: P0, _previousY: P1, _alignedY: P2, _defaultY: P3): R;
    alignmentFeedbackTokenForHorizontalMovementInView_previousX_alignedX_defaultX<R = unknown, P0 = unknown, P1 = number, P2 = number, P3 = number>(_alignmentFeedbackTokenForHorizontalMovementInView: P0, _previousX: P1, _alignedX: P2, _defaultX: P3): R;
    alignmentFeedbackTokenForMovementInView_previousPoint_alignedPoint_defaultPoint<R = unknown, P0 = unknown, P1 = CGPoint, P2 = CGPoint, P3 = CGPoint>(_alignmentFeedbackTokenForMovementInView: P0, _previousPoint: P1, _alignedPoint: P2, _defaultPoint: P3): R;
    _updateDragOnLocation_timestamp_modifierFlags_recognizer<R = void, P0 = CGPoint, P1 = number, P2 = number, P3 = unknown>(__updateDragOnLocation: P0, _timestamp: P1, _modifierFlags: P2, _recognizer: P3): R;
    updateWithPanRecognizer<R = void, P0 = unknown>(_updateWithPanRecognizer: P0): R;
    updateWithEvent<R = void, P0 = unknown>(_updateWithEvent: P0): R;
    dealloc<R = void>(): R;
    _alignmentFeedbackFilterImpl<R = unknown>(): R;
    _setSnapDistance<R = void, P0 = number>(__setSnapDistance: P0): R;
    _setActuationBlock_coalesce<R = void, P0 = CDUnknownBlockType, P1 = boolean>(__setActuationBlock: P0, _coalesce: P1): R;
    _actuationBlock<R = CDUnknownBlockType>(): R;
  }
  namespace NSAlignmentFeedbackFilter {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject {
      alloc<R = NSAlignmentFeedbackFilter>(): R;
      new: <R = NSAlignmentFeedbackFilter>() => R;
      inputEventMask<R = number>(): R;
    }
  }
}

declare const NSAlignmentFeedbackFilter: cocoa.NSAlignmentFeedbackFilter.CLASS;
