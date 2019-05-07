/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCandidateBarFunctionRowButton<T0 = void, T1 = void, T2 = void> extends NSButton, _NSCandidateBarFunctionRowSegment_AccessibilityDelegateProtocol {
    convertLocation_toSegmentType_index<R = void, P0 = CGPoint, P1 = number, P2 = number>(_convertLocation: P0, _toSegmentType: P1, _index: P2): R;
    setFrame<R = void, P0 = CGRect>(_setFrame: P0): R;
    segments<R = unknown>(): R;
    layoutSegments<R = void>(): R;
    collapsedSegmentWithWidth<R = unknown, P0 = number>(_collapsedSegmentWithWidth: P0): R;
    scaleRightCandidate<R = boolean>(): R;
    collapsedCandidate<R = unknown>(): R;
    collapsingCandidate<R = unknown>(): R;
    collapsedAttributes<R = unknown>(): R;
    scaledAttributes<R = unknown>(): R;
    defaultAttributesWithImage_multipleLines<R = unknown, P0 = boolean, P1 = boolean>(_defaultAttributesWithImage: P0, _multipleLines: P1): R;
    setRight1_isPressed_right2_isPressed_right3_isPressed<R = void, P0 = unknown, P1 = boolean, P2 = unknown, P3 = boolean, P4 = unknown, P5 = boolean>(_setRight1: P0, _isPressed: P1, _right2: P2, _isPressed1: P3, _right3: P4, _isPressed2: P5): R;
    setMiddle_isPressed_isCorrection<R = void, P0 = unknown, P1 = boolean, P2 = boolean>(_setMiddle: P0, _isPressed: P1, _isCorrection: P2): R;
    setLeft_isPressed<R = void, P0 = unknown, P1 = boolean>(_setLeft: P0, _isPressed: P1): R;
    allowsCandidateVariation<R = boolean>(): R;
    setAllowsCandidateVariation<R = void, P0 = boolean>(_v: P0): R;
    layoutDone<R = boolean>(): R;
    setLayoutDone<R = void, P0 = boolean>(_v: P0): R;
    allowsCollapsing<R = boolean>(): R;
    setAllowsCollapsing<R = void, P0 = boolean>(_v: P0): R;
    collapsed<R = boolean>(): R;
    setCollapsed<R = void, P0 = boolean>(_v: P0): R;
    trackingTouch<R = NSTouch>(): R;
    setTrackingTouch<R = void, P0 = NSTouch>(_v: P0): R;
    controller<R = NSCandidateListViewController>(): R;
    setController<R = void, P0 = NSCandidateListViewController>(_v: P0): R;
    hasSplitRight<R = boolean>(): R;
    hasContent<R = boolean>(): R;
  }
  namespace _NSCandidateBarFunctionRowButton {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSButton, _NSCandidateBarFunctionRowSegment_AccessibilityDelegateProtocol {
      alloc<R = _NSCandidateBarFunctionRowButton>(): R;
      new: <R = _NSCandidateBarFunctionRowButton>() => R;
    }
  }
}
