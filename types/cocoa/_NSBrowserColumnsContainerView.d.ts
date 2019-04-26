/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserColumnsContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _scrollerStyleRecommendationChanged<R = void, P0 = unknown>(__scrollerStyleRecommendationChanged: P0): R;
    _ignoringScrolling<R = boolean>(): R;
    _setIgnoringScrolling<R = void, P0 = boolean>(__setIgnoringScrolling: P0): R;
    wantsUpdateLayer<R = boolean>(): R;
    isOpaque<R = boolean>(): R;
    preservesContentDuringLiveResize<R = boolean>(): R;
    _enclosingBrowserView<R = unknown>(): R;
  }
  namespace _NSBrowserColumnsContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSBrowserColumnsContainerView>(): R;
      new: <R = _NSBrowserColumnsContainerView>() => R;
    }
  }
}
