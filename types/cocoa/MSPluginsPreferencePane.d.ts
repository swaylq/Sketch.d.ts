/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSPluginsPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, NSTableViewDelegateProtocol, MSDropableViewDelegateProtocol, NSTextFieldDelegateProtocol {
    installPluginsWithURLArray<R = void, P0 = unknown>(_installPluginsWithURLArray: P0): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    updateAndReloadPluginsWithBlock<R = void, P0 = CDUnknownBlockType>(_updateAndReloadPluginsWithBlock: P0): R;
    doAnyPluginsSupplyData<R = boolean, P0 = unknown>(_doAnyPluginsSupplyData: P0): R;
    makePluginCellView<R = unknown>(): R;
    attributedStringUpdateAvailableLinkForString<R = unknown, P0 = unknown>(_attributedStringUpdateAvailableLinkForString: P0): R;
    configurePluginUpdateInfoButton_withPluginInfo<R = void, P0 = unknown, P1 = unknown>(_configurePluginUpdateInfoButton: P0, _withPluginInfo: P1): R;
    tableCellViewContainingControl<R = unknown, P0 = unknown>(_tableCellViewContainingControl: P0): R;
    rowForControl<R = number, P0 = unknown>(_rowForControl: P0): R;
    setSelectedIndexesFromSelectionIdentifierArray<R = void>(): R;
    setSelectionIdentifierArrayFromSelectionIndexes<R = void>(): R;
    addPluginEnableToggleMenuItemWithPluginInfos_toMenu<R = void, P0 = unknown, P1 = unknown>(_addPluginEnableToggleMenuItemWithPluginInfos: P0, _toMenu: P1): R;
    areAnyPluginsDisabled<R = boolean>(): R;
    areAnyPluginsEnabled<R = boolean>(): R;
    areAllPluginsDisabled<R = boolean, P0 = unknown>(_areAllPluginsDisabled: P0): R;
    disablePluginInfo<R = void, P0 = unknown>(_disablePluginInfo: P0): R;
    enablePluginInfo<R = void, P0 = unknown>(_enablePluginInfo: P0): R;
    disableAllPlugins<R = void, P0 = unknown>(_disableAllPlugins: P0): R;
    enableAllPlugins<R = void, P0 = unknown>(_enableAllPlugins: P0): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    menuNeedsUpdate<R = void, P0 = unknown>(_menuNeedsUpdate: P0): R;
    highlightPluginWithIdentifier<R = void, P0 = unknown>(_highlightPluginWithIdentifier: P0): R;
    viewDocumentation<R = void, P0 = unknown>(_viewDocumentation: P0): R;
    editCode<R = void, P0 = unknown>(_editCode: P0): R;
    revealInFinder<R = void, P0 = unknown>(_revealInFinder: P0): R;
    toggleItemsEnabled<R = void, P0 = unknown>(_toggleItemsEnabled: P0): R;
    toggleSelectedItemsEnabled<R = void>(): R;
    tableContextMenu<R = void, P0 = unknown>(_tableContextMenu: P0): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    getPlugins<R = void, P0 = unknown>(_getPlugins: P0): R;
    openPluginURL<R = void, P0 = unknown>(_openPluginURL: P0): R;
    installPluginUpdates<R = void, P0 = unknown>(_installPluginUpdates: P0): R;
    installPluginUpdate<R = void, P0 = unknown>(_installPluginUpdate: P0): R;
    togglePluginEnabled<R = void, P0 = unknown>(_togglePluginEnabled: P0): R;
    uninstallSelectedPlugins<R = void, P0 = unknown>(_uninstallSelectedPlugins: P0): R;
    uninstallPlugins<R = void, P0 = unknown>(_uninstallPlugins: P0): R;
    uninstallSheetInfoTextForPlugins<R = unknown, P0 = unknown>(_uninstallSheetInfoTextForPlugins: P0): R;
    uninstallSheetMessageTextForPlugins<R = unknown, P0 = unknown>(_uninstallSheetMessageTextForPlugins: P0): R;
    openPluginsFolder<R = void, P0 = unknown>(_openPluginsFolder: P0): R;
    searchString<R = unknown>(): R;
    updateUIForPluginsChange<R = void>(): R;
    observeValueForKeyPath_ofObject_change_context<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = void>(_observeValueForKeyPath: P0, _ofObject: P1, _change: P2, _context: P3): R;
    awakeFromNib<R = void>(): R;
    tableCellViewNib<R = NSNib>(): R;
    setTableCellViewNib<R = void, P0 = NSNib>(_v: P0): R;
    selectedItemIdentifiers<R = NSArray>(): R;
    setSelectedItemIdentifiers<R = void, P0 = NSArray>(_v: P0): R;
    originalHeightIncompatiblePlugin<R = number>(): R;
    setOriginalHeightIncompatiblePlugin<R = void, P0 = number>(_v: P0): R;
    originalHeightUpdatesAvailable<R = number>(): R;
    setOriginalHeightUpdatesAvailable<R = void, P0 = number>(_v: P0): R;
    zeroPluginsImageView<R = NSImageView>(): R;
    setZeroPluginsImageView<R = void, P0 = NSImageView>(_v: P0): R;
    observingPlugins<R = boolean>(): R;
    setObservingPlugins<R = void, P0 = boolean>(_v: P0): R;
    rowHeightCache<R = NSCache>(): R;
    setRowHeightCache<R = void, P0 = NSCache>(_v: P0): R;
    filteredPlugins<R = NSArray>(): R;
    setFilteredPlugins<R = void, P0 = NSArray>(_v: P0): R;
    pluginManager<R = MSPluginManager>(): R;
    setPluginManager<R = void, P0 = MSPluginManager>(_v: P0): R;
    enableUpdateAllButton<R = boolean>(): R;
    setEnableUpdateAllButton<R = void, P0 = boolean>(_v: P0): R;
    spyglassFilterButton<R = NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = NSButton>(_v: P0): R;
    contextMenu<R = NSMenu>(): R;
    setContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    contextMenuControl<R = NSControl>(): R;
    setContextMenuControl<R = void, P0 = NSControl>(_v: P0): R;
    getPluginsButton<R = NSButton>(): R;
    setGetPluginsButton<R = void, P0 = NSButton>(_v: P0): R;
    tableView<R = BCKeyEventActionTableView>(): R;
    setTableView<R = void, P0 = BCKeyEventActionTableView>(_v: P0): R;
    filterTextField<R = NSSearchField>(): R;
    setFilterTextField<R = void, P0 = NSSearchField>(_v: P0): R;
    zeroPluginsText<R = NSString>(): R;
    setZeroPluginsText<R = void, P0 = NSString>(_v: P0): R;
    zeroPluginsTitle<R = NSString>(): R;
    setZeroPluginsTitle<R = void, P0 = NSString>(_v: P0): R;
    zeroPluginsImage<R = NSImage>(): R;
    setZeroPluginsImage<R = void, P0 = NSImage>(_v: P0): R;
    pluginFilterPredicate<R = NSPredicate>(): R;
    setPluginFilterPredicate<R = void, P0 = NSPredicate>(_v: P0): R;
    pluginsArrayController<R = NSArrayController>(): R;
    setPluginsArrayController<R = void, P0 = NSArrayController>(_v: P0): R;
    pluginCellViewForHeightCalculations<R = MSPluginsPreferenceTableCellView>(): R;
    pluginSortDescriptors<R = NSArray>(): R;
    updatesAvailable<R = boolean>(): R;
    zeroPluginsTitleFont<R = NSFont>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSPluginsPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, NSTableViewDelegateProtocol, MSDropableViewDelegateProtocol, NSTextFieldDelegateProtocol {
      alloc<R = MSPluginsPreferencePane>(): R;
      new: <R = MSPluginsPreferencePane>() => R;
      openWithPluginToHighlight<R = void, P0 = unknown>(_openWithPluginToHighlight: P0): R;
    }
  }
}

declare const MSPluginsPreferencePane: cocoa.MSPluginsPreferencePane.CLASS;
