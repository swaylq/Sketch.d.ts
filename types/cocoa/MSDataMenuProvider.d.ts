/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSDataMenuProvider<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    pluginKeysDictionaryFromDataSuppliers<R = unknown, P0 = unknown>(_pluginKeysDictionaryFromDataSuppliers: P0): R;
    pluginNameForIdentifier<R = unknown, P0 = unknown>(_pluginNameForIdentifier: P0): R;
    sortedMenuItems<R = unknown, P0 = unknown>(_sortedMenuItems: P0): R;
    dataSuppliersForDataType<R = unknown, P0 = number>(_dataSuppliersForDataType: P0): R;
    menuItemsForDataType_indentationLevel<R = unknown, P0 = number, P1 = number>(_menuItemsForDataType: P0, _indentationLevel: P1): R;
    menuItemsForGroups_indentationLevel<R = unknown, P0 = unknown, P1 = number>(_menuItemsForGroups: P0, _indentationLevel: P1): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    menuItemAction<R = void, P0 = unknown>(_menuItemAction: P0): R;
    shadowImageFromImage<R = unknown, P0 = unknown>(_shadowImageFromImage: P0): R;
    addImageToMenuItems<R = unknown, P0 = unknown>(_addImageToMenuItems: P0): R;
    addDataSuppliersForType_toMenu_typeTitle<R = boolean, P0 = number, P1 = unknown, P2 = unknown>(_addDataSuppliersForType: P0, _toMenu: P1, _typeTitle: P2): R;
    updateMenu<R = void, P0 = unknown>(_updateMenu: P0): R;
    addMenusForMultipleTypesToMenu<R = void, P0 = unknown>(_addMenusForMultipleTypesToMenu: P0): R;
    updateOverridesMenu<R = void, P0 = unknown>(_updateOverridesMenu: P0): R;
    refreshDataMenuItemsWithOverridesMenu_displayKeyboardShortcuts<R = unknown, P0 = boolean, P1 = boolean>(_refreshDataMenuItemsWithOverridesMenu: P0, _displayKeyboardShortcuts: P1): R;
    clearDataMenuItem<R = unknown>(): R;
    overridesMenu<R = unknown>(): R;
    menu<R = unknown>(): R;
    initWithDataManager<R = unknown, P0 = unknown>(_initWithDataManager: P0): R;
    delegate<R = MSDataMenuProviderDelegate>(): R;
    setDelegate<R = void, P0 = MSDataMenuProviderDelegate>(_v: P0): R;
    dataManager<R = MSDataSupplierManager>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSDataMenuProvider {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = MSDataMenuProvider>(): R;
      new: <R = MSDataMenuProvider>() => R;
    }
  }
}

declare const MSDataMenuProvider: cocoa.MSDataMenuProvider.CLASS;
