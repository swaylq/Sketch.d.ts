/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSCachedImageRep<T0 = void, T1 = void, T2 = void> extends NSImageRep {
    pixelsHigh<R = number>(): R;
    pixelsWide<R = number>(): R;
    bitsPerSample<R = number>(): R;
    colorSpaceName<R = unknown>(): R;
    hasAlpha<R = boolean>(): R;
    setAlpha<R = void, P0 = boolean>(_setAlpha: P0): R;
    _computeParams<R = void>(): R;
    _cachedImageRepByResizingToSize_rescalingContent<R = unknown, P0 = CGSize, P1 = boolean>(__cachedImageRepByResizingToSize: P0, _rescalingContent: P1): R;
    _keepCacheWindow<R = boolean>(): R;
    _setKeepCacheWindow<R = void, P0 = boolean>(__setKeepCacheWindow: P0): R;
    _resizeCache_cachedSeparately_bps_numColors_hasAlpha<R = void, P0 = CGSize, P1 = boolean, P2 = number, P3 = number, P4 = boolean>(__resizeCache: P0, _cachedSeparately: P1, _bps: P2, _numColors: P3, _hasAlpha: P4): R;
    _transferCache<R = boolean, P0 = unknown>(__transferCache: P0): R;
    _cache<R = void>(): R;
    _copyNSCGImageRep<R = unknown>(): R;
    _canDrawOutsideOfItsBounds<R = boolean>(): R;
    isApplicableForRect_context_hints<R = boolean, P0 = CGRect, P1 = unknown, P2 = unknown>(_isApplicableForRect: P0, _context: P1, _hints: P2): R;
    rect<R = CGRect>(): R;
    _logicalWindowSpaceRect<R = CGRect>(): R;
    window<R = unknown>(): R;
    _isCachedSeparately<R = boolean>(): R;
    unlockFocus<R = void>(): R;
    lockFocusFlipped<R = void, P0 = boolean>(_lockFocusFlipped: P0): R;
    initWithCGImage_drawingRect_applicableForRect_context_hints<R = unknown, P0 = CGImage, P1 = CGRect, P2 = CGRect, P3 = unknown, P4 = unknown>(_initWithCGImage: P0, _drawingRect: P1, _applicableForRect: P2, _context: P3, _hints: P4): R;
    _initWithSize_depth_separate_alpha_allowDeep<R = unknown, P0 = CGSize, P1 = number, P2 = boolean, P3 = boolean, P4 = boolean>(__initWithSize: P0, _depth: P1, _separate: P2, _alpha: P3, _allowDeep: P4): R;
    initWithSize_depth_separate_alpha<R = unknown, P0 = CGSize, P1 = number, P2 = boolean, P3 = boolean>(_initWithSize: P0, _depth: P1, _separate: P2, _alpha: P3): R;
    _initWithSharedKitWindow_rect<R = unknown, P0 = number, P1 = CGRect>(__initWithSharedKitWindow: P0, _rect: P1): R;
    initWithWindow_rect<R = unknown, P0 = unknown, P1 = CGRect>(_initWithWindow: P0, _rect: P1): R;
  }
  namespace NSCachedImageRep {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSImageRep {
      alloc<R = NSCachedImageRep>(): R;
      new: <R = NSCachedImageRep>() => R;
    }
  }
}

declare const NSCachedImageRep: cocoa.NSCachedImageRep.CLASS;
