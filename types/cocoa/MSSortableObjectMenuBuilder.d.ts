/// <reference no-default-lib="true" />

declare namespace cocoa {
  export interface MSSortableObjectMenuBuilder<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
    cxx_destruct<R = void>(): R;
    validateMenuItem<R = boolean, P0 = unknown>(_validateMenuItem: P0): R;
    applyStyleToMenuItem<R = void, P0 = unknown>(_applyStyleToMenuItem: P0): R;
    prepareForDisplay<R = void, P0 = unknown>(_prepareForDisplay: P0): R;
    updateImages<R = void>(): R;
    menuItemWithName_target_selector_sharedObjects<R = unknown, P0 = unknown, P1 = unknown, P2 = string, P3 = unknown>(_menuItemWithName: P0, _target: P1, _selector: P2, _sharedObjects: P3): R;
    sharedObjectsFromDescriptorsContents<R = unknown, P0 = unknown>(_sharedObjectsFromDescriptorsContents: P0): R;
    menuItemsForSortedSharedObjects_selectedObjects_target_selector<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_menuItemsForSortedSharedObjects: P0, _selectedObjects: P1, _target: P2, _selector: P3): R;
    menuItemsForSortableObjects_selectedObjects_target_selector<R = unknown, P0 = unknown, P1 = unknown, P2 = unknown, P3 = string>(_menuItemsForSortableObjects: P0, _selectedObjects: P1, _target: P2, _selector: P3): R;
    addSortedSharedObjects_selectedObjects_toMenu_target_selector<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = string>(_addSortedSharedObjects: P0, _selectedObjects: P1, _toMenu: P2, _target: P3, _selector: P4): R;
    selectMenuItemsInPopUpButton_selectedObjects<R = void, P0 = unknown, P1 = unknown>(_selectMenuItemsInPopUpButton: P0, _selectedObjects: P1): R;
    addSortableObjects_selectedObjects_toPopUpButton_target_selector<R = void, P0 = unknown, P1 = unknown, P2 = unknown, P3 = unknown, P4 = string>(_addSortableObjects: P0, _selectedObjects: P1, _toPopUpButton: P2, _target: P3, _selector: P4): R;
    initWithDelegate<R = unknown, P0 = unknown>(_initWithDelegate: P0): R;
    delegate<R = MSMenuBuilderDelegate>(): R;
    collatedImages<R = NSMapTable>(): R;
    debugDescription<R = NSString>(): R;
    description<R = NSString>(): R;
    hash<R = number>(): R;
    superclass<R = unknown>(): R;
  }
  namespace MSSortableObjectMenuBuilder {
    export interface CLASS<T0 = void, T1 = void, T2 = void> extends NSObject, NSMenuDelegateProtocol {
      alloc<R = MSSortableObjectMenuBuilder>(): R;
      new: <R = MSSortableObjectMenuBuilder>() => R;
    }
  }
}

declare const MSSortableObjectMenuBuilder: cocoa.MSSortableObjectMenuBuilder.CLASS;
