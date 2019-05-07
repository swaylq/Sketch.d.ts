/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarCollectionViewItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
    accessibilityAttributeValue<R = unknown, P0 = unknown>(_accessibilityAttributeValue: P0): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    setRepresentedObject<R = void, P0 = unknown>(_setRepresentedObject: P0): R;
    snapShotItemWithAvailableSize_isActive<R = unknown, P0 = CGSize, P1 = boolean>(_snapShotItemWithAvailableSize: P0, _isActive: P1): R;
    _isActiveState<R = boolean>(): R;
    _updateVisualState<R = void>(): R;
    _windowKeyChanged<R = void, P0 = unknown>(__windowKeyChanged: P0): R;
    snapshotWindow<R = NSToolbarSnapshotWindow>(): R;
    setSnapshotWindow<R = void, P0 = NSToolbarSnapshotWindow>(_v: P0): R;
  }
  namespace NSToolbarCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem {
      alloc<R = NSToolbarCollectionViewItem>(): R;
      new: <R = NSToolbarCollectionViewItem>() => R;
      labelForPaletteLabelString<R = unknown, P0 = unknown>(_labelForPaletteLabelString: P0): R;
      labelFont<R = unknown>(): R;
    }
  }
}

declare const NSToolbarCollectionViewItem: cocoa.NSToolbarCollectionViewItem.CLASS;
