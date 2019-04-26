/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface QLPreviewMenuItemDelegateProtocol<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {
    menuItemDidClose<R = void, P0 = NSMenuItem>(_menuItemDidClose: P0): R;
    menuItemWillAppear<R = void, P0 = NSMenuItem>(_menuItemWillAppear: P0): R;
    menuItem_maxSizeForPoint<R = CGSize, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _maxSizeForPoint: P1): R;
    menuItem_itemFrameForPoint<R = CGRect, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _itemFrameForPoint: P1): R;
    menuItem_aimPointForPoint<R = CGPoint, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _aimPointForPoint: P1): R;
    menuItem_preferredEdgeForPoint<R = number, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _preferredEdgeForPoint: P1): R;
    menuItem_previewItemAtPoint<R = QLPreviewItem, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _previewItemAtPoint: P1): R;
    menuItem_viewAtScreenPoint<R = NSView, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _viewAtScreenPoint: P1): R;
    menuItem_shouldPositionNearPreviewItemAtScreenPoint<R = boolean, P0 = NSMenuItem, P1 = CGPoint>(_menuItem: P0, _shouldPositionNearPreviewItemAtScreenPoint: P1): R;
  }
  namespace QLPreviewMenuItemDelegateProtocol {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObjectProtocol {}
  }
}
