/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface NSToolbarConfigPanel<T0 = void, T1 = void, T2 = void> extends NSPanel, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDelegateFlowLayoutProtocol, NSCollectionViewDelegateProtocol {
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    _updateTouchBarWithToolbarDisplayMode<R = void, P0 = number>(__updateTouchBarWithToolbarDisplayMode: P0): R;
    _touchBarDisplayModeChanged<R = void, P0 = unknown>(__touchBarDisplayModeChanged: P0): R;
    _setDefaultToolbarItemSetFromMenuItem<R = void, P0 = unknown>(__setDefaultToolbarItemSetFromMenuItem: P0): R;
    preventsApplicationTerminationWhenModal<R = boolean>(): R;
    _spaceNeededForPaletteLabelsOfItem_preferredWidth<R = number, P0 = unknown, P1 = number>(__spaceNeededForPaletteLabelsOfItem: P0, _preferredWidth: P1): R;
    _loadData<R = void>(): R;
    _layoutPanelAndAdjustIfNecessary<R = void>(): R;
    _setBackingStoreResolution<R = number, P0 = number>(__setBackingStoreResolution: P0): R;
    _loadIndividualItemsCollectionView<R = void>(): R;
    _loadDefaultSetImageRep<R = void>(): R;
    _createOffscreenDefaultImageRepSetWindow<R = unknown>(): R;
    _setUpTextField<R = void, P0 = unknown>(__setUpTextField: P0): R;
    _shouldUseTexturedAppearanceForSegmentedCellInView<R = boolean, P0 = unknown>(__shouldUseTexturedAppearanceForSegmentedCellInView: P0): R;
    ok<R = void, P0 = unknown>(_ok: P0): R;
    _addCursorRect_cursor_forView<R = boolean, P0 = CGRect, P1 = unknown, P2 = unknown>(__addCursorRect: P0, _cursor: P1, _forView: P2): R;
    editedToolbar<R = unknown>(): R;
    _orderFrontRelativeToWindow<R = void, P0 = unknown>(__orderFrontRelativeToWindow: P0): R;
    _shouldSuppressRolloversForSegmentedCellInView<R = boolean, P0 = unknown>(__shouldSuppressRolloversForSegmentedCellInView: P0): R;
    _finishInitialization<R = void>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace NSToolbarConfigPanel {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSPanel, NSCollectionViewDataSourceProtocol, NSTouchBarCustomizationPaletteLayoutDelegateProtocol, NSCollectionViewDelegateFlowLayoutProtocol, NSCollectionViewDelegateProtocol {
      alloc<R = NSToolbarConfigPanel>(): R;
      new: <R = NSToolbarConfigPanel>() => R;
      toolbarConfigPanelForToolbar_withWidth<R = unknown, P0 = unknown, P1 = number>(_toolbarConfigPanelForToolbar: P0, _withWidth: P1): R;
      _nibName<R = unknown>(): R;
    }
  }
}

declare const NSToolbarConfigPanel: cocoa.NSToolbarConfigPanel.CLASS;
