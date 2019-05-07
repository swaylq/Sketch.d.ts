/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface BCTableCellView<T0 = void, T1 = void, T2 = void> extends NSTableCellView, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    cancelOperation<R = void, P0 = unknown>(_cancelOperation: P0): R;
    drawDragImageInRect<R = void, P0 = CGRect>(_drawDragImageInRect: P0): R;
    renameNode<R = void>(): R;
    updateMaskIcon<R = void>(): R;
    updatePreviewIcon<R = void>(): R;
    currentPreviewState<R = number>(): R;
    shouldDrawAsActive<R = boolean>(): R;
    verticalInsets<R = NSEdgeInsets>(): R;
    handleBadgePressed<R = void, P0 = unknown>(_handleBadgePressed: P0): R;
    updateBadge<R = void>(): R;
    updateBadgeImages<R = void>(): R;
    resolveCellViewContainingLocationOfEvent<R = unknown, P0 = unknown>(_resolveCellViewContainingLocationOfEvent: P0): R;
    isEventCurrent<R = boolean, P0 = unknown>(_isEventCurrent: P0): R;
    setObjectValue<R = void, P0 = unknown>(_setObjectValue: P0): R;
    stopObserving<R = void>(): R;
    refreshPreviewImages<R = void, P0 = unknown>(_refreshPreviewImages: P0): R;
    backgroundStyle<R = number>(): R;
    refreshTextColor<R = void>(): R;
    updateSelectionStateIfRequired<R = void>(): R;
    startObserving<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    awakeFromNib<R = void>(): R;
    isShowingImages<R = boolean>(): R;
    setIsShowingImages<R = void, P0 = boolean>(_v: P0): R;
    designedTextFieldTopPadding<R = number>(): R;
    maskPreviewView<R = BCSidebarPreviewImageView>(): R;
    setMaskPreviewView<R = void, P0 = BCSidebarPreviewImageView>(_v: P0): R;
    previewImages<R = NSDictionary>(): R;
    setPreviewImages<R = void, P0 = NSDictionary>(_v: P0): R;
    previewView<R = BCSidebarPreviewImageView>(): R;
    setPreviewView<R = void, P0 = BCSidebarPreviewImageView>(_v: P0): R;
    lastUpdatedTextWasEditing<R = boolean>(): R;
    setLastUpdatedTextWasEditing<R = void, P0 = boolean>(_v: P0): R;
    lastUpdatedPreviewState<R = number>(): R;
    setLastUpdatedPreviewState<R = void, P0 = number>(_v: P0): R;
    badgeConfigurator<R = BCOutlineViewPopupConfigurator>(): R;
    setBadgeConfigurator<R = void, P0 = BCOutlineViewPopupConfigurator>(_v: P0): R;
    booleanOpPopUpButton<R = NSPopUpButton>(): R;
    setBooleanOpPopUpButton<R = void, P0 = NSPopUpButton>(_v: P0): R;
    lockHideButton<R = NSButton>(): R;
    setLockHideButton<R = void, P0 = NSButton>(_v: P0): R;
    displayState<R = number>(): R;
    setDisplayState<R = void, P0 = number>(_v: P0): R;
    delegate<R = BCTableCellViewDelegate>(): R;
    setDelegate<R = void, P0 = BCTableCellViewDelegate>(_v: P0): R;
    destinationWindow<R = NSWindow>(): R;
    widthForDragImage<R = number>(): R;
    isTextFieldEditing<R = boolean>(): R;
    rowView<R = BCTableRowView>(): R;
    outlineView<R = BCOutlineView>(): R;
    badgeTrailingSpaceConstraint<R = NSLayoutConstraint>(): R;
    node<R = BCOutlineViewNode>(): R;
    isNodeLocked<R = boolean>(): R;
    isNodeContainedByHiddenAncestorNode<R = boolean>(): R;
    isNodeHidden<R = boolean>(): R;
    isNodeSelected<R = boolean>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace BCTableCellView {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSTableCellView, NSMenuDelegateProtocol {
      alloc<R = BCTableCellView>(): R;
      new: <R = BCTableCellView>() => R;
    }
  }
}

declare const BCTableCellView: cocoa.BCTableCellView.CLASS;
