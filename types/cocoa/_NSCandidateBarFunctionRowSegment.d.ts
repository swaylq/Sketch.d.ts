/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSCandidateBarFunctionRowSegment<T = any> extends cocoa.NSObject {
    drawWithForegroundOpacity<R = void, P0 = number>(_drawWithForegroundOpacity: P0): R;
    description<R = unknown>(): R;
    dealloc<R = void>(): R;
    initWithType_candidate_rect<R = unknown, P0 = number, P1 = unknown, P2 = cocoa.CGRect>(_initWithType: P0, _candidate: P1, _rect: P2): R;
    accessibilityValueAttribute<R = unknown>(): R;
    accessibilitySizeAttribute<R = unknown>(): R;
    accessibilityPositionAttribute<R = unknown>(): R;
    accessibilityTitleAttribute<R = unknown>(): R;
    accessibilityRoleDescriptionAttribute<R = unknown>(): R;
    accessibilityRoleAttribute<R = unknown>(): R;
    accessibilityParentAttribute<R = unknown>(): R;
    accessibilityPerformAction<R = void, P0 = unknown>(_accessibilityPerformAction: P0): R;
    accessibilityActionDescription<R = unknown, P0 = unknown>(_accessibilityActionDescription: P0): R;
    accessibilityActionNames<R = unknown>(): R;
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    accessibilityAttributeNames<R = unknown>(): R;
    accessibilityIsIgnored<R = boolean>(): R;
    accessibilityDelegate<R = cocoa._NSCandidateBarFunctionRowSegment_AccessibilityDelegate>(): R;
    setAccessibilityDelegate<R = void, P0 = cocoa._NSCandidateBarFunctionRowSegment_AccessibilityDelegate>(_v: P0): R;
    accessibilityParent<R = unknown>(): R;
    setAccessibilityParent<R = void, P0 = unknown>(_v: P0): R;
    accessibilityTitle<R = cocoa.NSString>(): R;
    setAccessibilityTitle<R = void, P0 = cocoa.NSString>(_v: P0): R;
    drawsRightToLeft<R = boolean>(): R;
    setDrawsRightToLeft<R = void, P0 = boolean>(_v: P0): R;
    roundRight<R = boolean>(): R;
    setRoundRight<R = void, P0 = boolean>(_v: P0): R;
    roundLeft<R = boolean>(): R;
    setRoundLeft<R = void, P0 = boolean>(_v: P0): R;
    correction<R = boolean>(): R;
    setCorrection<R = void, P0 = boolean>(_v: P0): R;
    pressed<R = boolean>(): R;
    setPressed<R = void, P0 = boolean>(_v: P0): R;
    hitTestRect<R = cocoa.CGRect>(): R;
    setHitTestRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    rect<R = cocoa.CGRect>(): R;
    setRect<R = void, P0 = cocoa.CGRect>(_v: P0): R;
    candidate<R = cocoa.NSCandidateBarCompositeCandidate>(): R;
    setCandidate<R = void, P0 = cocoa.NSCandidateBarCompositeCandidate>(_v: P0): R;
    segmentType<R = number>(): R;
    setSegmentType<R = void, P0 = number>(_v: P0): R;
  }
  namespace classes {
    export interface _NSCandidateBarFunctionRowSegment<T = any> extends cocoa.classes.NSObject {
      alloc<R = _NSCandidateBarFunctionRowSegment>(): R;
      new: <R = _NSCandidateBarFunctionRowSegment>() => R;
      segmentWithType_candidate_rect<R = unknown, P0 = number, P1 = unknown, P2 = cocoa.CGRect>(_segmentWithType: P0, _candidate: P1, _rect: P2): R;
    }
  }
}
