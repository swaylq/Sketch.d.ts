/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSMenuServicesView<T = any> extends cocoa.NSView {
    sizeToFit<R = void>(): R;
    drawKeyEquivalentForItem_inRect_highlighted_backgroundStyle_clipRect<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = boolean, P3 = number, P4 = cocoa.CGRect>(_drawKeyEquivalentForItem: P0, _inRect: P1, _highlighted: P2, _backgroundStyle: P3, _clipRect: P4): R;
    drawTitle_inRect_highlighted_enabled_backgroundStyle_clipRect<R = void, P0 = unknown, P1 = cocoa.CGRect, P2 = boolean, P3 = boolean, P4 = number, P5 = cocoa.CGRect>(_drawTitle: P0, _inRect: P1, _highlighted: P2, _enabled: P3, _backgroundStyle: P4, _clipRect: P5): R;
    drawCategoryNameInRect_highlighted_backgroundStyle_clipRect<R = void, P0 = cocoa.CGRect, P1 = boolean, P2 = number, P3 = cocoa.CGRect>(_drawCategoryNameInRect: P0, _highlighted: P1, _backgroundStyle: P2, _clipRect: P3): R;
    drawImageInRect_backgroundStyle_clipRect<R = void, P0 = cocoa.CGRect, P1 = number, P2 = cocoa.CGRect>(_drawImageInRect: P0, _backgroundStyle: P1, _clipRect: P2): R;
    loadedImage<R = void, P0 = unknown>(_loadedImage: P0): R;
    setActualWidths<R = void, P0 = number>(_setActualWidths: P0): R;
    getMinimumWidths<R = void, P0 = number>(_getMinimumWidths: P0): R;
    computeMinimumWidthsIfNecessary<R = void>(): R;
    getMetrics_forWidths<R = void, P0 = cocoa.NSMenuServicesViewMetrics, P1 = number>(_getMetrics: P0, _forWidths: P1): R;
    computeMinimumMetrics<R = void, P0 = cocoa.NSMenuServicesViewMetrics>(_computeMinimumMetrics: P0): R;
    roundUpForTextMeasurement<R = number, P0 = number>(_roundUpForTextMeasurement: P0): R;
    categoryAttributes<R = unknown>(): R;
    highlightedCategoryAttributes<R = unknown>(): R;
    categoryColor<R = unknown>(): R;
    categoryHighlightColor<R = unknown>(): R;
    getKeyEquivalentCellForItem<R = unknown, P0 = unknown>(_getKeyEquivalentCellForItem: P0): R;
    representingMenuItem<R = unknown>(): R;
    isFlipped<R = boolean>(): R;
    title<R = unknown>(): R;
    flipHorizontallyIfNecessary<R = cocoa.CGRect, P0 = cocoa.CGRect>(_flipHorizontallyIfNecessary: P0): R;
    explicitMenuItem<R = cocoa.NSMenuItem>(): R;
    setExplicitMenuItem<R = void, P0 = cocoa.NSMenuItem>(_v: P0): R;
    bundlePath<R = cocoa.NSString>(): R;
    setBundlePath<R = void, P0 = cocoa.NSString>(_v: P0): R;
    categoryName<R = cocoa.NSString>(): R;
    setCategoryName<R = void, P0 = cocoa.NSString>(_v: P0): R;
    iconIsDefaultBrowser<R = boolean>(): R;
    setIconIsDefaultBrowser<R = void, P0 = boolean>(_v: P0): R;
    shouldDrawCategoryArea<R = boolean>(): R;
    setShouldDrawCategoryArea<R = void, P0 = boolean>(_v: P0): R;
    isNoServicesApplyItem<R = boolean>(): R;
    setIsNoServicesApplyItem<R = void, P0 = boolean>(_v: P0): R;
    isEditServicesItem<R = boolean>(): R;
    setIsEditServicesItem<R = void, P0 = boolean>(_v: P0): R;
    isSpacer<R = boolean>(): R;
    setIsSpacer<R = void, P0 = boolean>(_v: P0): R;
    shouldDrawCategoryName<R = boolean>(): R;
    setShouldDrawCategoryName<R = void, P0 = boolean>(_v: P0): R;
  }
  namespace classes {
    export interface _NSMenuServicesView<T = any> extends cocoa.classes.NSView {
      alloc<R = _NSMenuServicesView>(): R;
      new: <R = _NSMenuServicesView>() => R;
    }
  }
}
