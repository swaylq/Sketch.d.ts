/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface _NSBrowserTitlesContainerView<T0 = void, T1 = void, T2 = void> extends NSView {
    _enclosingBrowserView<R = unknown>(): R;
    accessibilitySizeOfChild<R = unknown, P0 = unknown>(_accessibilitySizeOfChild: P0): R;
    accessibilityPositionOfChild<R = unknown, P0 = unknown>(_accessibilityPositionOfChild: P0): R;
    accessibilityIsChildFocusable<R = boolean, P0 = unknown>(_accessibilityIsChildFocusable: P0): R;
    accessibilityHelpStringForChild<R = unknown, P0 = unknown>(_accessibilityHelpStringForChild: P0): R;
    _accessibilityTitleForColumn<R = unknown, P0 = number>(__accessibilityTitleForColumn: P0): R;
  }
  namespace _NSBrowserTitlesContainerView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView {
      alloc<R = _NSBrowserTitlesContainerView>(): R;
      new: <R = _NSBrowserTitlesContainerView>() => R;
    }
  }
}
