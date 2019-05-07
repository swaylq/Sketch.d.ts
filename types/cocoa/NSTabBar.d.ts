/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSTabBar<T0 = void, T1 = void, T2 = void> extends NSView, NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol, NSMorphingDragImageControllerDragSourceProtocol, NSAnimationDelegateProtocol, NSDraggingDestinationProtocol, NSTabButtonDelegateProtocol, NSTabBarSyncedButtonDelegateProtocol, NSTabDraggingDestinationProtocol {}
  namespace NSTabBar {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSView, NSDetachedTabDraggingImageToWindowTransitionControllerDelegateProtocol, NSMorphingDragImageControllerDragSourceProtocol, NSAnimationDelegateProtocol, NSDraggingDestinationProtocol, NSTabButtonDelegateProtocol, NSTabBarSyncedButtonDelegateProtocol, NSTabDraggingDestinationProtocol {
      alloc<R = NSTabBar>(): R;
      new: <R = NSTabBar>() => R;
      accessibilityLabelForNumberOfTabs_andNumberOfPinnedTabs<R = unknown, P0 = number, P1 = number>(_accessibilityLabelForNumberOfTabs: P0, _andNumberOfPinnedTabs: P1): R;
    }
  }
}

declare const NSTabBar: cocoa.NSTabBar.CLASS;
