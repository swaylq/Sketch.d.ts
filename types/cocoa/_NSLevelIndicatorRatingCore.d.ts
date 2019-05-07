/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSLevelIndicatorRatingCore<T0 = void, T1 = void, T2 = void> extends NSObject, _NSLevelIndicatorCoreProtocol {
    _starAlignmentRectInsetsForState<R = NSEdgeInsets, P0 = unknown>(__starAlignmentRectInsetsForState: P0): R;
    _starAlignmentRectForState<R = CGRect, P0 = unknown>(__starAlignmentRectForState: P0): R;
    _starFrameForState<R = CGRect, P0 = unknown>(__starFrameForState: P0): R;
    _effectiveFillColorForState<R = unknown, P0 = unknown>(__effectiveFillColorForState: P0): R;
    _effectiveRatingPlaceholderImageForState<R = unknown, P0 = unknown>(__effectiveRatingPlaceholderImageForState: P0): R;
    _effectiveRatingImageForState<R = unknown, P0 = unknown>(__effectiveRatingImageForState: P0): R;
    _defaultPlaceholderFade<R = number>(): R;
    _defaultPlaceholderFillColor<R = unknown>(): R;
    _defaultFillColor<R = unknown>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace _NSLevelIndicatorRatingCore {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, _NSLevelIndicatorCoreProtocol {
      alloc<R = _NSLevelIndicatorRatingCore>(): R;
      new: <R = _NSLevelIndicatorRatingCore>() => R;
    }
  }
}
