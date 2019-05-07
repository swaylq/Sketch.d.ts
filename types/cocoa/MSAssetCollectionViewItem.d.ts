/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetCollectionViewItem<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    commitNameEditing<R = void, P0 = unknown>(_commitNameEditing: P0): R;
    delete<R = void, P0 = unknown>(_delete: P0): R;
    rename<R = void, P0 = unknown>(_rename: P0): R;
    moveToAssetCollection<R = void, P0 = unknown>(_moveToAssetCollection: P0): R;
    copyToAssetCollection<R = void, P0 = unknown>(_copyToAssetCollection: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    endEditingMode<R = void>(): R;
    beginNameEditingMode<R = void>(): R;
    shouldStartEditingNameWithEvent<R = boolean, P0 = unknown>(_shouldStartEditingNameWithEvent: P0): R;
    updateUI<R = void>(): R;
    effectiveAssetName<R = unknown>(): R;
    defaultAssetName<R = unknown>(): R;
    drawBackgroundView_dirtyRect<R = void, P0 = unknown, P1 = CGRect>(_drawBackgroundView: P0, _dirtyRect: P1): R;
    drawAssetView_dirtyRect<R = void, P0 = unknown, P1 = CGRect>(_drawAssetView: P0, _dirtyRect: P1): R;
    shouldDrawHighlighted<R = boolean>(): R;
    setSelected<R = void, P0 = boolean>(_setSelected: P0): R;
    previewColorSpace<R = unknown>(): R;
    setViewsNeedDisplay<R = void>(): R;
    setAsset_name<R = void, P0 = unknown, P1 = unknown>(_setAsset: P0, _name: P1): R;
    itemSizeMode<R = number>(): R;
    setItemSizeMode<R = void, P0 = number>(_v: P0): R;
    displayMode<R = number>(): R;
    setDisplayMode<R = void, P0 = number>(_v: P0): R;
    leadingPreviewConstraint<R = NSLayoutConstraint>(): R;
    setLeadingPreviewConstraint<R = void, P0 = NSLayoutConstraint>(_v: P0): R;
    nameField<R = NSTextField>(): R;
    setNameField<R = void, P0 = NSTextField>(_v: P0): R;
    previewView<R = NSView>(): R;
    setPreviewView<R = void, P0 = NSView>(_v: P0): R;
    currentSpecialMenuItems<R = NSArray>(): R;
    setCurrentSpecialMenuItems<R = void, P0 = NSArray>(_v: P0): R;
    assetName<R = NSString>(): R;
    setAssetName<R = void, P0 = NSString>(_v: P0): R;
    asset<R = MSAsset>(): R;
    setAsset<R = void, P0 = MSAsset>(_v: P0): R;
    alternativeCollections<R = NSArray>(): R;
    setAlternativeCollections<R = void, P0 = NSArray>(_v: P0): R;
    assetHighlighted<R = boolean>(): R;
    setAssetHighlighted<R = void, P0 = boolean>(_v: P0): R;
    delegate<R = MSAssetCollectionViewItemDelegate>(): R;
    setDelegate<R = void, P0 = MSAssetCollectionViewItemDelegate>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetCollectionViewItem {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSCollectionViewItem, NSMenuDelegateProtocol {
      alloc<R = MSAssetCollectionViewItem>(): R;
      new: <R = MSAssetCollectionViewItem>() => R;
      drawAssetViewBackgroundReturningContentPathInBounds_highlighted_scale<R = unknown, P0 = CGRect, P1 = boolean, P2 = number>(_drawAssetViewBackgroundReturningContentPathInBounds: P0, _highlighted: P1, _scale: P2): R;
    }
  }
}

declare const MSAssetCollectionViewItem: cocoa.MSAssetCollectionViewItem.CLASS;
