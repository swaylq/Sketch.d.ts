/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSArtboardPresetsViewController<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, MSEditArtboardPresetViewControllerDelegateProtocol, NSUserInterfaceValidationsProtocol, BCPopoverDelegateProtocol {
    cxx_destruct<R = void>(): R;
    viewForGroupRow<R = unknown, P0 = number>(_viewForGroupRow: P0): R;
    deleteRowAction<R = void, P0 = unknown>(_deleteRowAction: P0): R;
    editRowAction<R = void, P0 = unknown>(_editRowAction: P0): R;
    refresh<R = void>(): R;
    isFauxSeparatorSectionAtIndex<R = boolean, P0 = number>(_isFauxSeparatorSectionAtIndex: P0): R;
    isSectionAtIndex<R = boolean, P0 = number>(_isSectionAtIndex: P0): R;
    presetForPreset_landscape<R = unknown, P0 = unknown, P1 = boolean>(_presetForPreset: P0, _landscape: P1): R;
    rearrangeObjects<R = void>(): R;
    itemIsUserPreset<R = boolean, P0 = unknown>(_itemIsUserPreset: P0): R;
    addUserPreset<R = void, P0 = unknown>(_addUserPreset: P0): R;
    presetAtIndexPath<R = unknown, P0 = unknown>(_presetAtIndexPath: P0): R;
    refreshOrientationControl<R = void>(): R;
    selectOrientation<R = void, P0 = unknown>(_selectOrientation: P0): R;
    showCreateCustomSizeSheet<R = void, P0 = unknown>(_showCreateCustomSizeSheet: P0): R;
    selectCategory<R = void, P0 = unknown>(_selectCategory: P0): R;
    categoryForPreset<R = unknown, P0 = unknown>(_categoryForPreset: P0): R;
    artboardPresetStoreDidChange<R = void, P0 = unknown>(_artboardPresetStoreDidChange: P0): R;
    editingPreset<R = MSArtboardPreset>(): R;
    setEditingPreset<R = void, P0 = MSArtboardPreset>(_v: P0): R;
    arrangedObjects<R = NSArray>(): R;
    arrangedSections<R = NSArray>(): R;
    categories<R = NSArray>(): R;
    setCategories<R = void, P0 = NSArray>(_v: P0): R;
    tableView<R = NSTableView>(): R;
    setTableView<R = void, P0 = NSTableView>(_v: P0): R;
    orientationSegmentedControl<R = NSSegmentedControl>(): R;
    setOrientationSegmentedControl<R = void, P0 = NSSegmentedControl>(_v: P0): R;
    categoriesController<R = NSArrayController>(): R;
    setCategoriesController<R = void, P0 = NSArrayController>(_v: P0): R;
    delegate<R = MSArtboardPresetsViewControllerDelegate>(): R;
    setDelegate<R = void, P0 = MSArtboardPresetsViewControllerDelegate>(_v: P0): R;
    selectedPresetSize<R = CGSize>(): R;
    setSelectedPresetSize<R = void, P0 = CGSize>(_v: P0): R;
    extraPresets<R = NSArray>(): R;
    setExtraPresets<R = void, P0 = NSArray>(_v: P0): R;
    orientation<R = number>(): R;
    setOrientation<R = void, P0 = number>(_v: P0): R;
    selectedCategory<R = MSArtboardPresetsCategory>(): R;
    setSelectedCategory<R = void, P0 = MSArtboardPresetsCategory>(_v: P0): R;
    presetStore<R = MSArtboardPresetStore>(): R;
    setPresetStore<R = void, P0 = MSArtboardPresetStore>(_v: P0): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSArtboardPresetsViewController {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSViewController, NSTableViewDataSourceProtocol, NSTableViewDelegateProtocol, MSEditArtboardPresetViewControllerDelegateProtocol, NSUserInterfaceValidationsProtocol, BCPopoverDelegateProtocol {
      alloc<R = MSArtboardPresetsViewController>(): R;
      new: <R = MSArtboardPresetsViewController>() => R;
    }
  }
}

declare const MSArtboardPresetsViewController: cocoa.MSArtboardPresetsViewController.CLASS;
