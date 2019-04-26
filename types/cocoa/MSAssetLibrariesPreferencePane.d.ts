/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSAssetLibrariesPreferencePane<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, MSAssetPreferenceItemDelegateProtocol, MSDropableViewDelegateProtocol, QLPreviewPanelDataSourceProtocol, QLPreviewPanelDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSTextFieldDelegateProtocol {
    libraryControllerDidChange<R = void, P0 = unknown>(_libraryControllerDidChange: P0): R;
    learnMoreAboutLibraries<R = void, P0 = unknown>(_learnMoreAboutLibraries: P0): R;
    updateQLPreview<R = void>(): R;
    endPreviewPanelControl<R = void, P0 = unknown>(_endPreviewPanelControl: P0): R;
    beginPreviewPanelControl<R = void, P0 = unknown>(_beginPreviewPanelControl: P0): R;
    acceptsPreviewPanelControl<R = boolean, P0 = unknown>(_acceptsPreviewPanelControl: P0): R;
    toggleQLPreview<R = void, P0 = unknown>(_toggleQLPreview: P0): R;
    menuForEvent<R = unknown, P0 = unknown>(_menuForEvent: P0): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    validateLocateLibraryMenuItem<R = boolean, P0 = unknown>(_validateLocateLibraryMenuItem: P0): R;
    locateLibraryAction<R = void, P0 = unknown>(_locateLibraryAction: P0): R;
    canLocateLibrary<R = boolean, P0 = unknown>(_canLocateLibrary: P0): R;
    validateOpenInSketchMenuItem<R = boolean, P0 = unknown>(_validateOpenInSketchMenuItem: P0): R;
    openInSketchAction<R = void, P0 = unknown>(_openInSketchAction: P0): R;
    validateRemoveLibraryMenuItem<R = boolean, P0 = unknown>(_validateRemoveLibraryMenuItem: P0): R;
    removeLibraryAction<R = void, P0 = unknown>(_removeLibraryAction: P0): R;
    availableUserLibrariesFromLibraries<R = boolean, P0 = unknown>(_availableUserLibrariesFromLibraries: P0): R;
    sketchShareURLsFromLibraries<R = unknown, P0 = unknown>(_sketchShareURLsFromLibraries: P0): R;
    validateRevealInFinderMenuItem<R = boolean, P0 = unknown>(_validateRevealInFinderMenuItem: P0): R;
    revealInFinderAction<R = void, P0 = unknown>(_revealInFinderAction: P0): R;
    validateToggleLibraryMenuItem<R = boolean, P0 = unknown>(_validateToggleLibraryMenuItem: P0): R;
    multipleLibrariesSelected<R = boolean>(): R;
    toggleLibraryEnabled<R = void, P0 = unknown>(_toggleLibraryEnabled: P0): R;
    hasDisabledLibrariesSelected<R = boolean>(): R;
    draggedURLsFromPasteboard<R = unknown, P0 = unknown>(_draggedURLsFromPasteboard: P0): R;
    displayCloudAlertSheetForError<R = void, P0 = unknown>(_displayCloudAlertSheetForError: P0): R;
    displayDuplicateAlertSheetForRemoteAssetLibrary<R = void, P0 = unknown>(_displayDuplicateAlertSheetForRemoteAssetLibrary: P0): R;
    displayInstallerAlertSheetForRemoteAssetLibrary<R = void>(): R;
    displayGenericAlertSheetWithError_completionHandler<R = void, P0 = unknown, P1 = CDUnknownBlockType>(_displayGenericAlertSheetWithError: P0, _completionHandler: P1): R;
    displayAlertSheetWithMessageText_informativeText_buttonTitle_cancelButton_completionHandler<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = CDUnknownBlockType>(_displayAlertSheetWithMessageText: P0, _informativeText: P1, _buttonTitle: P2, _cancelButton: P3, _completionHandler: P4): R;
    tableCellForLibrary<R = unknown, P0 = unknown>(_tableCellForLibrary: P0): R;
    startDownloadForRemoteLibrary<R = void, P0 = unknown>(_startDownloadForRemoteLibrary: P0): R;
    updateAvailableForRemoteLibrary<R = void, P0 = unknown>(_updateAvailableForRemoteLibrary: P0): R;
    reloadSelectingLibrary<R = void, P0 = unknown>(_reloadSelectingLibrary: P0): R;
    showContextMenu<R = void, P0 = unknown>(_showContextMenu: P0): R;
    currentLibrary<R = unknown>(): R;
    addLibrariesFromURLS<R = void, P0 = unknown>(_addLibrariesFromURLS: P0): R;
    importLibraryAction<R = void, P0 = unknown>(_importLibraryAction: P0): R;
    addNextLibraryFromURLs<R = void, P0 = unknown>(_addNextLibraryFromURLs: P0): R;
    searchString<R = unknown>(): R;
    controlTextDidEndEditing<R = void, P0 = unknown>(_controlTextDidEndEditing: P0): R;
    doesNewPredicateGiveDifferentResult<R = boolean, P0 = unknown>(_doesNewPredicateGiveDifferentResult: P0): R;
    controlTextDidChange<R = void, P0 = unknown>(_controlTextDidChange: P0): R;
    activateSearchField<R = void, P0 = unknown>(_activateSearchField: P0): R;
    syncLibraryItems<R = void>(): R;
    librariesFilterPredicate<R = NSPredicate>(): R;
    setLibrariesFilterPredicate<R = void, P0 = NSPredicate>(_v: P0): R;
    genericAlertWindow<R = NSWindow>(): R;
    setGenericAlertWindow<R = void, P0 = NSWindow>(_v: P0): R;
    chooseLibraryPanelWindow<R = NSWindow>(): R;
    setChooseLibraryPanelWindow<R = void, P0 = NSWindow>(_v: P0): R;
    duplicateLibraryAlertWindow<R = NSWindow>(): R;
    setDuplicateLibraryAlertWindow<R = void, P0 = NSWindow>(_v: P0): R;
    libraryInstallerAlertWindow<R = NSWindow>(): R;
    setLibraryInstallerAlertWindow<R = void, P0 = NSWindow>(_v: P0): R;
    shouldEnableCogMenu<R = boolean>(): R;
    setShouldEnableCogMenu<R = void, P0 = boolean>(_v: P0): R;
    hasAssets<R = boolean>(): R;
    setHasAssets<R = void, P0 = boolean>(_v: P0): R;
    filterTextField<R = NSSearchField>(): R;
    setFilterTextField<R = void, P0 = NSSearchField>(_v: P0): R;
    spyglassFilterButton<R = NSButton>(): R;
    setSpyglassFilterButton<R = void, P0 = NSButton>(_v: P0): R;
    contextMenu<R = NSMenu>(): R;
    setContextMenu<R = void, P0 = NSMenu>(_v: P0): R;
    items<R = NSArray>(): R;
    setItems<R = void, P0 = NSArray>(_v: P0): R;
    librariesArrayController<R = NSArrayController>(): R;
    setLibrariesArrayController<R = void, P0 = NSArrayController>(_v: P0): R;
    tableView<R = MSAssetLibraryTableView>(): R;
    setTableView<R = void, P0 = MSAssetLibraryTableView>(_v: P0): R;
    selectedLibraries<R = NSArray>(): R;
    selection<R = NSArray>(): R;
    assetLibraryController<R = MSAssetLibraryController>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSAssetLibrariesPreferencePane {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends MSPreferencePane, MSAssetPreferenceItemDelegateProtocol, MSDropableViewDelegateProtocol, QLPreviewPanelDataSourceProtocol, QLPreviewPanelDelegateProtocol, NSTableViewDelegateProtocol, NSTableViewDataSourceProtocol, NSTextFieldDelegateProtocol {
      alloc<R = MSAssetLibrariesPreferencePane>(): R;
      new: <R = MSAssetLibrariesPreferencePane>() => R;
    }
  }
}

declare const MSAssetLibrariesPreferencePane: cocoa.MSAssetLibrariesPreferencePane.CLASS;
